package com.fr.swift.service;

import com.fr.swift.SwiftContext;
import com.fr.swift.config.service.SwiftSegmentService;
import com.fr.swift.event.SwiftEventDispatcher;
import com.fr.swift.event.SwiftEventListener;
import com.fr.swift.log.SwiftLoggers;
import com.fr.swift.repository.SwiftRepositoryManager;
import com.fr.swift.segment.SegmentKey;
import com.fr.swift.segment.SegmentUtils;
import com.fr.swift.segment.event.SegmentEvent;
import com.fr.swift.selector.ClusterSelector;

import java.io.IOException;
import java.util.Collections;

/**
 * @author anchore
 * @date 2018/9/11
 * @see SegmentEvent#REMOVE_HISTORY
 */
public class RemoveHistoryListener implements SwiftEventListener<SegmentKey> {

    private static final SwiftRepositoryManager REPO = SwiftContext.get().getBean(SwiftRepositoryManager.class);

    private static final SwiftSegmentService SEG_SVC = SwiftContext.get().getBean("segmentServiceProvider", SwiftSegmentService.class);

    @Override
    public void on(final SegmentKey segKey) {
        if (ClusterSelector.getInstance().getFactory().isCluster()) {
            String remote = String.format("%s/%s", segKey.getSwiftSchema().getDir(), segKey.getUri().getPath());
            try {
                REPO.currentRepo().delete(remote);

                SEG_SVC.removeSegments(Collections.singletonList(segKey));
                SegmentUtils.clearSegment(segKey);
            } catch (IOException e) {
                SwiftLoggers.getLogger().error("unload segment {} failed", segKey, e);
            }
        } else {
            SEG_SVC.removeSegments(Collections.singletonList(segKey));
            SegmentUtils.clearSegment(segKey);
        }
    }

    public static final RemoveHistoryListener INSTANCE = new RemoveHistoryListener();

    public static void listen() {
        SwiftEventDispatcher.listen(SegmentEvent.REMOVE_HISTORY, INSTANCE);
    }
}