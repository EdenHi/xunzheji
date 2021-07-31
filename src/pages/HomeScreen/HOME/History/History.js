import React, { Component } from 'react'
import { TouchableOpacityBase, View ,TouchableOpacity ,Dimensions,Image,Text, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
const {width, height} = Dimensions.get("window")
export default class History extends Component {
    render() {
        return ( 
         <View style={{}}>
              <LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0bf","#fff","#fff"]} >
            <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",width:width*0.85,marginLeft:"2%"}}>浙商历史推荐</Text>
            </View> 
                <ScrollView>
                <View style={{width:width,alignItems:"center"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} activeOpacity={1}>
                        <View style={{width:width*0.9,height:150,borderRadius:10,elevation:2,shadowRadius:5}}>
                            <ImageBackground style={{width:width*0.9,height:150}} borderRadius={10} source={require("../../photos/history4.jpeg")}>
                                <View style={{width:"65%",height:"40%",backgroundColor:"rgba(255,255,255,0.6)",marginTop:"20%",borderTopRightRadius:30,borderBottomRightRadius:30}}>
                               <Text style={{color:"#000",fontSize:15,fontWeight:"bold",marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商</Text>
                            <Text style={{color:"#000",fontSize:13,marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商——40人说40年</Text>
                                </View>
                      
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} activeOpacity={1}>
                        <View style={{width:width*0.9,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.9,height:150}} borderRadius={10} source={require("../../photos/history1.jpeg")}>
                            <View style={{width:"65%",height:"40%",backgroundColor:"rgba(255,255,255,0.6)",marginTop:"20%",borderTopRightRadius:30,borderBottomRightRadius:30}}>
                               <Text style={{color:"#000",fontSize:15,fontWeight:"bold",marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商</Text>
                            <Text style={{color:"#000",fontSize:13,marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商——40人说40年</Text>
                                </View></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} activeOpacity={1}>
                        <View style={{width:width*0.9,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.9,height:150}} borderRadius={10} source={require("../../photos/history2.jpeg")}>
                            <View style={{width:"65%",height:"40%",backgroundColor:"rgba(255,255,255,0.6)",marginTop:"20%",borderTopRightRadius:30,borderBottomRightRadius:30}}>
                               <Text style={{color:"#000",fontSize:15,fontWeight:"bold",marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商</Text>
                            <Text style={{color:"#000",fontSize:13,marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商——40人说40年</Text>
                                </View></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} activeOpacity={1}>
                        <View style={{width:width*0.9,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.9,height:150}} borderRadius={10} source={require("../../photos/history3.jpeg")}>
                            <View style={{width:"65%",height:"40%",backgroundColor:"rgba(255,255,255,0.6)",marginTop:"20%",borderTopRightRadius:30,borderBottomRightRadius:30}}>
                               <Text style={{color:"#000",fontSize:15,fontWeight:"bold",marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商</Text>
                            <Text style={{color:"#000",fontSize:13,marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商——40人说40年</Text>
                                </View></ImageBackground>
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} activeOpacity={1}>
                        <View style={{width:width*0.9,height:150,borderRadius:10,elevation:2,shadowRadius:5,marginTop:10}}>
                            <ImageBackground style={{width:width*0.9,height:150}} borderRadius={10} source={require("../../photos/history1.jpeg")}>
                            <View style={{width:"65%",height:"40%",backgroundColor:"rgba(255,255,255,0.6)",marginTop:"20%",borderTopRightRadius:30,borderBottomRightRadius:30}}>
                               <Text style={{color:"#000",fontSize:15,fontWeight:"bold",marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商</Text>
                            <Text style={{color:"#000",fontSize:13,marginLeft:"2%",marginTop:"2%"}}>勇立潮头看浙商——40人说40年</Text>
                                </View></ImageBackground>
                        </View>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            {/* </View> */}
            </LinearGradient>
         </View>
        )
    }
}
