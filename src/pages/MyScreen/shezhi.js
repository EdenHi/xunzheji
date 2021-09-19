/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Dimensions, AsyncStorage, DeviceEventEmitter, Touchable } from 'react-native';
import { ListItem } from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from "react-native-switch-selector";
import ClearCaches from './Caches'
import { getCacheSize, clearCache } from '@damoness/react-native-http-cache';
const { height, width } = Dimensions.get('window');
const options = [
    { label: "日间", value: ['#7cc0c0', '#fff', '#333'] },
    { label: "黑夜", value: ['#145A59', '#1B1B1B', '#fff'] },
    { label: "自定义", value: "2" }
];
const Touchoptions = [
    { label: '关闭', value: '关闭' },
    { label: '开启', value: '开启' }
]
export default class shezhi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f: 1,
            TouchID: '关闭',
            TouchNum: 0,
            caches: 0
        }
    }


    go_back() {
        AsyncStorage.removeItem('username');
        this.props.navigation.navigate('Login');
    }
    fresh() {
        AsyncStorage.getItem('TouchID', (error, result) => {
            if (!error) {
                console.log(1, result);
                if (result === "开启") {
                    this.setState({ TouchNum: 1 })
                    console.log('kaiqi', this.state.TouchNum);
                }
            }
        })
    }
    refresh() {
        this.setState({ f: 0 })
    }
    componentDidMount() {

        this.fresh()
        this.listerner = DeviceEventEmitter.addListener('PickColor', (msg) => { global.back([msg, '#fff']), DeviceEventEmitter.emit('yanse', 1), this.setState({ f: this.state.f + 1 }) })
    }
    componentWillUnmount() {
        this.listerner.remove();
    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: "#eee" }}>
                <View style={{ flexDirection: "row", backgroundColor: global.mainColor, alignItems: "center", height: height * 0.07, justifyContent: "center", marginBottom: "5%" }}>
                    <TouchableOpacity activeOpacity={1} style={{ width: width * 0.06, }}>
                        <FontAwesome onPress={() => this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: global.backColor, width: width * 0.85 }}>设置</Text>
                </View>
                <View style={{ width: '95%', alignSelf: 'center', height: height * 0.7 }}>

                    {/* 主题色 */}
                    <TouchableOpacity style={{ height: height * 0.05, backgroundColor: "#fff", marginVertical: 5, borderRadius: 10 }}>
                        <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20 }}>主题色</Text>
                    </TouchableOpacity>
                    <SwitchSelector
                        style={{ marginTop: 10 }}
                        selectedColor={'#fff'}
                        buttonColor={global.mainColor}
                        borderColor={global.mainColor}

                        options={options}
                        initial={0}
                        onPress={value => {
                            if (value !== '2') { global.back(value), DeviceEventEmitter.emit('yanse', 1), this.setState({ f: this.state.f + 1 }) }
                            else {
                                this.props.navigation.navigate('ColorPicker')
                            }
                        }}
                    />
                    {/* 指纹解锁 */}
                    <TouchableOpacity style={{ height: height * 0.05, marginVertical: 7 }}>
                        <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20, backgroundColor: '#fff', marginVertical: 5 ,borderRadius:10}}>指纹解锁</Text>
                    </TouchableOpacity>

                    <SwitchSelector
                        style={{ marginTop: 10, marginBottom: 7 }}
                        selectedColor={'#fff'}
                        buttonColor={global.mainColor}
                        borderColor={global.mainColor}

                        options={Touchoptions}
                        initial={this.state.TouchNum}
                        onPress={value => {

                            {
                                AsyncStorage.setItem('TouchID', value, (error) => {
                                    if (!error) {
                                        console.log('保存成功');
                                    } else {
                                        console.log('保存失败', error);
                                    }
                                }), this.setState({ f: this.state.f + 1 }, this.setState({ TouchID: value }))
                            }

                        }}
                    />

                    <ClearCaches />
                    <TouchableOpacity style={{ height: height * 0.05, backgroundColor: '#fff', marginVertical: 5, borderRadius: 10 }}>
                        <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20 }}>支付密码</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height * 0.05, backgroundColor: '#fff', marginVertical: 5, borderRadius: 10, }}>
                        <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20 }}>版本更新</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height * 0.05, backgroundColor: '#fff', marginVertical: 5, borderRadius: 10 }}>
                        <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20 }}>账号与安全</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height * 0.05, backgroundColor: '#fff', marginVertical: 5, borderRadius: 10 }}>
                        <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20 }}>帮助与反馈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height * 0.05, backgroundColor: '#fff', marginVertical: 5, borderRadius: 10 }}>
                        <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20 }}>关于寻商迹</Text>
                    </TouchableOpacity>

                </View>



                <View>


                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: global.mainColor, width: width * 0.8, marginLeft: width * 0.1, height: height * 0.075, borderRadius: 25, marginTop: height * 0.05 }}
                        onPress={() => this.go_back()}>
                        <Text style={{ fontSize: 18, color: global.backColor, height: '100%', textAlignVertical: 'center', textAlign: 'center' }}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
