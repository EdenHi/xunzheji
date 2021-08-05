import React, { Component } from 'react'
import { Dimensions, View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import JiangRen from './WebView/JiangRen'



const { width, height } = Dimensions.get("window")

export default class Jiang extends Component {
    render() {
        return (
            <View style={{}}>
                <LinearGradient colors={["#7cc0c0", "#fff", "#fff"]}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,width, justifyContent:"space-around", }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" ,width:width*0.7,textAlign:"center"}}>全部匠人</Text>
                        <TouchableOpacity activeOpacity={1}  >
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" ,opacity:0}} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={{height:height*3}}>
                            <View ><Image style={{ width: width * 0.95, height: 150 ,marginHorizontal:width*0.025,borderRadius:10}} source={{ uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0715%252Ffa5afaedj00qwa5v60028c000ht009lm.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630755380&t=623957cc28eb7097a68b72e090085b00" }} /></View>

                            <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}  >

                                <JiangRen tabLabel='陶瓷器' />
                                <JiangRen tabLabel='雕刻' />
                                <JiangRen tabLabel='书画篆刻' />
                                <JiangRen tabLabel='刺绣纺织' />
                                <JiangRen tabLabel='民间艺术' />
                                <JiangRen tabLabel='文化生活' />


                            </ScrollableTabView>

                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}
