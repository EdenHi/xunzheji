import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
import { ImageBackground } from 'react-native';
import { captureRef } from "react-native-view-shot";
import { createRef } from 'react';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ImagePicker from 'react-native-image-crop-picker';
import SegmentTabBar from './ClotheBar';
const { width, height } = Dimensions.get('window');

const data = [{

    img: 'http://47.100.78.254:3000/public/images/dingzhi/1.png'
},

{

    img: 'http://47.100.78.254:3000/public/images/dingzhi/2.png'
},
{

    img: 'http://47.100.78.254:3000/public/images/dingzhi/3.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/4.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/5.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/6.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/7.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/8.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/9.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/10.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/11.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/12.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/13.png'
}, {

    img: 'http://47.100.78.254:3000/public/images/dingzhi/14.png'
},
]

const viewRef = createRef();
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    Modal,
    PanResponder,
    Animated,
    FlatList,
    DeviceEventEmitter,
    AsyncStorage,
    ToastAndroid
} from 'react-native';


export default class Clothe extends Component {
    constructor(props) {

        super(props);
        this.state = {
            pic1: false,
            pic2: false,
            pic3: false,
            pan: [new Animated.ValueXY(), new Animated.ValueXY(), new Animated.ValueXY(), new Animated.ValueXY(), new Animated.ValueXY(), new Animated.ValueXY()],
            scale: [new Animated.Value(1), new Animated.Value(1), new Animated.Value(1), new Animated.Value(1), new Animated.Value(1), new Animated.Value(1)],
            shoturi: '',
            modalVisible4: false,
            drawPic: '',
            backImg: props.index,
            img: '',
            zoombig: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            showBorder: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            imgData: [],
            marginTop: [height * 0.2, height * 0.2, height * 0.2, height * 0.2, height * 0.2, height * 0.2, height * 0.2, height * 0.2],
            fresh: false,
            eye: true,
            closeeye:true,
        };
    }

    /* model显隐 */
    setModalVisible4 = (visible) => {
        this.setState({ modalVisible4: visible });
    }


    //打开本地图册
    _openPicker() {

        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            multiple: true,
            maxFiles: 1,
        }).then(image => {

            this.addPic({ img: image[0].path })
        });

    }

    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener('Draw', (shoturi) => {

            this.addPic({ img: shoturi.drawpic, id: 1 })
        });
    }
    componentWillUnmount() {
        this.listener.remove();
    }
    /* 增加图片 */
    addPic(item) {

        let Arr = this.state.imgData;

        Arr.push(item)
        this.setState({ fresh: !this.state.fresh })

    }
    /* 隐藏自定义组件 */
    FlatListClic() {
        this.setState({ pic2: false });
        this.setState({ pic3: false });
        this.setState({ pic1: true });
    }
    /* 底部渲染组件 */
    _renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { this.addPic(item), this.FlatListClic() }}
            style={{ width: width * 0.25, height: width * 0.25, margin: width * 0.04 }}><Image style={{ width: "100%", height: "100%" }} source={{ uri: item.img }}></Image></TouchableOpacity>
    );
    /* 截图 */
    capture() {
        captureRef(viewRef, {
            format: "jpg",
            quality: 0.8
        }).then(
            uri => {
                this.setState({ shoturi: uri })
            },
            error => console.error("Oops, snapshot failed", error)
        )
    }
    /* 截图并隐藏边框 */
    Sure() {
        let Arr = this.state.showBorder;
        for (let i = 0; i < Arr.length; i++) {
            Arr[i] = false;
        }
        this.setState({closeeye:false})
        setTimeout(() => {
            this.capture()
        }, 50);

        this.setModalVisible4(!this.state.modalVisible4)
    }
    /* 图片删除 */
    delete(e) {
        const arrs = this.state.imgData;
        arrs.splice(e, 1);
        this.setState({ imgData: arrs })
    }
    /* 图片放大 */
    ZoomBig(e) {
        if (this.state.zoombig[e] <= 15) {
            let zoombig = this.state.zoombig;
            zoombig[e] = zoombig[e] + 1;
        }
        let Top = this.state.marginTop;
        Top[e] = Top[e] - height * 0.01
        this.setState({ marginTop: Top })
        Animated.spring(this.state.scale[e], { toValue: 1 + this.state.zoombig[e] * 0.1, friction: 3 }).start();
    }
    /* 图片缩小 */
    ZoomSmall(e) {
        if (this.state.zoombig[e] >= -7) {
            let zoombig = this.state.zoombig;
            zoombig[e] = zoombig[e] - 1;
        }
        let Top = this.state.marginTop;
        Top[e] = Top[e] + height * 0.01
        this.setState({ marginTop: Top })
        Animated.spring(this.state.scale[e], { toValue: 1 + this.state.zoombig[e] * 0.1, friction: 3 }).start();
    }
    /* 显示边框 */
    ShowBorder() {

        let Arr = this.state.showBorder;
        for (let i = 0; i < Arr.length; i++) {
            Arr[i] = true;
        }

    }
    HideAll(){
        let Arr = this.state.showBorder;
        for (let i = 0; i < Arr.length; i++) {
            Arr[i] = false;
        }
    }
    /* 隐藏边框边框 */
    HideBorder(e) {
        console.log(e);
        console.log(this.state.showBorder);
        let Arr = this.state.showBorder;
        Arr[e] = false;
        this.setState({ fresh: !this.state.fresh })
        console.log(this.state.showBorder);
    }
    /* 延时函数 */
    sleep(time) {
        var startTime = new Date().getTime() + parseInt(time, 10);
        while (new Date().getTime() < startTime) { }
    };
    insert_shopcart(item) {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                fetch('http://47.100.78.254:3000/shop/insert_shopcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                        shop_name: '定制物品',
                        shop_pic: this.state.shoturi,
                        price: 39,
                        shop_dianpu: '官方店铺',
                    }),
                })
            }
        })
        ToastAndroid.showWithGravity('加入购物车成功', 2000, ToastAndroid.BOTTOM)
        DeviceEventEmitter.emit('shop_cart', 1)
    }
    EyeControl(){
        if(this.state.eye==false){
            this.ShowBorder()
        }else{
            this.HideAll()
        }
    }
    ImageComponent() {


        return this.state.imgData.map((i, key) => {
            this._panResponder = PanResponder.create({
                onMoveShouldSetResponderCapture: () => true,
                onMoveShouldSetPanResponderCapture: () => true,
                // 设置初始位置
                onPanResponderGrant: (e, gestureState) => {
                    this.state.pan[key].setOffset({
                        x: this.state.pan[key].x._value,
                        y: this.state.pan[key].y._value
                    });
                    this.state.pan[key].setValue({ x: 0, y: 0 });

                },
                // 使用拖拽的偏移量来定位
                onPanResponderMove: Animated.event([
                    null, { dx: this.state.pan[key].x, dy: this.state.pan[key].y },
                ]),
                onPanResponderRelease: (e, { vx, vy }) => {
                    this.state.pan[key].flattenOffset();
                }
            });
            const A = this.state.showBorder[key] ? <View style={{ flexDirection: "row-reverse", justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => { this.HideBorder(key) }} style={{ width: width * 0.08, height: width * 0.08, borderWidth: 0.3, marginTop: height * 0.01, borderRadius: 5 }}><Image style={{ height: '100%', width: '100%' }} source={require('../pages/img/钩-03.png')}></Image></TouchableOpacity>
                <TouchableOpacity onPress={() => { this.ZoomSmall(key) }} style={{ width: width * 0.08, height: width * 0.08, borderWidth: 0.3, marginTop: height * 0.01, borderRadius: 5 }}><Image style={{ height: '100%', width: '100%' }} source={require('../pages/img/减.png')}></Image></TouchableOpacity>
                <TouchableOpacity onPress={() => { this.ZoomBig(key) }} style={{ width: width * 0.08, height: width * 0.08, borderWidth: 0.3, marginTop: height * 0.01, borderRadius: 5 }}><Image style={{ height: '100%', width: '100%' }} source={require('../pages/img/加.png')}></Image></TouchableOpacity>
                <TouchableOpacity onPress={() => { this.delete(key) }} style={{ width: width * 0.08, height: width * 0.08, borderWidth: 0.3, marginTop: height * 0.01, borderRadius: 5 }}><Image style={{ height: '100%', width: '100%' }} source={require('../pages/img/叉.png')}></Image></TouchableOpacity>
            </View> : null
            // 从state中取出pan
            const { pan, scale } = this.state;
            // 从pan里计算出偏移量

            const [translateX, translateY] = [pan[key].x, pan[key].y];
            const imageStyle = { transform: [{ translateX }, { translateY }, { scale: scale[key] },] };
            const iconStyle = { transform: [{ translateX }, { translateY: translateY }] };

            return (
                <View style={{ borderWidth: 0, height: 1 }}>
                    <Animated.View style={[{
                        width: width * 0.4,
                        height: height * 0.05,
                        marginTop: this.state.marginTop[key],
                        marginLeft: width * 0.3
                    }, iconStyle]} >{A}</Animated.View>
                    <View style={[this.state.showBorder[key] ? styles.container : styles.container1, imageStyle]}>
                        <Animated.Image  {...this._panResponder.panHandlers} style={{ width: width * 0.4, height: width * 0.4, }} resizeMode={this.state.imgData[key].id === 1 ? 'cover' : 'contain'} source={{ uri: this.state.imgData[key].img }} />

                    </View>

                </View>

            );
        }, this);
    }

    render() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            // 设置初始位置
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan[5].setOffset({
                    x: this.state.pan[5].x._value,
                    y: this.state.pan[5].y._value
                });
                this.state.pan[5].setValue({ x: 0, y: 0 });

            },
            // 使用拖拽的偏移量来定位
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan[5].x, dy: this.state.pan[5].y },
            ]),
            onPanResponderRelease: (e, { vx, vy }) => {

                this.state.pan[5].flattenOffset();

            }
        });

        const { pan, scale } = this.state;
   
        // 从pan里计算出偏移量
        const [translateX, translateY] = [pan.x, pan.y];
        const imageStyle = { transform: [{ translateX }, { translateY }, { scale: scale[5] },] };

        const { modalVisible4 } = this.state;
        return (
            <View style={{ width: width, height: height, alignItems: "center" }}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible4}
                    hardwareAccelerated={true}
                    onRequestClose={() => {
                        this.setModalVisible4(!modalVisible4); 
                    }}
                >
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.setModalVisible4(!modalVisible4), this.ShowBorder(true),this.setState({closeeye:true}) }} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <ImageBackground resizeMode={'stretch'} style={{ flex: 5, width: width * 0.9, height: height * 0.6, marginLeft: width * 0.05, marginTop: height * 0.15, }} imageStyle={{ width: '100%' }} borderRadius={10} source={{ uri: this.state.shoturi }}>
                        </ImageBackground>
                        <View style={{ backgroundColor: '#fff', width, flex: 1, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333', marginTop: height * 0.01 }}>价格：39 元</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', color: '#333' }}>预计3-4天制作完成</Text>
                            <View style={{ flex: 1, flexDirection: 'row', width: '90%', justifyContent: 'center', marginLeft: '5%', marginTop: height * 0.015, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: global.mainColor, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center', height: height * 0.05 }}
                                        onPress={() => this.insert_shopcart()}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>加入购物车</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: global.mainColor, borderTopRightRadius: 20, borderBottomRightRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center', height: height * 0.05 }}
                                        onPress={() => this.props.navigation.navigate('Zhifu', { price: 39, name: "定制物品", jieshao: '......', pic: [this.state.shoturi] })}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>立即购买</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>

                        </View>

                    </TouchableOpacity>

                </Modal>

                <View style={{ width: width, height: height * 0.65, }}>
                    <ImageBackground ref={viewRef} collapsable={false} source={{ uri: this.state.backImg }} resizeMode={'contain'} style={{ width: '100%', height: '100%', zIndex: 1, backgroundColor: '#5A849F' }}>
                        {this.ImageComponent()}
                        <TouchableOpacity onPress={()=>{this.setState({eye:!this.state.eye}),this.EyeControl()}} style={{ width: width * 0.07, height: width * 0.07, marginLeft: width * 0.92, marginTop: height * 0.6 }}>
                            <Image style={ this.state.closeeye?{width: '100%', height: '100%', }:null} source={{uri:this.state.eye ? "http://47.100.78.254:3000/public/images/openEye.png" : "http://47.100.78.254:3000/public/images/closeEye.png"}}></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={{ width: width, height: height * 0.35, backgroundColor: "#fff", borderTopRightRadius: 20, elevation: 20, position: "absolute", bottom: 0, borderTopLeftRadius: 20 }}>
                    <ScrollableTabView
                        initialPage={0}
                        locked={true}
                        renderTabBar={() => <SegmentTabBar />}
                        tabBarActiveTextColor='#FF0000'>
                        <View tabLabel="推荐样式" style={{ width: width }}>
                            <FlatList
                                data={data}
                                renderItem={this._renderItem}
                                // numColumns={3}
                                horizontal={true}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                handleMethod={({ viewableItems }) => this.handleViewableItemsChanged(viewableItems)}
                            />

                        </View>
                        <View tabLabel="自定义" style={{ width: width * 0.8, marginLeft: width * 0.1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this._openPicker() }} style={{ width: width * 0.3, height: width * 0.38, marginTop: height * 0.0 }}>
                                <Image style={{ width: '100%', height: '80%' }} source={{ uri: 'http://47.100.78.254:3000/public/images/addimg.png' }}>

                                </Image>
                                <Text style={{ width: '100%', height: '20%', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, color: '#333' }}>
                                    上传图片
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('drawpic') }} style={{ width: width * 0.3, height: width * 0.38, marginTop: height * 0.0 }}>
                                <Image style={{ width: '100%', height: '80%' }} source={require('../pages/img/drawimg.png')}>

                                </Image>
                                <Text style={{ width: '100%', height: '20%', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, color: '#333' }}>
                                    绘制图片
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        left: width * 0.3,
        top: height * 0.25,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderColor: '#333'

    },
    container1: {
        position: 'absolute',
        left: width * 0.3,
        top: height * 0.25,
    },
    icon: {

        width: width * 0.4,
        height: height * 0.05,
        marginTop: height * 0.2,
        marginLeft: width * 0.3
    }
})
