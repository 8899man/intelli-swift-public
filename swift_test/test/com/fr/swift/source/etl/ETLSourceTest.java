package com.fr.swift.source.etl;

import com.fr.swift.source.DataSource;
import com.fr.swift.source.SwiftMetaData;
import com.fr.swift.source.core.BasicCore;
import com.fr.swift.source.db.TableDBSource;
import com.fr.swift.source.db.TestConnectionProvider;
import junit.framework.TestCase;
import org.easymock.EasyMock;
import org.easymock.IMocksControl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by pony on 2018/1/10.
 */
public class ETLSourceTest extends TestCase {

    public void setUp() throws Exception{
        TestConnectionProvider.createConnection();
    }

    public void testGetMetadata() throws Exception{
        TableDBSource dbSource = new TableDBSource("DEMO_CAPITAL_RETURN", "demo");
        List<DataSource> sources = new ArrayList<>();
        sources.add(dbSource);
        IMocksControl control = EasyMock.createControl();
        ETLOperator operator = control.createMock(ETLOperator.class);
        EasyMock.expect(operator.getOperatorType()).andReturn(OperatorType.DETAIL).anyTimes();
        EasyMock.expect(operator.getColumns(EasyMock.anyObject())).andReturn(new ArrayList<>()).anyTimes();
        EasyMock.expect(operator.fetchObjectCore()).andReturn(new BasicCore()).anyTimes();
        control.replay();
        ETLSource source = new ETLSource(sources, operator);
        SwiftMetaData metaData = source.getMetadata();
        assertEquals(metaData.getColumnCount(),4);
        Map<Integer, String> fileds = new HashMap<>();
        fileds.put(1, "a");
        ETLSource part = new ETLSource(sources, operator, fileds);
        SwiftMetaData partMetadata = part.getMetadata();
        assertEquals(partMetadata.getColumnCount(),1);
        assertEquals(partMetadata.getColumnName(1),"a");
    }
}