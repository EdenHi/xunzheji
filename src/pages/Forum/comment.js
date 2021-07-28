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
} from 'react-native';
const {height,width} = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';
import {NavigationContext} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    }

    //渲染图片
      renderData({item,index}){
        if (item === null ){
            return;
        }  else if (this.state.data.pic.length > 1 && this.state.data.pic.length < 5){
            return (
                <View style={styles.box2}>
            <TouchableOpacity
            key = {index}
            onPress={()=>this.handleShowAlbum(index)}>
                <Image source={{uri:item}} style={{height:(width * 0.95 - 4) / 2,width:(width * 0.95 - 4) / 2}}/>
            </TouchableOpacity>
            </View>
            );
      } else if (this.state.data.pic.length >= 5 && this.state.data.pic.length <= 9){
        return (
            <View style={styles.box2}>
            <TouchableOpacity
            key = {index}
            onPress={()=>this.handleShowAlbum(index)}>
                <Image source={{uri:item}} style={{height:(width * 0.95 - 7) / 3,width:(width * 0.95 - 7) / 3}}/>
            </TouchableOpacity>
        </View>
        );
      } else {
          return (
        <View style={styles.box2}>
            <TouchableOpacity
            key = {index}
            onPress={()=>this.handleShowAlbum(index)}>
                <Image source={{uri:item}} style={{height:width * 0.95 - 2,width:width * 0.95 - 2}}/>
            </TouchableOpacity>
        </View>
    );
    }
}

    //获取评论信息
    componentDidMount(){
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

    goComment=(v)=>{
        this.context.navigate('Comment_huifu',v);
       }


    render () {
        const {data,comment_zhu} = this.state;
        console.log('data',data);
        console.log('comment_zhu',comment_zhu);
        const {modalVisible,imgUrls,currentIndex} = this.state;
        return (
            <View style={{flex:1}}>
                <ScrollView >
                    <View style={{backgroundColor:'white'}}>
                        <View style={{marginLeft:width * 0.025,width:width * 0.95}}>
                            <View style={{flexDirection:'row',alignItems:'flex-end',marginTop:20}}>
                                <TouchableOpacity>
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
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons
                                        name="heart-outline"
                                        size={20}
                                        color="black"/>
                                        <Text style={{marginLeft:5}}>{data.dianzan}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row'}}>
                                    <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    size={20}
                                    color="black"/>
                                    <Text style={{marginLeft:5}}>{data.counts}</Text>
                                </View>

                                <TouchableOpacity>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons
                                        name="arrow-redo-outline"
                                        size={20}
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
                                <View key={k} style={{backgroundColor:'white'}}>
                                    <View style={{flexDirection:'row',marginTop:20,marginLeft:width * 0.025,width:width * 0.95,paddingBottom:10,borderBottomWidth:1 / 3}}>
                                        <TouchableOpacity>
                                            <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                        </TouchableOpacity>
                                        <View style={{marginLeft:10,width:width * 0.8}}>
                                            <Text style={styles.name}>{v.nickname}</Text>
                                            <Text>{v.content}</Text>
                                            <TouchableOpacity  onPress={()=>this.goComment(v)}
                                            style={{marginTop:5,width:width * 0.8,backgroundColor:'#eee',height:width * 0.08,justifyContent:'center'}}>
                                                <Text style={{color:'skyblue',paddingLeft:10}}>{'共' + v.counts + '条回复'}</Text>
                                            </TouchableOpacity>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <TouchableOpacity>
                                                        <Ionicons
                                                        name="heart-outline"
                                                        size={20}
                                                        color="black"/>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>this.goComment(v)}>
                                                        <Ionicons
                                                        name="chatbubble-ellipses-outline"
                                                        size={20}
                                                        color="black"/>
                                                    </TouchableOpacity>
                                                </View>
                                                <Text style={{color:'#aaa'}}>{v.date_zhu}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        } else {
                            return (
                                <View key={k} style={{backgroundColor:'white'}}>
                                    <View style={{flexDirection:'row',marginTop:20,marginLeft:width * 0.025,width:width * 0.95,paddingBottom:10,borderBottomWidth:1 / 3}}>
                                        <TouchableOpacity>
                                            <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                        </TouchableOpacity>
                                        <View style={{marginLeft:10,width:width * 0.8}}>
                                            <Text style={styles.name}>{v.nickname}</Text>
                                            <Text>{v.content}</Text>
                                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
                                                <View style={{flexDirection:'row'}}>
                                                        <TouchableOpacity>
                                                            <Ionicons
                                                            name="heart-outline"
                                                            size={20}
                                                            color="black"/>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{marginLeft:10}}
                                                        onPress={()=>this.goComment(v)}>
                                                            <Ionicons
                                                            name="chatbubble-ellipses-outline"
                                                            size={20}
                                                            color="black"/>
                                                        </TouchableOpacity>
                                                </View>
                                                <Text style={{color:'#aaa'}}>{v.date_zhu}</Text>
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
                    />
                    <TouchableOpacity onPress={()=>this.pinglun()}
                    style={{marginLeft:width * 0.1,backgroundColor:'#7cc0c0',padding:7,borderRadius:50}}>
                        <FontAwesome
                        name="send-o"
                        size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
        borderRadius:30,
        marginTop:10,
    },
    touxiang:{
        height:50,
        width:50,
        borderRadius:50,
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
    },
    txt:{
        marginTop:10,
        fontSize:18,
    },
    box3: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems:'center',
        marginLeft:width * 0.025,
        width:width * 0.95,
    },
    txt2: {
        backgroundColor: '#ccc',
        paddingLeft: 15,
        paddingRight:15,
        width: '70%',
        borderRadius: 15,
        marginRight:0,
        marginTop: 10 ,
        marginBottom: 10 ,
    },
});
