import React, { Component } from 'react'
import { View,Text,StyleSheet,Image,Dimensions, ImageBackground, BVLinearGradient,RefreshControl, TouchableOpacity} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"


const {width, height} = Dimensions.get("window")



export default class News extends Component {
    render() {
        return (
            <View>
                 <View style={{flexDirection:"row",alignItems:"center",padding:10}}> 
              <TouchableOpacity style={{ width: width * 0.08, height: width * 0.08,color:"#7cc0bf"}}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#7cc0bf" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#7cc0bf",width:width*0.85}}>浙商新闻</Text>
              <View style={{backgroundColor:"#7cc0bf",width:2,height:28}}></View>
            </View> 
                 <View style={{alignItems:"center"}}>
                     <FlatList 
                     data = {[
                        {Topic: '义乌小商品产业带等入选2020十大产业带 长三角占3席',name:'浙商新闻'},
                        {Topic: 'A股的“猪”飞上了天 下半年猪肉市场何去何从？',name:'浙商新闻'},
                        {Topic: '浙江43家企业上榜中国企业500强 民营企业有35家！',name:'浙商新闻'},
                        {Topic: '姜枣膏',name:'浙商新闻'},
                        {Topic: '姜枣膏',name:'浙商新闻'},
                        {Topic: '姜枣膏',name:'浙商新闻'},
                      ]}
                      renderItem = {({item})=>
                        <View>
                             <View style={{width:width*0.95,height:120,alignItems:"center",marginTop:10}}>
                         <TouchableOpacity>
                                 <View style={{flexDirection:"row",backgroundColor:"#fff",width:width*0.95,height:120,alignItems:"center",elevation:2,borderRadius:10}}>
                                           <View style={{}}>
                                             <Text style={{color:"#7cc0bf",fontSize: 15,fontWeight: 'bold',flexWrap:"wrap",marginLeft:10,width:width*0.6,height:50,marginTop:20}}>{item.Topic}</Text>
                                             <Text style={{color:"#000",fontSize: 13,marginLeft:10,flexWrap:"wrap",width:width*0.6,height:40,marginTop:20}} >{item.name}</Text>
                                           </View>
                                           <View><Image style={{height:100,width:width*0.3,borderRadius:10,marginLeft:0,alignItems:"center"}} source={require("../../photos/news1.jpeg")}/></View>
                                   </View>
                         </TouchableOpacity>
                         </View>
                         <View style={{width:width*0.95,height:120,alignItems:"center",marginTop:10}}>
                         <TouchableOpacity>
                                 <View style={{flexDirection:"row",backgroundColor:"#fff",width:width*0.95,height:120,alignItems:"center",elevation:2,borderRadius:10}}>
                                           <View style={{}}>
                                             <Text style={{color:"#7cc0bf",fontSize: 15,fontWeight: 'bold',flexWrap:"wrap",marginLeft:10,width:width*0.6,height:50,marginTop:20}}>{item.Topic}</Text>
                                             <Text style={{color:"#000",fontSize: 13,marginLeft:10,flexWrap:"wrap",width:width*0.6,height:40,marginTop:20}} >{item.name}</Text>
                                           </View>
                                           <View><Image style={{height:100,width:width*0.3,borderRadius:10,marginLeft:0,alignItems:"center"}} source={require("../../photos/news2.jpg")}/></View>
                                   </View>
                         </TouchableOpacity>
                         </View>
                         <View style={{width:width*0.95,height:120,alignItems:"center",marginTop:10}}>
                         <TouchableOpacity>
                                 <View style={{flexDirection:"row",backgroundColor:"#fff",width:width*0.95,height:120,alignItems:"center",elevation:2,borderRadius:10}}>
                                           <View style={{}}>
                                             <Text style={{color:"#7cc0bf",fontSize: 15,fontWeight: 'bold',flexWrap:"wrap",marginLeft:10,width:width*0.6,height:50,marginTop:20}}>{item.Topic}</Text>
                                             <Text style={{color:"#000",fontSize: 13,marginLeft:10,flexWrap:"wrap",width:width*0.6,height:40,marginTop:20}} >{item.name}</Text>
                                           </View>
                                           <View><Image style={{height:100,width:width*0.3,borderRadius:10,marginLeft:0,alignItems:"center"}} source={require("../../photos/news3.jpeg")}/></View>
                                   </View>
                         </TouchableOpacity>
                         </View>
                        </View>
                        }
                     />
                 </View>
            </View>
        )
    }
}
