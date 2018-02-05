package com.fr.swift.cal.builder;

import com.fr.swift.cal.Query;
import com.fr.swift.cal.info.DetailQueryInfo;
import com.fr.swift.result.DetailResultSet;

import java.util.List;

/**
 * Created by pony on 2017/12/14.
 */
public interface LocalDetailQueryBuilder {
    LocalDetailQueryBuilder NORMAL = new LocalDetailNormalQueryBuilder();

    LocalDetailQueryBuilder GROUP = new LocalDetailGroupQueryBuilder();

    /**
     * 创建本地的查询,不处理targets
     * @param info
     * @return
     */
    Query<DetailResultSet> buildLocalQuery(DetailQueryInfo info);

    /**
     *
     * @param queries
     * @param info
     * @return
     */
    Query<DetailResultSet> buildResultQuery(List<Query<DetailResultSet>> queries, DetailQueryInfo info);
}
