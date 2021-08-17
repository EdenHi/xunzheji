/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default class jianjie extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{width:width*0.9,marginLeft:width*0.05,marginTop:20}}>
                    <Text>{`\t\t\t\t本书结合改革开放40年来中国市场经济发展变化的大背景，以40位不同职业、不同生活背景、不同阶层的普通人口吻，用见证者的视角再现普通人与中国社会变迁同呼吸、共命运的奋斗历程，展示改革开放40年的社会变迁及个人命运际遇的交汇。`}</Text>
                </View>
            </View>
        );
    }
}