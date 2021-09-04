import React, { Component } from 'react'
import { View, ScrollView, Text, Dimensions, TouchableOpacity, ImageBackground, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Exhibition from './Exhibition'
import Exhibition2 from './Exhibition2'
import Exhibition3 from './Exhibition3'
import AntDesign from 'react-native-vector-icons/AntDesign'


const { width, height } = Dimensions.get("window")

export default class Zhan extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={[global.back2, "#fff", "#f4a460", "#f4a460", "#f4a460", "#f4a460", "#f4a460", "#f4a460", "#f4a460", "#8b4513"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>展览馆</Text>
                    </View>
                    <ScrollView horizontal={true} >
                        {/* <ImageBackground style={{ height: height * 0.8 }} source={{ uri: "https://img1.baidu.com/it/u=2332409694,365761318&fm=26&fmt=auto&gp=0.jpg" }}> */}
                        <View style={{ flexDirection: "row" }}>
                            <Exhibition />
                            <Exhibition2 />
                            <Exhibition3 />
                        </View>
                        {/* </ImageBackground> */}
                       
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}
