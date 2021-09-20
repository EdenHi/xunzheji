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
                    title: "何士扬",
                    img: "https://img0.baidu.com/it/u=632352887,1110488995&fm=26&fmt=auto"
                },
                {
                    title: "范扬",
                    img: "https://img1.baidu.com/it/u=4232791948,1821944607&fm=26&fmt=auto"
                },
                {
                    title: "霍春阳",
                    img: "https://img1.baidu.com/it/u=2055805123,4217949613&fm=26&fmt=auto"
                },
                {
                    title: "程大利",
                    img: "https://img0.baidu.com/it/u=3618821348,3191669522&fm=26&fmt=auto"
                },
                {
                    title: "邹平朝",
                    img: "https://img1.baidu.com/it/u=2192082569,518403466&fm=26&fmt=auto"
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
            this.props.navigation.navigate('JieShao',{id:0})
        }
        if (index === 1) {
            this.props.navigation.navigate('JieShao',{id:1})
        }
        if (index === 2) {
            this.props.navigation.navigate('JieShao',{id:2})
        }
        if (index === 3) {
            this.props.navigation.navigate('JieShao',{id:3})
        }
        if (index === 4) {
            this.props.navigation.navigate('JieShao',{id:4})
        }
    }

    _renderItem({ item, index }) {

        return (
            <View>
                <View style={{ flexDirection: "row", marginLeft: -15 }} >
                    <TouchableOpacity activeOpacity={1} onPress={() => this.page(index)}>
                        <ImageBackground borderRadius={10} style={{ width: width * 0.6, height: height * 0.45 }} source={{ uri: item.img }}>
                            <Text style={{ flexWrap: "wrap", width: 15, marginLeft: 10, fontWeight: "bold", marginTop: 10 ,color:"#7cc0c0"}}>{item.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ justifyContent: "center", marginLeft: 20, }}>

                        <TouchableOpacity activeOpacity={1} onPress={() => this.go_page(index)} >
                            <View style={{ marginBottom: 10 }}>
                                <MaterialCommunityIcons style={{ marginLeft: 10 }} color={global.mainColor} name='eye-circle-outline' size={25} />
                                <Text style={{ fontSize: 13, color: global.mainColor }}>逛展览</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.goto_page(index)}>
                            <View style={{ marginBottom: 10 }}>
                                <FontAwesome style={{ marginLeft: 10 }} name='bars' color={global.mainColor} size={25} />
                                <Text style={{ fontSize: 13, color: global.mainColor }}>看介绍</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={()=>{this.props.navigation.navigate('Chats',{room:10,introduce:this.state.introduce})}} activeOpacity={1} >
                            <View>
                                <AntDesign name="customerservice" style={{ marginLeft: 10 }} size={25} color={global.mainColor} />
                                <Text style={{ fontSize: 13, color: global.mainColor }}>去咨询</Text>
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
