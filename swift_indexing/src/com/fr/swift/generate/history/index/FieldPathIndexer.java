package com.fr.swift.generate.history.index;

import com.fr.swift.cube.io.Releasable;
import com.fr.swift.generate.BaseFieldPathIndexer;
import com.fr.swift.relation.CubeLogicColumnKey;
import com.fr.swift.relation.CubeMultiRelationPath;
import com.fr.swift.segment.Segment;
import com.fr.swift.segment.SwiftSegmentManager;
import com.fr.swift.source.SourceKey;

import java.util.List;

/**
 * @author yee
 * @date 2018/1/17
 */
public class FieldPathIndexer extends BaseFieldPathIndexer {
    public FieldPathIndexer(CubeMultiRelationPath relationPath, CubeLogicColumnKey logicColumnKey, SwiftSegmentManager provider) {
        super(relationPath, logicColumnKey, provider);
    }

    @Override
    protected List<Segment> getSegments(SourceKey key) {
        return provider.getSegment(key);
    }

    @Override
    protected void releaseIfNeed(Releasable releasable) {
        releasable.release();
    }
}
