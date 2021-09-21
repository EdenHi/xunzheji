import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Dimensions ,ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import Min from './Min'
import Characters from './Characters'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import SegmentTabBar from './SenmentTabBar'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get("window")

export default class MinJia extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={["#fff", "#fff"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center",backgroundColor:global.mainColor}}>
                        <TouchableOpacity activeOpacity={1} style={{width:width*0.06}}>
                        <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                            {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85}}>名家定制</Text>
                    </View>
              
                         
                                <Min navigation={this.props.navigation}/>
                                
                                <ScrollableTabView renderTabBar={() => <SegmentTabBar />}>
                                    <ScrollView showsVerticalScrollIndicator={false} tabLabel='何士扬' >
                                        <Characters page={0}/>
                                    </ScrollView>
                                    <ScrollView showsVerticalScrollIndicator={false} tabLabel='范扬' >
                                        <Characters page={1}/>
                                    </ScrollView>
                                    <ScrollView showsVerticalScrollIndicator={false} tabLabel='霍春阳' >
                                        <Characters page={2}/>
                                    </ScrollView>
                                    <ScrollView showsVerticalScrollIndicator={false} tabLabel='程大利' >
                                        <Characters page={3}/>
                                    </ScrollView>
                                    <ScrollView showsVerticalScrollIndicator={false} tabLabel='邹平朝' >
                                        <Characters page={4}/>
                                    </ScrollView>
                                </ScrollableTabView>
               
                       
                </LinearGradient>
            </View>
        )
    }
}
