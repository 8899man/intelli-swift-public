package com.fr.swift.query.filter.detail.impl.nfilter;

import com.fr.swift.query.filter.detail.impl.number.BaseNumberFilterTest;

import java.util.List;

/**
 * Created by Lyon on 2017/12/5.
 */
public class TopNFilterTest extends BaseNumberFilterTest {

    private int topN;
    private List<Double> groups;

//    public TopNFilterTest() {
//        this.column = doubleColumn;
//        this.details = doubleDetails;
//        this.groups = new ArrayList<>(((BaseColumnImplTest) column).getGroups());
//        topN = groups.size() / 2;
//        this.filter = new TopNFilter(topN, column);
//    }
//
//    public void testFilter() {
//        expectedIndexes = getExpectedIndexes();
//        ImmutableBitMap bitMap = filter.createFilterIndex();
//        assertEquals(bitMap.getCardinality(), expectedIndexes.size());
//        IntStream.range(0, expectedIndexes.size()).forEach(i -> assertTrue(bitMap.contains(expectedIndexes.get(i))));
//    }
//
//    public void testMatch() {
//        assertTrue(filter.matches(createNode(groups.size() - random.nextInt(topN), groups.size()), -1, new ToStringConverter()));
//        assertTrue(!filter.matches(createNode(groups.size() - topN - 1, groups.size()), -1, new ToStringConverter()));
//        assertTrue(filter.matches(createNode(groups.size() - topN, groups.size()), -1, new ToStringConverter()));
//    }

    @Override
    protected List<Integer> getExpectedIndexes() {
//        Set<Double> topNGroups = new HashSet<>(groups.subList(topN + 1, groups.size()));
//        return IntStream.range(0, details.size()).filter(i -> topNGroups.contains(details.get(i)))
//                .mapToObj(Integer::new).collect(Collectors.toList());
        return null;
    }
}
