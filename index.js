/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
// import App from './src/pages/Shop/demo/open';
import App from './App';
import './src/components/comment/back'
import {name as appName} from './app.json';
import   changeSVGColor from './src/components/ChangeLottie/index'
LogBox.ignoreAllLogs(true); 

AppRegistry.registerComponent(appName, () => App);
