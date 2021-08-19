import React, { Component } from 'react'
import { Dimensions, View, Text,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get("window")

export default class Personal extends Component {
    render() {
        return (
            <View>
                <View style={{ width, height: height * 0.4, backgroundColor: "#7cc0c0"}}>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>  
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff"}}>个人中心</Text>
                    </View>
                    <View style={{ width: width * 0.9, height: height * 0.25, backgroundColor: "#fff" ,marginHorizontal:width*0.05}}>

                    </View>
                </View>
            </View>
        )
    }
}
