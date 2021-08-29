/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View } from 'react-native';
import WebView from 'react-native-webview';

export default class go_map extends Component {
    render() {
        console.log('1',this.props.route.params.to);
        return (
            <View style={{flex:1}}>
                <WebView source={{uri:`https://uri.amap.com/navigation?from=120.156339,30.315248,startpoint&to=${this.props.route.params.to},endpoint&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=0`}}
                style={{height:'100%',width:'100%'}}/>
            </View>
        );
    }
}