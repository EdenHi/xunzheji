import React, { Component } from 'react'
import { Image, View,Text,Dimensions, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'

import HelloWorld from './HelloWorld'

const {width, height} = Dimensions.get("window")

export default class Address extends Component {
    render() {
        return (
            
            <View style={{padding:10}}>
                <View style={{height:height*0.85}}>
                <View style={{flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10,borderBottomWidth:0.5,borderBottomColor:"#808080",justifyContent:"space-between",height:50}}>
                    <View  style={{width:width*0.03,height:width*0.03,borderWidth:1}} />
                    <Text style={{width:width*0.8,textAlign:"center",fontSize:18,fontWeight:"bold"}}>
                        新建收货地址
                    </Text>
                    <View style={{width:width*0.03,height:height*0.03}}></View>
                </View>
                <View style={{flexDirection:"row",height:50,alignItems:"center",borderBottomWidth:0.5,borderBottomColor:"#808080"}}>
                    <Text style={{fontSize:16,width:width*0.2}}>收货人</Text>
                    <TextInput style={{width:width*0.8,height:50}} placeholder='请使用真实姓名'/>
                </View>
                <View style={{flexDirection:"row",height:50,alignItems:"center",borderBottomWidth:0.5,borderBottomColor:"#808080"}}>
                    <Text style={{fontSize:16,width:width*0.2}}>联系电话</Text>
                    <TextInput style={{width:width*0.8,height:50}} placeholder='收件人电话号码'/>
                </View>
                <View style={{flexDirection:"row",height:50,alignItems:"center",borderBottomWidth:0.5,borderBottomColor:"#808080"}}>
                    <Text style={{fontSize:16,width:width*0.18}}>所在地区</Text>
                    <View style={{height:50}} ><HelloWorld/></View>
                </View>
                <View style={{flexDirection:"row",height:50,alignItems:"center",borderBottomWidth:0.5,borderBottomColor:"#808080"}}>
                    <Text style={{fontSize:16,width:width*0.2}}>详细地址</Text>
                    <TextInput style={{width:width*0.8,height:50}} placeholder='请输入'/>
                </View>
                </View>
                <TouchableOpacity underlayColor="red"><View style={{backgroundColor:`#d3d3d3`,height:40,borderRadius:20,justifyContent:"center"}}><Text style={{textAlign:"center",fontSize:18,color:"#fff"}}>保存收货信息</Text></View></TouchableOpacity>
            </View>
        )
    }
}
