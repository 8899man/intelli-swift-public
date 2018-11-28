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
package com.fr.swift.jdbc.druid.sql.dialect.oracle.ast.stmt;

import com.fr.swift.jdbc.druid.sql.ast.SQLExpr;
import com.fr.swift.jdbc.druid.sql.dialect.oracle.ast.OracleSQLObjectImpl;
import com.fr.swift.jdbc.druid.sql.dialect.oracle.visitor.OracleASTVisitor;
import com.fr.swift.jdbc.druid.sql.dialect.sqlserver.ast.SQLServerStatementImpl;
import com.fr.swift.jdbc.druid.sql.dialect.sqlserver.visitor.SQLServerASTVisitor;

public class OracleSetTransactionStatement extends OracleStatementImpl implements OracleStatement {

    private boolean readOnly = false;
    private boolean write = false;

    private SQLExpr name;

    @Override
    public void accept0(OracleASTVisitor visitor) {
        if (visitor.visit(this)) {
            acceptChild(visitor, name);
        }
        visitor.endVisit(this);
    }

    public SQLExpr getName() {
        return name;
    }

    public void setName(SQLExpr name) {
        this.name = name;
    }

    public boolean isReadOnly() {
        return readOnly;
    }

    public void setReadOnly(boolean readOnly) {
        this.readOnly = readOnly;
    }

    public boolean isWrite() {
        return write;
    }

    public void setWrite(boolean write) {
        this.write = write;
    }
}
