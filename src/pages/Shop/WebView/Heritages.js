import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Dimensions, Text, ImageBackground, FlatList } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { State } from 'react-native-gesture-handler';
import { DeviceEventEmitter } from 'react-native';

const { width, height } = Dimensions.get("window")



export default class Heritages extends Component {
    constructor(props){
        super(props)
        this.state={

            data:[
                {
                    id:0,
                    title: '徽州竹雕1',
                    title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
                    select:false,
                    img: 'https://img0.baidu.com/it/u=2873019793,1197104957&fm=26&fmt=auto&gp=0.jpg'
                },
                {
                    id:1,
                    title: '徽州竹雕2',
                    title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
                    select:true,
                    img: 'https://img0.baidu.com/it/u=1982611232,328499575&fm=26&fmt=auto&gp=0.jpg'
                },
                {
                    id:2,
                    title: '徽州竹雕3',
                    title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
                    select:false,
                    img: 'https://img0.baidu.com/it/u=1680309156,3850096561&fm=26&fmt=auto&gp=0.jpg'
                },
            ],
            select:[{is:false},{is:true},{is:false},]

        }
    }


    renderItem=({item})=>{  
        return(
            <TouchableOpacity style={{borderWidth:3,borderColor:this.state.data.select?"#7cc0c0":"#fff"}} onPress={()=>{DeviceEventEmitter.emit('choiceDingZhi',{title:item.title,img:item.img}),this.setState({item:{...item,select:true}})}}>
            <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 5,marginVertical:height*0.01 }}>
            <Image style={{ width: width * 0.5, height: width * 0.5, borderRadius: 5 }} source={{ uri: item.img }} />
            <View style={{ width: width * 0.32, marginLeft: 10, height: width * 0.5, justifyContent: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", color: "#333333" }}>{item.title}</Text>
                <Text style={{ fontSize: 13, flexWrap: "wrap", marginTop: 10, color: "#333333" }}>{item.title2}</Text>
            </View>
        </View>
            </TouchableOpacity>


        )          
}
    render() {
        return (

        <FlatList 
        handleMethod = {({viewableItems}) => this.handleViewableItemsChanged(viewableItems)}
        data={this.state.data}
        renderItem={this.renderItem}
        />

        );
    }
}