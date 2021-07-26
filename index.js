/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import textInput from './src/components/textInput';
import {Login, Register} from "./src/pages/index"
import { TopTab } from './src/nav/LoginNav';
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);
