import React, { Component } from 'react';
import { TouchableOpacityBase } from 'react-native';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  FlatList,Dimensions
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import Draw from './draw/index'
const {width, height} = Dimensions.get('window');
export default function drawpic() {
  return (
    <View style={{ width:width,height:height ,alignItems:"center"}}>
         <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,width:width, justifyContent: "center" ,backgroundColor:"#fff"}}>
                <TouchableOpacity
                 activeOpacity={1} style={{}}>
                    <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#333333" }} name="left" size={20} color="#000000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333", width: width * 0.85, marginLeft: "2%" }}>灵魂画手定制专区</Text>
            </View>
        <View style={{width:width,height:height*0.93}}>
      <Draw  >
      </Draw>
      </View>  
      <TouchableOpacity style={{width:width*0.5,height:height*0.05,borderRadius:20,elevation:5,backgroundColor:"#7cc0c0",position:"absolute",marginTop:height*0.8,alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"#fff"}}>去定制</Text>
      </TouchableOpacity>
    </View>
  );
}