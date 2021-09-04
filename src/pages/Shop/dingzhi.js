/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');

export default class dingzhi extends Component {
    componentDidMount(){
        console.log("naviga"+this.props.navigation);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <LinearGradient style={{ width: width, height: "100%" }} colors={[global.back2, "#fff", "#fff"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
                        <TouchableOpacity activeOpacity={1} style={{width:width*0.06}}>
                        <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                            {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85 }}>定制</Text>

                    </View>
                    <View style={{ width: width}}>
                        <View style={{ flexDirection: "row", height: width * 0.15,marginLeft:width*0.05 }}>
                            <View style={{ height: width * 0.13, width: width * 0.7 }}>
                                <View style={{ height: width * 0.08 }}><Text style={{ fontSize: 15 }}>已收录31省市475名非遗大师、手艺人</Text></View>

                                {/* <TouchableOpacity style={{borderWidth:1,borderRadius:25,borderColor:'#fff',alignItems:'center',width:width*0.6}}> */}
                                {/* <Image source={{uri:'https://img0.baidu.com/it/u=209027227,4293619616&fm=26&fmt=auto&gp=0.jpg'}} style={{height:20,width:20,borderRadius:8,marginLeft:width * 0.04,marginTop:3,marginBottom:3,marginRight:width * 0.01}}/>
                                <Text style={{fontSize:12,color:'#fff'}}>瓷器非遗传承人晨扬龙入住</Text> */}
                                <Swiper style={{}} showsPagination={false} horizontal={false} autoplay autoplayTimeout={1} >
                                    <View style={{ flex: 1 }}><Text style={{ fontSize: 12, color: '#fff' }}>瓷器非遗传承人 宋雅婷入住</Text></View>
                                    <View style={{ flex: 1 }}><Text style={{ fontSize: 12, color: '#fff' }}>瓷器非遗传承人 陈钱钱入住</Text></View>
                                    <View style={{ flex: 1 }}><Text style={{ fontSize: 12, color: '#fff' }}>瓷器非遗传承人 沈阳入住</Text></View>
                                    <View style={{ flex: 1 }}><Text style={{ fontSize: 12, color: '#fff' }}>瓷器非遗传承人 张毅入住</Text></View>
                                </Swiper>
                                {/* </TouchableOpacity> */}
                            </View>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate("Jiang")} style={{ backgroundColor: '#fedc61', height: width * 0.06, width: width * 0.15, borderRadius: 5, elevation: 5, justifyContent: 'center', alignItems: 'center', marginTop: width * 0.03, marginLeft: 15 }}>
                                <Text style={{ color: 'white', fontSize: 12 }}>查看全部 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:width}}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                            >
                                <View style={{height:1250}}>
                                    <View style={{ marginTop: width * 0.03, width: width , borderRadius: 15,marginLeft:width*0.05 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: width * 0.02 }}>徽派竹雕</Text>
                                        <View style={{ width: width * 0.9, height: width * 0.5, borderRadius: 10, marginTop: width * 0.03 ,overflow:"hidden"}}><Image source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi03.c.aliimg.com%2Fimg%2Fibank%2F2015%2F050%2F317%2F2045713050_1963800487.jpg&refer=http%3A%2F%2Fi03.c.aliimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630802028&t=9600f09bde5760599589c2ed9caf7c49' }} style={{ width: width * 0.9, height: width * 0.5 }} /></View>
                                        <View style={{ flexDirection: 'row', marginTop: width * 0.03, backgroundColor: "#fff", elevation: 2, borderRadius: 10, width: width * 0.9 }}>
                                            <Image source={{ uri: 'https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg' }} style={{ width: width * 0.3, height: width * 0.3, margin: width * 0.02, borderRadius: 15 }} />
                                            <View style={{ marginBottom: width * 0.02, width: width * 0.4, marginTop: width * 0.015 }}>
                                                <Text style={{ fontSize: 15, marginBottom: width * 0.02 }}>洪建华</Text>
                                                <Text style={{ color: '#666', marginBottom: width * 0.02, fontSize: 12 }}>省级非遗传承人</Text>
                                                <Text style={{ backgroundColor: '#ccc', color: '#666', fontSize: 10, borderRadius: 10, padding: 5, marginBottom: width * 0.03, width: width * 0.37 }}>中国木（竹）雕展“金雕手”</Text>
                                                <Text style={{ backgroundColor: '#ccc', color: '#666', fontSize: 10, borderRadius: 10, padding: 5, width: width * 0.37 }}>黄山市徽派雕刻博物馆馆长</Text>
                                            </View>
                                            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Heritage')} style={{ backgroundColor: '#fedc61', elevation: 5, height: width * 0.06, width: width * 0.15, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: width * 0.26 }}>
                                                <Text style={{ color: 'white', fontSize: 12 }}>查看定制</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: width * 0.03 ,marginLeft:width*0.05 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: width * 0.02 }}>砚雕</Text>

                                        <View style={{ width: width * 0.9, height: width * 0.5, borderRadius: 10, marginTop: width * 0.03 ,overflow:"hidden"}} ><Image source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.800%2Ftc.service.weibo.com%2Fmmbiz_qpic_cn%2F11683ca48fe01f0db2342f41cad423be.jpg&refer=http%3A%2F%2Ftc.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630802037&t=9b6e6d9aaf1664c039fd661c48110414' }} style={{ width: width * 0.9, height: width * 0.5 }} /></View>
                                        <View style={{ flexDirection: 'row', marginTop: width * 0.03, backgroundColor: "#fff", elevation: 2, borderRadius: 10, width: width * 0.9 }}>
                                            <Image source={{ uri: 'https://img1.baidu.com/it/u=2222344400,3431079609&fm=26&fmt=auto&gp=0.jpg' }} style={{ width: width * 0.3, height: width * 0.3, margin: width * 0.02, borderRadius: 15 }} />
                                            <View style={{ marginBottom: width * 0.02, width: width * 0.4, marginTop: width * 0.015 }}>
                                                <Text style={{ fontSize: 15, marginBottom: width * 0.03 }}>陆小华</Text>
                                                <Text style={{ color: '#666', marginBottom: width * 0.04 }}>市级非遗传承人</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ backgroundColor: '#ccc', color: '#666', fontSize: 12, borderRadius: 10, padding: 5, marginBottom: width * 0.03 }}>海派砚雕</Text>
                                                    <Text style={{ backgroundColor: '#ccc', color: '#666', fontSize: 12, borderRadius: 10, padding: 5, marginLeft: 5, marginBottom: width * 0.03 }}>一砚一品</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Heritage')} style={{ backgroundColor: '#fedc61', height: width * 0.06, width: width * 0.15, elevation: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: width * 0.26 }}>
                                                <Text style={{ color: 'white', fontSize: 12 }}>查看定制</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: width * 0.03, }}>
                                            <View style={{ borderRadius: 10, elevation: 2, overflow: 'hidden', width: width * 0.9 }}><Image source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzkres2.myzaker.com%2F201808%2F5b794f877f52e97e45000210_raw.gif&refer=http%3A%2F%2Fzkres2.myzaker.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630800879&t=4b6f89a11eb1d3f28926683357105b77' }} style={{ width: width * 0.9, height: width * 0.5, borderRadius: 10 }} /></View>
                                            {/* 进度条显示，后期把数值放入数据库，进行数字的更改 */}
                                            <View style={{ marginLeft: width * 0.035 }}>
                                                <View style={{ flexDirection: 'row', marginTop: width * 0.03, alignItems: 'center' }}>
                                                    <Text style={{ color: 'white', backgroundColor: global.back2, borderRadius: 5, padding: 3, height: 25, fontSize: 12 }}>已结束</Text>
                                                    <Text style={{ fontSize: 15, marginLeft: 10 }}>蝉形砚</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', marginTop: width * 0.03 }}>
                                                    <View style={[styles.pre]}>
                                                        <View style={[styles.preOisn, { width: width * 0.6 * (80 / 100) }]} />
                                                        <View style={[styles.preMain, { justifyContent: 'center' }]}>
                                                            <Text style={{ color: 'red', fontSize: 14 }}>{80}%</Text>
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity activeOpacity={1} style={{ borderColor: '#fedc61', borderWidth: 1, height: width * 0.06, width: width * 0.15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: width * 0.1, top: -5 }}>
                                                        <Text style={{ color: '#fedc61', fontSize: 12 }}>查看详情</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </LinearGradient>
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
        height: 20,
        backgroundColor: '#FFCFCF',
        borderRadius: 2000,
    },
});
