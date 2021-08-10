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
    Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient'
const {height,width} = Dimensions.get('window');


export default class Classify extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                  <LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0c0","#fff"]} >
                <View style={{
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                        style={{
                            width: 50,
                            position: "absolute",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            left: 0
                        }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{ width: 200 }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>老字号</Text>
                    </View>
                </View>
                <ScrollView style={{ }}>
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
                                borderRadius:15
                             
                            }}
                            source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F11%2F15%2Fdd426cf2d279dfe48cf199157b36223b.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630462120&t=54953bb503c9e2d1b7dee0dd6b92247d'}}
                               >
                            </Image>
                            <Text style={{
                                fontSize: 15,
                                marginBottom: 5,
                                fontWeight: "bold"
                            }}>找寻记忆中的痕迹</Text>
                            <Text style={{
                                fontSize: 12,
                                marginBottom: 10
                            }}>时间沉淀的美</Text>
                            <Text style={{textAlign:"center"}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>餐饮</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>CANYIN</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"木雕"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                            
                                }}
                                source={{uri:'https://bkimg.cdn.bcebos.com/pic/962bd40735fae6cd39f0056d09b30f2442a70f71?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'}}
                                    >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>楼外楼</Text>
                                    <Text>LOUWAILOU</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"石雕"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                   
                                }}
                                source={{uri:'https://bkimg.cdn.bcebos.com/pic/cb8065380cd7912302ff6a51a7345982b2b780fc?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>山外山</Text>
                                    <Text>SHANWAISHAN</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"铜雕"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                   
                                }}
                                source={{uri:'http://ywhz.hangzhou.com.cn/scms/images/2016-06/20/b8ac6f27a37c1904047c54.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>杭州酒家</Text>
                                    <Text>HANGZHOUJIUJIA</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"锡雕"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                 
                                }}
                                source={{uri:'http://5b0988e595225.cdn.sohucs.com/images/20171225/b937df7434dc43c8950c3531bec40b84.jpeg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>素春斋</Text>
                                    <Text>SUCHUNZHAI</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{title:"餐饮",dalei:"canyin",num:0})
                            }}
                            >
                            <View style={{width:"100%",
                            height:35,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View>
                            </TouchableOpacity>
                            <Text style={{textAlign:"center",marginTop:30}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30}}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>美食</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>MEISHI</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"越窑"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>知味观</Text>
                                    <Text>ZHIWEIGUAN</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                        
                                }}
                                source={{uri:'https://gd4.alicdn.com/imgextra/i4/2209861795974/O1CN01oQxYo61u08jlpRxZR_!!2209861795974.png_150x150.jpg_.webp'}}
                                   >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"婺州窑"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>翠沁斋</Text>
                                    <Text>CUIXINZHAI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                            
                                }}
                                source={{uri:'https://i.loli.net/2021/08/09/Jkbdoh3DIyeT9Lt.jpg'}}
                                    >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"龙泉窑"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>陈源昌</Text>
                                    <Text>CHENYUANCHANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                   
                                }}
                                source={{uri:'https://5b0988e595225.cdn.sohucs.com/images/20170927/2e0458795d5447f894722b23dbec8934.png'}}
                                   >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"南宋官窑"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "40%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>朱一堂</Text>
                                    <Text>ZHUYITANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                
                                }}
                                source={{uri:'https://img.alicdn.com/imgextra/i4/2206713410364/O1CN01FQyJjF1EYkrhmdzei_!!2206713410364.jpg_150x150q90.jpg'}}
                                   >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{title:"美食",dalei:"meishi",num:1})
                            }}
                            >
                            <View style={{width:"100%",
                            height:35,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                            <Text style={{textAlign:"center",marginTop:30}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>制造</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>ZHIZAO</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"绿茶"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                  
                                }}
                                source={{uri:'https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i1/2824527807/TB2fx64qr1YBuNjSszhXXcUsFXa_!!2824527807.jpg_150x150q90.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>张小泉</Text>
                                    <Text>ZHANGXIAOQUAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"云雾茶"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",

                                }}
                                source={{uri:'https://img.alicdn.com/imgextra/i2/1963505180/O1CN01Jody7q1o8UI4P01pc_!!1963505180.jpg_150x150q90.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>毛源昌</Text>
                                    <Text>MAOYUANCHANG</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"龙顶茶"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                        
                                }}
                                source={{uri:'https://bkimg.cdn.bcebos.com/pic/54fbb2fb43166d224da409d84b2309f79152d2ae?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>邵芝岩</Text>
                                    <Text>SHAOZHIYAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"白茶"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                   
                                }}
                                source={{uri:'http://www.dongtangdaojian.com/upload/slide/1617008727848519.jpg'}}
                                  >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>龙泉宝剑</Text>
                                    <Text>LONGQUANBAOJIAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{title:"制造",dalei:"zhizao",num:2})
                            }}
                            >
                            <View style={{width:"100%",
                            height:35,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                            <Text style={{textAlign:"center",marginTop:30}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30}}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>工美</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>GONGMEI</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"糕点"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>王星记</Text>
                                    <Text>WANGXINGJI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",

                                }}
                                source={{uri:'https://img.alicdn.com/imgextra/i4/2013831043/O1CN01mIGIni1JZjm48Xh9F_!!2013831043.jpg_150x150q90.jpg'}}
                                   >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"小食"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>朱府铜艺</Text>
                                    <Text>ZHUFUTONGYI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                  
                                }}
                                source={{uri:'https://img.alicdn.com/imgextra/i4/2211562091974/O1CN017uWHIr1QS8VtcLJJV_!!0-item_pic.jpg_160x160q90.jpg'}}
                                  >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"百味"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>善琏湖笔</Text>
                                    <Text>SHANLIANHUBI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                   
                                }}
                                source={{uri:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2928866662,1560677089&fm=199&app=68&f=JPEG?w=750&h=750&s=C1C09A464A67BADC54DDB59E03005082'}}
                                    >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"酒香"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent:"flex-end",
                                marginTop:40
                            }}>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>大竹元宣纸</Text>
                                    <Text>DAZHUYUANXUANZHI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                    
                                }}
                                source={{uri:'https://gd3.alicdn.com/imgextra/i3/692968394/O1CN01LrudIM2BsV919nDjU_!!692968394.jpg'}}
                                   >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{title:"工美",dalei:"gongmei",num:3})
                            }}
                            >
                            <View style={{width:"100%",
                            height:35,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                            <Text style={{textAlign:"center",marginTop:30}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" }}>茶酒</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>CHAJIU</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"纸品"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                              
                                }}
                                source={{uri:'https://img.alicdn.com/imgextra/i3/1665326773/O1CN01NyzYBR1zu54pkOOEX_!!0-item_pic.jpg_160x160q90.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>益龙芳</Text>
                                    <Text>YILONGFANG</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"日用"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                   
                                }}
                                source={{uri:'http://cdn.tjkximg.com/2020-03/20/11/32341423408.jpg'}}
                                    >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>会稽山</Text>
                                    <Text>KUAIJISHAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"饰品"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: "flex-end",
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                     
                                }}
                                source={{uri:'https://img11.360buyimg.com/n5/jfs/t1/122547/30/8206/772301/5f20e443E97c05633/ff633060c6add9c0.png'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>福茂和记</Text>
                                    <Text>FUMAOHEJI</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                            //    onPress={()=>{
                            //        navigation.navigate('Shoplist',{xiaolei:"文玩"})
                            //    }}
                               >
                            <View style={{
                                width: "100%",
                                height: 80,
                                flexDirection: 'row',
                                marginTop:40
                            }}>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                    
                                }}
                                source={{uri:'https://bkimg.cdn.bcebos.com/pic/a9d3fd1f4134970a304e02dde081c6c8a786c817f7a4?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>女儿红</Text>
                                    <Text>NVERHONG</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>{
                            navigation.navigate('Shopclassifymore',{title:"茶酒",dalei:"chajiu",num:4})
                            }}
                            >
                            <View style={{width:"100%",
                            height:35,
                            marginTop:40,
                            borderColor:'#000',
                            borderWidth:1,
                            borderRadius:6,
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"row"
                            }}>
                                <Text style={{letterSpacing:2}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                         
                        </View>
                    </View>
                    <Text style={{textAlign:"center",marginTop:20}}>—————————————到底啦—————————————</Text>
                </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({



});
