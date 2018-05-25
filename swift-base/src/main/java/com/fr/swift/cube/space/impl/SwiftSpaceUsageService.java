package com.fr.swift.cube.space.impl;

import com.fr.swift.config.IConfigSegment;
import com.fr.swift.config.conf.bean.SegmentBean;
import com.fr.swift.config.conf.service.SwiftConfigService;
import com.fr.swift.config.conf.service.SwiftConfigServiceProvider;
import com.fr.swift.cube.io.ResourceDiscovery;
import com.fr.swift.cube.space.SpaceUsageDetector;
import com.fr.swift.cube.space.SpaceUsageService;
import com.fr.swift.segment.SegmentKey;
import com.fr.swift.source.SourceKey;

import java.io.File;
import java.net.URI;
import java.util.List;

/**
 * @author anchore
 * @date 2018/4/13
 */
public class SwiftSpaceUsageService implements SpaceUsageService {
    private SpaceUsageDetector detector = new LocalSpaceUsageDetector();

    private SwiftConfigService confSvc = SwiftConfigServiceProvider.getInstance();

    @Override
    public long getTableUsedSpace(SourceKey table) throws Exception {
        List<SegmentBean> segConf = confSvc.getSegmentByKey(table.getId());
        if (segConf == null || segConf.isEmpty()) {
            return 0;
        }
        long size = 0;
        for (SegmentKey seg : segConf) {
            size += detector.detectUsed(seg.getUri());
        }
        return size;
    }

    @Override
    public long getTableUsedSpace(List<SourceKey> tables) throws Exception {
        long used = 0;
        for (SourceKey table : tables) {
            used += getTableUsedSpace(table);
        }
        return used;
    }

    @Override
    public long getUsedOverall() throws Exception {
        URI baseUri = new File(ResourceDiscovery.getInstance().getCubePath()).toURI();
        return detector.detectUsed(baseUri);
    }

    @Override
    public long getUsableOverall() throws Exception {
        URI baseUri = new File("/").toURI();
        return detector.detectUsable(baseUri);
    }

    @Override
    public long getTotalOverall() throws Exception {
        URI baseUri = new File("/").toURI();
        return detector.detectTotal(baseUri);
    }

    private static final SpaceUsageService INSTANCE = new SwiftSpaceUsageService();

    private SwiftSpaceUsageService() {
    }

    public static SpaceUsageService getInstance() {
        return INSTANCE;
    }
}