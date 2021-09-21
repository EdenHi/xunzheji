import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, AsyncStorage, FlatList, Keyboard } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DeviceEventEmitter } from 'react-native'
const { width, height } = Dimensions.get("window")

export default class Zs extends Component {
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
                        wenzhang_id: this.props.route.params.wenzhang_id
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

    //获取点赞数据
    get_shuju() {
        fetch('http://47.100.78.254:3000/shouye/selectShoucang', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wenzhang_id: this.props.route.params.wenzhang_id,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
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
                wenzhang_id: this.props.route.params.wenzhang_id,
                username: this.state.denglu_username,
                pinglun_time: new Date()
            }),
        });
        this.get_pinglun();
    }



    shoucang() {
        if (this.state.data.username === this.state.denglu_username) {
            fetch('http://47.100.78.254:3000/shouye/update_shoucang2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    wenzhang_id: this.props.route.params.wenzhang_id,
                }),
            });
        } else {
            {
                fetch('http://47.100.78.254:3000/shouye/update_shoucang', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        wenzhang_id: this.props.route.params.wenzhang_id,
                        username: this.state.denglu_username,
                    }),
                });
            }
        }
        this.get_shuju()
        DeviceEventEmitter.emit('wenzhang', 1)
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
                            <Text style={{ marginTop: 10,color:"#333" }}>{item.pinglun}</Text>
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
    //Flastlist 顶部渲染
    header() {
        return (
            <View>
                <View style={{ width, alignItems: "center" }}>
                    {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{uri:'http://47.100.78.254:3000/public/images/zsb1.jpeg'}} /> */}
                    <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold",color:"#333" }}>浙江商帮为何能在明清时期就纷纷兴起？</Text>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <Text style={{ fontSize: 10, marginLeft: "-45%",color:"#333" }}>#浙商话题</Text>
                        <Text style={{ fontSize: 10 ,color:"#333"}}>|2021-7-5</Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 ,color:"#333"}}>
                            &emsp;&emsp;明代中后期因为全国的交通条件得到了大幅的改善和发展。大规模的远航的商业活动和商品贩卖贩运开始，发展也从而推动了各地的商帮的兴起和发展。尤其是在明代，当时国家统一交通也便利幅员辽阔水路都非常的畅通，也是为大规模的商品的流通提供了非常便利的交通运输条件。我国古代的商帮的诞生，从刚开始的经商风气的形成到最后商品经济的发展一直是一个比较艰难而长久的过程。在封建社会的多种的因素合条件之下，明清时期各地的商帮开始先后形成。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb3.jpeg' }} />
                    <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb1.jpeg' }} />

                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" ,color:"#333"}}>地域化的商帮兴起的背景</Text></View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 ,color:"#333"}}>
                            &emsp;&emsp;商业想要发展，首先是要有交通的便利条件和经济发展水平。在明代中后期，当时的交通条件开始大为改观，水路的畅通有利于大规模的远距离的商品的贩运，这一变化也是促进着各地的商帮的兴起。当时的明代幅员辽阔，全国统一水路非常的畅通。
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 ,color:"#333"}}>
                            &emsp;&emsp;明朝更是为了利用贯通南北大运河来转输粮草。在后来的永乐年间，为了对付蒙古的设立，便于军队的往来和粮食的运输，更是修建了很多的道路。是北边与内地的交通更加的便利和畅通。从宿州通向西域的道路也是通过明朝的修筑，也开始变得畅通无阻。到了明朝中后期的时候，全国各地的水陆交通开始有十分大的改观。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb2.jpeg' }} />
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025,color:"#333" }}>
                            &emsp;&emsp;除此之外，当时商品经济生产发展和它的结构也是有利于商人进行群体集团的产生。在明代时期，当时的商业主要经营生产是棉布和丝绸等纺织品的经营。当时的棉花在全国进行种植，南北都是可以的，遍布全国。每年江南要从华北地区输入各种的原材料。当时可以向海内外输入大量丝绸的，只有江南，这就形成了江南丝绸，可以畅销于海内外的单向的一个商品流畅。也就形成了一种垄断垄断的方式。从而促进了商业群体的活动。加之当时的白银货币已经改变了当时的支付手段，提高了结算的效率，从而也就给商业大规模的流通带来了一种便利的条件，有利于商帮群体的产生。
                        </Text>
                    </View>
                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", marginTop: 10 ,color:"#333"}}>浙东学派经商思想的影响</Text></View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025,color:"#333" }}>
                            &emsp;&emsp; 在明清时期由黄宗羲开创的浙东学派。为当时的商品经济和学以致用的文化传统相结合的思想带来了非常成功的思想成果。当时的浙东文化当中的施工使用工商皆本的思想，也是孕育了当时浙江很大一批人强烈的经商意识
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025,color:"#333" }}>
                            &emsp;&emsp;  传统的根深蒂固的重商思想开始慢慢的在这江浙地区延伸开来。也是成为了江浙地区有很多商帮兴起的原因之一。因为深厚的思想是民间经商的基础大大加深也使庞大的商人群体开始产生。当时在江浙地区经世致用思想已经成为了当时江浙人的一种集体无意识的人文精神。他强调个人个体能力公立还是注重实际成为了他们的主导思想。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb4.jpeg' }} />
                </View>
                <View style={{ width: width, flexDirection: "row", alignItems: "center", marginTop: "5%" }}>
                    <View style={{ width: 2, height: 28, backgroundColor: global.mainColor, marginLeft: width * 0.05 }}></View>
                    <Text style={{ fontSize: 15, color: global.mainColor, marginLeft: "2%",color:"#333" }}>相关评论</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "space-between",backgroundColor:global.mainColor }}>
                        <TouchableOpacity activeOpacity={1}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('musicPlayer')}} activeOpacity={1} style={{marginRight:width*0.05}}>
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
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name={this.state.data.username === this.state.denglu_username ? "star" : "staro"} size={25} color={this.state.data.username === this.state.denglu_username ? 'yellow' : global.mainColor}
                                onPress={() => this.shoucang()} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: global.mainColor }} name="export" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
