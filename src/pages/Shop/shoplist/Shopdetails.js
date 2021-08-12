/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Dimensions,TouchableOpacity,Text,Image,Modal,ScrollView,AsyncStorage, DeviceEventEmitter,ToastAndroid } from 'react-native';
import Swiper from 'react-native-swiper';
import ImageViewer from 'react-native-image-zoom-viewer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('window');
export default class Shopdetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            shops:this.props.route.params.shops,
            modalVisible1: false,
            modalVisible: false,
            //放大显示的图片索引
            currentIndex: 0,
            //存放图片的路径
            imgUrls:[],
            biao:1,
        }
    }

    //点击图片方法事件
  handleShowAlbum = (index) => {
    const imgUrls = this.state.shops.pic.map(v=>({url:v}));
    const currentIndex = index;
    const modalVisible = true;
    this.setState({
      imgUrls, currentIndex, modalVisible,
    });
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible1: visible });
  }


  insert_shopcart(){
    AsyncStorage.getItem('username',(err,result)=>{
        if(!err){
            fetch('http://8.142.11.85:3000/shop/insert_shopcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:result,
                    shop_name:this.props.route.params.shops.name,
                    shop_pic:this.props.route.params.shops.pic[0],
                    price:this.props.route.params.shops.price,
                    shop_dianpu:this.props.route.params.shops.dianpu,
                }),
            })
        }
    })
    ToastAndroid.showWithGravity('加入购物车成功',2000,ToastAndroid.BOTTOM)
    DeviceEventEmitter.emit('shop_cart',1)
  }

    render() {
        const { modalVisible, imgUrls, currentIndex,shops } = this.state;
        console.log(this.props.route.params.shops);
        return (
            <View style={{flex:1}}>
                {/* 标题 */}
                <View style={{
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            width: 50,
                            position: "absolute",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            left: 0
                        }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{ width: 200 }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>商品详情</Text>
                    </View>
                </View>
                
                <ScrollView
                showsVerticalScrollIndicator={false}>
                    {/* 轮播 */}
                    <View style={{height: height * 0.4,width: '100%'}}>
                        <Swiper autoplay={false}>
                        <TouchableOpacity onPress={() => this.handleShowAlbum(0)}>
                            <Image
                            style={{ width: '100%', height: height * 0.4 }}
                            resizeMode='stretch'
                            source={{
                                uri: this.state.shops.pic[0],
                            }}
                            />
                            <Text style={{color:'grey'}}><Text>1</Text>/3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleShowAlbum(1)}>
                            <Image
                            style={{ width: '100%',height: height * 0.4 }}
                            resizeMode='stretch'
                            source={{
                                uri: this.state.shops.pic[1],
                            }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleShowAlbum(2)}>
                            <Image
                            style={{ width: '100%', height: height * 0.4 }}
                            resizeMode='stretch'
                            source={{
                                uri: this.state.shops.pic[2],
                            }}
                            />
                        </TouchableOpacity>
                        </Swiper>

                    </View>
                    
                    {/* 介绍 */}
                    <View style={{width:width*0.95,marginLeft:width*0.025,borderRadius:10,marginTop:10,backgroundColor:'white'}}>
                        <Text style={{margin:10,fontSize:18,fontWeight:'bold'}}>{shops.name}</Text>
                        <Text style={shops.jieshao === '' ? {color:'#7cc0c0',marginLeft:10,height:0}:{color:'#7cc0c0',marginLeft:10,marginBottom:10}}>{shops.jieshao}</Text>
                        <View style={{flexDirection:'row',alignItems:'baseline',justifyContent:'space-between',marginBottom:10}}>
                            <Text style={{color:'#7cc0c0',fontSize:16,marginLeft:10}}>￥<Text style={{fontSize:25}}>{shops.price}</Text></Text>
                            <Text style={{color:'#88ada6',marginRight:10}}>月售<Text>{shops.sales}</Text></Text>
                        </View>
                    </View>
        
                    {/* 店铺 */}
                    <View style={{width:width*0.95,marginLeft:width*0.025,borderRadius:10,marginTop:10,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={{uri:shops.loge}} style={{height:40,width:40,borderRadius:50,margin:10}}/>
                            <Text style={{fontWeight:'bold',fontSize:16}}>{shops.dianpu}</Text>
                        </View>
                        <View style={{marginRight:width*0.025}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:'#7cc0c0',borderRadius:20,marginTop:10}} activeOpacity={1}><Text style={{padding:5,fontWeight:'bold',color:'#7cc0c0'}}>进店逛逛</Text></TouchableOpacity>
                            <TouchableOpacity style={{borderWidth:1,borderColor:'#7cc0c0',borderRadius:20,marginTop:10,marginBottom:10}} activeOpacity={1}><Text style={{padding:5,fontWeight:'bold',color:'#7cc0c0'}}>全部商品</Text></TouchableOpacity>
                        </View>
                    </View>
                    
                    {/* 商品详情 */}
                    <View style={{alignItems:'center',marginTop:10}}>
                        <Text>———— 商品详情 ————</Text>
                        <Image source={{uri:shops.imag1}} style={{marginTop:10,height:800,width:width*0.95}} resizeMode='stretch'/>
                        <Image source={{uri:shops.imag2}} style={shops.imag2===''?{}:{height:800,width:width*0.95}} resizeMode='stretch'/>
                        <Image source={{uri:shops.imag3}} style={shops.imag3===''?{}:{height:800,width:width*0.95}} resizeMode='stretch'/>
                        <Image source={{uri:shops.imag4}} style={shops.imag4===''?{}:{height:800,width:width*0.95}} resizeMode='stretch'/>
                    </View>
                   
                </ScrollView>

                {/* 立即购买 */}
                <View style={{width,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableOpacity activeOpacity={1} style={{marginTop:5}}>
                        <AntDesign
                        name="isv"
                        size={25}
                        color="#7cc0c0"/>
                        <Text>店铺</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={1}  style={{backgroundColor:'#66f1ed',borderTopLeftRadius:20,borderBottomLeftRadius:20,marginTop:5,marginBottom:5,width:100,justifyContent:'center',alignItems:'center'}}
                        onPress={()=>this.insert_shopcart()}>
                            <Text style={{fontSize:16,color:'white',fontWeight:'bold',padding:5}}>加入购物车</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{backgroundColor:'#7cc0c0',borderTopRightRadius:20,borderBottomRightRadius:20,marginTop:5,marginBottom:5,width:100,justifyContent:'center',alignItems:'center'}}
                        onPress={()=>this.props.navigation.navigate('Zhifu',this.state.shops)}>
                            <Text style={{fontSize:16,color:'white',fontWeight:'bold',padding:5}}>立即购买</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* 放大图片的遮罩层 */}
                <Modal animationType={'slide'}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { this.setState({ modalVisible: false }); }}>
                    <ImageViewer imageUrls={imgUrls} index={currentIndex} enableImageZoom={true} onClick={() => { this.setState({ modalVisible: false }); }}/>
                </Modal>
            </View>
        );
    }
}