package com.fr.bi.etl.analysis.data;

import com.fr.bi.base.BICore;
import com.fr.bi.base.BIUser;
import com.fr.bi.common.inter.Traversal;
import com.fr.bi.stable.data.BITableID;
import com.fr.bi.stable.data.Table;
import com.fr.bi.stable.data.db.BIColumn;
import com.fr.bi.stable.data.db.BIDataValue;
import com.fr.bi.stable.data.db.DBField;
import com.fr.bi.stable.data.db.DBTable;
import com.fr.bi.stable.data.source.AbstractCubeTableSource;
import com.fr.bi.stable.data.source.ITableSource;
import com.finebi.cube.api.ICubeDataLoader;
import com.fr.bi.stable.utils.code.BILogger;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by 小灰灰 on 2015/12/24.
 */
public abstract class AbstractAnalysisIDTableSource<T extends ITableSource> extends AbstractCubeTableSource implements AnalysisTableSource{
    protected String tableID;
    protected transient T baseTable;
    private transient Map<Long, UserTableSource> userBaseTableMap = new ConcurrentHashMap<Long, UserTableSource>();

    public AbstractAnalysisIDTableSource() {
    }

    public AbstractAnalysisIDTableSource(String tableID, long userId) {
        this.tableID = tableID;
        this.baseTable = getBaseTableByID(new BITableID(tableID), new BIUser(userId));
        if (baseTable == null){
            BILogger.getLogger().error("Analysis ETL table id : " + tableID + " create by : " + userId + " missed!");
        }
    }

    protected abstract T getBaseTableByID(BITableID tableID, BIUser user);

    @Override
	public BICore fetchObjectCore() {
        return baseTable.fetchObjectCore();
    }

    /**
     * 获取所有相关基础表
     *
     * @return
     */
    @Override
    public Set<Table> createTableKeys() {
        return baseTable.createTableKeys();
    }

    /**
     * key为层次
     *
     * @return
     */
    @Override
    public Map<Integer, Set<ITableSource>> createGenerateTablesMap() {
        return baseTable.createGenerateTablesMap();
    }

    /**
     * 写简单索引
     *
     * @param travel
     * @param field
     * @param loader
     * @return
     */
    @Override
    public long read(Traversal<BIDataValue> travel, DBField[] field, ICubeDataLoader loader) {
        return 0;
    }

    @Override
    public DBTable getDbTable() {
        if (dbTable == null){
            DBTable ptable = baseTable.getDbTable();
            dbTable = createBITable();
            for (BIColumn column : ptable.getColumnArray()){
                dbTable.addColumn(column);
            }
        }
        return dbTable;
    }

    @Override
    public UserTableSource createUserTableSource(long userId) {
        UserTableSource source = userBaseTableMap.get(userId);
        if (source == null){
            synchronized (userBaseTableMap){
                UserTableSource tmp = userBaseTableMap.get(userId);
                if (tmp == null){
                    source = createNewUserSource(userId);
                    userBaseTableMap.put(userId, source);
                } else {
                    source = tmp;
                }
            }
        }
        return source;
    }

    public abstract UserTableSource createNewUserSource(long userId);
}