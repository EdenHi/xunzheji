import React, { Component } from 'react'
import { View,Text,StyleSheet,ScrollView,Image,Dimensions, ImageBackground, RefreshControl, TouchableOpacity} from 'react-native'
import Swiper from "react-native-swiper"
import Card from '../../../components/Card'
import AntDesign from "react-native-vector-icons/AntDesign"
import Characters from './Characters'
import ShiCha from './ShiCha'
const {width, height} = Dimensions.get("window")



export default class Home extends Component {
    render() {
        return (
            <View style={{flex:1,padding:10}}>
                <ScrollView >
                    <View style={{width:width*0.95,borderRadius:20}}>
                  <ShiCha/>
                    </View>
                     <View style={{width:width*0.95,height:480,backgroundColor:"#87ceeb",borderRadius:10,marginTop:10,elevation:10}} >
                         <View>
                         <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10}}><Text style={{marginTop:10,fontSize:20,fontWeight:"bold"}}>浙商历史推荐</Text><TouchableOpacity style={{ width: width * 0.08, height: width * 0.08,marginLeft: "60%" }}>
                             <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }} name="right" size={20} color="#000000" />
                             </TouchableOpacity></View> 
                               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                   <TouchableOpacity>
                                   <View style={{height:150,marginBottom:10,elevation:5,width:width*0.8,marginLeft:10,marginRight:10,elevation:10}}>
                                     <ImageBackground style={{height:150,marginBottom:10,width:width*0.8,marginRight:20}} borderRadius={10} source={require("../photos/zs1.jpeg")}>
                                       <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width*0.8}}>
                                           <View style={{flex:3,}}></View>
                                           <View style={{flex:2,}}><Text style={{fontSize:22,fontWeight:"bold",color:"#fff"}}>浙江商帮的崛起</Text></View>
                                           <View style={{flex:1,}}>
                                               <View style={{flexDirection:"row"}}>
                                                   <TouchableOpacity><View style={{borderRadius:5, marginRight:5,backgroundColor:"#ffffff"}}><Text>宁波商帮</Text></View></TouchableOpacity>
                                                   <TouchableOpacity><View style={{borderRadius:5, marginRight:5,backgroundColor:"#ffffff"}}><Text>龙游商帮</Text></View></TouchableOpacity>
                                                   <TouchableOpacity><View style={{borderRadius:5, marginRight:5,backgroundColor:"#ffffff"}}><Text>南浔商帮</Text></View></TouchableOpacity>
                                               </View>
                                           </View>
                                           
                                       </View>
                                     </ImageBackground>
                                     </View>
                                   </TouchableOpacity>
                                 <ImageBackground style={{height:150,marginBottom:10,width:width*0.8,marginRight:10}} borderRadius={10} source={require("../photos/travel4.jpeg")}>
                                       <View style={{height:150,borderRadius: 10,padding:15,width:width*0.8}}>
                                           <View style={{flex:3,}}></View>
                                           <View style={{flex:2,}}><Text style={{fontSize:22,fontWeight:"bold",color:"#fff"}}>浙江·温州</Text></View>
                                           <View style={{flex:1,}}><Text style={{fontSize:14,color:"#fff"}}>温州集山、江、海、湖、岛、泉之大成</Text></View>
                                           <View style={{flex:1,}}><Text style={{}}></Text></View>
                                       </View>
                                 </ImageBackground>
                                 <ImageBackground style={{height:150,marginBottom:10,width:width*0.8,marginRight:10}} borderRadius={10} source={require("../photos/travel4.jpeg")}>
                                       <View style={{height:150,borderRadius: 10,padding:15,width:width*0.8}}>
                                           <View style={{flex:3,}}></View>
                                           <View style={{flex:2,}}><Text style={{fontSize:22,fontWeight:"bold",color:"#fff"}}>浙江·温州</Text></View>
                                           <View style={{flex:1,}}><Text style={{fontSize:14,color:"#fff"}}>温州集山、江、海、湖、岛、泉之大成</Text></View>
                                           <View style={{flex:1,}}><Text style={{}}></Text></View>
                                       </View>
                                 </ImageBackground>
                                 </ScrollView>
                         </View>
                                 <View>
                                           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10}}><Text style={{fontSize:18}}>浙商必知丛书</Text><TouchableOpacity style={{ width: width * 0.08, height: width * 0.08,marginLeft: "60%" }}>
                                           <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }} name="right" size={20} color="#000000" /></TouchableOpacity></View>
                                           <View style={{flexDirection:"row",elevation:10}}>
                                               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                               <View style={{width:width*0.3 ,height:180,margin:10,borderColor:"#00000",borderWidth:0.5,elevation:15}}><Image style={{width:width*0.3,flex:1}} source={require("../photos/sj1.jpeg")}/></View>
                                               <View style={{width:width*0.3 ,height:180,margin:10,borderColor:"#00000",borderWidth:0.5,elevation:15}}><Image style={{width:width*0.3,flex:1}} source={require("../photos/sj2.jpg")}/></View>
                                               <View style={{width:width*0.3 ,height:180,margin:10,borderColor:"#00000",borderWidth:0.5,elevation:15}}><Image style={{width:width*0.3,flex:1}} source={require("../photos/sj3.jpeg")}/></View>
                                               <View style={{width:width*0.3 ,height:180,margin:10,borderColor:"#00000",borderWidth:0.5,elevation:15}}><Image style={{width:width*0.3,flex:1}} source={require("../photos/sj4.jpeg")}/></View>
                                               </ScrollView>
                                           </View>
                                 </View>
                     </View>



                    <View style={{height:400,backgroundColor:"#87ceeb",marginTop:10,marginBottom:10,borderRadius: 10,elevation:10,shadowRadius:10}}>
                      <Text style={{marginTop:10,marginLeft:10,fontSize:20,fontWeight:"bold"}}>重走鸡毛换糖之路</Text>
                         <TouchableOpacity>
                         <View style={{height:200,backgroundColor:"#f0ffff",justifyContent:"center",margin:10,borderRadius:10,padding:10,elevation:10}}>
                        <View style={{flexDirection:"row"}}>
                            <View><Image style={{height:80,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/jm2.jpeg")}/></View>
                            <View style={{}}>
                              <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>鸡毛换糖</Text>
                              <Text style={{color:"#000000",fontSize: 14,marginLeft:7,flexWrap:"wrap",width:width*0.53}}>       鸡毛换糖最著名的是义乌，义乌市场形成的历史就是鸡毛换糖的历史，是鸡毛换糖慢慢形成的！</Text>
                            </View>
                        </View>
                          <View ><Text style={{width:width*0.88,flexWrap:"wrap"}}>       鸡毛换糖是指在那个物资匮缺的年代，小商小贩走南闯北走街串巷，以红糖、草纸等低廉物品，换取居民家中的鸡毛等废品以获取微利。最早的鸡毛换糖，形成于我国的浙江省义乌地区，而最终，这一行为对地区经济和发展的促进作用得到认可，并发挥出巨大的积极作用。</Text></View>
                      </View>
                         </TouchableOpacity>
                      <View style={{height:120,backgroundColor:"#f0ffff",justifyContent:"center",margin:10,borderRadius: 10,padding:10,elevation:10}}>
                             <Swiper paginationStyle={{bottom:-12}} horizontal={true} autoplay autoplayTimeout={3} >
                                 <TouchableOpacity>
                                 <View style={{flexDirection:"row",backgroundColor:"#f0ffff",}}>
                                           <View><Image style={{height:100,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/jm1.jpeg")}/></View>
                                           <View style={{}}>
                                             <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>敲糖帮</Text>
                                             <Text style={{color:"#000000",fontSize: 12,marginLeft:10,flexWrap:"wrap",width:width*0.52}} >鸡毛换糖的人又被称为敲糖帮。从事鸡毛换糖的人多了久而久之就形成了一个群体，人们习惯于称他们“敲糖帮”，是从事鸡毛换糖的人的一个组织。</Text>
                                           </View>
                                   </View>
                                 </TouchableOpacity>
                                 <TouchableOpacity>
                                 <View style={{flexDirection:"row",backgroundColor:"#f0ffff",}}>
                                           <View><Image style={{height:100,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/jm5.jpeg")}/></View>
                                           <View style={{}}>
                                             <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>鸡毛换糖的路线</Text>
                                             <Text style={{color:"#000000",fontSize: 12,marginLeft:10,flexWrap:"wrap",width:width*0.52}} >最早的鸡毛换糖，形成于我国的浙江省义乌地区，而义乌最初的鸡毛换糖是从廿三里镇开始的...</Text>
                                           </View>
                                   </View>
                                 </TouchableOpacity>
                                 <TouchableOpacity>
                                 <View style={{flexDirection:"row",backgroundColor:"#f0ffff",}}>
                                           <View><Image style={{height:100,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/jm4.jpeg")}/></View>
                                           <View style={{}}>
                                             <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>鸡毛换糖的故事</Text>
                                             <Text style={{color:"#000000",fontSize: 12,marginLeft:10,flexWrap:"wrap",width:width*0.52}} numberOfLines={4}>听妈妈说，她儿时在家玩耍的时候，每次听到“拨浪鼓”的声音，都要高兴地往外跑。只见一个叔叔手摇着“拨浪鼓”，肩上挑着货郎担，嘴里大声吆喝着“鸡毛换糖喽……”</Text>
                                           </View>
                                   </View>
                                 </TouchableOpacity>
                             </Swiper>
                    </View>
                    </View>

                    <ScrollView horizontal={true} style={{height:width*0.5}} showsHorizontalScrollIndicator={false}>
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                    </ScrollView>
                    <View style={{height:420, backgroundColor:"#87ceeb", borderRadius: 10,elevation:10}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10}}><Text style={{marginTop:10,fontSize:20,fontWeight:"bold"}}>浙商人物介绍</Text><TouchableOpacity style={{ width: width * 0.08, height: width * 0.08,marginLeft: "60%" }}>
                             <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }} name="right" size={20} color="#000000" />
                             </TouchableOpacity></View> 
                        <View style={{alignItems:"center",marginTop:5}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{height:180,elevation:10,width:width*0.3, margin:10,marginTop:-10, borderRadius:10,alignItems:"center",padding:10}}>
                           <ImageBackground borderRadius={10} style={{height:180,width:width*0.3,}} source={require("../photos/blue.jpeg")}>
                                                <View style={{alignItems:"center",justifyContent:"center",}} > 
                                                    <Image style={{height:width*0.2, width:width*0.2, borderRadius:100,alignContent:"center",marginTop:10}} source={require("../photos/my.jpg")}/>
                                                    <Text style={{textAlign:"center",fontSize:20,width:width*0.2,marginTop:5}}>马云</Text>
                                                    <Text style={{textAlign:"center",fontSize:14,width,}}>阿里巴巴创始人</Text>
                                                    <TouchableOpacity style={{width:width*0.2,padding:5,backgroundColor:"#87ceeb",borderRadius:20,marginTop:5}}><Text style={{textAlign:"center",fontSize:12}}>详情</Text></TouchableOpacity>
                                                </View>
                            </ImageBackground>
                            </View>
                            <View style={{height:180,elevation:10,width:width*0.3, margin:10,marginTop:-10, borderRadius:10,alignItems:"center",padding:10}}>
                           <ImageBackground borderRadius={10} style={{height:180,width:width*0.3,}} source={require("../photos/blue.jpeg")}>
                                                <View style={{alignItems:"center",justifyContent:"center",}} > 
                                                    <Image style={{height:width*0.2, width:width*0.2, borderRadius:100,alignContent:"center",marginTop:10}} source={require("../photos/dinglei.jpeg")}/>
                                                    <Text style={{textAlign:"center",fontSize:20,width:width*0.2,marginTop:5}}>丁磊</Text>
                                                    <Text style={{textAlign:"center",fontSize:14,width,}}>网易公司创始人</Text>
                                                    <TouchableOpacity style={{width:width*0.2,padding:5,backgroundColor:"#87ceeb",borderRadius:20,marginTop:5}}><Text style={{textAlign:"center",fontSize:12}}>详情</Text></TouchableOpacity>
                                                </View>
                            </ImageBackground>
                            </View>
                            <View style={{height:180,elevation:10,width:width*0.3, margin:10,marginTop:-10, borderRadius:10,alignItems:"center",padding:10}}>
                           <ImageBackground borderRadius={10} style={{height:180,width:width*0.3,}} source={require("../photos/blue.jpeg")}>
                                                <View style={{alignItems:"center",justifyContent:"center",}} > 
                                                    <Image style={{height:width*0.2, width:width*0.2, borderRadius:100,alignContent:"center",marginTop:10}} source={require("../photos/rw3.jpeg")}/>
                                                    <Text style={{textAlign:"center",fontSize:20,width:width*0.2,marginTop:5}}>李书福</Text>
                                                    <Text style={{textAlign:"center",fontSize:14,width,}}>吉利集团创始人</Text>
                                                <TouchableOpacity style={{width:width*0.2,padding:5,backgroundColor:"#87ceeb",borderRadius:20,marginTop:5}}><Text style={{textAlign:"center",fontSize:12}}>详情</Text></TouchableOpacity>
                                                </View>
                            </ImageBackground>
                            </View>
                            
                                 <Characters/>
                                 <Characters/> 
                                 <Characters/>
                                 <Characters/>
                            </ScrollView>
                            
                            <View style={{height:150,width:width*0.9,backgroundColor:"#b0e0e6",marginTop:10,borderRadius:10,elevation:10,shadowRadius:100}}>
                            <Swiper showsPagination={false} horizontal={false} autoplay autoplayTimeout={5} >
                             <View style={{flex:1,height:150,width:width*0.9,backgroundColor:"#87cefa",padding:10,borderRadius:10,justifyContent:"space-around",elevation:10}}>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#6495ed",borderRadius:5,justifyContent:"center",alignItems:"center"}}><Text>浙财视点</Text></View>
                                         <Text style={{fontSize:14,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#6495ed",borderRadius:5,justifyContent:"center",alignItems:"center"}}><Text>浙财视点</Text></View>
                                         <Text style={{fontSize:14,marginLeft:15}}>杭城主流开发商全面介入文化产业</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#6495ed",borderRadius:5,justifyContent:"center",alignItems:"center"}}><Text>浙财视点</Text></View>
                                         <Text style={{fontSize:14,marginLeft:15}}>温商赵智强来杭合作建房四点疑问</Text>
                                     </View>
                                     </TouchableOpacity>
                             </View>  
                             <View style={{flex:1,height:150,width:width*0.9,backgroundColor:"#87cefa",padding:10,borderRadius:10,justifyContent:"space-around",elevation:10}}>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#6495ed",borderRadius:5,justifyContent:"center",alignItems:"center"}}><Text>浙财视点</Text></View>
                                         <Text style={{fontSize:14,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#6495ed",borderRadius:5,justifyContent:"center",alignItems:"center"}}><Text>浙财视点</Text></View>
                                         <Text style={{fontSize:14,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#6495ed",borderRadius:5,justifyContent:"center",alignItems:"center"}}><Text>浙财视点</Text></View>
                                         <Text style={{fontSize:14,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                             </View>
                             </Swiper> 
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    lb:{
        height:150,
        backgroundColor:"#00ffff",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 10,
    },
    fwrl:{
        height:150,
        backgroundColor:"#00ffff",
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10,
        borderRadius: 10,
    },
    htbox1:{
        height:30,
        fontSize:22,
    },
    htbox2:{
        height:30,
        fontSize:22,
    },
    zr2:{
        height:100,
        width:120,
        backgroundColor:"#00ffff",
        marginLeft:10,
        marginRight:10,
        borderRadius: 10,
    },
    zr3:{
        height:100,
        width:120,
        backgroundColor:"#00ffff",
        marginLeft:10,
        marginRight:10,
        borderRadius: 10,
    },
    zr4:{
        height:100,
        width:120,
        backgroundColor:"#00ffff",
        marginLeft:10,
        marginRight:10,
        borderRadius: 10,
    },
    zr5:{
        height:100,
        width:120,
        backgroundColor:"#00ffff",
        marginLeft:10,
        marginRight:10,
        borderRadius: 10,
    },
    item: {
        width:width - 60,
        height:width - 60,
        // backgroundColor:"red"
      },
      imageContainer: {
        width:width*0.6,
        height:width*0.4,
        backgroundColor: 'white',
        borderRadius: 8,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
})