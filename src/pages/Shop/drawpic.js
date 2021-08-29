import React, { Component } from 'react';
import { TouchableOpacityBase } from 'react-native';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  FlatList,Dimensions,
  DeviceEventEmitter,

} from 'react-native';
import { WebView } from 'react-native-webview';
import AntDesign from "react-native-vector-icons/AntDesign"

import { captureRef } from "react-native-view-shot";
import { createRef } from 'react';

const {width, height} = Dimensions.get('window');
export default class Drawpic extends Component{
  constructor(props){
    super(props)
      this.state={
        shoturi:''

    }
  }


  render(){
    const viewRef = createRef();
    return (
      <View style={{ width:width,height:height ,alignItems:"center"}}>
           <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,width:width, justifyContent: "center" ,backgroundColor:"#fff"}}>
                  <TouchableOpacity
                   activeOpacity={1} style={{}}>
                      <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#333333" }} name="left" size={20} color="#000000" />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333", width: width * 0.85, marginLeft: "2%" }}>灵魂画手定制专区</Text>
                  <AntDesign onPress={() => {
                        captureRef(viewRef, {
                            format: "jpg",
                            quality: 0.8
                        }).then(
                            uri => {
                                console.log("Image saved to", uri),
                                    DeviceEventEmitter.emit('Draw', {drawpic:uri})
                                    this.props.navigation.goBack()
                            },
                            error => console.error("Oops, snapshot failed", error)
                        )
                    }} style={{ color: "#333333" }} name="check" size={20} color="#000000" />
              </View>
          <View style={{width:width,height:height*0.93}}>
         

            <View style={styles.div} >
                <WebView androidHardwareAccelerationDisabled={true} ref={viewRef} collapsable={false}
                    style={styles.webView1}
                    source={ {uri:'file:///android_asset/draw/index.html'}}
                />
            </View>
        </View>  
  
      </View>
    );
  }

}
const styles = StyleSheet.create({

  div: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: "#F5F5F5"
  },
  webView1: {
      backgroundColor: '#000001',

      flex: 1,
      width: '100%',
      height: '100%',
  },

});
