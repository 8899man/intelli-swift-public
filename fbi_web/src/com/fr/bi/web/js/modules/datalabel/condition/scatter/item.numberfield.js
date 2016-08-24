/**
 * Created by fay on 2016/8/22.
 */
BI.ScatterNumberFieldFilterItem = BI.inherit(BI.AbstractFilterItem, {
    _constant: {
        LEFT_ITEMS_H_GAP: 5,
        CONTAINER_HEIGHT: 40,
        BUTTON_HEIGHT: 30,
        COMBO_WIDTH: 120,
        FIELD_NAME_BUTTON_WIDTH: 80,
        TEXT_BUTTON_H_GAP: 10,
        INPUT_WIDTH: 230,
        LABEL_WIDTH: 30
    },

    _defaultConfig: function () {
        return BI.extend(BI.ScatterNumberFieldFilterItem.superclass._defaultConfig.apply(this, arguments), {
            extraCls: "data-label-condition-item",
            afterValueChange: BI.emptyFn
        })
    },

    _init: function () {
        BI.ScatterNumberFieldFilterItem.superclass._init.apply(this, arguments);
        var self = this, o = this.options;

        this.isDimension = false;
        var wId = BI.Utils.getWidgetIDByDimensionID(o.dId);
        if (BI.contains(BI.Utils.getAllDimDimensionIDs(wId), o.dId)) {
            this.isDimension = true;
        }
        var left = this._buildConditions();
        this.styleSetting = this._createStyle(o.style_setting);
        this.deleteButton = BI.createWidget({
            type: "bi.icon_button",
            cls: "close-h-font"
        });
        this.deleteButton.on(BI.Controller.EVENT_CHANGE, function () {
            self.destroy();
            BI.ScatterNumberFieldFilterItem.superclass.destroy.apply(this, arguments);
        });

        BI.createWidget({
            type: "bi.vertical",
            cls: "item-content",
            element: this.element,
            items: [{
                type: "bi.left_right_vertical_adapt",
                height: this._constant.CONTAINER_HEIGHT,
                items: {
                    left: [left[0], left[1], left[2], left[3]],
                    right: [this.styleSetting, this.deleteButton]
                },
                lhgap: this._constant.LEFT_ITEMS_H_GAP,
                rhgap: this._constant.LEFT_ITEMS_H_GAP
            }]
        });
    },

    populate: function (item) {
        this.filterType.setValue(item.filter_type);
        this._refreshFilterWidget(item.filter_type, item.filter_value);
    },

    _buildConditions: function () {
        var self = this, o = this.options;
        o.filter_type = this.isDimension === false ? o.filter_type : BICst.DATA_LABEL_FILTER_STRING.BELONG_VALUE;
        if (BI.isNull(o.dId)) {
            return [];
        }
        var fieldName = BI.Utils.getDimensionNameByID(o.dId);
        var targets = BI.Utils.getWidgetViewByID(BI.Utils.getWidgetIDByDimensionID(o.dId));
        if (BI.contains(targets[30000], o.dId)) {
            fieldName = BI.i18nText("BI-Uppercase_Y_Axis");
        }
        if (BI.contains(targets[40000], o.dId)) {
            fieldName = BI.i18nText("BI-Uppercase_X_Axis");
        }
        this.fieldButton = BI.createWidget({
            type: "bi.text_button",
            text: fieldName,
            title: fieldName,
            width: this._constant.FIELD_NAME_BUTTON_WIDTH,
            height: this._constant.BUTTON_HEIGHT,
            textAlign: "left",
            hgap: this._constant.TEXT_BUTTON_H_GAP
        });
        this.fieldButton.on(BI.Controller.EVENT_CHANGE, function () {
            arguments[2] = self;
            self.fireEvent(BI.Controller.EVENT_CHANGE, arguments);
        });
        this.filterWidgetContainer = BI.createWidget({
            type: "bi.left"
        });
        this.filterType = BI.createWidget({
            type: "bi.text_value_down_list_combo",
            width: this._constant.COMBO_WIDTH,
            height: this._constant.BUTTON_HEIGHT,
            items: this.isDimension ? BICst.DATA_LABEL_FILTER_STRING_COMBO : BICst.DATA_LABEL_FILTER_NUMBER_COMBO
        });
        this.filterType.setValue(o.filter_type);
        this.filterType.on(BI.TextValueDownListCombo.EVENT_CHANGE, function () {
            self._refreshFilterWidget(self.filterType.getValue()[0]);
            o.afterValueChange.apply(self, arguments);
        });
        this._refreshFilterWidget(o.filter_type, this.options.filter_value);

        return [this.fieldButton, this.filterType, this.filterWidgetContainer];
    },

    _refreshFilterWidget: function (filterType, initData) {
        switch (filterType) {
            case BICst.DATA_LABEL_FILTER_STRING.BELONG_VALUE:
            case BICst.DATA_LABEL_FILTER_STRING.NOT_BELONG_VALUE:
                var addItem = this._createStringBelongCombo(initData);

                break;
            case BICst.DATA_LABEL_FILTER_STRING.CONTAIN:
            case BICst.DATA_LABEL_FILTER_STRING.NOT_CONTAIN:
                var addItem = this._createStringInput(initData);
                break;
            case BICst.DATA_LABEL_FILTER_STRING.IS_NULL:
            case BICst.DATA_LABEL_FILTER_STRING.NOT_NULL:
                this.filterWidget = BI.createWidget();
                var addItem = this.filterWidget;
                break;
            case BICst.DATA_LABEL_FILTER_STRING.BEGIN_WITH:
            case BICst.DATA_LABEL_FILTER_STRING.END_WITH:
                var addItem = this._createStringInput(initData);
                break;
            case BICst.DATA_LABEL_FILTER_NUMBER.EQUAL_TO:
            case BICst.DATA_LABEL_FILTER_NUMBER.NOT_EQUAL_TO:
                var addItem = this._createNumberInput(initData);
                break;
            case BICst.DATA_LABEL_FILTER_NUMBER.BELONG_VALUE:
            case BICst.DATA_LABEL_FILTER_NUMBER.NOT_BELONG_VALUE:
                var addItem = this._createNumberIntervalFilter(initData);
                break;
            case BICst.DATA_LABEL_FILTER_NUMBER.BELONG_USER:
            case BICst.DATA_LABEL_FILTER_NUMBER.NOT_BELONG_USER:
                var addItem = this._createNumberIntervalFilter(initData);
                break;
            case BICst.DATA_LABEL_FILTER_NUMBER.TOP_N:
                var addItem = this._createRank(initData);
                break;
            case BICst.DATA_LABEL_FILTER_NUMBER.LARGE_OR_EQUAL_CAL_LINE:
            case BICst.DATA_LABEL_FILTER_NUMBER.SMALL_THAN_CAL_LINE:
            case BICst.DATA_LABEL_FILTER_NUMBER.IS_NULL:
            case BICst.DATA_LABEL_FILTER_NUMBER.NOT_NULL:
                this.filterType.setWidth(this._constant.COMBO_WIDTH);
                this.filterRange && this.filterRange.setWidth(this._constant.COMBO_WIDTH);
                this.filterWidget = BI.createWidget();
                var addItem = this.filterWidget;
                break;
        }
        this.filterWidgetContainer.empty();
        this.filterWidgetContainer.addItem(addItem);
    },

    _createStringInput: function (initData) {
        var self = this, o = this.options;
        this.filterWidget = BI.createWidget({
            type: "bi.sign_editor",
            cls: "condition-operator-input",
            allowBlank: true,
            height: this._constant.BUTTON_HEIGHT,
            width: this._constant.INPUT_WIDTH
        });
        this.filterWidget.on(BI.SignEditor.EVENT_CONFIRM, function () {
            o.afterValueChange.apply(self, arguments);
        });
        BI.isNotNull(initData) && this.filterWidget.setValue(initData);
        return this.filterWidget;
    },

    _createStringBelongCombo: function (initData) {
        var o = this.options, self = this;
        this.filterWidget = BI.createWidget({
            type: "bi.select_dimension_data_combo",
            dId: o.dId,
            width: this._constant.INPUT_WIDTH,
            height: this._constant.BUTTON_HEIGHT
        });

        this.filterWidget.on(BI.SelectFieldDataCombo.EVENT_CONFIRM, function () {
            o.afterValueChange.apply(self, arguments);
        });
        BI.isNotNull(initData) && this.filterWidget.setValue(initData);
        return this.filterWidget;
    },

    _createNumberIntervalFilter: function (initData) {
        var self = this, o = this.options;
        this.filterWidget = BI.createWidget({
            type: "bi.numerical_interval",
            width: this._constant.INPUT_WIDTH,
            height: this._constant.BUTTON_HEIGHT
        });
        BI.isNotNull(initData) && this.filterWidget.setValue(initData);
        this.filterWidget.on(BI.NumericalInterval.EVENT_CHANGE, function () {
            o.afterValueChange.apply(self, arguments);
        });
        return this.filterWidget;
    },

    _createNumberInput: function (initData) {
        var self = this, o = this.options;
        this.filterWidget = BI.createWidget({
            type: "bi.text_editor",
            validationChecker: function () {
                if (!BI.isNumeric(self.filterWidget.getValue())) {
                    return false;
                }
            },
            errorText: BI.i18nText("BI-Numerical_Interval_Input_Data"),
            allowBlank: true,
            height: this._constant.BUTTON_HEIGHT,
            width: this._constant.INPUT_WIDTH
        });
        this.filterWidget.on(BI.TextEditor.EVENT_CONFIRM, function () {
            o.afterValueChange.apply(self, arguments);
        });
        BI.isNotNull(initData) && this.filterWidget.setValue(initData);
        return BI.createWidget({
            type: "bi.inline",
            items: [{
                type: "bi.label",
                height: this._constant.BUTTON_HEIGHT,
                text: "N = ",
                width: this._constant.LABEL_WIDTH
            }, this.filterWidget]
        });
    },

    _createRank: function (initData) {
        var self = this, o = this.options;
        this.filterWidget = BI.createWidget({
            type: "bi.text_editor",
            validationChecker: function () {
                if (!BI.isNumeric(self.filterWidget.getValue())) {
                    return false;
                }
            },
            errorText: BI.i18nText("BI-Numerical_Interval_Input_Data"),
            allowBlank: true,
            height: this._constant.BUTTON_HEIGHT,
            width: this._constant.INPUT_WIDTH
        });
        this.filterWidget.on(BI.TextEditor.EVENT_CONFIRM, function () {
            o.afterValueChange.apply(self, arguments);
        });
        BI.isNotNull(initData) && this.filterWidget.setValue(initData);
        return BI.createWidget({
            type: "bi.inline",
            items: [{
                type: "bi.label",
                height: this._constant.BUTTON_HEIGHT,
                text: "N = ",
                width: this._constant.LABEL_WIDTH
            }, this.filterWidget]
        });
    },

    _createStyle: function (initData) {
        var self = this, o = this.options;
        var chartType = BI.Utils.getWidgetTypeByID(BI.Utils.getWidgetIDByDimensionID(o.dId));
        this.style = BI.createWidget({
            type: "bi.data_label_style_set",
            chartType: chartType
        });
        BI.isNotNull(initData) && this.style.setValue(initData);
        return this.style;
    },

    getValue: function () {
        return {
            target_id: this.options.dId,
            filter_type: this.filterType.getValue()[0],
            filter_value: this.filterWidget.getValue(),
            filter_range: this.filterRange ? this.filterRange.getValue() : "",
            style_setting: this.style.getValue()
        }
    }
});
$.shortcut("bi.scatter_number_field_filter_item", BI.ScatterNumberFieldFilterItem);