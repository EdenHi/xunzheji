/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image, DeviceEventEmitter } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window')
export default class tag extends Component {
    constructor(props) {
        super(props)

    }

    go_1(v) {
        let value = v;
        DeviceEventEmitter.emit('tag', value);
        this.props.navigation.goBack();

    }

    render() {
        return (
            <View>
                {/* 顶部标题栏 */}
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, backgroundColor: global.mainColor }}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff", marginLeft: 10 }} name="left" size={20} />
                    </TouchableOpacity>
                    <View style={{ width: width * 0.85, marginLeft: "2%" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>选择话题</Text>
                    </View>
                </View>
                <ScrollView
                    style={{ width: width * 0.9, marginLeft: width * 0.05, height: height * 0.93 - 20 }}
                    showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={1}
                        onPress={() => this.go_1('圣诞COS')}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>圣诞COS</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={1}
                        onPress={() => this.go_1("猫和老鼠")}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>猫和老鼠</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={1}
                        onPress={() => this.go_1("#lolita")}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>#lolita</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={1}
                        onPress={() => this.go_1("新年祝福姬")}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>新年祝福姬</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={1}
                        onPress={() => this.go_1("动漫嘉年华")}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>动漫嘉年华</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={1}
                        onPress={() => this.go_1("漫展返图")}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>漫展返图</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }} activeOpacity={1}
                        onPress={() => this.go_1("凉宫春日")}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>凉宫春日</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} activeOpacity={1}
                        onPress={() => this.go_1("圣诞COS")}>
                        <Image source={{ uri: 'https://img1.baidu.com/it/u=838322116,2644852131&fm=26&fmt=auto&gp=0.jpg' }} style={{ height: width * 0.25, width: width * 0.25, borderRadius: 20 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>圣诞COS</Text>
                            <Text>1292个小可爱</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}