import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Dimensions } from 'react-native'
import { View, ImageBackground, Image, Text,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get("window")

export default class Want extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: 'http://8.142.11.85:3000/public/images/addimg.png',
            leibie: '',
            mingcheng: '',
            liuyan: '',
            imag: '',
            data: { "exchang_wupin": "眼膏", "id": 25, "liyou": "莫得", "nickname": "噜噜噜", "pic": ["http://8.142.11.85:3000/public/images/.png"], "portrait": "http://8.142.11.85:3000/public/images/-1.png", "renzheng": "未认证", "tag": "物品", "username": "Eden", "uuid": "L7fkrZgH", "wupin": "眼药水" }
        }
    }

    //打开本地图册
    _openPicker() {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
        }).then(image => {
            console.log('imag', image);
            const { img } = this.state;
            this.setState({ img: image.path, imag: image })
        });

    }

    send_message() {
        const { imag } = this.state
        let time = new Date()
        AsyncStorage.getItem('username', (error, result) => {
            if (!error) {
                let formData = new FormData();//如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
                let file = { uri: imag.path, type: imag.mime, name: imag.path.split('/').pop() };   //这里的key(uri和type和name)不能改变,
                formData.append('files', file);   //这里的files就是后台需要的key
                formData.append('send_username', result);
                formData.append('username', this.props.route.params.username);
                formData.append('leibie', this.state.leibie);
                formData.append('mingcheng', this.state.mingcheng);
                formData.append('liuyan', this.state.liuyan);
                formData.append('uuid', this.props.route.params.uuid)
                FormData.append('time', time)
                fetch('http://8.142.11.85:3000/shop/insert_Exchange2_want', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((josn) => {
                        console.log(josn);
                    });
            }
        })
    }

    render() {
        console.log('item', this.props.route.params);
        const item = this.state.data
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={{ height: height * 0.07, alignItems: "center", flexDirection: "row", backgroundColor: "#7cc0c0", elevation: 1 }}>
                    <AntDesign name='left' size={20} color='#fff' />
                    <Text style={{ fontSize: 18, color: "#fff", marginLeft: 10, fontWeight: "bold" }}>消息</Text>
                </TouchableOpacity>
                <ScrollView>
                    <View style={{ marginHorizontal: width * 0.05, marginVertical: 20 }}>
                        <ImageBackground imageStyle={{ borderRadius: 15 }} style={{ width: width * 0.9, height: height * 0.3, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img2.baidu.com/it/u=133347796,434139622&fm=26&fmt=auto&gp=0.jpg' }} >
                            <View style={{ backgroundColor: "rgba(255,255,255,0.7)", width: width * 0.7, height: height * 0.2 }}>
                                <View style={{ flexDirection: 'row', top: -width * 0.05, left: 10 }}>
                                    <Image source={{ uri: item.portrait }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50 }} />
                                    <View style={{ marginLeft: 5, justifyContent: 'space-between' }}>
                                        <Text>{item.nickname}</Text>
                                        <Text>{item.renzheng}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333333" }}>交换的物品：</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.wupin}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>想换什么：</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.exchang_wupin}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginHorizontal: width * 0.05, marginVertical: 20 }}>
                        <ImageBackground imageStyle={{ borderRadius: 15 }} style={{ width: width * 0.9, height: height * 0.3, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img2.baidu.com/it/u=133347796,434139622&fm=26&fmt=auto&gp=0.jpg' }} >
                            <View style={{ backgroundColor: "rgba(255,255,255,0.7)", width: width * 0.7, height: height * 0.2 }}>
                                <View style={{ flexDirection: 'row', top: -width * 0.05, left: 10 }}>
                                    <Image source={{ uri: item.portrait }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50 }} />
                                    <View style={{ marginLeft: 5, justifyContent: 'space-between' }}>
                                        <Text>{item.nickname}</Text>
                                        <Text>{item.renzheng}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333333" }}>交换的物品：</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.wupin}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>想换什么：</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.exchang_wupin}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ marginHorizontal: width * 0.05, marginVertical: 20 }}>
                        <ImageBackground imageStyle={{ borderRadius: 15 }} style={{ width: width * 0.9, height: height * 0.3, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img2.baidu.com/it/u=133347796,434139622&fm=26&fmt=auto&gp=0.jpg' }} >
                            <View style={{ backgroundColor: "rgba(255,255,255,0.7)", width: width * 0.7, height: height * 0.2 }}>
                                <View style={{ flexDirection: 'row', top: -width * 0.05, left: 10 }}>
                                    <Image source={{ uri: item.portrait }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50 }} />
                                    <View style={{ marginLeft: 5, justifyContent: 'space-between' }}>
                                        <Text>{item.nickname}</Text>
                                        <Text>{item.renzheng}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333333" }}>交换的物品：</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.wupin}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>想换什么：</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.exchang_wupin}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
