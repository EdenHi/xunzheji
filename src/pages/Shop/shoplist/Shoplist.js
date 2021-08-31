/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {Image, View,FlatList,Dimensions,TouchableOpacity,Text } from 'react-native';
import list from './shoplist.json';
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width,height} = Dimensions.get('window');
export default class Shoplist extends Component {
    constructor(props){
        super(props)
        this.state = {
            shops:this.props.route.params.shops,
        }
    }

    renderDate({item,index}){
        return(
            <TouchableOpacity key={index} style={{backgroundColor:'white',width:width*0.425,marginLeft:width*0.05,borderRadius:10,marginBottom:width*0.05,elevation:5}} activeOpacity={1}
            onPress={()=>this.props.navigation.navigate('Shopdetails',{shops:item,username:this.state.username})}>
                <Image source={{uri:item.pic[0]}} style={{width:width *0.425,height:width*0.425,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                <Text style={{width:"100%",paddingLeft:8,paddingRight:8,paddingTop:8,paddingBottom:2,color:"#333333",fontSize:13}} numberOfLines={2}>{item.name}</Text>
                <View style={{flexDirection:'row',paddingLeft:8,alignItems:'baseline',justifyContent:'space-between',paddingRight:8,marginBottom:5}}>
                    <View style={{flexDirection:'row',alignItems:'baseline'}}>
                        <Text style={{color:"#7cc0c0",fontSize:15}}>￥</Text>
                        <Text style={{color:'#7cc0c0',fontSize:15}}>{item.price}</Text>
                    </View>
                    <Text style={{color:"#333333",fontSize:10}}>{item.sales}人付款</Text>
                </View>
            </TouchableOpacity>
        )
    }

    footerDate(){
        return(
            <Text style={{textAlign:"center",marginBottom:10}}>—————————————到底啦—————————————</Text>
        )
    }
    render() {
        console.log('123',this.props.route.params.shops);
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0c0","#fff"]} >
                    {/* 标题 */}
                    <View style={{
                        height: height*0.07,
                        alignItems: "center",
                        width:width*0.9,
                        flexDirection: 'row',
                        marginLeft:width*0.05
                    }}>
                        <TouchableOpacity
                        style={{width:width*0.06}}
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.goBack()}
                            >
                            <FontAwesome name={'angle-left'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                            <Text style={{
                                fontSize: 18,
                                fontWeight:"bold",
                                color:"#fff",
                                // marginLeft:"2%"
                            }}>商品列表</Text>
                       
                    </View>

                        <FlatList
                        numColumns={2}
                        keyExtractor={(item, index) => (index + '1')}
                        data={this.state.shops}
                        renderItem={this.renderDate.bind(this)}
                        ListFooterComponent={this.footerDate.bind(this)}/>                        
                        

                </LinearGradient>
            </View>
        );
    }
}