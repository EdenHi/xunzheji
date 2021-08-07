import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get("window")

export default class Zs extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1}} colors={["#7cc0bf", "#fff", "#fff"]}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="sound" size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>
                
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ width ,alignItems: "center"}}>
                                {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={require("../photos/zsb1.jpeg")} /> */}
                                <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold" }}>浙江商帮为何能在明清时期就纷纷兴起？</Text>
                                <View style={{ flexDirection: "row", marginTop: 5 }}>
                                    <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙商话题</Text>
                                    <Text style={{ fontSize: 10 }}>|2021-7-30</Text>
                                </View>
                                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                                        明代中后期因为全国的交通条件得到了大幅的改善和发展。大规模的远航的商业活动和商品贩卖贩运开始，发展也从而推动了各地的商帮的兴起和发展。尤其是在明代，当时国家统一交通也便利幅员辽阔水路都非常的畅通，也是为大规模的商品的流通提供了非常便利的交通运输条件。我国古代的商帮的诞生，从刚开始的经商风气的形成到最后商品经济的发展一直是一个比较艰难而长久的过程。在封建社会的多种的因素合条件之下，明清时期各地的商帮开始先后形成。
                                    </Text>
                                </View>
                                <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={require("../photos/zsb3.jpeg")} />
                                <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={require("../photos/zsb1.jpeg")} />

                                <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>地域化的商帮兴起的背景</Text></View>
                                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center" }}>
                                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                                        商业想要发展，首先是要有交通的便利条件和经济发展水平。在明代中后期，当时的交通条件开始大为改观，水路的畅通有利于大规模的远距离的商品的贩运，这一变化也是促进着各地的商帮的兴起。当时的明代幅员辽阔，全国统一水路非常的畅通。
                                    </Text>
                                </View>
                                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                                        明朝更是为了利用贯通南北大运河来转输粮草。在后来的永乐年间，为了对付蒙古的设立，便于军队的往来和粮食的运输，更是修建了很多的道路。是北边与内地的交通更加的便利和畅通。从宿州通向西域的道路也是通过明朝的修筑，也开始变得畅通无阻。到了明朝中后期的时候，全国各地的水陆交通开始有十分大的改观。
                                    </Text>
                                </View>
                                <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={require("../photos/zsb2.jpeg")} />
                                <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9,alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                                        除此之外，当时商品经济生产发展和它的结构也是有利于商人进行群体集团的产生。在明代时期，当时的商业主要经营生产是棉布和丝绸等纺织品的经营。当时的棉花在全国进行种植，南北都是可以的，遍布全国。每年江南要从华北地区输入各种的原材料。当时可以向海内外输入大量丝绸的，只有江南，这就形成了江南丝绸，可以畅销于海内外的单向的一个商品流畅。也就形成了一种垄断垄断的方式。从而促进了商业群体的活动。加之当时的白银货币已经改变了当时的支付手段，提高了结算的效率，从而也就给商业大规模的流通带来了一种便利的条件，有利于商帮群体的产生。
                                    </Text>
                                </View>
                                <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", marginTop: 10 }}>浙东学派经商思想的影响</Text></View>
                                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5 }}>
                                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                                        在明清时期由黄宗羲开创的浙东学派。为当时的商品经济和学以致用的文化传统相结合的思想带来了非常成功的思想成果。当时的浙东文化当中的施工使用工商皆本的思想，也是孕育了当时浙江很大一批人强烈的经商意识
                                    </Text>
                                </View>
                                <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9,  alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                                    <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                                        传统的根深蒂固的重商思想开始慢慢的在这江浙地区延伸开来。也是成为了江浙地区有很多商帮兴起的原因之一。因为深厚的思想是民间经商的基础大大加深也使庞大的商人群体开始产生。当时在江浙地区经世致用思想已经成为了当时江浙人的一种集体无意识的人文精神。他强调个人个体能力公立还是注重实际成为了他们的主导思想。
                                    </Text>
                                </View>
                                <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={require("../photos/zsb4.jpeg")} />
                               
                            </View>


                            <View style={{width:width,flexDirection:"row",alignItems:"center",marginTop:"5%"}}>
                                <View style={{width:2,height:28,backgroundColor:"#7cc0c0",marginLeft:width*0.05}}></View>
                                <Text style={{fontSize:15,color:"#7cc0c0",marginLeft:"2%"}}>相关评论</Text>
                                
                            </View>
                            <View style={{width:width*0.9,marginBottom:'5%',marginLeft:width*0.05,backgroundColor:'#fff',borderRadius:15,elevation:5,marginTop:'2%'}}>
                                   <View style={{width:'100%',padding:10,}}>
                                    <View style={{width:"100%",flexDirection:'row',alignItems:'center'}}>
                                        <Image style={{width:width*0.08,height:width*0.08,backgroundColor:'pink',borderRadius:50}}></Image>
                                        <Text style={{fontSize:12,marginLeft:'2%',fontWeight:'bold'}}>涂生发液了吗</Text>
                                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1,  marginLeft: 5 ,marginLeft:"50%"}}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#000" }} name="heart-outlined" size={20} color="#000000" />
                        </TouchableOpacity>
                                    </View>
                                    <Text style={{fontSize:13,marginLeft:"11%"}}>浙江商人yyds</Text>
                                </View>
                                <View style={{width:'100%',padding:10,}}>
                                    <View style={{width:"100%",flexDirection:'row',alignItems:'center'}}>
                                        <Image style={{width:width*0.08,height:width*0.08,backgroundColor:'pink',borderRadius:50}}></Image>
                                        <Text style={{fontSize:12,marginLeft:'2%',fontWeight:'bold'}}>涂生发液了吗</Text>
                                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1,  marginLeft: 5 ,marginLeft:"50%"}}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#000" }} name="heart-outlined" size={20} color="#000000" />
                        </TouchableOpacity>
                                    </View>
                                    <Text style={{fontSize:13,marginLeft:"11%"}}>浙江商人yyds</Text>
                                </View>
                                <View style={{width:'100%',padding:10,}}>
                                    <View style={{width:"100%",flexDirection:'row',alignItems:'center'}}>
                                        <Image style={{width:width*0.08,height:width*0.08,backgroundColor:'pink',borderRadius:50}}></Image>
                                        <Text style={{fontSize:12,marginLeft:'2%',fontWeight:'bold'}}>涂生发液了吗</Text>
                                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1,  marginLeft: 5 ,marginLeft:"50%"}}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#000" }} name="heart-outlined" size={20} color="#000000" />
                        </TouchableOpacity>
                                    </View>
                                    <Text style={{fontSize:13,marginLeft:"11%"}}>浙江商人yyds</Text>
                                </View>
                                </View>   

                        </ScrollView>

               
                    <View style={{ width, height: height * 0.07, backgroundColor: "white", flexDirection: "row", alignItems: "center" }} >
                        <View style={{ width: 250, height: 40, backgroundColor: "#808080", opacity: 0.4, marginLeft: 20, borderRadius: 20 }}>
                            <TextInput style={{ marginLeft: 20 }} placeholder="欢迎发表你的观点" />
                        </View>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf", marginLeft: 5 }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#7cc0bf" }} name="heart-outlined" size={25} color="#000000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf" }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#7cc0bf" }} name="export" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
