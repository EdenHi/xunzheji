import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, AsyncStorage, FlatList } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get("window")

export default class Zs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pinglun: [],
            denglu_username: '',
        }
    }
    // get_pinglun() {
    //     AsyncStorage.getItem('username', (err, result) => {
    //         if (!err) {
    //             this.setState({
    //                 denglu_username: result,
    //             })
    //             fetch('http://8.142.11.85:3000/shouye/get_pinglun', {
    //                 method: 'POST',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     username: result,
    //                     wenzhang_id: this.props.route.params.wenzhang_id
    //                 })
    //             })
    //                 .then((response) => response.json())
    //                 .then((json) => {
    //                     this.setState({
    //                         pinglun: json
    //                     })
    //                 });
    //         }
    //     })
    // }
    // componentDidMount() {
    //     this.get_pinglun();
    // }
    //更新文章评论点赞
    update_dianzan(v) {
        if (v.wenzhang_dianzan === this.state.denglu_username) {
            fetch('http://8.142.11.85:3000/shouye/update_pldianzan2', {
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
            fetch('http://8.142.11.85:3000/shouye/update_pldianzan', {
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
                            <Text style={{ color: '#aaa', marginRight: width * 0.2, fontSize: 13, marginTop: 10 }}>{item.pinglun_time}</Text>
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
                    {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{uri:'http://8.142.11.85:3000/public/images/zsb1.jpeg'}} /> */}
                    <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold" }}>时空难阻货郎情</Text>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙商话题</Text>
                        <Text style={{ fontSize: 10 }}>|2021-7-30</Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        20多年前，义乌货郎肩挑货郎担，手摇拨浪鼓，用小百货和义乌姜糖去江西省资溪县谋生计；20多年后，当年的货郎再次来到当年的谋生地招聘工人。当年的江西老东家依旧念叨感怀当年的货郎，当年的义乌货郎也仍然铭记着当年给过他们帮助的好心人。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb3.jpeg' }} />
                    <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb1.jpeg' }} />

                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}></Text></View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center" }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        苏溪镇西山下村现年59岁的楼圣贤，就是当年的货郎之一。在此次重走鸡毛换糖之路中，他偶遇了当年的一个老东家，楼圣贤的心情久久难以平静。
哪里有电线杆哪里就有货郎担。
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        “一点都没变，一点都没变。只是稍微多了几栋新房子，路加宽了些。25年啦，一直都想来看看啊。”当采访组从江西省资溪县县城出发后，楼圣贤心情就激动起来。
看到这些熟悉的景色，25年前在此处鸡毛换糖的记忆涌上心头。楼圣贤回忆说，1983年，刚刚而立之年的他在姨父的带领下，从义乌的苏溪火车站上车，经过９个小时的车程，到达资溪县，再转到横山乡，然后与姨父分开，各自挑起货郎担朝着不同的方向走，开始做生意。
“一起去的人一般都要分开走，人多生意就少，别人刚去过的村子生意也很少。我们没有明确的目的地，只有一个大致的方向，见到人就去做生意。看不到房屋，就沿着电线杆走，我们知道，有电线杆的地方就有村子，有村子的地方就有我们的货郎担。”当年总结的生意经，楼圣贤至今仍记忆犹新。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb2.jpeg' }} />
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        出了县城没多久，汽车便进入到一条盘旋于崇山峻岭间的仅能容一辆车通过的砂路上。车子在一个个险弯陡坡之间前行。放眼望去，周围是看不到尽头的葱郁山岭，路两旁高大的乔木林立，几栋土木结构的矮房子偶尔从车窗外闪过，一路走来，不见人影。
                        </Text>
                    </View>
                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", marginTop: 10 }}>浙东学派经商思想的影响</Text></View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        楼圣贤回忆说，车子经过的这条路是往横山乡方向的必经之路，当年只要是往株溪林场方向的，都要走这条长达10多公里的山路。他在资溪县做了五年的鸡毛换糖生意，曾挑着货郎担多次走过这条路。一路上，累了，就在路旁的树下休息；饿了，就掏出干粮啃上两口；渴了，到附近的小溪里喝上几口溪水。就这样花上半天的时间就能到达横山乡了。
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        “看，就是那棵树，我曾经在那里休息过很多次。”楼圣贤欣喜地指着路旁的一棵大树说：“前面不远处还有一个很小的村子，我记得很清楚的。”这时，有几栋黑灰色矮小的木质结构房子映入眼帘。楼圣贤说，这个村子一共只有六七户人家，有一年，可能是因为好几天都没有其他货郎来过的缘故，他在这个村子换了不少鸡肫皮和塑料凉鞋，毛利润足有15元，做了一笔好生意。
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        汽车在连续爬了几个陡坡后，进入了一个长下坡。“就在一个山口，我碰到了一只黄毛色像狗熊样子的大野兽。”楼圣贤说，他一见到这只大野兽，就把货郎担一放，拿起扁担，大吼一声就往下冲，那只野兽被他吓跑了。他还介绍说，这种大野兽见得不多。因为经常在村里的田塍小路上走，蛇很常见，甚至时常碰到毒蛇。“那时还年轻啊，苦和累都能挺住，没什么的，我一心只想着怎么做好生意，赚钱养家。”
                        </Text>
                    </View>
                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>偶遇当年老东家</Text></View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        车子抵达横山乡的一条小街时，楼圣贤一眼就认出了村口的一个小店，“这里还是小店，当年我多次在这里要水喝。这里有我一个老东家，应该在小店右边下坡的位置。”他立即下车，向小店主人打听他的老东家。
“一个60多岁的老头，姓齐，从淳安移民过来的。我是二十多年前在这里挑担子鸡毛换糖的呀，义乌敲糖的。”楼圣贤一边说，一边做起了挑担、手摇拨浪鼓的动作。“哦——以前这里义乌敲糖的很多呢。”店主忙点头说道，当年他还是一个几岁的孩子，每次听到“咚咚咚”的鼓声，就会从家里跑出来，把积攒好的塑料鞋、破布等东西，拿来换糖吃。正说着，周围一些上了岁数的老人们也走了过来。“那时，家里要的针线、扣子等小东西，孩子们的小玩意，货郎担里都有，买这些东西十分方便。我们这里离城里太远了，又没什么商店的，要买东西了，都等他们来。家里一些鸡毛、鸭毛等东西都可以换给他们，过年的时候特别多。”他们对当年鸡毛换糖的义乌人，记得非常清楚。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb4.jpeg' }} />
                </View>
                <View style={{ width: width, flexDirection: "row", alignItems: "center", marginTop: "5%" }}>
                    <View style={{ width: 2, height: 28, backgroundColor: "#7cc0c0", marginLeft: width * 0.05 }}></View>
                    <Text style={{ fontSize: 15, color: "#7cc0c0", marginLeft: "2%" }}>相关评论</Text>
                </View>
            </View>
        )
    }
    render() {
        console.log('123', this.state.pinglun);
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={["#7cc0bf", "#fff", "#fff"]}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, justifyContent: "space-between" }}>
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
                        <View style={{ width: 250, height: 40, backgroundColor: "#808080", opacity: 0.4, marginLeft: 20, borderRadius: 20 }}>
                            <TextInput style={{ marginLeft: 20 }} placeholder="欢迎发表你的观点" />
                        </View>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf", marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name="staro" size={25} color="#7cc0bf" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf" }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#7cc0bf" }} name="export" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
