package com.fr.swift.segment;

import com.fr.swift.bitmap.ImmutableBitMap;
import com.fr.swift.cube.io.Flushable;
import com.fr.swift.cube.io.Releasable;
import com.fr.swift.cube.io.Types;
import com.fr.swift.cube.io.location.IResourceLocation;
import com.fr.swift.segment.column.Column;
import com.fr.swift.segment.column.ColumnKey;
import com.fr.swift.segment.relation.RelationIndex;
import com.fr.swift.source.DataSource;
import com.fr.swift.source.SwiftMetaData;

/**
 * @author pony
 * @date 2017/10/9
 * 表示cube中一张表的一个分块,可以取得各个列
 */
public interface Segment extends Releasable, Flushable {
    String ROW_COUNT = "row_count";
    String ALL_SHOW_INDEX = "all_show_index";

    /**
     * 获取该分片的总行数
     *
     * @return
     */
    int getRowCount();

    void putRowCount(int rowCount);

    /**
     * 获取一列
     *
     * @param key
     * @return
     */
    <T> Column<T> getColumn(ColumnKey key);

    /**
     * @param f foreign table
     * @return relation index
     */
    RelationIndex getRelation(DataSource f);

    /**
     * 获取未被删除的索引
     *
     * @return
     */
    ImmutableBitMap getAllShowIndex();

    void putAllShowIndex(ImmutableBitMap bitMap);

    SwiftMetaData getMetaData();

    IResourceLocation getLocation();

    Types.StoreType getStoreType();
}