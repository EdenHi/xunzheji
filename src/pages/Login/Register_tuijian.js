/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { Animated,Easing } from 'react-native';
import { AsyncStorage } from 'react-native';

import {View,Text,TouchableOpacity,Dimensions,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const {width,height} = Dimensions.get('window')
export default class Register_tuijian extends Component {
    constructor(props){
        super(props)
        this.state = {
            tuijian:'',
            isZs1:false,
            donghua1_1:new Animated.Value(-65),
            donghua1_2:new Animated.Value(-130),
            isZs2:false,
            donghua2_1:new Animated.Value(-65),
            donghua2_2:new Animated.Value(-130),
            isZs3:false,
            donghua3_1:new Animated.Value(-65),
            donghua3_2:new Animated.Value(-130),
            isZs4:false,
            donghua4_1:new Animated.Value(-65),
            donghua4_2:new Animated.Value(-130),
        }
    }

    go_tuijian(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                fetch('http://47.100.78.254:3000/index/updateTuijian', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tuijian:this.state.tuijian,
                username:result
            })
        })
            }
        })
    }

    // 第一排动画 
    pingyi1_open(){
        Animated.timing(this.state.donghua1_1, {
            toValue: 10, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua1_2, {
            toValue: 20, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs1:true})
    }

    pingyi1_close(){
        Animated.timing(this.state.donghua1_1, {
            toValue: -65, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua1_2, {
            toValue: -130, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs1:false})
    }

    // 第二排动画 
    pingyi2_open(){
        Animated.timing(this.state.donghua2_1, {
            toValue: 10, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua2_2, {
            toValue: 20, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs2:true})
    }

    pingyi2_close(){
        Animated.timing(this.state.donghua2_1, {
            toValue: -65, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua2_2, {
            toValue: -130, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs2:false})
    }

    //第三排动画
    pingyi3_open(){
        Animated.timing(this.state.donghua3_1, {
            toValue: 10, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua3_2, {
            toValue: 20, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs3:true})
    }

    pingyi3_close(){
        Animated.timing(this.state.donghua3_1, {
            toValue: -65, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua3_2, {
            toValue: -130, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs3:false})
    }


    //第四排动画
    pingyi4_open(){
        Animated.timing(this.state.donghua4_1, {
            toValue: 10, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua4_2, {
            toValue: 20, // 目标值
            duration: 1000, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs4:true})
    }

    pingyi4_close(){
        Animated.timing(this.state.donghua4_1, {
            toValue: -65, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        Animated.timing(this.state.donghua4_2, {
            toValue: -130, // 目标值
            duration: 500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();
        this.setState({isZs4:false})
    }


    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                {/* 标题 */}
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width, paddingLeft: width * 0.05,backgroundcolor:global.back2 }}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft:"2%"}}>注册</Text>
                </View>



                    <View style={{height:height*0.8}}>
                        <TouchableOpacity style={{marginHorizontal:width * 0.05,alignItems:'center',flexDirection:'row',flex:1}} activeOpacity={1} onPress={()=>this.setState({tuijian:'meishi'})}>
                            <View style={{width:20,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',borderWidth:1}}>
                                {this.state.tuijian==='meishi'?<AntDesign name='checkcircle' size={20} color='green' style={{borderRadius:50,width:20,height:20}}  />:null}
                            </View>
                            
                            <Text style={{marginHorizontal:5}}>美食</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.state.isZs1===false?this.pingyi1_open():this.pingyi1_close()}} activeOpacity={1}>
                                <View style={{elevation:5,borderWidth:1}} >
                                    <Image resizeMode='stretch' source={{uri:'https://gd4.alicdn.com/imgextra/i4/2209861795974/O1CN01oQxYo61u08jlpRxZR_!!2209861795974.png_150x150.jpg_.webp'}} style={{height:80,width:80,}}/>
                                </View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua1_1}}>
                                    <Image resizeMode='stretch' source={{uri:'https://i.loli.net/2021/08/09/Jkbdoh3DIyeT9Lt.jpg'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua1_2}}>
                                    <Image resizeMode='stretch' source={{uri:'https://5b0988e595225.cdn.sohucs.com/images/20170927/2e0458795d5447f894722b23dbec8934.png'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                            </TouchableOpacity>
                            
                            
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{marginHorizontal:width * 0.05,alignItems:'center',flexDirection:'row',flex:1}} activeOpacity={1} onPress={()=>this.setState({tuijian:'zhizao'})}>
                            <View style={{width:20,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',borderWidth:1}}>
                                {this.state.tuijian==='zhizao'?<AntDesign name='checkcircle' size={20} color='green' style={{borderRadius:50,width:20,height:20}}  />:null}
                            </View>
                            <Text style={{marginHorizontal:5}}>制造</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.state.isZs2===false?this.pingyi2_open():this.pingyi2_close()}} activeOpacity={1}>
                                <View style={{elevation:10,borderWidth:1}} >
                                    <Image resizeMode='stretch' source={{uri:'https://img.alicdn.com/imgextra/i2/1963505180/O1CN01Jody7q1o8UI4P01pc_!!1963505180.jpg_150x150q90.jpg'}} style={{height:80,width:80,}}/>
                                </View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua2_1}}>
                                    <Image resizeMode='stretch' source={{uri:'https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i1/2824527807/TB2fx64qr1YBuNjSszhXXcUsFXa_!!2824527807.jpg_150x150q90.jpg'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua2_2}}>
                                    <Image resizeMode='stretch' source={{uri:'https://bkimg.cdn.bcebos.com/pic/54fbb2fb43166d224da409d84b2309f79152d2ae?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{marginHorizontal:width * 0.05,alignItems:'center',flexDirection:'row',flex:1}} activeOpacity={1} onPress={()=>this.setState({tuijian:'gongmei'})}>
                            <View style={{width:20,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',borderWidth:1}}>
                                {this.state.tuijian==='gongmei'?<AntDesign name='checkcircle' size={20} color='green' style={{borderRadius:50,width:20,height:20}}  />:null}
                            </View>
                            <Text style={{marginHorizontal:5}}>工美</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.state.isZs3===false?this.pingyi3_open():this.pingyi3_close()}} activeOpacity={1}>
                                <View style={{elevation:10,borderWidth:1}} >
                                    <Image resizeMode='stretch' source={{uri:'https://img.alicdn.com/imgextra/i4/2013831043/O1CN01mIGIni1JZjm48Xh9F_!!2013831043.jpg_150x150q90.jpg'}} style={{height:80,width:80,}}/>
                                </View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua3_1}}>
                                    <Image resizeMode='stretch' source={{uri:'https://img.alicdn.com/imgextra/i4/2211562091974/O1CN017uWHIr1QS8VtcLJJV_!!0-item_pic.jpg_160x160q90.jpg'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua3_2}}>
                                    <Image resizeMode='stretch' source={{uri:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2928866662,1560677089&fm=199&app=68&f=JPEG?w=750&h=750&s=C1C09A464A67BADC54DDB59E03005082'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{marginHorizontal:width * 0.05,alignItems:'center',flexDirection:'row',flex:1}} activeOpacity={1} onPress={()=>this.setState({tuijian:'chajiu'})}>
                            <View style={{width:20,height:20,borderRadius:50,justifyContent:'center',alignItems:'center',borderWidth:1}}>
                                {this.state.tuijian==='chajiu'?<AntDesign name='checkcircle' size={20} color='green' style={{borderRadius:50,width:20,height:20}}  />:null}
                            </View>
                            <Text style={{marginHorizontal:5}}>茶酒</Text>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.state.isZs4===false?this.pingyi4_open():this.pingyi4_close()}} activeOpacity={1}>
                                <View style={{elevation:10,borderWidth:1}} >
                                    <Image resizeMode='stretch' source={{uri:'https://img.alicdn.com/imgextra/i3/1665326773/O1CN01NyzYBR1zu54pkOOEX_!!0-item_pic.jpg_160x160q90.jpg'}} style={{height:80,width:80,}}/>
                                </View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua4_1}}>
                                    <Image resizeMode='stretch' source={{uri:'http://cdn.tjkximg.com/2020-03/20/11/32341423408.jpg'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                                <Animated.View style={{elevation:10,borderWidth:1,left:this.state.donghua4_2}}>
                                    <Image resizeMode='stretch' source={{uri:'https://bkimg.cdn.bcebos.com/pic/a9d3fd1f4134970a304e02dde081c6c8a786c817f7a4?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'}} style={{height:80,width:80,}}/>
                                </Animated.View>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    
                    </View>



                <TouchableOpacity onPress={()=>{this.go_tuijian(),this.props.navigation.navigate('BtnRoute')}} style={{backgroundcolor:global.back2,width:width*0.5,marginHorizontal:width*0.25,justifyContent:'center',alignItems:'center',borderRadius:30,marginVertical:10}} activeOpacity={1}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff',paddingVertical:10}}>下一步</Text>
                </TouchableOpacity>
            </View>
        );
    }
}