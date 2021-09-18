import React from 'react';
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    FlatList,
    ImageBackground,
    Animated,
    Surface,
    styleDict,
    Dimensions,
    Modal
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient'
const { height, width } = Dimensions.get('window');
import list from './shoplist/shoplist.json';
import Feather from 'react-native-vector-icons/Feather';


export default class Classify extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open:false
        }
    }

go_page(v){
    let scrollview = this.refs.scrollview;
    scrollview.scrollTo({y:v})
    this.setState({open:false})
}

    render() {
        const { navigation } = this.props;
        const {open} = this.state
        return (
            <View style={{ flex: 1 }}>
                
                <View style={{
                    height:height*0.07,
                
                    alignItems: "center",
                    flexDirection: 'row',
                    backgroundColor: global.mainColor
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                        style={{
                            marginLeft:width*0.05,
                            width:width*0.06,
                          
                        }}>
                  <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                    </TouchableOpacity>
                    <View style={{}}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            color: "#fff",
                            // marginLeft: "2%"
                        }}>老字号</Text>
                    </View>

                    <Feather name="menu" size={25} color="#fff" style={{ marginLeft:width*0.6 }} onPress={()=>this.setState({open:!open})} />
                    
                </View>
                
                    <ScrollView style={{backgroundColor:'#fff'}}
                    ref='scrollview'
                    >
                    <View style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        <View style={{ width: "92%" }}>
                            <Image style={{
                                width: "100%",
                                height: 200,
                                resizeMode: "stretch",
                                marginVertical: 10,
                                borderRadius: 15
                            }}
                                source={{ uri: 'https://img1.baidu.com/it/u=471631677,3527280070&fm=26&fmt=auto&gp=0.jpg' }}
                            >
                            </Image>
                            <Text style={{
                                fontSize: 15,
                                marginBottom: 5,
                                fontWeight: "bold",
                                color: "#333333"
                            }}>找寻记忆中的痕迹</Text>
                            <Text style={{
                                fontSize: 12,
                                marginBottom: 10,
                                color: "#333333"
                            }}>时间沉淀的美</Text>
                            <Text style={{ textAlign: "center", color: "#333333" }}>——————————————————————————————</Text>
                        </View>

                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30 }}>
                                <Text style={{ fontSize: 15, textAlign: "right", color: "#333333" }}>美食</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>MEISHI</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[1].meishi[0].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>知味观</Text>
                                        <Text style={{ color: "#333333" }}>ZHIWEIGUAN</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",
                                    }}
                                        source={{ uri: 'https://img0.baidu.com/it/u=2771862817,827489450&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[1].meishi[1].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>翠沁斋</Text>
                                        <Text style={{ color: "#333333" ,fontSize:12}}>CUIXINZHAI</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",
                                    }}
                                        source={{ uri: 'https://img1.baidu.com/it/u=2744198785,555913146&fm=15&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                </View>
                                </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[1].meishi[2].shops })
                                }}>
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "35%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>陈源昌</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>CHENYUANCHANG</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",
                                    }}
                                        source={{ uri: 'https://img1.baidu.com/it/u=4291292563,390012538&fm=15&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                </View>
                                </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[1].meishi[3].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "40%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>朱一堂</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>ZHUYITANG</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img1.baidu.com/it/u=4166172718,1436369128&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shopclassifymore', { title: "美食", dalei: "meishi", num: 1 })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 35,
                                    marginTop: 40,
                                    borderColor: '#000',
                                    borderWidth: 1,
                                    borderRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}>
                                    <Text style={{ letterSpacing: 2, color: "#333333" }}>查看更多</Text>
                                    <AntDesign name={'caretright'} size={10} color={'#000'} />
                                </View></TouchableOpacity>
                            <Text style={{ textAlign: "center", marginTop: 30, color: "#333333" }}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right", color: "#333333" }}>制造</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>ZHIZAO</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[2].zhizao[0].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img2.baidu.com/it/u=1659885032,1606410504&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>张小泉</Text>
                                        <Text style={{ color: "#333333" ,fontSize:12}}>ZHANGXIAOQUAN</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[2].zhizao[1].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img2.baidu.com/it/u=1168555010,2693026371&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>毛源昌</Text>
                                        <Text style={{ color: "#333333" ,fontSize:12}}>MAOYUANCHANG</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[2].zhizao[2].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img2.baidu.com/it/u=3475901486,700515096&fm=224&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>邵芝岩</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>SHAOZHIYAN</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[2].zhizao[3].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'http://www.dongtangdaojian.com/upload/slide/1617008727848519.jpg' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "40%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>龙泉宝剑</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>LONGQUANJIAN</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shopclassifymore', { title: "制造", dalei: "zhizao", num: 2 })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 35,
                                    marginTop: 40,
                                    borderColor: '#000',
                                    borderWidth: 1,
                                    borderRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}>
                                    <Text style={{ letterSpacing: 2, color: "#333333" }}>查看更多</Text>
                                    <AntDesign name={'caretright'} size={10} color={'#000'} />
                                </View></TouchableOpacity>
                            <Text style={{ textAlign: "center", marginTop: 30, color: "#333333" }}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30 }}>
                                <Text style={{ fontSize: 15, textAlign: "right", color: "#333333" }}>工美</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>GONGMEI</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[3].gongmei[0].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>王星记</Text>
                                        <Text style={{ color: "#333333" ,fontSize:12}}>WANGXINGJI</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img.alicdn.com/imgextra/i4/2013831043/O1CN01mIGIni1JZjm48Xh9F_!!2013831043.jpg_150x150q90.jpg' }}
                                    >
                                    </Image>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[3].gongmei[1].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>朱府铜艺</Text>
                                        <Text style={{ color: "#333333" ,fontSize:12}}>ZHUFUTONGYI</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img.alicdn.com/imgextra/i4/2211562091974/O1CN017uWHIr1QS8VtcLJJV_!!0-item_pic.jpg_160x160q90.jpg' }}
                                    >
                                    </Image>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[3].gongmei[2].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>善琏湖笔</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>SHANLIANHUBI</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img1.baidu.com/it/u=387739303,4073643355&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[3].gongmei[3].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>大竹元宣纸</Text>
                                        <Text style={{ color: "#333333" ,fontSize:12}}>ZHUYUANXUANZHI</Text>
                                    </View>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://gd3.alicdn.com/imgextra/i3/692968394/O1CN01LrudIM2BsV919nDjU_!!692968394.jpg' }}
                                    >
                                    </Image>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shopclassifymore', { title: "工美", dalei: "gongmei", num: 3 })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 35,
                                    marginTop: 40,
                                    borderColor: '#000',
                                    borderWidth: 1,
                                    borderRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}>
                                    <Text style={{ letterSpacing: 2, color: "#333333" }}>查看更多</Text>
                                    <AntDesign name={'caretright'} size={10} color={'#000'} />
                                </View></TouchableOpacity>
                            <Text style={{ textAlign: "center", marginTop: 30, color: "#333333" }}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right", color: "#333333" }}>茶酒</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>CHAJIU</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[4].chajiu[0].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img0.baidu.com/it/u=3800688749,1973575253&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>益龙芳</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>YILONGFANG</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[4].chajiu[1].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'http://t15.baidu.com/it/u=3783287515,616337126&fm=224&app=112&f=JPEG?w=500&h=500&s=51B22D77414572EE55E811670300F060' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>会稽山</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>KUAIJISHAN</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[4].chajiu[2].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    justifyContent: "flex-end",
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img0.baidu.com/it/u=3570631131,1894223410&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>福茂和记</Text>
                                        <Text style={{ color: "#333333",fontSize:12 }}>FUMAOHEJI</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shoplist', { shops: list[4].chajiu[3].shops })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 80,
                                    flexDirection: 'row',
                                    marginTop: 40
                                }}>
                                    <Image style={{
                                        width: "33%",
                                        height: "100%",
                                        resizeMode: "stretch",

                                    }}
                                        source={{ uri: 'https://img2.baidu.com/it/u=457761160,2218826170&fm=26&fmt=auto&gp=0.jpg' }}
                                    >
                                    </Image>
                                    <View style={{
                                        width: "33%",
                                        height: "100%",
                                        justifyContent: 'center',
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 21, fontWeight: "bold", color: "#333333" }}>女儿红</Text>
                                        <Text style={{ color: "#333333" ,fontSize:12}}>NVERHONG</Text>
                                    </View>
                                </View></TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('Shopclassifymore', { title: "茶酒", dalei: "chajiu", num: 4 })
                                }}
                            >
                                <View style={{
                                    width: "100%",
                                    height: 35,
                                    marginTop: 40,
                                    borderColor: '#000',
                                    borderWidth: 1,
                                    borderRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}>
                                    <Text style={{ letterSpacing: 2, color: "#333333" }}>查看更多</Text>
                                    <AntDesign name={'caretright'} size={10} color={'#000'} />
                                </View></TouchableOpacity>

                        </View>
                    </View>
                    <Text style={{ textAlign: "center", marginTop: 20, marginBottom: 10, color: "#333333",textDecorationLine:'underline',width:'100%'}}>到底啦</Text>
                    <Text style={{  color: "#333333",width:'100%',borderWidth:0.5,borderStyle:'dashed',borderRadius:5,marginTop:height*-0.01}}></Text>
                </ScrollView>
           
                <Modal
                transparent={true}
                visible={open}
                onRequestClose={() => {
                  this.setState({open:!open});
                }}>
                    <TouchableOpacity style={{flex:1,alignItems:'flex-end',marginTop:height*0.06,borderRadius:10,marginRight:15}} activeOpacity={1} onPress={()=>this.setState({open:!open})}>
                        <View style={{backgroundColor:'#000',width:width*0.2,borderRadius:10,alignItems:'center'}}>
                            <Text style={styles.box} onPress={()=>this.go_page(280)}>美食</Text>
                            <Text style={styles.box} onPress={()=>this.go_page(976)}>制造</Text>
                            <Text style={styles.box} onPress={()=>this.go_page(1670)}>工美</Text>
                            <Text style={[styles.box,{marginBottom:10}]} onPress={()=>this.go_page(2363)}>茶酒</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
           
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        marginTop:10,
        color:'#fff'
    }


});
