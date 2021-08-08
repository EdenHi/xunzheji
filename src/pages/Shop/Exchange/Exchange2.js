/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {Text, TextInput, View,Dimensions, TouchableOpacity,Image,AsyncStorage ,DeviceEventEmitter} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const {width,height} = Dimensions.get('window')
export default class Exchange2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            img:{path:'https://img1.baidu.com/it/u=2375920824,1229333302&fm=26&fmt=auto&gp=0.jpg'},
            username:'',
            connent:'',
            jieshao:'',
            height:200 + Math.floor(Math.random() * 100),
        }
    }

     //打开本地图册
     _openPicker(){
        ImagePicker.openPicker({
            width:100,
            height:100,
            cropping: true,
        }).then(image => {
            console.log('imag',image);
                this.setState({
                    img:image,
                });
        });

    }

    componentDidMount(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
            }
        });
    }

    _fetchImage() {
        let url = 'http://8.142.11.85:3000/shop/insert_Exchange2';
        let head = { uri: this.state.img.path, type: this.state.img.mime, name: this.state.img.path.split('/').pop() };
        let formData = new FormData();
        formData.append('files', head); // 这里的 file 要与后台名字对应。
        formData.append('connent',this.state.connent);
        formData.append('jieshao',this.state.jieshao);
        formData.append('height',this.state.height);
        formData.append('username',this.state.username);
     //   formData.append('title',this.state.fayan);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        })
        .then((response) => response.json())
        .then((josn)=>{
                console.log('josn',josn);
        });
        DeviceEventEmitter.emit('test',1);
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={{backgroundColor:'white',flex:1}}>
               <View style={{width:width * 0.9,margin:width * 0.05}}>
                    <TextInput
                    maxLength={15}
                    placeholder='物品/服务/技能名称(最多15字)'
                    style={{borderWidth:1,borderColor:'black',width:width * 0.9,paddingLeft:10}}
                    onChangeText={(connent)=>this.setState({connent})}
                    />
                    <View style={{borderWidth:1,borderColor:'black',width:width * 0.9,marginTop:width * 0.05,height:400}}>
                        <TextInput
                        maxLength={1500}
                        
                        placeholder='你的 物品/服务/技能 背后的故事，背后的酸甜苦辣，欢迎和我们分享'
                        style={{width:width * 0.8,paddingLeft:10}}
                        multiline={true}
                        onChangeText={(jieshao)=>this.setState({jieshao})}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={()=>this._openPicker()}>
                        <Image source={{uri:this.state.img.path}} style={{height:100,width:100,borderColor:'black',borderWidth:1,marginTop:width * 0.05}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.9}
                    style={{width:width * 0.7,marginLeft:width * 0.1,justifyContent:'center',alignItems:'center',backgroundColor:'#7cc0bc',marginTop:width * 0.05,height:height*0.05,borderRadius:20}}
                    onPress = {()=>this._fetchImage()}>
                        <Text style={{color:'white',fontSize:15}}>上传</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        );
    }
}