import React, { Component } from 'react'
import { Dimensions, View, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabBar from '../Road/TabBar'
import JiangRen from './WebView/JiangRen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get("window")

export default class Jiang extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex:1}}>
                <LinearGradient colors={[global.mainColor, "#fff", "#fff"]} style={{flex:1}}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width }}>
                        <TouchableOpacity style={{width:width*0.06,marginLeft:width*0.05}} activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                        <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                            {/* <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff", marginLeft: 10 }} name="left" size={20} color="#000000" /> */}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", textAlign: "center" }}>全部匠人</Text>
                    </View>


                                <View style={{ width: width * 0.95, borderRadius: 10, marginHorizontal: width * 0.025 }}>
                                    <Image style={{ width: width * 0.95, height: 150, borderRadius: 10 }} source={{ uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170920%2Ff955cac704834b7b9a11a76f591f46d3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630802028&t=aecfaf4f313f389cc34c8f036de4c7f7" }} />
                                </View>
                                <ScrollableTabView horizontal renderTabBar={() => <TabBar />}  >
                                    <JiangRen page={6} tabLabel='全部' />
                                    <JiangRen page={0} tabLabel='陶瓷器' />
                                    <JiangRen page={1} tabLabel='雕刻' />
                                    <JiangRen page={2} tabLabel='书画篆刻' />
                                    <JiangRen page={3} tabLabel='刺绣纺织' />
                                    <JiangRen page={4} tabLabel='文房用品' />
                                    <JiangRen page={5} tabLabel='印刷拓制' />
                                    <JiangRen page={7} tabLabel='工艺艺术' />
                                    <JiangRen page={8} tabLabel='木制工艺' />
                                    
                                </ScrollableTabView>


                </LinearGradient>
            </View>
        )
    }
}
