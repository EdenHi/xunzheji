/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text, TouchableOpacity,Image,Dimensions ,AsyncStorage, TextInput,DeviceEventEmitter} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {NavigationContext} from '@react-navigation/native';
import {Overlay,ListItem} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Picker from 'react-native-picker';
import axios from 'axios';
import cities from './cities/cities.json';
const {width,height} = Dimensions.get('window');
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
export default class app1 extends Component {
    static contextType = NavigationContext;
    constructor(props){
        super(props);
        this.state = {
            //是否显示昵称输入框
            shownickname:false,
            showsex:false,
            showbirthday:false,
            showsignature:false,
            showphone:false,
            data:this.props.route.params,
            //用户名
            username:this.props.route.params.username,
            //头像
            portrait:this.props.route.params.portrait,
            //昵称
            nickname:this.props.route.params.nickname,
            //性别
            sex:this.props.route.params.sex,
            //生日
            birthday:this.props.route.params.birthday,
            //个签
            signature:this.props.route.params.signature,
            //手机号
            phone:this.props.route.params.phone,
            //地区
            area:this.props.route.params.area,
            //背景图
            backpic:this.props.route.params.backpic,
        };
    }

    _openPicker(){
        ImagePicker.openPicker({
            width:width * 0.3,
            height:width * 0.3,
            cropping: true,
            cropperCircleOverlay:true
        }).then(image => {
            console.log('image',image)
            AsyncStorage.getItem('username',(error,result)=>{
                if (!error) {
                    this.setState({
                        username:result,
                    });
                    let formData = new FormData();//如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
                    let file = {uri: image.path, type: image.mime, name: image.path.split('/').pop()};   //这里的key(uri和type和name)不能改变,
                    formData.append('files',file);   //这里的files就是后台需要的key
                    formData.append('username',result);
                    console.log('image',image);
                    this.setState({
                        portrait:image.path,
                    });
                    fetch('http://8.142.11.85:3000/index/updatePortrait',{
                    method:'POST',
                    headers:{
                        'Content-Type':'multipart/form-data',
                    },
                    body:formData,
                    })
                    .then((response) => response.json())
                    .then((josn)=>{
                         console.log(josn);
                    });
                } else {
                    console.log('获取数据失败');
                }
            });
                });
    }

    go_nickname(){
        axios.post('http://8.142.11.85:3000/index/updateNickname',{
                            username:this.state.username,
                            nickname:this.state.nickname,
                    }).then((json)=>{
                        console.log('json',json.data);
                      });
        this.setState({
            shownickname:false,
        });
      }
      go_phone(){
        axios.post('http://8.142.11.85:3000/index/updatePhone',{
                            username:this.state.username,
                            phone:this.state.phone,
                    }).then((json)=>{
                        console.log('json',json.data);
                      });
        this.setState({
            showphone:false,
        });
      }
    go_birthday=(birthday)=>{
        axios.post('http://8.142.11.85:3000/index/updateBirthday',{
                            username:this.state.username,
                            birthday:birthday,
                    }).then((json)=>{
                        console.log('json',json.data);
                      });
        this.setState({
            birthday,
        });
    }
    go_signature(){
        axios.post('http://8.142.11.85:3000/index/updateSignature',{
            username:this.state.username,
            signature:this.state.signature,
            }).then((json)=>{
                console.log('json',json.data);
            });
        this.setState({
            showsignature:false,
        });
    }
    go_sex(){
        Picker.init({
            pickerData:['男','女'],
            selectedValue:['男'],
            wheelFlex:[1,0,0],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择性别',
            onPickerConfirm:this.updateSex,
        });
        Picker.show();
    }
    updateSex = (arr) =>{
        axios.post('http://8.142.11.85:3000/index/updateSex',{
                            username:this.state.username,
                            sex:arr[0],
                    }).then((json)=>{
                        console.log('json',json.data);
                      });
        this.setState({
            sex:arr[0],
        });
    }

    go_area(){
        Picker.init({
            pickerData:cities,
            selectedValue:['北京','北京'],
            wheelFlex:[1,1,0],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择城市',
            onPickerConfirm:this.updateArea,
        });
        Picker.show();
    }
    updateArea = (arr) =>{
        axios.post('http://8.142.11.85:3000/index/updateArea',{
                            username:this.state.username,
                            area:arr[1],
                    }).then((json)=>{
                        console.log('json',json.data);
                      });
        this.setState({
            area:arr[1],
        });
    }
    go_back(){
        DeviceEventEmitter.emit('test',1);
        this.props.navigation.goBack();
    }

    open_backPic(){
        ImagePicker.openPicker({
            width:300,
            height:400,
            cropping: true,

        }).then(image => {
            console.log('image',image)
            AsyncStorage.getItem('username',(error,result)=>{
                if (!error) {
                    this.setState({
                        username:result,
                    });
                    let formData = new FormData();//如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
                    let file = {uri: image.path, type: image.mime, name: image.path.split('/').pop()};   //这里的key(uri和type和name)不能改变,
                    formData.append('files',file);   //这里的files就是后台需要的key
                    formData.append('username',result);
                    console.log('image',image);
                    this.setState({
                        backpic:image.path,
                    });
                    fetch('http://8.142.11.85:3000/index/updateBackpic',{
                    method:'POST',
                    headers:{
                        'Content-Type':'multipart/form-data',
                    },
                    body:formData,
                    })
                    .then((response) => response.json())
                    .then((josn)=>{
                         console.log(josn);
                    });
                } else {
                    console.log('获取数据失败');
                }
            });
                });
    }

    render() {
        const {data,portrait,nickname,shownickname,phone,area,signature,sex,birthday,showsignature,showphone,backpic} = this.state;
        console.log('test',this.props.route.params);
        var date = new Date();
        var seperatorl = '-';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (strDate >= 0 && strDate <= 9){
            strDate = '0' + strDate;
        }
        var currentdate = year + seperatorl + month + seperatorl + strDate;
        return (
            <View style={{backgroundColor:'white'}}>
<View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.go_back()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={15} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#000",width:width*0.85,marginLeft:"2%"}}>编辑资料</Text>

            </View> 
                {/* 修改头像 */}
                <View style={{alignItems:'center',marginTop:width * 0.1}}>
                    <TouchableOpacity activeOpacity={1} style={{borderRadius:50,height:width * 0.3,width:width * 0.3}}
                    onPress={()=>this._openPicker()}>
                        <Image source={{uri:portrait}} style={{height:width * 0.3,width:width * 0.3,borderRadius:50}}/>
                    </TouchableOpacity>
                </View>
                {/* 修改头像结束 */}

                <View style={{marginTop:width * 0.1}}>
                    {/* 修改昵称 */}
                        <Overlay
                            visible={shownickname}
                            onBackdropPress={()=>this.setState({shownickname:false})}>
                            <TextInput
                            placeholder="修改昵称"
                            defaultValue={nickname}
                            onChangeText={(nickname)=>this.setState({nickname})}
                            style={{width:300,height:100,fontSize:22}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <TouchableOpacity activeOpacity={1} style={{justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.setState({shownickname:false})}>
                                    <Text style={{fontSize:15}}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.go_nickname()}>
                                    <Text style={{fontSize:15}}>确认</Text>
                                </TouchableOpacity>
                            </View>
                        </Overlay>
                     <ListItem
                        bottomDivider
                        onPress={()=>this.setState({shownickname:true})}>
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize:15}}>昵称</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Subtitle style={{fontSize:15}}>{nickname}</ListItem.Subtitle>
                            <ListItem.Chevron size={30}/>
                        </ListItem>
                    {/* 修改昵称结束 */}

                    {/* 修改性别 */}
                    <ListItem
                        bottomDivider
                        onPress={()=>this.go_sex()}>
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize:15}}>性别</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Subtitle style={{fontSize:15}}>{sex}</ListItem.Subtitle>
                            <ListItem.Chevron size={30}/>
                        </ListItem>
                    {/* 修改昵称结束 */}


                    {/* 修改手机号 */}
                    <Overlay
                            visible={showphone}
                            onBackdropPress={()=>this.setState({shownickphone:false})}>
                            <TextInput
                            placeholder="修改手机号"
                            defaultValue={phone}
                            onChangeText={(phone)=>this.setState({phone})}
                            style={{width:300,height:100,fontSize:22}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <TouchableOpacity activeOpacity={1} style={{justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.setState({showphone:false})}>
                                    <Text style={{fontSize:15}}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.go_phone()}>
                                    <Text style={{fontSize:15}}>确认</Text>
                                </TouchableOpacity>
                            </View>
                        </Overlay>
                    <ListItem
                        bottomDivider
                        onPress={()=>this.setState({showphone:true})}>
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize:15}}>修改手机号</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Subtitle style={{fontSize:15}}>{phone}</ListItem.Subtitle>
                            <ListItem.Chevron size={30}/>
                        </ListItem>
                    {/* 修改手机号结束 */}

                    {/* 修改生日 */}
                    <View style={{position:'relative'}}>
                        <ListItem
                        bottomDivider
                        onPress={()=>this.go_birthday(data)}>
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize:15}}>生日</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Subtitle style={{fontSize:15}}>{birthday}</ListItem.Subtitle>
                            <ListItem.Chevron size={30}/>
                        </ListItem>
                        <DatePicker
                            style={{position:'absolute',width:'100%',height:'100%',opacity:0}}
                            date={birthday}
                            mode="date"
                            androidMode="spinner"
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate={currentdate}
                            confirmBtnText="确认"
                            cancelBtnText="取消"
                            onDateChange={this.go_birthday}
                        />
                    </View>

                    {/* 修改生日结束 */}

                    {/* 修改地区 */}
                    <ListItem
                        bottomDivider
                        onPress={()=>this.go_area()}>
                            <ListItem.Content>
                                <ListItem.Title style={{fontSize:15}}>地区</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Subtitle style={{fontSize:15}}>{area}</ListItem.Subtitle>
                            <ListItem.Chevron size={30}/>
                        </ListItem>
                    {/* 修改地区结束 */}

                    {/* 修改个签 */}
                    <Overlay
                            visible={showsignature}
                            onBackdropPress={()=>this.setState({showsignature:false})}>
                            <TextInput
                            placeholder="修改昵称"
                            defaultValue={signature}
                            onChangeText={(signature)=>this.setState({signature})}
                            style={{width:300,height:100,fontSize:22}}/>
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                                <TouchableOpacity activeOpacity={1} style={{justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.setState({showsignature:false})}>
                                    <Text style={{fontSize:15}}>取消</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.go_signature()}>
                                    <Text style={{fontSize:15}}>确认</Text>
                                </TouchableOpacity>
                            </View>
                        </Overlay>
                        <ListItem
                            bottomDivider
                            onPress={()=>this.setState({showsignature:true})}>
                                <ListItem.Content>
                                    <ListItem.Title style={{fontSize:15}}>个性签名</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Subtitle style={{fontSize:15}}>{signature}</ListItem.Subtitle>
                                <ListItem.Chevron size={30}/>
                        </ListItem>
                    {/* 修改个签结束 */}

                    {/* 修改背景 */}
                    <ListItem
                            bottomDivider
                            onPress={()=>this.open_backPic()}>
                                <ListItem.Content>
                                    <ListItem.Title style={{fontSize:15}}>背景图</ListItem.Title>
                                </ListItem.Content>
                                <Image source={{uri:backpic}} style={{height:50,width:50}}/>
                                <ListItem.Chevron size={30}/>
                        </ListItem>
                    {/* 修改背景结束 */}
                </View>
           
            </View>
        );
    }
}
