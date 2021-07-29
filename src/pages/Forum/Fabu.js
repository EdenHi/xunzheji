/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import axios from 'axios';
import {View,Image,FlatList,Text ,StyleSheet, TextInput, TouchableOpacity,Dimensions,AsyncStorage,DeviceEventEmitter} from 'react-native';
const {height,width} = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';
import randId from '../../components/comment/randId';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Fabu extends Component {
    constructor(props){
        super(props);
        this.state = {
            fayan:'',
            arr:[],
            uuid:randId.uuid(8),
            username:'',
        };
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
    //加号图片的存放
    tianjia(){
		if (this.state.arr != null && this.state.arr.length >= 9) {
			//这里的判断根据所传图片张数定
			return;
		} else {
            return (
                <TouchableOpacity
                activeOpacity={1}
                onPress={()=>this._openPicker()}>
                    <Image source={require('../img/addimg.png')} style={{width:100,height:100,marginLeft:"10%"}}/>
                </TouchableOpacity>
            );
		}
    }

    _fetchImage(image) {
        let url = 'http://192.168.50.117:3000/dongtai/releaseDongtai';
        let head = { uri: image.path, type: image.mime, name: image.path.split('/').pop() };
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
        //      let  source = ret.data.images[0].oUrl;
                console.log('josn',josn);
        });
    }
    _fetchText(){
        var date = new Date();
        var seperatorl = '-';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var Minutes = date.getMinutes();
        var spc = ':';
        if (strDate >= 0 && strDate <= 9){
            strDate = '0' + strDate;
        }
        if (hours >= 0 && hours <= 9){
            hours = '0' + hours;
        }
        if (Minutes >= 0 && Minutes <= 9){
            Minutes = '0' + Minutes;
        }
        var currentdate = year + seperatorl + month + seperatorl + strDate + ' ' + hours + spc + Minutes;

        fetch('http://192.168.50.117:3000/dongtai/title', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: this.state.fayan,
            uuid:this.state.uuid,
            fabiao_time:currentdate,
            username:this.state.username,
        }),
});
    }
    _goget(){
        const arr = this.state.arr;
        DeviceEventEmitter.emit('test',1);
        if (arr.length > 0 ) {
            for (var i = 0; i < arr.length; i++)
            {this._fetchImage(arr[i]);}
            this._fetchText();
            this.props.navigation.goBack();
        } else {
            this._fetchText();
            this.props.navigation.goBack();
        }

    }

    //打开本地图册
      _openPicker(){
        ImagePicker.openPicker({
            width:400,
            height:400,
            cropping: true,
            multiple: true,
            maxFiles: 9,
        }).then(image => {
            console.log('imag',image);
                this.setState({
                    arr:image,
                });
            //     const {arr} = this.state;
            //    arr.push(image);
            //     this.setState({arr})
            //     console.log('arr',arr[1])
        });

    }

    render() {

        return (
            <View style = {styles.container}>
                 <LinearGradient style={{width:width,height:"100%",alignItems:"center"}} colors={["#7cc0bf","#fff","#fff"]} >
                 <View style = {styles.box}>
                <TouchableOpacity
                activeOpacity={1}
                   onPress = {()=>this.props.navigation.navigate('BtnRoute')} >
                       <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{fontSize:15,color:"#fff",fontWeight:"bold"}}>发布动态</Text>
                    <TouchableOpacity
                      activeOpacity={1}
                     onPress = {()=>this._goget()}>
                        <FontAwesome
                        name="send-o"
                        color="#fff"
                        size={20}/>
                    </TouchableOpacity>
                </View>
            <View style={{width:width*0.9,height:height,backgroundColor:"#fff",borderRadius:15}}>
            <TextInput
                style={styles.tx}
                multiline={true}
                placeholder = "这一刻的想法..."
                onChangeText={(fayan)=>this.setState({fayan:fayan})}
                />
                <View style={{// 主轴方向
                                flexDirection: 'row',
                                // 一行显示不下,换一行
                                flexWrap: 'wrap',
                                // 侧轴方向
                                alignItems: 'center', // 必须设置,否则换行不起作用
                            }}>
                {
                    this.state.arr.map((v,k)=>{
                        return (
                            <View style={styles.Box}  key={k}>
                                <TouchableOpacity
                                  activeOpacity={1}
                                >
                                    <Image style={{ height: (width - 40) / 3, width:(width - 60) / 3,marginLeft:"10%" }} source={{ uri: v.path }} />
                                </TouchableOpacity>

                             </View>
                        );
                    })
                }
                {this.tianjia()}
                </View>
            </View>
                {/* <TextInput
                style={styles.tx}
                multiline={true}
                placeholder = "这一刻的想法..."
                onChangeText={(fayan)=>this.setState({fayan:fayan})}
                />
                <View style={{// 主轴方向
                                flexDirection: 'row',
                                // 一行显示不下,换一行
                                flexWrap: 'wrap',
                                // 侧轴方向
                                alignItems: 'center', // 必须设置,否则换行不起作用
                            }}>
                {
                    this.state.arr.map((v,k)=>{
                        return (
                            <View style={styles.Box}  key={k}>
                                <TouchableOpacity>
                                    <Image style={{ height: (width - 40) / 3, width:(width - 60) / 3 }} source={{ uri: v.path }} />
                                </TouchableOpacity>

                             </View>
                        );
                    })
                }
                {this.tianjia()}
                </View> */}
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        alignItems:"center",
        justifyContent:"center"
 
  
    },
    Box:{
        marginRight:10,
        marginBottom:10,
    },
    box:{
        width:width*0.9,
        height:height*0.07,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
        alignItems:"center"
    },
    box1:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    tx:{
        height:100,
        marginLeft:"2%"
       
    },
    txt:{
        width:300,
        height:200,
        backgroundColor:'white',
        borderWidth:3,
    },
    btn:{
        backgroundColor:'green',
    },
});
