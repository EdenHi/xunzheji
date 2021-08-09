/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Dimensions,TouchableOpacity,Text,Image, StyleSheet,FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import shoplist from './shoplist.json'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {height,width} = Dimensions.get('window');
export default class Shopclassifymore extends Component {
    constructor(props){
        super(props)
        this.state = {
            dalei:[],
        }
    }
    componentDidMount(){
        if(this.props.route.params.dalei === 'canyin'){
            this.setState({
                dalei:shoplist[0].canyin
            })
        }
        if(this.props.route.params.dalei === 'meishi'){
            this.setState({
                dalei:shoplist[1].meishi
            })
        }
        if(this.props.route.params.dalei === 'zhizao'){
            this.setState({
                dalei:shoplist[2].zhizao
            })
        }
        if(this.props.route.params.dalei === 'gongmei'){
            this.setState({
                dalei:shoplist[3].gongmei
            })
        }
        if(this.props.route.params.dalei === 'chajiu'){
            this.setState({
                dalei:shoplist[4].chajiu
            })
        }
    }

    //num为0时的渲染
    renderDate({item,index}){
        if(index%2 === 1){
            return(
                <TouchableOpacity
                    activeOpacity={0.8}
                //    onPress={()=>{
                //        navigation.navigate('Shoplist',{xiaolei:"石雕"})
                //    }}
                    key={index}
                    >
                    <View style={{
                        width: "100%",
                        height: 80,
                        flexDirection: 'row',
                        marginTop:40
                    }}>
                        <Image style={{
                            width: "33%",
                            height: "100%",
                            resizeMode: "stretch",
                            
                        }}
                        source={{uri:item.pic}}
                            >
                        </Image>
                        <View style={{
                            width: "33%",
                            height: "100%",
                            justifyContent:'center',
                            alignItems:"center"
                        }}>
                            <Text style={{fontSize:21,fontWeight:"bold"}}>{item.name}</Text>
                            <Text>{item.pinyin}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        if(index%2 === 0){
            return(
            <TouchableOpacity
                activeOpacity={0.8}
            //    onPress={()=>{
            //        navigation.navigate('Shoplist',{xiaolei:"铜雕"})
            //    }}
                >
                <View style={{
                    width: "100%",
                    height: 80,
                    flexDirection: 'row',
                    justifyContent: "flex-end",
                    marginTop:40
                }}>
                    <Image style={{
                        width: "33%",
                        height: "100%",
                        resizeMode: "stretch",
                        
                    }}
                    source={{uri:item.pic}}
                        >
                    </Image>
                    <View style={{
                        width: "33%",
                        height: "100%",
                        justifyContent:'center',
                        alignItems:"center"
                    }}>
                        <Text style={{fontSize:21,fontWeight:"bold"}}>{item.name}</Text>
                        <Text>{item.pinyin}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            )}
    }

    //num不为0时的渲染
    renderDate2({item,index}){
        if(index%2 === 0){
            return(
                <TouchableOpacity
                        activeOpacity={0.8}
                    //    onPress={()=>{
                    //        navigation.navigate('Shoplist',{xiaolei:"龙泉窑"})
                    //    }}
                        >
                    <View style={{
                        width: "100%",
                        height: 80,
                        flexDirection: 'row',
                        marginTop:40
                    }}>
                        <View style={{
                            width: "33%",
                            height: "100%",
                            justifyContent:'center',
                            alignItems:"center"
                        }}>
                            <Text style={{fontSize:21,fontWeight:"bold"}}>{item.name}</Text>
                            <Text>{item.pinyin}</Text>
                        </View>
                        <Image style={{
                            width: "33%",
                            height: "100%",
                            resizeMode: "stretch",
                            
                        }}
                        source={{uri:item.pic}}
                            >
                        </Image>
                    </View>
                </TouchableOpacity>
            )
        }
        if(index%2 === 1){
            return(
                <TouchableOpacity
                        activeOpacity={0.8}
                    //    onPress={()=>{
                    //        navigation.navigate('Shoplist',{xiaolei:"婺州窑"})
                    //    }}
                        >
                    <View style={{
                        width: "100%",
                        height: 80,
                        flexDirection: 'row',
                        justifyContent:"flex-end",
                        marginTop:40
                    }}>
                        <View style={{
                            width: "33%",
                            height: "100%",
                            justifyContent:'center',
                            alignItems:"center"
                        }}>
                            <Text style={{fontSize:21,fontWeight:"bold"}}>{item.name}</Text>
                            <Text>{item.pinyin}</Text>
                        </View>
                        <Image style={{
                            width: "33%",
                            height: "100%",
                            resizeMode: "stretch",
                    
                        }}
                        source={{uri:item.pic}}
                            >
                        </Image>
                    </View>
                </TouchableOpacity>
            )
        }
    }


    //底部渲染
    ListFooterComponent(){
        return(
            <Text style={{textAlign:"center",marginTop:20}}>—————————————到底啦—————————————</Text>
        )
    }

    render() {
        const { navigation } = this.props;
        console.log('num',this.props.route.params.num);
        console.log('dalei',this.props.route.params.dalei);
        return (
            <View style={{ flex: 1 }}>
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
                            onPress={() => navigation.goBack()}
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
                            }}>{this.props.route.params.title}</Text>
                        </View>
                    </View>
                    <FlatList
                    contentContainerStyle={{ width: "92%",marginLeft:"4%"}}
                    keyExtractor={(item, index) => (index + '1')}
                    data={this.state.dalei}
                    renderItem={this.props.route.params.num%2 === 0 ?this.renderDate.bind(this) : this.renderDate2.bind(this)}
                    ListFooterComponent={this.ListFooterComponent.bind(this)}/>
                </LinearGradient>
            </View>
        );
    }
}