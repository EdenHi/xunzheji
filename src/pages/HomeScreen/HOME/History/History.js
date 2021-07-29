import React, { Component } from 'react'
import { TouchableOpacityBase, View ,TouchableOpacity ,Dimensions,Image,Text, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"


const {width, height} = Dimensions.get("window")


export default class History extends Component {
    render() {
        return ( 
         <View style={{flex:1}}>
            <View style={{flexDirection:"row",alignItems:"center",padding:10}}> 
              <TouchableOpacity style={{ width: width * 0.08, height: width * 0.08,color:"#7cc0bf"}}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#7cc0bf" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#7cc0bf",width:width*0.85}}>浙商历史推荐</Text>
              <View style={{backgroundColor:"#7cc0bf",width:2,height:28}}></View>
            </View> 
            <View style={{flex:1,alignItems:"center"}}>
                <ScrollView>
                <TouchableOpacity>
                        <View style={{width:width*0.95,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.95,height:150}} borderRadius={10} source={require("../../photos/history4.jpeg")}>
                            <View style={{marginLeft:10,marginTop:80}}><Text style={{color:"#fff",fontSize:15,fontWeight:"bold"}}>勇立潮头看浙商——40人说40年</Text></View>
                            <View style={{marginLeft:10,marginTop:20}}><Text style={{color:"#fff",fontSize:13}}>勇立潮头看浙商——40人说40年</Text></View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{width:width*0.95,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.95,height:150}} borderRadius={10} source={require("../../photos/history1.jpeg")}>
                            <View style={{marginLeft:10,marginTop:80}}><Text style={{color:"#fff",fontSize:15,fontWeight:"bold"}}>从"财富浙商"到"文化浙商":浙江文化的作用和方向</Text></View>
                            <View style={{marginLeft:10,marginTop:20}}><Text style={{color:"#fff",fontSize:13}}>#浙商话题</Text></View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{width:width*0.95,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.95,height:150}} borderRadius={10} source={require("../../photos/history2.jpeg")}>
                            <View style={{marginLeft:10,marginTop:80}}><Text style={{color:"#fff",fontSize:15,fontWeight:"bold"}}>勇立潮头看浙商——40人说40年</Text></View>
                            <View style={{marginLeft:10,marginTop:20}}><Text style={{color:"#fff",fontSize:13}}>#浙商话题</Text></View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{width:width*0.95,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.95,height:150}} borderRadius={10} source={require("../../photos/history3.jpeg")}>
                            <View style={{marginLeft:10,marginTop:80}}><Text style={{color:"#fff",fontSize:15,fontWeight:"bold"}}>浙商战“疫” “浙”精神熠熠闪光</Text></View>
                            <View style={{marginLeft:10,marginTop:20}}><Text style={{color:"#fff",fontSize:13}}>#浙商话题</Text></View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity>
                        <View style={{width:width*0.95,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.95,height:150}} borderRadius={10} source={require("../../photos/history1.jpeg")}>
                            <View style={{marginLeft:10,marginTop:80}}><Text style={{color:"#fff",fontSize:15,fontWeight:"bold"}}>勇立潮头看浙商——40人说40年</Text></View>
                            <View style={{marginLeft:10,marginTop:20}}><Text style={{color:"#fff",fontSize:13}}>勇立潮头看浙商——40人说40年</Text></View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
         </View>
        )
    }
}
