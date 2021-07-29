/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image, View,Text,Dimensions, TextInput, TouchableOpacity,AsyncStorage,DeviceEventEmitter,Switch } from 'react-native';
import Picker from 'react-native-picker';
import cities from '../../MyScreen/cities/cities.json'

const {width, height} = Dimensions.get('window');

export default class Address extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            phone:'',
            dizhi:'北京省北京市东城区',
            xiangxi:'',
            swicthValue1:false,
        }
    }

    go_area(){
        Picker.init({
            pickerData:cities,
            selectedValue:[''],
            wheelFlex:[1,1,1],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择城市',
            onPickerConfirm:this.updateArea,
        });
        Picker.show();
    }
    updateArea = (arr) =>{
        let Arr = arr[0] + arr[1] + arr[2];
       console.log('arr',Arr)
        this.setState({
            dizhi:Arr,
        });
    }

    insert(){
        if (this.state.swicthValue1 === true){
            AsyncStorage.getItem('username',(error,result)=>{
                if (!error) {
                    this.setState({
                        username:result,
                    });
                    console.log('username',result);
                    fetch('http://192.168.50.117:3000/shop/insert_dizhi2', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username:result,
                            name:this.state.name,
                            phone:this.state.phone,
                            dizhi:this.state.dizhi,
                            xiangxi:this.state.xiangxi,
                        }),
                        })
                } else {
                    console.log('获取数据失败',error);
                }
            });
        } else {
            AsyncStorage.getItem('username',(error,result)=>{
                if (!error) {
                    this.setState({
                        username:result,
                    });
                    console.log('username',result);
                    fetch('http://192.168.50.117:3000/shop/insert_dizhi1', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username:result,
                            name:this.state.name,
                            phone:this.state.phone,
                            dizhi:this.state.dizhi,
                            xiangxi:this.state.xiangxi,
                        }),
                        })
                } else {
                    console.log('获取数据失败',error);
                }
            });
        }
        
        DeviceEventEmitter.emit('test',1);
        this.props.navigation.goBack();
    }
    render() {
        console.log('state',this.state)
        return (

            <View style={{padding:10}}>
                <View style={{height:height * 0.85}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:10,marginTop:10,borderBottomWidth:0.5,borderBottomColor:'#808080',justifyContent:'space-between',height:50}}>
                    <View  style={{width:width * 0.03,height:width * 0.03,borderWidth:1}} />
                    <Text style={{width:width * 0.8,textAlign:'center',fontSize:18,fontWeight:'bold'}}>
                        新建收货地址
                    </Text>
                    <View style={{width:width * 0.03,height:height * 0.03}} />
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#808080'}}>
                    <Text style={{fontSize:16,width:width * 0.2}}>收货人</Text>
                    <TextInput style={{width:width * 0.8,height:50}} placeholder="请使用真实姓名" onChangeText={(name)=>this.setState({name})}/>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#808080'}}>
                    <Text style={{fontSize:16,width:width * 0.2}}>联系电话</Text>
                    <TextInput style={{width:width * 0.8,height:50}} placeholder="收件人电话号码" onChangeText={(phone)=>this.setState({phone})}/>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#808080'}}>
                    <Text style={{fontSize:16,width:width * 0.2}}>所在地区</Text>
                    <View style={{height:50}} ><TouchableOpacity onPress={()=>this.go_area()} style={{height:50,width,justifyContent:'center'}}><Text>{this.state.dizhi}</Text></TouchableOpacity></View>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#808080'}}>
                    <Text style={{fontSize:16,width:width * 0.2}}>详细地址</Text>
                    <TextInput style={{width:width * 0.8,height:50}} placeholder="请输入" onChangeText={(xiangxi)=>this.setState({xiangxi})}/>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#808080'}}>
                    <Text style={{fontSize:16,width:width * 0.2}}>默认地址</Text>
                    <Switch style={{}}
                            onTintColor={'#ffaa11'}
                            tintColor={'#aaaa11'}
                            value={this.state.swicthValue1}
                            onValueChange={(value)=> {
                                //当开关状态改变了，一定要修改value的值，不然最终无法改变状态
                                console.log('onValueChange1 =' + value);
                                this.setState({
                                    swicthValue1: value
                                })
                                }}
                            testID={'one'}
                            thumbTintColor={'#ff1111'}/>
                </View>
                </View>
                <TouchableOpacity underlayColor="red"  onPress={()=>this.insert()}><View style={{backgroundColor:'#d3d3d3',height:40,borderRadius:20,justifyContent:'center'}}><Text style={{textAlign:'center',fontSize:18,color:'#fff'}}>保存收货信息</Text></View></TouchableOpacity>
            </View>
        );
    }
}
