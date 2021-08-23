// import React, {
//     Component,
// } from 'react';
// import {
//     StyleSheet,
//     Image,
//     PanResponder,
//     Animated,
//     Dimensions,
//     TouchableOpacity,
//     Text,
//     Modal,
//     FlatList,
//     DeviceEventEmitter
// } from 'react-native';
// import { View } from 'react-native-animatable';
// import AntDesign from "react-native-vector-icons/AntDesign"
// import LinearGradient from 'react-native-linear-gradient'
// import { ImageBackground } from 'react-native';
// import { captureRef } from "react-native-view-shot";
// import { createRef } from 'react';
// import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
// import ImagePicker from 'react-native-image-crop-picker';

// const { width, height } = Dimensions.get('window');
// const data = [{ key: 0 },
// {
//     key: 1
// },
// {
//     key: 2
// }, {
//     key: 3
// }, {
//     key: 4
// }, {
//     key: 5
// }, {
//     key: 6
// },
// ]
// class Draggable extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pic1: false,
//             pic2: false,
//             pic3: false,
//             pan: new Animated.ValueXY(),
//             scale: new Animated.Value(1),
//             rotate: new Animated.Value(0),
//             shoturi: '',
//             modalVisible4: false,
//             CustomPic: '',
//             drawPic: '',
//         };
//     }
//     setModalVisible4 = (visible) => {
//         this.setState({ modalVisible4: visible });
//     }
//     componentWillMount() {
//         this._panResponder = PanResponder.create({
//             onMoveShouldSetResponderCapture: () => true,
//             onMoveShouldSetPanResponderCapture: () => true,
//             // 设置初始位置
//             onPanResponderGrant: (e, gestureState) => {
//                 this.state.pan.setOffset({
//                     x: this.state.pan.x._value,
//                     y: this.state.pan.y._value
//                 });
//                 this.state.pan.setValue({ x: 0, y: 0 });
//                 Animated.spring(this.state.scale, {
//                     toValue: 1.3,
//                     friction: 3
//                 }
//                 ).start();
//                 Animated.timing(this.state.rotate, {
//                     toValue: 25,
//                     duration: 300
//                 }).start();
//             },
//             // 使用拖拽的偏移量来定位
//             onPanResponderMove: Animated.event([
//                 null, { dx: this.state.pan.x, dy: this.state.pan.y },
//             ]),
//             onPanResponderRelease: (e, { vx, vy }) => {
//                 this.state.pan.flattenOffset();
//                 Animated.spring(
//                     this.state.scale,
//                     { toValue: 1, friction: 3 }
//                 ).start();
//                 Animated.timing(this.state.rotate, {
//                     toValue: 0,
//                     duration: 300
//                 }).start();
//             }
//         });
//     }
//     //打开本地图册
//     _openPicker() {

//         ImagePicker.openPicker({
//             width: 400,
//             height: 400,
//             cropping: true,
//             multiple: true,
//             maxFiles: 9,
//         }).then(image => {
//             console.log(image[0]);
//             this.setState({ CustomPic: image[0].path })
//         });
//     }
//     CustomShow() {
//         if (this.state.pic2 === false) {
//             this.setState({ pic2: !this.state.pic2 })
//         } else {
//             this.setState({ CustomPic: '' })
//         }
//     }
//     componentDidMount() {
//         this.listener = DeviceEventEmitter.addListener('Draw', (shoturi) => {

//             console.log(shoturi.drawpic);
//             this.setState({ drawPic: shoturi.drawpic })
//             console.log('666', this.state.drawPic, this.state.pic3);
//             //  use param do something
//         });
//     }
//     componentWillUnmount() {
//         this.listener.remove();
//     }
//     recomment(){
//         if(this.state.pic1===false){
//             this.setState({pic1:true})
//         }else{
//             this.setState({})
//         }
//     }
//     _renderItem = ({ item }) => (
//         <TouchableOpacity onPress={() => this.setState({ pic1: !this.state.pic1 })} style={{ width: width * 0.25, height: width * 0.25,margin:width*0.04 }}><Image style={{ width: "100%", height: "100%" }} source={require("../img/T.jpg")}></Image></TouchableOpacity>

//     );
//     render() {

//         const viewRef = createRef();
//         // 从state中取出pan
//         const { pan, scale } = this.state;
//         // 从pan里计算出偏移量
//         const [translateX, translateY] = [pan.x, pan.y];
//         // 计算旋转
//         const rotate = this.state.rotate.interpolate({
//             inputRange: [0, 100],
//             outputRange: ['0deg', '00deg']
//         });
//         // 设置transform为偏移量
//         const imageStyle = { transform: [{ translateX }, { translateY }, { scale }, { rotate }] };
//         const ShowPic1 = this.state.pic1 ? <Animated.View style={[styles.container, imageStyle]} {...this._panResponder.panHandlers}>
//             <Image style={{ width: width * 0.4, height: width * 0.4 }} source={require('../img/T.jpg')} />
//         </Animated.View> : null;
//         const CustomPic = this.state.pic2 ? <Animated.View style={[styles.container, imageStyle]} {...this._panResponder.panHandlers}>
//             <Image style={{ width: width * 0.4, height: width * 0.4 }} resizeMode={'contain'} source={{ uri: this.state.CustomPic }} />
//         </Animated.View> : null;
//         const DrawPic = this.state.pic3 ? <Animated.View style={[styles.container, imageStyle]} {...this._panResponder.panHandlers}>
//             <Image style={{ width: width * 0.4, height: width * 0.4, borderWidth: 10 }} resizeMode={'cover'} source={{ uri: this.state.drawPic }} />
//         </Animated.View> : null;
//         const { modalVisible4 } = this.state;
//         return (

//             <View style={{ width: width, height: height, alignItems: "center" }}>
//                 <Modal
//                     animationType='fade'
//                     transparent={true}
//                     visible={modalVisible4}
//                     hardwareAccelerated={true}
//                     onRequestClose={() => {
//                         this.setModalVisible4(!modalVisible4);
//                     }}
//                 >
//                     <TouchableOpacity activeOpacity={1} onPress={() => { this.setModalVisible4(!modalVisible4) }} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
//                         <ImageBackground resizeMode={'stretch'} style={{ flex: 5, width: '80%', height: height * 0.6, marginLeft: '10%', marginTop: height * 0.15, borderWidth: 0, }} imageStyle={{ width: '100%' }} borderRadius={10} source={{ uri: this.state.shoturi }}>

//                         </ImageBackground>
//                         <View style={{ backgroundColor: '#fff', width, flex: 1, }}>
//                             <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#333', marginTop: height * 0.01 }}>价格：39 元</Text>
//                             <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', color: '#333' }}>预计3-4天制作完成</Text>
//                             <View style={{ borderWidth: 0, flex: 1, flexDirection: 'row', width: '90%', justifyContent: 'center', marginLeft: '5%', marginTop: height * 0.015, borderWidth: 0 }}>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#7cc0c0', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center', height: height * 0.05 }}
//                                         onPress={() => this.insert_shopcart()}>
//                                         <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>加入购物车</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#7cc0c0', borderTopRightRadius: 20, borderBottomRightRadius: 20, marginTop: 5, marginBottom: 5, width: 100, justifyContent: 'center', alignItems: 'center', height: height * 0.05 }}
//                                         onPress={() => this.props.navigation.navigate('Zhifu', { price: 39, name: "定制物品", jieshao: '......', pic: [this.state.shoturi] })}>
//                                         <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', padding: 5 }}>立即购买</Text>
//                                     </TouchableOpacity>
//                                 </View>

//                             </View>

//                         </View>

//                     </TouchableOpacity>

//                 </Modal>
//                 <View style={{ flexDirection: "row", backgroundColor: "#fff", width: width, alignItems: "center", height: height * 0.07, justifyContent: 'space-around' }}>
//                     <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#333333" }} name="left" size={20} color="#000000" />
//                     <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333", width: width * 0.1, marginHorizontal: width * 0.3 }}>定制</Text>

//                     <AntDesign onPress={() => {
//                         captureRef(viewRef, {
//                             format: "jpg",
//                             quality: 0.8
//                         }).then(
//                             uri => {
//                                 console.log("Image saved to", uri),
//                                     this.setState({ shoturi: uri })
//                             },
//                             error => console.error("Oops, snapshot failed", error)
//                         ), this.setModalVisible4(!modalVisible4)
//                     }} style={{ color: "#333333" }} name="check" size={20} color="#000000" />
//                 </View>
//                 <View style={{ width: width, height: height * 0.65, backgroundColor: "#fff" }} ref={viewRef} collapsable={false}>
//                     <ImageBackground source={require('../img/134880490.png')} style={{ width: '100%', height: '100%',zIndex:1 }}>
//                         <TouchableOpacity activeOpacity={1} style={{borderWidth:1,height:height*0.05,width:width*0.1,marginLeft:width*0.875}}></TouchableOpacity>
//                         {ShowPic1}
//                         {CustomPic}
//                         {DrawPic}
//                     </ImageBackground>





//                 </View>

//                 <View style={{ width: width, height: height * 0.35, backgroundColor: "#fff", borderTopRightRadius: 20, elevation: 20, position: "absolute", bottom: 0, borderTopLeftRadius: 20 }}>

{/* <ScrollableTabView
                        initialPage={0}

                        locked={true}
                        renderTabBar={() => <ScrollableTabBar />}
                        tabBarActiveTextColor='#FF0000'>
                        <View tabLabel="推荐样式" style={{ borderWidth: 1, width: width }}>
                            <FlatList
                            data={data}
                            renderItem={this._renderItem}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            />
                            
                        </View>
                        <View tabLabel="自定义" style={{ width: width * 0.8, marginLeft: width * 0.1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this._openPicker(), this.CustomShow() }} style={{ borderWidth: 0, width: width * 0.3, height: width * 0.38, marginTop: height * 0.05 }}>
                                <Image style={{ width: '100%', height: '80%' }} source={{ uri: 'http://8.142.11.85:3000/public/images/addimg.png' }}>

                                </Image>
                                <Text style={{ width: '100%', height: '20%', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, color: '#333' }}>
                                    上传图片
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('drawpic') }} style={{ borderWidth: 0, width: width * 0.3, height: width * 0.38, marginTop: height * 0.05 }}>
                                <Image style={{ width: '100%', height: '80%' }} source={require('../img/drawimg.png')}>

                                </Image>
                                <Text style={{ width: '100%', height: '20%', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, color: '#333' }}>
                                    绘制图片
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}
export default Draggable;
const styles = StyleSheet.create({
    
});
 */}


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    Modal,
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            showModal: false,
            course: "语文",

        });
    }
    componentWillMount() {

    }
    selCourse(course) {
        this.setState({
            showModal: false,
            course: course,
        });
    }
    sel(item) {
        switch (item) {
            case '语文':
                return '语文'
                break;
                case '英语':
                    return '英语'
                break; 
                case '数学':
                    return '数学'
                break;
                case '物理':
                    return '物理'
                break;
                default:'语文'
                break;
        }
    }
    render() {
        const V=<Text>{this.sel(this.state.course)}</Text>
        return (
            <View style={styles.container1}>
                <View style={styles.headStyle}>
                    <Text style={styles.headText} onPress={() => { this.setState({ showModal: true }) }}>
                        {this.state.course}
                    </Text>
                    <TouchableOpacity style={{ marginLeft: 10 }}
                        onPress={() => { this.setState({ showModal: true }) }}
                        hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
                        <Text>L</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    visible={this.state.showModal}
                    transparent={true}
                    animationType='fade'
                    onRequestClose={() => { }}
                    style={{ flex: 1 }}
                    ref="modal"  >
                    <TouchableWithoutFeedback onPress={() => { this.setState({ showModal: false }) }} >
                        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}

                        >
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={{
                                    backgroundColor: '#fff', width: width,
                                    justifyContent: 'center',

                                }}

                                >
                                    <View style={styles.headStyle}>
                                        <Text style={styles.headText} onPress={() => { this.setState({ showModal: false }) }}>
                                            {this.state.course}
                                        </Text>
                                        <TouchableOpacity style={{ marginLeft: 10 }}
                                            onPress={() => { this.setState({ showModal: false }) }}
                                            hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
                                            <Image style={styles.arrStyle} source={{ uri: 'arr_up' }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.courseWrap}>
                                        <CourseItem course="语文" onPress={() => { this.selCourse('语文') }} />
                                        <CourseItem course="数学" onPress={() => { this.selCourse('数学') }} />
                                        <CourseItem course="英语" onPress={() => { this.selCourse('英语') }} />
                                    </View>
                                    <View style={[styles.courseWrap, { marginBottom: 10 }]}>
                                        <CourseItem course="物理" onPress={() => { this.selCourse('物理') }} />
                                        <CourseItem course="化学" onPress={() => { this.selCourse('化学') }} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                {V}
            </View>
        );
    }
}
class CourseItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.boxView} onPress={this.props.onPress}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.props.course}</Text>

                </View>
            </TouchableOpacity>
        )
    }
}
var cols = 3;
var boxW = 70;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;
const styles = StyleSheet.create({
    arrStyle: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
    boxView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: boxW,
        height: boxW,
        marginLeft: vMargin,
        marginTop: hMargin,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        borderRadius: 5,
    },
    courseWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0,
        borderColor: 'orange',
    },
    selCourseText: {
        padding: 8,
        fontSize: 18,
    },
    blackText: {
        color: 'black',
        fontSize: 16,
    },
    arrowStyle: {
        width: 20,
        height: 20,
    },
    textWrapView: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    headText: {
        fontSize: 22,
    },
    headStyle: {
        flexDirection: 'row',
        width: width,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        paddingTop: 15,
        paddingBottom: 15,
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    container: {
        position: 'absolute',
        left: 170,
        top: 200,
    }

})
