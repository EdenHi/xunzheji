
import React, { Component } from 'react'
import { View, Image, Dimensions, Text, ImageBackground, TouchableOpacity,FlatList } from 'react-native'
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions'
import Jiangren from './JiangRen.json'
const { width, height } = Dimensions.get("window")
export default class JiangRen extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        if(this.props.page===0){
            this.setState({data:Jiangren[0].taoci})
        }
        if(this.props.page===1){
            this.setState({data:Jiangren[1].diaoke})
        }
        if(this.props.page===2){
            this.setState({data:Jiangren[2].zhuanke})
        }
        if(this.props.page===3){
            this.setState({data:Jiangren[3].cixiu})
        }
        if(this.props.page===4){
            this.setState({data:Jiangren[4].wenfang})
        }
        if(this.props.page===5){
            this.setState({data:Jiangren[5].yinshua})
        }
        if(this.props.page===6){
            this.setState({data:Jiangren[6].all})
        }
        if(this.props.page===7){
            this.setState({data:Jiangren[7].gongyi})
        }
        if(this.props.page===8){
            this.setState({data:Jiangren[8].muzhi})
        }
    }
    renderItem({item,index}){
        return(
            <View>
                <View style={{width:width*0.9,height:height*0.3,elevation:5,marginTop:height*0.02,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:10}}>
                    <Image source={{uri:item.imag}}  style={{width:"100%",height:"70%",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
                    <View style={{width:"100%",height:"30%"}}>
                        <View style={{width:width*0.65,height:"75%",marginLeft:width*0.25,flexDirection:"row"}}>
                            <View style={{width:'60%',height:"100%",justifyContent:"center"}}>
                                <Text style={{fontSize:15,color:"#333",marginLeft:width*0.02}}>{item.name}</Text>
                                <Text style={{fontSize:12,color:"#999",marginLeft:width*0.02}}>{item.jianjie}</Text>
                            </View>
                            <View style={{width:'40%',height:"100%",alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{width:"80%",height:"70%",backgroundColor:"#7cc0c0",elevation:5,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:13,color:"#fff"}}>请他定制</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={{uri:item.pic}} style={{width:width*0.22,height:width*0.22,borderWidth:2,borderColor:"#fff",borderRadius:50,position:"absolute",marginLeft:width*0.03,marginTop:height*0.17}}></Image>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                <FlatList
                data={this.state.data}
                keyExtractor={(item,index)=>(index+1)}
                renderItem={this.renderItem.bind(this)}/>
                
                
            </View>
        )
    }
}
