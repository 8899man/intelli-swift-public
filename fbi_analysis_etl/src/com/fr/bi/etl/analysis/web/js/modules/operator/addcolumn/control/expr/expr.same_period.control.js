/**
 * Created by 小灰灰 on 2016/4/5.
 */
BI.AnalysisETLOperatorAddColumnExprSamePeriodController = BI.inherit(BI.AnalysisETLOperatorAddColumnExprPeriodController, {
    _checkCanSave : function (widget, model) {
        if (BI.isNull(model.get('period'))){
            widget.fireEvent(BI.TopPointerSavePane.EVENT_CHECK_SAVE_STATUS, false, BI.i18nText('BI-Property_Not_Setted',  BI.i18nText('BI-Year_Fen')));
        } else if (BI.isNull(model.get('monthSeason'))){
            widget.fireEvent(BI.TopPointerSavePane.EVENT_CHECK_SAVE_STATUS, false, BI.i18nText('BI-Property_Not_Setted',  BI.i18nText('BI-Month_Fen') + '/'+ BI.i18nText('BI-Base_Quarter')));
        } else {
            BI.AnalysisETLOperatorAddColumnExprSamePeriodController.superclass._checkCanSave.apply(this, arguments);
        }
    },

    _getSelectedFields : function (model) {
        var fields = [];
        if (BI.isNotNull(model.get('period'))){
            fields.push(model.get('period'));
        }
        if (BI.isNotNull(model.get('monthSeason'))){
            fields.push(model.get('monthSeason'));
        }
        return fields.concat(BI.AnalysisETLOperatorAddColumnExprSamePeriodController.superclass._getSelectedFields.apply(this, arguments));
    },

    _refreshCombo : function (widget, model) {
        BI.AnalysisETLOperatorAddColumnExprSamePeriodController.superclass._refreshCombo.apply(this, arguments);
        widget.year.populate(this._createLeftItems(model));
        widget.year.setValue(model.get('period'));
        widget.monthSeason.populate(this._createLeftItems(model));
        widget.monthSeason.setValue(model.get('monthSeason'));
    },

    _refreshComboValue : function (combo, oldValue, widget, model) {
        BI.AnalysisETLOperatorAddColumnExprSamePeriodController.superclass._refreshComboValue.apply(this, arguments);
        if (combo !== widget.year && combo.getValue()[0] === model.get('period')){
            widget.year.setValue(oldValue);
            model.set('period', oldValue);
        }
        if (combo !== widget.monthSeason && (combo.getValue()[0] === model.get('monthSeason'))){
            widget.monthSeason.setValue(oldValue);
            model.set('monthSeason', oldValue);
        }
    },

    setYearField : function (value, widget, model) {
        var oldValue = model.get('period');
        model.set('period', value);
        this._refreshComboValue(widget.year, oldValue, widget, model)
        this._afterValueSetted(widget, model);
    },

    setMonthSeasonField :function (value, widget, model) {
        var oldValue = model.get('monthSeason');
        model.set('monthSeason', value);
        this._refreshComboValue(widget.monthSeason, oldValue, widget, model)
        this._afterValueSetted(widget, model);
    },

    populate : function (widget, model) {
        BI.AnalysisETLOperatorAddColumnExprSamePeriodController.superclass.populate.apply(this, arguments);
        widget.year.populate(this._createLeftItems(model));
        widget.year.setValue(model.get('period'));
        widget.monthSeason.populate(this._createLeftItems(model));
        widget.monthSeason.setValue(model.get('monthSeason'));
        this._afterValueSetted(widget, model);
    },

    _populateLabel : function (widget, model) {
        widget.labels.empty();
        var text =  BI.i18nText('BI-Calculate_Target_Each_Value_Get', model.get('monthSeason') || '', model.get('field')||'');
        widget.labels.addItem(
            BI.createWidget({
                type : 'bi.label',
                cls : 'detail-label',
                textAlign : 'left',
                height : 25,
                text : text, 
                title : text
            })
        )
        this._populateDownLabel(widget.labels, model);
    },
    _populateDownLabel : function (label, model) {
        var group = model.get('group') || [];
        BI.each(group, function (i, item) {
            var text = BI.i18nText('BI-Calculate_Target_Include_In_Same', item);
            label.addItem(
                BI.createWidget({
                    type : 'bi.label',
                    cls : 'detail-label',
                    textAlign : 'left',
                    text : text,
                    title : text
                })
            )
        })
        var text = BI.i18nText('BI-Calculate_Target_Last_Include_In_Same', model.get('period') || '', model.get('monthSeason') || '');
        label.addItem(
            BI.createWidget({
                type : 'bi.label',
                cls : 'detail-label',
                textAlign : 'left',
                text : text,
                title : text
            })
        )
        label.addItem(
            BI.createWidget({
                type : 'bi.label',
                cls : 'detail-label',
                textAlign : 'left',
                text : BI.i18nText('BI-Brackets_Value', model.get('field')||'')
            })
        )
    }
})