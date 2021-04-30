
package br.com.ms.rn_installed_apps;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.util.Log;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;

public class RNInstalledAppsModule extends ReactContextBaseJavaModule {

    private static final String TAG = "RNInstalledAppsLog";

    private final ReactApplicationContext reactContext;

    public RNInstalledAppsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNInstalledApps";
    }

    @ReactMethod
    public void getAllApps(Promise promise) {
        try {
            PackageManager pm = reactContext.getPackageManager();
            List<ApplicationInfo> packages = pm.getInstalledApplications(PackageManager.GET_META_DATA);
            WritableArray appsInstalled = new WritableNativeArray();

            for (ApplicationInfo applicationInfo : packages) {
                appsInstalled.pushString(applicationInfo.packageName);
            }
            promise.resolve(appsInstalled);
        } catch (Exception e) {
            promise.reject("Error RNInstalledApps", "Error RNInstalledApps", e);
        }
    }
}