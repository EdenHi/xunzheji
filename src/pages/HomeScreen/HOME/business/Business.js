import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import HuZhou from './HuZhou'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
            isLock: true,
            map:'http://47.100.78.254:3000/public/images/zhejiang1.png',
        }
    }
    jumpToTop(){
       this.scrollRef.scrollTo({y:0})
    }
    jumpToBottom(){
        this.scrollRef.scrollTo({y:135})
    }
    jumpToMid(){
        this.scrollRef.scrollTo({y:80})
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ width: width, height: "100%", alignItems: "center" }} colors={[global.mainColor, "#fff", "#fff"]} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} style={{       width:width*0.06,}} onPress={() => this.props.navigation.goBack()}>
                        <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85 }}>????????????</Text>
                    </View>
                    <View style={{ maxHeight: '40%', width: '90%', height: height * 0.4}}>
                        <ScrollView ref={ref => this.scrollRef = ref} onScroll={(e)=>console.log(e.nativeEvent.contentOffset.y)} style={{ width: '100%', height: '100%' }} showsVerticalScrollIndicator={false}>
                            <Image style={{ width: '100%', height: 300, borderRadius: 10 }} source={{ uri: this.state.map }}></Image>
                        </ScrollView>
                    </View>
                    {/* <View style={{ width: width * 0.9, alignItems: "center" }}>
                        <View style={{ width: width * 0.9, height: 100, borderWidth: 1, borderStyle: "dashed", borderRadius: 5, borderColor: global.mainColor, justifyContent: "center" }}><Text style={{ fontSize: 12, marginLeft: 7 }}>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</Text></View>
                    </View> */}
                    <View style={{ flex: 1, width }}>
                        <ScrollableTabView
                            renderTabBar={() => <SegmentTabBar />}
                            style={{ flex: 1, backgroundColor: 'white' }}
                            tabBarBackgroundColor="white"
                            tabBarInactiveTextColor="#494949"
                            tabBarActiveTextColor="#00A9F2"
                            tabBarUnderlineStyle={{ backgroundColor: '#00A9F2' }}
                            onChangeTab={(obj) => { console.log('??????????????????:' + obj.i)
                        if(obj.i==0){
                            this.setState({map:'http://47.100.78.254:3000/public/images/huzhou.png'})
                            this.jumpToTop();
                        }else if(obj.i==1){
                            this.setState({map:'http://47.100.78.254:3000/public/images/xiaoshao.png'})
                            this.jumpToTop();
                        }else if(obj.i==2){
                            this.setState({map:'http://47.100.78.254:3000/public/images/shaoxing.png'})
                            this.jumpToTop();
                        }else if(obj.i==3){
                            this.setState({map:'http://47.100.78.254:3000/public/images/ningbo.png'})
                            this.jumpToTop();
                        }else if(obj.i==4){
                            this.setState({map:'http://47.100.78.254:3000/public/images/longyou.png'})
                            this.jumpToMid();
                        }else if(obj.i==5){
                            this.setState({map:'http://47.100.78.254:3000/public/images/yiwu.png'})
                        }else if(obj.i==6){
                            this.setState({map:'http://47.100.78.254:3000/public/images/taizhou.png'})
                            this.jumpToMid();
                        }else if(obj.i==7){
                            this.setState({map:'http://47.100.78.254:3000/public/images/wenzhou.png'})
                            this.jumpToBottom();
                        }
                        }}
                        >
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={0} />
                            </ScrollView>
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={3} />
                            </ScrollView>
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={4} />
                            </ScrollView>
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={1} />
                            </ScrollView>
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={2} />
                            </ScrollView>
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={5} />
                            </ScrollView>
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={6} />
                            </ScrollView>
                            <ScrollView tabLabel='????????????' style={{ width: width * 1, height: 50, borderTopLeftRadius: 10, }} showsVerticalScrollIndicator={false}>
                                <HuZhou page={7} />
                            </ScrollView>
      
 
                        </ScrollableTabView>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
