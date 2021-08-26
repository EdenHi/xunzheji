import React, { Component } from 'react'
import { DeviceEventEmitter } from 'react-native'
import { View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import { Obj } from 'prelude-ls'
const { width, height } = Dimensions.get("window")

export default class XiaoXi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.route.params.username,
            data: [],
            // newmessage:[{text:'',senduser:''}]
            text: '',
            senduser: '',
            userdata: [],
            update: 0
        }
    }
    getData() {
        fetch('http://8.142.11.85:3000/users/getchatuser', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username
            })
        }).then((response) => response.json())
            .then((json) => {
                var Arr = new Array();
                Arr = json
                for (let i = 0; i < Arr.length; i++) {
                    if (Arr[i].user_1 !== this.state.username) {
                        let temp = Arr[i].user_1;
                        Arr[i].user_1 = this.state.username;
                        Arr[i].user_2 = temp;

                    }


                }
                this.setState({ data: Arr })
                console.log('state', this.state.data[0]);

            })
            .catch((error) => {
                console.log(error);
            })
        console.log(this.state.data);

    }
    componentDidMount() {
        this.getData();
        this.listerner = DeviceEventEmitter.addListener('updatemessage',this.getData.bind(this))
    }

    componentWillUnmount() {
        this.listerner.remove();
    }
    renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chats', { room: item.room, nickname:this.props.route.params.nickname==item.nickname1?item.nickname2:item.nickname1,username:item.user_2}) }} style={{ width: width * 0.9, height: height * 0.1, flexDirection: "row", backgroundColor: "#fff", alignItems: "center", marginHorizontal: width * 0.05, marginBottom: 20, elevation: 1, borderRadius: 10 }}>
                <Image source={{ uri:this.props.route.params.avatar==item.avatar1?item.avatar2:item.avatar1 }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50, marginLeft: 10 }} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>{this.props.route.params.nickname==item.nickname1?item.nickname2:item.nickname1}</Text>
                    <Text style={{ fontSize: 13 }}>{item.lastmessagesender}:{item.lastmessage}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={{ height: height * 0.07, alignItems: "center", flexDirection: "row", backgroundColor: "#7cc0c0", elevation: 1 }}>
                    <AntDesign name='left' size={20} color='#fff' />
                    <Text style={{ fontSize: 18, color: "#fff", marginLeft: 10, fontWeight: "bold" }}>消息</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: width * 0.1, justifyContent: "space-between", height: height * 0.15 }}>
                    <View style={{ width: width * 0.2, height: width * 0.15, alignItems: "center" }}>
                        <Image source={require('../HomeScreen/photos/q.png')} style={{ width: width * 0.1, height: width * 0.1 }} />
                        <Text style={{ fontSize: 15, color: "#7cc0c0", marginTop: 10 }}>赞和收藏</Text>
                    </View>
                    <View style={{ width: width * 0.2, height: width * 0.15, alignItems: "center" }}>
                        <Image source={require('../HomeScreen/photos/e.png')} style={{ width: width * 0.1, height: width * 0.1 }} />
                        <Text style={{ fontSize: 15, color: "#7cc0c0", marginTop: 10 }}>评论和@</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Want")} style={{ width: width * 0.2, height: width * 0.15, alignItems: "center" }}>
                        <Image source={require('../HomeScreen/photos/r.png')} style={{ width: width * 0.1, height: width * 0.1 }} />
                        <Text style={{ fontSize: 15, color: "#7cc0c0", marginTop: 10 }}>我想要</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        handleMethod={({ viewableItems }) => this.handleViewableItemsChanged(viewableItems)}
                        data={this.state.data}
                        renderItem={this.renderItem}
                    />

                </View>
            </View>
        )
    }
}
