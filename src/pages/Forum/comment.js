/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
  RefreshControl,
  DeviceEventEmitter
} from 'react-native';
const {height,width} = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';
import {NavigationContext} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
export default class Comment extends React.Component {
    static contextType = NavigationContext;
    constructor(props){
        super(props);
        this.state = {
            data:this.props.route.params,
            modalVisible:false,
            //放大显示的图片索引
            currentIndex:0,
            //存放图片的路径
            imgUrls:[],
            comment_zhu:[],
            comment_fu:[],
            content:'',
            username:'',
            isLoding:false,
        };
    }
    //点击图片方法事件
    handleShowAlbum = (index)=>{
        const imgUrls =   this.state.data.pic.map(v=>({url:v}));
        const currentIndex = index;
        const modalVisible = true;
        this.setState({
            imgUrls,currentIndex,modalVisible,
        });
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

    pinglun(){
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
        fetch('http://192.168.50.117:3000/dongtai/insert_comment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment_id: this.state.data.title_id,
                content:this.state.content,
                username:this.state.username,
                date_zhu:currentdate,
                }),
        });
        this.go_select();
    }

    //渲染图片
      renderData({item,index}){
        if (item === null ){
            return;
        }  else if (this.state.data.pic.length > 1 && this.state.data.pic.length < 5){
            return (
                <View style={styles.box2}>
            <TouchableOpacity
                               activeOpacity={1}
            key = {index}
            onPress={()=>this.handleShowAlbum(index)}>
                <Image source={{uri:item}} style={{height:(width * 0.9 - 4) / 2,width:(width * 0.9 - 4) / 2}}/>
            </TouchableOpacity>
            </View>
            );
      } else if (this.state.data.pic.length >= 5 && this.state.data.pic.length <= 9){
        return (
            <View style={styles.box2}>
            <TouchableOpacity
                               activeOpacity={1}
            key = {index}
            onPress={()=>this.handleShowAlbum(index)}>
                <Image source={{uri:item}} style={{height:(width * 0.9 - 7) / 3,width:(width * 0.9 - 7) / 3}}/>
            </TouchableOpacity>
        </View>
        );
      } else {
          return (
        <View style={styles.box2}>
            <TouchableOpacity
                               activeOpacity={1}
            key = {index}
            onPress={()=>this.handleShowAlbum(index)}>
                <Image source={{uri:item}} style={{height:width * 0.9 - 2,width:width * 0.9 - 2}}/>
            </TouchableOpacity>
        </View>
    );
    }
}

    go_select(){
        fetch('http://192.168.50.117:3000/dongtai/comment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
               title_id: this.state.data.title_id,
            },
        })
           .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    comment_zhu:responseJson,
                });
            }) .catch((error) => {
                console.error('error',error);
              });
              AsyncStorage.getItem('username',(error,result)=>{
                if (!error) {
                    this.setState({
                        username:result,
                    });
                }
            });
    }
    //获取评论信息
    componentDidMount(){
        this.go_select();
    }

    goComment=(v)=>{
        this.context.navigate('Comment_huifu',v);
       }

    go_luntan(){
        DeviceEventEmitter.emit('test',1);
        this.props.navigation.goBack();
    }
    render () {
        const {data,comment_zhu} = this.state;
        console.log('data',data);
        console.log('comment_zhu',comment_zhu);
        const {modalVisible,imgUrls,currentIndex} = this.state;
        if (data.title === ''){
            return (
                <View style={{flex:1}}>
                 <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center",backgroundColor:"#fff"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.go_luntan()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#000",width:width*0.85,marginLeft:"2%"}}>论坛详情</Text>

            </View> 
                <ScrollView 
                 refreshControl={
                    <RefreshControl
                        refreshing = {this.state.isLoding} //设置是否在刷新
                        onRefresh = {this.loding.bind(this)} //下拉刷新结束}
                    />
                }>
                    <View style={{backgroundColor:'white'}}>
                        <View style={{width:width * 0.9,marginLeft:width*0.05}}>
                            <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:15}}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Image source={{uri:data.portrait}} style={styles.touxiang}/>
                                </TouchableOpacity>
                                <View style={{marginLeft:10}}>
                                    <Text style={styles.name}>{data.nickname}</Text>
                                    <Text style={{color:'#aaa'}}>{data.fabiao_time}</Text>
                                </View>
                            </View>
                            <View style={styles.box}>
                                <FlatList
                                contentContainerStyle={styles.listViewStyle}
                                keyExtractor={(item, index) => (index + '1')}
                                data = {data.pic}
                                renderItem = {this.renderData.bind(this)}/>
                            </View>
                            <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around',marginBottom:10}}>
                                <TouchableOpacity activeOpacity={1}>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons
                                        name="heart-outline"
                                        size={15}
                                        color="black"/>
                                        <Text style={{marginLeft:5}}>{data.dianzan}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row'}}>
                                    <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    size={15}
                                    color="black"/>
                                    <Text style={{marginLeft:5}}>{data.counts}</Text>
                                </View>

                                <TouchableOpacity activeOpacity={1}>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons
                                        name="arrow-redo-outline"
                                        size={15}
                                        color="black"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
                {/* 放大图片的遮罩层 */}
                <Modal animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { this.setState({modalVisible:false});}}>
                <ImageViewer imageUrls={imgUrls} style = {{flex:1}} index={currentIndex}/>
            </Modal>
                {/* 评论的渲染 */}
                <View style={{marginTop:10}}>
                {
                    comment_zhu.map((v,k)=>{
                        if (v.counts > 0 ){
                            return (
                                <View style={{marginTop:10,width:width*0.9,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:15}}>
                                <View key={k} style={{backgroundColor:'#fff',borderRadius:15}}>
                                <View style={{flexDirection:'row',marginTop:10,marginBottom:10,marginLeft:width * 0.025,width:width * 0.85,}}>
                                        <TouchableOpacity activeOpacity={1}>
                                            <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                        </TouchableOpacity>
                                        <View style={{marginLeft:10,width:width * 0.8}}>
                                            <Text style={styles.name}>{v.nickname}</Text>
                                            <Text>{v.content}</Text>
                                            <TouchableOpacity activeOpacity={1} onPress={()=>this.goComment(v)}
                                            style={{marginTop:5,width:width * 0.6,backgroundColor:'#eee',height:width * 0.08,justifyContent:'center',borderRadius:15}}>
                                                <Text style={{color:'skyblue',paddingLeft:10}}>{'共' + v.counts + '条回复'}</Text>
                                            </TouchableOpacity>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <Ionicons
                                                        name="heart-outline"
                                                        size={15}
                                                        color="black"/>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1} style={{marginLeft:10}} onPress={()=>this.goComment(v)}>
                                                        <Ionicons
                                                        name="chatbubble-ellipses-outline"
                                                        size={15}
                                                        color="black"/>
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={{color:'#aaa',marginRight:width*0.2}}>{v.date_zhu}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                </View>
                            );
                        } else {
                            return (
                                <View style={{marginTop:10,width:width*0.9,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:15}}>
                                <View key={k} >
                                    <View style={{flexDirection:'row',marginTop:10,marginBottom:10,marginLeft:width * 0.025,width:width * 0.85,}}>
                                        <TouchableOpacity activeOpacity={1}>
                                            <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                        </TouchableOpacity>
                                        <View style={{marginLeft:10,width:width * 0.8}}>
                                            <Text style={styles.name}>{v.nickname}</Text>
                                            <Text>{v.content}</Text>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                                                <View style={{flexDirection:'row'}}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <Ionicons
                                                            name="heart-outline"
                                                            size={15}
                                                            color="black"/>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1} style={{marginLeft:10}}
                                                        onPress={()=>this.goComment(v)}>
                                                            <Ionicons
                                                            name="chatbubble-ellipses-outline"
                                                            size={15}
                                                            color="black"/>
                                                        </TouchableOpacity>
                                                </View>
                                                <Text style={{color:'#aaa',marginRight:width*0.2}}>{v.date_zhu}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                </View>
                            );
                        }
                    })
                }
                </View>
                </ScrollView>
                <View style={styles.box3}>
                    <TextInput
                        placeholder="我要评论..."
                        style={styles.txt2}
                        multiline = {true}
                        clearTextOnFocus={true}
                        onChangeText={(content)=>this.setState({content})}
                        ref={input => { this.textInput = input }} 
                    />
                        
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={()=>{this.pinglun(),Keyboard.dismiss(),this.textInput.clear()}}
                    style={{marginLeft:width * 0.05,backgroundColor:'#7cc0c0',borderRadius:50,width:width*0.12,height:width*0.12,alignItems:"center",justifyContent:"center",elevation:5}}>
                        <FontAwesome
                        name="send-o"
                        color="#fff"
                        size={20}/>
                    </TouchableOpacity>
                </View>


            </View>
            );
        } else {
        return (
            <View style={{flex:1}}>
                 <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center",backgroundColor:"#fff"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.go_luntan()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#000",width:width*0.85,marginLeft:"2%"}}>论坛详情</Text>

            </View> 
                <ScrollView 
                 refreshControl={
                    <RefreshControl
                        refreshing = {this.state.isLoding} //设置是否在刷新
                        onRefresh = {this.loding.bind(this)} //下拉刷新结束}
                    />
                }>
                    <View style={{backgroundColor:'white'}}>
                        <View style={{width:width * 0.9,marginLeft:width*0.05}}>
                            <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:15}}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Image source={{uri:data.portrait}} style={styles.touxiang}/>
                                </TouchableOpacity>
                                <View style={{marginLeft:10}}>
                                    <Text style={styles.name}>{data.nickname}</Text>
                                    <Text style={{color:'#aaa'}}>{data.fabiao_time}</Text>
                                </View>
                            </View>
                            <Text style={styles.txt}
                            ellipsizeMode="tail"
                            numberOfLines={8}>{data.title}</Text>
                            <View style={styles.box}>
                                <FlatList
                                contentContainerStyle={styles.listViewStyle}
                                keyExtractor={(item, index) => (index + '1')}
                                data = {data.pic}
                                renderItem = {this.renderData.bind(this)}/>
                            </View>
                            <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around',marginBottom:10}}>
                                <TouchableOpacity activeOpacity={1}>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons
                                        name="heart-outline"
                                        size={15}
                                        color="black"/>
                                        <Text style={{marginLeft:5}}>{data.dianzan}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row'}}>
                                    <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    size={15}
                                    color="black"/>
                                    <Text style={{marginLeft:5}}>{data.counts}</Text>
                                </View>

                                <TouchableOpacity activeOpacity={1}>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons
                                        name="arrow-redo-outline"
                                        size={15}
                                        color="black"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
                {/* 放大图片的遮罩层 */}
                <Modal animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { this.setState({modalVisible:false});}}>
                <ImageViewer imageUrls={imgUrls} style = {{flex:1}} index={currentIndex}/>
            </Modal>
                {/* 评论的渲染 */}
                <View style={{marginTop:10}}>
                {
                    comment_zhu.map((v,k)=>{
                        if (v.counts > 0 ){
                            return (
                                <View style={{marginTop:10,width:width*0.9,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:15}}>
                                <View key={k} style={{backgroundColor:'#fff',borderRadius:15}}>
                                <View style={{flexDirection:'row',marginTop:10,marginBottom:10,marginLeft:width * 0.025,width:width * 0.85,}}>
                                        <TouchableOpacity activeOpacity={1}>
                                            <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                        </TouchableOpacity>
                                        <View style={{marginLeft:10,width:width * 0.8}}>
                                            <Text style={styles.name}>{v.nickname}</Text>
                                            <Text>{v.content}</Text>
                                            <TouchableOpacity activeOpacity={1} onPress={()=>this.goComment(v)}
                                            style={{marginTop:5,width:width * 0.6,backgroundColor:'#eee',height:width * 0.08,justifyContent:'center',borderRadius:15}}>
                                                <Text style={{color:'skyblue',paddingLeft:10}}>{'共' + v.counts + '条回复'}</Text>
                                            </TouchableOpacity>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <Ionicons
                                                        name="heart-outline"
                                                        size={15}
                                                        color="black"/>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1} style={{marginLeft:10}} onPress={()=>this.goComment(v)}>
                                                        <Ionicons
                                                        name="chatbubble-ellipses-outline"
                                                        size={15}
                                                        color="black"/>
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={{color:'#aaa',marginRight:width*0.2}}>{v.date_zhu}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                </View>
                            );
                        } else {
                            return (
                                <View style={{marginTop:10,width:width*0.9,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:15}}>
                                <View key={k} >
                                    <View style={{flexDirection:'row',marginTop:10,marginBottom:10,marginLeft:width * 0.025,width:width * 0.85,}}>
                                        <TouchableOpacity activeOpacity={1}>
                                            <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                        </TouchableOpacity>
                                        <View style={{marginLeft:10,width:width * 0.8}}>
                                            <Text style={styles.name}>{v.nickname}</Text>
                                            <Text>{v.content}</Text>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                                                <View style={{flexDirection:'row'}}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <Ionicons
                                                            name="heart-outline"
                                                            size={15}
                                                            color="black"/>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1} style={{marginLeft:10}}
                                                        onPress={()=>this.goComment(v)}>
                                                            <Ionicons
                                                            name="chatbubble-ellipses-outline"
                                                            size={15}
                                                            color="black"/>
                                                        </TouchableOpacity>
                                                </View>
                                                <Text style={{color:'#aaa',marginRight:width*0.2}}>{v.date_zhu}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                </View>
                            );
                        }
                    })
                }
                </View>
                </ScrollView>
                <View style={styles.box3}>
                    <TextInput
                        placeholder="我要评论..."
                        style={styles.txt2}
                        multiline = {true}
                        clearTextOnFocus={true}
                        onChangeText={(content)=>this.setState({content})}
                        ref={input => { this.textInput = input }} 
                    />
                        
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={()=>{this.pinglun(),Keyboard.dismiss(),this.textInput.clear()}}
                    style={{marginLeft:width * 0.05,backgroundColor:'#7cc0c0',borderRadius:50,width:width*0.12,height:width*0.12,alignItems:"center",justifyContent:"center",elevation:5}}>
                        <FontAwesome
                        name="send-o"
                        color="#fff"
                        size={20}/>
                    </TouchableOpacity>
                </View>


            </View>
        );
            }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box2:{
        flexDirection:'row',
        margin:1,
    },
    photo1:{
        height:100,
        width:100,
        marginRight:5,
    },
    listViewStyle: {
        // 主轴方向
        flexDirection: 'row',
        // 一行显示不下,换一行
        flexWrap: 'wrap',
        // 侧轴方向
        alignItems: 'center', // 必须设置,否则换行不起作用
    },
    box:{
      //backgroundColor:'blue',
        overflow:'hidden',
        borderRadius:15,
        marginTop:10,
    },
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
    txt:{
        marginTop:10,
        fontSize:15,
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
