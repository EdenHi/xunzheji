/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Dimensions,TouchableOpacity,Text, ScrollView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const {height,width} = Dimensions.get('window')
export default class duihuan_jinbi extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: "row", alignItems: "center",width, height: height * 0.07, justifyContent:'space-between',alignItems:'center',backgroundColor:"orange",paddingLeft:width*0.05,paddingRight:width*0.05 }}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={1} >
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                            <View style={{borderWidth:1,borderColor:'#fff',borderRadius:50,height:10,width:10}}/>
                            <Text style={{color:'#fff',marginLeft:2}}>151{'>'} </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff"}}>福利中心</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff"}}>兑换记录</Text>
                </View>
                <View style={{width:width*0.9,marginLeft:width*0.05}}>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{height:height*0.93 -20}}>
                        <TouchableOpacity style={{width:width*0.9,backgroundColor:'white',marginTop:10,borderRadius:10,flexDirection:'row'}} activeOpacity={1}>
                            <Image source={{uri:'https://img2.baidu.com/it/u=2753350950,266639798&fm=253&fmt=auto&app=120&f=GIF?w=690&h=395'}} style={{height:width*0.25,width:width*0.25,margin:10,borderRadius:10}}/>
                            <View style={{marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:18,width:width*0.55}}
                                ellipsizeMode='tail'
                                numberOfLines={1}>优品康麦片水果坚果奇亚籽冲饮料</Text>
                                <View style={{backgroundColor:'#ccc',width:width*0.25,alignItems:'center',marginTop:10,borderRadius:10}}>
                                    <Text style={{color:'red',}}>价值￥100</Text>
                                </View>
                                <View style={{flexDirection:'row',height:width*0.12,alignItems:'flex-end',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{borderWidth:1,borderColor:'green',borderRadius:50,height:15,width:15}}/>
                                        <Text style={{color:'red',fontWeight:'bold',fontSize:18,marginLeft:2}}>300 </Text>
                                        </View>
                                        <Text style={{color:'red',fontSize:13}}>+9.9元</Text>
                                    </View>
                                    <View>
                                        <View style={{width:70,backgroundColor:'red',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center'}}>
                                            <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                                        </View>
                                        <View style={{width:70,backgroundColor:'white',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center',borderWidth:1,borderColor:'red'}}>
                                            <Text style={{color:'red',fontSize:10,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3}}>已兑595件</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:width*0.9,backgroundColor:'white',marginTop:10,borderRadius:10,flexDirection:'row'}} activeOpacity={1}>
                            <Image source={{uri:'https://img2.baidu.com/it/u=2753350950,266639798&fm=253&fmt=auto&app=120&f=GIF?w=690&h=395'}} style={{height:width*0.25,width:width*0.25,margin:10,borderRadius:10}}/>
                            <View style={{marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:18,width:width*0.55}}
                                ellipsizeMode='tail'
                                numberOfLines={1}>优品康麦片水果坚果奇亚籽冲饮料</Text>
                                <View style={{backgroundColor:'#ccc',width:width*0.25,alignItems:'center',marginTop:10,borderRadius:10}}>
                                    <Text style={{color:'red',}}>价值￥100</Text>
                                </View>
                                <View style={{flexDirection:'row',height:width*0.12,alignItems:'flex-end',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{borderWidth:1,borderColor:'green',borderRadius:50,height:15,width:15}}/>
                                        <Text style={{color:'red',fontWeight:'bold',fontSize:18,marginLeft:2}}>300 </Text>
                                        </View>
                                        <Text style={{color:'red',fontSize:13}}>+9.9元</Text>
                                    </View>
                                    <View>
                                        <View style={{width:70,backgroundColor:'red',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center'}}>
                                            <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                                        </View>
                                        <View style={{width:70,backgroundColor:'white',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center',borderWidth:1,borderColor:'red'}}>
                                            <Text style={{color:'red',fontSize:10,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3}}>已兑595件</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:width*0.9,backgroundColor:'white',marginTop:10,borderRadius:10,flexDirection:'row'}} activeOpacity={1}>
                            <Image source={{uri:'https://img2.baidu.com/it/u=2753350950,266639798&fm=253&fmt=auto&app=120&f=GIF?w=690&h=395'}} style={{height:width*0.25,width:width*0.25,margin:10,borderRadius:10}}/>
                            <View style={{marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:18,width:width*0.55}}
                                ellipsizeMode='tail'
                                numberOfLines={1}>优品康麦片水果坚果奇亚籽冲饮料</Text>
                                <View style={{backgroundColor:'#ccc',width:width*0.25,alignItems:'center',marginTop:10,borderRadius:10}}>
                                    <Text style={{color:'red',}}>价值￥100</Text>
                                </View>
                                <View style={{flexDirection:'row',height:width*0.12,alignItems:'flex-end',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{borderWidth:1,borderColor:'green',borderRadius:50,height:15,width:15}}/>
                                        <Text style={{color:'red',fontWeight:'bold',fontSize:18,marginLeft:2}}>300 </Text>
                                        </View>
                                        <Text style={{color:'red',fontSize:13}}>+9.9元</Text>
                                    </View>
                                    <View>
                                        <View style={{width:70,backgroundColor:'red',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center'}}>
                                            <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                                        </View>
                                        <View style={{width:70,backgroundColor:'white',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center',borderWidth:1,borderColor:'red'}}>
                                            <Text style={{color:'red',fontSize:10,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3}}>已兑595件</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:width*0.9,backgroundColor:'white',marginTop:10,borderRadius:10,flexDirection:'row'}} activeOpacity={1}>
                            <Image source={{uri:'https://img2.baidu.com/it/u=2753350950,266639798&fm=253&fmt=auto&app=120&f=GIF?w=690&h=395'}} style={{height:width*0.25,width:width*0.25,margin:10,borderRadius:10}}/>
                            <View style={{marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:18,width:width*0.55}}
                                ellipsizeMode='tail'
                                numberOfLines={1}>优品康麦片水果坚果奇亚籽冲饮料</Text>
                                <View style={{backgroundColor:'#ccc',width:width*0.25,alignItems:'center',marginTop:10,borderRadius:10}}>
                                    <Text style={{color:'red',}}>价值￥100</Text>
                                </View>
                                <View style={{flexDirection:'row',height:width*0.12,alignItems:'flex-end',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{borderWidth:1,borderColor:'green',borderRadius:50,height:15,width:15}}/>
                                        <Text style={{color:'red',fontWeight:'bold',fontSize:18,marginLeft:2}}>300 </Text>
                                        </View>
                                        <Text style={{color:'red',fontSize:13}}>+9.9元</Text>
                                    </View>
                                    <View>
                                        <View style={{width:70,backgroundColor:'red',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center'}}>
                                            <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                                        </View>
                                        <View style={{width:70,backgroundColor:'white',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center',borderWidth:1,borderColor:'red'}}>
                                            <Text style={{color:'red',fontSize:10,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3}}>已兑595件</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:width*0.9,backgroundColor:'white',marginTop:10,borderRadius:10,flexDirection:'row'}} activeOpacity={1}>
                            <Image source={{uri:'https://img2.baidu.com/it/u=2753350950,266639798&fm=253&fmt=auto&app=120&f=GIF?w=690&h=395'}} style={{height:width*0.25,width:width*0.25,margin:10,borderRadius:10}}/>
                            <View style={{marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:18,width:width*0.55}}
                                ellipsizeMode='tail'
                                numberOfLines={1}>优品康麦片水果坚果奇亚籽冲饮料</Text>
                                <View style={{backgroundColor:'#ccc',width:width*0.25,alignItems:'center',marginTop:10,borderRadius:10}}>
                                    <Text style={{color:'red',}}>价值￥100</Text>
                                </View>
                                <View style={{flexDirection:'row',height:width*0.12,alignItems:'flex-end',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{borderWidth:1,borderColor:'green',borderRadius:50,height:15,width:15}}/>
                                        <Text style={{color:'red',fontWeight:'bold',fontSize:18,marginLeft:2}}>300 </Text>
                                        </View>
                                        <Text style={{color:'red',fontSize:13}}>+9.9元</Text>
                                    </View>
                                    <View>
                                        <View style={{width:70,backgroundColor:'red',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center'}}>
                                            <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                                        </View>
                                        <View style={{width:70,backgroundColor:'white',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center',borderWidth:1,borderColor:'red'}}>
                                            <Text style={{color:'red',fontSize:10,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3}}>已兑595件</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:width*0.9,backgroundColor:'white',marginTop:10,borderRadius:10,flexDirection:'row'}} activeOpacity={1}>
                            <Image source={{uri:'https://img2.baidu.com/it/u=2753350950,266639798&fm=253&fmt=auto&app=120&f=GIF?w=690&h=395'}} style={{height:width*0.25,width:width*0.25,margin:10,borderRadius:10}}/>
                            <View style={{marginTop:10}}>
                                <Text style={{fontWeight:'bold',fontSize:18,width:width*0.55}}
                                ellipsizeMode='tail'
                                numberOfLines={1}>优品康麦片水果坚果奇亚籽冲饮料</Text>
                                <View style={{backgroundColor:'#ccc',width:width*0.25,alignItems:'center',marginTop:10,borderRadius:10}}>
                                    <Text style={{color:'red',}}>价值￥100</Text>
                                </View>
                                <View style={{flexDirection:'row',height:width*0.12,alignItems:'flex-end',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{borderWidth:1,borderColor:'green',borderRadius:50,height:15,width:15}}/>
                                        <Text style={{color:'red',fontWeight:'bold',fontSize:18,marginLeft:2}}>300 </Text>
                                        </View>
                                        <Text style={{color:'red',fontSize:13}}>+9.9元</Text>
                                    </View>
                                    <View>
                                        <View style={{width:70,backgroundColor:'red',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center'}}>
                                            <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                                        </View>
                                        <View style={{width:70,backgroundColor:'white',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center',borderWidth:1,borderColor:'red'}}>
                                            <Text style={{color:'red',fontSize:10,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3}}>已兑595件</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}