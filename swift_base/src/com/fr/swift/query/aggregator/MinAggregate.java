package com.fr.swift.query.aggregator;

import static com.fr.swift.cube.io.IOConstant.NULL_INT;
import static com.fr.swift.cube.io.IOConstant.NULL_LONG;

/**
 * @author Xiaolei.liu
 */
public class MinAggregate extends AllDataCompare {

    public static MinAggregate INSTANCE = new MinAggregate();


    @Override
    protected double compare(double sum, double rowValue) {
        if (Double.isInfinite(sum)) {
            return rowValue;
        } else if (Double.isInfinite(rowValue)) {
            return sum;
        }
        return Math.min(sum, rowValue);
    }

    @Override
    protected long compare(long sum, long rowValue) {
        if (sum == NULL_LONG) {
            return rowValue;
        } else if (rowValue == NULL_LONG) {
            return sum;
        }
        return Math.min(sum, rowValue);
    }

    @Override
    protected int compare(int sum, int rowValue) {
        if (sum == NULL_INT) {
            return rowValue;
        } else if (rowValue == NULL_INT) {
            return sum;
        }
        return Math.min(sum, rowValue);
    }

    @Override
    public void combine(DoubleAmountAggregateValue value, DoubleAmountAggregateValue other) {
        value.setValue(Math.min(value.getValue(), other.getValue()));
    }
}
