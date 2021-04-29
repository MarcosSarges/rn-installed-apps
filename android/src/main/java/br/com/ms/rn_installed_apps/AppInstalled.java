package br.com.ms.rn_installed_apps;

import org.json.JSONException;
import org.json.JSONObject;

class AppInstalled {
    private String packageName;

    public AppInstalled(String packageName) {
        this.packageName = packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getPackageName() {
        return this.packageName;
    }

    public JSONObject getJSONObject() throws JSONException {
        JSONObject obj = new JSONObject();
        obj.put("packageName", getPackageName());
        return obj;
    }
}