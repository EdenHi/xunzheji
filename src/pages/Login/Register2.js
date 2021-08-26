/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { Image, TextInput } from 'react-native';

import {View,Text,TouchableOpacity,Dimensions,AsyncStorage,StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-crop-picker';
import cities from '../MyScreen/cities/cities.json';
import Picker from 'react-native-picker';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const {width,height} = Dimensions.get('window')
export default class Register2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            img:'https://img2.baidu.com/it/u=1052693160,142346855&fm=26&fmt=auto&gp=0.jpg',
            nickname:'',
            sex:'',
            area:'',
            birthday:'',
            username:'',
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                this.setState({username:result})
            }
        })
    }

    _openPicker(){
        ImagePicker.openPicker({
            width:width * 0.3,
            height:width * 0.3,
        }).then(image => {
            console.log('image',image)
            AsyncStorage.getItem('username',(error,result)=>{
                if (!error) {
                    let formData = new FormData();//如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
                    let file = {uri: image.path, type: image.mime, name: image.path.split('/').pop()};   //这里的key(uri和type和name)不能改变,
                    formData.append('files',file);   //这里的files就是后台需要的key
                    formData.append('username',result);
                    this.setState({
                        img:image.path,
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


    updateSex (){
        axios.post('http://8.142.11.85:3000/index/updateSex',{
                username:this.state.username,
                sex:this.state.sex,
        }).then((json)=>{
            console.log('json',json.data);
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
            area:arr[0]+' '+arr[1],
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

    go_nickname(){
        axios.post('http://8.142.11.85:3000/index/updateNickname',{
                username:this.state.username,
                nickname:this.state.nickname,
        }).then((json)=>{
            console.log('json',json.data);
            });
      }


    render() {
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
            <View style={{flex:1,backgroundColor:'#fff'}}>
                {/* 标题 */}
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width, paddingLeft: width * 0.05,backgroundColor:'#7cc0c0' }}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft:"2%"}}>注册</Text>
                </View>

                {/* 注册头像 */}
                <TouchableOpacity activeOpacity={1} style={{height:width*0.25,width:width*0.25,borderRadius:50,marginLeft:width*0.375,marginVertical:width*0.1}} onPress={()=>this._openPicker()}>
                    <Image source={{uri:this.state.img}} style={{height:width*0.25,width:width*0.25,borderRadius:50,borderWidth:2,borderColor:'#000'}}/>
                </TouchableOpacity>
                
                {/* 选择性别 */}
                <View style={{flexDirection:'row',justifyContent:'center',marginBottom:20}}>
                    <View style={{marginRight:30,alignItems:'center'}}>
                        <TouchableOpacity style={{alignItems:'center',backgroundColor:this.state.sex==='男'?'lightgreen':'rgb(246,246,246)',width:60,height:60,justifyContent:'center',borderRadius:50}} activeOpacity={1} onPress={()=>this.setState({sex:'男'})}>
                            <FontAwesome name='mars' size={30}  color='blue'/>
                        </TouchableOpacity>
                        <Text style={{marginTop:10,color:'blue',fontWeight:'bold'}}>男生</Text>
                    </View>
                   
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity activeOpacity={1} style={{alignItems:'center',backgroundColor:this.state.sex==='女'?'lightgreen':'rgb(246,246,246)',width:60,height:60,justifyContent:'center',borderRadius:50}} onPress={()=>this.setState({sex:'女'})}>
                            <FontAwesome name='venus' size={30} color='pink'/>
                        </TouchableOpacity>
                        <Text style={{marginTop:10,color:'pink',fontWeight:'bold'}}>女生</Text>
                    </View>
                    
                </View>
                
                {/* 注册用户名 */}
                <View style={styles.box}>
                    <TextInput placeholder='请输入昵称' onChangeText={(nickname)=>this.setState({nickname})}/>
                </View>

                 {/* 注册地区 */}
                 <TouchableOpacity style={styles.box}  onPress={()=>this.go_area()}>
                    <Text style={{fontSize:14,paddingLeft:5,lineHeight:50,color:this.state.area===''?'#999':'#333'}}>{this.state.area===''?'请输入地区':this.state.area}</Text>
                </TouchableOpacity>

                 {/* 注册生日 */}
                 <TouchableOpacity style={styles.box}>
                    <Text style={{position:'relative',fontSize:14,paddingLeft:5,lineHeight:50,color:this.state.birthday===''?'#999':'#333'}}>{this.state.birthday===''?'请输入生日':this.state.birthday}</Text>
                    <DatePicker
                            style={{position:'absolute',width:'100%',height:'100%',opacity:0}}
                            date={this.state.birthday}
                            mode="date"
                            androidMode="spinner"
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate={currentdate}
                            confirmBtnText="确认"
                            cancelBtnText="取消"
                            onDateChange={this.go_birthday}
                    />
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>{this.go_nickname(),this.updateSex(),this.props.navigation.navigate('Register_tuijian')}} style={{backgroundColor:'#7cc0c0',width:width*0.5,marginHorizontal:width*0.25,justifyContent:'center',alignItems:'center',borderRadius:30}} activeOpacity={1}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff',paddingVertical:10}}>下一步</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box:{
        borderWidth:0.5,width:width*0.7,marginHorizontal:width*0.15,marginBottom:20
    }
})