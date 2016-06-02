function environment() {
    function init(widgets, layoutType) {
        var dims = {};
        BI.each(widgets, function (id, widget) {
            BI.extend(dims, widget.dimensions);
        });
        Data.SharingPool.put("dimensions", dims);
        Data.SharingPool.put("widgets", widgets);
        if (layoutType != null) {
            Data.SharingPool.put("layoutType", layoutType);
        }
    }

    var dimensions = {1: {}, 2: {}};
    var widgets = {
        1: {
            type: BICst.WIDGET.TABLE,
            dimensions: dimensions,
            view: {10000: ["1", "2"]},
            bounds: {
                left: 0,
                top: 0,
                width: 200,
                height: 200
            }
        }
    };
    init(widgets, BI.Arrangement.LAYOUT_TYPE.ADAPTIVE);

    return {
        deleteDimensionById: function (id) {
            delete dimensions[id];
            BI.each(widgets, function (i, wi) {
                BI.each(wi.view, function (i, v) {
                    if (v.contains(id)) {
                        BI.remove(v, id);
                    }
                })
            });
            init(widgets);
        }
    }
}