/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,TouchableOpacity,Text,Dimensions,Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BookRoute from '../../../nav/BookRoute'
const {height,width} = Dimensions.get('window')
export default class book_1 extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{ flex: 1 }} colors={["#7cc0bf", "#fff", "#fff"]}>
                    {/* 标题 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="export" size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                        <View style={{marginLeft:width*0.05}}>
                            <Text style={{marginTop:20,fontSize:20,fontWeight:'bold',color:'#333'}}>勇立潮头看浙商</Text>
                            <Text style={{marginTop:20,color:'#333'}}>周咏南</Text>
                        </View>
                        <Image source={{uri:'https://img0.baidu.com/it/u=2944285600,2767547880&fm=26&fmt=auto&gp=0.jpg'}} style={{height:150,width:100,marginRight:width*0.05}}/>
                    </View>
                    
                    <View style={{backgroundColor:'#fff'}}>
                        <BookRoute/>
                    </View>
                        

                    </ScrollView>
                    
                    
                    
                    
                    <View style={{flexDirection:'row',backgroundColor:'#eee',justifyContent:'space-around'}}>
                        <TouchableOpacity activeOpacity={1} style={{alignItems:'center',marginTop:5,marginBottom:5}}>
                            <MaterialCommunityIcons
                            name='book-plus-multiple'
                            size={30}/>
                            <Text>加书架</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{alignItems:'center',marginTop:5,marginBottom:5}}>
                            <MaterialCommunityIcons
                            name='headphones'
                            size={30}/>
                            <Text>听书</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{justifyContent:'center'}}>
                            <Text style={{backgroundColor:'#7cc0c0',paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,borderRadius:20}}>立即免费阅读</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}