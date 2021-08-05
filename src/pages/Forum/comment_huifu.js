/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,TouchableOpacity,Image ,StyleSheet, TextInput,AsyncStorage, ScrollView,Dimensions,TouchableWithoutFeedback,
    Keyboard,RefreshControl,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from "react-native-vector-icons/AntDesign"
const {height,width} = Dimensions.get('window');
const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
export default class comment_huifu extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.route.params,
            huifu:[],
            content_huifu:'',
            username:'',
            isLoding:false,
        };
    }
    go_select(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
            }
        });
        fetch('http://192.168.50.117:3000/dongtai/comment_huifu', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
               id: this.state.data.id,
            },
        })
           .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    huifu:responseJson,
                });
            }) .catch((error) => {
                console.error('error',error);
              });
    }
    //获取回复的数据
    componentDidMount(){
       this.go_select();
    }

    loding(){
        this.setState({
            isLoding : true,
        });

        setTimeout(() => {
            this.setState({
                isLoding : false,
            });
            this.go_select();
        }, 1000);
    }
    fabu(){
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
        fetch('http://192.168.50.117:3000/dongtai/insert_huifu', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parent_id: this.state.data.id,
                content_huifu:this.state.content_huifu,
                username:this.state.username,
                date_huifu:currentdate,
              }),
        });
        this.go_select();
    }
    render() {
        const {data,huifu} = this.state;
        console.log('huifu',huifu);
        console.log('data',data);
        return (
            <View style={{flex:1}}>
 <LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0bf","#fff","#fff"]} >
 <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity
              
               activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",width:width*0.85,marginLeft:"2%"}}>共111条评论</Text>

            </View> 
                <ScrollView
                 refreshControl={
                    <RefreshControl
                        refreshing = {this.state.isLoding} //设置是否在刷新
                        onRefresh = {this.loding.bind(this)} //下拉刷新结束}
                    />
                }>
                    <View style={{backgroundColor:'#fff',width:width*0.9,marginLeft:width*0.05,borderRadius:15,elevation:5}}>
                        <View style={{flexDirection:'row',marginTop:20,marginBottom:20,marginLeft:width * 0.025,width:width * 0.95}}>
                            <TouchableOpacity activeOpacity={1}>
                                <Image source={{uri:data.portrait}} style={styles.touxiang}/>
                            </TouchableOpacity>
                            <View style={{marginLeft:10}}>
                                <View style={{width:"100%",flexDirection:"row"}}><Text style={styles.name1}>{data.nickname}</Text>
                                
                                </View>
                                <Text>{data.content}</Text>
                                <Text style={{color:'#aaa',fontSize:12}}>{data.date_zhu}</Text>
                            </View>
                        </View>
                    </View>
                    {/* 渲染回复列表 */}
                    <View style={{marginTop:10,width:width*0.9,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:15}}>
                        {
                            huifu.map((v,k)=>{
                                return (
                                    <View key={k} >
                                        <View style={{flexDirection:'row',marginTop:10,marginBottom:10,paddingBottom:10,marginLeft:width * 0.025,width:width * 0.85,borderBottomWidth:1/3,borderColor:"#7cc0c0"}}>
                                            <TouchableOpacity activeOpacity={1}>
                                                <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                            </TouchableOpacity >
                                            <View style={{marginLeft:10}}>
                                                <Text style={styles.name}>{v.nickname}</Text>
                                                <Text>{v.content_huifu}</Text>
                                                <Text style={{color:'#aaa',fontSize:12}}>{v.date_huifu}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        }
                    </View>
                </ScrollView>
                <View style={styles.box3}>
                    <TextInput
                        placeholder="我要评论 ..."
                        style={styles.txt2}
                        multiline = {true}
                        clearTextOnFocus={true}
                        onChangeText={(content_huifu)=>this.setState({content_huifu})}
                        ref={input => { this.textInput = input }} 
                    />
                    <TouchableOpacity onPress={()=>{this.fabu(),Keyboard.dismiss(),this.textInput.clear()}}
                    style={{marginLeft:width * 0.05,backgroundColor:'#7cc0c0',borderRadius:50,width:width*0.12,height:width*0.12,alignItems:"center",justifyContent:"center",elevation:5}}>
                        <FontAwesome
                        name="send-o"
                        color="#fff"
                        size={20}/>
                    </TouchableOpacity>
                </View>
                </LinearGradient>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    touxiang:{
        height:50,
        width:50,
        borderRadius:50,
    },
    name:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5,
    },
    name1:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5,
        color:"#7cc0c0"
    },
    box3: {
        flexDirection: 'row',
        alignItems:'center',
        height:height*0.08,

        elevation:5,
  
        width:width ,
        backgroundColor:"#fff"
        
    },
    txt2: {
        backgroundColor: '#ccc',
        paddingLeft: 15,
        paddingRight:15,
        width: '70%',
        height:"60%",
        borderRadius: 30,
        marginRight:0,
        marginTop: 10 ,
        marginBottom: 10 ,
        marginLeft:"5%"
    },
});
