package com.fr.swift.cal.builder;

import com.fr.swift.cal.Query;
import com.fr.swift.cal.info.DetailQueryInfo;
import com.fr.swift.cal.result.detail.NormalDetailResultQuery;
import com.fr.swift.cal.segment.detail.NormalDetailSegmentQuery;
import com.fr.swift.manager.LocalSegmentProvider;
import com.fr.swift.query.adapter.dimension.Dimension;
import com.fr.swift.query.filter.FilterBuilder;
import com.fr.swift.query.filter.info.FilterInfo;
import com.fr.swift.query.filter.info.GeneralFilterInfo;
import com.fr.swift.result.DetailResultSet;
import com.fr.swift.segment.Segment;
import com.fr.swift.segment.column.Column;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pony on 2017/12/14.
 */
public class LocalDetailNormalQueryBuilder implements LocalDetailQueryBuilder {

    protected LocalDetailNormalQueryBuilder() {
    }

    @Override
    public Query<DetailResultSet> buildLocalQuery(DetailQueryInfo info) {
        List<Query<DetailResultSet>> queries = new ArrayList<Query<DetailResultSet>>();
        List<Segment> segments = LocalSegmentProvider.getInstance().getSegment(info.getTarget());
        for (Segment segment : segments) {
            List<FilterInfo> filterInfos = new ArrayList<FilterInfo>();
            Dimension[] dimensions = info.getDimensions();
            List<Column> columns = new ArrayList<Column>();
            for (Dimension dimension : dimensions) {
                columns.add(segment.getColumn(dimension.getColumnKey()));
                if (dimension.getFilter() != null) {
                    filterInfos.add(dimension.getFilter());
                }
            }
            if (info.getFilterInfo() != null) {
                filterInfos.add(info.getFilterInfo());
            }
            queries.add(new NormalDetailSegmentQuery(columns, FilterBuilder.buildDetailFilter(segment, new GeneralFilterInfo(filterInfos, GeneralFilterInfo.AND))));
        }
        return new NormalDetailResultQuery(queries);
    }

    @Override
    public Query<DetailResultSet> buildResultQuery(List<Query<DetailResultSet>> queries, DetailQueryInfo info) {
        return new NormalDetailResultQuery(queries, info.getTargets());
    }
}
