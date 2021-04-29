import { NativeModules } from "react-native";

const { RNInstalledApps: RNInstalledAppsModule } = NativeModules;

const getAllApps = async () => {
  return await RNInstalledAppsModule.getAllApps();
};

const RNInstalledApps = {
  getAllApps,
};

export default RNInstalledApps;
