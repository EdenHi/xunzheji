import React, { Component } from 'react'
import { View,Image,Text,TouchableOpacity, Dimensions,TextInput } from 'react-native'

const {width,height} = Dimensions.get("window")

export default class AddressList extends Component {
    render() {
        return (
            <View style={{padding:10}}>
                <View style={{height:height*0.85}}>
                <View style={{flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10,borderBottomWidth:0.5,borderBottomColor:"#808080",justifyContent:"space-between",height:50}}>
                    <View  style={{width:width*0.03,height:width*0.03,borderWidth:1}}/>
                    <Text style={{width:width*0.8,textAlign:"center",fontSize:18,fontWeight:"bold"}}>
                        地址列表
                    </Text>
                    <View style={{width:width*0.03,height:height*0.03}}></View>
                </View>
                <View style={{flexDirection:"row",height:60,justifyContent:"space-between",alignItems:"center"}}>
                    <View>
                    <View style={{flexDirection:"row",height:30 }}><Text style={{fontSize:16,width:width*0.2,fontWeight:"bold"}}>收货人</Text><Text>10086</Text></View>
                    <View style={{flexDirection:"row",height:30 }}><Text style={{marginRight:10}}>浙江省</Text><Text style={{marginRight:10}}>杭州市</Text><Text style={{marginRight:10}}>拱墅区</Text><Text style={{marginRight:10}}>浙江树人大学</Text></View>
                    </View>
                    <View  style={{width:width*0.03,height:width*0.03,borderWidth:1}}/>
                </View>
                </View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Address')}} underlayColor="red"><View style={{backgroundColor:`#ff0000`,height:40,borderRadius:20,justifyContent:"center"}}><Text style={{textAlign:"center",fontSize:18,color:"#fff"}}>添加新地址</Text></View></TouchableOpacity>
            </View>
        )
    }
}
