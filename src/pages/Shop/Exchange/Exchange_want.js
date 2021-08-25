/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,TouchableOpacity,Text,Dimensions,ImageBackground,Image, TextInput,ScrollView,AsyncStorage} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import ImagePicker from 'react-native-image-crop-picker';
const {width,height} = Dimensions.get('window')
export default class Exchange_want extends Component {
    constructor(props){
        super(props)
        this.state = {
            img:'http://8.142.11.85:3000/public/images/addimg.png',
            leibie:'',
            mingcheng:'',
            liuyan:'',
            imag:'',
        }
    }

         //打开本地图册
         _openPicker() {
            ImagePicker.openPicker({
                width: 400,
                height: 400,
            }).then(image => {
                console.log('imag', image);
                const { img } = this.state;
                this.setState({ img:image.path,imag:image })
            });
    
        }

        send_message(){
            const {imag} = this.state
            let time = new Date()
            AsyncStorage.getItem('username',(error,result)=>{
                if (!error) {
                    let formData = new FormData();//如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
                    let file = {uri: imag.path, type: imag.mime, name: imag.path.split('/').pop()};   //这里的key(uri和type和name)不能改变,
                    formData.append('files',file);   //这里的files就是后台需要的key
                    formData.append('send_username',result);
                    formData.append('username',this.props.route.params.username);
                    formData.append('leibie',this.state.leibie);
                    formData.append('mingcheng',this.state.mingcheng);
                    formData.append('liuyan',this.state.liuyan);
                    formData.append('uuid',this.props.route.params.uuid)
                    FormData.append('time',time)
                    fetch('http://8.142.11.85:3000/shop/insert_Exchange2_want',{
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
                }
            })
        }

    render() {
        console.log('item',this.props.route.params);
        const item = this.props.route.params
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{flex:1}} colors={["#7cc0bf", "#fff", "#fff"]}>
                    
                    {/* 标题 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", marginLeft:"2%"}}>我想要</Text>
                        {/* <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="sound" size={20} color="#000000" />
                        </TouchableOpacity> */}
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
                        <View style={{width:width*0.9,height:height*0.2,marginLeft:width*0.05,borderRadius:15,backgroundColor:'#fff',alignItems:'center',flexDirection:'row'}}>
                            <TouchableOpacity activeOpacity={1} onPress={()=>this._openPicker()}>
                                <Image source={{uri:this.state.img}} style={{height:width*0.2,width:width*0.2,marginLeft:20}}/>
                            </TouchableOpacity>
                            <View style={{marginLeft:30}}>
                                <TextInput style={{fontSize:14}} placeholder='请输入交换东西的类别' onChangeText={(leibie)=>this.setState({leibie})}/>
                                <TextInput style={{fontSize:14}} placeholder='请输入交换东西的名称' onChangeText={(mingcheng)=>this.setState({mingcheng})}/>
                            </View>
                        </View>

                        {/* 给对方留言 */}
                        <View style={{width:width*0.9,marginLeft:width*0.05,height:height*0.4,borderRadius:15,backgroundColor:'#fff',marginVertical: 20}}>
                            <TextInput placeholder='请输入你的留言...' multiline={true} style={{width:'100%',paddingHorizontal:'5%',fontSize:14}} onChangeText={(liuyan)=>this.setState({liuyan})} />
                        </View>

                        {/* 按钮 */}
                        <View style={{justifyContent:'center',alignItems:'center',width,marginBottom:20}}>
                            <TouchableOpacity onPress={()=>{this.send_message(),this.props.navigation.goBack()}} activeOpacity={1} style={{justifyContent:'center',alignItems:'center',backgroundColor:'#7cc0c0',borderRadius:30}}>
                                <Text style={{color:'#fff',fontSize:17,fontWeight:'bold',paddingHorizontal:50,paddingVertical:10}}>立即提交</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }
}