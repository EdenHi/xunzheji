/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,Dimensions, TextInput, TouchableOpacity,AsyncStorage,DeviceEventEmitter,Switch } from 'react-native';
import Picker from 'react-native-picker';
import cities from '../../MyScreen/cities/cities.json';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
export default class updateDizhi extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:this.props.route.params.name,
            phone:this.props.route.params.phone,
            dizhi:this.props.route.params.dizhi,
            xiangxi:this.props.route.params.xiangxi,
            swicthValue1:this.props.route.params.dizhi_id === 0 ? false : true,
            data:this.props.route.params,
            username:'',
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

    componentDidMount(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                this.setState({
                    username:result
                })
            }
        })
    }

    //更新地址
    update_Dizhi(){
        if (this.state.swicthValue1 === true){
            fetch('http://47.100.78.254:3000/shop/update_Dizhi2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:this.state.name,
                    phone:this.state.phone,
                    dizhi:this.state.dizhi,
                    xiangxi:this.state.xiangxi,
                    id:this.props.route.params.id,
                    username:this.state.username
                }),
                })
        } else {
            fetch('http://47.100.78.254:3000/shop/update_Dizhi', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:this.state.name,
                    phone:this.state.phone,
                    dizhi:this.state.dizhi,
                    xiangxi:this.state.xiangxi,
                    id:this.props.route.params.id,
                }),
                })
            } 
        DeviceEventEmitter.emit('test',1);
        this.props.navigation.goBack();
    }

    render() {

        return (
            <LinearGradient style={{width:width,height:"100%"}} colors={[global.mainColor,"#fff","#fff"]} >
            <View style={{alignItems:"center"}}>
                                {/* <LinearGradient style={{width:width,height:"100%"}} colors={[global.mainColor,"#fff","#fff"]} > */}
                <View style={{height:height * 0.85,width:width*0.9}}>

            <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity activeOpacity={1} style={{width:width*0.06, }}>
              <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                  {/* <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" /> */}
              </TouchableOpacity>
              <Text style={{fontSize:18,fontWeight:"bold",color:"#fff",width:width*0.85}}>修改地址</Text>

            </View> 
            <View style={{width:width*0.9,backgroundColor:"#fff",borderRadius:15,padding:20,elevation:5}}>
                <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                    <Text style={{fontSize:15,width:width * 0.2,color:global.mainColor}}>收货人</Text>
                    <TextInput style={{width:width * 0.8,height:50}} placeholder="请使用真实姓名" onChangeText={(name)=>this.setState({name})} defaultValue={this.state.name}/>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                    <Text style={{fontSize:16,width:width * 0.2,color:global.mainColor}}>联系电话</Text>
                    <TextInput style={{width:width * 0.8,height:50}} placeholder="收件人电话号码" onChangeText={(phone)=>this.setState({phone})} defaultValue={this.state.phone}/>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                    <Text style={{fontSize:16,width:width * 0.2,color:global.mainColor}}>所在地区</Text>
                    <View style={{height:50}} ><TouchableOpacity onPress={()=>this.go_area()} style={{height:50,width,justifyContent:'center'}}><Text>{this.state.dizhi}</Text></TouchableOpacity></View>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                    <Text style={{fontSize:16,width:width * 0.2,color:global.mainColor}}>详细地址</Text>
                    <TextInput style={{width:width * 0.8,height:50}} placeholder="请输入" onChangeText={(xiangxi)=>this.setState({xiangxi})} defaultValue={this.state.xiangxi}/>
                </View>
                <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                    <Text style={{fontSize:16,width:width * 0.2,color:global.mainColor}}>默认地址</Text>
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
               
                </View>
                <TouchableOpacity underlayColor="red"  onPress={()=>this.update_Dizhi()}>
                    <View style={{backgroundColor:global.mainColor,height:height*0.05,borderRadius:20,justifyContent:'center',width:width*0.9,elevation:5}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'#fff'}}>修改收货信息</Text>
                    </View>
                </TouchableOpacity>
                {/* </LinearGradient> */}
            </View>
            </LinearGradient>
        );
    }
}