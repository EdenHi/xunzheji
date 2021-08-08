import React, { Component } from 'react'
import { Image, View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native'

const { width, height } = Dimensions.get("window")

export default class Characters extends Component {
    render() {
        
        return (
            <View style={{ alignItems: "center" ,flex:1}}>   
               <View style={{ flexDirection: "row",marginBottom:10, width: width * 0.9,height:height*0.17,backgroundColor:"#fff",elevation:5,borderRadius:10 ,alignItems:"center"}}>
                    <Image style={{ marginLeft:10,width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3157337665,3969843301&fm=26&fmt=auto&gp=0.jpg" }} />
                    <View style={{marginLeft:20}}>
                        <View style={{}}><Text style={{ fontSize: 15,fontWeight:"bold" }}>霍春阳 淡然标格</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>2010</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>镜心</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>45*42cm</Text></View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Zhan')}>
                        <View style={{ width:width*0.25,height:40,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#7cc0c0",marginLeft:"40%",marginTop:-20}}><Text style={{ fontSize: 15 }}>加入咨询</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row",marginBottom:10, width: width * 0.9,height:height*0.17,backgroundColor:"#fff",elevation:5,borderRadius:10 ,alignItems:"center"}}>
                    <Image style={{ marginLeft:10,width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3157337665,3969843301&fm=26&fmt=auto&gp=0.jpg" }} />
                    <View style={{marginLeft:20}}>
                        <View style={{}}><Text style={{ fontSize: 15,fontWeight:"bold" }}>霍春阳 淡然标格</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>2010</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>镜心</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>45*42cm</Text></View>
                        <TouchableOpacity activeOpacity={1}>
                        <View style={{ width:width*0.25,height:40,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#7cc0c0",marginLeft:"40%",marginTop:-20}}><Text style={{ fontSize: 15 }}>加入咨询</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row",marginBottom:10, width: width * 0.9,height:height*0.17,backgroundColor:"#fff",elevation:5,borderRadius:10 ,alignItems:"center"}}>
                    <Image style={{ marginLeft:10,width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3157337665,3969843301&fm=26&fmt=auto&gp=0.jpg" }} />
                    <View style={{marginLeft:20}}>
                        <View style={{}}><Text style={{ fontSize: 15,fontWeight:"bold" }}>霍春阳 淡然标格</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>2010</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>镜心</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>45*42cm</Text></View>
                        <TouchableOpacity activeOpacity={1}>
                        <View style={{ width:width*0.25,height:40,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#7cc0c0",marginLeft:"40%",marginTop:-20}}><Text style={{ fontSize: 15 }}>加入咨询</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row",marginBottom:10, width: width * 0.9,height:height*0.17,backgroundColor:"#fff",elevation:5,borderRadius:10 ,alignItems:"center"}}>
                    <Image style={{ marginLeft:10,width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3157337665,3969843301&fm=26&fmt=auto&gp=0.jpg" }} />
                    <View style={{marginLeft:20}}>
                        <View style={{}}><Text style={{ fontSize: 15,fontWeight:"bold" }}>霍春阳 淡然标格</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>2010</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>镜心</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>45*42cm</Text></View>
                        <TouchableOpacity activeOpacity={1}>
                        <View style={{ width:width*0.25,height:40,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#7cc0c0",marginLeft:"40%",marginTop:-20}}><Text style={{ fontSize: 15 }}>加入咨询</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row",marginBottom:10, width: width * 0.9,height:height*0.17,backgroundColor:"#fff",elevation:5,borderRadius:10 ,alignItems:"center"}}>
                    <Image style={{ marginLeft:10,width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3157337665,3969843301&fm=26&fmt=auto&gp=0.jpg" }} />
                    <View style={{marginLeft:20}}>
                        <View style={{}}><Text style={{ fontSize: 15,fontWeight:"bold" }}>霍春阳 淡然标格</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>2010</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>镜心</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>45*42cm</Text></View>
                        <TouchableOpacity activeOpacity={1}>
                        <View style={{ width:width*0.25,height:40,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#7cc0c0",marginLeft:"40%",marginTop:-20}}><Text style={{ fontSize: 15 }}>加入咨询</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row",marginBottom:10, width: width * 0.9,height:height*0.17,backgroundColor:"#fff",elevation:5,borderRadius:10 ,alignItems:"center"}}>
                    <Image style={{ marginLeft:10,width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3157337665,3969843301&fm=26&fmt=auto&gp=0.jpg" }} />
                    <View style={{marginLeft:20}}>
                        <View style={{}}><Text style={{ fontSize: 15,fontWeight:"bold" }}>霍春阳 淡然标格</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>2010</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>镜心</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>45*42cm</Text></View>
                        <TouchableOpacity activeOpacity={1}>
                        <View style={{ width:width*0.25,height:40,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#7cc0c0",marginLeft:"40%",marginTop:-20}}><Text style={{ fontSize: 15 }}>加入咨询</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row",marginBottom:10, width: width * 0.9,height:height*0.17,backgroundColor:"#fff",elevation:5,borderRadius:10 ,alignItems:"center"}}>
                    <Image style={{ marginLeft:10,width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img1.baidu.com/it/u=3157337665,3969843301&fm=26&fmt=auto&gp=0.jpg" }} />
                    <View style={{marginLeft:20}}>
                        <View style={{}}><Text style={{ fontSize: 15,fontWeight:"bold" }}>霍春阳 淡然标格</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>2010</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>镜心</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>45*42cm</Text></View>
                        <TouchableOpacity activeOpacity={1}>
                        <View style={{ width:width*0.25,height:40,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:10,borderColor:"#7cc0c0",marginLeft:"40%",marginTop:-20}}><Text style={{ fontSize: 15 }}>加入咨询</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>
        )
    }
}
