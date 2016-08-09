/**
 * 条形图预览
 * Created by Fay on 2016/7/13.
 */
BI.DataLabelBarChart = BI.inherit(BI.Widget, {
    _defaultConfig: function () {
        var conf = BI.DataLabelBarChart.superclass._defaultConfig.apply(this, arguments);
        return BI.extend(conf, {
            baseCls: ""
        });
    },

    _init: function () {
        BI.DataLabelBarChart.superclass._init.apply(this, arguments);
        var title = BI.createWidget({
            type: "bi.label",
            text: "预览"
        });
        this.data = [[{
            "data": [
                {"x": "孙林", "y": 40},
                {"x": "金士鹏", "y": 70},
                {"x": "张珊", "y": 100},
                {"x": "孙阳", "y": 30},
                {"x": "袁成洁", "y": 10}
            ],
            "name": "scores"
        }]];
        this.xAxis = [{type: "category"}];
        this.combineChart = BI.createWidget({
            type: "bi.combine_chart",
            width: 150,
            height: 130,
            xAxis: this.xAxis,
            formatConfig: BI.bind(this._formatConfig, this)
        });
        BI.createWidget({
            type: "bi.absolute",
            cls: "bi-data-tab-bar-chart",
            element: this.element,
            items: [{
                el: this.combineChart,
                left: -5,
                top: 10
            }, {
                el: title,
                left: 20,
                top: 5
            }],
            width: 150,
            height: 130
        });
    },

    _formatConfig: function (config, items) {
        config.legend.enabled = false;
        config.legend.margin = 0;
        config.xAxis[0].showLabel = false;
        config.xAxis[0].enableTick = false;
        config.yAxis[0].showLabel = false;
        config.yAxis[0].lineWidth = 0;
        config.yAxis[0].tickInterval = 25;
        config.plotOptions.dataLabels.enabled = true;
        config.plotOptions.dataLabels.align = "inside";
        config.plotOptions.dataLabels.style = {
            color: "#ffffff"
        };
        return [items, config];
    },

    // _formatItems: function(items){
    //     return BI.map(items, function(idx, item){
    //         var i = BI.UUID();
    //         return BI.map(item, function(id, it){
    //             return BI.extend({}, it, {dataLabels: {
    //                 style: {
    //                     color: "red"
    //                 }
    //             }});
    //         });
    //     });
    // },

    populate: function (src) {
        if (src) {
            var formatter = "function() { return '<div><img width="+"20px"+" height="+"20px"+" src="+src+"></div>'}";
            this.data[0][0].data[0].dataLabels = {
                enabled: true,
                align: "outside",
                useHtml: true,
                formatter: formatter
            };
        }
        this.combineChart.populate(this.data);
    }
});
BI.DataLabelBarChart.EVENT_CHANGE = "BI.DataLabelBarChart.EVENT_CHANGE";
$.shortcut("bi.data_label_bar_chart", BI.DataLabelBarChart);