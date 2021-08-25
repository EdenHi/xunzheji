import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get("window")

export default class XiaoXi extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={{ height: height * 0.07, alignItems: "center", flexDirection: "row", backgroundColor: "#7cc0c0", elevation: 1 }}>
                    <AntDesign name='left' size={20} color='#fff' />
                    <Text style={{ fontSize: 18, color: "#fff", marginLeft: 10, fontWeight: "bold" }}>消息</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: width * 0.1, justifyContent: "space-between", height: height * 0.15 }}>
                    <View style={{ width: width * 0.2, height: width * 0.15, alignItems: "center" }}>
                        <Image source={require('../HomeScreen/photos/q.png')} style={{ width: width * 0.1, height: width * 0.1 }} />
                        <Text style={{ fontSize: 15, color: "#7cc0c0", marginTop: 10 }}>赞和收藏</Text>
                    </View>
                    <View style={{ width: width * 0.2, height: width * 0.15, alignItems: "center" }}>
                        <Image source={require('../HomeScreen/photos/e.png')} style={{ width: width * 0.1, height: width * 0.1 }} />
                        <Text style={{ fontSize: 15, color: "#7cc0c0", marginTop: 10 }}>评论和@</Text>
                    </View>
                    <View style={{ width: width * 0.2, height: width * 0.15, alignItems: "center" }}>
                        <Image source={require('../HomeScreen/photos/r.png')} style={{ width: width * 0.1, height: width * 0.1 }} />
                        <Text style={{ fontSize: 15, color: "#7cc0c0", marginTop: 10 }}>我想要</Text>
                    </View>
                </View>
                <View>
                    <View style={{ width: width * 0.9, height: height * 0.1, flexDirection: "row" ,backgroundColor:"#fff",alignItems:"center",marginHorizontal:width*0.05,marginBottom:20,elevation:1,borderRadius:10}}>
                        <Image source={{ uri: "https://img1.baidu.com/it/u=2034495355,3217564887&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50,marginLeft:10 }} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:15,fontWeight:"bold",marginBottom:5}}>是寻商迹啊</Text>
                            <Text style={{fontSize:13}}>是寻商迹啊，阿巴阿巴阿布阿巴阿巴阿布</Text>
                        </View>
                    </View>
                    <View style={{ width: width * 0.9, height: height * 0.1, flexDirection: "row" ,backgroundColor:"#fff",alignItems:"center",marginHorizontal:width*0.05,marginBottom:20,elevation:1,borderRadius:10}}>
                        <Image source={{ uri: "https://img1.baidu.com/it/u=2034495355,3217564887&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50,marginLeft:10 }} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:15,fontWeight:"bold",marginBottom:5}}>是寻商迹啊</Text>
                            <Text style={{fontSize:13}}>是寻商迹啊，阿巴阿巴阿布阿巴阿巴阿布</Text>
                        </View>
                    </View>
                    <View style={{ width: width * 0.9, height: height * 0.1, flexDirection: "row" ,backgroundColor:"#fff",alignItems:"center",marginHorizontal:width*0.05,marginBottom:20,elevation:1,borderRadius:10}}>
                        <Image source={{ uri: "https://img1.baidu.com/it/u=2034495355,3217564887&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50,marginLeft:10 }} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:15,fontWeight:"bold",marginBottom:5}}>是寻商迹啊</Text>
                            <Text style={{fontSize:13}}>是寻商迹啊，阿巴阿巴阿布阿巴阿巴阿布</Text>
                        </View>
                    </View>
                    <View style={{ width: width * 0.9, height: height * 0.1, flexDirection: "row" ,backgroundColor:"#fff",alignItems:"center",marginHorizontal:width*0.05,marginBottom:20,elevation:1,borderRadius:10}}>
                        <Image source={{ uri: "https://img1.baidu.com/it/u=2034495355,3217564887&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50,marginLeft:10 }} />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:15,fontWeight:"bold",marginBottom:5}}>是寻商迹啊</Text>
                            <Text style={{fontSize:13}}>是寻商迹啊，阿巴阿巴阿布阿巴阿巴阿布</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
