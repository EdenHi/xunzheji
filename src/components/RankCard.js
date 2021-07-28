import React, { Component } from 'react';
import { StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity, View, TextInput, ImageBackground } from 'react-native';
let { height, width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375

export default class RankCard extends Component {
    render() {
        return (

            <View style={{height:120, marginVertical: width * 0.02, flexDirection: 'row', borderRadius: 10, backgroundColor: '#fff',elevation: 5,}}>
                <View style={{ width: width * 0.3, marginHorizontal: width * 0.02, height: "90%", marginVertical: "1.25%", borderRadius: 10 }}>
                    <Image style={{ width: "110%", height: "100%", borderRadius: 10 }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}></Image>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around',marginLeft:10 }}>
                    <Text style={{fontWeight:"bold",fontSize:20}}>黄果树瀑布</Text>
                    <Text>123</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent:"center", marginLeft: width * 0.12}}>
                    <View style={{flexDirection:"row",justifyContent:"center",marginBottom:5}}>
                    <Text style={{ fontSize: 30*ratio_w,color:"#ff0000",fontWeight:"bold"}}>123</Text>
                    <Text style={{ fontSize: 16*ratio_w ,marginTop:12}}>票</Text>
                    </View>
                    <View><TouchableOpacity style={{backgroundColor:"#ff0000",borderRadius:25,padding:5}}><Text style={{textAlign:"center",color:"white"}}>    投票    </Text></TouchableOpacity></View>
                </View>
            </View>
        )
    }
}