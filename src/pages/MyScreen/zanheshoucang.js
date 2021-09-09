/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';


import { View,Text,TouchableOpacity,Dimensions,FlatList,Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
export default class zanheshoucang extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            username:'',
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                this.setState({username:result})
                fetch('http://47.100.78.254:3000/index/select_zanyushoucang', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: result
                    })
                }).then((response) => response.json())
                    .then((json) => {
                        this.setState({data:json})
                    })
            }
        })
        
    }


    renderDate({item,index}){
    if(item.dianzan_username==='' || item.dianzan_username===this.state.username){
        return;
    }else{
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Comment',{title_id:item.title_id,counts:item.counts})} key={index} style={{ width: width * 0.9, height: height * 0.11, flexDirection: 'row', backgroundColor: "#fff", justifyContent:'space-between',alignItems: "center", marginHorizontal: width * 0.05, marginBottom: 20, elevation: 1, borderRadius: 10 }} activeOpacity={1}>
                <View style={{flexDirection:'row'}}>
                    <Image source={{ uri:item.portrait }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50, marginLeft: 10 }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>{item.nickname}</Text>
                        <Ionicons
                        name={"heart-outline" }
                        size={18}
                        color={global.mainColor } />
                    </View>
                </View>
                <Image source={{uri:item.pic[0]}} style={{width:width*0.15,height:width*0.15,marginRight:10,borderRadius:10}}/>
            </TouchableOpacity>
        )
    }
}


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View  style={{ height: height * 0.07, alignItems: "center", flexDirection: "row", backgroundColor: global.mainColor, elevation: 1 }}>
                    <AntDesign style={{marginLeft:width*0.025}} name='left' size={20} color='#fff' onPress={() => this.props.navigation.goBack()} />
                    <Text style={{ fontSize: 18, color: "#fff", marginLeft: "2%", fontWeight: "bold" }}>赞和收藏</Text>
                </View>
                {this.state.data.length>0?
                <FlatList
                contentContainerStyle={{marginTop:20}}
                data={this.state.data}
                keyExtractor={(item,index)=>(index+1)}
                renderItem={this.renderDate.bind(this)}/>
                :
                <View style={{width,height:height,top:-20,alignItems:'center',justifyContent:"center",backgroundColor:"#fff"}}>
                    <Image style={{width:width*0.5,height:width*0.5}} source={require("../nothingpic/暂无消息.png")}></Image>
                    <Text style={{color:global.mainColor,fontSize:15,}}>暂无消息</Text>
                </View>}
            </View>
        );
    }
}