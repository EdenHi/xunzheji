/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text, ScrollView, FlatList,AsyncStorage,Dimensions,ImageBackground,TouchableOpacity,DeviceEventEmitter, Image} from 'react-native';

const {height,width} = Dimensions.get('window');
export default class dianzan extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            denglu_username:'',
        }
    }

    //获取点赞数据
    get_shuju(){
        fetch('http://192.168.50.117:3000/index/selectDianzan',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                dianzan_username:this.state.denglu_username,
            })
        })
           .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data:responseJson,
                });
            }) .catch((error) => {
                console.error('error',error);
              });
       
    }

    componentDidMount(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                this.setState({
                    denglu_username:result
                },()=>{
                    console.log('result',result);
                })
                this.get_shuju();
            }
        })
    }


    renderData({item,index}){
        return (
            <View style={{backgroundColor:'white',width,marginBottom:10}} key={index}>
                <View style={{width:width * 0.9,margin:width * 0.05}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri:item.portrait}} style={{height:width * 0.11,width:width*0.11,borderRadius:50}}/>
                        <Text style={{marginLeft:10,fontSize:18}}>{item.nickname}</Text>
                    </View>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} activeOpacity={1} onPress={()=>this.props.navigation.navigate('Comment',this.state.data[index])}>
                        <Image source={{uri:item.pic[0]}} style={{width:width*0.2,height:width*0.2,marginTop:15}}/>
                        <Text style={{marginLeft:15,fontWeight:'bold',fontSize:15}}>{item.title}</Text>
                    </TouchableOpacity>
                </View>   
            </View>
        )
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView
                style={{height:height -50 - 120}}
                ref={ref => this.scrollRef = ref}
                onScroll={(e) =>{
                  if (e.nativeEvent.contentOffset.y === 0 ){
                    DeviceEventEmitter.emit('scrollview',1);
                  }
                  }}>
                
                <FlatList
                keyExtractor={(item, index) => (index + '1')}
                data = {this.state.data}
                renderItem = {this.renderData.bind(this)}/>
                
                </ScrollView>
            </View>
        );
    }
}