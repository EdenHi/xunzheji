import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Dimensions, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import shoucang2 from './zhanshi2_geren/shoucang2';
import dianzan2 from './zhanshi2_geren/dianzan2';
import output2 from './zhanshi2_geren/output2';
import goods2 from './zhanshi2_geren/goods2';
import SegmentTabBar1 from './SegmentTabBar1'
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get("window")

export default class MyTop extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <View style={{height}} >
                <ScrollableTabView  renderTabBar={() => <SegmentTabBar1 />}>
                        <Output2/>
                        <Dianzan2 />
                        <Shoucang2 />
                        <Goods2 />
                </ScrollableTabView>
            </View>
        )
    }
}
