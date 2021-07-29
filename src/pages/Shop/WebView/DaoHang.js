import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://uri.amap.com/marker?position=116.473195,39.993253&name=首开广场&src=mypage&coordinate=gaode&callnative=0' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}