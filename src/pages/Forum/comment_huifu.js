/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,TouchableOpacity,Image ,StyleSheet, TextInput,AsyncStorage, ScrollView} from 'react-native';

export default class comment_huifu extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.route.params,
            huifu:[],
            content_huifu:'',
            username:'',
        };
    }
    //获取回复的数据
    componentDidMount(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
            }
        });
        fetch('http://192.168.50.117:3000/dongtai/comment_huifu', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
               id: this.state.data.id,
            },
        })
           .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    huifu:responseJson,
                });
            }) .catch((error) => {
                console.error('error',error);
              });
    }

    fabu(){
        var date = new Date();
        var seperatorl = '-';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var Minutes = date.getMinutes();
        var spc = ':';
        if (strDate >= 0 && strDate <= 9){
            strDate = '0' + strDate;
        }
        if (hours >= 0 && hours <= 9){
            hours = '0' + hours;
        }
        if (Minutes >= 0 && Minutes <= 9){
            Minutes = '0' + Minutes;
        }
        var currentdate = year + seperatorl + month + seperatorl + strDate + ' ' + hours + spc + Minutes;
        fetch('http://192.168.50.117:3000/dongtai/insert_huifu', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parent_id: this.state.data.id,
                content_huifu:this.state.content_huifu,
                username:this.state.username,
                date_huifu:currentdate,
              }),
        });
    }
    render() {
        const {data,huifu} = this.state;
        console.log('huifu',huifu);
        console.log('data',data);
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',marginTop:20,marginBottom:30}}>
                    <TouchableOpacity>
                        <Image source={{uri:data.portrait}} style={styles.touxiang}/>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.name}>{data.nickname}</Text>
                        <Text>{data.content}</Text>
                        <Text style={{color:'#aaa'}}>{data.date_zhu}</Text>
                    </View>
                </View>
                {/* 渲染回复列表 */}
                <ScrollView>
                {
                    huifu.map((v,k)=>{
                        return (
                            <View key={k}>
                                <View style={{flexDirection:'row',marginTop:20}}>
                                    <TouchableOpacity>
                                        <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                    </TouchableOpacity>
                                    <View style={{marginLeft:10}}>
                                        <Text style={styles.name}>{v.nickname}</Text>
                                        <Text>{v.content_huifu}</Text>
                                        <Text style={{color:'#aaa'}}>{v.date_huifu}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                }
                </ScrollView>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                    style={{backgroundColor:'#ccc',width:300}}
                    onChangeText={(content_huifu)=>this.setState({content_huifu:content_huifu})}/>
                    <TouchableOpacity onPress={()=>this.fabu()}>
                        <Text>发布</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    touxiang:{
        height:50,
        width:50,
        borderRadius:50,
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
    },
});
