import React, { Component } from 'react';
import WebView from 'react-native-webview';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
export default class componentName extends Component {
    getCameraPermission(){
        async function openPermission(){
            let isOpen=await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)

            if(Platform.OS==='android'&&!isOpen){
                let res=await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
                if(res !=='granted'){
                    Alert.alert('相机权限没打开','请在手机的设置选项中允许访问')
                }
                else this.openTheCamera()
            }
        }
        openPermission()
    }
componentDidMount(){
this.getCameraPermission()
}
  render() {
    return (
      <WebView 
      source={{uri:'https://edenzhang.top'}}
      >
      </WebView>
      
    );
  }
}
