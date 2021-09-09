/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Dimensions, TouchableOpacity, Text, Image, Modal, ScrollView, AsyncStorage, DeviceEventEmitter, ToastAndroid } from 'react-native';
import Swiper from 'react-native-swiper';
import ImageViewer from 'react-native-image-zoom-viewer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import shoplist from './shoplist.json';
import { color } from 'react-native-elements/dist/helpers';
import ScrollTopView from 'react-native-scrolltotop';
import { FlatList } from 'react-native';
import StarRating from 'react-native-star-rating';

const { width, height } = Dimensions.get('window');


export default class Shopdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowToTop: false,
            shops: this.props.route.params.shops,
            modalVisible1: false,
            modalVisible: false,
            //放大显示的图片索引
            currentIndex: 0,
            //存放图片的路径
            imgUrls: [],
            biao: 1,
            data: [],
            username: ''
        }
    }

    //点击图片方法事件
    handleShowAlbum = (ii) => {
        const imgUrls = this.state.shops.pic.map(v => ({ url: v }));
        const currentIndex = ii;
        const modalVisible = true;
        this.setState({
            imgUrls, currentIndex, modalVisible,
        });
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible1: visible });
    }

    _onScroll(e) {
        const offsetY = e.nativeEvent.contentOffset.y;

        if (offsetY > 100) {
            this.setState({
                isShowToTop: true
            })
        } else {
            this.setState({
                isShowToTop: false
            })
        }
    }

    get_pingjia() {
        fetch('http://47.100.78.254:3000/shop/select_pingjia', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                shop_name: this.props.route.params.shops.name,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson,
                });
            })
    }
    /* 添加足迹 */
    FootMark() {
        fetch("http://47.100.78.254:3000/shop/insertfootmark", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                shop_name: this.props.route.params.shops.name,
                shop_pic: this.props.route.params.shops.pic[0],
                username: this.state.username,
                createdAt: new Date,
                price: this.props.route.params.shops.price,
            })
        })
    }
    componentDidMount() {
        AsyncStorage.getItem('username',(err,result)=>{this.setState({username:result}),console.log(this.state.username);})


        this.get_pingjia();
        this.listener = DeviceEventEmitter.addListener('Shopdetails', this.get_pingjia.bind(this))
    }

    componentWillUnmount() {
        this.listener.remove();
        this.FootMark();
    }


    dianpu() {
        let newJson = [];
        let json = eval(shoplist);
        //先查询最外层的分类
        for (var i = 0; i < json.length; i++) {
            if (i === 1) {
                //因为键值是数组，所以继续循环查询键值里的数据
                for (var k = 0; k < json[1].meishi.length; k++) {
                    if ((json[1].meishi[k].name).indexOf(this.props.route.params.shops.dianpu) > -1) {
                        for (var j = 0; j < json[1].meishi[k].shops.length; j++) {
                            newJson.push(json[1].meishi[k].shops[j]);
                        }
                    }
                }
            }
            if (i === 2) {
                //因为键值是数组，所以继续循环查询键值里的数据
                for (var k = 0; k < json[2].zhizao.length; k++) {
                    if ((json[2].zhizao[k].name).indexOf(this.props.route.params.shops.dianpu) > -1) {
                        for (var j = 0; j < json[2].zhizao[k].shops.length; j++) {
                            newJson.push(json[2].zhizao[k].shops[j]);
                        }
                    }
                }
            }
            if (i === 3) {
                //因为键值是数组，所以继续循环查询键值里的数据
                for (var k = 0; k < json[3].gongmei.length; k++) {
                    if ((json[3].gongmei[k].name).indexOf(this.props.route.params.shops.dianpu) > -1) {
                        for (var j = 0; j < json[3].gongmei[k].shops.length; j++) {
                            newJson.push(json[3].gongmei[k].shops[j]);
                        }
                    }
                }
            }
            if (i === 4) {
                //因为键值是数组，所以继续循环查询键值里的数据
                for (var k = 0; k < json[4].chajiu.length; k++) {
                    if ((json[4].chajiu[k].name).indexOf(this.props.route.params.shops.dianpu) > -1) {
                        for (var j = 0; j < json[4].chajiu[k].shops.length; j++) {
                            newJson.push(json[4].chajiu[k].shops[j]);
                        }
                    }
                }
            }
        }
        console.log('tempJson', newJson);
        // this.setState({
        //     data:newJson
        // })
        this.props.navigation.push('Shoplist', { shops: newJson })
    }

    insert_shopcart() {



        fetch('http://47.100.78.254:3000/shop/insert_shopcart', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.props.route.params.username,
                shop_name: this.props.route.params.shops.name,
                shop_pic: this.props.route.params.shops.pic[0],
                price: this.props.route.params.shops.price,
                shop_dianpu: this.props.route.params.shops.dianpu,
            }),
        })


        ToastAndroid.show('加入购物车成功', 2000)
        DeviceEventEmitter.emit('shop_cart', 1)
    }

    renderDate({ item, index }) {
        //取出年月日
        let a = item.time.slice(0, 10)
        //取出时分
        let b = item.time.slice(11, 16)
        let time1 = new Date();
        let time2 = new Date(item.time).getTime()
        let sum = a + ' ' + b
        //获得相差的秒
        let ss = (time1 - time2) / 1000
        let day = Math.floor(ss / 86400)
        let hour = Math.floor(ss / 3600)
        let min = Math.floor(ss / 60)
        let time = ''
        if (day >= 1 && day < 4) { time = day + '天前' }
        else if (hour >= 1 && hour < 24) { time = hour + '小时前' }
        else if (min >= 1 && min < 60) { time = min + '分钟前' }
        else if (day >= 4) { time = sum }
        else { time = '刚刚' }

        return (
            <View key={index} style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: item.portrait }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50 }} />
                    <View style={{ marginLeft: 5, justifyContent: 'space-between' }}>
                        <Text>{item.nickname}</Text>
                        <Text style={{ fontSize: 12, color: '#ccc' }}>{time}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={item.pingfen}
                        starSize={20}
                        emptyStarColor="grey"
                        fullStarColor="yellow"
                        containerStyle={{ width: 100 }}
                    />
                    <Text style={{ marginLeft: 10 }}>{item.pingfen}.0</Text>
                </View>

                <Text style={{ color: '#333333', marginTop: 10, marginRight: 5 }} numberOfLines={5}>{item.pingjia}</Text>

                {item.img > 0 ? <View style={{
                    flexDirection: 'row',
                    // 一行显示不下,换一行
                    flexWrap: 'wrap',
                    // 侧轴方向
                    alignItems: 'center', // 必须设置,否则换行不起作用
                    marginTop: 10
                }}>

                    {
                        item.img.map((v, k) => {
                            return (
                                <View key={k}>
                                    <Image source={{ uri: v }} style={{ width: width * 0.3, height: width * 0.3, marginRight: 3, marginBottom: 3 }} />
                                </View>
                            )
                        })
                    }
                </View>
                    : null}

            </View>
        )
    }

    ListHeaderComponent() {
        return (
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ color: "#333333" }}>———— 用户评价 ————</Text>
            </View>
        )
    }

    ListEmptyComponent() {
        return (
            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text>暂无评价</Text>
            </View>
        )
    }

    ItemSeparatorComponent() {
        return (
            <View style={{ borderWidth: 0.5, width: '80%', marginLeft: '10%', borderColor: '#ccc' }} />
        )
    }

    render() {
        const { modalVisible, imgUrls, currentIndex, shops } = this.state;
        // console.log(this.props.route.params.shops);
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

                <ScrollView
                    onScroll={(e) => this._onScroll(e)}
                    ref='listview'
                    showsVerticalScrollIndicator={false}>
                    {/* 轮播 */}
                    <View style={{ height: height * 0.4, width: '100%' }}>
                        <Swiper autoplay={false}>
                            <TouchableOpacity onPress={() => this.handleShowAlbum(0)}>
                                <Image
                                    style={{ width: '100%', height: height * 0.4 }}
                                    resizeMode='stretch'
                                    source={{
                                        uri: this.state.shops.pic[0],
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleShowAlbum(1)}>
                                <Image
                                    style={{ width: '100%', height: height * 0.4 }}
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
                    <View style={{ width: width * 0.95, marginLeft: width * 0.025, borderRadius: 10, marginTop: 10, backgroundColor: 'white' }}>
                        <Text style={{ margin: 10, fontSize: 18, fontWeight: 'bold', color: "#333333" }}>{shops.name}</Text>
                        <Text style={shops.jieshao === '' ? { color: global.mainColor, marginLeft: 10, height: 0 } : { color: global.mainColor, marginLeft: 10, marginBottom: 10 }}>{shops.jieshao}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={{ color: global.mainColor, fontSize: 16, marginLeft: 10 }}>￥<Text style={{ fontSize: 25 }}>{shops.price}</Text></Text>
                            <Text style={{ color: '#88ada6', marginRight: 10 }}>月售<Text>{shops.sales}</Text></Text>
                        </View>
                    </View>

                    {/* 店铺 */}
                    <View style={{ width: width * 0.95, marginLeft: width * 0.025, borderRadius: 10, marginTop: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: shops.loge }} style={{ height: 40, width: 40, borderRadius: 50, margin: 10 }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: "#333333" }}>{shops.dianpu}</Text>
                        </View>
                        <View style={{ marginRight: width * 0.025 }}>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: global.mainColor, borderRadius: 20, marginTop: 10 }} activeOpacity={1}><Text style={{ padding: 5, fontWeight: 'bold', color: global.mainColor }} onPress={() => this.dianpu()}>进店逛逛</Text></TouchableOpacity>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: global.mainColor, borderRadius: 20, marginTop: 10, marginBottom: 10 }} activeOpacity={1}><Text style={{ padding: 5, fontWeight: 'bold', color: global.mainColor }} onPress={() => this.dianpu()}>全部商品</Text></TouchableOpacity>
                        </View>
                    </View>

                    {/* 用户评价 */}




                    <FlatList
                        keyExtractor={(item, index) => (index + '1')}
                        data={this.state.data}
                        contentContainerStyle={{ backgroundColor: '#fff', borderRadius: 10, width: width * 0.95, marginLeft: width * 0.025, marginTop: 10 }}
                        renderItem={this.renderDate.bind(this)}
                        ListHeaderComponent={this.ListHeaderComponent.bind(this)}
                        ListEmptyComponent={this.ListEmptyComponent.bind(this)}
                        ItemSeparatorComponent={this.ItemSeparatorComponent.bind(this)} />





                    {/* 商品详情 */}
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: "#333333" }}>———— 商品详情 ————</Text>
                        <Image source={{ uri: shops.imag1 }} style={{ marginTop: 10, height: 800, width: width * 0.95 }} resizeMode='stretch' />
                        <Image source={{ uri: shops.imag2 }} style={shops.imag2 === '' ? {} : { height: 800, width: width * 0.95 }} resizeMode='stretch' />
                        <Image source={{ uri: shops.imag3 }} style={shops.imag3 === '' ? {} : { height: 800, width: width * 0.95 }} resizeMode='stretch' />
                        <Image source={{ uri: shops.imag4 }} style={shops.imag4 === '' ? {} : { height: 800, width: width * 0.95 }} resizeMode='stretch' />
                    </View>

                </ScrollView>

                {/* 立即购买 */}
                <View style={{ width, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 5 }}>
                        <AntDesign
                            name="isv"
                            size={25}
                            color={global.mainColor}
                            onPress={() => this.dianpu()} />
                        <Text style={{ fontSize: 12 }}>店铺</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={1} style={{ backgroundColor: global.mainColor, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => this.insert_shopcart()}>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>加入购物车</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{ backgroundColor: global.mainColor, borderTopRightRadius: 20, borderBottomRightRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate('Zhifu', this.state.shops)}>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>立即购买</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* 放大图片的遮罩层 */}
                <Modal animationType={'slide'}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { this.setState({ modalVisible: false }); }}>
                    <ImageViewer imageUrls={imgUrls} index={currentIndex} enableImageZoom={true} onClick={() => { this.setState({ modalVisible: false }); }} />
                </Modal>
                {this.state.isShowToTop ? <ScrollTopView style={{ width: width * 0.2, height: height * 0.2, backgroundColorL: global.mainColor }} root={this} ></ScrollTopView> : null}
            </View>
        );
    }
}