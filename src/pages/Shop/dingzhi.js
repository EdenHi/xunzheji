/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text, TouchableOpacity,Image,Dimensions, ScrollView,StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
const {height,width} = Dimensions.get('window');
export default class dingzhi extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{width:width }}>
                <View style={{width:width,height:height*0.08,backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <TouchableOpacity style={{marginLeft:"2%"}}
                      onPress={() => navigation.goBack()}
          >
          <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="left"
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{fontSize:15}}>手工定制</Text>
          <View style={{width:width*0.09,height:width*0.09,}}></View>
                </View>
                <View style={{width:width * 0.95,marginLeft:width * 0.025}}>
                <View style={{flexDirection:'row',marginTop:10,backgroundColor:'white',height:width * 0.2,justifyContent:'space-around'}}>
                        <View style={{justifyContent:'space-around'}}>
                            <Text style={{fontSize:15}}>已收录31省市475名非遗大师、手艺人</Text>
                            <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderRadius:25,borderColor:'#7cc0c0',alignItems:'center',width:width*0.5}}>
                                <Image source={{uri:'https://img0.baidu.com/it/u=209027227,4293619616&fm=26&fmt=auto&gp=0.jpg'}} style={{height:20,width:20,borderRadius:8,marginLeft:width * 0.04,marginTop:3,marginBottom:3,marginRight:width * 0.01}}/>
                                <Text style={{fontSize:12,color:'#7cc0c0'}}>瓷器非遗传承人晨扬龙入住</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#7cc0c0',height:width *0.06,width:width*0.15,borderRadius:5,elevation:5,justifyContent:'center',alignItems:'center',marginTop:width * 0.03}}>
                            <Text style={{color:'white',fontSize:12}}>查看全部 </Text>
                        </TouchableOpacity>
                    </View>
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
                   <View style={{width:width,height:1400}}>
                    <View style={{marginTop:width * 0.03}}>
                        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:width * 0.02}}>徽派竹雕</Text>
                        <Image source={{uri:'https://img1.baidu.com/it/u=4161466098,2632610288&fm=26&fmt=auto&gp=0.jpg'}} style={{width:width * 0.95,height:width * 0.5,borderRadius:10,marginTop:width * 0.03}}/>
                        <View style={{flexDirection:'row',marginTop:width * 0.03,backgroundColor:'white'}}>
                            <Image source={{uri:'https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg'}} style={{width:width * 0.3,height:width * 0.3,margin:width * 0.02,borderRadius:15}}/>
                            <View style={{marginBottom:width * 0.02,width:width * 0.4,marginTop:width * 0.015}}>
                                <Text style={{fontSize:15,marginBottom:width * 0.03}}>洪建华</Text>
                                <Text style={{color:'#666',marginBottom:width * 0.04,fontSize:12}}>省级非遗传承人</Text>
                                <Text style={{backgroundColor:'#ccc',color:'#666',fontSize:10,borderRadius:10,padding:5,marginBottom:width * 0.03,width:width * 0.35}}>中国木（竹）雕展“金雕手”</Text>
                                <Text style={{backgroundColor:'#ccc',color:'#666',fontSize:10,borderRadius:10,padding:5,width:width * 0.35}}>黄山市徽派雕刻博物馆馆长</Text>
                            </View>
                        <TouchableOpacity style={{backgroundColor:'#7cc0c0',elevation:5,height:width * 0.06,width:width * 0.15,borderRadius:5,justifyContent:'center',alignItems:'center',marginTop:width * 0.26}}>
                            <Text style={{color:'white',fontSize:12}}>查看定制</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop:width * 0.03}}>
                        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:width * 0.02}}>砚雕</Text>
                        <Image source={{uri:'https://img1.baidu.com/it/u=2243210361,1712617060&fm=26&fmt=auto&gp=0.jpg'}} style={{width:width * 0.95,height:width * 0.5,borderRadius:10,marginTop:width * 0.03}}/>
                        <View style={{flexDirection:'row',marginTop:width * 0.03,backgroundColor:'white'}}>
                            <Image source={{uri:'https://img1.baidu.com/it/u=2222344400,3431079609&fm=26&fmt=auto&gp=0.jpg'}} style={{width:width * 0.3,height:width * 0.3,margin:width * 0.02,borderRadius:15}}/>
                            <View style={{marginBottom:width * 0.02,width:width * 0.4,marginTop:width * 0.015}}>
                                <Text style={{fontSize:15,marginBottom:width * 0.03}}>陆小华</Text>
                                <Text style={{color:'#666',marginBottom:width * 0.04}}>市级非遗传承人</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{backgroundColor:'#ccc',color:'#666',fontSize:12,borderRadius:10,padding:5,marginBottom:width * 0.03}}>海派砚雕</Text>
                                    <Text style={{backgroundColor:'#ccc',color:'#666',fontSize:12,borderRadius:10,padding:5,marginLeft:5,marginBottom:width * 0.03}}>一砚一品</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{backgroundColor:'#7cc0c0',height:width * 0.06,width:width * 0.15,elevation:5,borderRadius:5,justifyContent:'center',alignItems:'center',marginTop:width * 0.26}}>
                                <Text style={{color:'white',fontSize:12}}>查看定制</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:width * 0.03,backgroundColor:'white'}}>
                            <Image source={{uri:'https://img0.baidu.com/it/u=2274095050,1497185669&fm=26&fmt=auto&gp=0.jpg'}} style={{width:width * 0.91,height:width * 0.3,borderRadius:10,marginLeft:width * 0.02,marginTop:width * 0.03}}/>
                            {/* 进度条显示，后期把数值放入数据库，进行数字的更改 */}
                            <View style={{marginLeft:width * 0.035}}>
                                <View style={{flexDirection:'row',marginTop:width * 0.03,alignItems:'center'}}>
                                    <Text style={{color:'white',backgroundColor:'#7cc0c0',borderRadius:5,padding:3,height:25,fontSize:12}}>已结束</Text>
                                    <Text style={{fontSize:15,marginLeft:10}}>蝉形砚</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:width * 0.03}}>
                                    <View style={[styles.pre]}>
                                        <View style={[styles.preOisn, { width: width * 0.6 * (80 / 100) }]}/>
                                        <View style={[styles.preMain,{justifyContent: 'center'}]}>
                                            <Text style={{ color: 'red', fontSize: 14}}>{80}%</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{borderColor:'#7cc0c0',borderWidth:1,height:width * 0.06,width:width * 0.15,borderRadius:10,justifyContent:'center',alignItems:'center',marginLeft:width * 0.1,top:-5}}>
                                            <Text style={{color:'#7cc0c0',fontSize:12}}>查看详情</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    </View>
                </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pre: {
        borderWidth: 1,
        borderColor: '#FFB1B1',
        width: width * 0.6,
        height: 20,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        overflow: 'hidden',
    },
    preMain: {
        alignItems: 'center',
        height: 20,
        position: 'relative',
    },
    preOisn: {
        position: 'absolute',
        height:20,
        backgroundColor: '#FFCFCF',
        borderRadius: 2000,
    },
});
