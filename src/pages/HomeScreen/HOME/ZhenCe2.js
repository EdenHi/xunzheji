import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, FlatList,AsyncStorage, Keyboard,TextInput,Share } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const { width, height } = Dimensions.get("window")

export default class ZhenCe2 extends Component {
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
                        wenzhang_id:16
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
                wenzhang_id:16
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
                wenzhang_id: 16,
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

    header(){
        return(
            <View style={{ width, marginHorizontal: width * 0.05 }}>
            {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{uri:'http://47.100.78.254:3000/public/images/zsb1.jpeg'}} /> */}
            <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold", width: width * 0.9, color: "#333" }}>浙江省出台计划推进文旅高质量发展</Text>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙江日报</Text>
                <Text style={{ fontSize: 10 }}>|2021-7-13</Text>
            </View>
            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;如今，家住杭州临安区的陈女士早已习惯了这样的文化生活——在杭州时去浙江图书馆借书，周末回家后将图书归还到临安图书馆。早在今年初，两家图书馆就实现了共享通借通还业务。不仅如此，在临安，文化馆、图书馆、博物馆样样俱全，连村里的文化礼堂都越来越有“文艺范儿”。未来5年里，陈女士还能在“15分钟品质文化生活圈”里享受到更丰富的公共文化资源。近日，省文化和旅游厅印发了《浙江省文化和旅游厅推进文化和旅游高质量发展促进共同富裕示范区建设行动计划（2021-2025年）》（下称《计划》）。《计划》提出，浙江将在“物质富裕、精神富有”上双向发力，到2025年基本建成新时代文化高地、中国最佳旅游目的地、全国文化和旅游融合发展样板地，为全国文化和旅游系统提供可复制、可推广的“浙江经验”。
                </Text>
            </View>
            {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb3.jpeg' }} />
                <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb1.jpeg' }} /> */}


            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;为推动公共文化服务现代化先行省的建成，《计划》提出了公共文化服务标准2.0版。首先在硬件设施上升级：每个市要有图书馆、文化馆、博物馆、非遗馆和美术馆，实现“市有五馆一院一厅，县有四馆一院，区有三馆，乡镇（街道）有综合文化站，村有农村文化礼堂”的全覆盖。文化设施建成后，如何发挥作用？省文化和旅游厅相关负责人告诉记者，在公共文化服务领域可以引入社会力量，如萧山的“文化管家”运营管理模式，让专业团队来代管、托管场所，为老百姓提供真正需要的服务。
                </Text>
            </View>
            <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>牵住“数智金融”牛鼻子</Text></View>
            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;《计划》还关注基层文艺队伍建设，要求推进乡村文艺团队“三团三社”（合唱团、民乐团、艺术团、文学社、摄影社、书画社）建设，到“十四五”末，“三团三社”数量从如今的3万余支增加到4万支。同时，开展文化示范户和乡村文化能人培育，提升乡村文化的造血功能。《计划》提出，“十四五”期间，浙江将实施促进居民收入十年倍增计划，努力成为旅游富民的省域范例。到2025年，旅游业对国民经济的综合贡献率达19%，农村居民的旅游收入占其可支配收入的比重达13%以上。
                </Text>
            </View>
            <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb2.jpeg' }} />
            <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;省文化和旅游厅提出，不仅要协调城乡均衡，还要促进区域协调发展，目标将地区人均文化和旅游总收入最高最低倍差缩小到2.1以下。为此，省文化和旅游厅等6部门此前印发了《关于加快推动山区26县旅游业高质量发展的意见》，提出到2025年，实现山区26县旅游总产出、游客总人次年均分别增长5%以上。
                </Text>
            </View>
            <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>统筹区域金融发展</Text></View>
            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;新兴金融中心如何布局？从空间上看，主要是“一城”“一湾”“四带”。“一城”即以杭州国际金融科技中心为龙头建设国际金融科技创新高地；“一湾”指以钱塘江金融港湾为核心打造财富管理高地；“四带”则是联动建设科创金融、绿色金融、普惠金融和开放金融四大特色带。空间布局覆盖全省，意味着浙江要统筹区域金融发展。据悉，截至目前我省已有湖州绿色金融改革创新试验区、衢州绿色金融改革创新试验区、宁波国家保险创新综合试验区、宁波普惠金融改革试验区等7个国务院批准的金融改革试验区，加上一批国家部委和省级试点，基本实现重点领域和关键环节全覆盖，居于全国领先。
                </Text>
            </View>
            <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                    &emsp;&emsp;在提升旅游品质的同时，还要丰富旅游业态。浙江争取把舟山、宁波等市列入中国邮轮旅游发展实验区，协调国际、国内邮轮线路延伸至浙江十大海岛公园和滨海景区景点，将邮轮游与海岛游相结合，积极探索海上绿水青山就是金山银山理念旅游转化路径。
                </Text>
            </View>
            
        </View>
        )
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

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "space-between", backgroundColor: global.mainColor }}>
                    <TouchableOpacity activeOpacity={1} style={{marginLeft:width*0.05}}>
                    <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
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
                    <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor , marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <AntDesign name={this.state.data.username === this.state.denglu_username ? "star" : "staro"} size={25} color={this.state.data.username === this.state.denglu_username ? 'yellow' : global.mainColor }
                            />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.onShare()}}style={{ width: width * 0.1, height: width * 0.1, color:global.mainColor }}>
                        <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: global.mainColor  }} name="export" size={25} color="#000000" />
                    </TouchableOpacity>
                    </View>

            </View>
        )
    }
}
