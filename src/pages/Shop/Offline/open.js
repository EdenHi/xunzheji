import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import axios from 'axios'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Animated,
    Dimensions
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import Images from './index';
const { width, height } = Dimensions.get("window")
const DUMMY_TEXT = "Lorem ipsum dolor sit amet,consectetur adipisicing elit.\
Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo \
reprehenderit optio amet ab temporibus asperiores quasi cupiditate. \
Voluptatum ducimus voluptates voluptas?"


export default class open extends React.Component {
    static contextType = NavigationContext;
    state = {
        activeImage: null,
        activeIndex: null,
        size: new Animated.ValueXY(),
        position: new Animated.ValueXY(),
        animation: new Animated.Value(0),
        daliheng: '',
        shaozhiyan: [],
        xilengyinshe: [],
        zhufutongyi: [],
        wangxingji: [],
        zhangxiaoquan: [],
    }

    componentWillMount() {
        this._gridImages = {};
    }

    handleOpeningImage = (idx) => {
        this._gridImages[idx].measure((x, y, width, height, pageX, pageY) => {
            this._x = pageX
            this._y = pageY
            this._width = width
            this._height = height

            this.state.position.setValue({
                x: pageX,
                y: pageY
            })

            this.state.size.setValue({
                x: width,
                y: height

            })

            this.setState({
                activeImage: Images[idx],
                activeIndex: idx
            }, () => {
                this._viewImage.measure((tX, tY, tWidth, tHeight, tPageX, tPageY) => {
                    Animated.parallel([
                        Animated.spring(this.state.position.x, {
                            toValue: tPageX
                        }),
                        Animated.spring(this.state.position.y, {
                            toValue: 0
                        }),
                        Animated.spring(this.state.size.x, {
                            toValue: tWidth
                        }),
                        Animated.spring(this.state.size.y, {
                            toValue: tHeight
                        }),
                        Animated.spring(this.state.animation, {
                            toValue: 1
                        })
                    ]).start()
                })
            })
        })
    }

    handleClose = () => {
        Animated.parallel([
            Animated.timing(this.state.position.x, {
                toValue: this._x,
                duration: 250
            }),
            Animated.timing(this.state.position.y, {
                toValue: this._y,
                duration: 250
            }),
            Animated.timing(this.state.size.x, {
                toValue: this._width,
                duration: 250
            }),
            Animated.timing(this.state.size.y, {
                toValue: this._height,
                duration: 250
            }),
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 250
            })
        ]).start(() => {
            this.setState({
                activeImage: null
            })
        })
    }

    renderFocusableImages = () => {

        const activeIndexStyle = {
            opacity: this.state.activeImage ? 0 : 1
        }

        return (
            <View style={styles.grid}>
                {
                    Images.map((src, idx) => {

                        const activeStyle = idx === this.state.activeIndex ? activeIndexStyle : undefined
                        return (
                            <TouchableOpacity
                            activeOpacity={1}
                                style={{ flexDirection: "column-reverse" ,}}
                                key={idx}
                                onPress={() => this.handleOpeningImage(idx)}
                            >
                                <Image
                                    source={{ uri: src.uri }}
                                    resizeMode="cover"
                                    style={[styles.photoStyle, activeStyle]}
                                    ref={image => this._gridImages[idx] = image}
                                />
                                <View style={{ width: width * 0.45, height: width * 0.2, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: "rgba(255,255,255,0.8)", position: "absolute", marginLeft: width * 0.033, }}>
                                    
                                    <View style={{flexDirection:"row",alignItems:"center",marginTop:"2%"}}>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: width * 0.01,color:"#333" }}>{src.txt}</Text>
                                    <View style={{width:40,height:20,elevation:5, backgroundColor: global.mainColor, borderRadius:15, marginHorizontal: width * 0.01, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 12, color: "#fff" }}>{src.txt2}</Text>
                                    </View>
                                    </View>
                                    <Text style={{ fontSize: 13, marginHorizontal: width * 0.01, height: 50, marginTop: 5 ,color:"#666"}}>{src.txt1}</Text>
                                    {/* <View style={{ width: 50, height: 20, backgroundColor: global.mainColor, borderRadius: 5, marginHorizontal: width * 0.01, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 13, color: "#fff" }}>{src.txt2}</Text>
                                    </View> */}
                                </View>
                                {/* 外面图片的大小 */}
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    renderImageDummyData = () => {
        // console.log('activeIndex',this.state.daliheng);
        const animatedContentTranslate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [500, 0]
        })

        const animatedContentStyle = {
            opacity: this.state.animation,
            transform: [
                {
                    translateY: animatedContentTranslate
                }
            ]
        }
        return (
            <Animated.View style={[styles.content, animatedContentStyle]}>
                <View style={styles.headingStyle}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {this.state.activeIndex === 0 ? this.state.daliheng.map((v, k) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginTop: 10,elevation:5,width:width*0.9,marginLeft:width*0.05,height:height*0.18,alignItems:"center",marginBottom:8 }}>
                                    <Image source={{ uri: v.photos[0].url }}  style={{ height: 110, width: 110, margin: 20, borderRadius: 10 }} />
                                    <View style={{width:"50%"}}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' ,color:"#333"}}>{v.name}</Text>
                                        <Text style={{color:"#333",fontSize:13}}>{v.cityname + v.adname + v.address}</Text>
                                        <Text style={{color:"#333",fontSize:13}}>电话：<Text style={{ fontSize: 13,color:"#333" }}>{v.tel.length > 0 ? v.tel : "暂无"}</Text></Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: width * 0.9 - 170, alignItems: 'center' }}>
                                            <Feather
                                                name='map-pin'
                                                color="#7cc0c0"
                                                size={15}>
                                                <Text style={{ marginLeft: 10, fontSize: 15,color:"#333" }}>{' ' + v.distance / 1000 + "km"}</Text>
                                            </Feather>
                                            <TouchableOpacity   activeOpacity={1} style={{ backgroundColor: global.mainColor, borderRadius: 15,elevation:5,marginLeft:5}} activeOpacity={1} onPress={() => this.context.navigate('go_map', { to: v.location })}>
                                                <Text style={{ fontSize: 15, paddingHorizontal: 20,color:"#333", paddingVertical: 5, color: '#fff' }}>导航</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : null}
                        {this.state.activeIndex === 1 ? this.state.shaozhiyan.map((v, k) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginTop: 10,elevation:5,width:width*0.9,marginLeft:width*0.05,height:height*0.18,alignItems:"center",marginBottom:8 }}>
                                    <Image source={v.photos.length > 0 ? { uri: v.photos[0].url } : { uri: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b90e7bec54e736d13303db2498504fc2d562698d.jpg' }} style={{ height: 110, width: 110, margin: 20, borderRadius: 10 }} />
                                    <View style={{ width:"50%"}}>
                                         <Text style={{ fontSize: 15, fontWeight: 'bold' ,color:"#333"}}>{v.name}</Text>
                                          <Text style={{color:"#333",fontSize:13}}>{v.cityname + v.adname + v.address}</Text>
                                         <Text style={{color:"#333",fontSize:13}}>电话：<Text style={{ fontSize: 13,color:"#333" }}>{v.tel.length > 0 ? v.tel : "暂无"}</Text></Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: width * 0.9 - 170, alignItems: 'center' }}>
                                            <Feather
                                                name='map-pin'
                                                color="#7cc0c0"
                                                size={15}>
                                                <Text style={{ marginLeft: 10, fontSize: 15,color:"#333" }}>{' ' + v.distance / 1000 + "km"}</Text>
                                            </Feather>

                                           <TouchableOpacity   activeOpacity={1} style={{ backgroundColor: global.mainColor, borderRadius: 15,elevation:5,marginLeft:5}} activeOpacity={1} onPress={() => this.context.navigate('go_map', { to: v.location })}>
                                                <Text style={{ fontSize: 15, paddingHorizontal: 20,color:"#333", paddingVertical: 5, color: '#fff' }}>导航</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : null}
                        {this.state.activeIndex === 2 ? this.state.xilengyinshe.map((v, k) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginTop: 10,elevation:5,width:width*0.9,marginLeft:width*0.05,height:height*0.18,alignItems:"center",marginBottom:8 }}>
                                    <Image source={v.photos.length > 0 ? { uri: v.photos[0].url } : { uri: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b90e7bec54e736d13303db2498504fc2d562698d.jpg' }} style={{ height: 110, width: 110, margin: 20, borderRadius: 10 }} />
                                    <View style={{ width:"50%" }}>
                                         <Text style={{ fontSize: 15, fontWeight: 'bold' ,color:"#333"}}>{v.name}</Text>
                                          <Text style={{color:"#333",fontSize:13}}>{v.cityname + v.adname + v.address}</Text>
                                         <Text style={{color:"#333"}}>电话：<Text style={{ fontSize: 13,color:"#333" }}>{v.tel.length > 0 ? v.tel : "暂无"}</Text></Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: width * 0.9 - 170, alignItems: 'center' }}>
                                            <Feather
                                                name='map-pin'
                                                color="#7cc0c0"
                                                size={15}>
                                                <Text style={{ marginLeft: 10, fontSize: 15,color:"#333" }}>{' ' + v.distance / 1000 + "km"}</Text>
                                            </Feather>
                                            <TouchableOpacity   activeOpacity={1} style={{ backgroundColor: global.mainColor, borderRadius: 15,elevation:5,marginLeft:5}} activeOpacity={1} onPress={() => this.context.navigate('go_map', { to: v.location })}>
                                                <Text style={{ fontSize: 15, paddingHorizontal: 20,color:"#333", paddingVertical: 5, color: '#fff' }}>导航</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : null}
                        {this.state.activeIndex === 3 ? this.state.zhufutongyi.map((v, k) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginTop: 10,elevation:5,width:width*0.9,marginLeft:width*0.05,height:height*0.18,alignItems:"center",marginBottom:8 }}>
                                    <Image source={v.photos.length > 0 ? { uri: v.photos[0].url } : { uri: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b90e7bec54e736d13303db2498504fc2d562698d.jpg' }} style={{ height: 110, width: 110, margin: 20, borderRadius: 10 }} />
                                    <View style={{width:"50%" }}>
                                         <Text style={{ fontSize: 15, fontWeight: 'bold' ,color:"#333"}}>{v.name}</Text>
                                        <Text style={{ width: width * 0.9 - 170 ,color:"#333"}} numberOfLines={5}>{v.cityname + v.adname + v.address}</Text>
                                        <Text style={{color:"#333"}}>电话：<Text style={{ fontSize: 16,color:"#333"}}>{v.tel.length > 0 ? v.tel : "暂无"}</Text></Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: width * 0.9 - 170, alignItems: 'center' }}>
                                            <Feather
                                                name='map-pin'
                                                color="#7cc0c0"
                                                size={15}>
                                                <Text style={{ marginLeft: 10, fontSize: 15,color:"#333" }}>{' ' + v.distance / 1000 + "km"}</Text>
                                            </Feather>
                                            <TouchableOpacity   activeOpacity={1} style={{ backgroundColor: global.mainColor, borderRadius: 15,elevation:5,marginLeft:5}} activeOpacity={1} onPress={() => this.context.navigate('go_map', { to: v.location })}>
                                                <Text style={{ fontSize: 15, paddingHorizontal: 20,color:"#333", paddingVertical: 5, color: '#fff' }}>导航</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : null}
                        {this.state.activeIndex === 4 ? this.state.wangxingji.map((v, k) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginTop: 10,elevation:5,width:width*0.9,marginLeft:width*0.05,height:height*0.18,alignItems:"center",marginBottom:8 }}>
                                    <Image source={v.photos.length > 0 ? { uri: v.photos[0].url } : { uri: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b90e7bec54e736d13303db2498504fc2d562698d.jpg' }} style={{ height: 110, width: 110, margin: 20, borderRadius: 10 }} />
                                    <View style={{width:"50%" }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' ,color:"#333"}}>{v.name}</Text>
                                          <Text style={{color:"#333",fontSize:13}}>{v.cityname + v.adname + v.address}</Text>
                                        <Text style={{ width: width * 0.9 - 170,color:"#333" ,fontSize:13}} numberOfLines={5}>电话：<Text style={{ fontSize: 13}} >{v.tel.length > 0 ? v.tel : "暂无"}</Text></Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: width * 0.9 - 170, alignItems: 'center' }}>
                                            <Feather
                                                name='map-pin'
                                                color="#7cc0c0"
                                                size={15}>
                                                <Text style={{ marginLeft: 10, fontSize: 15 ,color:"#333"}}>{' ' + v.distance / 1000 + "km"}</Text>
                                            </Feather>

                                           <TouchableOpacity   activeOpacity={1} style={{ backgroundColor: global.mainColor, borderRadius: 15,elevation:5,marginLeft:5}} activeOpacity={1} onPress={() => this.context.navigate('go_map', { to: v.location })}>
                                                <Text style={{ fontSize: 15, paddingHorizontal: 20,color:"#333", paddingVertical: 5, color: '#fff' }}>导航</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : null}
                        {this.state.activeIndex === 5 ? this.state.zhangxiaoquan.map((v, k) => {
                            return (
                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginTop: 10,elevation:5,width:width*0.9,marginLeft:width*0.05,height:height*0.18,alignItems:"center",marginBottom:8 }}>
                                    <Image source={v.photos.length > 0 ? { uri: v.photos[0].url } : { uri: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b90e7bec54e736d13303db2498504fc2d562698d.jpg' }} style={{ height: 110, width: 110, margin: 20, borderRadius: 10 }} />
                                    <View style={{width:"50%"}}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold',color:"#333", width: width * 0.9 - 170 }} numberOfLines={5}>{v.name}</Text>
                                        <Text style={{ width: width * 0.9 - 170 ,color:"#333",fontSize:13}} numberOfLines={5}>{v.cityname + v.adname + v.address}</Text>
                                        <Text style={{ width: width * 0.9 - 170,color:"#333" ,fontSize:13}} numberOfLines={5}>电话：<Text style={{ fontSize: 13,  }} >{v.tel.length > 0 ? v.tel : "暂无"}</Text></Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: width * 0.9 - 170, alignItems: 'center' }}>
                                            <Feather
                                                name='map-pin'
                                                color="#7cc0c0"
                                                size={15}>
                                                <Text style={{ marginLeft: 10, fontSize: 15,color:"#333" }}>{' ' + v.distance / 1000 + "km"}</Text>
                                            </Feather>
                                            <TouchableOpacity   activeOpacity={1} style={{ backgroundColor: global.mainColor, borderRadius: 15,elevation:5,marginLeft:5}} activeOpacity={1} onPress={() => this.context.navigate('go_map', { to: v.location })}>
                                                <Text style={{ fontSize: 15, paddingHorizontal: 20,color:"#333", paddingVertical: 5, color: '#fff' }}>导航</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : null}
                    </ScrollView>
                </View>
            </Animated.View>
        )
    }
    renderImageCloseButton = () => {
        const animatedCloseStyle = {
            opacity: this.state.animation
        }
        return (
            <TouchableWithoutFeedback  activeOpacity={1} onPress={this.handleClose}>
                <Animated.View style={[styles.close, animatedCloseStyle]}>
                    <Text style={styles.closeText}>X</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    renderActiveImage = () => {
        const activeImageStyle = {
            width: this.state.size.x,
            height: this.state.size.y,
            top: this.state.position.y,
            left: this.state.position.x
        }
        return (
            <Animated.Image
                key={this.state.activeImage}
                source={this.state.activeImage}
                resizeMode="stretch"
                style={[styles.viewImage, activeImageStyle]}
            />
        )
    }

    componentDidMount() {
        fetch('https://restapi.amap.com/v3/place/around?key=bd30ae3e640c5c5416ea671e713a6cfc&location=120.156339,30.315248&keywords=亨达利&types=&radius=50000&offset=20&page=1&extensions=all')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ daliheng: json.pois })
            })
        //   axios.get('https://restapi.amap.com/v3/place/around',{
        //     params:{
        //         key:'bd30ae3e640c5c5416ea671e713a6cfc',
        //         location:'120.156339,30.315248',
        //         keywords:'亨达利',
        //         radius:50000,
        //         offset:20,
        //         page:1,
        //         extensions:'all'
        //     }
        //   }).then(function (response) {
        //     console.log(response.data.pois);
        //   })
        fetch('https://restapi.amap.com/v3/place/around?key=bd30ae3e640c5c5416ea671e713a6cfc&location=120.156339,30.315248&keywords=邵芝岩&types=&radius=50000&offset=20&page=1&extensions=all')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ shaozhiyan: json.pois })
            })
        fetch('https://restapi.amap.com/v3/place/around?key=bd30ae3e640c5c5416ea671e713a6cfc&location=120.156339,30.315248&keywords=西泠印社&types=&radius=50000&offset=20&page=1&extensions=all')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ xilengyinshe: json.pois })
            })
        fetch('https://restapi.amap.com/v3/place/around?key=bd30ae3e640c5c5416ea671e713a6cfc&location=120.156339,30.315248&keywords=朱府铜艺&types=&radius=50000&offset=20&page=1&extensions=all')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ zhufutongyi: json.pois })
            })
        fetch('https://restapi.amap.com/v3/place/around?key=bd30ae3e640c5c5416ea671e713a6cfc&location=120.156339,30.315248&keywords=王星记&types=&radius=50000&offset=20&page=1&extensions=all')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ wangxingji: json.pois })
            })
        fetch('https://restapi.amap.com/v3/place/around?key=bd30ae3e640c5c5416ea671e713a6cfc&location=120.156339,30.315248&keywords=张小泉&types=&radius=50000&offset=20&page=1&extensions=all')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ zhangxiaoquan: json.pois })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.renderFocusableImages()}
                </ScrollView>

                <View
                    style={StyleSheet.absoluteFill}
                    pointerEvents={this.state.activeImage ? "auto" : "none"}
                >
                    <View
                        style={styles.topContent}
                        ref={image => this._viewImage = image}
                        onLayout={() => { }} // For Android
                    >
                    </View>
                    {this.renderImageDummyData()}
                </View>
                {this.renderActiveImage()}
                {this.renderImageCloseButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       width:width,
       height:height
        // backgroundColor: '#fff',
    },
    grid: {

        flexDirection: 'row',
        flexWrap: "wrap-reverse",
        marginBottom: 10
        //   width:width,
        //   height:height*0.93
        // justifyContent:"space-around"
    },
    photoStyle: {
        width: width * 0.45,
        height: height * 0.3,
        marginLeft: width * 0.033,
        marginTop: width * 0.033,
        //   elevation:5
        borderRadius: 15,

    },
    topContent: {
        flex: 2,
    },
    content: {
       width:width,
       height:height*0.7,
        backgroundColor: "#f1f1f1"
    },
    viewImage: {
        // width: width,
        // height: height * 0.01,
        position: "absolute",//点击后图片的大小
    },
    headingStyle: {
        width:width,
        // marginLeft:width*0.05,
        // backgroundColor:"red"
        // marginHorizontal: width * 0.05,
    },
    title: {
        fontSize: 28,
    },
    contentStyle: {
        margin: 10
    },
    close: {
        position: "absolute",
        top: 20,
        right: 20
    },
    closeText: {
        backgroundColor: "transparent",
        fontSize: 28,
        color: "#FFF"
    }
});

