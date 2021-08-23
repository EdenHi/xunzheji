/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Dimensions,TouchableOpacity,Text, FlatList } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native';
import { DeviceEventEmitter } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


const {width,height} = Dimensions.get('window')
export default class dingzhi_tupian extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr:[],
            isXuan:['0','0','0','0','0','0'],
            img:['https://img0.baidu.com/it/u=3544813324,2769316614&fm=26&fmt=auto&gp=0.jpg','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F529%2Fw700h629%2F20181130%2FaXYj-hpinrya8862331.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632270916&t=44757b274f36c156b451843ebf6bf300',
                'https://img1.baidu.com/it/u=1541636380,2661844494&fm=26&fmt=auto&gp=0.jpg','https://img0.baidu.com/it/u=3401732207,3726302783&fm=26&fmt=auto&gp=0.jpg',
                'https://img2.baidu.com/it/u=2537426187,1713205820&fm=26&fmt=auto&gp=0.jpg','https://img0.baidu.com/it/u=3155998395,3600507640&fm=26&fmt=auto&gp=0.jpg']
        }
    }

    update_xuanzhong(index){
        const {isXuan,arr,img} = this.state
        if(isXuan[index]==='0'){
            isXuan.splice(index,1,'1')
            arr.push(img[index])
            this.setState({isXuan})
        }else{
            isXuan.splice(index,1,'0')
            for(var i = 0;i<arr.length;i++){
                if(arr[i].indexOf(img[index]) > -1){
                    arr.splice(i,1)
                }
            }
            this.setState({isXuan})
        }
        console.log('arr',arr);
    }

    renderDate({item,index}){
        return(
            <TouchableOpacity activeOpacity={1} style={{borderWidth:this.state.isXuan[index]==='0'?0:2,borderColor:this.state.isXuan[index]==='1'?'orange':null,width:width*0.27,height:width*0.27,marginLeft:width*0.0225,marginTop:width*0.0225,justifyContent:'center',alignItems:'center',borderRadius:10}}
           onPress={()=>{index===0?this._openPicker():this.update_xuanzhong(index)}}>
                <Image source={{uri:item}} borderRadius={10}
                        style={{width:width*0.25,height:width*0.25}}/>
            </TouchableOpacity>
        )
    }

        //打开本地图册
    _openPicker() {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            multiple: true,
            maxFiles: 3,
        }).then(image => {
            console.log('imag', image);
            const { arr } = this.state;
            for (var i = 0; i < image.length; i++) {
                arr.push(image[i].path);
            }
            this.setState({ arr })
            this.props.navigation.goBack()
            DeviceEventEmitter.emit('update_arr',arr)
        });

    }

    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{ width: width, height: "100%" }} colors={["#7cc0bf", "#fff", "#fff"]} >
                    <View style={{width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,height}}> 
                        {/* 标题 */}
                        <View style={{ flexDirection: "row", alignItems: "center" ,height: height * 0.07, justifyContent:'space-between' }}>
                            <TouchableOpacity activeOpacity={1} style={{}}>
                                <AntDesign onPress={() => {this.props.navigation.goBack(),DeviceEventEmitter.emit('update_arr',this.state.arr)}} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff"}}>定制需求</Text>
                                <AntDesign name="left" size={20} color="rgba(0,0,0,0)" />
                        </View>
                    
                        <FlatList
                        data={this.state.img}
                        numColumns={3}
                        keyExtractor={(item,index)=>(index+1)}
                        renderItem={this.renderDate.bind(this)}/>
                    
                    </View>
                </LinearGradient>
            </View>
        );
    }
}