import React, { Component } from 'react'
import { TouchableOpacityBase, View, TouchableOpacity, StyleSheet, Dimensions, Image, Text, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("window")
export default class History extends Component {
    render() {
        return (
            <View>
                <LinearGradient style={{ width: width, height: "100%" }} colors={[global.mainColor, "#fff", "#fff"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
                        <TouchableOpacity activeOpacity={1} style={{ width: width * 0.06, }}>
                            <FontAwesome onPress={() => this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85 }}>浙商历史推荐</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ width: width, alignItems: "center" }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Zs', { wenzhang_id: 1 })} activeOpacity={1}>
                                < View style={{ height: 150, marginBottom: 10, elevation: 5, width: width * 0.9, marginLeft: 10, marginRight: 10, elevation: 5 }}>
                                    <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9, marginRight: 20 }} borderRadius={10} source={{ uri: 'http://47.100.78.254:3000/public/images/zs1.jpeg' }}>
                                        <View style={{ height: 150, borderRadius: 10, shadowRadius: 15, padding: 15, width: width * 0.8 }}>
                                            <View style={{ flex: 3 }} />
                                            <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>浙江商帮的崛起</Text></View>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <TouchableOpacity activeOpacity={1}><View style={{
                                                        borderRadius: 5,
                                                        marginRight: 5,
                                                        backgroundColor: global.mainColor,
                                                        width: 55,
                                                        alignItems: 'center',
                                                        elevation: 5,
                                                        justifyContent: "center",
                                                        padding: 1
                                                    }}><Text style={{ fontSize: 12, color: "#fff" }}>宁波商帮</Text></View></TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}><View style={{
                                                        borderRadius: 5,
                                                        marginRight: 5,
                                                        backgroundColor: global.mainColor,
                                                        width: 55,
                                                        alignItems: 'center',
                                                        elevation: 5,
                                                        justifyContent: "center",
                                                        padding: 1
                                                    }}><Text style={{ fontSize: 12, color: "#fff" }}>龙游商帮</Text></View></TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}><View style={{
                                                        borderRadius: 5,
                                                        marginRight: 5,
                                                        backgroundColor: global.mainColor,
                                                        width: 55,
                                                        alignItems: 'center',
                                                        elevation: 5,
                                                        justifyContent: "center",
                                                        padding: 1
                                                    }}><Text style={{ fontSize: 12, color: "#fff" }}>南浔商帮</Text></View></TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: 'https://img0.baidu.com/it/u=3608384836,3487578051&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=301' }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Topic1', { wenzhang_id: 2 })} activeOpacity={1} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>“浙商人”在非洲</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>浙江商人</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>尼日利亚</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>非洲</Text></View></TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=3947839322,680992620&fm=26&fmt=auto&gp=0.jpg' }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Topic2', { wenzhang_id: 3 })} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>浙江“优秀建设者”</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>浙商观察</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>浙江</Text></View></TouchableOpacity>
                                            {/* <TouchableOpacity activeOpacity={1}><View style={ styles.Comment}><Text style={{ fontSize: 12 ,color:"#fff"}}>非洲</Text></View></TouchableOpacity> */}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: 'http://img.zjol.com.cn/mlf/dzw/zsw/zjjjbd/gdxw/202104/W020210401537899975626.jpg' }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Topic3', { wenzhang_id: 4 })} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>向世界一流强港攀登</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>宁波日报</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>舟山</Text></View></TouchableOpacity>
                                            {/* <TouchableOpacity activeOpacity={1}><View style={ styles.Comment}><Text style={{ fontSize: 12 ,color:"#fff"}}>非洲</Text></View></TouchableOpacity> */}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>

                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=3947839322,680992620&fm=26&fmt=auto&gp=0.jpg' }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Topic2', { wenzhang_id: 5 })} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                    <View style={{ flex: 3 }} />
                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>从“天堂之城”到“双创”热土</Text></View>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>新华社</Text></View></TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}><View style={{
                                                borderRadius: 5,
                                                marginRight: 5,
                                                backgroundColor: global.mainColor,
                                                width: 55,
                                                alignItems: 'center',
                                                elevation: 5,
                                                justifyContent: "center",
                                                padding: 1
                                            }}><Text style={{ fontSize: 12, color: "#fff" }}>杭州</Text></View></TouchableOpacity>
                                            {/* <TouchableOpacity activeOpacity={1}><View style={ styles.Comment}><Text style={{ fontSize: 12 ,color:"#fff"}}>非洲</Text></View></TouchableOpacity> */}
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
const styles = StyleSheet.create({

})
