import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Image,
    PanResponder,
    Animated,
    Dimensions,
    TouchableOpacity,
    Text,
    Modal,
} from 'react-native';
import { View } from 'react-native-animatable';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
import { ImageBackground } from 'react-native';
import { captureRef } from "react-native-view-shot";
import { createRef } from 'react';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window');

class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic1: false,
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1),
            rotate: new Animated.Value(0),
            shoturi: '',
            modalVisible4: false,
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

    render() {

        const viewRef = createRef();
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
            <Image style={{ width: width * 0.4, height: width * 0.4 }} source={require('../img/T.jpg')} />
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
                        <ImageBackground resizeMode={'stretch'} style={{ flex: 5, width: '80%', height: height * 0.6, marginLeft: '10%', marginTop: height * 0.15, borderWidth: 0, }} imageStyle={{ width: '100%' }} borderRadius={10} source={{ uri: this.state.shoturi }}>

                        </ImageBackground>
                        <View style={{ backgroundColor: '#fff', width, flex: 1, marginBottom: height * 0 }}>
                            <View style={{ borderWidth: 0, flex: 1, flexDirection: 'row', width: '90%', marginLeft: '5%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#7cc0c0', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center' }}
                                        onPress={() => this.insert_shopcart()}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>加入购物车</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#7cc0c0', borderTopRightRadius: 20, borderBottomRightRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center' }}
                                        onPress={() => this.props.navigation.navigate('Zhifu', this.state.shops)}>
                                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>立即购买</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>

                </Modal>
                <View style={{ flexDirection: "row", backgroundColor: "#fff", width: width, alignItems: "center", height: height * 0.07, justifyContent: 'space-around' }}>
                    <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#333333" }} name="left" size={20} color="#000000" />
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333", width: width * 0.1, marginHorizontal: width * 0.3 }}>定制</Text>

                    <AntDesign onPress={() => {
                        captureRef(viewRef, {
                            format: "jpg",
                            quality: 0.8
                        }).then(
                            uri => {
                                console.log("Image saved to", uri),
                                    this.setState({ shoturi: uri })
                            },
                            error => console.error("Oops, snapshot failed", error)
                        ), this.setModalVisible4(!modalVisible4)
                    }} style={{ color: "#333333" }} name="check" size={20} color="#000000" />
                </View>
                <View style={{ width: width, height: height * 0.65, backgroundColor: "#fff" }} ref={viewRef} collapsable={false}>
                    <ImageBackground source={require('../img/134880490.png')} style={{ width: '100%', height: '100%' }}>
                        {ShowPic1}
                    </ImageBackground>




                    {/* <Animated.View style={[styles.container, imageStyle]} {...this._panResponder.panHandlers}>
                        <Image style={{ width: 50, height: 50 }} source={require('../img/T.jpg')} />
                    </Animated.View> */}
                </View>

                <View style={{ width: width, height: height * 0.35, backgroundColor: "#fff", borderTopRightRadius: 20, elevation: 20, position: "absolute", bottom: 0, borderTopLeftRadius: 20 }}>
                    {/* <LinearGradient style={{ width: width, height: "100%", alignItems: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20, elevation: 20, }} colors={["#7cc0bf", "#fff"]} >

                    </LinearGradient> */}
                    <ScrollableTabView
                        initialPage={0}

                        locked={true}
                        renderTabBar={() => <ScrollableTabBar />}
                        tabBarActiveTextColor='#FF0000'>
                        <View tabLabel="推荐样式" style={{ borderWidth: 1, width: width }}>
                            <View style={{ width: "100%", height: "50%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                <TouchableOpacity onPress={() => this.setState({ pic1: !this.state.pic1 })} style={{ width: width * 0.25, height: width * 0.25 }}><Image style={{ width: "100%", height: "100%" }} source={require("../img/T.jpg")}></Image></TouchableOpacity>

                                <TouchableOpacity style={{ width: width * 0.25, height: width * 0.25 }}><Image style={{ width: "100%", height: "100%" }} source={require("../img/T.jpg")}></Image></TouchableOpacity>
                            </View>
                            <View style={{ width: "100%", height: "50%", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                <TouchableOpacity style={{ width: width * 0.25, height: width * 0.25 }}><Image style={{ width: "100%", height: "100%" }} source={require("../img/T.jpg")}></Image></TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 0.25, height: width * 0.25 }}><Image style={{ width: "100%", height: "100%" }} source={require("../img/T.jpg")}></Image></TouchableOpacity>
                                <TouchableOpacity style={{ width: width * 0.25, height: width * 0.25 }}><Image style={{ width: "100%", height: "100%" }} source={require("../img/T.jpg")}></Image></TouchableOpacity>
                            </View>
                        </View>
                        <View tabLabel="自定义" style={{ borderWidth: 1, width: width }}>

                        </View>

                    </ScrollableTabView>
                </View>

            </View>
        )
    }
}
export default Draggable;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 170,
        top: 200,
    }
});