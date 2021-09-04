import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Easing, Animated, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
const { width, height } = Dimensions.get('window');
export default class vr extends Component {
  render() {
    return (
      <View style={{width:width,height:height}}>
        <View style={{width:width,height:height}}>
      <WebView
        source={{ uri: 'http://beyond.3dnest.cn/play/?m=3bae8568_WLs1_b6f9' }}
        style={{ marginTop: 20 }}
      />
       <View style={{width:width,height:80,position:"absolute",backgroundColor:global.back2,elevation:5,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
       <View style={{ height: height * 0.1, flexDirection: "row", alignItems: "center" }}>
                        <View style={{ marginLeft: "5%" }}>
                        <Image source={require("../pages/img/logo.png")} style={{width:width*0.5,height:height*0.25,marginLeft:-width*0.1}}>
                            {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>寻商迹</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#fff' }}>XUN SHANG JI</Text> */}
                        </Image>

                        </View>

                        {/* <LottieView style={{marginLeft:"15%"}}  source={require('../../../../animal/71338-welcomegolden.json')} autoPlay loop={false} progress={this.state.progress} /> */}

                    </View>
       </View>
 </View>
      </View>
    );
  }
}