import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, ImageBackground, BVLinearGradient, RefreshControl, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import EZSwiper from 'react-native-ezswiper';



const { width, height } = Dimensions.get('window');


export default class fans extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPressed: false
        }
        this.isPresse = this.isPresse.bind(this)
    }
    isPresse() {
        if (this.state.isPressed == false)
            this.setState({ isPressed: true }, () => { })
        else {
            this.setState({ isPressed: false }, () => { })
        }

    }

    render() {
        return (
                <View style={{width:width}}>
                     <LinearGradient colors={['#7cc0bf', '#fff', '#fff']}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", height: height*0.07,width:width, alignItems: "center" }}>
                        <TouchableOpacity style={{ width: width * 0.2, height: 20 }}>
                            <AntDesign name="left" size={20} />
                        </TouchableOpacity>
                        <View style={{ height: 30, marginTop: 5 }}>
                            <Text style={{ fontSize: 15 }}>
                                我的粉丝
                            </Text>
                        </View>
                        <TouchableOpacity style={{ width: width * 0.2, height: 20 }}></TouchableOpacity>
                    </View>
                    <View style={{height:height*0.93}}>
                        <ScrollView>
                            <View style={{ marginLeft:width*0.05,borderRadius:10,width: width * 0.9, height: 80, flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10,backgroundColor:"#fff",elevation:5}}>
                                <View style={{ marginLeft: 15 }}><Image style={{ width: width * 0.15, height: width * 0.15, borderRadius: 100 }} source={require("../HomeScreen/photos/concern1.jpeg")} /></View>
                                <View>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto" }}>哈士奇呀</Text>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto",fontSize:12 }}>我是柴犬，你个假粉！</Text>
                                </View>  
                                         <TouchableOpacity style={styles.btn1}  >
                                             <Text>关注</Text>
                                         </TouchableOpacity>
                            </View>
                            <View style={{  marginLeft:width*0.05,borderRadius:10,width: width * 0.9, height: 80, flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10,backgroundColor:"#fff",elevation:5}}>
                                <View style={{ marginLeft: 15 }}><Image style={{ width: width * 0.15, height: width * 0.15, borderRadius: 100 }} source={require("../HomeScreen/photos/concern1.jpeg")} /></View>
                                <View>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto" }}>哈士奇呀</Text>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto" ,fontSize:12 }}>我是柴犬，你个假粉！</Text>
                                </View>  
                                         <TouchableOpacity style={styles.btn1}>
                                         <Text>关注</Text>
                                         </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft:width*0.05, borderRadius:10,width: width * 0.9, height: 80, flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10,backgroundColor:"#fff",elevation:5}}>
                                <View style={{ marginLeft: 15 }}><Image style={{ width: width * 0.15, height: width * 0.15, borderRadius: 100 }} source={require("../HomeScreen/photos/concern1.jpeg")} /></View>
                                <View>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto" }}>哈士奇呀</Text>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto" ,fontSize:12 }}>我是柴犬，你个假粉！</Text>
                                </View>  
                                         <TouchableOpacity style={styles.btn1} >
                                         <Text>关注</Text>
                                         </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft:width*0.05, borderRadius:10,width: width * 0.9, height: 80, flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10,backgroundColor:"#fff",elevation:5}}>
                                <View style={{ marginLeft: 15 }}><Image style={{ width: width * 0.15, height: width * 0.15, borderRadius: 100 }} source={require("../HomeScreen/photos/concern1.jpeg")} /></View>
                                <View>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto" }}>哈士奇呀</Text>
                                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto",fontSize:12  }}>我是柴犬，你个假粉！</Text>
                                </View>  
                                         <TouchableOpacity style={styles.btn1} >
                                         <Text>关注</Text>
                                         </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    </LinearGradient>
                </View>
           
        )
    }
}
const styles=StyleSheet.create({
    btn1:{
        backgroundColor: "#808080", 
        width: width * 0.18, 
        height: width * 0.08, 
        borderRadius: 20, 
        alignItems: "center", 
        justifyContent: "center", 
        marginLeft: 40
    },
    btn2:{
        backgroundColor: "red", 
        width: width * 0.18, 
        height: width * 0.07, 
        borderRadius: 20, 
        alignItems: "center", 
        justifyContent: "center", 
        marginLeft: 40
    },
})


