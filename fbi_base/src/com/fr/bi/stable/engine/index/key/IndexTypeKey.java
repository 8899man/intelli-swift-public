package com.fr.bi.stable.engine.index.key;

/**
 * Created by GUY on 2015/4/13.
 */
public class IndexTypeKey extends IndexKey {

    private static final long serialVersionUID = -2935597841851172521L;
    protected int type;

    public IndexTypeKey(String index, int type) {
        super(index);
        this.type = type;
    }

    public int getType() {
        return type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o){
            return true;
        }
        if (!(o instanceof IndexTypeKey)){
            return false;
        }
        if (!super.equals(o)) {
            return false;
        }

        IndexTypeKey indexKey = (IndexTypeKey) o;

        return type == indexKey.type;

    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + type;
        return result;
    }

    @Override
    public String toString() {
        return "IndexTypeKey{" +
                "type=" + type +
                '}'+super.toString();
    }
}