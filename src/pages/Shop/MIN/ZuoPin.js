import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Dimensions, Image, View, Text } from 'react-native'

const { width, heigth } = Dimensions.get("window")

export default class ZuoPin extends Component {
    render() {
        return (
            <View >
                <View style={{ flexDirection: "row",justifyContent: "space-around", marginTop: 10,marginBottom:35 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Zhifu', {price:8890,name:"定制物品",jieshao:'......',pic:['https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg']})} activeOpacity={1} style={{ width: width * 0.4, height: width * 0.6,elevation:5,backgroundColor:"#fff",borderRadius:10}}>
                        <Image style={{ width: width * 0.4, height: width * 0.43, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.1, backgroundColor: "#fff", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: '5%' ,color:'#333',marginLeft:"2%"}}>《高士品茗图》</Text>
                            <Text style={{color:'#7cc0c0',width: '100%',marginTop:'5%',marginLeft:"5%"}}>￥8890</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Zhifu', {price:8890,name:"定制物品",jieshao:'......',pic:['https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg']})}   activeOpacity={1}   style={{ width: width * 0.4, height: width * 0.6,elevation:5,backgroundColor:"#fff",borderRadius:10}}>
                    <Image style={{ width: width * 0.4, height: width * 0.43, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                        <View style={{ width: width * 0.4, height: width * 0.1, backgroundColor: "#fff", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ marginTop: '5%' ,color:'#333',marginLeft:"2%"}}>《高士品茗图》</Text>
                            <Text style={{color:'#7cc0c0',width: '100%',marginTop:'5%',marginLeft:"5%"}}>￥8890</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
               
            </View>
        )
    }
}
