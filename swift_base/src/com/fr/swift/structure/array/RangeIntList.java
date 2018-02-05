package com.fr.swift.structure.array;

/**
 * Created by Lyon on 2017/11/27.
 */
public class RangeIntList implements IntList {

    private int startIndex;
    private int endIndexIncluded;
    private int size;

    protected RangeIntList(int startIndex, int endIndexIncluded) {
        if (endIndexIncluded - startIndex < 0) {
            throw new IllegalArgumentException();
        }
        this.startIndex = startIndex;
        this.endIndexIncluded = endIndexIncluded;
        this.size = endIndexIncluded - startIndex + 1;
    }

    @Override
    public void add(int value) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int get(int index) {
        if (index >= size) {
            throw new IndexOutOfBoundsException("index can't be >= size: " + index + " >= " + size);
        }
        return startIndex + index;
    }

    @Override
    public void set(int index, int val) {
        throw new UnsupportedOperationException();
    }

    @Override
    public int size() {
        return size;
    }

    @Override
    public void clear() {
        throw new UnsupportedOperationException();
    }
}
