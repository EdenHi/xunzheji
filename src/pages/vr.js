import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Easing, Animated, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
const { width, height } = Dimensions.get('window');
export default class vr extends Component {
  render() {
    return (
      <View style={{width:width,height:height}}>
        {/* <View style={{width:width,height:100,position:"absolute"}}></View> */}
        <View style={{width:width,height:height}}>
      <WebView
        source={{ uri: 'https://720yun.com/t/c3vkz9d7Ofw' }}
        style={{ marginTop: 20 }}
      />
 </View>
      </View>
    );
  }
}