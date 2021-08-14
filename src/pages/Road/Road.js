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
            // road1: false,
            // road2: true,
            // road3: true,
            // road4: true,
            // road5: true,
            // road6: true,
            // road7: true,
            // road8: true,
            // road9: true,
            // road10: true,
        }
    }

    // //获取token
    // get_shuju() {
    //     fetch('http://8.142.11.85:3000/shouye/get_map', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: this.props.route.params.username
    //         })

    //     }).then((response) => response.json())
    //         .then((json) => {
    //             console.log(json);
    //             this.setState({ road1: json[0].locks },)
    //             this.setState({ road2: json[2].locks },)
    //             this.setState({ road3: json[3].locks },)
    //             this.setState({ road4: json[4].locks },)
    //             this.setState({ road5: json[5].locks },)
    //             this.setState({ road6: json[6].locks },)
    //             this.setState({ road7: json[7].locks },)
    //             this.setState({ road8: json[8].locks },)
    //             this.setState({ road9: json[9].locks },)
    //             this.setState({ road10: json[2].locks },)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    //获取个人信息数据

    // componentDidMount() {
    //     console.log(this.state.username);
    //     this.getData();
    // }
    componentDidMount() {
        // this.get_shuju()
    }

    render() {

        return (
            // 最外面盒子
            <View style={{}}>
                <LinearGradient style={{ height: "100%", alignItems: "center" }} colors={["#7cc0bf", "#fff", "#fff"]} >
                    {/* 顶部导航栏 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>路线选择</Text>
                    </View>
                    <ScrollableTabView renderTabBar={() => <TabBar />}>
                        <ScrollView tabLabel='鸡毛换糖之路' style={{ width: width, flex: 0.8, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05 }}>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road1} roadNumber={1} roadname="南路" />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road2} roadNumber={2} roadname="中路"/>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road3} roadNumber={3} roadname="北路"/>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road4} roadNumber={4} />

                            </View>
                        </ScrollView>
                        <ScrollView tabLabel='常规路线' style={{ width: width, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05, }}>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road5} roadNumber={5} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road6} roadNumber={6} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road7} roadNumber={7} />

                            </View>
                        </ScrollView>
                        <ScrollView tabLabel='亚运路线' style={{ width: width, flex: 0.8, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05 }}>
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road8} roadNumber={8} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road9} roadNumber={9} />
                                <Locked navigation={this.props.navigation} username={this.state.username} isUnlock={this.state.road10} roadNumber={10} />

                            </View>
                        </ScrollView>
                    </ScrollableTabView>
                </LinearGradient>
            </View>
        );
    }
}
