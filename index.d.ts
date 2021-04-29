export type packageName = string;

export type IObjResultArray = packageName[];

export default RNInstalledApps;
declare namespace RNInstalledApps {
  export { getAllApps };
}
declare function getAllApps(): Promise<IObjResultArray>;
