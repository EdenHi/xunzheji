import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import ZuoPin from './ZuoPin'

const { width, height } = Dimensions.get("window")

export default class JieShao extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={["#7cc0c0", "#fff", "#fff"]}>
                    <View style={{ marginHorizontal: width * 0.05 , alignItems: "center"}}>
                        <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                            <TouchableOpacity activeOpacity={1} style={{}} onPress={() => this.props.navigation.goBack()}>
                                <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>主页</Text>
                        </View>
                      <ScrollView>
                      <View style={{alignItems:"center"}}>
                      <View>
                            <Image style={{ width: width * 0.2, height: width * 0.2, borderRadius: 100 }} source={{ uri: "https://img0.baidu.com/it/u=632352887,1110488995&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: "bold" ,marginTop:10}}>何士扬</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, fontWeight: "bold",marginTop:15}}>简介</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, lineHeight: 25,marginTop:10 }}>何士扬，中国美术学院教授，中国画学博士。 [1]  现任中国美术学院艺术鉴藏系主任，艺术鉴藏研究所主任，博士生导师，兼任中国人民大学文献书画保护与鉴定研究中心研究员、杭州佛学院首届佛教艺术硕士研究生导师、杭州国画院学术委员，中国美术家协会会员。 [2]  1981年毕业于福建工艺美术学校，1990年毕业于浙江美术学院中国画系，2009年获中国画理论与实践博士学位。1998年起任厦门大学美术系副主任，2002年调入中国美术学院任教至今。</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, lineHeight: 25, marginTop: 10 }}>何士扬在他的作品中展开了都市生活空间里年轻族群的形态、状态和姿态，用他的眼光带着我们迸入阳光灿烂的地带，看到新鲜的图景，也感受到都市的脉动。他的画在视觉反应上是直接的，在情调上是明快的，在心理上是健康的，这些看上去不复杂的特点集合在一起，就拉开了在都市主题上他与其他画家不同的面貌。在日下普遍沉郁、晦涩、萎靡的都市图像中，他的画是一种发拨。</Text>
                        </View>
                      </View>
                        <ZuoPin/>
                      </ScrollView>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
