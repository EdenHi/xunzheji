/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,TouchableOpacity,Image ,StyleSheet, TextInput,AsyncStorage, ScrollView,Dimensions,TouchableWithoutFeedback,DeviceEventEmitter,
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
            data : [],
            huifu:[],
            content_huifu:'',
            username:'',
            isLoding:false,
            time:'',
        };
    }

    get_comment(){
        fetch('http://47.100.78.254:3000/dongtai/One_comment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                id: this.props.route.params.id,
            })
        })
           .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data:responseJson[0],
                });
                this._time(responseJson[0].date_zhu)
            })
            
    }

        _time(v){
            let a = v.slice(0,10)
            let b = v.slice(11,16)
            let time1 = new Date();
            let time2 = new Date(v).getTime()
            let sum = a+' '+b
            //获得相差的秒
            let ss = (time1 -time2)/1000
            let day = Math.floor(ss/86400)
            let hour = Math.floor(ss/3600)
            let min = Math.floor(ss /60)
            if(day >=1 && day<4){
                this.setState({
                    time:day+'天前'
                })
            }
            else if(hour>=1 && hour <24){
                this.setState({
                    time:hour+'小时前'
                })
            }
            else if(min>=1 && min < 60){
                this.setState({
                    time:min+'分钟前'
                })
            }
            else if(day >= 4){
                this.setState({
                    time:sum
                })
            }
            else{
                this.setState({
                    time:'刚刚'
                })
            }
        }

        //获取回复数据
    go_select(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
            }
        });
        fetch('http://47.100.78.254:3000/dongtai/comment_huifu', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                id: this.props.route.params.id,
            })
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
       this.get_comment();
       this.listener = DeviceEventEmitter.addListener('yanse',this.go_select.bind(this))
    }
    componentWillUnmount(){
        this.listener.remove();
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
        
        fetch('http://47.100.78.254:3000/dongtai/insert_huifu', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parent_id: this.state.data.id,
                content_huifu:this.state.content_huifu,
                username:this.state.username,
                date_huifu:date,
              }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.get_comment();
            this.go_select();
        }) 
    }
    render() {
        const {data,huifu,time} = this.state;
        console.log('huifu',huifu);
        console.log('data',data);
        return (
            <View style={{flex:1}}>
 <LinearGradient style={{width:width,height:"100%"}} colors={[global.back2,"#fff","#fff"]} >
 <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity
               activeOpacity={1} style={{ width:width*0.06}}>
                <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                  {/* <AntDesign onPress={()=>{this.props.navigation.goBack(),DeviceEventEmitter.emit('update',1)}} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" /> */}
              </TouchableOpacity>
              <Text style={{fontSize:18,fontWeight:"bold",color:"#fff",width:width*0.85}}>共{data.counts}条评论</Text>
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
                                <Text style={{color:'#aaa',fontSize:12}}>{time}</Text>
                            </View>
                        </View>
                    </View>
                    {/* 渲染回复列表 */}
                    <View style={{marginTop:10,width:width*0.9,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:15}}>
                        {
                            huifu.map((v,k)=>{
                                        //取出年月日
                                        let a = v.date_huifu.slice(0,10)
                                        //取出时分
                                        let b = v.date_huifu.slice(11,16)
                                        let time1 = new Date();
                                        let time2 = new Date(v.date_huifu).getTime()
                                        let sum = a+' '+b
                                        //获得相差的秒
                                        let ss = (time1 -time2)/1000
                                        let day = Math.floor(ss/86400)
                                        let hour = Math.floor(ss/3600)
                                        let min = Math.floor(ss /60)
                                        let time = ''
                                        if(day >=1 && day<4){                    
                                            time=day+'天前'                      
                                        }
                                        else if(hour>=1 && hour <24){                         
                                            time=hour+'小时前'                         
                                        }
                                        else if(min>=1 && min < 60){                           
                                            time=min+'分钟前'                           
                                        }
                                        else if(day >= 4){                      
                                            time=sum                           
                                        }
                                        else{                          
                                            time='刚刚'
                                        }
                                return (
                                    <View key={k} >
                                        <View style={{flexDirection:'row',marginTop:10,marginBottom:10,paddingBottom:10,marginLeft:width * 0.025,width:width * 0.85,borderBottomWidth:1/3,borderColor:global.back2}}>
                                            <TouchableOpacity activeOpacity={1}>
                                                <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                            </TouchableOpacity >
                                            <View style={{marginLeft:10}}>
                                                <Text style={styles.name}>{v.nickname}</Text>
                                                <Text>{v.content_huifu}</Text>
                                                <Text style={{color:'#aaa',fontSize:12}}>{time}</Text>
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
                    style={{marginLeft:width * 0.05,backgroundcolor:global.back2,borderRadius:50,width:width*0.12,height:width*0.12,alignItems:"center",justifyContent:"center",elevation:5}}>
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
        color:global.back2
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
        backgroundColor: '#dcdcdc',
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
