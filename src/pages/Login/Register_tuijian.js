/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';

import {View,Text,TouchableOpacity,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const {width,height} = Dimensions.get('window')
export default class Register_tuijian extends Component {
    constructor(props){
        super(props)
        this.state = {
            tuijian:''
        }
    }

    go_tuijian(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                fetch('http://8.142.11.85:3000/index/updateTuijian', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tuijian:this.state.tuijian,
                username:result
            })
        })
            }
        })
    }


    render() {
        return (
            <View>
                {/* 标题 */}
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width, paddingLeft: width * 0.05,backgroundColor:'#7cc0c0' }}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft:"2%"}}>注册</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginRight:30,alignItems:'center'}} activeOpacity={1} onPress={()=>this.setState({tuijian:'meishi'})}>
                        <Text>美食</Text>
                        <View style={{width:10,height:10,borderWidth:0.5,borderRadius:50,marginTop:3,backgroundColor:this.state.tuijian==='meishi'?'lightgreen':null}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:30,alignItems:'center'}} activeOpacity={1} onPress={()=>this.setState({tuijian:'zhizao'})}>
                        <Text>制造</Text>
                        <View style={{width:10,height:10,borderWidth:0.5,borderRadius:50,marginTop:3,backgroundColor:this.state.tuijian==='zhizao'?'lightgreen':null}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:30,alignItems:'center'}} activeOpacity={1} onPress={()=>this.setState({tuijian:'gongmei'})}>
                        <Text>工美</Text>
                        <View style={{width:10,height:10,borderWidth:0.5,borderRadius:50,marginTop:3,backgroundColor:this.state.tuijian==='gongmei'?'lightgreen':null}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:30,alignItems:'center'}} activeOpacity={1} onPress={()=>this.setState({tuijian:'chajiu'})}>
                        <Text>茶酒</Text>
                        <View style={{width:10,height:10,borderWidth:0.5,borderRadius:50,marginTop:3,backgroundColor:this.state.tuijian==='chajiu'?'lightgreen':null}}/>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity onPress={()=>{this.go_tuijian(),this.props.navigation.navigate('BtnRoute')}} style={{backgroundColor:'#7cc0c0',width:width*0.5,marginHorizontal:width*0.25,justifyContent:'center',alignItems:'center',borderRadius:30}} activeOpacity={1}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff',paddingVertical:10}}>下一步</Text>
                </TouchableOpacity>
            </View>
        );
    }
}