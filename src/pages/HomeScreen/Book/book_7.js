/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,TouchableOpacity,Text,Dimensions,Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BookRoute from '../../../nav/BookRoute'
const {height,width} = Dimensions.get('window')
export default class book_7 extends Component {
    
    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{ flex: 1 }} colors={["#7cc0bf", "#fff", "#fff"]}>
                    {/* 标题 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", }}>书籍详情</Text>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="export" size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                        <View style={{marginLeft:width*0.05}}>
                            <Text style={{marginTop:20,fontSize:18,color:'#fff'}}>茅理翔：创业式传承</Text>
                            <Text style={{marginTop:20,color:'#fff',fontSize:13}}>陈凌</Text>
                        </View>
                        <Image source={{uri:'https://bkimg.cdn.bcebos.com/pic/9f510fb30f2442a75c929dfadf43ad4bd01302d4?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg'}} style={{height:150,width:100,marginRight:width*0.05}}/>
                    </View>
                    
                    <View style={{backgroundColor:'#fff'}}>
                        <BookRoute route={this.props.route.params.ii}/>
                    </View>
                        

                    </ScrollView>
                    
                    
                    
                    
                    <View style={{flexDirection:'row',alignItems:"center",backgroundColor:'#fff',elevation:5,justifyContent:'space-around'}}>
                        <TouchableOpacity activeOpacity={1} style={{alignItems:'center',marginTop:5,marginBottom:5}}>
                            <MaterialCommunityIcons
                            name='book-plus-multiple'
                            color="#333"
                            size={30}/>
                            <Text style={{color:"#333",fontSize:13}}>加书架</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{alignItems:'center',marginTop:5,marginBottom:5}}>
                            <MaterialCommunityIcons
                            name='headphones'
                            color="#333"
                            size={30}/>
                            <Text style={{color:"#333",fontSize:13}}>听书</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={{elevation:5,justifyContent:'center',backgroundColor:'#7cc0c0',borderRadius:20,width:width*0.4,alignItems:"center",height:height*0.06}}  onPress={()=>this.props.navigation.navigate('book_xiangqing_7',{k:0})}>
                            <Text style={{fontSize:15,color:"#fff"}}>立即阅读</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}