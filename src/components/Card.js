import React, { Component } from 'react';
import { StyleSheet, Text, Image, Dimensions, ScrollView, TouchableOpacity, View, TextInput, ImageBackground } from 'react-native';
let { height, width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375
export default class Card extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.box} activeOpacity={1} onPress={()=>this.props.navigation.navigate('Ranking')}>
                <View style={{ marginVertical: width * 0.03 }}><Text style={{ textAlign: 'center', fontSize: ratio_w * 15, fontWeight: 'bold', color: '#42426F' }}>国内最美村镇人气</Text></View>
                <View style={styles.img}>
                    <View style={styles.box2} ><Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}></Image></View>
                    <View style={styles.box3}><Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={{ uri: 'http://img.ewebweb.com/uploads/20190506/13/1557121557-MeFPIjRBrN.jpg' }}></Image></View>
                    <View style={styles.box4}><Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}></Image></View>
                </View>
                <View style={{ marginVertical: width * 0.03, marginLeft: width * 0.03 }}>
                    <Text style={styles.text}>1.宏村古镇</Text>
                    <Text style={styles.text}>2.宏村古镇</Text>
                    <Text style={styles.text}>3.宏村古镇</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        width: width * 0.4,
        height: width * 0.45,
        borderRadius: 13,
        backgroundColor: '#D9D9F3',
        marginHorizontal:width*0.015
    },
    box2: {

        width: width * 0.4 * 0.3,
        height: width * 0.4 * 0.3,
        marginRight: width * -0.04,
        marginLeft: width * 0.05,
        zIndex: 1,
        opacity: 0.5
    },
    box3: {

        width: width * 0.4 * 0.35,
        height: width * 0.4 * 0.35,
        zIndex: 2,
        marginTop: -width * 0.01
    },
    box4: {

        width: width * 0.4 * 0.3,
        height: width * 0.4 * 0.3,
        marginLeft: width * -0.04,
        zIndex: 1,
        opacity: 0.5
    },
    img: {
        flexDirection: 'row',

    },
    text: {
        fontSize: ratio_w * 14,
        paddingLeft: width * 0.03,
        color: '#4A766E'
    }
})