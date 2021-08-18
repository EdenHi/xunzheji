/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View } from 'react-native';
import WebView from 'react-native-webview';

export default class book_xiangqing extends Component {
    render() {
        return (
            <WebView
            source={{uri:'http://www.duokan.com/reader/www/app_mobile.html?id=9dda09ffc9d647e48df8ba093aee94f2'}}/>
        );
    }
}