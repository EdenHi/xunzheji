import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import renwu from './renwu.json'
import {NavigationContext} from '@react-navigation/native';
import { FlatList } from 'react-native'
const { width, height } = Dimensions.get("window")

export default class HuZhou extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props)
        this.state = {
            isUnlock: this.props.isUnlock,
            showAlert: false,
            data:renwu[0],
        }
    }

    componentDidMount(){
        if(this.props.page === 0){
            this.setState({
                data:renwu[0]
            })
        }
        if(this.props.page === 1){
            this.setState({
                data:renwu[1]
            })
        }
        if(this.props.page === 2){
            this.setState({
                data:renwu[2]
            })
        }
        if(this.props.page === 3){
            this.setState({
                data:renwu[3]
            })
        }
        if(this.props.page === 4){
            this.setState({
                data:renwu[4]
            })
        }
        if(this.props.page === 5){
            this.setState({
                data:renwu[5]
            })
        }
        if(this.props.page === 6){
            this.setState({
                data:renwu[6]
            })
        }
        if(this.props.page === 7){
            this.setState({
                data:renwu[7]
            })
        }
    }

    renderDate({item,index}){
        return(
            <TouchableOpacity onPress={()=>this.context.navigate('LiuYu',item)} key={index}>
                <View style={{ flexDirection: "row", marginBottom: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                    <View style={{ width: width * 0.5 }}>
                        <View><Text>{item.name}</Text></View>
                        <View><Text>{item.jieshao}</Text></View>
                    </View>
                    <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri:item.pic1 }} />
                </View>
            </TouchableOpacity>
        )
    }

    ListHeaderComponent(){
        const {data} = this.state
        return(
            <View style={{ width: width * 0.3, height: 20, marginTop: 10, alignItems: "center", justifyContent: "center", borderRadius: 10,marginBottom:10 }}><Text style={{ fontSize: 15, fontWeight: 'bold' }}>{data.title}</Text></View>
        )
    }


    render() {
     const {data} = this.state
        return (

            <View style={{ width: width * 0.9, flex: 1, marginHorizontal: width * 0.05 }}>
                <FlatList
                data={data.renwu}
                keyExtractor={(item, index) => (index + '1')}
                renderItem={this.renderDate.bind(this)}
                ListHeaderComponent={this.ListHeaderComponent.bind(this)}/>
            </View>

        )
    }
}
