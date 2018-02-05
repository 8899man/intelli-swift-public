package com.fr.swift.bitmap.impl;

import com.fr.swift.bitmap.ImmutableBitMap;
import com.fr.swift.bitmap.MutableBitMap;

/**
 * @author anchore
 */
public class BaseBitSetTest extends BaseRoaringTest {
    @Override
    MutableBitMap getMutableBitMap() {
        return BitSetMutableBitMap.newInstance();
    }

    @Override
    ImmutableBitMap getImmutableBitMap() {
        return BitSetImmutableBitMap.newInstance();
    }

    @Override
    public void testToBytes() {
    }
}
