package com.fr.swift.segment.column.impl.base;

import com.fr.swift.cube.io.location.ResourceLocation;

/**
 * @author anchore
 * @date 2017/11/10
 */
public class IntDetailColumnTest extends BasePrimitiveDetailColumnTest {

    @Override
    public void testPutThenGet() {
        int[] ints = r.ints(size, 0, size << 1).sorted().toArray();
        IntDetailColumn intDetailColumn = new IntDetailColumn(
                new ResourceLocation(BASE_PATH + "/detail/child_int"));
        for (int i = 0; i < ints.length; i++) {
            intDetailColumn.put(i, ints[i]);
        }
        intDetailColumn.release();

        intDetailColumn = new IntDetailColumn(
                new ResourceLocation(BASE_PATH + "/detail/child_int"));
        for (int i = 0; i < ints.length; i++) {
            assertEquals(ints[i], intDetailColumn.getInt(i));
        }
    }

}
