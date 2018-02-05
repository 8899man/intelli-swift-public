package com.fr.swift.source.excel;

import com.fr.swift.log.SwiftLoggers;
import com.fr.swift.source.AbstractOuterDataSource;
import com.fr.swift.source.ColumnTypeUtils;
import com.fr.swift.source.MetaDataColumn;
import com.fr.swift.source.SwiftMetaDataColumn;
import com.fr.swift.source.SwiftMetaDataImpl;
import com.fr.swift.source.core.CoreField;
import com.fr.swift.util.Util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by pony on 2017/11/15.
 */
public class ExcelDataSource extends AbstractOuterDataSource {
    @CoreField
    private String fullFileName;

    private List<String> appendedFileNames;

    @CoreField
    private String[] columnNames;
    @CoreField
    private int[] columnTypes;

    public ExcelDataSource(String fullFileName, String[] columnNames, int[] columnTypes) {
        Util.requireNonNull(fullFileName, columnNames, columnTypes);
        this.fullFileName = fullFileName;
        this.columnNames = columnNames;
        this.columnTypes = columnTypes;
    }

    public ExcelDataSource(String fullFileName, String[] columnNames, int[] columnTypes, Map<String, Integer> fieldColumnTypes) {
        super(fieldColumnTypes);
        Util.requireNonNull(fullFileName, columnNames, columnTypes);
        this.fullFileName = fullFileName;
        this.columnNames = columnNames;
        this.columnTypes = columnTypes;
    }

    public ExcelDataSource(String fullFileName, String[] columnNames, int[] columnTypes, List<String> appendedFileNames) {
        Util.requireNonNull(fullFileName, columnNames, columnTypes, appendedFileNames);
        this.fullFileName = fullFileName;
        this.columnNames = columnNames;
        this.columnTypes = columnTypes;
        this.appendedFileNames = appendedFileNames;
    }

    public ExcelDataSource(String fullFileName, List<String> appendedFileNames, String[] columnNames, int[] columnTypes, Map<String, Integer> fieldColumnTypes) {
        super(fieldColumnTypes);
        Util.requireNonNull(fullFileName, columnNames, columnTypes, appendedFileNames);
        this.fullFileName = fullFileName;
        this.appendedFileNames = appendedFileNames;
        this.columnNames = columnNames;
        this.columnTypes = columnTypes;
    }

    public String getFullFileName() {
        return fullFileName;
    }

    public String[] getColumnNames() {
        return columnNames;
    }

    @Override
    protected void initOuterMetaData() {
        ExcelDataModel dm = null;
        try {
            dm = new ExcelTableData(fullFileName, columnNames, columnTypes).createDataModel();
            int cols = dm.getColumnCount();
            List<SwiftMetaDataColumn> columnList = new ArrayList<SwiftMetaDataColumn>();
            for (int i = 0; i < cols; i++) {
                MetaDataColumn column = new MetaDataColumn(dm.getColumnName(i), ColumnTypeUtils.columnTypeToSqlType(dm.getColumnType(i)));
                columnList.add(column);
            }
            outerMetaData = new SwiftMetaDataImpl(fullFileName, columnList);
        } catch (Exception e) {
            SwiftLoggers.getLogger().error(e.getMessage(), e);
            outerMetaData = null;
        } finally {
            if (dm != null) {
                try {
                    dm.release();
                } catch (Exception e) {
                    SwiftLoggers.getLogger().error(e.getMessage(), e);
                }
            }
        }
    }

}
