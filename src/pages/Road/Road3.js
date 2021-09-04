import React, { Component } from 'react';
import { ScrollView, View, Dimensions, TouchableOpacity, Text, Image, ImageBackground, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabBar from './TabBar'
import Locked from './locked';
const { height, width } = Dimensions.get('window');

export default class Road extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.route.params.username,

        }
    }


    componentDidMount() {
     console.log(this.props.route.params)
        // this.get_shuju()
    }

    render() {

        return (
            // 最外面盒子
            <View style={{}}>
                <LinearGradient style={{ height: "100%", alignItems: "center" }} colors={[global.back2, "#fff", "#fff"]} >
                    {/* 顶部导航栏 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>路线选择</Text>
                    </View>
                    <ScrollableTabView initialPage={2} renderTabBar={() => <TabBar />}

                    >

                   
                        <ScrollView tabLabel='糖担路线' style={{ width: width, flex: 0.8, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05 }}>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road1} roadNumber={1} roadname="鸡毛换糖-南路" />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road2} roadNumber={2} roadname="鸡毛换糖-中路"/>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road3} roadNumber={3} roadname="鸡毛换糖-北路"/>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road4} roadNumber={4} />
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel='亚运路线' style={{ width: width, flex: 0.8, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05 }}>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road8} roadNumber={8} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road9} roadNumber={9} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road10} roadNumber={10} />
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel='常规路线' style={{ width: width, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05, }}>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road5} roadNumber={5} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road6} roadNumber={6} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road7} roadNumber={7} />
                            </View>
                        </ScrollView>     
                    </ScrollableTabView>
                </LinearGradient>
            </View>
        );
    }
}
