package com.fr.swift.query.aggregator;

import com.fr.swift.bitmap.impl.AllShowBitMap;
import com.fr.swift.segment.column.Column;
import com.fr.swift.segment.column.impl.base.DoubleDetailColumn;
import com.fr.swift.segment.column.impl.base.IntDetailColumn;
import com.fr.swift.segment.column.impl.base.LongDetailColumn;
import com.fr.swift.structure.iterator.RowTraversal;
import junit.framework.TestCase;
import org.easymock.EasyMock;
import org.easymock.IMocksControl;

import static org.easymock.EasyMock.expect;
import static org.easymock.EasyMock.expectLastCall;

/**
 * @author liu
 */

public class SumAggregateTest extends TestCase {

    public void testAggregateInt() {

        RowTraversal bitMap = AllShowBitMap.newInstance(2);
        IMocksControl control = EasyMock.createControl();
        Column mockColumn = control.createMock(Column.class);
        IntDetailColumn mockIntColumn = control.createMock(IntDetailColumn.class);

        try {
            mockColumn.getDetailColumn();
            expectLastCall().andReturn(mockIntColumn);
            expect(mockIntColumn.getInt(0)).andReturn(1);
            expect(mockIntColumn.getInt(1)).andReturn(3);
            control.replay();

            double sum = 4.0;
            SumAggregate sumCalculator = SumAggregate.INSTANCE;
            DoubleAmountAggregateValue an = sumCalculator.aggregate(bitMap, mockColumn);
            assertEquals(sum, an.getValue());
            control.verify();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void testAggregateLong() {

        RowTraversal bitMap = AllShowBitMap.newInstance(2);
        IMocksControl control = EasyMock.createControl();
        Column mockColumn = control.createMock(Column.class);
        LongDetailColumn longDetailColumn = control.createMock(LongDetailColumn.class);
        try {
            mockColumn.getDetailColumn();
            expectLastCall().andReturn(longDetailColumn);
            longDetailColumn.getLong(0);
            expectLastCall().andReturn(1l);
            longDetailColumn.getLong(1);
            expectLastCall().andReturn(2l);
            control.replay();

            double sum = 3.0;
            SumAggregate sumCalculator = SumAggregate.INSTANCE;
            DoubleAmountAggregateValue an = sumCalculator.aggregate(bitMap, mockColumn);
            assertEquals(sum, an.getValue());
            control.verify();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void testAggregateDouble() {

        RowTraversal bitMap = AllShowBitMap.newInstance(2);
        IMocksControl control = EasyMock.createControl();
        Column mockColumn = control.createMock(Column.class);
        DoubleDetailColumn doubleDetailColumn = control.createMock(DoubleDetailColumn.class);
        try {
            mockColumn.getDetailColumn();
            expectLastCall().andReturn(doubleDetailColumn);
            doubleDetailColumn.getDouble(0);
            expectLastCall().andReturn(1.0);
            doubleDetailColumn.getDouble(1);
            expectLastCall().andReturn(9.0);
            control.replay();

            double sum = 10.0;
            SumAggregate sumCalculator = SumAggregate.INSTANCE;
            DoubleAmountAggregateValue an = sumCalculator.aggregate(bitMap, mockColumn);
            assertEquals(sum, an.getValue());
            control.verify();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void testCombine() {
            DoubleAmountAggregateValue valueTest1 = new DoubleAmountAggregateValue();
            DoubleAmountAggregateValue otherTest1 = new DoubleAmountAggregateValue();
            DoubleAmountAggregateValue valueTest2 = new DoubleAmountAggregateValue();
            DoubleAmountAggregateValue otherTest2 = new DoubleAmountAggregateValue();

            valueTest1.setValue(-10.1);
            valueTest2.setValue(10.4);
            otherTest1.setValue(13.3);
            otherTest2.setValue(0);

            SumAggregate sum = SumAggregate.INSTANCE;
            sum.combine(valueTest1, otherTest1);
            sum.combine(valueTest2, otherTest2);

            assertEquals(valueTest1.getValue(), -10.1 + 13.3);
            assertEquals(valueTest2.getValue(), 10.4);
    }
}
