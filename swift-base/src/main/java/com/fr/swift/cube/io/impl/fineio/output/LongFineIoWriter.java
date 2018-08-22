package com.fr.swift.cube.io.impl.fineio.output;

import com.fineio.FineIO;
import com.fineio.FineIO.MODEL;
import com.fineio.io.LongBuffer;
import com.fineio.io.file.IOFile;
import com.fineio.storage.Connector;
import com.fr.swift.cube.io.impl.fineio.connector.ConnectorManager;
import com.fr.swift.cube.io.output.LongWriter;

import java.net.URI;

/**
 * @author anchore
 */
public class LongFineIoWriter extends BaseFineIoWriter implements LongWriter {
    private IOFile<LongBuffer> ioFile;

    private LongFineIoWriter(URI uri, Connector connector, boolean isOverwrite) {
        if (isOverwrite) {
            ioFile = FineIO.createIOFile(connector, uri, MODEL.WRITE_LONG);
        } else {
            ioFile = FineIO.createIOFile(connector, uri, MODEL.APPEND_LONG);
        }
    }

    public static LongWriter build(URI location, boolean isOverwrite) {
        return new LongFineIoWriter(
                location,
                ConnectorManager.getInstance().getConnector(),
                isOverwrite
        );
    }

    @Override
    public void flush() {
        ioFile.close();
    }

    @Override
    public void release() {
        if (ioFile != null) {
            flush();
            ioFile = null;
        }
    }

    @Override
    public void put(long pos, long val) {
        FineIO.put(ioFile, pos, val);
    }
}