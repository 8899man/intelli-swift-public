/**
 * @class BIShow.StringWidgetView
 * @extends BI.View
 * @type {*|void|Object}
 */
BIShow.StringWidgetView = BI.inherit(BI.View, {
    _defaultConfig: function () {
        return BI.extend(BIShow.StringWidgetView.superclass._defaultConfig.apply(this, arguments), {
            baseCls: "bi-dashboard-widget"
        })
    },

    _init: function () {
        BIShow.StringWidgetView.superclass._init.apply(this, arguments);
        var self = this;
        BI.Broadcasts.on(BICst.BROADCAST.RESET_PREFIX + this.model.get("id"), function(){
            self._resetValue();
        });
    },


    _render: function (vessel) {
        var self = this;
        this._buildWidgetTitle();
        this._createTools();
        
        this.combo = BI.createWidget({
            type: "bi.select_data_combo",
            wId: this.model.get("id")
        });

        this.combo.on(BI.SelectDataCombo.EVENT_CONFIRM, function () {
            self.model.set("value", this.getValue());
        });

        this.widget = BI.createWidget({
            type: "bi.absolute",
            element: vessel,
            items: [{
                el: this.title,
                top: 10,
                left: 10
            }, {
                el: this.combo,
                top: 10,
                right: 10
            }, {
                el: this.tools,
                top: 0,
                right: 10
            }]
        });
        this.widget.element.hover(function(){
            self.tools.setVisible(true);
        }, function(){
            self.tools.setVisible(false);
        });
        
    },

    _buildWidgetTitle: function () {
        var self = this;
        var id = this.model.get("id");
        if (!this.title) {
            this.title = BI.createWidget({
                type: "bi.shelter_editor",
                cls: "dashboard-title-left",
                value: BI.Utils.getWidgetNameByID(id),
                textAlign: "left",
                height: 30,
                allowBlank: false,
                errorText: BI.i18nText("BI-Control_Widget_Name_Can_Not_Repeat"),
                validationChecker: function(v){
                    return BI.Utils.checkWidgetNameByID(v, id);
                }
            });
            this.title.on(BI.ShelterEditor.EVENT_CHANGE, function(){
                self.model.set("name", this.getValue());
            });
        } else {
            this.title.setValue(BI.Utils.getWidgetNameByID(this.model.get("id")));
        }
    },

    _createTools: function(){
        var self = this;
        this.tools = BI.createWidget({
            type: "bi.icon_button",
            cls: "widget-tools-clear-font show-tools",
            title: BI.i18nText("BI-Clear_Selected_Value"),
            width: 16,
            height: 16
        });
        this.tools.on(BI.IconButton.EVENT_CHANGE, function(){
            self._resetValue();
        });
        this.tools.setVisible(false);
    },

    _refreshLayout: function(){
        var bounds = this.model.get("bounds");
        var height = bounds.height, width = bounds.width;
        var widgetName = this.model.get("name");
        var minComboWidth = 70;     //默认combo的最小宽度
        var minNameWidth = 30;      //默认editor的最小宽度
        var nameWidth = BI.DOM.getTextSizeWidth(widgetName, 16);
        // width =  5 + 10 + (4 + nameWidth + 4) + 10 + comboWidth + 10 + 5
        if(height < 100) {
            this.widget.attr("items")[1].top = 10;
            if(width < minComboWidth + minNameWidth + 48) {
                this.combo.setVisible(false);
                this.widget.attr("items")[0].right = 10;
            } else if(width < nameWidth + minComboWidth + 48) {
                this.combo.setVisible(true);
                this.widget.attr("items")[0].right = minComboWidth + 25;
                this.widget.attr("items")[1].left = width - 15 - minComboWidth;
            } else {
                this.combo.setVisible(true);
                this.widget.attr("items")[0].right = width - 33 - nameWidth;
                this.widget.attr("items")[1].left = 33 + nameWidth;
            }
        } else {
            this.widget.attr("items")[0].right = 10;
            this.widget.attr("items")[1].top = 50;
            this.widget.attr("items")[1].left = 10;
        }
        this.widget.resize();
    },

    _expandWidget: function () {
        var wId = this.model.get("id");
        var type = this.model.get("type");
        this.addSubVessel("detail", "body", {
            isLayer: true
        }).skipTo("detail", "detail", "detail", {}, {
            id: wId
        })
    },

    _resetValue: function(){
        this.model.set("value");
        this.refresh();
    },

    splice: function(){
        BI.Utils.broadcastAllWidgets2Refresh();
    },

    listenEnd: function () {

    },

    change: function (changed) {
        if(BI.has(changed, "bounds")) {
            this._refreshLayout();
        }
        if(BI.has(changed, "value") || BI.has(changed, "dimensions")) {
            BI.Utils.broadcastAllWidgets2Refresh();
        }
    },

    local: function () {
        return false;
    },

    refresh: function () {
        this._refreshLayout();
        this._buildWidgetTitle();
        this.combo.setValue(this.model.get("value"));
    }
});