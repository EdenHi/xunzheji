import React, { Component } from "react";
import {
    View, Text, Image, Dimensions, Animated, Modal,
    Easing, TouchableOpacity, ScrollView, StyleSheet, AsyncStorage, DeviceEventEmitter, TextInput, ToastAndroid
} from "react-native";
// import { Nav } from "../../component";//顶部标签看
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from "react-native-vector-icons/AntDesign";
import { NavigationContext } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import IconFont from "../../iconfont";
// import global from "../../utils/global";
import { PasswordInput } from 'react-native-pay-password';
const Password = 666666;
const { height, width } = Dimensions.get('window');
export default class zhifu extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,

            password: '',

            paidway: [
                {
                    id: 1,
                    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg011.21cnimg.com%2Fphoto%2F2017%2F0413%2F13%2F201217faf3a7a6a62c949082_o.jpg&refer=http%3A%2F%2Fimg011.21cnimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629772402&t=dccd52d33b8b93d2e9edfa74d2230838',
                    text: "微信支付"
                },
                {
                    id: 2,
                    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F15696%2F20170825221628-1162233375_jpg_400_320_10454.jpg%2F0&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629772465&t=a37c42f7a60343c5838602296f03379a',
                    text: "支付宝支付",
                },
                {
                    id: 3,
                    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20150724%2F20150724161913_15.png&refer=http%3A%2F%2Fstatic.open-open.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629772566&t=eab2d80662ed76a01e4a282cf61a983c',
                    text: "银行卡支付",
                },

            ],
            panduan: [
                {
                    id: 1,
                    dingdan: '待确认'
                },
                {
                    id: 2,
                    dingdan: '提交成功'
                }
            ],
            way: "请选择支付方式",
            price: this.props.route.params.price,
            dingdan: '待确认',
            goodsname: this.props.route.params.name,
            goods: this.props.route.params.jieshao,
            dizhi: '',
            username: '',
            total: 1,
            money: 0
        }
    }
    static defaultProps = {
        style: {},
        textStyle: {},
        cisabled: false
    }
    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
        }).start();
        console.log(this.props.route.params);
    }
    _openModalWin = () => {
        this.setState({ modalVisible: true });
    }

    _closeModalWin = () => {
        this.setState({ modalVisible: false });
    }
    changeTab = (index) => {
        this.setState({ activeTab: index })
        if (index == 0) {
            this.setState({ way: "微信支付" });
        }
        else if (index == 1) {
            this.setState({ way: "支付宝支付" });
        }
        else {
            this.setState({ way: "银行卡支付" });
        }
    }
    changeDingdan = () => {
        this.setState({ dingdan: '提交成功' })
    }

    //增加商品数量
    add_total() {
        this.setState({
            total: this.state.total + 1
        })
    }
    //减少商品数量
    jianshao_total() {
        if (this.state.total > 1) {
            this.setState({
                total: this.state.total - 1
            })
        }
    }
    //获取地址
    get_dizhi() {
        AsyncStorage.getItem('username', (error, result) => {
            if (!error) {
                this.setState({
                    username: result,
                });
                console.log('username', result);
                fetch('http://47.100.78.254:3000/shop/selectdizhi_2', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.length > 0) {
                            this.setState({
                                dizhi: responseJson[0],
                            });
                        }
                        console.log('dizhi', responseJson);
                    })
            } else {
                console.log('获取数据失败', error);
            }
        });
    }
    componentDidMount() {
        fetch('http://47.100.78.254:3000/users/selectmoney', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "Eden"
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson[0].usermoney);
                this.setState({
                    money: responseJson[0].usermoney
                });
            });
        console.log(this.props.route.params);
        this.get_dizhi();
        this.listener = DeviceEventEmitter.addListener('test', this.update.bind(this))
    }
    update(dizhi) {
        console.log('dizhi', dizhi);
        this.setState({
            dizhi
        });
    }

    //移除监听
    componentWillUnmount() {
        this.listener.remove();
    }

    buy() {
        fetch('http://47.100.78.254:3000/shop/insert_dingdan', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ddianpu: this.props.route.params.dianpu,
                shop_name: this.props.route.params.name,
                price: parseFloat(this.state.price * this.state.total).toFixed(2),
                num: this.state.total,
                img: this.props.route.params.pic[0],
                username: this.state.username,
                time: new Date(),
                dianpu_img: this.props.route.params.loge
            }),
        });
        if (this.state.money >= parseFloat(this.state.price * this.state.total).toFixed(2)) {
            fetch('http://47.100.78.254:3000/users/delmoney', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: "Eden",
                    addmoney: -parseFloat(this.state.price * this.state.total).toFixed(2)
                }),
            }).then()

            this._closeModalWin(), this.props.navigation.goBack(), ToastAndroid.showWithGravity('支付成功', 2000, ToastAndroid.BOTTOM)
        } else {

            this._closeModalWin(), this.props.navigation.goBack(), ToastAndroid.showWithGravity('余额不足！', 2000, ToastAndroid.BOTTOM)
        }

    }



    render() {
        const { dizhi } = this.state
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ width: width, height: "100%" }} colors={[global.mainColor, "#fff", "#fff"]} >
                    {/* <Nav title="等待买家付款" /> */}
                    <View style={{ width: width * 0.9, height: height * 0.07, flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={{ marginLeft: width * 0.05 }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <FontAwesome onPress={() => this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: "2%", color: "#fff" }}>确认订单</Text>
                    </View>
                    <ScrollView >
                        {/* 收货地址 */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddressList2')} style={{ marginTop: 5, borderRadius: 10, margin: 5, backgroundColor: "#fff", width: width * 0.9, marginLeft: width * 0.05, borderColor: global.mainColor, borderWidth: 2, flexDirection: 'row' }} activeOpacity={1}>
                            <MaterialCommunityIcons style={{height:'100%',textAlignVertical:'center',paddingLeft:width*0.025 }}
                                name="map-marker-radius"
                                size={35}
                                color={global.mainColor}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ marginTop: 5, marginLeft: 20, flexDirection: "row", }}>
                                    <Text style={{ fontSize: 16 }}>{dizhi === '' ? '' : dizhi.name}</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 40 }}>{dizhi === '' ? '' : dizhi.phone}</Text>

                                    {/* <IconFont name="jiantou" size={20} style={{ marginLeft: 130, marginTop: 15 }} /> */}
                                </View>
                                <View style={{ marginLeft: 20, marginBottom: 10, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: "#333333" }}>{dizhi === '' ? '' : dizhi.dizhi}</Text>
                                    <Text style={{ fontSize: 14, marginLeft: 10, color: "#333333" }}>{dizhi === '' ? '' : dizhi.xiangxi}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>


                        {/* 商品信息 */}
                        <View style={{ flexDirection: 'row', marginTop: 5, backgroundColor: "#fff", width: width * 0.90, borderRadius: 10, marginLeft: width * 0.05, elevation: 5 }}>
                            <View style={{ margin: 10 }}>
                                <Image style={{ width: 110, height: 110, borderRadius: 10 }} source={{ uri: this.props.route.params.pic[0] }} />
                            </View>
                            <View style={{ marginLeft: 5, justifyContent: 'space-around' }}>
                                {/* 商品名称 */}
                                <Text style={{ fontSize: 15, fontWeight: "bold", width: width * 0.45, color: "#333333" }} numberOfLines={3} >{this.state.goodsname}</Text>
                                {/* 对商品的解释或者规格 */}
                                <Text style={{ fontSize: 15, color: global.mainColor, width: width * 0.5, }} numberOfLines={1}>{this.state.goods}</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10, margin: 5, width: width * 0.9, marginLeft: width * 0.05, elevation: 5 }}>
                            <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                                <Text style={{ opacity: 0.6, fontSize: 15, color: "#333333" }}>商品价格</Text>
                                <Text style={{ opacity: 0.6, fontSize: 15, color: "#333333" }}>￥{this.state.price}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                                <Text style={{ opacity: 0.6, fontSize: 15, color: "#333333" }}>商品数量</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <AntDesign
                                        name='minussquareo'
                                        size={15}
                                        onPress={() => this.jianshao_total()} />
                                    <Text style={{ fontSize: 15, marginLeft: 10, marginRight: 10, color: "#333333" }}>{this.state.total}</Text>
                                    <AntDesign
                                        name='plussquareo'
                                        size={15}
                                        onPress={() => this.add_total()} />
                                </View>

                            </View>
                            <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginTop: 10, marginBottom: 15, marginLeft: 20 }}>
                                <Text style={{ fontSize: 15, color: "#333333" }}>合计</Text>
                                <Text style={{ fontSize: 15, color: global.mainColor, fontWeight: "bold" }}>￥{parseFloat(this.state.price * this.state.total).toFixed(2)}</Text>
                            </View>
                        </View>
                        <View>






                            <TouchableOpacity onPress={() => this.Scrollable.open()} style={{ width: width * 0.90, marginLeft: width * 0.05, justifyContent: 'space-between', alignItems: "center", height: 40, margin: 5, flexDirection: "row", backgroundColor: "white", marginTop: 10, borderRadius: 10, elevation: 5 }} activeOpacity={0.95}>
                                <Text style={{ marginLeft: 15, color: "#333333" }}>支付方式:</Text>
                                <Text style={{ marginRight: 15, color: "#333333" }}>{this.state.way}</Text>
                                {/* <IconFont name="jiantou" size={20}  /> */}
                            </TouchableOpacity>
                        </View>
                    </ScrollView >

                    <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", backgroundColor: "white", height: 70 }}>
                        <View style={{ flexDirection: "row", marginLeft: 15, alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 15, color: "#333333" }}>合计金额</Text>
                            <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold", color: global.mainColor }}>￥{parseFloat(this.state.price * this.state.total).toFixed(2)}</Text>
                        </View>

                        <TouchableOpacity onPress={this._openModalWin} activeOpacity={1} style={{ width: width * 0.3, height: "50%", backgroundColor: global.mainColor, justifyContent: "center", alignItems: "center", marginRight: "5%", borderRadius: 20, elevation: 5 }}>

                            <Text style={{ fontSize: 15, color: "#fff" }}>提交订单</Text>

                        </TouchableOpacity>
                        <Modal
                            animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                            transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                            visible={this.state.modalVisible} // 是否显示 modal 窗口
                            onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                            onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                        >

                            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}>
                                <View style={{ width: width * 0.8, marginLeft: width * 0.1, height: height * 0.33, backgroundColor: '#fff', marginTop: height * 0.3, borderRadius: 15, }}>
                                    <View style={{ flexDirection: 'row', height: '20%', justifyContent: 'space-between' }}>
                                        <AntDesign onPress={() => { this._closeModalWin() }} style={{ paddingLeft: width * 0.05, paddingTop: width * 0.05 }} name="close" size={20} />
                                        <Text style={{ height: '100%', textAlignVertical: 'center', fontsize: 25, fontWeight: 'bold', paddingRight: width * 0.05 }}>忘记密码</Text>
                                    </View>
                                    <Text style={{ textAlign: 'center', color: '#333', fontSize: 20 }}>付款金额</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 30, color: '#000', fontWeight: 'bold', marginTop: height * 0.01 }}>￥{parseFloat(this.state.price * this.state.total).toFixed(2)}</Text>
                                    <View style={{ alignSelf: 'center' }}>

                                        <PasswordInput onDone={(password) => { this.setState({ password }) }} />


                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        console.log(this.state.password);
                                        if (this.state.password == Password) {
                                            this.buy()

                                        }
                                    }} activeOpacity={1} style={{ height: height * 0.07, width: width * 0.3, alignSelf: 'center', }}>
                                        <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontSize: 20, fontWeight: 'bold', backgroundColor: global.mainColor, color: '#333', borderRadius: 15, marginTop: height * 0.03 }}>确认支付</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </Modal>

                    </View>
                    <RBSheet ref={ref => { this.Scrollable = ref; }} height={200} closeOnDragDowncustomStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }}>
                        <View>
                            <Text style={{ marginLeft: 25, fontSize: 15, marginTop: 10, color: "#333333" }}>支付方式</Text>
                            {this.state.paidway.map((item, index) => (
                                <TouchableOpacity key={item.id} onPress={() => { this.changeTab(index), this.Scrollable.close() }} style={{ alignItems: 'center', flexDirection: "row", marginTop: 15, marginLeft: 20 }}>
                                    <Image style={{ width: 30, height: 30 }} source={{ uri: item.image }} />
                                    <Text style={{ marginLeft: 10, color: "#333333" }}>{item.text}</Text>
                                </TouchableOpacity>

                            ))}
                        </View>
                    </RBSheet>
                </LinearGradient>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    modalLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContainer: {
        width: 250,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: 15
    },
});
