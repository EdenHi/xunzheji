import React, { Component } from 'react'
import { View,Text,StyleSheet,ScrollView,Image,Dimensions, ImageBackground, RefreshControl} from 'react-native'
import Swiper from "react-native-swiper"
import Card from '../../../components/Card'
import Characters from './Characters'
import ShiCha from './ShiCha'
const {width, height} = Dimensions.get("window")



export default class Home extends Component {
    render() {
        return (
            <View style={styles.containter}>
                <ScrollView >
                    <View style={{width:width*0.95}}>
                  <ShiCha/>
                  </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ImageBackground style={{height:150,marginTop:10,marginBottom:10,width:width*0.8,marginRight:10}} borderRadius={10} source={require("../photos/travel4.jpeg")}>
                          <View style={{height:150,borderRadius: 10,padding:15,width:width*0.8}}>
                              <View style={{flex:3,}}></View>
                              <View style={{flex:2,}}><Text style={{fontSize:22,fontWeight:"bold",color:"#fff"}}>浙江·温州</Text></View>
                              <View style={{flex:1,}}><Text style={{fontSize:14,color:"#fff"}}>温州集山、江、海、湖、岛、泉之大成</Text></View>
                              <View style={{flex:1,}}><Text style={{}}></Text></View>
                          </View>
                    </ImageBackground>
                    <ImageBackground style={{height:150,marginTop:10,marginBottom:10,width:width*0.8,marginRight:10}} borderRadius={10} source={require("../photos/travel4.jpeg")}>
                          <View style={{height:150,borderRadius: 10,padding:15,width:width*0.8}}>
                              <View style={{flex:3,}}></View>
                              <View style={{flex:2,}}><Text style={{fontSize:22,fontWeight:"bold",color:"#fff"}}>浙江·温州</Text></View>
                              <View style={{flex:1,}}><Text style={{fontSize:14,color:"#fff"}}>温州集山、江、海、湖、岛、泉之大成</Text></View>
                              <View style={{flex:1,}}><Text style={{}}></Text></View>
                          </View>
                    </ImageBackground>
                    <ImageBackground style={{height:150,marginTop:10,marginBottom:10,width:width*0.8,marginRight:10}} borderRadius={10} source={require("../photos/travel4.jpeg")}>
                          <View style={{height:150,borderRadius: 10,padding:15,width:width*0.8}}>
                              <View style={{flex:3,}}></View>
                              <View style={{flex:2,}}><Text style={{fontSize:22,fontWeight:"bold",color:"#fff"}}>浙江·温州</Text></View>
                              <View style={{flex:1,}}><Text style={{fontSize:14,color:"#fff"}}>温州集山、江、海、湖、岛、泉之大成</Text></View>
                              <View style={{flex:1,}}><Text style={{}}></Text></View>
                          </View>
                    </ImageBackground>
                    </ScrollView>



                    <View style={{height:380,backgroundColor:"#1e90ff",marginTop:10,marginBottom:10,borderRadius: 10,}}>
                      <Text style={{marginTop:10,marginLeft:10,fontSize:20}}>专题</Text>
                      <View style={{height:200,backgroundColor:"#ffffff",justifyContent:"center",margin:10,borderRadius:10,padding:10}}>
                        <View style={{flexDirection:"row",}}>
                            <View><Image style={{height:80,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/travel1.jpeg")}/></View>
                            <View style={{}}>
                              <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>旅游胜地</Text>
                              <Text style={{color:"#000000",fontSize: 16,marginLeft:10,flexWrap:"wrap",width:width*0.6}} numberOfLines={2} >Hello Swiper,Hello Swiper,Hello Swiper</Text>
                              <Text style={{color:"#000000",fontSize: 14,marginLeft:10,marginTop:2}}>Hello Swiper</Text>
                            </View>
                        </View>
                          <View ><Text style={{width:width*0.9,flexWrap:"wrap"}}>夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。1786年，夏木尼的医生M.G.帕卡尔先生和水晶石采掘人巴尔玛首次登上了勃朗峰。</Text></View>
                      </View>
                      <View style={{height:100,backgroundColor:"#ffffff",justifyContent:"center",margin:10,borderRadius: 10,padding:10}}>
                             <Swiper paginationStyle={{bottom:-12}} horizontal={true} autoplay autoplayTimeout={3} >
                                   <View style={{flexDirection:"row",backgroundColor:"#fffafa",}}>
                                           <View><Image style={{height:80,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/travel1.jpeg")}/></View>
                                           <View style={{}}>
                                             <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>旅游胜地</Text>
                                             <Text style={{color:"#000000",fontSize: 16,marginLeft:10,flexWrap:"wrap",width:width*0.6}} numberOfLines={2} >Hello Swiper,Hello Swiper,Hello Swiper</Text>
                                             <Text style={{color:"#000000",fontSize: 14,marginLeft:10,marginTop:2}}>Hello Swiper</Text>
                                           </View>
                                   </View>
                                   <View style={{flexDirection:"row",backgroundColor:"#fffafa"}}>
                                           <View><Image style={{height:80,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/travel2.jpeg")}/></View>
                                           <View>
                                             <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>旅游胜地</Text>
                                             <Text style={{color:"#000000",fontSize: 16,marginLeft:10,flexWrap:"wrap",width:width*0.6}} numberOfLines={2} >Hello Swiper,Hello Swiper,Hello Swiper</Text>
                                             <Text style={{color:"#000000",fontSize: 14,marginLeft:10,marginTop:2}}>Hello Swiper</Text>
                                           </View>
                                   </View>
                                   <View style={{flexDirection:"row",backgroundColor:"#fffafa"}}>
                                           <View><Image style={{height:80,width:width*0.3,borderRadius:10,marginLeft:5,alignItems:"center"}} source={require("../photos/travel3.jpeg")}/></View>
                                           <View>
                                             <Text style={{color:"#f4a460",fontSize: 16,fontWeight: 'bold',marginLeft:10}}>旅游胜地</Text>
                                             <Text style={{color:"#000000",fontSize: 16,marginLeft:10,flexWrap:"wrap",width:width*0.6}} numberOfLines={2} >Hello Swiper,Hello Swiper,Hello Swiper</Text>
                                             <Text style={{color:"#000000",fontSize: 14,marginLeft:10,marginTop:2}}>Hello Swiper</Text>
                                           </View>
                                   </View>
                             </Swiper>
                    </View>
                    </View>

                    <ScrollView horizontal={true} style={{borderWidth:1,height:width*0.5}} showsHorizontalScrollIndicator={false}>
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
                    <View style={{height:400, backgroundColor:"#00bfff", borderRadius: 10,}}>
                        <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:10,paddingTop:10}}>浙商人物介绍</Text>
                        <View style={{alignItems:"center"}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                 <Characters/>
                                 <Characters/>
                                 <Characters/> 
                                 <Characters/>
                                 <Characters/>
                            </ScrollView>
                             <View style={{height:150,width:width*0.9,backgroundColor:"#f08080",margin:10,marginTop:10,padding:10,borderRadius:10,justifyContent:"space-around"}}>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#ffefd5",borderRadius:5}}></View>
                                         <Text style={{fontSize:16,marginLeft:15}}>河南省遭遇极端强降雨。</Text>
                                     </View>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#ffefd5",borderRadius:5}}></View>
                                         <Text style={{fontSize:16,marginLeft:15}}>河南省遭遇极端强降雨。</Text>
                                     </View>
                                     <View style={{flexDirection:"row",alignItems:"center"}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#ffefd5",borderRadius:5}}></View>
                                         <Text style={{fontSize:16,marginLeft:15}}>河南省遭遇极端强降雨。</Text>
                                     </View>
                             </View>    
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containter:{
        flex:1
    },
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