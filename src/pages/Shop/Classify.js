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
import list from './shoplist/shoplist.json';

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
             width:width*0.9,
             marginLeft:width*0.05,
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                        style={{
                           
                        }}>
                        <FontAwesome name={'angle-left'} size={25} color={'#fff'} />
                    </TouchableOpacity>
                    <View style={{  }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight:"bold",
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            color:"#fff",
                            marginLeft:"5%"
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
                            source={{uri:'https://img1.baidu.com/it/u=471631677,3527280070&fm=26&fmt=auto&gp=0.jpg'}}
                               >
                            </Image>
                            <Text style={{
                                fontSize: 15,
                                marginBottom: 5,
                                fontWeight: "bold",
                                color:"#333333"
                            }}>找寻记忆中的痕迹</Text>
                            <Text style={{
                                fontSize: 12,
                                marginBottom: 10,
                                color:"#333333"
                            }}>时间沉淀的美</Text>
                            <Text style={{textAlign:"center", color:"#333333"}}>——————————————————————————————</Text>
                        </View>
                        
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30}}>
                                <Text style={{ fontSize: 15, textAlign: "right" , color:"#333333"}}>美食</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>MEISHI</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[1].meishi[0].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>知味观</Text>
                                    <Text style={{ color:"#333333"}}>ZHIWEIGUAN</Text>
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
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[1].meishi[1].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>翠沁斋</Text>
                                    <Text style={{ color:"#333333"}}>CUIXINZHAI</Text>
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
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[1].meishi[2].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold" ,color:"#333333"}}>陈源昌</Text>
                                    <Text style={{ color:"#333333"}}>CHENYUANCHANG</Text>
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
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[1].meishi[3].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold",color:"#333333"}}>朱一堂</Text>
                                    <Text style={{ color:"#333333"}}>ZHUYITANG</Text>
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
                                <Text style={{letterSpacing:2, color:"#333333"}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                            <Text style={{textAlign:"center",marginTop:30, color:"#333333"}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" , color:"#333333"}}>制造</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>ZHIZAO</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[2].zhizao[0].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>张小泉</Text>
                                    <Text style={{ color:"#333333"}}>ZHANGXIAOQUAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[2].zhizao[1].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>毛源昌</Text>
                                    <Text style={{ color:"#333333"}}>MAOYUANCHANG</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[2].zhizao[2].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>邵芝岩</Text>
                                    <Text style={{ color:"#333333"}}>SHAOZHIYAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[2].zhizao[3].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>龙泉宝剑</Text>
                                    <Text style={{ color:"#333333"}}>LONGQUANBAOJIAN</Text>
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
                                <Text style={{letterSpacing:2, color:"#333333"}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                            <Text style={{textAlign:"center",marginTop:30, color:"#333333"}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30}}>
                                <Text style={{ fontSize: 15, textAlign: "right" , color:"#333333"}}>工美</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>GONGMEI</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                   navigation.navigate('Shoplist',{shops:list[3].gongmei[0].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>王星记</Text>
                                    <Text style={{ color:"#333333"}}>WANGXINGJI</Text>
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
                               onPress={()=>{
                                    navigation.navigate('Shoplist',{shops:list[3].gongmei[1].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>朱府铜艺</Text>
                                    <Text style={{ color:"#333333"}}>ZHUFUTONGYI</Text>
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
                               onPress={()=>{
                                 navigation.navigate('Shoplist',{shops:list[3].gongmei[2].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>善琏湖笔</Text>
                                    <Text style={{ color:"#333333"}}>SHANLIANHUBI</Text>
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
                               onPress={()=>{
                                navigation.navigate('Shoplist',{shops:list[3].gongmei[3].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>大竹元宣纸</Text>
                                    <Text style={{ color:"#333333"}}>DAZHUYUANXUANZHI</Text>
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
                                <Text style={{letterSpacing:2, color:"#333333"}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                            <Text style={{textAlign:"center",marginTop:30, color:"#333333"}}>——————————————————————————————</Text>
                        </View>
                        <View style={{ width: "92%" }}>
                            <View style={{ marginTop: 30, width: 130 }}>
                                <Text style={{ fontSize: 15, textAlign: "right" , color:"#333333"}}>茶酒</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>CHAJIU</Text>
                            </View>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                navigation.navigate('Shoplist',{shops:list[4].chajiu[0].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>益龙芳</Text>
                                    <Text style={{ color:"#333333"}}>YILONGFANG</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                navigation.navigate('Shoplist',{shops:list[4].chajiu[1].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>会稽山</Text>
                                    <Text style={{ color:"#333333"}}>KUAIJISHAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                navigation.navigate('Shoplist',{shops:list[4].chajiu[2].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>福茂和记</Text>
                                    <Text style={{ color:"#333333"}}>FUMAOHEJI</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                               activeOpacity={0.8}
                               onPress={()=>{
                                navigation.navigate('Shoplist',{shops:list[4].chajiu[3].shops})
                               }}
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
                                    <Text style={{fontSize:21,fontWeight:"bold", color:"#333333"}}>女儿红</Text>
                                    <Text style={{ color:"#333333"}}>NVERHONG</Text>
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
                                <Text style={{letterSpacing:2, color:"#333333"}}>查看更多</Text>
                                <AntDesign name={'caretright'} size={10} color={'#000'} />
                            </View></TouchableOpacity>
                         
                        </View>
                    </View>
                    <Text style={{textAlign:"center",marginTop:20,marginBottom:10, color:"#333333"}}>—————————————到底啦—————————————</Text>
                </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({



});
