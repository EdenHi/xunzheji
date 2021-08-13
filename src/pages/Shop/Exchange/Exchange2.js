/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {Text, TextInput, View,Dimensions, TouchableOpacity,Image,AsyncStorage ,DeviceEventEmitter, ScrollView, FlatList, ImageBackground} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import uuid from '../../../components/comment/randId'
import AntDesign from 'react-native-vector-icons/AntDesign'

const {width,height} = Dimensions.get('window')
export default class Exchange2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            img:[],
            username:'',
            uuid:uuid.uuid(8),
            wupin:'',
            exchang_wupin:'',
            liyou:'',
        }
    }

     //打开本地图册
     _openPicker(){
        ImagePicker.openPicker({
            width:100,
            height:100,
            cropping: true,
            multiple: true,
            maxFiles: 4,

        }).then(image => {
            console.log('imag',image);
            const {img} = this.state;
            for(var i = 0 ; i<image.length;i++){
           img.push(image[i]);
        }
            this.setState({img})
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

    _fetchImage(v) {
        let url = 'http://8.142.11.85:3000/shop/insert_Exchange2_pic';
        let head = { uri: v.path, type: v.mime, name: v.path.split('/').pop() };
        let formData = new FormData();
        formData.append('files', head); // 这里的 file 要与后台名字对应。
        formData.append('uuid',this.state.uuid);
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
    }

    send_Txt(){
        fetch('http://8.142.11.85:3000/shop/insert_Exchange2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    wupin: this.state.wupin,
                    exchang_wupin:this.state.exchang_wupin,
                    username: this.state.username,
                    liyou:this.state.liyou,
                    uuid:this.state.uuid
                }),
            });
    }

    send(){
        const {img} = this.state
        if(img.length>0){
            this.send_Txt();
            for (var i = 0; i < img.length; i++)
            {this._fetchImage(img[i]);}
        }
        else{
            this.send_Txt();
        }
        this.props.navigation.goBack();
        DeviceEventEmitter.emit('exchange',1);
    }


    delete_pic(k){
        const {img}=this.state;
        img.splice(k,1);
        this.setState({img:img})
    }
    renderDate({item,index}){
        return(
            <ImageBackground source={{uri:item.path}} style={{height:width*0.2,width:width * 0.2,marginTop:width * 0.05,alignItems:'flex-end'}}>
                <AntDesign
                name='closecircle'
                size={15}
                onPress={()=>this.delete_pic(index)}/>
            </ImageBackground>
        )
    }

    //flatlist中间
    Separator(){
        return(
            <View style={{width:width*0.033}}></View>
        )
    }

    //faltlist底部
    ListFooterComponent(){
        if(this.state.img.length < 4){
        return(
            <TouchableOpacity
            activeOpacity={1}
            onPress={()=>this._openPicker()}>
                <Image source={{uri:'http://8.142.11.85:3000/public/images/addimg.png'}} style={this.state.img.length === 0 ? {height:width*0.2,width:width * 0.2,marginTop:width * 0.05}:{height:width*0.2,width:width * 0.2,marginTop:width * 0.05,marginLeft:width*0.033}}/>
            </TouchableOpacity>
        )
        }else{
            return(
            <View/>
            )
        }
    }


    render() {
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
                        <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#7cc0c0" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#7cc0c0", width: width * 0.85, marginLeft: "2%" }}>以物换物</Text>
                </View>
                <ScrollView>
                    <View style={{width:width * 0.9,margin:width * 0.05}}>
                            <TextInput
                            maxLength={15}
                            placeholder='物品/服务/技能名称(最多15字)'
                            style={{borderWidth:1,borderColor:'black',width:width * 0.9,paddingLeft:10}}
                            onChangeText={(wupin)=>this.setState({wupin})}
                            />
                            <TextInput
                            maxLength={15}
                            placeholder='需要的物品/服务/技能名称(最多15字)'
                            style={{borderWidth:1,borderColor:'black',width:width * 0.9,paddingLeft:10,marginTop:10}}
                            onChangeText={(exchang_wupin)=>this.setState({exchang_wupin})}
                            />
                            <View style={{borderWidth:1,borderColor:'black',width:width * 0.9,marginTop:width * 0.05,height:300}}>
                                <TextInput
                                maxLength={1500}
                                placeholder='你的 物品/服务/技能 背后的故事，背后的酸甜苦辣，欢迎和我们分享'
                                style={{width:width * 0.9-20,marginLeft:10,marginRight:10}}
                                multiline={true}
                                onChangeText={(liyou)=>this.setState({liyou})}
                                />
                            </View>
                            <FlatList
                            data={this.state.img}
                            horizontal
                            keyExtractor={(item, index) => (index + '1')}
                            ListFooterComponent={this.ListFooterComponent.bind(this)}
                            ItemSeparatorComponent={this.Separator.bind(this)}
                            renderItem={this.renderDate.bind(this)}/>
                           
                           
                           
                            <TouchableOpacity
                            activeOpacity={0.9}
                            style={{width:width * 0.7,marginLeft:width * 0.1,justifyContent:'center',alignItems:'center',backgroundColor:'#7cc0bc',marginTop:width * 0.05,height:height*0.05,borderRadius:20}}
                            onPress = {()=>this.send()}>
                                <Text style={{color:'white',fontSize:15}}>上传</Text>
                            </TouchableOpacity>
                        </View> 
                </ScrollView>
            </View>
        );
    }
}