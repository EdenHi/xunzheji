import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Dimensions ,ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import Min from './Min'
import Characters from './Characters'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import SegmentTabBar from './SenmentTabBar'


const { width, height } = Dimensions.get("window")

export default class MinJia extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={["#7cc0c0", "#fff", "#fff"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>名家定制</Text>
                    </View>
              
                         <ScrollView showsVerticalScrollIndicator={false}>
                            
                                <Min navigation={this.props.navigation}/>
                                <View style={{ height:height*1.37}}>
                                <ScrollableTabView renderTabBar={() => <SegmentTabBar />}>
                                    <View tabLabel='山水' >
                                        <Characters navigation={this.props.navigation}/>
                                    </View>
                                    <View tabLabel='人物' >
                                        <Characters navigation={this.props.navigation}/>
                                    </View>
                                    <View tabLabel='花鸟' >
                                        <Characters navigation={this.props.navigation}/>
                                    </View>
                                    <View tabLabel='简笔' >
                                        <Characters navigation={this.props.navigation}/>
                                    </View>
                                    <View tabLabel='素描' >
                                        <Characters navigation={this.props.navigation}/>
                                    </View>
                                </ScrollableTabView>
                </View>
                        </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}
