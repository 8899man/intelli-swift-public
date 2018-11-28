/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.fr.swift.jdbc.druid.sql.dialect.sqlserver.ast;

import com.fr.swift.jdbc.druid.sql.ast.SQLLimit;
import com.fr.swift.jdbc.druid.sql.ast.expr.SQLIntegerExpr;
import com.fr.swift.jdbc.druid.sql.ast.statement.SQLSelectQueryBlock;
import com.fr.swift.jdbc.druid.sql.dialect.sqlserver.visitor.SQLServerASTVisitor;
import com.fr.swift.jdbc.druid.sql.visitor.SQLASTVisitor;
import com.fr.swift.jdbc.druid.util.JdbcConstants;

public class SQLServerSelectQueryBlock extends SQLSelectQueryBlock {

    private SQLServerTop top;

    public SQLServerSelectQueryBlock() {
        dbType = JdbcConstants.SQL_SERVER;
    }

    public SQLServerTop getTop() {
        return top;
    }

    public void setTop(SQLServerTop top) {
        if (top != null) {
            top.setParent(this);
        }
        this.top = top;
    }

    public void setTop(int rowCount) {
        setTop(new SQLServerTop(new SQLIntegerExpr(rowCount)));
    }

    @Override
    protected void accept0(SQLASTVisitor visitor) {
        accept0((SQLServerASTVisitor) visitor);
    }

    protected void accept0(SQLServerASTVisitor visitor) {
        if (visitor.visit(this)) {
            acceptChild(visitor, this.top);
            acceptChild(visitor, this.selectList);
            acceptChild(visitor, this.from);
            acceptChild(visitor, this.where);
            acceptChild(visitor, this.groupBy);
        }
        visitor.endVisit(this);
    }

    public void limit(int rowCount, int offset) {
        if (offset <= 0) {
            setTop(rowCount);
        } else {
            throw new UnsupportedOperationException("not support offset");
        }
    }
}
