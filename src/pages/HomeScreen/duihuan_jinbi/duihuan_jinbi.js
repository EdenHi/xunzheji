/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { FlatList } from 'react-native';

import {View,Dimensions,TouchableOpacity,Text, ScrollView, Image,AsyncStorage } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import shop from './duihuan_jinbi.json'
const {height,width} = Dimensions.get('window')
export default class duihuan_jinbi extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            shop:shop[0].shop
        }
    }

    get_jinbi(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                fetch('http://8.142.11.85:3000/index/select_jinbi', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                    })
                })
                    .then((response) => response.json())
                    .then((json) => {
                        this.setState({
                            data: json[0]
                        })
                    });
            }
        })
    }

    componentDidMount(){
        this.get_jinbi()
    }

    renderDate({item,index}){
        return(
            <TouchableOpacity style={{marginLeft:width*0.05,width:width*0.9,elevation:5,backgroundColor:'white',marginTop:10,borderRadius:10,flexDirection:'row'}} activeOpacity={1}>
                <Image source={{uri:item.img}} resizeMode='stretch' style={{height:width*0.25,width:width*0.25,margin:10,borderRadius:10}}/>
                <View style={{marginTop:10}}>
                    <Text style={{fontWeight:'bold',fontSize:18,width:width*0.55,color:"#333"}}
                    ellipsizeMode='tail'
                    numberOfLines={1}>{item.name}</Text>
                    <View style={{backgroundColor:'#f1f1f1',elevation:1,width:width*0.25,alignItems:'center',marginTop:10,borderRadius:10}}>
                        <Text style={{color:'#7cc0c0',}}>价值￥{item.price}</Text>
                    </View>
                    <View style={{flexDirection:'row',height:width*0.12,alignItems:'flex-end',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <FontAwesome5 name='coins' color='#daa520' size={15} />
                            <Text style={{color:'#7cc0c0',fontWeight:'bold',fontSize:18,marginLeft:2}}>{item.jinbi}  </Text>
                            <Text>{item.jinbi>this.state.data.jinbi?'(金币不足)':null}</Text>
                            </View>
                        </View>
                        <View style={{position:"absolute",marginLeft:width*0.37}}>
                            <View style={{width:75,backgroundColor:'#7cc0c0',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center'}}>
                                <Text style={{color:'white',fontSize:13,paddingLeft:10,paddingRight:10,paddingTop:3,paddingBottom:3,}}>去抢兑</Text>
                            </View>
                            <View style={{width:75,backgroundColor:'white',borderBottomLeftRadius:10,borderBottomRightRadius:10,alignItems:'center',borderWidth:1,borderColor:'#7cc0c0'}}>
                                <Text style={{color:'#7cc0c0',fontSize:10,paddingLeft:10,textAlign:"center",paddingRight:10,paddingTop:3,paddingBottom:3,width:80}}>已兑{item.duihuan}件</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const {data,shop} = this.state
        return (
            <View style={{flex:1}}>
                <View style={{ flexDirection: "row", alignItems: "center",width, height: height * 0.07, justifyContent:'space-between',alignItems:'center',backgroundColor:"#7cc0c0",paddingLeft:width*0.05,paddingRight:width*0.05 }}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.goBack()}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',marginLeft:10,alignItems:'center'}}>
                            <FontAwesome5 name='coins' color='#daa520' size={15} />
                            <Text style={{color:'#fff',marginLeft:2}}>{data.jinbi}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff"}}>福利中心</Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff"}}>兑换记录</Text>
                </View>

                   <FlatList
                   contentContainerStyle={{}}
                   data={shop}
                   renderItem={this.renderDate.bind(this)}/>
                   

            </View>
        );
    }
}