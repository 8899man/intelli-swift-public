package com.fr.swift.query.filter.detail.impl.string;

import com.fr.stable.StringUtils;
import com.fr.swift.query.filter.detail.impl.AbstractDetailFilter;
import com.fr.swift.query.filter.match.MatchConverter;
import com.fr.swift.result.SwiftNode;
import com.fr.swift.segment.column.Column;
import com.fr.swift.segment.column.DictionaryEncodedColumn;
import com.fr.swift.structure.array.IntList;
import com.fr.swift.structure.array.IntListFactory;
import com.fr.swift.structure.iterator.IntListRowTraversal;
import com.fr.swift.structure.iterator.RowTraversal;
import com.fr.swift.util.Util;
import com.fr.swift.util.pinyin.PinyinUtils;

/**
 * This class created on 2018/5/3
 *
 * @author Lucifer
 * @description
 * @since Advanced FineBI 5.0
 */
public class StringKeyWordFilter extends AbstractDetailFilter<String> {

    private String keyword;

    public static final int KEY_WORD_MAX = 500000;

    public StringKeyWordFilter(String keyword, Column<String> column) {
        Util.requireNonNull(StringUtils.isEmpty(keyword) ? null : keyword);
        this.keyword = keyword;
        this.column = column;
    }

    @Override
    protected RowTraversal getIntIterator(DictionaryEncodedColumn<String> dict) {
        //分组小于等于500000模糊搜索。否则stratwith
        if (dict.globalSize() <= KEY_WORD_MAX) {
            IntList intList = IntListFactory.createIntList();
            for (int i = 0, size = dict.size(); i < size; i++) {
                String data = dict.getValue(i);
                if (data != null) {
                    boolean isMatch = PinyinUtils.isMatch(keyword, data);
                    if (isMatch) {
                        intList.add(i);
                    }
                }
            }
            return new IntListRowTraversal(intList);
        } else {
            StringStartsWithFilter stringStartsWithFilter = new StringStartsWithFilter(keyword, column);
            return stringStartsWithFilter.getIntIterator(dict);
        }
    }

    @Override
    public boolean matches(SwiftNode node, int targetIndex, MatchConverter converter) {
        String data = (String) node.getData();
        return data != null && PinyinUtils.isMatch(keyword, data);
    }
}
