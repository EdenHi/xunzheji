import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, FlatList,AsyncStorage, Keyboard,TextInput } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';



const { width, height } = Dimensions.get("window")

export default class ZhenCe3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pinglun: [],
            denglu_username: '',
            data: '',
            send_pinglun: '',
            time: '',
        }
    }
    get_pinglun() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                this.setState({
                    denglu_username: result,
                })
                fetch('http://47.100.78.254:3000/shouye/get_pinglun', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                        wenzhang_id:17
                    })
                })
                    .then((response) => response.json())
                    .then((json) => {

                        this.setState({
                            pinglun: json
                        })
                    });
            }
        })
    }
    componentDidMount() {
        this.get_pinglun();
        this.get_shuju();
    }

    //获取点赞数据
    get_shuju() {
        fetch('http://47.100.78.254:3000/shouye/selectShoucang', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wenzhang_id:17
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('json',json);
                this.setState({
                    data: responseJson[0]
                })
            })

    }

    //对文章进行评论
    insert_pinglun() {
        fetch('http://47.100.78.254:3000/shouye/insert_wenzhang', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pinglun: this.state.send_pinglun,
                wenzhang_id: 17,
                username: this.state.denglu_username,
                pinglun_time: new Date()
            }),
        });
        this.get_pinglun();
    }

    //更新文章评论点赞
    update_dianzan(v) {
        if (v.wenzhang_dianzan === this.state.denglu_username) {
            fetch('http://47.100.78.254:3000/shouye/update_pldianzan2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: v.id,
                }),
            });
        } else {
            fetch('http://47.100.78.254:3000/shouye/update_pldianzan', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: v.id,
                    username: this.state.denglu_username,
                }),
            });
        }
        this.get_pinglun();
    }

     //Flastlist 中间渲染
     renderDate({ item, index }) {

        //取出年月日
        let a = item.pinglun_time.slice(0, 10)
        //取出时分
        let b = item.pinglun_time.slice(11, 16)
        let time1 = new Date();
        let time2 = new Date(item.pinglun_time).getTime()
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

        return (
            <View style={{ marginTop: 10, width: width * 0.9, backgroundColor: "#fff", marginLeft: width * 0.05, padding: 5, borderRadius: 15, elevation: 5, marginBottom: 5 }} key={index}>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: width * 0.025, width: width * 0.85, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={{ uri: item.portrait }} style={{ width: width * 0.08, height: width * 0.08, backgroundColor: 'pink', borderRadius: 50 }} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, marginLeft: '2%', fontWeight: 'bold', color: '#6edcf8' }}>{item.nickname}</Text>
                            <Text style={{ marginTop: 10 }}>{item.pinglun}</Text>
                            <Text style={{ color: '#aaa', marginRight: width * 0.2, fontSize: 13, marginTop: 10 }}>{time}</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 10 }}>
                        <Ionicons
                            name={item.wenzhang_dianzan === this.state.denglu_username ? 'heart' : 'heart-outline'}
                            size={20}
                            color={item.wenzhang_dianzan === this.state.denglu_username ? 'red' : 'black'}
                            onPress={() => this.update_dianzan(item)}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    header(){
        return(
            <View style={{ width, marginHorizontal: width * 0.05 }}>
            {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{uri:'http://47.100.78.254:3000/public/images/zsb1.jpeg'}} /> */}
            <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold", width: width * 0.9, color: "#333" }}>浙江省全面深化“证照分离”改革 520项涉企经营许可事项大调整</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙江日报</Text>
                <Text style={{ fontSize: 10 }}>|2021-7-13</Text>
            </View>
            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;日前，浙江省政府印发《浙江省深化“证照分离”改革进一步激发市场主体发展活力实施方案》，省市场监管局发布《浙江省涉企经营许可事项改革清单（2021年）》和《中国（浙江）自由贸易试验区涉企经营许可事项改革清单（2021年）》。这标志着我省“证照分离”改革再一次迭代升级，全省520项涉企经营许可事项进行大调整。
                </Text>
            </View>
            {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb3.jpeg' }} />
                <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb1.jpeg' }} /> */}


            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;据了解，本轮“证照分离”改革，对全省范围内520项涉企经营许可事项按照《浙江省涉企经营许可事项改革清单（2021年）》规定的改革方式、改革举措和事中事后监管措施进行分类管理。其中，直接取消审批、审批改为备案、实行告知承诺的涉企许可总事项达185项，优化审批服务335项。同时，在浙江自由贸易试验区增加实施43项改革试点举措。
                </Text>
            </View>
            <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>牵住“数智金融”牛鼻子</Text></View>
            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;为强化改革系统集成和协同配套，浙江还将在实施改革过程中同步推进商事主体登记确认制改革、准入准营“一件事”改革、电子证照多维度运用、打造“证照分离”协同平台、构建信用综合监管体系等创新举措，进一步提升改革能级。
                </Text>
            </View>
            
        </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "space-between", backgroundColor: global.mainColor }}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="sound" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>


                <FlatList

                    data={this.state.pinglun}
                    renderItem={this.renderDate.bind(this)}
                    ListHeaderComponent={this.header.bind(this)}
                    />

                    <View style={{ width, height: height * 0.07, backgroundColor: "white", flexDirection: "row", alignItems: "center", justifyContent: 'space-around' }} >
                    <View style={{ width: 250, height: 40, backgroundColor: "#999", opacity: 0.4, marginLeft: 20, borderRadius: 20 }}>
                        <TextInput style={{ marginLeft: 20 }} placeholder="欢迎发表你的观点" onEndEditing={() => { this.insert_pinglun(), Keyboard.dismiss(), this.textInput.clear() }} onChangeText={(send_pinglun) => this.setState({ send_pinglun })}
                            ref={input => { this.textInput = input }} />
                    </View>
                    <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor , marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name={this.state.data.username === this.state.denglu_username ? "star" : "staro"} size={25} color={this.state.data.username === this.state.denglu_username ? 'yellow' : global.mainColor }
                            />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color:global.mainColor }}>
                        <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: global.mainColor  }} name="export" size={25} color="#000000" />
                    </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
