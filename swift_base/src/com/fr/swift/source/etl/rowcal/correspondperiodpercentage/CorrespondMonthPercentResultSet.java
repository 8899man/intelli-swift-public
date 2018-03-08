package com.fr.swift.source.etl.rowcal.correspondperiodpercentage;

import com.fr.swift.bitmap.traversal.BreakTraversalAction;
import com.fr.swift.bitmap.traversal.TraversalAction;
import com.fr.swift.segment.Segment;
import com.fr.swift.segment.column.ColumnKey;
import com.fr.swift.segment.column.DictionaryEncodedColumn;
import com.fr.swift.source.ListBasedRow;
import com.fr.swift.source.Row;
import com.fr.swift.source.SwiftMetaData;
import com.fr.swift.source.SwiftResultSet;
import com.fr.swift.source.etl.utils.GroupValueIterator;
import com.fr.swift.source.etl.utils.SwiftValuesAndGVI;
import com.fr.swift.structure.iterator.RowTraversal;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Handsome on 2018/3/4 0006 14:07
 */
public class CorrespondMonthPercentResultSet implements SwiftResultSet {

    private ColumnKey columnKey;
    private ColumnKey periodKey;
    private ColumnKey[] dimension;
    private Segment[] segments;
    private SwiftMetaData metaData;
    private int segCursor, rowCursor, rowCount;
    private GroupValueIterator iterator;
    private boolean needNext;
    private SwiftValuesAndGVI valuesAndGVI;
    private Segment[] tempSegment;
    private RowTraversal[] traversal;
    private TempValue tempValue;
    private final Map<Double, Double> map = new HashMap<Double, Double>();
    private final Double PERCENT_DEFAULT = 0d;


    public CorrespondMonthPercentResultSet(ColumnKey columnKey, ColumnKey periodKey, ColumnKey[] dimensions,
                                           Segment[] segments, SwiftMetaData metaData) {
        this.columnKey = columnKey;
        this.periodKey = periodKey;
        this.dimension = dimensions;
        this.segments = segments;
        this.metaData = metaData;
        init();
    }

    private void init() {
        segCursor = 0;
        rowCursor = 0;
        rowCount = segments[0].getRowCount();
        needNext = true;
        tempValue = new TempValue();
        if(null != dimension) {
            iterator = new GroupValueIterator(segments, dimension, null);
            tempSegment = new Segment[0];
            traversal = new RowTraversal[0];
        } else {
            RowTraversal[] rowTraversal = new RowTraversal[segments.length];
            for(int i = 0; i < rowTraversal.length; i++) {
                rowTraversal[i] = segments[i].getAllShowIndex();
            }
            createValueMap(segments, rowTraversal);
        }
    }

    @Override
    public void close() throws SQLException {

    }

    @Override
    public boolean next() throws SQLException {
        if(null != dimension) {
            if(iterator.hasNext() || (segCursor < tempSegment.length && rowCursor < rowCount)) {
                if(needNext) {
                    valuesAndGVI = iterator.next();
                    traversal = new RowTraversal[valuesAndGVI.getAggreator().size()];
                    tempSegment = new Segment[valuesAndGVI.getAggreator().size()];
                    for(int i = 0; i < valuesAndGVI.getAggreator().size(); i++) {
                        traversal[i] = valuesAndGVI.getAggreator().get(i).getBitMap();
                        tempSegment[i] = valuesAndGVI.getAggreator().get(i).getSegment();
                    }
                    rowCount = traversal[0].getCardinality();
                    segCursor = 0;
                    rowCursor = 0;
                    needNext = false;
                    createValueMap(tempSegment, traversal);
                }
                if(segCursor == tempSegment.length - 1 && rowCursor == rowCount - 1) {
                    needNext = true;
                }
                nextValueForDimension();
                return true;
            }
            return false;
        } else {
            return nextValue();
        }
    }

    private void nextValueForDimension() {
        if(segCursor < tempSegment.length && rowCursor < rowCount) {
            rowCount = traversal[segCursor].getCardinality();
            DictionaryEncodedColumn getter = tempSegment[segCursor].getColumn(periodKey).getDictionaryEncodedColumn();
            DictionaryEncodedColumn keyGetter = tempSegment[segCursor].getColumn(columnKey).getDictionaryEncodedColumn();
            final Index index = new Index();
            traversal[segCursor].breakableTraversal(new BreakTraversalAction() {
                int cursor = 0;
                @Override
                public boolean actionPerformed(int row) {
                    if(cursor == rowCursor) {
                        index.setIndex(row);
                        return true;
                    }
                    cursor ++;
                    return false;
                }
            });
            Number v = (Number) getter.getValue(getter.getIndexByRow(index.getIndex()));
            Number value = null;
            if(null != v) {
                double key = v.doubleValue() - 1;
                value = map.get(key);
            }
            Number currentValue = (Number) keyGetter.getValue(keyGetter.getIndexByRow(index.getIndex()));
            if(null == value) {
                value = PERCENT_DEFAULT;
            }
            if(currentValue == null) {
                currentValue = PERCENT_DEFAULT;
            }
            Double result = null;
            if(value.doubleValue() == currentValue.doubleValue()){
                result = PERCENT_DEFAULT;
            } else {
                result = (currentValue.doubleValue() - value.doubleValue())/value.doubleValue();
            }
            List dataList = new ArrayList();
            dataList.add(result);
            tempValue.setRow(new ListBasedRow(dataList));
            if(rowCursor < rowCount - 1) {
                rowCursor ++;
            } else {
                if(segCursor < segments.length) {
                    segCursor ++;
                    rowCursor = 0;
                }
            }
        }
    }

    private boolean nextValue() {
        if(segCursor < segments.length && rowCursor < rowCount) {
            rowCount = segments[segCursor].getRowCount();
            DictionaryEncodedColumn getter = segments[segCursor].getColumn(periodKey).getDictionaryEncodedColumn();
            DictionaryEncodedColumn keyGetter = segments[segCursor].getColumn(columnKey).getDictionaryEncodedColumn();
            Number v = (Number) getter.getValue(getter.getIndexByRow(rowCursor));
            Number value = null;
            if(null != v) {
                double key = v.doubleValue() - 1;
                value = map.get(key);
            }
            Number currentValue = (Number) keyGetter.getValue(keyGetter.getIndexByRow(rowCursor));
            if(null == value) {
                value = PERCENT_DEFAULT;
            }
            if(currentValue == null) {
                currentValue = PERCENT_DEFAULT;
            }
            Double result = null;
            if(value.doubleValue() == currentValue.doubleValue()){
                result = PERCENT_DEFAULT;
            } else {
                result = (currentValue.doubleValue() - value.doubleValue())/value.doubleValue();
            }
            List dataList = new ArrayList();
            dataList.add(result);
            tempValue.setRow(new ListBasedRow(dataList));
            if(rowCursor < rowCount - 1) {
                rowCursor ++;
            } else {
                if(segCursor < segments.length) {
                    segCursor ++;
                    rowCursor = 0;
                } else {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    private Map<Double, Double> createValueMap(Segment[] segment, RowTraversal[] traversal) {
        map.clear();
        for(int i = 0; i < segment.length; i++) {
            final DictionaryEncodedColumn getter = segment[i].getColumn(periodKey).getDictionaryEncodedColumn();
            final DictionaryEncodedColumn keyGetter = segment[i].getColumn(columnKey).getDictionaryEncodedColumn();
            traversal[i].traversal(new TraversalAction() {
                @Override
                public void actionPerformed(int row) {
                    Number v = (Number) getter.getValue(getter.getIndexByRow(row));
                    if(null == v) {
                        return;
                    }
                    double key = v.doubleValue();
                    if(!map.containsKey(key)) {
                        Number value = (Number)keyGetter.getValue(keyGetter.getIndexByRow(row));
                        if(null == value) {
                            value = PERCENT_DEFAULT;
                        }
                        map.put(key, value.doubleValue());
                    }
                }
            });
        }
        return map;
    }

    @Override
    public SwiftMetaData getMetaData() throws SQLException {
        return metaData;
    }

    @Override
    public Row getRowData() throws SQLException {
        return tempValue.getRow();
    }

    private class TempValue {
        public ListBasedRow getRow() {
            return row;
        }

        public void setRow(ListBasedRow row) {
            this.row = row;
        }

        ListBasedRow row;
    }

    private class Index {
        private int index = 0;

        public int getIndex() {
            return index;
        }

        public void setIndex(int index) {
            this.index = index;
        }
    }
}
