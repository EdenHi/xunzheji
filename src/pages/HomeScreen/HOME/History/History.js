import React, { Component } from 'react'
import { TouchableOpacityBase, View, TouchableOpacity, Dimensions, Image, Text, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get("window")
export default class History extends Component {
    render() {
        return (
            <View style={{}}>
                <LinearGradient style={{ width: width, height: "100%" }} colors={["#7cc0bf", "#fff", "#fff"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>浙商历史推荐</Text>
                    </View>
                    <ScrollView>
                        <View style={{ width: width, alignItems: "center" }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs', { wenzhang_id: 1 })} activeOpacity={1}>
                                < View style={{ height: 150, marginBottom: 10, elevation: 5, width: width * 0.9, marginLeft: 10, marginRight: 10, elevation: 5 }}>
                                    <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9, marginRight: 20 }} borderRadius={10} source={{ uri: 'http://8.142.11.85:3000/public/images/zs1.jpeg' }}>
                                        <View style={{ height: 150, borderRadius: 10, shadowRadius: 15, padding: 15, width: width * 0.8 }}>
                                            <View style={{ flex: 3 }} />
                                            <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>浙江商帮的崛起</Text></View>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>宁波商帮</Text></View></TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>龙游商帮</Text></View></TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>南浔商帮</Text></View></TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: 'https://img0.baidu.com/it/u=3608384836,3487578051&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=301' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic1')} activeOpacity={1} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>“浙商人”在非洲</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>浙江商人</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>尼日利亚</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=3947839322,680992620&fm=26&fmt=auto&gp=0.jpg' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic2')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>浙江“优秀建设者”</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>浙商观察</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>浙江</Text></View></TouchableOpacity>
                                            {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: 'http://img.zjol.com.cn/mlf/dzw/zsw/zjjjbd/gdxw/202104/W020210401537899975626.jpg' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic3')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>向世界一流强港攀登</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>宁波日报</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>舟山</Text></View></TouchableOpacity>
                                            {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>

                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9}} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=3947839322,680992620&fm=26&fmt=auto&gp=0.jpg' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic2')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>从“天堂之城”到“双创”热土</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>新华社</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>杭州</Text></View></TouchableOpacity>
                                            {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    </ScrollView>
                    {/* </View> */}
                </LinearGradient>
            </View>
        )
    }
}
