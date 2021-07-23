import React, { Component } from 'react';
import { StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity, View, TextInput, ImageBackground } from 'react-native';
let { height, width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375

export default class RankCard extends Component {
    render() {
        return (

            <View style={{ width: "100%", height:height* 0.13, marginVertical: width * 0.02, flexDirection: 'row', borderRadius: 10, backgroundColor: '#fff',elevation: 5, }}>
                <View style={{ width: width * 0.3, marginHorizontal: width * 0.02, height: "90%", marginVertical: "1.25%", borderRadius: 10 }}>
                    <Image style={{ width: "100%", height: "100%", borderRadius: 10 }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}></Image>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Text>123</Text>
                    <Text>123</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginLeft: width * 0.35 }}>
                    <Text style={{ fontSize: 22*ratio_w }}>123票</Text>
                    <Text>123</Text>
                </View>
            </View>
        )
    }
}