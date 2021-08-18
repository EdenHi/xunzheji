import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Dimensions, Image,TextInput,Animated, Modal,
    Easing } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import LottieView from 'lottie-react-native';
import {NavigationContext} from '@react-navigation/native';

const { width, height } = Dimensions.get("window")

export default class Dingdan extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,}
            
        
        }
        
        componentDidMount() {
            Animated.timing(this.state.progress, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
            }).start();
    
           
        }
        _openModalWin = () => {
            this.setState({ modalVisible: true });
        }
    
        _closeModalWin = () => {
            this.setState({ modalVisible: false });
        }
    render() {
        return (
            <View>
                <LinearGradient colors={["#7CC0C0","#fff","#fff"]}>
                
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05 }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign   onPress={() => {
                                                   this.context.navigate('Shopdetails')
                                                }} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <View style={{marginLeft:10}}><Text style={{fontSize:15,fontWeight:"bold",color:"#fff"}}>订单</Text></View>
                    </View>
           
                <View style={{height:height*0.93}}>
                    <ScrollView>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 ,color:"#333333"}}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#7cc0c0" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" ,color:"#333333"}}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: width*0.25 }}><Text style={{color:"#7CC0C0"}}>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" ,fontSize:12}}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", flexDirection:"row-reverse" }}>
                                {/* <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>申请退款</Text></View> */}
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#7cc0c0" }}><Text style={{ fontSize: 14, color: "#7cc0c0" }}>确认收货</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>申请退款</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 ,color:"#333333"}}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#7cc0c0" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" ,color:"#333333"}}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: width*0.25 }}><Text style={{color:"#7CC0C0"}}>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" ,fontSize:12}}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", flexDirection:"row-reverse" }}>
                                {/* <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>申请退款</Text></View> */}
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#7cc0c0" }}><Text style={{ fontSize: 14, color: "#7cc0c0" }}>确认收货</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>申请退款</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 ,color:"#333333"}}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#7cc0c0",right:0}}>
                                   已收货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" ,color:"#333333"}}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: width*0.25 }}><Text style={{color:"#7CC0C0"}}>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" ,fontSize:12}}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", flexDirection:"row-reverse" }}>
                                {/* <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>申请退款</Text></View> */}
                                <TouchableOpacity onPress={this._openModalWin} style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#7cc0c0" }}><Text style={{ fontSize: 14, color: "#7cc0c0" }}>确认收货</Text></TouchableOpacity>
                                <Modal
                            animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                            transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                            visible={this.state.modalVisible} // 是否显示 modal 窗口
                            onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                            onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                        >
                            <TouchableOpacity

                                style={{ height: '100%', width: '100%', position: "absolute", top: 0, left: 0 }}
                            // onPress={this._closeModalWin}
                            >
                                <View style={styles.modalLayer}>

                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {

                                        }}
                                    >
                                        <View style={styles.modalContainer}>
                                            <View style={{
                                                width: 150,
                                                height: '45%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <LottieView source={require('../../../animal/success.json')}  autoPlay loop  progress={this.state.progress} />
                                            </View>
                                            <View style={{
                                                width: '100%',
                                                height: '25%',
                                                alignItems: 'center',

                                            }}>
                                                <Text style={{ fontSize: 20, color: "#7cc0c0" }}>收货成功</Text>
                                            </View>
                                            <View style={{width:"60%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                            <TouchableOpacity style={{}}
                                                onPress={() => {
                                                    this._closeModalWin()
                                                   this.context.navigate('Shopdetails')
                                                }}

                                            >
                                                <Text style={{ fontSize: 15 }}>确定</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{}}
                                                onPress={() => {
                                                    this._closeModalWin()
                                                   this.context.navigate('discuss')
                                                }}

                                            >
                                                <Text style={{ fontSize: 15,color:"#7cc0c0" }}>去评论</Text>
                                            </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </Modal>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>申请退款</Text></TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    
                   
                </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
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

