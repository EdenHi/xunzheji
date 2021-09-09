import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
import { ImageBackground } from 'react-native';
const {width, height} = Dimensions.get('window');

export default class culture extends Component {
  render() {

    return (
        <View style={{ flex: 1, alignItems: "center" }}>
        <LinearGradient style={{ width: width, height: "100%" ,alignItems:"center"}} colors={[global.mainColor, "#fff", "#fff"]} >
            <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
                <TouchableOpacity
                 activeOpacity={1} style={{}}>
                    <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>定制</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
                    
             activeOpacity={1} style={{width:width*0.9,height:height*0.25,backgroundColor:"#fff",borderRadius:15,marginBottom:"5%",elevation:5}}>
              <ImageBackground imageStyle={{borderRadius:15,}} style={{width:"100%",height:"100%"}} resizeMode="stretch" source={require("../img/bao.jpg")}>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('ClothesMade')}
            activeOpacity={1} style={{width:width*0.9,height:height*0.25,backgroundColor:"#fff",borderRadius:15,marginBottom:"5%",elevation:5}}>
            <ImageBackground imageStyle={{borderRadius:15,}} style={{width:"100%",height:"100%"}} resizeMode="stretch" source={require("../img/T2.jpg")}>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate('drawpic')}
            activeOpacity={1} style={{width:width*0.9,height:height*0.25,backgroundColor:"#fff",borderRadius:15,marginBottom:"5%",elevation:5}}>
            <ImageBackground imageStyle={{borderRadius:15,}} style={{width:"100%",height:"100%"}} resizeMode="stretch" source={require("../img/pin.jpg")}>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={{width:width*0.9,height:height*0.25,backgroundColor:"#fff",borderRadius:15,marginBottom:"5%",elevation:5}}>
            <ImageBackground imageStyle={{borderRadius:15,}} style={{width:"100%",height:"100%"}} resizeMode="stretch" source={require("../img/ke.jpg")}>
              </ImageBackground>
            </TouchableOpacity>
            </ScrollView>
            </LinearGradient>
            </View>
    );
  }
}
