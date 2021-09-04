import React, { Component } from 'react'
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import uuid from 'react-native-uuid'
const { width, height } = Dimensions.get("window")

export default class Min extends Component {

    constructor(props) {
        super(props);
        this.state = {
            introduce: { _id: 908915, text: '124135151353125235sdfsrestsestssr', createdAt: new Date, user: { _id: 'cxk', avatar: 'https://inews.gtimg.com/newsapp_bt/0/10061742276/1000', username: '蔡涂坤' }, room: 10, image: 'https://inews.gtimg.com/newsapp_bt/0/10061742276/1000' },
            roomID: 10,
            entries: [
                {
                    title: "张继钢",
                    img: "https://img0.baidu.com/it/u=4232791948,1821944607&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    title: "范扬",
                    img: "https://img0.baidu.com/it/u=4232791948,1821944607&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    title: "霍春阳",
                    img: "https://img0.baidu.com/it/u=4232791948,1821944607&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    title: "霍春阳",
                    img: "https://img0.baidu.com/it/u=4232791948,1821944607&fm=26&fmt=auto&gp=0.jpg"
                },
                {
                    title: "霍春阳",
                    img: "https://img0.baidu.com/it/u=4232791948,1821944607&fm=26&fmt=auto&gp=0.jpg"
                },
            ]
        }
    }

    page(index) {
        console.log(index)
        if (index === 0) {
            this.props.navigation.navigate('Heritage')
        }
        if (index === 1) {
            this.props.navigation.navigate('Heritage')
        }
        if (index === 2) {
            this.props.navigation.navigate('Heritage')
        }
        if (index === 2) {
            this.props.navigation.navigate('Heritage')
        }
        if (index === 2) {
            this.props.navigation.navigate('Heritage')
        }
    }
    go_page(index) {
        console.log(index)
        if (index === 0) {
            this.props.navigation.navigate('Zhan')
        }
        if (index === 1) {
            this.props.navigation.navigate('Zhan')
        }
        if (index === 2) {
            this.props.navigation.navigate('Zhan')
        }
        if (index === 2) {
            this.props.navigation.navigate('Zhan')
        }
        if (index === 2) {
            this.props.navigation.navigate('Zhan')
        }
    }
    goto_page(index) {
        console.log(index)
        if (index === 0) {
            this.props.navigation.navigate('JieShao')
        }
        if (index === 1) {
            this.props.navigation.navigate('JieShao')
        }
        if (index === 2) {
            this.props.navigation.navigate('JieShao')
        }
        if (index === 2) {
            this.props.navigation.navigate('JieShao')
        }
        if (index === 2) {
            this.props.navigation.navigate('JieShao')
        }
    }

    _renderItem({ item, index }) {

        return (
            <View>
                <View style={{ flexDirection: "row", marginLeft: -30 }} >
                    <TouchableOpacity onPress={() => this.page(index)}>
                        <ImageBackground borderRadius={10} style={{ width: width * 0.6, height: height * 0.45 }} source={{ uri: item.img }}>
                            <Text style={{ flexWrap: "wrap", width: 15, marginLeft: 10, fontWeight: "bold", marginTop: 10 }}>{item.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ justifyContent: "center", marginLeft: 10, }}>

                        <TouchableOpacity onPress={() => this.go_page(index)} >
                            <View style={{ marginBottom: 10 }}>
                                <MaterialCommunityIcons style={{ marginLeft: 10 }} color={global.back2} name='eye-circle-outline' size={25} />
                                <Text style={{ fontSize: 13, color: global.back2 }}>逛展览</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goto_page(index)}>
                            <View style={{ marginBottom: 10 }}>
                                <FontAwesome style={{ marginLeft: 10 }} name='bars' color={global.back2} size={25} />
                                <Text style={{ fontSize: 13, color: global.back2 }}>看介绍</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Chats',{room:10,introduce:this.state.introduce})}} activeOpacity={1} >
                            <View>
                                <AntDesign name="customerservice" style={{ marginLeft: 10 }} size={25} color={global.back2} />
                                <Text style={{ fontSize: 13, color: global.back2 }}>去咨询</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={{marginTop:10}}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        inactiveSlideScale={0.8}
                        renderItem={(e) => this._renderItem(e)}
                        sliderWidth={width}
                        itemWidth={300}
                        onSnapToItem={index => this.setState({ activeIndex: index })}
                    />
                </View>

            </View>
        )
    }
}
