
import React, { Component } from 'react'
import { ScrollView, Dimensions, View, Text, TouchableOpacity, ImageBackground, Image, AsyncStorage, Easing, Animated, DeviceEventEmitter } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { NavigationContext } from '@react-navigation/native';

import SideMenu from 'react-native-side-menu';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get("window")

export default class Personal extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      username: '',
      data: [],
      isScroll: true,
      isOpen: false,
      aa: 1,
      shoucang: '',
      dianzan: '',
      shangdian:'',
    }
  }



  //获取个人信息数据
  get_shuju() {
    AsyncStorage.getItem('username', (error, result) => {
      if (!error) {
        this.setState({
          username: result,
        });
        axios.post('http://47.100.78.254:3000/index/selectPerson', {
          username: result,
        }).then((json) => {
          this.setState({
            data: json.data[0][0],
            shoucang: json.data[1][0],
            dianzan: json.data[2][0],
            shangdian:json.data[3][0]
          });
          console.log('data',json.data);
        });
      } else {
        console.log('获取数据失败', error);
      }
    });
  }

  //进行渲染页面
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,

    }).start();
    this.get_shuju();

    this.listener = DeviceEventEmitter.addListener('denglu', this.get_shuju.bind(this));
    this.listener = DeviceEventEmitter.addListener('wenzhang', this.get_shuju.bind(this));
    this.listener = DeviceEventEmitter.addListener('dianzan_1', this.get_shuju.bind(this));
    this.listener = DeviceEventEmitter.addListener('yanse', this.get_shuju.bind(this));
  }


  //打开ScrollView的移动
  scrollview() {
    this.setState({ isScroll: true })
  }

  //移除监听
  componentWillUnmount() {
    this.listener.remove();
  }

  menu() {
    const {isOpen} = this.state
    return (
      <View style={{ backgroundColor: "#D6F0F0", flex: 1 }}>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('ShoppingCart'), this.setState({ isOpen:false  }) }}  style={{width:width*0.5,marginLeft:width*0.05,height:height*0.06,marginTop:height*0.1,alignItems:"center",flexDirection:"row"}}>
        <MaterialCommunityIcons onPress={() => { this.props.navigation.navigate('ShoppingCart'), this.setState({ isOpen:false  }) }} 
              name="cart-outline"
              size={30}
              color={global.mainColor}
            />
            <Text style={{fontSize:15,color:"#333" ,marginLeft:"5%"}}>购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Dingdan') , this.setState({ isOpen:false  })}} style={{width:width*0.5,marginLeft:width*0.05,height:height*0.06,alignItems:"center",marginTop:height*0.01,flexDirection:"row"}}>
        <MaterialCommunityIcons onPress={() => { this.props.navigation.navigate('Dingdan') , this.setState({ isOpen:false  })}} 
                 name="clipboard-text-outline"
              size={30}
              color={global.mainColor}
            />
            <Text style={{fontSize:15,color:"#333" ,marginLeft:"5%"}}>我的订单</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AddressList'), this.setState({ isOpen: false }) }} style={{width:width*0.5,marginLeft:width*0.05,height:height*0.06,alignItems:"center",marginTop:height*0.01,flexDirection:"row"}}>
        <MaterialCommunityIcons onPress={() => { this.props.navigation.navigate('ShoppingCart'), this.setState({ isOpen:false  }) }} 
       name="map-marker-radius"
              size={30}
              color={global.mainColor}
            />
            <Text style={{fontSize:15,color:"#333" ,marginLeft:"5%"}}>地址管理</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('FootMark',{username:this.state.username}), this.setState({ isOpen: false }) }} style={{width:width*0.5,marginLeft:width*0.05,height:height*0.06,marginTop:height*0.01,alignItems:"center",flexDirection:"row"}}>
        <MaterialCommunityIcons 
              name="foot-print"
              size={30}
              color={global.mainColor}
            />
            <Text style={{fontSize:15,color:"#333" ,marginLeft:"5%"}}>商品足迹</Text>
        </TouchableOpacity>
      
        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('ShiMin'), this.setState({ isOpen: false }) }} style={{width:width*0.5,marginLeft:width*0.05,height:height*0.06,alignItems:"center",marginTop:height*0.01,flexDirection:"row"}}>
        <AntDesign 
              name="adduser"
              size={30}
              color={global.mainColor}
            />
            <Text style={{fontSize:15,color:"#333" ,marginLeft:"5%"}}>实名认证</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Chats', { room: '1' }), this.setState({ isOpen: false }) }}  style={{width:width*0.5,marginLeft:width*0.05,height:height*0.06,alignItems:"center",marginTop:height*0.01,flexDirection:"row"}}>
        <AntDesign 
              name="customerservice"
              size={30}
              color={global.mainColor}
            />
            <Text style={{fontSize:15,color:"#333" ,marginLeft:"5%"}}>我的客服</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('shezhi')}  style={{width:width*0.5,marginLeft:width*0.05,height:height*0.06,alignItems:"center",marginTop:height*0.01,flexDirection:"row"}}>
        <AntDesign name='setting' size={30} color={global.mainColor}/>
            <Text style={{fontSize:15,color:"#333" ,marginLeft:"5%"}}>我的设置</Text>
        </TouchableOpacity>
       
{/* 
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", marginTop: '5%' }}>
          <TouchableOpacity activeOpacity={1} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <MaterialCommunityIcons onPress={() => { this.props.navigation.navigate('ShoppingCart'), this.setState({ isOpen:false  }) }} style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="cart-outline"
              size={35}
              color={global.mainColor}
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Dingdan') , this.setState({ isOpen:false  })}} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="clipboard-text-outline"
              size={35}
              color={global.mainColor}
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>订单</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", marginTop: '5%' }}>
          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Chats', { room: '1' }), this.setState({ isOpen: false }) }} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <AntDesign style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="customerservice"
              size={35}
              color={global.mainColor}
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>客服</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AddressList'), this.setState({ isOpen: false }) }} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="map-marker-radius"
              size={35}
              color={global.mainColor}
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>地址管理</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", marginTop: '5%' }}>
          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('ShiMin'), this.setState({ isOpen: false }) }} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <AntDesign style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="adduser"
              size={35}
              color={global.mainColor}
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>实名认证</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('FootMark',{username:this.state.username}), this.setState({ isOpen: false }) }} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="foot-print"
              size={35}
              color={global.mainColor}
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>商品足迹</Text>
          </TouchableOpacity>
        </View> */}
        
      </View>
    )
  }


  render() {
    const { data, shoucang, dianzan,shangdian } = this.state;
    console.log('data', data);
    console.log('isopen',this.state.isOpen);
    let showLogin = this.state.username === '' ? <TouchableOpacity activeOpacity={1} style={{ width: width * 0.2, height: width * 0.3 * 0.5, marginLeft: width * -0.25, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 10 }} onPress={() => this.props.navigation.navigate('Login')}>
      <View >
        <Text style={{ color: global.mainColor, width: '100%', height: '50%', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold', fontSize: 15 }}>账号</Text>
        <Text style={{ color: global.mainColor, width: '100%', height: '50%', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold', fontSize: 15 }}>登录</Text>

      </View>
    </TouchableOpacity> : null;

    return (
      <SideMenu
        menu={this.state.isOpen === false ? null : this.menu()}                    //抽屉内的组件
        isOpen={this.state.isOpen}     //抽屉打开/关闭
        openMenuOffset={width * 0.4}     //抽屉的宽度
        hiddenMenuOffset={0}          //抽屉关闭状态时,显示多少宽度 默认0 抽屉完全隐藏
        edgeHitWidth={100}              //距离屏幕多少距离可以滑出抽屉,默认60
        disableGestures={false}
        onChange={                   //抽屉状态变化的监听函数
          (isOpen) => {
            // isOpen ? console.log('抽屉当前状态为开着')
            //     :
            //     console.log('抽屉当前状态为关着')
            this.setState({
              isOpen
            })
          }}
        onMove={                     //抽屉移动时的监听函数 , 参数为抽屉拉出来的距离 抽屉在左侧时参数为正,右侧则为负
          (marginLeft) => {
            console.log(marginLeft)
          }}
        menuPosition={'left'}     //抽屉在左侧还是右侧
        autoClosing={true}         //默认为true 如果为true 一有事件发生抽屉就会关闭
      >
        {/* <LottieView source={require('../../../animal/background')} autoPlay loop progress={this.state.progress} /> */}
        <View style={{width:width,height:height}}>
          <View style={{ width: width * 1, height: height  ,backgroundColor:global.backColor}}>
            <ImageBackground source={{ uri: data.backpic }} style={{width:width,height:height*0.4,position:"absolute"}}>
              <View style={{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"}}>
            <View style={{ flexDirection: "row", alignItems: "center",width:width*0.95,marginLeft:width*0.025,justifyContent:"space-between", }}>
            <Feather name="menu" size={25} color="#7cc0c0" style={{ marginLeft: 10 }} onPress={() => this.setState({ isOpen: true, })} />
          
            <TouchableOpacity activeOpacity={1} style={{ width:50,height:50 }} onPress={()=>this.props.navigation.navigate("XiaoXi",{username:this.state.username,nickname:this.state.data.nickname,avatar:this.state.data.portrait})}>
            <LottieView source={require('../../../animal/bellblue.json')} autoPlay loop progress={this.state.progress} />
            </TouchableOpacity>
            {/* <Feather name="bell" size={25} color="#fff" style={{ marginRight: 10 }} onPress={()=>this.props.navigation.navigate("XiaoXi",{username:this.state.username,nickname:this.state.data.nickname,avatar:this.state.data.portrait})} /> */}
          </View>
          <View style={{width:width,marginTop:height*0.01,height:height*0.13,flexDirection:"row",alignItems:"center"}}>
            <ImageBackground source={{ uri: data.portrait }} style={{width:width*0.25,elevation:5,height:width*0.25,marginLeft:width*0.05} } imageStyle={{borderRadius:50}}></ImageBackground>
            <View style={{height:"100%",marginLeft:width*0.02,justifyContent:"center"}}>
              <View style={{flexDirection:"row"}}>
              <Text style={{ color: global.mainColor, fontSize: 18, fontWeight: "bold",marginLeft:"5%" }}>{data.nickname}</Text>
           <TouchableOpacity activeOpacity={1} onPress={() => {
                      this.props.navigation.navigate('bianjiziliao', {
                        username: data.username,
                        portrait: data.portrait,
                        nickname: data.nickname,
                        sex: data.sex,
                        birthday: data.birthday,
                        signature: data.signature,
                        phone: data.phone,
                        area: data.area,
                        backpic: data.backpic,
                      })
                    }}>
            <Feather name='edit-3' size={20} color={global.mainColor} style={{marginLeft:width*0.025}} />
              </TouchableOpacity>
              </View>
            <Text style={{ color: global.mainColor, fontSize: 13 ,marginLeft:"5%",marginTop:height*0.02}}>{data.signature}</Text>
            </View>
          </View>
          <View style={{width:width*0.4,height:height*0.09,marginLeft:width*0.05,marginTop:5,flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity activeOpacity={1} onPress={() => { this.state.username === '' ? this.showAlert() : this.props.navigation.push('fans', this.state.username) }} style={{width:width*0.15,height:width*0.15,backgroundColor:"rgba(255,255,255,0.5)",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold"}}>{this.state.username === '' ? '0' : data.fensi}</Text>
            <Text style={{ fontSize: 15, color: "#fff"}}>粉丝</Text>      
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => { this.state.username === '' ? this.showAlert() : this.context.navigate('Concerns', this.state.username) }} style={{width:width*0.15,height:width*0.15,marginLeft:width*0.025,backgroundColor:"rgba(255,255,255,0.5)",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold"}}>{this.state.username === '' ? '0' : data.guanzhu}</Text>
            <Text style={{ fontSize: 15, color: "#fff"}}>关注</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('JiFen',{portrait:data.portrait})} style={{width:width*0.35,height:width*0.35,marginLeft:width*0.25,alignItems:"center",justifyContent:"center"}}>
            <LottieView source={require('../../../animal/gifts')} autoPlay loop progress={this.state.progress} />
            </TouchableOpacity>
          </View>
          
          </View>
            </ImageBackground>
              {/* <View style={{ width, height: height * 0.35, flexDirection: "row", marginTop: 10 }}>
                <View activeOpacity={1} style={{ width: width * 0.754,height: height * 0.354, borderWidth: 1, borderStyle: "dashed", borderColor: global.mainColor, borderRadius: 10, elevation: 5, }}>
                  <ImageBackground source={{ uri: data.portrait }} style={{ width: width * 0.75, height: height * 0.35 }} borderRadius={10}>
                    
                    <View style={{ width:width*0.4, height: height * 0.05, backgroundColor:"rgba(255,255,255,0.8)",justifyContent: "center",elevation: 5,marginTop:height*0.22 }}>
                    <Text style={{ color: global.mainColor, fontSize: 15, fontWeight: "bold",marginLeft:"5%" }}>{data.nickname}</Text>
                  </View>
                  <View style={{ height: height * 0.05, backgroundColor:"rgba(255,255,255,0.8)",justifyContent: "center", marginTop: "5%", elevation: 5 }}>
                  <Text style={{ color: global.mainColor, fontSize: 13 ,marginLeft:"5%"}}>{data.signature}</Text>
                  </View>
                     
                  </ImageBackground>
                </View>
                <View>
                  <TouchableOpacity activeOpacity={1} style={{ marginHorizontal: width * 0.075, marginTop: 20 }}>
                    <Feather name='gift' size={30} color={global.mainColor} onPress={() => this.props.navigation.navigate('JiFen',{portrait:data.portrait})} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      this.props.navigation.navigate('bianjiziliao', {
                        username: data.username,
                        portrait: data.portrait,
                        nickname: data.nickname,
                        sex: data.sex,
                        birthday: data.birthday,
                        signature: data.signature,
                        phone: data.phone,
                        area: data.area,
                        backpic: data.backpic,
                      })
                    }}
                    style={{ marginHorizontal: width * 0.075, marginTop: 20 }}>
                    <Feather name='edit-3' size={30} color={global.mainColor} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} style={{ marginHorizontal: width * 0.075, marginTop: 20 }}>
                    <AntDesign name='setting' size={30} color={global.mainColor} onPress={() => this.props.navigation.navigate('shezhi')} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1}
                    onPress={() => { this.state.username === '' ? this.showAlert() : this.props.navigation.push('fans', this.state.username) }}
                    style={{ marginHorizontal: width * 0.075, marginTop: 20, flexDirection: "row" }}>
                    <Text style={{ fontSize: 18, color: global.mainColor, marginLeft: -width * 0.03 }}>粉丝</Text>
                    <Text style={{ fontSize: 18, color: global.mainColor, fontWeight: "bold", marginLeft: 10 }}>{this.state.username === '' ? '0' : data.fensi}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1}
                    onPress={() => { this.state.username === '' ? this.showAlert() : this.context.navigate('Concerns', this.state.username) }}
                    style={{ marginHorizontal: width * 0.075, marginTop: 10, flexDirection: "row" }}>
                    <Text style={{ fontSize: 18, color: global.mainColor, marginLeft: -width * 0.03 }}>关注</Text>
                    <Text style={{ fontSize: 18, color: global.mainColor, fontWeight: "bold", marginLeft: 10 }}>{this.state.username === '' ? '0' : data.guanzhu}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: width * 0.9, height: height * 0.25, backgroundColor: "#fff", marginHorizontal: width * 0.05 }}>
                </View>
              </View> */}
            <View style={{width:width,height:height*0.7,borderTopLeftRadius:15,marginTop:height*0.32,borderTopRightRadius:15,backgroundColor:"#fff",elevation:5}}>
              <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Output2')} activeOpacity={1} style={{ width: width * 1, height: height * 0.28, alignItems: "center", flexDirection: "row" }}>
                <View style={{ width: width * 0.3 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginLeft: "15%", marginTop: "45%", fontSize: 15, color: global.mainColor, fontWeight: "bold" }}>我的发布</Text>
                    <View style={{ width: width * 0.1, height: width * 0.1, marginBottom: "-30%" }}>
                      <LottieView source={require('../../../animal/publish.json')} autoPlay loop progress={this.state.progress} />
                    </View>
                  </View>
                  <View style={{ width: width * 0.45, height: height * 0.04, backgroundColor: global.mainColor, justifyContent: "center", alignItems: "center", marginLeft: "15%", marginTop: "5%", elevation: 5 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>MY MERCHANDISE</Text>
                  </View>
                </View>
                <View style={{ width: width * 0.702, height: height * 0.2, borderStyle: "dashed", borderWidth: 1, borderColor: global.mainColor, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, justifyContent: "center", alignItems: "center" }}>
                  <Image source={{ uri: "https://img1.baidu.com/it/u=1157957035,1350047874&fm=26&fmt=auto&gp=0.jpg" }} style={{ width: width * 0.7, height: height * 0.2, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, elevation: 1 }} />
                </View>
              </TouchableOpacity>
              <View style={{ width: width * 1, height: height * 0.3, alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Goods2')} style={{ width: width * 0.452, height: height * 0.3, borderStyle: "dashed", borderWidth: 1, borderRadius: 1, borderColor: global.mainColor, borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: "center", justifyContent: "center" }}>
                  <ImageBackground resizeMode="stretch" source={{ uri: "https://img1.baidu.com/it/u=1868037487,4029559003&fm=26&fmt=auto&gp=0.jpg" }} style={{ width: width * 0.45, height: height * 0.3, }} borderTopRightRadius={10} borderBottomRightRadius={10}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: "80%", justifyContent: "space-between", marginHorizontal: width * 0.05, width: width * 0.25 }}>
                      <Text style={{ fontSize: 15, color: global.mainColor, fontWeight: "bold" }}>我的商店</Text>
                      <Text style={{ fontSize: 20, fontWeight: "bold", color: global.mainColor }}>{shangdian.shangdian}</Text>
                    </View>
                    <View style={{ width: width * 0.25, height: height * 0.05, backgroundColor: global.mainColor, justifyContent: "center", alignItems: "center", marginHorizontal: width * 0.05, elevation: 5 }}><Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>MY STORE</Text></View>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={{ width: width * 0.4, marginLeft: "5%" ,height:height*0.3}}>
                  <View style={{ width: width * 0.4, height: height * 0.05, flexDirection: "row", justifyContent: "space-around", marginTop: "-25%", alignItems: "center" }}>
                    <Text style={{ fontSize: 15, color: global.mainColor }}>我的收藏</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: global.mainColor }}>{shoucang.shoucang}</Text>
                  </View>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Shoucang2')} style={{ width: width * 0.45, height: height * 0.125, borderStyle: "dashed", borderWidth: 1, borderRadius: 1, borderColor: global.mainColor, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={{ uri: "https://img1.baidu.com/it/u=1097602216,1708759335&fm=26&fmt=auto&gp=0.jpg" }} style={{ width: width * 0.45, height: height * 0.125 }} borderRadius={10} >
                    </ImageBackground>
                  </TouchableOpacity>
                  <View style={{ width: width * 0.4, height: height * 0.05, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ fontSize: 15, color: global.mainColor }}>我的点赞</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: global.mainColor }}>{dianzan.dianzan}</Text>
                  </View>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Dianzan2')} style={{ width: width * 0.45, height: height * 0.125, borderStyle: "dashed", borderWidth: 1, borderRadius: 1, borderColor: global.mainColor, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                    <ImageBackground source={{ uri: "https://img0.baidu.com/it/u=1107750492,2231488047&fm=26&fmt=auto&gp=0.jpg" }} style={{ width: width * 0.45, height: height * 0.125 }} borderRadius={10} >
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
      </View>
          </View>
        </View>
      </SideMenu>
    )
  }
}
