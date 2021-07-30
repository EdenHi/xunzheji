import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { scrollTo } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
var sleep = function (time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) { }
};

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            0: false,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true,
            9: true,
        }
    }

    render() {
        return (
            <View>

                <ScrollView ref={ref => this.scrollRef = ref} onScroll={(e) => {
                    if (e.nativeEvent.contentOffset.x >= 0 && e.nativeEvent.contentOffset.x <= 45) {
                        this.setState({ 0: true })
                        this.setState({ 1: false })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 85, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 45 && e.nativeEvent.contentOffset.x <= 190) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: false })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 240, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 190 && e.nativeEvent.contentOffset.x <= 395) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: false })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 430, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 395 && e.nativeEvent.contentOffset.x <= 570) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: false })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 600, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 570 && e.nativeEvent.contentOffset.x <= 745) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: false })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 770, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 745 && e.nativeEvent.contentOffset.x <= 920) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: false })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 940, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 920 && e.nativeEvent.contentOffset.x <= 1095) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: false })
                        this.setState({ 8: true })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 1110, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 1095 && e.nativeEvent.contentOffset.x <= 1270) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: false })
                        this.setState({ 9: true })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 1280, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 1270 && e.nativeEvent.contentOffset.x <= 1445) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: false })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 1450, y: 0, animated: true })
                    } else if (e.nativeEvent.contentOffset.x > 1445 && e.nativeEvent.contentOffset.x <= 1620) {
                        this.setState({ 0: true })
                        this.setState({ 1: true })
                        this.setState({ 2: true })
                        this.setState({ 3: true })
                        this.setState({ 4: true })
                        this.setState({ 5: true })
                        this.setState({ 6: true })
                        this.setState({ 7: true })
                        this.setState({ 8: true })
                        this.setState({ 9: false })
                        sleep(1000)
                        this.scrollRef.scrollTo({ x: 1620, y: 0, animated: true })
                    }
                }}

                    showsHorizontalScrollIndicator={false} horizontal={true} style={{ borderWidth: 0, width: '100%', height: '40%', backgroundColor: '#eee' }}>

                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, backgroundColor: '$fff', }}>
                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginTop: '-155.8%', backgroundColor: this.state[0] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text onPress={() => this.move()} style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', borderTopWidth: 0 }}>曹武军</Text>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, flexDirection: 'column-reverse', backgroundColor: '$fff' }}>

                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginBottom: '-155.8%', backgroundColor: this.state[1] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', }}>曹武军</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, backgroundColor: '$fff', }}>
                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginTop: '-155.8%', backgroundColor: this.state[2] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', borderTopWidth: 0 }}>曹武军</Text>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, flexDirection: 'column-reverse', backgroundColor: '$fff' }}>

                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginBottom: '-155.8%', backgroundColor: this.state[3] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', }}>曹武军</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, backgroundColor: '$fff', }}>
                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginTop: '-155.8%', backgroundColor: this.state[4] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', borderTopWidth: 0 }}>曹武军</Text>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, flexDirection: 'column-reverse', backgroundColor: '$fff' }}>

                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginBottom: '-155.8%', backgroundColor: this.state[5] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', }}>曹武军</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, backgroundColor: '$fff', }}>
                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginTop: '-155.8%', backgroundColor: this.state[6] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', borderTopWidth: 0 }}>曹武军</Text>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, flexDirection: 'column-reverse', backgroundColor: '$fff' }}>

                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginBottom: '-155.8%', backgroundColor: this.state[7] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', }}>曹武军</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, backgroundColor: '$fff', }}>
                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginTop: '-155.8%', backgroundColor: this.state[8] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', borderTopWidth: 0 }}>曹武军</Text>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                    </View>
                    <View style={{ borderWidth: 0.5, height: '100%', width: 170, marginLeft: 5, flexDirection: 'column-reverse', backgroundColor: '$fff' }}>

                        <Image style={{ width: '100%', height: '80%', borderWidth: 0, }} source={{ uri: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg' }}></Image>
                        <View style={{ height: '80.1%', marginBottom: '-155.8%', backgroundColor: this.state[9] ? 'rgba(0,0,0,0.7)' : null }}></View>
                        <Text style={{ borderWidth: 0, textAlign: 'center', fontSize: 15 }}>医械汇执行董事</Text>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', }}>曹武军</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    cell: {
        // backgroundColor: 'red',
        width: "95%",
        height: height * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
