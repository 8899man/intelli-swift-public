package com.fr.swift.source.etl.datamining.createsegment;

import com.fr.swift.Temps;
import com.fr.swift.bitmap.ImmutableBitMap;
import com.fr.swift.bitmap.MutableBitMap;
import com.fr.swift.bitmap.impl.BitSetMutableBitMap;
import com.fr.swift.cube.io.location.IResourceLocation;
import com.fr.swift.segment.column.BitmapIndexedColumn;
import com.fr.swift.segment.column.Column;
import com.fr.swift.segment.column.DetailColumn;
import com.fr.swift.segment.column.DictionaryEncodedColumn;

import java.util.Comparator;

/**
 * Created by Handsome on 2018/4/2 0002 09:29
 */
public class CreateColumn2 {
    public Column getColumn() {
        return new Column() {

            @Override
            public DictionaryEncodedColumn getDictionaryEncodedColumn() {
                return createDicColumn();
            }

            @Override
            public BitmapIndexedColumn getBitmapIndex() {
                return createBitmapColumn();
            }

            @Override
            public DetailColumn getDetailColumn() {
                return null;
            }

            @Override
            public IResourceLocation getLocation() {
                return null;
            }
        };
    }

    private BitmapIndexedColumn createBitmapColumn() {
        final MutableBitMap[] bitMaps = new MutableBitMap[6];
        bitMaps[0] = BitSetMutableBitMap.newInstance();
        bitMaps[1] = BitSetMutableBitMap.newInstance();
        bitMaps[2] = BitSetMutableBitMap.newInstance();
        bitMaps[3] = BitSetMutableBitMap.newInstance();
        bitMaps[4] = BitSetMutableBitMap.newInstance();
        bitMaps[5] = BitSetMutableBitMap.newInstance();
        bitMaps[0].add(6);
        bitMaps[1].add(0);
        bitMaps[2].add(1);
        bitMaps[3].add(2);
        bitMaps[3].add(7);
        bitMaps[4].add(3);
        bitMaps[5].add(4);
        bitMaps[5].add(5);
        return new BitmapIndexedColumn() {
            @Override
            public void flush() {

            }

            @Override
            public void putBitMapIndex(int index, ImmutableBitMap bitmap) {

            }

            @Override
            public ImmutableBitMap getBitMapIndex(int index) {
                if (index < bitMaps.length) {
                    return bitMaps[index];
                }
                return null;
            }

            @Override
            public void putNullIndex(ImmutableBitMap bitMap) {

            }

            @Override
            public ImmutableBitMap getNullIndex() {
                return null;
            }

            @Override
            public void release() {

            }
        };

    }

    private DictionaryEncodedColumn createDicColumn() {
        final int[] keys = {17, 18, 19, 20, 21, 22};
        final int[] index = {1, 2, 3, 4, 5, 5, 0, 3};
        return new Temps.TempDictColumn() {

            @Override
            public int size() {
                return 8;
            }

            @Override
            public Object getValue(int index) {
                return keys[index];
            }

            @Override
            public int getIndexByRow(int row) {
                return index[row];
            }

            @Override
            public Comparator getComparator() {
                return new Comparator() {

                    @Override
                    public int compare(Object o3, Object o4) {
                        Integer o1 = (Integer) o3;
                        Integer o2 = (Integer) o4;
                        return o1.compareTo(o2);
                    }
                };
            }
        };
    }
}
