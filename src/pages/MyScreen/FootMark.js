import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput, Animated, Modal,
    Easing, DeviceEventEmitter
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import LottieView from 'lottie-react-native';
import { NavigationContext } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native'
import { AsyncStorage } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { width, height } = Dimensions.get("window")

export default class Dingdan extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,
            data: [],
            username: '',
            vv: '',
            kk: '',
            Time: [],
            fresh: true,
            showNull:false,
        }
    }

    componentDidMount() {


        this.get_dingdan()

    }
    newData(data) {
        var nData = new Array();
        for (var i = 0; i < data.length; i++) {
            if (nData.indexOf(data[i]) == -1) {
                nData.push(data[i]);
            }
        }
        return nData;
    }
    get_dingdan() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                this.setState({
                    username: result
                })
                fetch('http://8.142.11.85:3000/shop/selectfootmark', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                    }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        let data = responseJson;
                        let Time = new Array();
                        for (let i = 0; i < responseJson.data.length; i++) {
                            let a = responseJson.data[i].createdAt.slice(0, 10)
                            //取出时分
                            let b = responseJson.data[i].createdAt.slice(11, 16)
                            let time1 = new Date();
                            let time2 = new Date(responseJson.data[i].createdAt).getTime()
                            let sum = a + ' ' + b
                            //获得相差的秒
                            let ss = (time1 - time2) / 1000
                            let day = Math.floor(ss / 86400)
                            let hour = Math.floor(ss / 3600)
                            let min = Math.floor(ss / 60)
                            let time = ''
                            if (day >= 1 && day < 4) {
                                time = day + '天前'
                            }
                            else if (hour >= 1 && hour < 24) {
                                time = hour + '小时前'
                            }
                            else if (min >= 1 && min < 60) {
                                time = min + '分钟前'
                            }
                            else if (day >= 4) {
                                time = sum
                            }
                            else {
                                time = '刚刚'
                            }
                            data.data[i].createdAt = time
                            Time.push(time)
                        }
                        this.setState({ Time: this.newData(Time) })
                        if(this.state.Time!==[]){
                            this.setState({showNull:true})
                        }
                        this.setState({ data: data.data })
                    })
            }
        })
    }

    insideMap(e) {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.data.map((i, key) => {

                    return (
                        this.state.data[key].createdAt == e ? <View style={{ height: height * 0.18, marginVertical: height * 0.01, backgroundColor: '#fff', borderRadius: 10, width: width * 0.3, marginLeft: width * 0.025, flexDirection: 'column', elevation: 1 }}>
                            <Image style={{ height: '80%', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: -height * 0.01 }} resizeMode={'contain'} source={{ uri: this.state.data[key].shop_pic }}></Image>
                            <View style={{ width: width * 0.3, height: height * 0.04, marginTop: -height * 0.0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                <Text style={{ width: '90%', fontSize: 12, color: '#333', textAlign: 'center' }} numberOfLines={1}>{this.state.data[key].shop_name}</Text>
                                <Text style={{ width: '100%', fontSize: 14, color: '#FF0000', textAlign: 'center' }} numberOfLines={1}>{this.state.data[key].price}￥</Text>
                            </View>
                        </View> : null
                    )
                })}
            </View>
        )
    }
    renderDate({ item, index }) {
        return (
            <View style={{ width }}>
                <Text style={{ fontSize: 16, color: '#333', paddingLeft: width * 0.025, }}>{item}</Text>
                <View style={{ backgroundColor: '', }}>
                    {this.insideMap(item)}
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={["#7CC0C0", "#fff", "#fff"]} style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05 }}>
                        <TouchableOpacity activeOpacity={1} style={{ width: width * 0.06 }}>
                            <FontAwesome onPress={() => { this.props.navigation.goBack() }} name={'angle-left'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.2, marginLeft: width * 0.29 }}>商品足迹</Text>
                        <TouchableOpacity activeOpacity={1} style={{ width: width * 0.06, marginLeft: width * 0.29 }}>
                            <MaterialIcons onPress={() => { this.setState({ Time: [] }),this.setState({showNull:false}) }} name={'delete-outline'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                    {this.state.showNull ?  <FlatList
                        numColumns={1}
                        showsVerticalScrollIndicator={false}
                        data={this.state.Time}
                        renderItem={this.renderDate.bind(this)} />:<Image style={{ width: '100%', height: '40%',marginTop:height*0.2 }} source={require('../nothingpic/暂无记录.png')}></Image> }

                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    modalLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContainer: {
        width: 250,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: 15
    },
});

