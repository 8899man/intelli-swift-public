package com.fr.swift.db;

import com.fr.swift.config.TestConfDb;
import com.fr.swift.context.SwiftContext;
import com.fr.swift.db.impl.SwiftDatabase;
import com.fr.swift.manager.LocalDataOperatorProvider;
import com.fr.swift.manager.LocalSegmentProvider;
import com.fr.swift.segment.column.ColumnKey;
import com.fr.swift.segment.column.DetailColumn;
import com.fr.swift.source.ListBasedRow;
import com.fr.swift.source.MetaDataColumn;
import com.fr.swift.source.Row;
import com.fr.swift.source.SourceKey;
import com.fr.swift.source.SwiftMetaData;
import com.fr.swift.source.SwiftMetaDataImpl;
import com.fr.swift.source.SwiftResultSet;
import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import java.sql.SQLException;
import java.sql.Types;
import java.util.Collections;

import static org.junit.Assert.assertEquals;

/**
 * @author anchore
 * @date 2018/4/9
 */
public class TableTest {
    private Database db = SwiftDatabase.getInstance();
    private SourceKey sk = new SourceKey(getClass().getSimpleName());
    private Table t;

    @BeforeClass
    public static void boot() throws Exception {
        TestConfDb.setConfDb();
        SwiftContext.getInstance().registerSegmentOperatorProvider(LocalDataOperatorProvider.getInstance());
        SwiftContext.getInstance().registerSegmentProvider(LocalSegmentProvider.getInstance());
    }

    @Before
    public void setUp() throws Exception {
        if (db.existsTable(sk)) {
            db.dropTable(sk);
        }

        t = db.createTable(sk, new SwiftMetaDataImpl(sk.getId(),
                Collections.singletonList(new MetaDataColumn("A", Types.DATE))));
    }

    @Test
    public void insert() throws SQLException {
        t.insert(new RowSet());
        checkResult();
    }

    @Test
    public void importFrom() throws SQLException {
        t.importFrom(new RowSet());
        checkResult();
    }

    private void checkResult() {
        DetailColumn<Object> detailColumn = SwiftContext.getInstance().getSegmentProvider().
                getSegment(sk).get(0).getColumn(new ColumnKey("A")).getDetailColumn();
        assertEquals(2L, detailColumn.get(0));
        assertEquals(3L, detailColumn.get(1));
        assertEquals(45L, detailColumn.get(2));
        assertEquals(8L, detailColumn.get(3));
        assertEquals(234L, detailColumn.get(4));
    }

    @After
    public void tearDown() throws Exception {
        if (db.existsTable(sk)) {
            db.dropTable(sk);
        }
    }

    static class RowSet implements SwiftResultSet {
        Row[] rows = {
                new ListBasedRow(Collections.singletonList(2L)),
                new ListBasedRow(Collections.singletonList(3L)),
                new ListBasedRow(Collections.singletonList(45L)),
                new ListBasedRow(Collections.singletonList(8L)),
                new ListBasedRow(Collections.singletonList(234L))
        };
        int cursor = 0;

        @Override
        public void close() {
            rows = null;
        }

        @Override
        public boolean next() {
            return cursor < rows.length;
        }

        @Override
        public SwiftMetaData getMetaData() {
            return null;
        }

        @Override
        public Row getRowData() {
            return rows[cursor++];
        }
    }
}