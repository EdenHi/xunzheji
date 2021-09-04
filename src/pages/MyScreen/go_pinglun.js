/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,TouchableOpacity,Dimensions,Image,AsyncStorage,FlatList,DeviceEventEmitter } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
export default class go_pinglun extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            username:'',
        }
    }

    go_pinglun(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                this.setState({username:result})
                fetch('http://47.100.78.254:3000/index/select_go_pinglun', {
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
    componentDidMount(){
        this.go_pinglun()
        this.listener = DeviceEventEmitter.addListener('test',this.go_pinglun.bind(this))
    }
    
    componentWillUnmount(){
        this.listener.remove();
    }
    renderDate({item,index}){
         //取出年月日
         let a = item.date_zhu.slice(0, 10)
         //取出时分
         let b = item.date_zhu.slice(11, 16)
         let time1 = new Date();
         let time2 = new Date(item.date_zhu).getTime()
         let sum = a + ' ' + b
         //获得相差的秒
         let ss = (time1 - time2) / 1000
         let day = Math.floor(ss / 86400)
         let hour = Math.floor(ss / 3600)
         let min = Math.floor(ss / 60)
         let time = ''
         if (day >= 1 && day < 4) {time = day + '天前'}
         else if (hour >= 1 && hour < 24) {time = hour + '小时前'}
         else if (min >= 1 && min < 60) {time = min + '分钟前'}
         else if (day >= 4) {time = sum}
         else {time = '刚刚'}
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Comment',{title_id:item.comment_id,counts:item.counts})} key={index} style={{ width: width * 0.9, height: height * 0.11, flexDirection: 'row', backgroundColor: "#fff", justifyContent:'space-between',alignItems: "center", marginHorizontal: width * 0.05, marginBottom: 20, elevation: 1, borderRadius: 10 }} activeOpacity={1}>
                <View style={{flexDirection:'row'}}>
                    <Image source={{ uri:item.portrait }} style={{ width: width * 0.1, height: width * 0.1, borderRadius: 50, marginLeft: 10 }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>{item.nickname}</Text>
                        <Text style={{ fontSize: 13 }}>{`评论："${item.content}"`}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Text style={{color:'#ccc',marginRight:5}}>{time}</Text>
                    <Image source={{uri:item.pic[0]}} style={{width:width*0.15,height:width*0.15,marginRight:10,borderRadius:10}}/>
                </View>
                
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View  style={{ height: height * 0.07, alignItems: "center", flexDirection: "row", backgroundColor: global.back2, elevation: 1 }}>
                    <AntDesign style={{marginLeft:width*0.025}} name='left' size={20} color='#fff' onPress={() => this.props.navigation.goBack()} />
                    <Text style={{ fontSize: 18, color: "#fff", marginLeft: "2%", fontWeight: "bold" }}>评论</Text>
                </View>
                {this.state.data.length>0?
                <FlatList
                style={{marginTop:20}}
                data={this.state.data}
                keyExtractor={(item,index)=>(index+1)}
                renderItem={this.renderDate.bind(this)}/>
                :
                <View style={{width,height:height*0.93,alignItems:'center',justifyContent:"center",backgroundColor:"#fff"}}>
                    <Image style={{width:width*0.5,height:width*0.5}} source={require("../nothingpic/暂无消息.png")}></Image>
                    <Text style={{color:global.back2,fontSize:15,}}>暂无评论</Text>
                </View>}
            </View>
        );
    }
}