package com.swift.jdbc.response;

import java.sql.SQLException;

/**
 * @author yee
 * @date 2018/11/16
 */
public interface JdbcResponse {
    /**
     * Exception
     *
     * @return
     */
    SQLException exception();
}
