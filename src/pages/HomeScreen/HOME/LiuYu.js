import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Swiper from 'react-native-swiper'


const { width, height } = Dimensions.get("window")

export default class LiuYu extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#7cc0c0', '#fff', '#fff']}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} style={{}} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>浙商人物介绍</Text>
                    </View>
                    <View style={{ height: height * 0.81 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={{ flexDirection: "row", height: width * 0.56, marginHorizontal: width * 0.05, alignItems: "center" }}>
                                <Image style={{ width: width * 0.4, height: width * 0.5, borderRadius: 10 }} source={{ uri: 'https://img2.baidu.com/it/u=2370237403,3882944882&fm=26&fmt=auto&gp=0.jpg' }} />
                                <View>
                                    <View style={{ width: width * 0.5, marginLeft: 10 }}>
                                        <Text style={{ fontSize: 15, flexWrap: "wrap",lineHeight:25 }}>刘镛 （清代中晚期商人、南浔“四象”之首）</Text>
                                        <Text style={{ fontSize: 12, flexWrap: "wrap",lineHeight:25 }}>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text>
                                        <Text style={{ fontSize: 12, flexWrap: "wrap",lineHeight:25 }}>刘镛当过绵绸庄的学徒，邱启昌丝经行的伙计，与邢赓星合资创办正茂和恒顺丝经行。</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: width * 0.05 }}>
                                <View style={{ width: width * 0.9, borderWidth: 1, borderRadius: 10, borderColor: "#7cc0c0", borderStyle: "dashed" }}>
                                    <Text style={{ fontSize: 13, lineHeight: 25, marginVertical: width * 0.025, marginHorizontal: width * 0.025 }}>
                                        刘镛居南浔“四象”之首，据信资产达白银2000万两之多。光绪皇帝曾钦赐 “乐善好施”牌匾表彰其善行。因为刘家资产最为庞大，在“四象”中被称为“刘家的银子”。清末状元资本家张謇曾感慨地说：清咸同以来东南以富著称，“而能以风义自树立于当时者”，在浙江只有三人，即杭州的胡光墉（胡雪岩）、宁波的叶澄衷和南浔的刘镛。“在南浔，一天下之雄镇，已莫不闻刘氏”。
                                    </Text>
                                </View>
                                <View style={{ width: width * 0.9, borderWidth: 1, borderRadius: 10, borderColor: "#7cc0c0", borderStyle: "dashed" ,marginTop:10}}>
                                    <Text style={{ fontSize: 13, lineHeight: 25, marginVertical: width * 0.025, marginHorizontal: width * 0.025 }}>
                                        古今商家为了赢利发财、获大利发大财，自然非得精明到家，甚至几近刻薄不可，刘镛也不例外。不过，他又理性得可怕，深谙“富不过三代”的宿命性规律，深为少时读书太少而抱憾，认定“诗书簪绂”方是刘家发展的正确方向，便竭力鼓励儿孙读书求功名。但他不像一般的暴发户，不愿轻易捐官，最终只沾了个“通奉大夫”的称号，甚至对儿子刘锦藻也如此。如光绪二十年（1894年），刘锦藻赴礼部试，中第52名，以二甲进士观政工部。当时，国家军务正紧，急需军饷，有人以报效国家之说，劝刘锦藻乘机捐资，求取高官厚禄。刘锦藻心有所动，便向刘镛商议。刘镛此时却十分冷静，并不为有此机遇而心动，他劝告刘锦藻：“家门鼎盛，始愿不及此，吾方忧惧，汝犹未厌耶？祖泽虽厚，亦宜留有余以贻子孙，岂可自我享尽！吾但愿汝谦接物，谨慎持家，以永承祖德于不坠，不愿高官厚禄也。”刘锦藻听从父训，也就放弃了这次难得的机会。
                                    </Text>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ height: height * 0.12, backgroundColor: "#fff", width: width }}>
                        <TextInput style={{ width: width * 0.45, marginVertical: height * 0.015, height: height * 0.06, marginLeft: 20, borderRadius: 50, backgroundColor: "#7cc0c0" }} placeholder='  我要评论...' />
                    </View>

                </LinearGradient>
            </View>
        )
    }
}
