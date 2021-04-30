/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  FlatList,
} from 'react-native';
import RNInstalledApps, {IObjResultArray} from 'rn-installed-apps';
//@ts-ignore
import RnBgTask from 'react-native-bg-thread';

const App = () => {
  const [pkgs, setPkgs] = useState<IObjResultArray>([]);

  const handlerOnPress = () => {
    if (Platform.OS === 'android') {
      RnBgTask.runInBackground(() => {
        RNInstalledApps.getAllApps()
          .then(list => {
            setPkgs(list);
          })
          .catch(console.error);
      });
    } else {
      console.error('Library not supported IOS');
    }
  };

  /**
   * This application is just an example,
   * I do not recommend displaying the list to the user in a FlatList,
   * as it captures ALL the applications installed on the user's device,
   * so this list is extensive.
   */
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity style={styles.button} onPress={handlerOnPress}>
        <Text>Get Permissions</Text>
      </TouchableOpacity>
      <FlatList
        data={pkgs}
        keyExtractor={(_, i) => `pgk-${i}`}
        renderItem={({item}) => {
          return (
            <View style={styles.view}>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    margin: 20,
  },
  view: {
    padding: 20,
  },
});

export default App;
