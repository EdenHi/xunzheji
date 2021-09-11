import React, { Component } from 'react';

import { View, Dimensions, TouchableOpacity, Text, Image, Modal, ScrollView, AsyncStorage, DeviceEventEmitter, ToastAndroid } from 'react-native';
import Swiper from 'react-native-swiper';
import ImageViewer from 'react-native-image-zoom-viewer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import ScrollTopView from 'react-native-scrolltotop';
import { FlatList } from 'react-native';
import StarRating from 'react-native-star-rating';
import shop from './duihuan_jinbi.json'
const { width, height } = Dimensions.get('window');

export default class duihuan_xiangqing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shop:shop[0].shop[this.props.route.params.index]
        }
    }
    render() {
        const {shop} = this.state
        return (
            <View style={{ flex: 1 }}>
                {/* 标题 */}
                <View style={{
                    height: height * 0.07,
                    alignItems: "center",
                    backgroundColor: global.mainColor,
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            width:width*0.06,
                            marginLeft:width*0.05
                        }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#fff'} />
                    </TouchableOpacity>

                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                    
                        color: "#fff"

                    }}>商品详情</Text>
                </View>

                <ScrollView>
                    <Image source={{uri:shop.img}} style={{width: '100%', height: height * 0.4,backgroundColor:'red'}}/>
                     {/* 介绍 */}
                     <View style={{ width: width * 0.95, marginLeft: width * 0.025, borderRadius: 10, marginTop: 10, backgroundColor: 'white' }}>
                        <Text style={{ margin: 10, fontSize: 18, fontWeight: 'bold', color: "#333333" }}>{shop.name}</Text>
                        <View style={{backgroundColor:'#f1f1f1',elevation:1,width:width*0.2,alignItems:'center',borderRadius:10,marginLeft:10}}>
                            <Text style={{color:global.mainColor,}}>价值￥{shop.price}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginVertical: 10,marginLeft:10 }}>
                            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <FontAwesome5 name='coins' color='#daa520' size={20} />
                                    <Text style={{color:global.mainColor,fontWeight:'bold',fontSize:23,marginLeft:4}}>{shop.jinbi}  </Text>
                                </View>
                            </View>
                            <Text style={{ color: '#88ada6', marginRight: 10 }}>已兑<Text>{shop.duihuan+'件'}</Text></Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={()=>{shop.jinbi>this.props.route.params.haveJinbi?ToastAndroid.show('金币不足，无法兑换',2000):this.props.navigation.navigate('duihuan',{jinbi:shop.jinbi,price:shop.price,name:shop.name,pic:shop.pic})}} style={{marginLeft:10,marginBottom:20}}>
                            <View style={{width:75,backgroundColor:global.mainColor,borderRadius:10,alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                            </View>
                            
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop:10,width: width * 0.95, marginHorizontal: width * 0.025}}>
                        <Image source={{uri:shop.pic1}} style={{height:800,width:width*0.95}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}