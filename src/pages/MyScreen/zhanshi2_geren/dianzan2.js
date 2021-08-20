/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, ScrollView, FlatList, AsyncStorage, Dimensions, ImageBackground, TouchableOpacity, DeviceEventEmitter, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const { height, width } = Dimensions.get('window');
export default class Dianzan2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            denglu_username: '',
        }
    }

    //获取点赞数据
    get_shuju() {
        fetch('http://8.142.11.85:3000/index/selectDianzan', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dianzan_username: this.state.denglu_username,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson,
                });
            }).catch((error) => {
                console.error('error', error);
            });

    }

    get() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                this.setState({
                    denglu_username: result
                }, () => {
                    console.log('result123', result);
                })
                this.get_shuju();
            } else {
                console.log('err', err);
            }
        })
    }

    //退出登录
    delect() {
        this.setState({
            data: [],
        })
    }


    componentDidMount() {
        this.get();
        this.listener = DeviceEventEmitter.addListener('dianzan', this.get.bind(this))
        this.listener = DeviceEventEmitter.addListener('test2', this.delect.bind(this))
        this.listener = DeviceEventEmitter.addListener('dianzan', this.delect.bind(this))
    }

    componentWillUnmount() {
        this.listener.remove();
    }



    renderData({ item, index }) {
        return (
            <View style={{ backgroundColor: 'white', width, marginBottom: 10 }} key={index}>
                <View style={{ width: width * 0.9, margin: width * 0.05 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: item.portrait }} style={{ height: width * 0.11, width: width * 0.11, borderRadius: 50 }} />
                        <Text style={{ marginLeft: 10, fontSize: 18 }}>{item.nickname}</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} activeOpacity={1} onPress={() => this.props.navigation.navigate('Comment', this.state.data[index])}>
                        <Image source={{ uri: item.pic[0] }} style={{ width: width * 0.2, height: width * 0.2, marginTop: 15 }} />
                        <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 15 }}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ width }}>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,backgroundColor:"#7cc0c0"}}>
                    <TouchableOpacity activeOpacity={1} style={{marginLeft:width*0.05}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} name="left" size={20} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft:"2%"}}>我的点赞</Text>
                </View>
                <ScrollView
                    style={{ height: height - 50 - 120 }}
                    ref={ref => this.scrollRef = ref}
                    onScroll={(e) => {
                        if (e.nativeEvent.contentOffset.y === 0) {
                            DeviceEventEmitter.emit('scrollview', 1);
                        }
                    }}>

                    <FlatList
                        keyExtractor={(item, index) => (index + '1')}
                        data={this.state.data}
                        renderItem={this.renderData.bind(this)} />

                    <View style={{ alignItems: 'center' }}><Text>------------到底了------------</Text></View>
                </ScrollView>
            </View>
        );
    }
}