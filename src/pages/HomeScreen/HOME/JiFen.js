import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, TextInput, Image, Modal, Animated, Easing, StyleSheet, Button, TouchableWithoutFeedbackComponent,DeviceEventEmitter } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native'
import axios from 'axios';
import LottieView from 'lottie-react-native';
import {NavigationContext} from '@react-navigation/native';
import { HeaderTitle } from 'react-navigation-stack'

const { width, height } = Dimensions.get("window")

export default class JiFen extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props)
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,
            modalVisible2: false,
            data: [],
            click: false,
            ziliao:[],
        }
    }

    //获取个人信息数据
    get_shuju() {
        AsyncStorage.getItem('username', (error, result) => {
        if (!error) {
            this.setState({
            username: result,
            });
            console.log('username', result);
            axios.post('http://47.100.78.254:3000/index/selectPerson', {
            username: result,
            }).then((json) => {
            this.setState({
                ziliao: json.data[0][0],
            });

            });
        } else {
            console.log('获取数据失败', error);
        }
        });
    }

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 3500,
            easing: Easing.linear,

        }).start();
        this.get_jinbi()
        this.get_shuju()
        this.listener = DeviceEventEmitter.addListener('jinbi',this.get_jinbi.bind(this))

    }

    componentWillUnmount(){
        this.listener.remove();
    }


    _openModalWin = () => {
        this.setState({ modalVisible: true });
    }
    _closeModalWin = () => {
        this.setState({ modalVisible: false });
    }

    _openModalWin2 = () => {
        this.setState({ modalVisible2: true, click: true });
        this.qiandao()
    }
    _closeModalWin2 = () => {
        this.setState({ modalVisible2: false });
    }

    get_jinbi() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                fetch('http://47.100.78.254:3000/index/select_jinbi', {
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



    qiandao() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                fetch('http://47.100.78.254:3000/index/update_jinbi', {
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



    go_ziliao(){
        const {ziliao} = this.state
        this.props.navigation.navigate('bianjiziliao', {
            username: ziliao.username,
            portrait: ziliao.portrait,
            nickname: ziliao.nickname,
            sex: ziliao.sex,
            birthday: ziliao.birthday,
            signature: ziliao.signature,
            phone: ziliao.phone,
            area: ziliao.area,
            backpic: ziliao.backpic,
          })
    }



    render() {
        const { data } = this.state
        console.log('22',this.props.route.params.portrait);
        
        return (
            <View>
                {/* <LinearGradient colors={["#7cc0c0", "#fff", "#fff"]}> */}
                    <View style={{backgroundColor:"#7cc0c0", flexDirection: "row", alignItems: "center", height: height * 0.07, width: width ,}}>
                        <TouchableOpacity activeOpacity={1} style={{width:width*0.06,marginLeft:width*0.05}}>
                        <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                            {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff"}}>金币福利</Text>
                    </View>
                    <View style={{ height: height * 0.93 }}>
                        <ScrollView>
                            <View style={{ width, height: height * 0.23, backgroundColor: "rgba(124,192,192,1)", flexDirection: "row" }}>
                                <View style={{ alignItems: "center", flexDirection: "row", height: height * 0.15,marginTop:-height*0.015}}>
                                        <View style={{width:width*0.15,height:width*0.15,borderRadius:50,marginLeft:width*0.05}}>
                                            <Image source={{uri:this.props.route.params.portrait}} style={{width:width*0.15,height:width*0.15,borderRadius:50}}/>
                                        </View>
                                        <View style={{marginLeft:width*0.025}}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 20, color: "#daa520", marginRight: 5 }}>{data.jinbi}</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: 15, color: "#fff" }}>已经连续签到</Text>
                                            <Text style={{ fontSize: 20, color: "#daa520" }}>{data.qiandao}</Text>
                                            <Text style={{ fontSize: 15, color: "#fff" }}>天</Text>
                                        </View>
                                        </View>
                                        <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.04, borderWidth: 1, justifyContent: "center",marginTop:-width*0.07, alignItems: "center", borderRadius: 20, borderColor: "#fff", marginHorizontal: 30 }}
                                        onPress={() => this.props.navigation.navigate('duihuan_jinbi')}>
                                        <Text style={{ fontSize: 15, color: "#fff" }}>金币兑换</Text>
                                    </TouchableOpacity>
                                    </View>
                                   
   
                            </View>

                            {/* 贴士 */}
                            <View style={{ width: width * 0.9, height: height * 0.45, backgroundColor: "#fff", marginHorizontal: width * 0.05, elevation: 5, marginBottom: 20, borderRadius: 10, padding: 10, marginTop: "-20%" }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontSize: 20, marginRight: 5 ,color:"#333"}}>每日签到</Text>
                                    <TouchableOpacity activeOpacity={1} onPress={this._openModalWin}>
                                        <AntDesign name='infocirlceo' />
                                    </TouchableOpacity>
                                    <Modal
                                        animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                                        transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                                        visible={this.state.modalVisible} // 是否显示 modal 窗口
                                        onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                                        onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                                    >
                                        <TouchableOpacity activeOpacity={1}
                                            style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0,0,0,.5)', }}
                                            onPress={this._closeModalWin}
                                        >
                                            <View style={{ height: height * 0.3, backgroundColor: "#fff", width: width * 0.9, padding: 15, borderRadius: 10 ,justifyContent:"center"}}>
                                                <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" ,color:"#333"}}>签到说明</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14,color:"#333" }}>1、登录用户每天可签到1次，并领取奖励。</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14 ,color:"#333"}}>2、保持每天连续签到，获得的奖励值越高。若连续签到中断，则奖励分值重新计算。</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14 ,color:"#333"}}>3、连续签到7天会得到高额积分并激活神秘礼物。</Text>
                                                <Text style={{ marginTop: 10, fontSize: 14 ,color:"#333"}}>4、如出现违规行为有权终止其签到，解释权归寻商迹所有。</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Modal>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, color: "#808080", marginTop: 10 }}>每日签到 赢金币换豪礼</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15 }}>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 1 || (data.qiandao + 7) % 7 == 0 ? '已签到' : '第1天'}</Text>
                                        <View style={{ width: width * 0.15, height: height * 0.15, marginTop: -35 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 1 || (data.qiandao + 7) % 7 == 0 ? require('../../../../animal/dakasuccess.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 1 || (data.qiandao + 7) % 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 2 || (data.qiandao + 7) % 7 == 0 ? '已签到' : '第2天'}</Text>
                                        <View style={{ width: width * 0.15, height: height * 0.15, marginTop: -35 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 2 || (data.qiandao + 7) % 7 == 0 ? require('../../../../animal/dakasuccess.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 2 || (data.qiandao + 7) % 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 3 || (data.qiandao + 7) % 7 == 0 ? '已签到' : '第3天'}</Text>
                                        <View style={{ width: width * 0.15, height: height * 0.15, marginTop: -35 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 3 || (data.qiandao + 7) % 7 == 0 ? require('../../../../animal/dakasuccess.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 3 || (data.qiandao + 7) % 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 4 || (data.qiandao + 7) % 7 == 0 ? '已签到' : '第4天'}</Text>
                                        <View style={{ width: width * 0.15, height: height * 0.15, marginTop: -35 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 4 || (data.qiandao + 7) % 7 == 0 ? require('../../../../animal/dakasuccess.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 4 || (data.qiandao + 7) % 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 5 || (data.qiandao + 7) % 7 == 0 ? '已签到' : '第5天'}</Text>
                                        <View style={{ width: width * 0.15, height: height * 0.15, marginTop: -35 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 5 || (data.qiandao + 7) % 7 == 0 ? require('../../../../animal/dakasuccess.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 5 || (data.qiandao + 7) % 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 >= 6 || (data.qiandao + 7) % 7 == 0 ? '已签到' : '第6天'}</Text>
                                        <View style={{ width: width * 0.15, height: height * 0.15, marginTop: -35 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 >= 6 || (data.qiandao + 7) % 7 == 0 ? require('../../../../animal/dakasuccess.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 >= 6 || (data.qiandao + 7) % 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                    <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#7cc0c0", borderRadius: 5, alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#fff", marginTop: 5 }}>{(data.qiandao + 7) % 7 == 0 ? '已签到' : '第七天 签到赢礼包'}</Text>
                                        <View style={{ width: width * 0.15, height: height * 0.15, marginTop: -35 }}>
                                            <LottieView source={(data.qiandao + 7) % 7 == 0 ? require('../../../../animal/dakasuccess.json') : require('../../../../animal/sign1.json')} autoPlay loop={false} progress={this.state.progress} />
                                        </View>
                                        <Image style={{ width: width * 0.15, height: height * 0.07, marginTop: -73 }} source={(data.qiandao + 7) % 7 == 0 ? { uri: '' } : require("../../HomeScreen/photos/wei.png")} />
                                    </View>
                                </View>


                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.8, height: height*0.05,elevation:5, borderRadius: 25, backgroundColor: "#7cc0c0", alignItems: "center", justifyContent: "center", marginHorizontal: width * 0.025, marginTop: 20 }}
                                    onPress={() => { this.state.click === false ? this._openModalWin2() : {} }} activeOpacity={this.state.click === false ? 0.8 : 1}   >
                                    <Text style={{ fontSize: 18, color: "#fff" }}>{this.state.click === false ? '立即签到' : '已签到'}</Text>
                                </TouchableOpacity>

                                <Modal
                                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                                    visible={this.state.modalVisible2} // 是否显示 modal 窗口
                                    onRequestClose={() => { this._closeModalWin2(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                                    onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                                >
                                    <TouchableOpacity activeOpacity={1}
                                        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0,0,0,.5)', }}
                                        onPress={this._closeModalWin2}
                                    >
                                        <View style={{ marginHorizontal: width * 0.05, height: height * 0.3, elevation: 5, backgroundColor: "#fff", width: width * 0.8, borderRadius: 10, alignItems: "center" }}>

                                            <View style={{ width: width * 0.3, height: width * 0.3 }}>
                                                <LottieView source={require('../../../../animal/gift.json')} autoPlay loop progress={this.state.progress} />
                                            </View>

                                            <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold", color: "#daa520" }} >签到成功</Text>
                                            <Text style={{ marginTop: 10, fontSize: 14 ,color:"#333"}}>恭喜你，获得6金币</Text>
                                            <Text style={{ marginTop: 10, fontSize: 14 ,color:"#333"}}>明天签到可继续获得金币哦~</Text>


                                        </View>
                                    </TouchableOpacity>
                                </Modal>
                            </View>


                            {/* 任务 */}
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10, marginBottom: 10 ,color:"#333"}}>新手任务</Text>
                            </View>
                            <View style={{ backgroundColor: "#fff", borderRadius: 10, elevation: 5, marginHorizontal: width * 0.05 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 ,color:"#333"}}>绑定手机</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 ,color:"#333"}}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>绑定手机账号更安全、不丢失~</Text></View>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.go_ziliao()} activeOpacity={1}  style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}}>去绑定</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 ,color:"#333"}}>更换用户头像</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 ,color:"#333"}}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>换一个好看的头像~</Text></View>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.go_ziliao()} activeOpacity={1} style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}}>去更换</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 ,color:"#333"}}>修改用户昵称</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 ,color:"#333"}}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>换一个好听的昵称~</Text></View>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.go_ziliao()} activeOpacity={1} style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}}>去修改</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05 }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 ,color:"#333"}}>完善个人信息</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 ,color:"#333"}}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>完善所有资料，你就不是新手啦~</Text></View>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.go_ziliao()} activeOpacity={1} style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}}>去完善</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10, marginTop: 20, marginBottom: 10 ,color:"#333"}}>日常任务</Text>
                            </View>
                            <View style={{ backgroundColor: "#fff", borderRadius: 10, elevation: 5, marginHorizontal: width * 0.05, marginBottom: 10 }}>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20,color:"#333" }}>趣味小游戏</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5,color:"#333" }}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>一起来玩吧~</Text></View>
                                    </View>
                                    <TouchableOpacity activeOpacity={1} style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}} onPress={() => this.props.navigation.navigate('MatchGame')}>去游玩</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20,color:"#333" }}>阅读一篇文章</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5,color:"#333" }}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>一起来学习吧~</Text></View>
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} activeOpacity={1} onPress={() => this.context.navigate('History')} style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}}>去阅读</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05, borderBottomWidth: 1, borderColor: "#7cc0c0" }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20 ,color:"#333"}}>发表评论</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5,color:"#333" }}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>跟大家一起讨论吧~</Text></View>
                                    </View>
                                    <TouchableOpacity activeOpacity={1} style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}}>去发表</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, height: 70, alignItems: "center", justifyContent: "space-between", marginHorizontal: width * 0.05 }}>
                                    <View >
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginRight: 20,color:"#333" }}>发表动态</Text>
                                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                                            <Text style={{ marginLeft: 5 ,color:"#333"}}>100金币</Text>
                                        </View>
                                        <View><Text style={{ fontSize: 13, color: "#808080" }}>分享你的生活~</Text></View>
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Fabu')} activeOpacity={1} onPress={() => this.context.navigate('Fabu')} style={{ borderRadius: 5, borderWidth: 1, borderColor: "#7cc0c0", width: 70, height: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{color:"#7cc0c0"}}>去发表</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                {/* </LinearGradient> */}
            </View>
        )
    }
}
