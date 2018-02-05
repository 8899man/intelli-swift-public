package com.fr.swift.segment.column.impl;

import com.fr.swift.compare.Comparators;
import com.fr.swift.cube.io.location.IResourceLocation;
import com.fr.swift.segment.column.DictionaryEncodedColumn;
import com.fr.swift.segment.column.impl.base.IntDetailColumn;
import com.fr.swift.segment.column.impl.base.IntDictColumn;

import java.util.Comparator;

/**
 * @author anchore
 * @date 2017/11/30
 */
public class IntColumn extends BaseColumn<Integer> {
    private IntDetailColumn detailColumn;

    public IntColumn(IResourceLocation location) {
        super(location);
    }

    @Override
    public DictionaryEncodedColumn<Integer> getDictionaryEncodedColumn() {
        return dictColumn != null ? dictColumn : (dictColumn = new IntDictColumn(location, Comparators.<Integer>asc()));
    }

    @Override
    public IntDetailColumn getDetailColumn() {
        return detailColumn != null ? detailColumn : (detailColumn = new IntDetailColumn(location));
    }
}