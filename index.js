/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
// import App from './src/pages/Forum/UserDetails/people';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => App);
