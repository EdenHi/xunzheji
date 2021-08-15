import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import LinearGradient from 'react-native-linear-gradient'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper'
import renwu from './business/renwu.json'

const { width, height } = Dimensions.get("window")

export default class LiuYu extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={['#7cc0c0', '#fff', '#fff']}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>浙商人物介绍</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ width }}>
                            <View style={{ flexDirection: "row", height: width * 0.56, marginHorizontal: width * 0.05, alignItems: "center" }}>
                                <Image style={{ width: width * 0.4, elevation: 5, height: width * 0.5, borderRadius: 10 }} source={{ uri: this.props.route.params.pic1 }} />
                                <View>
                                    <View style={{ width: width * 0.5, marginLeft: 10 }}>
                                        <Text style={{ fontSize: 15, flexWrap: "wrap", lineHeight: 25 }}>{this.props.route.params.name}</Text>
                                        <Text style={{ fontSize: 12, flexWrap: "wrap", lineHeight: 25 }}>{this.props.route.params.jieshao}</Text>
                                        <Text style={{ fontSize: 12, flexWrap: "wrap", lineHeight: 25 }}>{this.props.route.params.jieshao2}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: width * 0.05 }}>
                                <View style={{ width: width * 0.9, height: 30, justifyContent: "center", marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>人物简介</Text></View>
                                <View style={{ width: width * 0.9, backgroundColor: "#fff", elevation: 5, borderWidth: 1, borderRadius: 10, borderColor: "#7cc0c0", borderStyle: "dashed",marginBottom:10 }}>
                                    <Text style={{ fontSize: 13, lineHeight: 25, marginVertical: width * 0.025, marginHorizontal: width * 0.025 }}>
                                        {this.props.route.params.jianjie}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    

                </LinearGradient>
            </View>
        )
    }
}
