/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
<<<<<<< HEAD
// import App from './src/pages/load/index';
 import App from './App';
=======
import App from './App';
//import App from './src/components/danmu/Barrage';
>>>>>>> 1ec4c85d1ba4ada8477e6c1041fe78eaa44ce65f
import {name as appName} from './app.json';
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);
