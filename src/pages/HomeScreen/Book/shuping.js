/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default class shuping extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{width:width*0.9,marginLeft:width*0.05,marginTop:20}}>
                    <Text>书评</Text>
                </View>
            </View>
        );
    }
}