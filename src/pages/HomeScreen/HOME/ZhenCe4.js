import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, FlatList,AsyncStorage, Keyboard,TextInput ,Share} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const { width, height } = Dimensions.get("window")

export default class ZhenCe4 extends Component {
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
                        wenzhang_id:18
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
    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    '是寻商迹哦',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
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
                wenzhang_id:18
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
                wenzhang_id: 18,
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
                        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold", width: width * 0.9, color: "#333" }}>《浙江省民营企业发展促进条例》落地</Text>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙江日报</Text>
                            <Text style={{ fontSize: 10 }}>|2021-7-13</Text>
                        </View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;1月16日，浙江省十三届人大三次会议表决通过了《浙江省民营企业发展促进条例》（下称《条例》）。《条例》自2020年2月1日起正式施行。
                            </Text>
                        </View>
                        {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb3.jpeg' }} />
                            <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb1.jpeg' }} /> */}


                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;这是全国省域层面第一部促进民营企业发展的地方性法规。《条例》明确指出，民营企业发展促进工作应当坚持竞争中性原则，保障民营企业与其他所有制企业依法平等使用资源要素，公开公平公正参与市场竞争，同等受到法律保护，实现权利平等、机会平等、规则平等。
                            </Text>
                        </View>
                        <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://5b0988e595225.cdn.sohucs.com/images/20200119/5f389095127144999b6cd680db2e9f74.jpeg' }} />
                        <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>一部创制性的地方性法规</Text></View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;浙江省人大常委会委员、法制委员会主任委员丁祖年在发布会上介绍说，浙江省委高度重视《浙江省民营企业发展促进条例》的制定工作，要求认真总结提炼改革实践中积累的成功经验，积极回应民营企业诉求，制定好这部重要创制性法规。浙江省政府坚持以问题为导向，认真梳理需要破解的重点问题，形成了《条例（草案）》，浙江省人大常委会分别于去年9月、11月、12月召开会议，对草案进行了三次审议，并决定提交省十三届人大三次会议审议。1月16日下午，《条例》以99.51%的赞成率高票通过。
                            </Text>
                        </View>
                        <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb2.jpeg' }} />
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;作为一部与民营企业切身相关的法规，在制定过程中，非常注重听取不同类型、不同行业、不同规模、不同区域民营企业的意见，同时，也听取吸收了金融机构、省企业权益保护协会、工商联、律师协会、民营企业发展联合会等意见。
                            </Text>
                        </View>
                        <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>统筹区域金融发展</Text></View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;“在《条例（草案）》修改完善的过程中，累计征求意见达1200余人次，收集修改意见1500余条。”丁祖年透露。今年省两会期间，《条例（草案）》也引发了代表们的高度关注，就此进行了热烈地讨论。丁祖年表示，代表们共提出了100多条意见和建议。与《条例（草案）》相比，正式颁布的《条例》修正了部分表述，特别增加了两个条款，分别是：
                                ·　司法机关依法为保护民营企业合法权益、促进民营企业发展提供司法保障。
                                · 　县级以上人民政府应当将行政机关履行政策承诺、合同约定情况纳入政府绩效评价体系。
                            </Text>
                        </View>
                        <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>全方位破解民企发展难题</Text></View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;目前，民营企业在发展中遇到的问题主要涉及市场准入、融资、人才、创新、权益保护等。对这些问题，《条例》都给出了破解办法或破解方向，以帮助民营企业与国企、外企等站在同一个水平的竞争平台上，获得各个发展要素的合理配置。
                            </Text>
                        </View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;《条例》确定了一系列保障民营企业平等准入的措施，在市场准入、审批许可、经营运行、招投标等方面作出了具体规定：一是明确市场准入负面清单以外的行业、领域、业务等，民营企业均可依法平等进入；二是支持和鼓励民营资本参与国企混改，除国家另有规定外允许民营资本控股；三是规范政府和民营企业在基础设施、公共服务领域的合作，规定合作方案应当包括民营企业回报机制、风险分担机制等事项，提高合作透明度；四是规范政府采购和招标投标活动，明确列举限制或者排斥民营企业参与政府采购、投标活动的禁止行为；五是针对民营企业反映集中的信贷公平问题，规定金融机构在贷款利率、贷款条件、工作人员尽职免责等方面不得对民营企业设置不平等标准和条件。
                            </Text>
                        </View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;《条例》提供了民营企业境外投资、人才引进、风险防范、融资畅通等方面的制度支撑：一是支持民营企业“走出去”，规定有关部门应当为其提供信息推送、境外风险预警、境外投资知识培训等服务，引导支持民营企业依法合理有序开展境外投资；二是强化民营企业人才保障，针对民营企业引进和留住人才难的问题，除对政府制定人才政策提出要求外，允许符合条件的民营企业利用其存量工业用地按照国家有关规定建设企业人才公寓等办公生活配套设施；三是完善民营企业风险预警和纾困帮扶机制，对政府、司法机关等建立健全市场风险分析预警、分类帮扶纾困、企业破产联动协调、企业破产启动资金援助、破产重整企业征信信息修复等制度作了规定；四是推动解决民营企业融资难融资贵问题，对民营企业融资过程中涉及的个人保证担保、授信评价、续贷产品、应收账款质押等作出明确规定。
                            </Text>
                        </View>
                        {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb4.jpeg' }} /> */}
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
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('musicPlayer')}}activeOpacity={1} style={{}}>
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
                    <TouchableOpacity onPress={()=>{this.onShare()}} style={{ width: width * 0.1, height: width * 0.1, color:global.mainColor }}>
                        <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: global.mainColor  }} name="export" size={25} color="#000000" />
                    </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
