import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, TextInput, Image, Modal, Animated, Easing, StyleSheet, Button, TouchableWithoutFeedbackComponent } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AsyncStorage } from 'react-native'
import LottieView from 'lottie-react-native';
import { HeaderTitle } from 'react-navigation-stack'

const { width, height } = Dimensions.get("window")

export default class JiFen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,
            modalVisible2: false,
            data: [],
            click:false
        }
    }

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 3500,
            easing: Easing.linear,

        }).start();

    }

    _openModalWin = () => {
        this.setState({ modalVisible: true });
    }
    _closeModalWin = () => {
        this.setState({ modalVisible: false });
    }

    _openModalWin2 = () => {
        this.setState({ modalVisible2: true,click:true });
        this.qiandao()
    }
    _closeModalWin2 = () => {
        this.setState({ modalVisible2: false });
    }

    get_jinbi() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                fetch('http://8.142.11.85:3000/index/select_jinbi', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                    })
                })
                    .then((response) => response.json())
                    .then((json) => {
                        this.setState({
                            data: json[0]
                        })
                    });
            }
        })
    }

    componentDidMount() {
        this.get_jinbi()
    }

    qiandao() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                fetch('http://8.142.11.85:3000/index/update_jinbi', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                    })
                })
            }
        })
        this.get_jinbi()
    }



    render() {
        const { data } = this.state
        return (
            <View>
                <LinearGradient colors={["#7cc0c0", "#fff", "#fff"]}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05 }}>
                        <TouchableOpacity activeOpacity={1} >
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", }}>金币福利</Text>
                    </View>
                    <View style={{ height: height * 0.93 }}>
                        <ScrollView>
                            <View style={{ width, height: height * 0.25, backgroundColor: "#7cc0c0", flexDirection: "row" }}>
                                <View style={{ alignItems: "center", flexDirection: "row", height: height * 0.15, marginHorizontal: 40 }}>
                                    <View >
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 20, color: "#daa520", marginRight: 5 }}>{data.jinbi}</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 20, color: "#fff" }}>已经连续签到 </Text>
                                            <Text style={{ fontSize: 20, color: "#daa520" }}>{data.qiandao}</Text>
                                            <Text style={{ fontSize: 20, color: "#fff" }}> 天</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{ width: width * 0.3, height: height * 0.05, borderWidth: 1, justifyContent: "center", alignItems: "center", borderRadius: 20, borderColor: "#fff", marginHorizontal: 40 }}
                                        onPress={() => this.props.navigation.navigate('duihuan_jinbi')}>
                                        <Text style={{ fontSize: 20, color: "#fff" }}>金币兑换</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* 贴士 */}
                            <View style={{ width: width * 0.9, height: height * 0.45, backgroundColor: "#fff", marginHorizontal: width * 0.05, elevation: 2, marginBottom: 20, borderRadius: 10, padding: 10, marginTop: "-20%" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 20, marginRight: 5 }}>每日签到</Text>
                                    <TouchableOpacity onPress={this._openModalWin}>
                                        <AntDesign name='infocirlceo' />
                                    </TouchableOpacity>
                                    <Modal
                                        animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                                        transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                                        visible={this.state.modalVisible} // 是否显示 modal 窗口
                                        onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                                        onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                                    >
                                        <TouchableOpacity
                                            style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0,0,0,.5)', }}
                                            onPress={this._closeModalWin}
                                        >
                                            <View style={{ marginHorizontal: width * 0.05, height: height * 0.3, backgroundColor: "#fff", width: width * 0.9, padding: 15, borderRadius: 10 }}>
                                                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>签到说明</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14 }}>1、登录用户每天可签到1次，并领取奖励。</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14 }}>2、保持每天连续签到，获得的奖励值越高。若连续签到中断，则奖励分值重新计算。</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14 }}>3、连续签到7天会得到高额积分并激活神秘礼物。</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14 }}>4、如出现违规行为有权终止其签到，解释权归寻商迹所有。</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Modal>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, color: "#808080", marginTop: 10 }}>每日签到 赢金币换豪礼</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 1 ? '已签到' : '第1天'}</Text>
                                        <View style={{ width: width * 0.12, height: height * 0.12, marginTop: -18 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 1 ? require('../../../../animal/sign2.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 1 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 2 ? '已签到' : '第2天'}</Text>
                                        <View style={{ width: width * 0.12, height: height * 0.12, marginTop: -18 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 2 ? require('../../../../animal/sign2.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 2 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 3 ? '已签到' : '第3天'}</Text>
                                        <View style={{ width: width * 0.12, height: height * 0.12, marginTop: -18 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 3 ? require('../../../../animal/sign2.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 3 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 4 ? '已签到' : '第4天'}</Text>
                                        <View style={{ width: width * 0.12, height: height * 0.12, marginTop: -18 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 4 ? require('../../../../animal/sign2.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 4 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 5 ? '已签到' : '第5天'}</Text>
                                        <View style={{ width: width * 0.12, height: height * 0.12, marginTop: -18 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 5 ? require('../../../../animal/sign2.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 5 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 6 ? '已签到' : '第6天'}</Text>
                                        <View style={{ width: width * 0.12, height: height * 0.12, marginTop: -18 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 6 ? require('../../../../animal/sign2.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 6 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{data.qiandao % 7 == 0 ? '已签到' : '第七天 签到赢礼包'}</Text>
                                        <View style={{ width: width * 0.12, height: height * 0.12, marginTop: -18 }}>
                                            <LottieView source={data.qiandao % 7 == 0 ? require('../../../../animal/sign2.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={data.qiandao / 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                </View>


                                <TouchableOpacity style={{ width: width * 0.8, height: 45, borderRadius: 25, backgroundColor: "#7cc0c0", alignItems: "center", justifyContent: "center", marginHorizontal: width * 0.025, marginTop: 20 }}
                                    onPress={() => {this.state.click === false?this._openModalWin2():{}}}  activeOpacity={this.state.click===false?0.8:1}   >
                                    <Text style={{ fontSize: 20, color: "#fff" }}>{this.state.click===false?'立即签到':'已签到'}</Text>
                                </TouchableOpacity>

                                <Modal
                                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                                    visible={this.state.modalVisible2} // 是否显示 modal 窗口
                                    onRequestClose={() => { this._closeModalWin2(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                                    onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                                >
                                    <TouchableOpacity
                                        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0,0,0,.5)', }}
                                        onPress={this._closeModalWin2}
                                    >
                                        <View style={{ marginHorizontal: width * 0.05, height: height * 0.3, elevation: 5, backgroundColor: "#fff", width: width * 0.8, borderRadius: 10, alignItems: "center" }}>

                                            <View style={{ width: width * 0.3, height: width * 0.3 }}>
                                                <LottieView source={require('../../../../animal/gift.json')} autoPlay loop progress={this.state.progress} />
                                            </View>

                                            <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold", color: "#daa520" }} >签到成功</Text>
                                            <Text style={{ marginTop: 10, fontSize: 14 }}>恭喜你，获得6金币</Text>
                                            <Text style={{ marginTop: 10, fontSize: 14 }}>明天签到可继续获得金币哦~</Text>


                                        </View>
                                    </TouchableOpacity>
                                </Modal>
                            </View>


                            {/* 任务 */}
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}>新手任务</Text>
                            </View>
                            <View style={{ backgroundColor: "#fff", borderRadius: 10, elevation: 5, marginHorizontal: width * 0.05 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text>去绑定</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text>去绑定</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text>去绑定</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05 }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text>去绑定</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10, marginTop: 20, marginBottom: 10 }}>日常任务</Text>
                            </View>
                            <View style={{ backgroundColor: "#fff", borderRadius: 10, elevation: 5, marginHorizontal: width * 0.05, marginBottom: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>游玩小游戏</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>~~~~~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text onPress={()=>this.props.navigation.navigate('MatchGame')}>去游玩</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text>去绑定</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text>去绑定</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05 }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 }}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 }}>1金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <View style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text>去绑定</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
