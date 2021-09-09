import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, AsyncStorage, FlatList, DeviceEventEmitter, Keyboard } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from "react-native-vector-icons/Entypo"
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window")

export default class Topic1 extends Component {
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

    header() {
        return (
            <View style={{ width, alignItems: "center" }}>
                <View >
                    <Image style={{ width: width * 0.9, height: height * 0.2, borderRadius: 10 }} source={{ uri: "https://img0.baidu.com/it/u=3380797457,2869153316&fm=26&fmt=auto&gp=0.jpg" }} />
                </View>
                <View style={{ marginTop: 10, width: width * 0.9 }} ><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>在这块非洲最大的市场，中国的浙商异常“凶猛”</Text></View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <Text style={{ fontSize: 10,  marginLeft: "-45%" }}>#浙商话题</Text>
                    <Text style={{ fontSize: 10 }}>|2021-7-7</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;尼日利亚，西非明珠。从2014年开始，它超越南非成为非洲第一大经济体，世界第26。在这块非洲最大的市场，中国的浙商异常“凶猛”。今天的尼日利亚，有将近10万中国人，在八九十年代，这个数字仅仅只有5000人左右，大多数是香港的投资者。而从2000年开始，在欧美国家闯荡多年的浙商，发现了这块极富潜力的非洲市场，开始了非洲冒险之旅。</Text>
                </View>
                <View style={{ marginBottom: 10, marginTop: 10 }}><Image style={{ width: width * 0.9, height: height * 0.2, borderRadius: 10 }} source={{ uri: "https://img0.baidu.com/it/u=3078547323,3849809851&fm=26&fmt=auto&gp=0.jpg" }} /></View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;最早的“猛人”，是来自舟山的孙国平。1989 年，孙国平作为某工业设备的业务员，前往尼日利亚推销设备。跑了几年市场之后，孙国平发现了商机：中国商品在当地很受欢迎，一些尼日利亚的家庭在为女儿准备嫁妆的时候，都以能用上中国商品感到骄傲。但可惜当时中国商品到达尼日利亚的渠道有限，中国商人更是很少知道这块市场。于是孙国平辞掉了工作，在尼日利亚开始了人生第一次创业。1999年，孙国平在尼日利亚首都拉各斯租下一大片仓库，分别改建成商铺、超市、公寓，并提供清关、运输等一系列服务，尼日利亚的中国城，就这样发展起来。有了硬件，下一步就是招商。孙国平跑回浙江，各处演讲，跟浙江老乡们宣讲尼日利亚的商机，鼓动他们前往淘金。“在中国卖30块的鞋子，到了尼日利亚能卖100块，还供不应求。不要小看尼日利亚的购买能力，那里有1亿人口，现在正在改革开放，就要成为非洲最有钱的国家”。对商机有着敏锐嗅觉的浙商们，立即蜂拥而至，没过多久，整个中国城的商铺就全被租满，开启了十年的辉煌。</Text>
                </View>
                <View>
                    <Image style={{ width: width * 0.9, height: height * 0.2, borderRadius: 10 }} source={{ uri: "https://img2.baidu.com/it/u=2437075116,1444194715&fm=253&fmt=auto&app=120&f=JPG?w=640&h=375" }} />
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;与此同时，浙商，如同商界的“游牧民族”，正在世界各地寻找丰美的水草之地。“近水楼台”的东南亚，发达的美国、日本早早的被广东人和福建人占据了，浙商们只能远走欧洲，从匈牙利到法国、意大利、希腊、西班牙、德国，处处都能见到浙商们的生意。只要有生意可做，哪怕是非洲，他们也会愿意冒险。在欧洲，浙商们是“不死的中国人”，他们没日没夜的劳作，穷尽一生都在积累财富，等到赚够了就衣锦还乡，哪怕是没赚到钱，最终也要落叶归根，所以欧洲人总说自己从未见过中国人的葬礼，他们是“不死”的。中国制造的商品，在欧洲也只能打价格战，以低价获得市场。</Text>
                </View>
                <View>
                    <Image style={{ width: width * 0.7, height: height * 0.35, borderRadius: 10, marginHorizontal: width * 0.1 }} source={{ uri: "https://pic3.zhimg.com/80/v2-860660e92b5a0a6e8263e02d361ef0b6_720w.jpg" }} />
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;种种误解和差异，让浙商们在早期闯荡欧洲时受尽了排挤和歧视。而在非洲，这种歧视是不存在的。中国商品是硬通货，浙商们更是受到了尊敬，这一切，都要感谢几十年前的开路者，在孙国平发现尼日利亚这块宝藏市场之前，早就有中国人为他们打下了基础，为中国商品背书，其中，就有一位资历相当惊人的“浙商”。</Text>
                </View>
                <View>
                    <Image style={{ width: width * 0.9, height: height * 0.28, borderRadius: 10 }} source={{ uri: "https://pic3.zhimg.com/80/v2-090cd2234cbb23b61ca7dd3999e8244e_720w.jpg" }} />
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;1916年，浙江海宁袁花镇查家，出生了一位男婴，名叫查济民。这个海宁查家，就是著名的“一门十进士，叔侄五翰林”；康熙皇帝御笔亲题“唐宋以来巨族，江南有数人家”的名门望族。查济民在浙江生活了20余年，就读于浙江大学附属工业专科学院的纺织印染专业，毕业后跑到当时的“大成纺织”工作，结识了中国两位商界巨子，刘国钧和卢作孚，并师从学习。1948年，查济民全家搬到香港，也几乎同时，他的族弟查良镛（金庸），也来到香港打拼。金庸在文坛纵横，而查济民在商界叱咤。不仅在香港拥有大型纺织厂，成为香港的“纺织大王”，还独具慧眼，相中了万里之外的尼日利亚市场。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;查济民1964年，查济民在尼日利亚投资了当时非洲最大的纺织厂，占地76亩，纺织机2235台，招募员工6000多名，日产印染布600万码。这家工厂一直繁荣了20多年，这里不仅薪资高，待遇好，而且出粮准时，还有不错的上升渠道，当地人都以能够进入中国工厂工作为荣。许多人可能对于非洲的工人有种不好的印象，就是他们散漫不听话，效率和中国工人相比更是大打折扣。但尼日利亚的工人们不一样，他们其实非常勤劳，在查济民的工厂，稍加培训后的工人，效率可以达到中国工人的九成，而薪资却只有中国工人的十分之一。查济民的工厂还为当地员工建立了图书馆、足球场、健身房、酒吧、室内棋牌室等一系列娱乐场所，并组织员工进行足球比赛，甚至还出资组建了一支职业足球队参与尼日利亚足球联赛，成为尼日利亚著名球星、为尼日利亚打入世界杯首球的拉希德·耶基尼最早起步的职业足球俱乐部。</Text>
                </View>
                <View>
                    <Image style={{ width: width * 0.9, height: height * 0.2, borderRadius: 10 }} source={{ uri: "https://pic1.zhimg.com/80/v2-5b78dec400349ded852b001185f61f6c_720w.jpg" }} />
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;从70年代开始，尼日利亚发现了大量石油资源，使得这个国家靠贩卖资源迅速致富，暴富后的尼日利亚政府晕了头，放弃了过去对制造业的支持，使得尼日利亚的制造业陷入了30年的衰退，大批制造业工人失业。而查济民的工厂却可以在这波制造业寒冬中逆流而上，除了在尼日利亚各地兴建分厂之外，还成为第一个年营业额超过10亿奈拉（约合当年的 1.08 亿 ~1.24 亿美元）的纺织制造企业，雇佣员工也达到了一万余人。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >&emsp;&emsp;查济民在这里几十年的苦心经营，赢得了尼日利亚人民的信任和尊敬。正是因为有了查济民这样一位“前浪”，后来的浙商来到尼日利亚，才能够有一帆风顺的开局。浙商们在尼日利亚度过了近十年的“蜜月期”，凡是哪个时候来的，都早早分到了一杯羹，有人更是在这里发家致富，走上了职业投资人的道路。可这样的蜜月终归还是结束了。尼日利亚政府开始意识到光靠卖石油，始终不长久，而且无法解决那么多的就业人口。想要国富民也富，还是要发展制造业。于是开始大力扶持本土制造企业，一旦觉得某种外国商品影响到了本土企业发展，就开始打压，首当其冲的，就是中国商品。从此开始，浙商的“猛人”们为了继续赚钱，与尼日利亚不断修改的规则进行着斗争。</Text>
                </View>
            </View>
        )
    }


    render() {
        console.log(this.state.pinglun);
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={[global.mainColor, "#fff", "#fff"]} style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
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
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name={this.state.data.username === this.state.denglu_username ? "star" : "staro"} size={25} color={this.state.data.username === this.state.denglu_username ? 'yellow' : global.mainColor}
                                onPress={() => this.shoucang()} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: global.mainColor }} name="export" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
