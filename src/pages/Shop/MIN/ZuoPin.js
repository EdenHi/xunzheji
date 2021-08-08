import React, { Component } from 'react'
import { Dimensions, Image, View, Text } from 'react-native'

const { width, heigth } = Dimensions.get("window")

export default class ZuoPin extends Component {
    render() {
        return (
            <View >
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                    <View style={{ width: width * 0.4, height: width * 0.66 }}>
                        <Image style={{ width: width * 0.4, height: width * 0.45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.2, backgroundColor: "#fff", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: 10 }}>《高士品茗图》</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
