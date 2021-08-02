import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Dimensions, StyleSheet, TouchableOpacity, FlatList, RefreshControl, Alert} from 'react-native';

const DATA = [
    {
        top: '-170%',
        id: 0,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        picture: "43%",
        position: '0%',
        name: '-210%',
        top: '-170%',
        id: 1,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        top: '-170%',
        id: 2,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        picture: "43%",
        position: '0%',
        name: '-210%',
        top: '-170%',

        id: 3,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        top: '-170%',
        id: 4,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        picture: "43%",
        position: '0%',
        name: '-210%',
        top: '-170%',

        id: 5,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        top: '-170%',
        id: 6,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        picture: "43%",
        position: '0%',
        name: '-210%',
        top: '-170%',

        id: 7,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        top: '-170%',
        id: 8,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
    {
        picture: "43%",
        position: '0%',
        name: '-210%',
        top: '-170%',

        id: 9,
        img: 'https://himg2.huanqiucdn.cn/attachment2010/2020/0605/12/08/20200605120845560.jpg'
    },
];
const { width, height } = Dimensions.get('window');
var sleep = function (time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) { }
};

export default class Horiz extends Component {
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
    slide(e){
        if (e.nativeEvent.contentOffset.x >= 0 && e.nativeEvent.contentOffset.x <= 60) {
            // this.scrollRef.scrollToOffset(160)
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 1 })
            
            // this.scrollRef.scrollToOffset({ x: 85, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 60 && e.nativeEvent.contentOffset.x <= 220) {
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
            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 2 })
            
            // this.scrollRef.scrollToIndex({viewPosition: 0.5, index: 2})

            // this.scrollRef.scrollToOffset({ x: 240, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 220 && e.nativeEvent.contentOffset.x <= 390) {
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 3 })
            
            // this.scrollRef.scrollToOffset({ x: 430, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 390 && e.nativeEvent.contentOffset.x <= 555) {
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 4 })
            
            // this.scrollRef.scrollToOffset({ x: 600, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 555 && e.nativeEvent.contentOffset.x <= 720) {
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 5 })
            
            // this.scrollRef.scrollToOffset({ x: 770, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 720 && e.nativeEvent.contentOffset.x <= 885) {
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 6 })
            
            // this.scrollRef.scrollToOffset({ x: 940, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 885 && e.nativeEvent.contentOffset.x <= 1050) {
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 7 })
            
            // this.scrollRef.scrollToOffset({ x: 1110, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 1050 && e.nativeEvent.contentOffset.x <= 1215) {
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 8 })
            
            // this.scrollRef.scrollToOffset({ x: 1280, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 1215 && e.nativeEvent.contentOffset.x <= 1405) {
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

            this.scrollRef.scrollToIndex({ viewPosition: 0.5, index: 9 })

            
            
            // this.scrollRef.scrollToOffset({ x: 1450, y: 0, animated: true })
        } else if (e.nativeEvent.contentOffset.x > 1405 && e.nativeEvent.contentOffset.x <= 1620) {
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

            this.scrollRef.scrollToOffset({offset:10})
            
            // this.scrollRef.scrollToOffset({ x: 1620, y: 0, animated: true })
        }
    
    }
    stopSlide(){
       
        
    }
    move(){
            this.scrollRef.scrollToOffset({ offset: 10 })
    }
    renderGoods = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>Alert.alert('click')} style={{ borderWidth: 0.5, height: '100%', width: 160, marginLeft: 5, backgroundColor: '$fff', }}>
                <Image style={{ width: '100%', height: '80%', marginTop: item.picture }} source={{ uri: item.img }}></Image>
                <View style={{ height: '80.1%', marginTop: item.top, backgroundColor: this.state[item.id] ? 'rgba(0,0,0,0.7)' : null }}></View>
                <Text onPress={() => this.move()} style={{ borderWidth: 1, textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginTop: item.name }}>曹武军</Text>
                <Text style={{ borderWidth: 1, textAlign: 'center', fontSize: 15, marginTop: item.position, }}>医械汇执行董事</Text>
            </TouchableOpacity>
        )

    }
    render() {

        return (

            <View style={{ borderWidth: 1, height: 0.4 * height }}>
                <FlatList
                    
                    showsHorizontalScrollIndicator={false}
                    
                    ref={ref => this.scrollRef = ref} onScroll={(e) => {
                        this.slide(e)
                    }}
                    data={DATA}
                    renderItem={this.renderGoods}
                    horizontal={true}
                />
               
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
