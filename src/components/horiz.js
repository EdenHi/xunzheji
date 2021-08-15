import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Dimensions, StyleSheet, TouchableOpacity, FlatList, RefreshControl, Alert} from 'react-native';

const DATA = [
    {
        top: '-185%',
        id: 0,
        img: 'https://img1.baidu.com/it/u=3447401417,1566003888&fm=26&fmt=auto&gp=0.jpg',
        names:'丁鸿敏',
        organize:'湖州商帮代表人物'
    },
    {
        picture: "39%",
        position: '0%',
        name: '-230%',
        top: '-170%',
        id: 1,
        img: 'https://img0.baidu.com/it/u=2443355349,1915440844&fm=26&fmt=auto&gp=0.jpg',
        names:'丁磊',
        organize:'宁波商帮代表人物'
    },
    {
        top: '-185%',
        id: 2,
        img: 'https://img2.baidu.com/it/u=2291125540,2725084226&fm=26&fmt=auto&gp=0.jpg',
        names:'陈建成',
        organize:'绍兴商帮代表人物'
    },
    {
        picture: "38%",
        position: '0%',
        name: '-230%',
        top: '-170%',
        id: 3,
        img: 'https://img0.baidu.com/it/u=1312128531,3485265832&fm=26&fmt=auto&gp=0.jpg',
        names:'余竹云',
        organize:'龙游商帮代表人物'

    },
    {
        top: '-185%',
        id: 4,
        img: 'https://img0.baidu.com/it/u=3499188640,1709445744&fm=26&fmt=auto&gp=0.jpg',
        names:'郑秀康',
        organize:'温州商帮代表人物'
    },
    {
        picture: "38%",
        position: '0%',
        name: '-230%',
        top: '-170%',
        id: 5,
        img: 'https://img1.baidu.com/it/u=1228248987,2703960874&fm=26&fmt=auto&gp=0.jpg',
        names:'陈妙林',
        organize:'萧绍商帮代表人物'
    },
    {
        top: '-185%',
        id: 6,
        img: 'https://img0.baidu.com/it/u=536739110,4138105748&fm=26&fmt=auto&gp=0.jpg',
        names:'王莺妹',
        organize:'台州商帮代表人物'
    },
    {
        picture: "38%",
        position: '0%',
        name: '-230%',
        top: '-170%',
        id: 7,
        img: 'https://img1.baidu.com/it/u=4138310262,2076958814&fm=26&fmt=auto&gp=0.jpg',
        names:'周晓光',
        organize:'义乌商帮代表人物'
    },
    {
        top: '-185%',
        id: 8,
        img: 'https://img1.baidu.com/it/u=3066538619,1551338250&fm=26&fmt=auto&gp=0.jpg',
        names:'冯亚丽',
        organize:'萧绍商帮代表人物'
    },
    {
        picture: "38%",
        position: '0%',
        name: '-230%',
        top: '-170%',
        id: 9,
        img: 'https://img0.baidu.com/it/u=3103019549,4040232266&fm=26&fmt=auto&gp=0.jpg',
        names:'马云',
        organize:'萧绍商帮代表人物'
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
            <TouchableOpacity onPress={()=>Alert.alert('click')} style={{ elevation:5, height: '100%', width: 160, marginLeft: 5, backgroundColor: '#fff', }}>
                <Image style={{ width: '100%', height: '80%', marginTop: item.picture }} source={{ uri: item.img }}></Image>
                <View style={{ height: '90%', marginTop: item.top, backgroundColor: this.state[item.id] ? 'rgba(0,0,0,0.7)' : null }}></View>
                <Text onPress={() => this.move()} style={{color:"#000", textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: item.name }}>{item.names}</Text>
                <Text style={{ textAlign: 'center', color:"#000",fontSize: 15, marginTop: item.position, }}>{item.organize}</Text>
            </TouchableOpacity>
        )
    }
    render() {

        return (

            <View style={{  height: 0.4 * height }}>
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
