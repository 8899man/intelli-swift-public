package com.fr.swift.source;

import com.fr.swift.exception.meta.SwiftMetaDataException;
import com.fr.swift.log.SwiftLogger;
import com.fr.swift.log.SwiftLoggers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by pony on 2018/1/16.
 * 外部数据源增加使用部分字段与类型转换的功能
 */
public abstract class AbstractOuterDataSource extends AbstractDataSource implements OuterDataSource {
    private static final SwiftLogger LOGGER = SwiftLoggers.getLogger(AbstractOuterDataSource.class);

    //保存使用的字段与columnType类型,空或者null表示没变
    protected Map<String, Integer> fieldColumnTypes;

    //外部数据源的meta
    protected SwiftMetaData outerMetaData;

    public AbstractOuterDataSource() {
    }

    public AbstractOuterDataSource(Map<String, Integer> fieldColumnTypes) {
        this.fieldColumnTypes = fieldColumnTypes;
    }

    public Map<String, Integer> getFieldColumnTypes() {
        return fieldColumnTypes;
    }

    @Override
    public SwiftMetaData getOuterMetadata() {
        if (outerMetaData == null) {
            initOuterMetaData();
        }
        return outerMetaData;
    }


    protected abstract void initOuterMetaData();

    @Override
    protected final void initMetaData() {
        SwiftMetaData outerMetadata = getOuterMetadata();
        if (fieldColumnTypes == null || fieldColumnTypes.isEmpty()) {
            metaData = outerMetadata;
        } else {
            List<SwiftMetaDataColumn> columns = new ArrayList<SwiftMetaDataColumn>();
            try {
                for (Map.Entry<String, Integer> entry : fieldColumnTypes.entrySet()) {
                    SwiftMetaDataColumn outerColumn = outerMetadata.getColumn(entry.getKey());
                    SwiftMetaDataColumn column = outerColumn;
                    int outerColumnType = ColumnTypeUtils.sqlTypeToColumnType(outerColumn.getType(), outerColumn.getPrecision(), outerColumn.getScale());
                    if (outerColumnType != entry.getValue()) {
                        column = ColumnTypeUtils.convertColumn(entry.getValue(), outerColumn);
                    }
                    columns.add(column);
                }
                metaData = new SwiftMetaDataImpl(outerMetadata.getTableName(), columns);
            } catch (SwiftMetaDataException e) {
                LOGGER.error("get outerMetadata info failed ", e);
            }
        }
    }
}
