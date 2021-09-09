import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput,AsyncStorage,FlatList,DeviceEventEmitter,Keyboard } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
                    <Image style={{ width: width * 0.9, height: height * 0.2, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3947839322,680992620&fm=26&fmt=auto&gp=0.jpg" }} />
                </View>
                <View style={{ marginTop: 10, width: width * 0.9 }} ><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center",flexWrap:"wrap" }}>全国最多！浙江七人入选全国非公有制经济人士“优秀建设者”公示名单</Text></View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙商话题</Text>
                    <Text style={{ fontSize: 10 }}>|2021-7-9</Text>
                </View>

                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >  　“非公有制经济人士”，指个体工商户、私营企业主、股份制公司中的自然人股东等群体中的代表性人物。在统一战线工作中，主要指私营企业主中的代表性人物。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} > 　7月31日，中央统战部网站公布了第五届全国非公有制经济人士优秀中国特色社会主义事业建设者人选名单向社会公示，雷军、丁磊、陶碧华等100人上榜。其实，表彰非公有制经济人士是中央统战部等国家部门联合举办的“传统节目”，第一次表彰在2004年，上一次是在2014年，每次都是100名候选人。时隔五年，这次表彰有何不同？非公经济代表为何能受到如此高规格的表彰？</Text>
                </View>
                <View style={{ marginBottom: 10, marginTop: 10 }}><Image style={{ width: width * 0.9, height: height * 0.2, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=299862045,605840038&fm=26&fmt=auto&gp=0.jpg" }} /></View>
                <View style={{width:width*0.9}} >
                    <Text style={{fontWeight:"bold",fontSize:15,textAlign:"center"}}>重视实体经济 鼓劲民营经济</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >　此次名单中的优秀经济人士主要分布在科技、金融、制造等领域，但没有以房地产为主业的企业人士上榜。而在5年前的上一届评选中，有多位以房地产为主业的企业人士上榜。对此，国家行政学院教授竹立家认为，出现这种变化可以从两个方面来看，一是这几年房地产市场不景气，很多房地产企业的业绩在下滑，另外，从目前国家鼓励的方向看，国家重点鼓励科技创新企业，而房地产并不是鼓励的方向。对非公有制经济人士进行表彰，是对民营企业和民营经济的充分肯定，更是在给民营企业家们加油打气。此次表彰，尤其突出了对以先进制造业为代表的实体经济的重视，显示出国家把振兴实体经济作为推动高质量发展着力点的决心。当前，中国非公有制经济人士数量已经过亿，民营经济撑起了中国经济“半壁江山”，在稳定增长、促进创新、增加就业、改善民生等方面发挥了重要作用。浙江更是民营经济大省，也是中国民营经济的重要发祥地。2018年，民营经济创造了浙江58.1%的税收、65.5%的生产总值、78.0%的外贸出口、87%的就业岗位、91.2%的企业数量——省统计局最新公布的2018年浙江民营经济“体检单”显示，我省民营经济持续保持良好发展态势。</Text>
                </View>
                <View>
                    <Image style={{ width: width * 0.8, height: height * 0.7, borderRadius: 10 ,marginHorizontal:width*0.05}} source={{ uri: "http://img.zjol.com.cn/mlf/dzw/zsw/tslm/zsgc/201908/W020190802730368377807.png" }} />
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >　本次浙江共有7名非公有制经济人士入选，比上届（第四届）获奖的6名增加了一名，是入围数最多的省份，超过广东、江苏的6名。他们分别是万向集团公司董事长兼首席执行官鲁伟鼎、网易（杭州）网络有限公司首席执行官丁磊、宁波杉杉股份有限公司董事局主席郑永刚、天能集团股份有限公司董事局主席兼总裁张天任、浙江润兰科技有限公司董事长秦旺仁增、华妹百货店负责人章华妹、浙江省公羊会公益救援促进会会长何军。鲁伟鼎、丁磊、郑永刚、张天任这几位大型民营企业的当家人，以及中国第一位个体工商户章华妹入选，并不让人意外。</Text>
                </View>
                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025 }} >但还有秦旺仁增、何军这两个公众可能不太熟悉的名字，也出现在了名单上。秦旺仁增是从云南香格里拉来到浙江这片创业热土的藏族小伙，经过15年从零开始的打拼，成为浙江润兰科技有限公司董事长，十多年来，秦旺仁增热衷慈善公益、反哺香格里拉，为汉藏民族友好交流作出了贡献。而何军是公益救助组织“公羊会”的创始人，是100位入选者中唯一来自社团组织的人士。而在第四届的6名中，除了知名浙商圣奥集团有限公司董事长倪良正，奥克斯集团有限公司董事长郑坚江，另外还有嘉兴市蓝驰光电科技有限公司董事长徐云明，浙江普农家电有限公司董事长蒋文标，长兴雉城金陵灯饰经营部经理胡大有，浙江天册律师事务所管理合伙人黄廉熙。查阅两届入围者的事迹，不难发现，他们之中，有敢为天下先，率领企业艰苦奋斗、开拓进取的；有以实业为本，秉持工匠精神的；有的自觉承担社会责任，积极参与公益慈善事业的。从他们的事迹中都能充分体现党对非公有制经济人士“爱国、敬业、诚信、守法、贡献”的要求。</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient colors={[global.back2, "#fff", "#fff"]} style={{flex:1}}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                        <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                            {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
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


                    <View style={{ width, height: height * 0.07, backgroundColor: "white", flexDirection: "row", alignItems: "center",justifyContent:'space-around' }} >
                        <View style={{ width: 250, height: 40, backgroundColor: "#999", opacity: 0.4, marginLeft: 20, borderRadius: 20 }}>
                            <TextInput style={{ marginLeft: 20 }} placeholder="欢迎发表你的观点" onEndEditing={()=>{this.insert_pinglun(),Keyboard.dismiss(),this.textInput.clear()}} onChangeText={(send_pinglun)=>this.setState({send_pinglun})} 
                            ref={input => { this.textInput = input }} />
                        </View>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.back2, marginLeft: 5,alignItems:'center',justifyContent:'center' }}>
                            <AntDesign name={this.state.data.username===this.state.denglu_username?"star":"staro"} size={25} color={this.state.data.username===this.state.denglu_username?'yellow':global.back2} 
                                onPress={()=>this.shoucang()}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.back2 }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: global.back2 }} name="export" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
