import React, { Component } from 'react';
import {
    Text,View,
    AppRegistry,StyleSheet,
    Dimensions
} from 'react-native';
import { WebView } from 'react-native-webview';

var SCREEN_WIDTH=Dimensions.get('window').width;

var SCREEN_HEIGHT=Dimensions.get('window').HEIGHT;
const INJECTEDJAVASCRIPT = `
  const meta = document.createElement('meta'); 
  meta.setAttribute('content', 'initial-scale=5, maximum-scale=0.8, user-scalable=0'); 
  meta.setAttribute('name', 'viewport'); 
  document.getElementsByTagName('head')[0].appendChild(meta); 
`
export default class Timer extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }
    componentDidMount(){
    }
    render() {
        return (
            <View style={styles.div}>
                <WebView
                style={{
                    // flex: 1,
                    // backgroundColor: 'white',
                    width:SCREEN_WIDTH

                    // marginBottom: 85,
                }
                }
                javaScriptEnabled={true}
                scalesPageToFit={false}
                injectedJavaScript={ INJECTEDJAVASCRIPT }
                    //   style={styles.webView1}
                      source={{uri: 'file:///android_asset/oldbank/index.html'}}
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({

    div:{
        flex:1,
alignItems:'center',
justifyContent:"center",
        backgroundColor:"#F5F5F5"
    },
    webView1:{
backgroundColor:"red",
   
        width:'100%',
        height:'100%',
    },

});
