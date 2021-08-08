import React, { Component } from 'react'
import { View,Text,StyleSheet,ScrollView,Image,Dimensions, ImageBackground} from 'react-native'
const {width, height} = Dimensions.get("window")
export default class Characters extends Component {
    render() {
        return (
                <View style={{height:180,elevation:10,width:width*0.3, margin:10,marginTop:-10, borderRadius:10,alignItems:"center",padding:10}}>
                <ImageBackground borderRadius={10} style={{height:180,width:width*0.3,}} source={{uri:'http://8.142.11.85:3000/public/images/blue.jpeg'}}>
                                     <View style={{alignItems:"center",justifyContent:"center",}} > 
                                         <Image style={{height:width*0.2, width:width*0.2, borderRadius:100,alignContent:"center",marginTop:10}} source={{uri:"http://8.142.11.85:3000/public/images/my.jpg"}}/>
                                         <Text style={{textAlign:"center",fontSize:20,width:width*0.2,marginTop:5}}>马云</Text>
                                         <Text style={{textAlign:"center",fontSize:14,width,}}>阿里巴巴创办人</Text>
                                         <View style={{width:width*0.2,padding:5,backgroundColor:"#87ceeb",borderRadius:20,marginTop:5}}><Text style={{textAlign:"center",fontSize:12}}>关注</Text></View>
                                     </View>
                 </ImageBackground>
                 </View>
        )
    }
}
