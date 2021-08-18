/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,Dimensions,TouchableOpacity,AsyncStorage,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('window')
export default class shuping extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pinglun: [],
            denglu_username: '',
        }
    }

    get_pinglun() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                this.setState({
                    denglu_username: result,
                })
                fetch('http://8.142.11.85:3000/shouye/get_pinglun', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                        wenzhang_id: 11
                    })
                })
                    .then((response) => response.json())
                    .then((json) => {
                        this.setState({
                            pinglun: json
                        })
                    });
            }
        })
    }
    componentDidMount() {
        this.get_pinglun();
    }
    //更新文章评论点赞
    update_dianzan(v) {
        if (v.wenzhang_dianzan === this.state.denglu_username) {
            fetch('http://8.142.11.85:3000/shouye/update_pldianzan2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: v.id,
                }),
            });
        } else {
            fetch('http://8.142.11.85:3000/shouye/update_pldianzan', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: v.id,
                    username: this.state.denglu_username,
                }),
            });
        }
        this.get_pinglun();
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{width:width*0.9,marginLeft:width*0.05,marginTop:20}}>
                    {
                        this.state.pinglun.map((v,k)=>{
                                //取出年月日
                                let a = v.pinglun_time.slice(0,10)
                                //取出时分
                                let b = v.pinglun_time.slice(11,16)
                                let time1 = new Date();
                                let time2 = new Date(v.pinglun_time).getTime()
                                let sum = a+' '+b
                                //获得相差的秒
                                let ss = (time1 -time2)/1000
                                let day = Math.floor(ss/86400)
                                let hour = Math.floor(ss/3600)
                                let min = Math.floor(ss /60)
                                let time = ''
                                if(day >=1 && day<4){                    
                                    time=day+'天前'                      
                                }
                                else if(hour>=1 && hour <24){                         
                                    time=hour+'小时前'                         
                                }
                                else if(min>=1 && min < 60){                           
                                    time=min+'分钟前'                           
                                }
                                else if(day >= 4){                      
                                    time=sum                           
                                }
                                else{                          
                                    time='刚刚'
                                }
                            return(
                                <View style={{ marginTop: 10,backgroundColor: "#fff", padding: 5, borderRadius: 15, elevation: 5, marginBottom: 5 }} key={k}>
                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: width * 0.025, width: width * 0.85, alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={1}>
                                                <Image source={{ uri: v.portrait }} style={{ width: width * 0.08, height: width * 0.08, backgroundColor: 'pink', borderRadius: 50 }} />
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 14, marginLeft: '2%', fontWeight: 'bold', color: '#6edcf8' }}>{v.nickname}</Text>
                                                <Text style={{ marginTop: 10 }}>{v.pinglun}</Text>
                                                <Text style={{ color: '#aaa', marginRight: width * 0.2, fontSize: 13, marginTop: 10 }}>{time}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 10 }}>
                                            <Ionicons
                                                name={v.wenzhang_dianzan === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                size={20}
                                                color={v.wenzhang_dianzan === this.state.denglu_username ? 'red' : 'black'}
                                                onPress={() => this.update_dianzan(v)}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}