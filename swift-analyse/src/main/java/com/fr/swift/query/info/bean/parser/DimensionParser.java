package com.fr.swift.query.info.bean.parser;

import com.fr.general.ComparatorUtils;
import com.fr.swift.query.filter.info.FilterInfo;
import com.fr.swift.query.group.Groups;
import com.fr.swift.query.group.impl.NoGroupRule;
import com.fr.swift.query.info.bean.element.DimensionBean;
import com.fr.swift.query.info.bean.element.SortBean;
import com.fr.swift.query.info.element.dimension.DetailDimension;
import com.fr.swift.query.info.element.dimension.DetailFormulaDimension;
import com.fr.swift.query.info.element.dimension.Dimension;
import com.fr.swift.query.info.element.dimension.GroupDimension;
import com.fr.swift.query.info.element.dimension.GroupFormulaDimension;
import com.fr.swift.query.sort.AscSort;
import com.fr.swift.query.sort.DescSort;
import com.fr.swift.query.sort.Sort;
import com.fr.swift.query.sort.SortType;
import com.fr.swift.segment.column.ColumnKey;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Lyon on 2018/6/7.
 */
class DimensionParser {

    // TODO: 2018/6/7 解析各类bean过程中相关参数的合法性校验以及相关异常处理规范
    static List<Dimension> parse(List<DimensionBean> dimensionBeans, List<SortBean> sortBeans) {
        List<Dimension> dimensions = new ArrayList<Dimension>();
        for (int i = 0; i < dimensionBeans.size(); i++) {
            DimensionBean dimensionBean = dimensionBeans.get(i);
            ColumnKey columnKey = dimensionBean.getColumnKey();
            SortBean sortBean = getDimensionSort(columnKey, sortBeans);
            Sort sort = null;
            if (sortBean != null) {
                sort = sortBean.getType() == SortType.ASC ? new AscSort(i) : new DescSort(i);
            }
            // TODO: 2018/6/7 维度分组
            FilterInfo filterInfo = FilterInfoParser.parse(dimensionBean.getFilterInfoBean());
            switch (dimensionBean.getDimensionType()) {
                case DETAIL_FORMULA:
                    dimensions.add(new DetailFormulaDimension(i, dimensionBean.getSourceKey(), filterInfo, dimensionBean.getFormula()));
                    break;
                case GROUP_FORMULA:
                    dimensions.add(new GroupFormulaDimension(i, dimensionBean.getSourceKey(), Groups.newGroup(new NoGroupRule()), sort, filterInfo, dimensionBean.getFormula()));
                    break;
                case GROUP:
                    dimensions.add(new GroupDimension(i, dimensionBean.getSourceKey(), columnKey, Groups.newGroup(new NoGroupRule()), sort, filterInfo));
                    break;
                case DETAIL:
                    dimensions.add(new DetailDimension(i, dimensionBean.getSourceKey(), columnKey, Groups.newGroup(new NoGroupRule()), sort, filterInfo));
                    break;
            }
        }
        return dimensions;
    }

    private static SortBean getDimensionSort(ColumnKey name, List<SortBean> sortBeans) {
        for (SortBean sortBean : sortBeans) {
            if (ComparatorUtils.equals(sortBean.getColumnKey(), name)) {
                return sortBean;
            }
        }
        return null;
    }

    static List<Dimension> parse(List<DimensionBean> joinedFields) {
        List<Dimension> dimensions = new ArrayList<Dimension>();
        for (int i = 0; i < joinedFields.size(); i++) {
            DimensionBean dimensionBean = joinedFields.get(i);
            FilterInfo filterInfo = FilterInfoParser.parse(dimensionBean.getFilterInfoBean());
            switch (dimensionBean.getDimensionType()) {
                case DETAIL_FORMULA:
                    dimensions.add(new DetailFormulaDimension(i, dimensionBean.getSourceKey(), filterInfo, dimensionBean.getFormula()));
                    break;
                case GROUP_FORMULA:
                    dimensions.add(new GroupFormulaDimension(i, dimensionBean.getSourceKey(), Groups.newGroup(new NoGroupRule()), null, filterInfo, dimensionBean.getFormula()));
                    break;
                case GROUP:
                    dimensions.add(new GroupDimension(i, dimensionBean.getSourceKey(), dimensionBean.getColumnKey(), Groups.newGroup(new NoGroupRule()), null, filterInfo));
                    break;
                case DETAIL:
                    dimensions.add(new DetailDimension(i, dimensionBean.getSourceKey(), dimensionBean.getColumnKey(), Groups.newGroup(new NoGroupRule()), null, filterInfo));
                    break;
            }
        }

        return dimensions;
    }
}
