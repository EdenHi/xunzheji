import React, { Component } from "react";
import { View, Text, Image,Dimensions,Animated, Modal,
    Easing, TouchableOpacity, ScrollView, StyleSheet, AsyncStorage,DeviceEventEmitter } from "react-native";
    import { ToastAndroid } from "react-native";
// import { Nav } from "../../component";//顶部标签看
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import {NavigationContext} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import IconFont from "../../iconfont";
// import global from "../../utils/global";
const {height,width} = Dimensions.get('window');
export default class duihuan extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,
           
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
            dingdan:'待确认',
            goodsname:this.props.route.params.name,

            dizhi:'',
            username:'',
            total:1,
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
   
    changeDingdan = ()=>{
        this.setState({dingdan:'提交成功'})
    }

    
    //获取地址
    get_dizhi(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
                console.log('username',result);
                fetch('http://47.100.78.254:3000/shop/selectdizhi_2', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username:result,
                    }),
                    }) .then((response) => response.json())
                    .then((responseJson) => {
                        if(responseJson.length>0){
                            this.setState({
                                dizhi:responseJson[0],
                            });
                        }
                        console.log('dizhi',responseJson);
                    })
            } else {
                console.log('获取数据失败',error);
            }
        });
    }
    componentDidMount(){
        console.log(this.props.route.params);
        this.get_dizhi();
        this.listener = DeviceEventEmitter.addListener('test',this.update.bind(this))
    }
    update(dizhi){
        console.log('dizhi',dizhi);
        this.setState({
            dizhi
        });
    }
    
    //移除监听
    componentWillUnmount(){
        this.listener.remove();
        }

    buy(){
        fetch('http://47.100.78.254:3000/shop/insert_dingdan', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dianpu: this.props.route.params.dianpu,
                shop_name: this.props.route.params.name,
                price: parseFloat(this.state.price*this.state.total).toFixed(2),
                num: this.state.total,
                img: this.props.route.params.pic[0],
                username:this.state.username,
                time:new Date(),
                dianpu_img:this.props.route.params.loge
            }),
        });

        fetch('http://47.100.78.254:3000/index/update_jinbi2', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jinbi:this.props.route.params.jinbi,
                username:this.state.username,
            }),
        });
        DeviceEventEmitter.emit('jinbi',1)

        this.props.navigation.goBack();
        ToastAndroid.show('提交订单成功',2000)
    }



    render() {
        const {dizhi} = this.state
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{width:width,height:"100%"}} colors={[global.mainColor,"#fff","#fff"]} >
                {/* <Nav title="等待买家付款" /> */}
                <View style={{ width:width*0.9,height:height*0.07,flexDirection:"row",alignItems:"center"}}>
                       
                       <TouchableOpacity style={{marginLeft:width*0.05,width:width*0.06}}
                       onPress={() => this.props.navigation.goBack()}
                           >
                           <FontAwesome onPress={() => this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                       </TouchableOpacity>
                       <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>确认订单</Text>
                   </View>
                <ScrollView >
                    {/* 收货地址 */}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddressList2')} style={{ marginTop: 5, borderRadius:10, margin: 5, backgroundColor: "#fff",width:width*0.9,marginLeft:width*0.05,borderColor:global.mainColor,borderWidth:2 }} activeOpacity={1}>
                        <View style={{ marginTop: 5, marginLeft: 20, flexDirection: "row", }}>
                            <Text style={{ fontSize: 16 }}>{dizhi===''?'':dizhi.name}</Text>
                            <Text style={{ fontSize: 16, marginLeft: 40 }}>{dizhi===''?'':dizhi.phone}</Text>
                           
                            {/* <IconFont name="jiantou" size={20} style={{ marginLeft: 130, marginTop: 15 }} /> */}
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 10 ,flexDirection:'row'}}>
                            <Text style={{ fontSize: 14,color:"#333333" }}>{dizhi===''?'':dizhi.dizhi}</Text>
                            <Text style={{ fontSize: 14,marginLeft:10,color:"#333333" }}>{dizhi===''?'':dizhi.xiangxi}</Text>
                        </View>
                    </TouchableOpacity>


                    {/* 商品信息 */}
                    <View style={{ flexDirection: 'row',marginTop: 5,backgroundColor:"#fff",width:width*0.90,borderRadius:10 ,marginLeft:width*0.05,elevation:5}}>
                        <View style={{ margin: 10 }}>
                            <Image style={{ width: 110, height: 110, borderRadius: 10 }} source={{ uri:this.props.route.params.pic }} />
                        </View>
                        <View style={{ marginLeft: 5,justifyContent:'space-around'}}>
                            {/* 商品名称 */}
                            <Text style={{ fontSize: 15, fontWeight: "bold",width:width*0.45,color:"#333333" }} numberOfLines={3} >{this.state.goodsname}</Text>

                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10,margin:5,width:width*0.9,marginLeft:width*0.05,elevation:5 }}>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ opacity: 0.6 ,fontSize:15,color:"#333333"}}>商品价格</Text>
                            <Text style={{ opacity: 0.6  ,fontSize:15,color:"#333333"}}>￥{this.state.price}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ opacity: 0.6 ,fontSize:15,color:"#333333"}}>所需金币</Text>
                            <Text style={{ opacity: 0.6  ,fontSize:15,color:"#333333"}}>{this.props.route.params.jinbi}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ opacity: 0.6 ,fontSize:15 ,color:"#333333"}}>商品数量</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                
                                <Text style={{ fontSize:15,marginLeft:10,marginRight:10,color:"#333333" }}>{this.state.total}</Text>
                                
                            </View>
                            
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginTop: 10, marginBottom: 15, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15 ,color:"#333333"}}>合计</Text>
                            <Text style={{ fontSize:15, color: global.mainColor, fontWeight: "bold" }}>￥{parseFloat(this.state.price*this.state.total).toFixed(2)}</Text>
                        </View>
                    </View>
                    <View>






                        <TouchableOpacity style={{width:width*0.90,marginLeft:width*0.05, justifyContent: 'space-between', alignItems: "center", height: 40, margin:5, flexDirection: "row", backgroundColor: "white", marginTop:10, borderRadius:10 ,elevation:5}} activeOpacity={0.95}>
                            <Text style={{ marginLeft: 15,color:"#333333" }}>支付方式:</Text>
                            <Text style={{ marginRight:15 ,color:"#333333"}}>金币支付</Text>
                            {/* <IconFont name="jiantou" size={20}  /> */}
                        </TouchableOpacity>
                    </View>
                </ScrollView >

                <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", backgroundColor: "white", height: 70 }}>
                    <View style={{ flexDirection: "row", marginLeft: 15, alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 15,color:"#333333" }}>合计金币</Text>
                        <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold", color: global.mainColor }}>{this.props.route.params.jinbi}</Text>
                    </View>
                  
                        <TouchableOpacity  onPress={this._openModalWin} activeOpacity={1} style={{width:width*0.3,height:"50%",backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",marginRight:"5%",borderRadius:20,elevation:5}}>

                            <Text  style={{fontSize:15,color:"#fff"}}>提交订单</Text>
                       
                        </TouchableOpacity>
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
                                                <LottieView source={require('../../../../animal/success.json')} autoPlay loop progress={this.state.progress} />
                                            </View>
                                            <View style={{
                                                width: '100%',
                                                height: '25%',
                                                alignItems: 'center',

                                            }}>
                                                <Text style={{ fontSize: 20, color: global.mainColor }}>提交成功</Text>
                                            </View>
                                            <TouchableOpacity style={styles.modalButtonStyle}
                                                onPress={() => {
                                                    this._closeModalWin()
                                                   this.buy();
                                                }}

                                            >
                                                <Text style={{ fontSize: 15 }}>确定</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </Modal>
                    
                </View>

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
