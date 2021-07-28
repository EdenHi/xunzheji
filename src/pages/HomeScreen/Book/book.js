/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {ScrollView, TouchableOpacity, View,Text, FlatList,Image,Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const {height,width} = Dimensions.get('window');
export default class book extends Component {
    constructor(props){
        super(props);
        this.state = {
            data0:[],
            data1:[],
            backgroundColor0:'#fedc61',
            backgroundColor1:'#f5e7aa',
            backgroundColor2:'#f5e7aa',
            backgroundColor3:'#f5e7aa',
            fontWeight0:'bold',
            fontWeight1:'100',
            fontWeight2:'100',
            fontWeight3:'100',
        };
    }
    componentDidMount(){
        fetch('http://192.168.50.117:3000/dongtai/selectBook', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title_id: 0,
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
              data0:responseJson[0],
              data1:responseJson[1],
          });
        });
}
    select_book(i){
        fetch('http://192.168.50.117:3000/dongtai/selectBook', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title_id: i,
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
            if (i === 0){
                this.setState({
                    data0:responseJson[0],
                    data1:responseJson[1],
                    backgroundColor0:'#fedc61',
                    backgroundColor1:'#f5e7aa',
                    backgroundColor2:'#f5e7aa',
                    backgroundColor3:'#f5e7aa',
                    fontWeight0:'bold',
                    fontWeight1:'100',
                    fontWeight2:'100',
                    fontWeight3:'100',
                });
            }
            if (i === 1){
                this.setState({
                    data0:responseJson[0],
                    data1:responseJson[1],
                    backgroundColor1:'#fedc61',
                    backgroundColor0:'#f5e7aa',
                    backgroundColor2:'#f5e7aa',
                    backgroundColor3:'#f5e7aa',
                    fontWeight1:'bold',
                    fontWeight0:'100',
                    fontWeight2:'100',
                    fontWeight3:'100',
                });
            }
            if (i === 2){
                this.setState({
                    data0:responseJson[0],
                    data1:responseJson[1],
                    backgroundColor2:'#fedc61',
                    backgroundColor0:'#f5e7aa',
                    backgroundColor1:'#f5e7aa',
                    backgroundColor3:'#f5e7aa',
                    fontWeight2:'bold',
                    fontWeight0:'100',
                    fontWeight1:'100',
                    fontWeight3:'100',
                });
            }
            if (i === 3){
                this.setState({
                    data0:responseJson[0],
                    data1:responseJson[1],
                    backgroundColor3:'#fedc61',
                    backgroundColor0:'#f5e7aa',
                    backgroundColor1:'#f5e7aa',
                    backgroundColor2:'#f5e7aa',
                    fontWeight3:'bold',
                    fontWeight0:'100',
                    fontWeight1:'100',
                    fontWeight2:'100',
                });
            }
        });
    }
    renderItem({item,index}){
        return (
            <View key={index}>
                <Image source={{uri:item.pic}} style={{height:width / 2 + 40,width:width * 0.925 / 2,marginLeft:width * 0.025,marginBottom:width * 0.025,borderRadius:10}}/>
            </View>
        );
    }

    foot(){
        return (
            <View style={{width,justifyContent:'center',alignItems:'center',marginBottom:20}}>
                <Text style={{color:'#666'}}>已显示全部内容</Text>
            </View>
        )
    }

    render() {
        const {data0,data1,backgroundColor0,backgroundColor1,backgroundColor2,backgroundColor3,fontWeight0,fontWeight1,fontWeight2,fontWeight3} = this.state;
        return (
            <View >
                <ScrollView
                style={{width:width * 0.95,marginLeft:width * 0.025,marginTop:20,marginBottom:20}}
                horizontal
                showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{backgroundColor:backgroundColor0,width:width * 0.925 / 4.5,height:width * 0.06,justifyContent:'center',alignItems:'center',borderRadius:5}}
                    onPress={()=>this.select_book(0)}>
                        <Text style={{fontWeight:fontWeight0}}>党史</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:30,backgroundColor:backgroundColor1,width:width * 0.925 / 4.5,height:width * 0.06,justifyContent:'center',alignItems:'center',borderRadius:5}}
                    onPress={()=>this.select_book(1)}>
                        <Text style={{fontWeight:fontWeight1}}>文学</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:30,backgroundColor:backgroundColor2,width:width * 0.925 / 4.5,height:width * 0.06,justifyContent:'center',alignItems:'center',borderRadius:5}}
                    onPress={()=>this.select_book(2)}>
                        <Text style={{fontWeight:fontWeight2}}>经济</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:30,backgroundColor:backgroundColor3,width:width * 0.925 / 4.5,height:width * 0.06,justifyContent:'center',alignItems:'center',borderRadius:5}}
                    onPress={()=>this.select_book(3)}>
                        <Text style={{fontWeight:fontWeight3}}>传记</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{height:height - width * 0.11 - 40}}>
                    <ScrollView >
                        <FlatList
                        keyExtractor={(item, index) => (index + '1')}
                        data = {data0}
                        numColumns={2}
                        renderItem={this.renderItem.bind(this)}/>

                        <View style={{backgroundColor:'white',width:width * 0.95,marginLeft:width * 0.025,marginBottom:20,marginRight:width * 0.025,borderRadius:10,elevation:5}}>
                            <View style={{marginLeft:20,marginRight:20,marginBottom:20,marginTop:10}}>
                                <View style={{flexDirection:'row',borderBottomColor:'black',borderBottomWidth:1 / 2,paddingBottom:10}}>
                                    <MaterialCommunityIcons
                                    name="message-processing-outline"
                                    size={20}/>
                                    <Text style={{marginLeft:10}}>热门评论</Text>
                                </View>
                                <View style={{marginTop:20,borderBottomColor:'#666',borderBottomWidth:1 / 3,paddingBottom:10}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image source={{uri:'https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg'}} style={{height:30,width:30,borderRadius:10}}/>
                                        <Text style={{color:'skyblue',marginLeft:10}}>Mo</Text>
                                        <Text style={{marginLeft:10}}>评论《阅人》</Text>
                                    </View>
                                    <Text style={{marginTop:10,color:'#666'}}>以为是患难之交，但到底是人心叵测</Text>
                                </View>
                                <View style={{marginTop:20,borderBottomColor:'#666',borderBottomWidth:1 / 3,paddingBottom:10}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image source={{uri:'https://img2.baidu.com/it/u=1325995315,4158780794&fm=26&fmt=auto&gp=0.jpg'}} style={{height:30,width:30,borderRadius:10}}/>
                                        <Text style={{color:'skyblue',marginLeft:10}}>山夫</Text>
                                        <Text style={{marginLeft:10}}>评论《人之子》</Text>
                                    </View>
                                    <Text style={{marginTop:10,color:'#666'}}>谈百家之所长，甄百家之所见</Text>
                                </View>
                                <View style={{marginTop:20,borderBottomColor:'#666',borderBottomWidth:1 / 3,paddingBottom:10}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image source={{uri:'https://img2.baidu.com/it/u=325567737,3478266281&fm=26&fmt=auto&gp=0.jpg'}} style={{height:30,width:30,borderRadius:10}}/>
                                        <Text style={{color:'skyblue',marginLeft:10}}>咿呀</Text>
                                        <Text style={{marginLeft:10}}>评论《百年浙商》</Text>
                                    </View>
                                    <Text style={{marginTop:10,color:'#666'}}>浙商的发展可以说是一段经久不衰的传奇故事</Text>
                                </View>
                            </View>
                        </View>

                        <FlatList
                        keyExtractor={(item, index) => (index + '1')}
                        data = {data1}
                        numColumns={2}
                        ListFooterComponent={()=>this.foot()}
                        renderItem={this.renderItem.bind(this)}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
