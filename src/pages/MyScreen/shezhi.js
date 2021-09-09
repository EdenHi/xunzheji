/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Dimensions, AsyncStorage, ScrollView, DeviceEventEmitter } from 'react-native';
import { ListItem } from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');
export default class shezhi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f: 1
        }
    }


    go_back() {
        AsyncStorage.removeItem('username');
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:global.backColor}}>
                <View style={{ flexDirection: "row", backgroundColor: global.mainColor, alignItems: "center", height: height * 0.07, justifyContent: "center", marginBottom: "5%" }}>
                    <TouchableOpacity activeOpacity={1} style={{ width: width * 0.06, }}>
                        <FontAwesome onPress={() => this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        {/* <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={15} color="#000000" /> */}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: global.backColor, width: width * 0.85 }}>设置</Text>

                </View>
<View>
    <TouchableOpacity onPress={()=>{global.back(['#7cc0c0','#fff','#333']),console.log('global',global.mainColor,global.backColor),DeviceEventEmitter.emit('yanse',1),this.setState({f:this.state.f+1})}} style={{height:height*0.075,width:0.95*width,marginLeft:width*0.025,backgroundColor:'#eee',borderRadius:10,marginBottom:10}}>
        <Text style={{textAlignVertical:'center',height:'100%',fontSize:16,paddingLeft:width*0.075,color:'#333'}}>白天模式</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{global.back(['#145A59','#000','#fff']),console.log('global',global.mainColor,global.backColor),DeviceEventEmitter.emit('yanse',1),this.setState({f:this.state.f+1})}} style={{height:height*0.075,width:0.95*width,marginLeft:width*0.025,backgroundColor:'#eee',borderRadius:10,marginBottom:10}}>
        <Text style={{textAlignVertical:'center',height:'100%',fontSize:16,paddingLeft:width*0.075,color:'#333'}}>黑夜模式</Text>
    </TouchableOpacity>

</View>

                <View>
                

                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 15, width: width * 0.9, backgroundcolor: global.mainColor, height: height * 0.05, elevation: 5, alignItems: 'center', justifyContent: 'center', marginLeft: width * 0.05, borderRadius: 30, marginBottom: 15 }}
                        onPress={() => this.go_back()}>
                        <Text style={{ fontSize: 18, color: global.backColor }}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
