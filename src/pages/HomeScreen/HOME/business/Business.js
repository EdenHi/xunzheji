import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import HuZhou from './HuZhou'
import SegmentTabBar from './SegmentTabBar'
import Swiper from 'react-native-swiper'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { width, height } = Dimensions.get("window")
const Tab = createMaterialTopTabNavigator();


export default class Business extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLock: true
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ width: width, height: "100%", alignItems: "center" }} colors={["#7cc0bf", "#fff", "#fff"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} style={{}} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>浙商人物介绍</Text>
                    </View>
                    <View style={{ width: width * 0.9, borderRadius: 10, overflow: 'hidden' }} ><Image style={{ width: width * 0.9, height: 200, borderRadius: 10 }} source={{ uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170919%2F2c789bc6b3f0419b960a3262b8b534da.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630580336&t=a23409bf6c8b0f290b45d5516562e73b" }} /></View>
                    {/* <View style={{ width: width * 0.9, alignItems: "center" }}>
                        <View style={{ width: width * 0.9, height: 100, borderWidth: 1, borderStyle: "dashed", borderRadius: 5, borderColor: "#7cc0c0", justifyContent: "center" }}><Text style={{ fontSize: 12, marginLeft: 7 }}>从古至今，浙江商人都是中国经济发展的重要推动力量。浙商，一般指浙江籍的商人，实业家的集合。浙商有湖州商帮，龙游商帮，宁波商帮，萧绍商帮，绍兴商帮（越商），温州商帮，台州商帮，义乌商帮等著名浙商群体。现代浙商已经是当仁不让的华夏第一商帮，台湾商界称之为“大陆之狼”，生存能力让全球感到震撼。</Text></View>
                    </View> */}
                    <View style={{ flex: 1, width }}>
                        <ScrollableTabView
                            renderTabBar={() => <SegmentTabBar />}
                            style={{ flex: 1, backgroundColor: 'white' }}
                            tabBarBackgroundColor="white"
                            tabBarInactiveTextColor="#494949"
                            tabBarActiveTextColor="#00A9F2"
                            tabBarUnderlineStyle={{ backgroundColor: '#00A9F2' }}
                        >
                            <ScrollView tabLabel='湖州商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='宁波商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='龙游商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='萧绍商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='绍兴商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='温州商人' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='义乌商人' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='台州商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                        </ScrollableTabView>
                        {/* <Tab.Navigator

                            tabBarOptions={{
                                activeTintColor: '#7196a8',
                                inactiveTintColor: 'gray',

                            }}
                        >
                            <Tab.Screen
                                name="湖州商帮" component={HuZhou}
                                options={{
                                    tabBarIcon: ({ color }) => (
                                        <AntDesign name='home' size={28} color={color} />
                                    ),
                                }}
                            />
                            <Tab.Screen

                                name="宁波商帮" component={HuZhou}
                                options={{
                                    tabBarIcon: ({ color }) => (
                                        <Ionicons name={'planet-outline'} size={28} color={color} />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name="龙游商帮" component={HuZhou}
                                options={{
                                    tabBarIcon: ({ color }) => (
                                        <Feather name={'shopping-bag'} size={26} color={color} />
                                    ),
                                }}
                            />
                            <Tab.Screen
                                name="萧绍商帮" component={HuZhou}
                                options={{
                                    tabBarIcon: ({ color }) => (
                                        <SimpleLineIcons name={'ghost'} size={24} color={color} />
                                    ),
                                }}
                            />
                             <Tab.Screen
                                name="绍兴商帮" component={HuZhou}
                                options={{
                                    tabBarIcon: ({ color }) => (
                                        <SimpleLineIcons name={'ghost'} size={24} color={color} />
                                    ),
                                }}
                            />
                             <Tab.Screen
                                name="温州商帮" component={HuZhou}
                                options={{
                                    tabBarIcon: ({ color }) => (
                                        <SimpleLineIcons name={'ghost'} size={24} color={color} />
                                    ),
                                }}
                            />
                             <Tab.Screen
                                name="义乌商帮" component={HuZhou}
                                options={{
                                    tabBarIcon: ({ color }) => (
                                        <SimpleLineIcons name={'ghost'} size={24} color={color} />
                                    ),
                                }}
                            />
                        </Tab.Navigator> */}
                        {/* <ScrollableTabView renderTabBar={() => <SegmentTabBar />}>
                            <ScrollView tabLabel='湖州商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='宁波商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='龙游商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='萧绍商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='绍兴商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='温州商人' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='义乌商人' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                            <ScrollView tabLabel='台州商帮' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou navigation={this.props.navigation} />
                            </ScrollView>
                        </ScrollableTabView> */}
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
