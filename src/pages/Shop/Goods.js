import React, { Component } from 'react'
import { View, Dimensions, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
let { width, height } = Dimensions.get("window");
export default class Good extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("GoodsDetail") }} activeOpacity={1} style={{ width: width * 0.425, height: width * 0.4, borderRadius: 10, alignSelf: 'center', elevation: 5, backgroundColor: '#fff', }}>
                <ImageBackground borderRadius={10} style={{ width: "100%", height: "100%", alignSelf: 'center' }} source={{ uri: this.props.img }}></ImageBackground>
                <View style={{ borderWidth: 0, height: '40%', marginTop: -width * 0.158, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'rgba(169,169,169,0.7)' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ borderWidth: 0, fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Velvet Chair</Text>
                        <Text style={{ borderWidth: 0, fontSize: 16, color: '#fff', fontWeight: 'bold' }}>￥{this.props.price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '50%', borderWidth: 0, marginTop: 4 }}>
                        <Text style={{ borderWidth: 0, fontSize: 10, paddingLeft: width * 0.035, color: '#fff', width: '50%', textAlignVertical: 'center' }}>浙江·杭州</Text>
                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'flex-start' }}>
                            <TouchableOpacity activeOpacity={0.7} style={{ borderWidth: 0, width: '27%', borderRadius: 50, marginRight: 10, backgroundColor: '#fff' }}>
                                <AntDesign style={{ alignSelf: 'center', marginTop: 2 }}
                                    name="shoppingcart"
                                    size={25}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={{ borderWidth: 0, width: '27%', borderRadius: 50, marginRight: 10, backgroundColor: '#fff' }}>
                                <AntDesign style={{ alignSelf: 'center', marginTop: 2 }}
                                    name="staro"
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}