import React from 'react';
import { View, Text, Modal, StyleSheet, Button, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window")

export default class Exhibition2 extends React.Component {

    state = {
        modalVisible: false,
        modalVisible2: false,
        modalVisible3: false
    };

    _openModalWin = () => {
        this.setState({ modalVisible: true });
    }

    _closeModalWin = () => {
        this.setState({ modalVisible: false });
    }
    _openModalWin2 = () => {
        this.setState({ modalVisible2: true });
    }

    _closeModalWin2 = () => {
        this.setState({ modalVisible2: false });
    }
    _openModalWin3 = () => {
        this.setState({ modalVisible3: true });
    }

    _closeModalWin3 = () => {
        this.setState({ modalVisible3: false });
    }

    render() {
        return (
            <View >
                <ImageBackground style={{ width: width * 4, height: height * 0.8, elevation: 1, flexDirection: "row", justifyContent: "space-around" }} source={require("../../HomeScreen/photos/祥云2.png")} >
                    <ImageBackground resizeMode="stretch" style={{ width: width * 0.95, height: width * 0.7, marginHorizontal: width * 0.025, marginVertical: height * 0.25, justifyContent: "center", alignItems: "center", elevation: 1 }} source={{ uri: "https://img0.baidu.com/it/u=260609161,2032145387&fm=26&fmt=auto&gp=0.jpg" }}>
                        <View >
                            <TouchableOpacity onPress={this._openModalWin} >
                                <Image style={{ width: width * 0.7, height: width * 0.45 }} resizeMode='stretch' source={{ uri: "https://img1.baidu.com/it/u=1355609132,2203892174&fm=26&fmt=auto&gp=0.jpg" }} />
                            </TouchableOpacity>
                            <Modal
                                animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                                transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                                visible={this.state.modalVisible} // 是否显示 modal 窗口
                                onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                            >
                                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <TouchableOpacity style={{ width, height, justifyContent: "center", alignItems: "center" }} onPress={this._closeModalWin}        >
                                        <Image style={{ width: width * 0.9, height: width * 0.6 }} resizeMode="stretch" source={{ uri: "https://img1.baidu.com/it/u=1355609132,2203892174&fm=26&fmt=auto&gp=0.jpg" }} />
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </ImageBackground>
                    <ImageBackground resizeMode="stretch" style={{ width: width * 0.95, height: width * 0.7, marginHorizontal: width * 0.025, marginVertical: height * 0.25, justifyContent: "center", alignItems: "center", elevation: 1 }} source={{ uri: "https://img0.baidu.com/it/u=260609161,2032145387&fm=26&fmt=auto&gp=0.jpg" }}>
                        <View >
                            <TouchableOpacity onPress={this._openModalWin2} >
                                <Image style={{ width: width * 0.7, height: width * 0.45 }} resizeMode='stretch' source={{ uri: "https://img1.baidu.com/it/u=1355609132,2203892174&fm=26&fmt=auto&gp=0.jpg" }} />
                            </TouchableOpacity>
                            <Modal
                                animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                                transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                                visible={this.state.modalVisible2} // 是否显示 modal 窗口
                                onRequestClose={() => { this._closeModalWin2(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                            >
                                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <TouchableOpacity style={{ width, height, justifyContent: "center", alignItems: "center" }} onPress={this._closeModalWin2}        >
                                        <Image style={{ width: width * 0.9, height: width * 0.6 }} resizeMode="stretch" source={{ uri: "https://img1.baidu.com/it/u=1355609132,2203892174&fm=26&fmt=auto&gp=0.jpg" }} />
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </ImageBackground>
                    <ImageBackground resizeMode="stretch" style={{ width: width * 0.95, height: width * 0.7, marginHorizontal: width * 0.025, marginVertical: height * 0.25, justifyContent: "center", alignItems: "center", elevation: 1 }} source={{ uri: "https://img0.baidu.com/it/u=260609161,2032145387&fm=26&fmt=auto&gp=0.jpg" }}>
                        <View >
                            <TouchableOpacity onPress={this._openModalWin3} >
                                <Image style={{ width: width * 0.7, height: width * 0.45 }} resizeMode='stretch' source={{ uri: "https://img1.baidu.com/it/u=1355609132,2203892174&fm=26&fmt=auto&gp=0.jpg" }} />
                            </TouchableOpacity>
                            <Modal
                                animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                                transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                                visible={this.state.modalVisible3} // 是否显示 modal 窗口
                                onRequestClose={() => { this._closeModalWin3(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                            >
                                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <TouchableOpacity style={{ width, height, justifyContent: "center", alignItems: "center" }} onPress={this._closeModalWin3}        >
                                        <Image style={{ width: width * 0.9, height: width * 0.6 }} resizeMode="stretch" source={{ uri: "https://img1.baidu.com/it/u=1355609132,2203892174&fm=26&fmt=auto&gp=0.jpg" }} />
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                    </ImageBackground>
                </ImageBackground>
                <View style={{ width: width * 0.3, height: height * 0.2, elevation: 5, position: "absolute" }}>
                    <Image style={{ width: width * 0.3, height: height * 0.2, marginTop: "450%" }} source={require("../../HomeScreen/photos/花卉3.png")} />
                </View>
            </View>
        );
    }
}


