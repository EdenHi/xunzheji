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
        }
    }

    componentDidMount() {


        this.get_dingdan()

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
                        console.log(responseJson);
                        this.setState({
                            data: responseJson.data,
                        });
                    })
            }
        })
    }



    renderDate({ item, index }) {

        return (
            <View style={{ height: height * 0.2, marginVertical: height * 0.03, backgroundColor: '#fff', borderRadius: 10, width: width * 0.95, marginLeft: width * 0.025, flexDirection: 'row' }}>
                <Image style={{ height: height * 0.18, width: width * 0.3, marginLeft: width * 0.05,marginTop:height*0.01 }} resizeMode={'contain'} source={{ uri: item.shop_pic }}></Image>
                <View style={{ borderWidth: 1, width: width * 0.55,height:height*0.15,marginTop:height*0.025}}>
                    <Text style={{borderWidth:1,marginLeft:width * 0.05,width:width*0.45,marginTop:height*0.01,fontSize:15,color:'#333'}} numberOfLines={2}>{item.shop_name}</Text>
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
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>商品足迹</Text>
                    </View>

                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderDate.bind(this)} />
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

