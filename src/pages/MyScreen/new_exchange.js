/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,TouchableOpacity,Text,Dimensions,ImageBackground,Image, TextInput,ScrollView,AsyncStorage} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'

const {width,height} = Dimensions.get('window')
export default class new_exchange extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const item = this.props.route.params.item
        return (
            <View style={{flex:1}}> 
                <LinearGradient style={{flex:1}} colors={[global.back2, "#fff", "#fff"]}>
                    
                    {/* 标题 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft:"2%"}}>详细情况</Text>
                        
                    </View>
                
                    <ScrollView>
                        {/* 想要交换的物品信息 */}
                        <View style={{ marginHorizontal: width * 0.05, marginVertical: 20 }}>
                            <ImageBackground imageStyle={{ borderRadius: 15 }} style={{ width: width * 0.9, height: height * 0.3,alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img2.baidu.com/it/u=133347796,434139622&fm=26&fmt=auto&gp=0.jpg' }} >
                                <View style={{ backgroundColor: "rgba(255,255,255,0.7)", width: width * 0.7, height: height * 0.2 }}>
                                    <View style={{flexDirection:'row',top:-width*0.05,left:10}}>
                                        <Image source={{uri:item.portrait}} style={{width:width*0.1,height:width*0.1,borderRadius:50}}/>
                                        <View style={{marginLeft:5,justifyContent:'space-between'}}>
                                            <Text>{item.nickname}</Text>
                                            <Text>{item.renzheng}</Text>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: "center", justifyContent: "center"}}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333333" }}>交换的物品：</Text>
                                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.wupin}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>想换什么：</Text>
                                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}>{item.exchang_wupin}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    
                        {/* 自己的物品信息 */}
                        <View style={{width:width*0.9,height:height*0.15,marginLeft:width*0.05,borderRadius:15,backgroundColor:'#fff',marginTop:10}}>
                            <Text style={{fontSize:18,color:'#333',marginLeft:20}}>对方商品信息：</Text>
                                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                    <Image source={{uri:item.image}} style={{height:width*0.2,width:width*0.2,marginLeft:20}}/>

                                    <View style={{marginLeft:30,justifyContent:'space-around',height:width*0.2}}>
                                        <Text style={{fontSize:14}} >{`类别：`+item.leibie}</Text>
                                        <Text style={{fontSize:14}} >{`名称：`+item.mingcheng}</Text>
                                    </View>
                                </View>
                                
                        </View>

                        {/* 给对方留言 */}
                        <View style={{width:width*0.9,marginLeft:width*0.05,height:height*0.3,borderRadius:15,backgroundColor:'#fff',marginVertical: 20}}>
                            <Text style={{fontSize:18,color:'#333',marginLeft:20,marginTop:10}}>对方的留言：</Text>
                            <Text style={{width:'100%',paddingHorizontal:'5%',fontSize:14,marginTop:10,color:'#ccc'}}>{`\t\t`+item.liuyan}</Text>
                        </View>
                    </ScrollView>
                
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
                        <TouchableOpacity style={{backgroundColor:'red',borderRadius:30}}>
                            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',paddingHorizontal:30,paddingVertical:10}}>拒绝</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundcolor:global.back2,borderRadius:30}}>
                            <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',paddingHorizontal:30,paddingVertical:10}}>接收</Text>
                        </TouchableOpacity>
                    </View>
                    
                </LinearGradient>
            </View>
        );
    }
}