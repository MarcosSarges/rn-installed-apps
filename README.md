# rn-installed-apps

This library will return all applications with in Android device

## Getting started

`$ yarn add rn-installed-apps`

### Mostly automatic installation

`No additional steps needed`

### Manual installation

`IOS Not Have Supported`

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import br.com.ms.rn_installed_apps.RNInstalledAppsPackage;` to the imports at the top of the file
- Add `new RNInstalledAppsPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':rn-installed-apps'
   project(':rn-installed-apps').projectDir = new File(rootProject.projectDir, '../node_modules/rn-installed-apps/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   `implementation project(':rn-installed-apps')`

## Usage

```js
import RNInstalledApps from "rn-installed-apps";

RNInstalledApps.getAllApps().then((data) => {
  console.log(data);
});
```

## Recommendation

- I advise using a thread lib
  [react-native-bg-thread](https://github.com/Blitz-Mobile-Apps/react-native-bg-thread)
