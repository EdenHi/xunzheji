/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View } from 'react-native';
import WebView from 'react-native-webview';

export default class go_map extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <WebView source={{uri:'https://uri.amap.com/navigation?from=116.478346,39.997361,startpoint&to=116.3246,39.966577,endpoint&via=116.402796,39.936915,midwaypoint&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=0'}}
                style={{height:100,width:100}}/>
            </View>
        );
    }
}