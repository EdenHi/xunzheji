import React, { Component } from 'react';
import { ScrollView, View, Dimensions, TouchableOpacity, Text, Image, ImageBackground,AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabBar from './TabBar'
import Locked from './locked';
const { height, width } = Dimensions.get('window');
export default class Road extends Component {
    constructor(props){
        super(props)
        this.state={
            isLock:true,
            username:''
        }
    }
      //获取个人信息数据
  get_shuju() {
    AsyncStorage.getItem('username', (error, result) => {
      if (!error) {
        this.setState({
          username: result,
        });
        console.log('username', result);
       
      } else {
        console.log('获取数据失败', error);
      }
    });
  }
  componentDidMount(){
      this.get_shuju()
  }
    render() {
        
        return (
            // 最外面盒子
            <View style={{ }}>
                <LinearGradient style={{ height: "100%", alignItems: "center" }} colors={["#7cc0bf", "#fff", "#fff"]} >
                    {/* 顶部导航栏 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>路线选择</Text>
                    </View>
                    <ScrollableTabView renderTabBar={() => <TabBar />}>
                        <ScrollView tabLabel='西湖路线' style={{ width: width,flex: 0.8, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width:width*0.9,marginLeft:width*0.05}}>
                                {/* 卡片解锁后展开界面 */}
                                <Locked isUnlock={false} navigation={this.props.navigation} road={1} username={this.state.username}/>
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation} road={2}/>
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation } road={3}/>
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation} road={4}/>
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel='常规路线' style={{ width: width,  borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{width:width*0.9,marginLeft:width*0.05,}}>
                                {/* 卡片解锁后展开界面 */}
                                {/* 卡片未解锁界面 */}
                                    <Locked navigation={this.props.navigation} road={5}/>
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation} road={6}/>
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation} road={7}/>
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel='亚运路线' style={{width: width, flex: 0.8, borderColor: 'red', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} showsVerticalScrollIndicator={false}>
                            <View style={{ width:width*0.9, marginLeft:width*0.05}}>
                                {/* 卡片解锁后展开界面 */}
                                
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation } road={8}/>
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation} road={9}/>
                                {/* 卡片未解锁界面 */}
                                <Locked navigation={this.props.navigation} road={10}/>
                            </View>
                        </ScrollView>
                    </ScrollableTabView>
                </LinearGradient>
            </View>
        );
    }
}
