import React, { Component } from 'react';
import { StyleSheet, Text,  Easing, Animated,Image, Dimensions, ScrollView, TouchableOpacity, View, TextInput, ImageBackground } from 'react-native';
import RankCard from './components/RankCard';
import LottieView from 'lottie-react-native';
let { height, width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375
export default class Ranking extends Component {
    constructor(props){
        super(props);
        this.state = {
            progress: new Animated.Value(0),
          }
        }
        componentDidMount() {
            Animated.timing(this.state.progress, {
              toValue: 1,
              duration: 3500,
              easing: Easing.linear,
              
            }).start();
          }
    
    render() {
        return (
            <ScrollView>
                <ImageBackground style={{ width: width, height: height * 0.28 }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}>
                </ImageBackground>
                <ImageBackground resizeMode={'stretch'} style={{ width: width * 0.95, height: height * 0.3478, marginTop: height * -0.2, marginHorizontal: "2.5%", elevation: 1.5, }} source={{uri:'http://47.100.78.254:3000/public/images/14.png'}}>
                    <View style={{width:150,height:150,position:"absolute",left:"23.5%",top:-70}}>
                    <LottieView style={{width:"100%",height:"100%"}} source={require('../animal/trophy.json')} progress={this.state.progress} />
                    </View>
                    <Text style={{ borderWidth: 1, marginTop: height * 0.18, width: "90%", marginHorizontal: "5%", fontSize: 13 * ratio_w, color: 'grey', fontWeight: '600', lineHeight: height * 0.03 }}>你好啊阿斯顿哈哈王府货币u费很贵啊色鬼和封闭u几号放假啊哦i好玩iOhio根深蒂固护士杜甫强化卡十分恐惧安徽会啊返回花非花啊u阿黄覅u阿三覅u赛i发覅u</Text>
                    <View style={{ borderWidth: 1, width: '90%', marginHorizontal: '5%', height: height * 0.04, marginVertical: width * 0.04, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlignVertical: 'bottom' }}>发布|2021-05-24</Text>
                        <View style={{ flexDirection: "row-reverse" }}>
                            <Text style={{ textAlignVertical: 'bottom' }}> 人</Text>
                            <Text style={{ fontSize: 20 * ratio_w }}>248</Text>
                            <Text style={{ textAlignVertical: 'bottom' }}>投票 </Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ borderWidth: 0, width: 0.95 * width, marginHorizontal: width * 0.025 }}>
                    <View style={{
                        width: "100%", height: height * 0.211, marginVertical: width * 0.02, borderRadius: 10, backgroundColor: '#fff',elevation: 5,
                    }}>
                        <View style={{ width: width * 0.9, marginHorizontal: width * 0.02, height: "90%", marginVertical: "1.25%", borderRadius: 10 }}>
                            <ImageBackground borderRadius={10} style={{ width: "100%", height: "90%", borderRadius: 10, marginTop: width * 0.005 }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}>
                                <Text style={{ fontSize: 20 * ratio_w, fontWeight: 'bold', borderWidth: 1, width: "16%", textAlign: 'center', backgroundColor: 'black', color: 'gold', borderTopLeftRadius: 10, borderBottomRightRadius: 10 ,opacity:0.6}}>NO.1</Text>
                            </ImageBackground>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20 * ratio_w, marginTop: -width * 0.015, }}>123</Text>
                                <Text style={{ fontSize: 20 * ratio_w, marginTop: -width * 0.015 }}>123</Text>
                            </View>
                        </View>
                    </View>
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                </View>
            </ScrollView>
        )
    }
}