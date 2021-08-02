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
                                <Text style={{ fontSize: 15, textAlign: "right" }}>琢磨</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>ZHUOMO</Text>
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
                                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi02.c.aliimg.com%2Fimg%2Fibank%2F2013%2F752%2F854%2F907458257_415171204.jpg&refer=http%3A%2F%2Fi02.c.aliimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630460908&t=ed402682f64b634c08a8ab3207bfd8b1'}}
                                    >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>木雕</Text>
                                    <Text>MUDIAO</Text>
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
                                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1706%2F24%2Fc15%2F50872932_1498276162414.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630460984&t=4f09a6cfd2705c528d53d6372bf17eb8'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>石雕</Text>
                                    <Text>SHIDIAO</Text>
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
                                source={{uri:'https://img0.baidu.com/it/u=170547647,3731638159&fm=26&fmt=auto&gp=0.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>铜雕</Text>
                                    <Text>TONGDIAO</Text>
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
                                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.99114.com%2Fgroup10%2FM00%2FEC%2FAB%2FrBADsll3f-2Aa4x8AALp2muYpus154.jpg&refer=http%3A%2F%2Fimg2.99114.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630461084&t=94d6509dbd464395161a21ab38dd9d49'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>锡雕</Text>
                                    <Text>XIDIAO</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            // onPress={()=>{
                            // navigation.navigate('Shopclassifymore',{dalei:"琢磨",pinyin:"ZHUOMO"})
                            // }}
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
                                <Text style={{ fontSize: 15, textAlign: "right" }}>浴火</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>YUHUO</Text>
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>越窑</Text>
                                    <Text>YUEYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                        
                                }}
                                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.baiyewang.com%2Fimg2%2F5%2F231%2F263%2F11596763%2Fmsgpic%2Fb06d13e01aca21f64c1363917149441e.jpeg&refer=http%3A%2F%2Fimg1.baiyewang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630461234&t=c86decf3b0dd6062f55718fc934a3d0d'}}
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>婺州窑</Text>
                                    <Text>WUZHOUYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                            
                                }}
                                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cnarts.net%2Fuploadimages%2Fcweb%2Fnews%2F2017-08%2F2017-08-01%2F2017-08-01_173449167.jpg&refer=http%3A%2F%2Fwww.cnarts.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630461278&t=20541d4764fcb64877d1c51649391573'}}
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>龙泉窑</Text>
                                    <Text>LONGQUANYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                   
                                }}
                                source={{uri:'https://img0.baidu.com/it/u=1267995182,109654882&fm=26&fmt=auto&gp=0.jpg'}}
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>南宋官窑</Text>
                                    <Text>NANSONGGUANYAO</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                
                                }}
                                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages03%2F20200522%2F6be041acbbe94679bf41ce0e2913c32b.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630461366&t=44c2253a6a71a12e3b8c20dd5522fe42'}}
                                   >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            // onPress={()=>{
                            // navigation.navigate('Shopclassifymore',{dalei:"浴火",pinyin:"YUHUO"})
                            // }}
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
                                <Text style={{ fontSize: 15, textAlign: "right" }}>茶道</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>CHADAO</Text>
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
                                source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11955993823%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630461493&t=cd4abdbba0f6bdea86bdac6d4bc9e6d6'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>绿茶</Text>
                                    <Text>LVCHA</Text>
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
                                source={{uri:'https://img0.baidu.com/it/u=627907953,3160720599&fm=26&fmt=auto&gp=0.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>云雾茶</Text>
                                    <Text>YUNWUCHA</Text>
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
                                source={{uri:'https://img2.baidu.com/it/u=1451713448,2148349053&fm=26&fmt=auto&gp=0.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>龙顶茶</Text>
                                    <Text>LONGDINGCHA</Text>
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
                                source={{uri:'https://img1.baidu.com/it/u=1080152356,997627710&fm=26&fmt=auto&gp=0.jpg'}}
                                  >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>白茶</Text>
                                    <Text>BAICHA</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            // onPress={()=>{
                            // navigation.navigate('Shopclassifymore',{dalei:"茶道",pinyin:"CHADAO"})
                            // }}
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
                                <Text style={{ fontSize: 15, textAlign: "right" }}>珍馐</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>ZHENXIU</Text>
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>糕点</Text>
                                    <Text>GAODIAN</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",

                                }}
                                source={{uri:'https://img2.baidu.com/it/u=246454658,4211482516&fm=26&fmt=auto&gp=0.jpg'}}
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>小食</Text>
                                    <Text>XIAOSHI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                  
                                }}
                                source={{uri:'https://img0.baidu.com/it/u=1435364727,1957226847&fm=26&fmt=auto&gp=0.jpg'}}
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>百味</Text>
                                    <Text>BAIWEI</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                   
                                }}
                                source={{uri:'https://img1.baidu.com/it/u=1041960056,1050123122&fm=26&fmt=auto&gp=0.jpg'}}
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
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>酒香</Text>
                                    <Text>JIUXIANG</Text>
                                </View>
                                <Image style={{
                                    width: "33%",
                                    height: "100%",
                                    resizeMode: "stretch",
                                    
                                }}
                                source={{uri:'https://img2.baidu.com/it/u=614408143,3546105676&fm=26&fmt=auto&gp=0.jpg'}}
                                   >
                                </Image>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            // onPress={()=>{
                            // navigation.navigate('Shopclassifymore',{dalei:"珍馐",pinyin:"ZHENXIU"})
                            // }}
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
                                <Text style={{ fontSize: 15, textAlign: "right" }}>市井</Text>
                                <Text style={{ fontSize: 30, color: "#cfcfcf", textAlign: "right" }}>SHIJING</Text>
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
                                source={{uri:'https://img1.baidu.com/it/u=680122641,3399379399&fm=26&fmt=auto&gp=0.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>纸品</Text>
                                    <Text>ZHIPIN</Text>
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
                                source={{uri:'https://img2.baidu.com/it/u=489263191,2067368350&fm=26&fmt=auto&gp=0.jpg'}}
                                    >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>日用</Text>
                                    <Text>RIYONG</Text>
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
                                source={{uri:'https://img1.baidu.com/it/u=1712048449,4149674107&fm=26&fmt=auto&gp=0.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>饰品</Text>
                                    <Text>SHIPIN</Text>
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
                                source={{uri:'https://img2.baidu.com/it/u=2162118539,933757842&fm=26&fmt=auto&gp=0.jpg'}}
                                   >
                                </Image>
                                <View style={{
                                    width: "33%",
                                    height: "100%",
                                    justifyContent:'center',
                                    alignItems:"center"
                                }}>
                                    <Text style={{fontSize:21,fontWeight:"bold"}}>文玩</Text>
                                    <Text>WENWAN</Text>
                                </View>
                            </View></TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.8}
                            // onPress={()=>{
                            // navigation.navigate('Shopclassifymore',{dalei:"市井",pinyin:"SHIJING"})
                            // }}
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
