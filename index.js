/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/pages/horiz';
// import App from './src/pages/Forum/UserDetails/people';
import {name as appName} from './app.json';
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);
