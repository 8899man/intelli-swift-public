package com.fr.swift.service;

import com.fr.swift.basics.AsyncRpcCallback;
import com.fr.swift.basics.Invoker;
import com.fr.swift.basics.InvokerCreater;
import com.fr.swift.basics.RpcFuture;
import com.fr.swift.basics.URL;
import com.fr.swift.basics.annotation.Target;
import com.fr.swift.basics.base.handler.BaseSyncDataProcessHandler;
import com.fr.swift.basics.base.selector.UrlSelector;
import com.fr.swift.cluster.entity.ClusterEntity;
import com.fr.swift.cluster.service.ClusterSwiftServerService;
import com.fr.swift.config.service.DataSyncRuleService;
import com.fr.swift.config.service.SwiftClusterSegmentService;
import com.fr.swift.context.SwiftContext;
import com.fr.swift.event.analyse.SegmentLocationRpcEvent;
import com.fr.swift.event.base.EventResult;
import com.fr.swift.log.SwiftLoggers;
import com.fr.swift.segment.SegmentDestination;
import com.fr.swift.segment.SegmentKey;
import com.fr.swift.segment.SegmentLocationInfo;
import com.fr.swift.segment.impl.SegmentLocationInfoImpl;
import com.fr.swift.service.handler.SwiftServiceHandlerManager;
import com.fr.swift.source.SourceKey;
import com.fr.swift.util.MonitorUtil;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CountDownLatch;

/**
 * This class created on 2018/11/7
 *
 * @author Lucifer
 * @description
 * @since Advanced FineBI 5.0
 */
public class SwiftSyncDataProcessHandler extends BaseSyncDataProcessHandler {

    private DataSyncRuleService dataSyncRuleService;

    private SwiftClusterSegmentService clusterSegmentService;


    public SwiftSyncDataProcessHandler(InvokerCreater invokerCreater) {
        super(invokerCreater);
        dataSyncRuleService = SwiftContext.get().getBean(DataSyncRuleService.class);
        clusterSegmentService = SwiftContext.get().getBean(SwiftClusterSegmentService.class);
    }

    /**
     * 同步远程机器，history seg load
     *
     * @param method
     * @param target
     * @param args
     * @return
     * @throws Throwable
     */
    @Override
    public Object processResult(Method method, Target target, Object... args) throws Throwable {
        Class proxyClass = method.getDeclaringClass();
        Class<?>[] parameterTypes = method.getParameterTypes();
        String methodName = method.getName();
        try {
            MonitorUtil.start();
            final Map<SourceKey, List<SegmentDestination>> destinations = new HashMap<SourceKey, List<SegmentDestination>>();
            final boolean replace = (Boolean) args[1];
            Map<URL, Set<SegmentKey>> urlMap = processUrl(target, args, destinations);

            final List<EventResult> resultList = new ArrayList<EventResult>();
            final CountDownLatch latch = new CountDownLatch(urlMap.size());
            for (final Map.Entry<URL, Set<SegmentKey>> urlSetEntry : urlMap.entrySet()) {
//                final List<Pair<String, String>> idList = new ArrayList<Pair<String, String>>();
//                for (SegmentKey segmentKey : urlSetEntry.getValue()) {
//                    idList.add(Pair.of(segmentKey.getTable(), segmentKey));
//                }
                Invoker invoker = invokerCreater.createSyncInvoker(proxyClass, urlSetEntry.getKey());
                RpcFuture rpcFuture = (RpcFuture) invoke(invoker, proxyClass, method, methodName, parameterTypes, urlSetEntry.getValue(), replace);

                rpcFuture.addCallback(new AsyncRpcCallback() {
                    @Override
                    public void success(Object result) {
                        try {
                            Map<String, Set<SegmentKey>> segmentTable = new HashMap<String, Set<SegmentKey>>();
                            segmentTable.put(urlSetEntry.getKey().getDestination().getId(), urlSetEntry.getValue());
                            clusterSegmentService.updateSegmentTable(segmentTable);
                            SwiftServiceHandlerManager.getManager().
                                    handle(new SegmentLocationRpcEvent(replace ? SegmentLocationInfo.UpdateType.ALL : SegmentLocationInfo.UpdateType.PART
                                            , new SegmentLocationInfoImpl(ServiceType.HISTORY, destinations)));
                            resultList.add(new EventResult(urlSetEntry.getKey().getDestination().getId(), true));
                            latch.countDown();
                        } catch (Exception e) {
                            SwiftLoggers.getLogger().error(e);
                            fail(e);
                        }
                    }

                    @Override
                    public void fail(Exception e) {
                        EventResult eventResult = new EventResult(urlSetEntry.getKey().getDestination().getId(), false);
                        eventResult.setError(e.getMessage());
                        resultList.add(eventResult);
                        latch.countDown();
                    }
                });
            }
            latch.await();
            return resultList;
        } finally {
            MonitorUtil.finish(methodName);
        }
    }

    /**
     * 计算history seg分布结果
     * 计算远程url和segmentKey集合
     *
     * @param target
     * @param args   传入方法参数+destinations
     * @return
     */
    @Override
    public Map<URL, Set<SegmentKey>> processUrl(Target target, Object... args) {
        Map<String, ClusterEntity> services = ClusterSwiftServerService.getInstance().getClusterEntityByService(ServiceType.HISTORY);
        if (null == services || services.isEmpty()) {
            throw new RuntimeException("Cannot find history service");
        }
        Set<String> nodeIds = services.keySet();
        Set<SegmentKey> segmentKeys = (Set<SegmentKey>) args[0];
        Map<SourceKey, List<SegmentDestination>> destinations = (Map<SourceKey, List<SegmentDestination>>) args[2];

        Map<String, Set<SegmentKey>> segkeyDistribution = dataSyncRuleService.getCurrentRule().calculate(nodeIds, segmentKeys, destinations);

        Map<URL, Set<SegmentKey>> urlResultMap = new HashMap<URL, Set<SegmentKey>>();
        for (Map.Entry<String, Set<SegmentKey>> segkeyEntry : segkeyDistribution.entrySet()) {
            urlResultMap.put(UrlSelector.getInstance().getFactory().getURL(segkeyEntry.getKey()), segkeyEntry.getValue());
        }
        return urlResultMap;
    }

    @Override
    protected Object mergeResult(List resultList, Object... args) {
        return null;
    }

}
