package com.finebi.table.gen;
/**
 * This class created on 2017/5/17.
 *
 * @author Connery
 * @since Advanced FineBI Analysis 1.0
 */

import com.finebi.cube.common.log.BILogger;
import com.finebi.cube.common.log.BILoggerFactory;
import junit.framework.TestCase;

import java.util.HashSet;
import java.util.Set;

public class LongFieldValueGeneratorTest extends TestCase {
    private final static BILogger LOGGER = BILoggerFactory.getLogger(LongFieldValueGeneratorTest.class);

    /**
     * Detail:
     * Author:Connery
     * Date:2017/5/17
     */
    public void testStringRead() {
        try {
            Set<Long> valueSet = new HashSet<Long>();
            int group = 100;
            int row = 1000;
            LongFieldValueGenerator generator = new LongFieldValueGenerator(group, row);
            for (int i = 0; i < row; i++) {
                valueSet.add(generator.getValue());
            }
            assertTrue(valueSet.size() > group - 10);

        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            fail();
        }
    }
}
