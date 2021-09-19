import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Easing, Animated, Image, Dimensions, ImageBackground, BVLinearGradient, DeviceEventEmitter, TouchableOpacity, AsyncStorage } from 'react-native';

import LottieView from 'lottie-react-native';

import changeSVGColor from '../../../components/ChangeLottie';

const { width, height } = Dimensions.get('window');



export default class Refresh extends Component {
    constructor(props) {
        super(props)
        this.state = {
            f:0,
            progress: new Animated.Value(0),

        }
    }
        render(){
            return (
                <TouchableOpacity activeOpacity={1} onPress={() => {  this.setState({ f: 0 }) }} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor }}>
                    <Text style={{ fontSize: 14, color: 'grey', marginLeft: -width * 0.12, marginTop: height * 0.01, paddingLeft: width * 0.02, width: width * 0.15 }}>换一批</Text>
                    <LottieView style={{ width: width * 0.1, marginTop: -15 }} source={changeSVGColor(require('../../../../animal/lf30_editor_k7r6hiyb.json'), global.mainColor)} progress={this.state.progress} />
                </TouchableOpacity>
            )
        }

    }
