import { fromByteArray } from 'base64-js'
import React, { Component } from 'react'
import { View ,TouchableOpacity ,Image ,Dimensions ,Text, ImageBackground,FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'

const {width,height} = Dimensions.get("window")

export default class Heritage extends Component {
    render() {
        return (
            <View >
                <LinearGradient colors={['#7cc0c0', '#fff', '#fff']}>
                <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,width:width*0.9,marginLeft:width*0.05,justifyContent:"space-between"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",}}>浙商历史推荐</Text>
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
            </View> 
                 <View style={{marginTop:-5,alignItems:"center",height:height*0.95}}>
                     <ScrollView>
                         <View style={{alignItems:"center"}}>
                         <View style={{width,height:180,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                          <ImageBackground style={{width,height:180,flexDirection:"row",justifyContent:"space-between"}} source={require("../HomeScreen/photos/customs.gif")}>
                          </ImageBackground>
                     </View>
                         <View style={{backgroundColor:"#fff",marginTop:15,marginBottom:10,elevation:10}} >
                                <View style={{flexDirection:"row",borderRadius:5,backgroundColor:"#fff",alignItems:"center",height:120,width:width*0.95}}>
                                <Image style={{width:width*0.25,marginLeft:10,height:width*0.25,borderRadius:5}} source={require("../HomeScreen/photos/zs1.jpeg")}/>
                                   <View style={{marginLeft:10}}>
                                    <View><Text style={{fontSize:15}}>陆小华</Text></View>
                                    <View tyle={{marginTop:10}}><Text style={{fontSize:13}}>市级非遗传承人</Text></View>
                                    <View style={{flexDirection:"row",marginTop:25}}>
                                       <View style={{width:70,height:20,backgroundColor:"#7cc0c0",borderRadius:10,marginRight:10,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:13}}>五彩梁弄</Text></View>
                                     <View style={{width:70,height:20,backgroundColor:"#7cc0c0",borderRadius:10,marginRight:10,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:13}}>梁弄大糕</Text></View>
                                  </View>
                             </View>
                                </View>
                                 <View style={{width:width*0.95,height:120,backgroundColor:"#fff",borderRadius:5,justifyContent:"center"}}>
                                      <Text style={{marginLeft:15}}>我国非物质文化遗产研究领域的领军人物，民俗学博士，中国艺术研究院研究员、博士生导师。原国际亚细亚民俗学会副会长，中国分会会长，中国民间文艺家协会副主席、中国农业历史学会副理事长、中国人类学民族学学会民族遗产专业委员会主任。</Text>
                                 </View>
                         </View>
                         <View style={{width:width*0.95,height:40}}><Text style={{fontSize:15,fontWeight:"bold",margin:10}}>可定制项目</Text></View>
                         <View style={{marginTop:10,width:width*0.95,elevation:10}}>
                             <View style={{alignItems:"center"}}>
                                             <View style={{flexDirection:"row",backgroundColor:"#fff",borderRadius:10,alignItems:"center",height:150,elevation:10,marginBottom:10}}>
                                             <Image  style={{width:width*0.3,height:width*0.3,borderRadius:5,marginLeft:5}}  source={require("../HomeScreen/photos/customs4.jpeg")}/>
                                             <View style={{marginLeft:10}}>
                                                 <Text style={{width:width*0.3,height:width*0.05,fontSize:15,fontWeight:"bold",marginTop:15}}>梁弄大糕</Text>
                                                 <Text style={{width:width*0.6,height:width*0.3,flexWrap:"wrap"}}>梁弄大糕，余姚市梁弄镇的传统糕点、香甜柔糯、百尝不厌。其外形方正，上面有可食用红粉印的”恭喜发财”“吉祥如意”“福禄寿喜”等不同的字样，色彩鲜艳，既增添了美感，又增加了食欲。</Text>
                                             </View>
                                             </View>
                                             <View style={{flexDirection:"row",backgroundColor:"#fff",borderRadius:10,alignItems:"center",height:150,elevation:10,marginBottom:10}}>
                                             <Image  style={{width:width*0.3,height:width*0.3,borderRadius:5,marginLeft:5}}  source={require("../HomeScreen/photos/customs1.jpeg")}/>
                                             <View style={{marginLeft:10}}>
                                                 <Text style={{width:width*0.3,height:width*0.05,fontSize:15,fontWeight:"bold",marginTop:15}}>梁弄大糕</Text>
                                                 <Text style={{width:width*0.6,height:width*0.3,flexWrap:"wrap"}}>梁弄大糕，余姚市梁弄镇的传统糕点、香甜柔糯、百尝不厌。其外形方正，上面有可食用红粉印的”恭喜发财”“吉祥如意”“福禄寿喜”等不同的字样，色彩鲜艳，既增添了美感，又增加了食欲。</Text>
                                             </View>
                                             </View>
                                             <View style={{flexDirection:"row",backgroundColor:"#fff",borderRadius:10,alignItems:"center",height:150,elevation:10,marginBottom:10}}>
                                             <Image  style={{width:width*0.3,height:width*0.3,borderRadius:5,marginLeft:5}}  source={require("../HomeScreen/photos/customs3.jpg")}/>
                                             <View style={{marginLeft:10}}>
                                                 <Text style={{width:width*0.3,height:width*0.05,fontSize:15,fontWeight:"bold",marginTop:15}}>梁弄大糕</Text>
                                                 <Text style={{width:width*0.6,height:width*0.3,flexWrap:"wrap"}}>梁弄大糕，余姚市梁弄镇的传统糕点、香甜柔糯、百尝不厌。其外形方正，上面有可食用红粉印的”恭喜发财”“吉祥如意”“福禄寿喜”等不同的字样，色彩鲜艳，既增添了美感，又增加了食欲。</Text>
                                             </View>
                                             </View>
                                             <View style={{flexDirection:"row",backgroundColor:"#fff",borderRadius:10,alignItems:"center",height:150,elevation:10,marginBottom:10}}>
                                             <Image  style={{width:width*0.3,height:width*0.3,borderRadius:5,marginLeft:5}}  source={require("../HomeScreen/photos/customs2.jpeg")}/>
                                             <View style={{marginLeft:10}}>
                                                 <Text style={{width:width*0.3,height:width*0.05,fontSize:15,fontWeight:"bold",marginTop:15}}>梁弄大糕</Text>
                                                 <Text style={{width:width*0.6,height:width*0.3,flexWrap:"wrap"}}>梁弄大糕，余姚市梁弄镇的传统糕点、香甜柔糯、百尝不厌。其外形方正，上面有可食用红粉印的”恭喜发财”“吉祥如意”“福禄寿喜”等不同的字样，色彩鲜艳，既增添了美感，又增加了食欲。</Text>
                                             </View>
                                             </View>
                                     </View>
                                 </View>
                             </View>
                     </ScrollView>
                     <View style={{height:50,backgroundColor:"#fff",flexDirection:"row",width,alignItems:"center"}}>
                         <AntDesign name='customerservice' style={{marginLeft:20}} size={40} color='#7cc0c0'/>
                         <View style={{width:width*0.5,height:40,backgroundColor:"#7cc0c0",marginLeft:"20%",justifyContent:"center",alignItems:"center",borderRadius:20}}><Text style={{fontWeight:"bold",fontSize:18,color:"#fff"}}>下单定制</Text></View>
                     </View>
                 </View>
                </LinearGradient>
            </View>
        )
    }
}
