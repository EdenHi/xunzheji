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

const data = [{ key: 0 },
{
    key: 1
},
{
    key: 2
}, {
    key: 3
}, {
    key: 4
}, {
    key: 5
}, {
    key: 6
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
    DeviceEventEmitter
} from 'react-native';


export default class Clothe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic1: false,
            pic2: false,
            pic3: false,
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1),
            rotate: new Animated.Value(0),
            shoturi: '',
            modalVisible4: false,
            CustomPic: '',
            drawPic: '',
            backImg: props.index
        };
    }


    setModalVisible4 = (visible) => {
        this.setState({ modalVisible4: visible });
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            // 设置初始位置
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({
                    x: this.state.pan.x._value,
                    y: this.state.pan.y._value
                });
                this.state.pan.setValue({ x: 0, y: 0 });
                Animated.spring(this.state.scale, {
                    toValue: 1.3,
                    friction: 3
                }
                ).start();
                Animated.timing(this.state.rotate, {
                    toValue: 25,
                    duration: 300
                }).start();
            },
            // 使用拖拽的偏移量来定位
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y },
            ]),
            onPanResponderRelease: (e, { vx, vy }) => {
                this.state.pan.flattenOffset();
                Animated.spring(
                    this.state.scale,
                    { toValue: 1, friction: 3 }
                ).start();
                Animated.timing(this.state.rotate, {
                    toValue: 0,
                    duration: 300
                }).start();
            }
        });
    }
    //打开本地图册
    _openPicker() {

        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            multiple: true,
            maxFiles: 9,
        }).then(image => {
            console.log(image[0]);
            this.setState({ CustomPic: image[0].path })
        });
    }
    CustomShow() {
        if (this.state.pic2 === false) {
            this.setState({ pic2: !this.state.pic2 })
        } else {
            this.setState({ CustomPic: '' })
        }
    }
    componentDidMount() {
        this.listener = DeviceEventEmitter.addListener('Draw', (shoturi) => {

            console.log(shoturi.drawpic);
            this.setState({ drawPic: shoturi.drawpic })
            console.log('666', this.state.drawPic, this.state.pic3);
            //  use param do something
        });
    }
    componentWillUnmount() {
        this.listener.remove();
    }
    recomment() {
        if (this.state.pic1 === false) {
            this.setState({ pic1: true })
        } else {
            this.setState({})
        }
    }
    _renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.setState({ pic1: !this.state.pic1 })} style={{ width: width * 0.25, height: width * 0.25, margin: width * 0.04 }}><Image style={{ width: "100%", height: "100%" }} source={require("../pages/img/T.jpg")}></Image></TouchableOpacity>
    );

    Sure() {
        captureRef(viewRef, {
            format: "jpg",
            quality: 0.8
        }).then(
            uri => {
                console.log("Image saved to", uri),
                    this.setState({ shoturi: uri })
            },
            error => console.error("Oops, snapshot failed", error)
        ), this.setModalVisible4(!this.state.modalVisible4)
    }
    render() {

        // 从state中取出pan
        const { pan, scale } = this.state;
        // 从pan里计算出偏移量
        const [translateX, translateY] = [pan.x, pan.y];
        // 计算旋转
        const rotate = this.state.rotate.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '00deg']
        });
        // 设置transform为偏移量
        const imageStyle = { transform: [{ translateX }, { translateY }, { scale }, { rotate }] };
        const ShowPic1 = this.state.pic1 ? <Animated.View style={[styles.container, imageStyle]} {...this._panResponder.panHandlers}>
            <Image style={{ width: width * 0.4, height: width * 0.4 }} source={require('../pages/img/T.jpg')} />
        </Animated.View> : null;
        const CustomPic = this.state.pic2 ? <Animated.View style={[styles.container, imageStyle]} {...this._panResponder.panHandlers}>
            <Image style={{ width: width * 0.4, height: width * 0.4 }} resizeMode={'contain'} source={{ uri: this.state.CustomPic }} />
        </Animated.View> : null;
        const DrawPic = this.state.pic3 ? <Animated.View style={[styles.container, imageStyle]} {...this._panResponder.panHandlers}>
            <Image style={{ width: width * 0.4, height: width * 0.4, }} resizeMode={'cover'} source={{ uri: this.state.drawPic }} />
        </Animated.View> : null;
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
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.setModalVisible4(!modalVisible4) }} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
                        <ImageBackground resizeMode={'stretch'} style={{ flex: 5, width: '80%', height: height * 0.6, marginLeft: '10%', marginTop: height * 0.15,  }} imageStyle={{ width: '100%' }} borderRadius={10} source={{ uri: this.state.shoturi }}>
                        </ImageBackground>
                        <View style={{ backgroundColor: '#7cc0c0', width, flex: 1, }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333', marginTop: height * 0.01 }}>价格：39 元</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', color: '#333' }}>预计3-4天制作完成</Text>
                            <View style={{flex: 1, flexDirection: 'row', width: '90%', justifyContent: 'center', marginLeft: '5%', marginTop: height * 0.015, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#7cc0c0', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center', height: height * 0.05 }}
                                        onPress={() => this.insert_shopcart()}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>加入购物车</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#7cc0c0', borderTopRightRadius: 20, borderBottomRightRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center', height: height * 0.05 }}
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
                        {ShowPic1}
                        {CustomPic}
                        {DrawPic}
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
                                numColumns={3}
                                showsVerticalScrollIndicator={false}
                            />

                        </View>
                        <View tabLabel="自定义" style={{ width: width * 0.8, marginLeft: width * 0.1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this._openPicker(), this.CustomShow() }} style={{  width: width * 0.3, height: width * 0.38, marginTop: height * 0.05 }}>
                                <Image style={{ width: '100%', height: '80%' }} source={{ uri: 'http://8.142.11.85:3000/public/images/addimg.png' }}>

                                </Image>
                                <Text style={{ width: '100%', height: '20%', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, color: '#333' }}>
                                    上传图片
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('drawpic'),this.setState({pic3:true}) }} style={{  width: width * 0.3, height: width * 0.38, marginTop: height * 0.05 }}>
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
        left: 170,
        top: 200,
    }
})
