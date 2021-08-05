import React, { Component } from 'react'
import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get("window")

export default class Min extends Component {


    constructor(props) {
        super(props);
        this.state = {
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


    _renderItem({ item, index }) {
        return (
            <View>
                <View style={{ flexDirection: "row", marginLeft: -50}} >
                    <TouchableOpacity>
                        <ImageBackground borderRadius={10} style={{ width: width * 0.6, height: height * 0.45 }} source={{ uri: item.img }}>
                            <Text style={{ flexWrap: "wrap", width: 15, marginLeft: 10, fontWeight: "bold" }}>{item.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ justifyContent: "center", marginLeft: 10, }}>
                        <TouchableOpacity>
                            <View style={{ marginBottom: 10 }}>
                                <MaterialCommunityIcons style={{ marginLeft: 10 }} color='#7cc0c0' name='eye-circle-outline' size={25} />
                                <Text style={{ fontSize: 13, color: '#7cc0c0' }}>逛展览</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ marginBottom: 10 }}>
                                <FontAwesome style={{ marginLeft: 10 }} name='bars' color='#7cc0c0' size={25} />
                                <Text style={{ fontSize: 13, color: '#7cc0c0' }}>看介绍</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Ionicons style={{ marginLeft: 10 }} name='md-brush-outline' color='#7cc0c0' size={25} />
                                <Text style={{ fontSize: 13, color: '#7cc0c0' }}>去定制</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    render() {
        return (
            <View>
                <View>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        inactiveSlideScale={0.8}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={300}
                    />
                </View>
            </View>
        )
    }
}
