package com.fr.bi.cal.analyze.report.report.widget.chart.types;

import com.fr.bi.cal.analyze.report.report.widget.VanChartWidget;
import com.fr.bi.conf.report.map.BIMapInfoManager;
import com.fr.bi.conf.report.map.BIWMSManager;
import com.fr.general.Inter;
import com.fr.json.JSONArray;
import com.fr.json.JSONException;
import com.fr.json.JSONObject;
import com.fr.stable.StringUtils;

import java.awt.*;
import java.util.Map;

/**
 * Created by eason on 2017/2/27.
 */
public class VanMapWidget extends VanChartWidget{

    private String subType = StringUtils.EMPTY;

    private static final String THEME = "#04b1c2";

    public void parseJSON(JSONObject jo, long userId) throws Exception {

        super.parseJSON(jo, userId);

        if(jo.has("subType")){
            subType = StringUtils.EMPTY;
        }
    }

    public JSONObject createOptions(JSONObject globalStyle, JSONObject data) throws Exception{
        JSONObject options = super.createOptions(globalStyle, data);

        BIMapInfoManager manager = BIMapInfoManager.getInstance();

        for (Map.Entry<String, Integer> entry : manager.getinnerMapLayer().entrySet()) {
            if(entry.getValue() == 0){
                subType = entry.getKey();
                break;
            }
        }

        String d = manager.getinnerMapPath().get(subType);
        String n = manager.getinnerMapTypeName().get(subType);

        JSONObject geo = JSONObject.create().put("data", d).put("name", n);

        JSONObject settings = this.getDetailChartSetting();

        if(settings.optBoolean("isShowBackgroundLayer")){
            JSONObject config = BIWMSManager.getInstance().getWMSInfo(settings.optString("backgroundLayerInfo"));
            geo.put("tileLayer", config.optString("url"));
        }

        options.put("geo", geo);

        return options;
    }

    protected JSONObject parseLegend(JSONObject settings) throws JSONException{

        JSONObject legend = super.parseLegend(settings);

        JSONArray mapStyle;
        if(settings.optInt("styleRadio", AUTO) == AUTO){
            legend.put("range", JSONObject.create().put("color", settings.optString("chartColor")));
        }else{
            mapStyle = settings.optJSONArray("mapStyle");
            legend.put("range", this.mapStyleToRange(mapStyle));
        }

        legend.put("continuous", false);

        return legend;
    }

    protected JSONObject populateDefaultSettings() throws JSONException {
        JSONObject settings = super.populateDefaultSettings();

        settings.put("isShowBackgroundLayer", true);

        settings.put("backgroundLayerInfo", Inter.getLocText("BI-GAO_DE_MAP"));

        settings.put("styleRadio", AUTO);

        settings.put("chartColor", THEME);

        //todo 自动的时候应该可以删掉
        settings.put("mapStyle", JSONArray.create());

        return settings;
    }

    protected JSONArray parseColors(JSONObject settings, JSONObject globalStyle, JSONObject plateConfig) throws Exception{
        return JSONArray.create().put(settings.optString("chartColor", THEME));
    }

    public JSONArray createSeries(JSONObject originData) throws Exception {
        JSONArray series = JSONArray.create();
        if(!originData.has("c")){
            return series;
        }

        String[] targetIDs = this.getUsedTargetID();
        BIMapInfoManager manager = BIMapInfoManager.getInstance();

        for(int i = 0, seriesCount = targetIDs.length; i < seriesCount; i++){
            JSONArray data = JSONArray.create(), rawData = originData.getJSONArray("c");
            String id = targetIDs[i];
            for(int j = 0, dataCount = rawData.length(); j < dataCount; j++){
                JSONObject item = rawData.getJSONObject(j);
                double value = item.getJSONArray("s").getDouble(i);
                String areaName =  item.optString("n");

                JSONObject datum = JSONObject.create().put("name", areaName).put("value", value);

                if(item.has("c")){
                    JSONObject drillDown = JSONObject.create();
                    String mapPath = manager.getinnerMapName().get(areaName);
                    drillDown.put("series", this.createSeries(item));
                    drillDown.put("geo", JSONObject.create().put("data", mapPath).put("name", areaName));
                    datum.put("drilldown", drillDown);
                }

                data.put(datum);
            }

            series.put(JSONObject.create().put("data", data).put("name", this.getDimensionNameByID(id)).put("dimensionID", id));
        }

        return series;
    }

    public String getSeriesType(String dimensionID){
        return "areaMap";
    }

    protected String getLegendType(){
        return "rangeLegend";
    }

    protected String getTooltipIdentifier(){
        return NAME + SERIES + VALUE;
    }

}
