import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput,AsyncStorage,FlatList,DeviceEventEmitter,Keyboard } from 'react-native'
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
            data:'',
            send_pinglun:'',
            time:'',
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
get_shuju(){
    fetch('http://47.100.78.254:3000/shouye/selectShoucang', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            wenzhang_id:this.props.route.params.wenzhang_id,
            }),
    }).then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            data:responseJson[0]
        })
    })
    
}




shoucang(){
    if(this.state.data.username===this.state.denglu_username)
    {
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
    }else{
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
        DeviceEventEmitter.emit('wenzhang',1)
}

//对文章进行评论
insert_pinglun(){
    fetch('http://47.100.78.254:3000/shouye/insert_wenzhang', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pinglun:this.state.send_pinglun,
            wenzhang_id:this.props.route.params.wenzhang_id,
            username:this.state.denglu_username,
            pinglun_time:new Date()
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
        let a = item.pinglun_time.slice(0,10)
        //取出时分
        let b = item.pinglun_time.slice(11,16)
        let time1 = new Date();
        let time2 = new Date(item.pinglun_time).getTime()
        let sum = a+' '+b
        //获得相差的秒
        let ss = (time1 -time2)/1000
        let day = Math.floor(ss/86400)
        let hour = Math.floor(ss/3600)
        let min = Math.floor(ss /60)
        let time = ''
        if(day >=1 && day<4){                    
            time=day+'天前'                      
        }
        else if(hour>=1 && hour <24){                         
            time=hour+'小时前'                         
        }
        else if(min>=1 && min < 60){                           
            time=min+'分钟前'                           
        }
        else if(day >= 4){                      
            time=sum                           
        }
        else{                          
            time='刚刚'
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
            <View style={{ width, alignItems: "center" }}>
                <View >
                    <Image style={{ width: width * 0.9, height: height * 0.25, borderRadius: 10 }} source={{ uri: "http://img.zjol.com.cn/mlf/dzw/zsw/tslm/newszt/202103/W020210326736746449498.jpg" }} />
                </View>
                <View style={{ marginTop: 10, width: width * 0.9 }} ><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", flexWrap: "wrap" }}>向世界一流强港攀登 探寻宁波舟山港的“硬核”力量</Text></View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙商话题</Text>
                    <Text style={{ fontSize: 10 }}>|2021-7-11</Text>
                </View>

                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >  　春暖花开，万物复苏。宁波舟山港向世界一流强港攀登步伐铿锵有力。一年来，宁波舟山港攻坚克难创优异，只争朝夕当硬核，不负嘱托建强港，交出了一张高分答卷。2020年，宁波舟山港完成货物吞吐量11.72亿吨，连续12年居全球港口首位；完成集装箱吞吐量2872万标准箱，蝉联全球第3。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} > 　　近日，记者蹲点宁波舟山港穿山港区，探寻总书记眼中的港口“硬核”力量。</Text>
                </View>
                <View style={{ marginBottom: 10, marginTop: 10 }}><Image style={{ width: width * 0.9, height: height * 0.2, borderRadius: 10 }} source={{ uri: "http://img.zjol.com.cn/mlf/dzw/zsw/zjjjbd/gdxw/202103/W020210326426880868165.jpg" }} /></View>
                {/* <View style={{width:width*0.9}} >
                    <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>重视实体经济 鼓劲民营经济</Text>
                </View> */}
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >　　“一年来，宁波舟山港攻坚克难创优异，只争朝夕当硬核，不负嘱托建强港，交出了一张高分答卷。”浙江省海港集团、宁波舟山港集团党委书记、董事长毛剑宏自豪地说，2020年，宁波舟山港完成货物吞吐量11.72亿吨，连续12年居全球港口首位；完成集装箱吞吐量2872万标准箱，蝉联全球第3。</Text>
                </View>

                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >　去年春天，习近平总书记来到宁波舟山港穿山港区，听取港区情况和复工复产情况汇报。彼时，疫情对港口集装箱业务冲击巨大。总书记希望宁波舟山港努力克服疫情影响，争取优异成绩，努力打造世界一流强港。</Text>
                </View>
                <View>
                    <Image style={{ width: width * 0.9, height: height * 0.45, borderRadius: 10 }} source={{ uri: "http://img.zjol.com.cn/mlf/dzw/zsw/zjjjbd/gdxw/202104/W020210401545894835181.jpg" }} />
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >宁波舟山港人牢记总书记的殷切嘱托，坚守“海上国门”，抢抓复工复产，全力保障物流供应链畅通，确保货物“出得去、进得来”。3月10日，由宁波舟山港自主研发的海港疫情防控数字化管控平台在港口主要生产和服务单位全面上线，与船代、边检、引航、调度等各个方面数据共享，自动把到港船舶按风险等级划分为红黄绿三色。疫情期间，在多个国家港口关闭、码头拥堵的情况下，海铁联运成为最有效的运输方式之一。去年4月，宁波舟山港铁路穿山港站启用，这个“千万级”集装箱码头整体接入海铁联运网络。记者蹲点时，正好碰到杭州萧山-宁波穿山点对点班列开通运营，穿山港站迎来“一天四列”运作模式。“今年，穿山港区定下的海铁联运箱量目标是30万标准箱，比去年翻两番多。”宁波北仑第三集装箱码头有限公司总经理方剑波说。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >“打造海铁联运示范港，发力双循环枢纽”，当前，宁波舟山港正在做强江海联运、海铁联运、海河联运等多式联运体系，其中海铁联运班列已增至19条，覆盖全国15个省市（自治区）、56个地级市。宁波舟山港还积极参与“义新欧”金华平台运营，2020年完成班列425列，成为拉近浙江与欧亚大陆经贸联系的重要纽带。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >　宁波舟山港覆盖近半个中国的海铁联运网络，为我国加快形成国内国际双循环相互促进的新发展格局提供了坚强的物流运输保障。2020年，该港内贸箱量同比增幅达18.3%。</Text>
                </View>
                <View>
                    <Image style={{ width: width * 0.9, height: height * 0.45, borderRadius: 10 }} source={{ uri: "http://img.zjol.com.cn/mlf/dzw/zsw/zjjjbd/gdxw/202104/W020210401537899975626.jpg" }} />
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >　　毛剑宏表示，“十四五”时期，宁波舟山港将紧紧围绕总书记提出的“四个一流”（一流设施、一流技术、一流管理、一流服务）的目标，打造世界一流的现代化枢纽港，世界一流的智慧、绿色、平安港口，世界一流的物流服务港，以及世界一流的一体化治理效能港，力争在2025年基本建成世界一流强港。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >    “浩渺行无极，扬帆但信风。”听，宁波舟山港建设世界一流强港的脚步如此铿锵有力！</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient colors={[global.mainColor, "#fff", "#fff"]} style={{flex:1}}>
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
                        <View style={{ width: 250, height: 40, backgroundColor: "#999", opacity: 0.4, marginLeft: 20, borderRadius: 20 }}>
                            <TextInput style={{ marginLeft: 20 }} placeholder="欢迎发表你的观点" onEndEditing={()=>{this.insert_pinglun(),Keyboard.dismiss(),this.textInput.clear()}} onChangeText={(send_pinglun)=>this.setState({send_pinglun})} 
                            ref={input => { this.textInput = input }} />
                        </View>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name={this.state.data.username===this.state.denglu_username?"star":"staro"} size={25} color={this.state.data.username===this.state.denglu_username?'yellow':global.mainColor} 
                                onPress={()=>this.shoucang()}/>
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
