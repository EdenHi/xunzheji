/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,TouchableOpacity,Text,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'

const {width,height} = Dimensions.get('window')
export default class Exchange_want extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1}} colors={["#7cc0bf", "#fff", "#fff"]}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft:"2%"}}>我想要</Text>
                        {/* <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="sound" size={20} color="#000000" />
                        </TouchableOpacity> */}
                    </View>
                </LinearGradient>
            </View>
        );
    }
}