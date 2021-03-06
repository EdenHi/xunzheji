import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity,AsyncStorage,DeviceEventEmitter } from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import EZSwiper from 'react-native-ezswiper';
import axios from 'axios';
import { FlatList } from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { color } from 'react-native-elements/dist/helpers';


const { width, height } = Dimensions.get('window');

export default class fans extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            username:this.props.route.params,
            data:[],
            panduan_guanzhu:'',
            denglu_username:'',
        }

    }


    select_shuju(){
        fetch('http://47.100.78.254:3000/index/select_fans', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name:this.state.username,
              }),
        }) .then((response) => response.json())
            .then((json)=>{
                this.setState({
                    data:json
                })
            });
    }

    goBack(){
        DeviceEventEmitter.emit('test',1)
        this.props.navigation.goBack();
    }

    componentDidMount(){
 
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                console.log('denglu_username',result);
                this.setState({
                    denglu_username:result,
                },()=>{
                    console.log('123');
                });
                this.select_shuju();
            }
        })
        this.listener = DeviceEventEmitter.addListener('test2',this.select_shuju.bind(this));
       
    }
    componentWillUnmount(){
        this.listener.remove();
        }
  


    renderData({item,index}){
        return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:2}} onPress={()=>{this.props.navigation.push('people',item.username),
                                                                                    AsyncStorage.setItem('Person',item.username,(error)=>{
                                                                                        if (!error){
                                                                                            console.log('Person????????????');
                                                                                        } else {
                                                                                            console.log('????????????',err);
                                                                                        }
                                                                                    });}
                                                                                    }>
        <View style={{ marginLeft:width*0.05,borderRadius:10,width: width * 0.9, height: 80, flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10,backgroundColor:"#fff",elevation:5,justifyContent:'space-between'}}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{ marginLeft: 15 }}><Image style={{ width: width * 0.15, height: width * 0.15, borderRadius: 100 }} source={{uri:item.portrait}} /></View>
                <View>
                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto" }}>{item.nickname}</Text>
                    <Text style={{ height: 25, marginLeft: 10, textAlign: "auto",fontSize:12,width:width*0.4}} numberOfLines={1}>{item.signature}</Text>
                </View>  
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.btn1}  >
                <Text style={{fontSize:12}}>????????????</Text>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
        )
    }

    render() {
        console.log('username',this.props.route.params);
        console.log('denglu_username',this.state.denglu_username);
        return (
                <View style={{width:width}}>
                     <LinearGradient colors={[global.mainColor, '#fff', '#fff']}>
                    <View style={{ flexDirection: "row", height: height*0.07,width:width*0.9,marginLeft:width*0.05, alignItems: "center" }}>
                        <TouchableOpacity style={{ width:width*0.06}} onPress={()=>this.goBack()}>
                        <FontAwesome  name={'angle-left'} size={25} color={'#fff'} />
                            {/* <AntDesign name="left" size={20} color="#fff" /> */}
                        </TouchableOpacity>
                        <View style={{ }}>
                            <Text style={{ fontSize: 18, color:"#fff",fontWeight:"bold"}}>
                                ????????????
                            </Text>
                        </View>
                        <TouchableOpacity style={{ width: width * 0.2, height: 20 }}></TouchableOpacity>
                    </View>
                    <View style={{height:height*0.93}}>
                        <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => (index + '1')}
                        renderItem={this.renderData.bind(this)}/>

                    </View>
                    </LinearGradient>
                </View>
           
        )
    }
}
const styles=StyleSheet.create({
    btn1:{
        backgroundColor: "#fff", 
        width: width * 0.18, 
        height: width * 0.08, 
        borderRadius: 20, 
        alignItems: "center", 
        justifyContent: "center", 
        marginRight:10,
        elevation:5
    },
    btn2:{
        backgroundColor: "red", 
        width: width * 0.18, 
        height: width * 0.07, 
        borderRadius: 20, 
        alignItems: "center", 
        justifyContent: "center", 
        marginLeft: 40
    },
})


