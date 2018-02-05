package com.fr.swift.query.sort;

/**
 * Created by pony on 2018/1/23.
 */
public abstract class AbstractSort implements Sort {
    private int targetIndex;

    public AbstractSort(int targetIndex) {
        this.targetIndex = targetIndex;
    }

    @Override
    public int getTargetIndex() {
        return targetIndex;
    }
}
