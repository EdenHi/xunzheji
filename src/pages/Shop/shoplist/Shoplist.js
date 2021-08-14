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
            <TouchableOpacity key={index} style={{backgroundColor:'white',width:width*0.425,marginLeft:width*0.05,borderRadius:10,marginBottom:width*0.05}} activeOpacity={1}
            onPress={()=>this.props.navigation.navigate('Shopdetails',{shops:item})}>
                <Image source={{uri:item.pic[0]}} style={{width:width *0.425,height:width*0.425,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                <Text style={{width:"100%",paddingLeft:8,paddingRight:8,paddingTop:8,paddingBottom:2}} numberOfLines={2}>{item.name}</Text>
                <View style={{flexDirection:'row',paddingLeft:8,alignItems:'baseline',justifyContent:'space-between',paddingRight:8,marginBottom:5}}>
                    <View style={{flexDirection:'row',alignItems:'baseline'}}>
                        <Text>￥</Text>
                        <Text style={{color:'#7cc0c0',fontSize:18}}>{item.price}</Text>
                    </View>
                    <Text>{item.sales}人付款</Text>
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
                        height: 45,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.goBack()}
                            style={{
                                width: 50,
                                position: "absolute",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                left: 0
                            }}>
                            <FontAwesome name={'angle-left'} size={25} color={'#000'} />
                        </TouchableOpacity>
                        <View style={{ width: 200 }}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>商品列表</Text>
                        </View>
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