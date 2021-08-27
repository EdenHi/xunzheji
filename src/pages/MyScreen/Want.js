import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { AsyncStorage } from 'react-native'
import { FlatList } from 'react-native'
import { Dimensions } from 'react-native'
import { View, ImageBackground, Image, Text,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get("window")

export default class Want extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                fetch('http://8.142.11.85:3000/shop/select_Exchange2_want', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username:result
                    }),
                })
                .then((response) => response.json())
                .then((json)=>{
                    this.setState({data:json})
                })
            }
        })
    }

renderDate({item,index}){
    return(
        <TouchableOpacity style={{ width: width * 0.9, height: height * 0.1, flexDirection: "row", backgroundColor: "#fff", alignItems: "center", marginHorizontal: width * 0.05, marginBottom: 20, elevation: 1, borderRadius: 10 }}>
            <Image source={{ uri:item.portrait }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50, marginLeft: 10 }} />
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>{item.nickname}</Text>
                <Text style={{ fontSize: 13 }}>{`我想要\t\t"${item.wupin}"`}</Text>
            </View>
        </TouchableOpacity>
    )
}


    render() {
        console.log('item', this.props.route.params);
        const item = this.state.data
        return (
            <View style={{ flex: 1 }}>
                <View  activeOpacity={1} style={{ height: height * 0.07, alignItems: "center", flexDirection: "row", backgroundColor: "#7cc0c0", elevation: 1 }}>
                    <AntDesign style={{marginLeft:width*0.025}} name='left' size={20} color='#fff' onPress={() => this.props.navigation.goBack()} />
                    <Text style={{ fontSize: 18, color: "#fff", marginLeft: "2%", fontWeight: "bold" }}>消息</Text>
                </View>
                <FlatList
                style={{marginTop:20}}
                data={this.state.data}
                keyExtractor={(item,index)=>(index+1)}
                renderItem={this.renderDate.bind(this)}/>
            </View>
        )
    }
}
