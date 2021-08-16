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
  ScrollView,
  RefreshControl,
  DeviceEventEmitter,
  AsyncStorage,
  Share,
  ImageBackground
} from 'react-native';
const {height,width} = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';
import {NavigationContext} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class Luntan_guanzhu extends Component {
    static contextType = NavigationContext;
    constructor(props){
        super(props);
        this.state = {
            data:[],
            modalVisible:false,
            pic:[],
            title:'',
            //放大显示的图片索引
            currentIndex:0,
            //存放图片的路径
            imgUrls:[],
            isLoding:false,
            denglu_username:'',
        };
    }
    //图片点击放大
    handleShowAlbum = (k,index)=>{
        const imgUrls =   this.state.data[k].pic.map(s=>({url:s}));
        const currentIndex = index;
        const modalVisible = true;
        this.setState({
            imgUrls,currentIndex,modalVisible,
        });
       }

    get_xinxi(){
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                this.setState({
                    denglu_username:result
                })
                fetch('http://8.142.11.85:3000/dongtai/guanzhu_allDongtai',{
                    method:'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        username:result,
                    })
                })
                   .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson);
                        this.setState({
                            data:responseJson,
                        });
                    })
            }
        })
        
    }
    componentDidMount() {

        this.get_xinxi();
        this.listener = DeviceEventEmitter.addListener('shuaxin',this.get_xinxi.bind(this))
      }

    componentWillUnmount(){
    this.listener.remove();
    }

    goComment=(v)=>{
        this.context.navigate('Comment',v);
    }


    loding(){
        this.setState({
            isLoding : true,
        });

        setTimeout(() => {
            this.setState({
                isLoding : false,
            });
            this.get_xinxi();
        }, 1000);
    }

  
    //更新点赞信息
    update_dianzan(v){
        if(v.dianzan_username === this.state.denglu_username){
            fetch('http://8.142.11.85:3000/dongtai/update_dianzan2', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title_id: v.title_id,
                    }),
                });
        }else {

            fetch('http://8.142.11.85:3000/dongtai/update_dianzan', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title_id: v.title_id,
                        denglu_username:this.state.denglu_username,
                    }),
                });
        }
        this.get_xinxi();
    }

onShare = async () => {
    try {
      const result = await Share.share({
        message:
          '是寻商迹哦',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
};
    render () {
        const {modalVisible,imgUrls,currentIndex} = this.state;
       // const { navigation } = this.props;
       let long = this.state.data.length;
    //    let mathrom = Math.round(Math.random() * long);

        return (
            <View>
                <View>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing = {this.state.isLoding} //设置是否在刷新
                            onRefresh = {this.loding.bind(this)} //下拉刷新结束}
                        />
                    }
                    >
                    {
                        this.state.data.map((v,k)=>{
                            if(k === 1){
                                    return (
                                        <View>
                                            <View style={{marginTop:"5%",width:width}}>
                                                 <Text style={{fontWeight:'bold',marginTop:"2%",marginLeft:10,fontSize:15}}>官方推荐</Text>
                                                 <ScrollView
                                                 horizontal
                                                 showsHorizontalScrollIndicator={false}
                                                 style={{marginTop:10,marginBottom:10}}>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <ImageBackground imageStyle={{borderRadius:10}} source={{uri:'https://img2.baidu.com/it/u=3197198635,147065671&fm=26&fmt=auto&gp=0.jpg'}} resizeMode="stretch" style={{height:250,width:180,borderRadius:10,marginLeft:10}}>
                                                            <View style={{alignItems:'center',marginTop:50}}>
                                                            <View style={{elevation:5,borderRadius:50,height:35,width:35,justifyContent:'center',alignItems:'center'}}>
                                                                <LinearGradient style={{width:"100%",height:"100%",alignItems:"center",borderRadius:50}} colors={["#7cc0c0","#fff"]} >
                                                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>#</Text>
                                                                </LinearGradient>
                                                                
                                                                </View>
                                                                <Text style={{color:'white',marginTop:20,fontSize:18,fontWeight:'bold'}}>圣诞COS</Text>
                                                                <Text style={{color:'white',marginTop:20,fontSize:12}}>朝气蓬勃</Text>
                                                                <TouchableOpacity style={{marginTop:10,width:"40%",height:"20%",elevation:5,backgroundColor:"#7cc0c0",borderRadius:15,alignItems:"center",justifyContent:"center"}}
                                                                onPress={()=>this.context.navigate('huati',{tag:'#圣诞COS'})}>
                                                                <Text style={{color:'white',fontSize:15,padding:5}}>参与 </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <ImageBackground imageStyle={{borderRadius:10}} source={{uri:'https://img2.baidu.com/it/u=3197198635,147065671&fm=26&fmt=auto&gp=0.jpg'}} resizeMode="stretch" style={{height:250,width:180,borderRadius:10,marginLeft:10}}>
                                                            <View style={{alignItems:'center',marginTop:50}}>
                                                            <View style={{elevation:5,borderRadius:50,height:35,width:35,justifyContent:'center',alignItems:'center'}}>
                                                                <LinearGradient style={{width:"100%",height:"100%",alignItems:"center",borderRadius:50}} colors={["#7cc0c0","#fff"]} >
                                                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>#</Text>
                                                                </LinearGradient>
                                                                
                                                                </View>
                                                                <Text style={{color:'white',marginTop:20,fontSize:18,fontWeight:'bold'}}>猫和老鼠</Text>
                                                                <Text style={{color:'white',marginTop:20,fontSize:12}}>朝气蓬勃</Text>
                                                                <TouchableOpacity style={{marginTop:10,width:"40%",height:"20%",elevation:5,backgroundColor:"#7cc0c0",borderRadius:15,alignItems:"center",justifyContent:"center"}}
                                                                onPress={()=>this.context.navigate('huati',{tag:'#猫和老鼠'})}>
                                                                <Text style={{color:'white',fontSize:15,padding:5}}>参与 </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <ImageBackground imageStyle={{borderRadius:10}} source={{uri:'https://img2.baidu.com/it/u=3197198635,147065671&fm=26&fmt=auto&gp=0.jpg'}} resizeMode="stretch" style={{height:250,width:180,borderRadius:10,marginLeft:10}}>
                                                            <View style={{alignItems:'center',marginTop:50}}>
                                                            <View style={{elevation:5,borderRadius:50,height:35,width:35,justifyContent:'center',alignItems:'center'}}>
                                                                <LinearGradient style={{width:"100%",height:"100%",alignItems:"center",borderRadius:50}} colors={["#7cc0c0","#fff"]} >
                                                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>#</Text>
                                                                </LinearGradient>
                                                                
                                                                </View>
                                                                <Text style={{color:'white',marginTop:20,fontSize:18,fontWeight:'bold'}}>lolita</Text>
                                                                <Text style={{color:'white',marginTop:20,fontSize:12}}>朝气蓬勃</Text>
                                                                <TouchableOpacity style={{marginTop:10,width:"40%",height:"20%",elevation:5,backgroundColor:"#7cc0c0",borderRadius:15,alignItems:"center",justifyContent:"center"}}
                                                                onPress={()=>this.context.navigate('huati',{tag:'#lolita'})}>
                                                                <Text style={{color:'white',fontSize:15,padding:5}}>参与 </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <ImageBackground imageStyle={{borderRadius:10}} source={{uri:'https://img2.baidu.com/it/u=3197198635,147065671&fm=26&fmt=auto&gp=0.jpg'}} resizeMode="stretch" style={{height:250,width:180,borderRadius:10,marginLeft:10}}>
                                                            <View style={{alignItems:'center',marginTop:50}}>
                                                            <View style={{elevation:5,borderRadius:50,height:35,width:35,justifyContent:'center',alignItems:'center'}}>
                                                                <LinearGradient style={{width:"100%",height:"100%",alignItems:"center",borderRadius:50}} colors={["#7cc0c0","#fff"]} >
                                                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>#</Text>
                                                                </LinearGradient>
                                                                
                                                                </View>
                                                                <Text style={{color:'white',marginTop:20,fontSize:18,fontWeight:'bold'}}>新年祝福姬</Text>
                                                                <Text style={{color:'white',marginTop:20,fontSize:12}}>朝气蓬勃</Text>
                                                                <TouchableOpacity style={{marginTop:10,width:"40%",height:"20%",elevation:5,backgroundColor:"#7cc0c0",borderRadius:15,alignItems:"center",justifyContent:"center"}}
                                                                onPress={()=>this.context.navigate('huati',{tag:'#新年祝福姬'})}>
                                                                <Text style={{color:'white',fontSize:15,padding:5}}>参与 </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <ImageBackground imageStyle={{borderRadius:10}} source={{uri:'https://img2.baidu.com/it/u=3197198635,147065671&fm=26&fmt=auto&gp=0.jpg'}} resizeMode="stretch" style={{height:250,width:180,borderRadius:10,marginLeft:10}}>
                                                            <View style={{alignItems:'center',marginTop:50}}>
                                                            <View style={{elevation:5,borderRadius:50,height:35,width:35,justifyContent:'center',alignItems:'center'}}>
                                                                <LinearGradient style={{width:"100%",height:"100%",alignItems:"center",borderRadius:50}} colors={["#7cc0c0","#fff"]} >
                                                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>#</Text>
                                                                </LinearGradient>
                                                                
                                                                </View>
                                                                <Text style={{color:'white',marginTop:20,fontSize:18,fontWeight:'bold'}}>动漫嘉年华</Text>
                                                                <Text style={{color:'white',marginTop:20,fontSize:12}}>朝气蓬勃</Text>
                                                                <TouchableOpacity style={{marginTop:10,width:"40%",height:"20%",elevation:5,backgroundColor:"#7cc0c0",borderRadius:15,alignItems:"center",justifyContent:"center"}}
                                                                onPress={()=>this.context.navigate('huati',{tag:'#动漫嘉年华'})}>
                                                                <Text style={{color:'white',fontSize:15,padding:5}}>参与 </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <ImageBackground imageStyle={{borderRadius:10}} source={{uri:'https://img2.baidu.com/it/u=3197198635,147065671&fm=26&fmt=auto&gp=0.jpg'}} resizeMode="stretch" style={{height:250,width:180,borderRadius:10,marginLeft:10}}>
                                                            <View style={{alignItems:'center',marginTop:50}}>
                                                            <View style={{elevation:5,borderRadius:50,height:35,width:35,justifyContent:'center',alignItems:'center'}}>
                                                                <LinearGradient style={{width:"100%",height:"100%",alignItems:"center",borderRadius:50}} colors={["#7cc0c0","#fff"]} >
                                                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>#</Text>
                                                                </LinearGradient>
                                                                
                                                                </View>
                                                                <Text style={{color:'white',marginTop:20,fontSize:18,fontWeight:'bold'}}>漫展返图</Text>
                                                                <Text style={{color:'white',marginTop:20,fontSize:12}}>朝气蓬勃</Text>
                                                                <TouchableOpacity style={{marginTop:10,width:"40%",height:"20%",elevation:5,backgroundColor:"#7cc0c0",borderRadius:15,alignItems:"center",justifyContent:"center"}}
                                                                onPress={()=>this.context.navigate('huati',{tag:'#漫展返图'})}>
                                                                <Text style={{color:'white',fontSize:15,padding:5}}>参与 </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity activeOpacity={1}>
                                                        <ImageBackground imageStyle={{borderRadius:10}} source={{uri:'https://img2.baidu.com/it/u=3197198635,147065671&fm=26&fmt=auto&gp=0.jpg'}} resizeMode="stretch" style={{height:250,width:180,borderRadius:10,marginLeft:10}}>
                                                            <View style={{alignItems:'center',marginTop:50}}>
                                                            <View style={{elevation:5,borderRadius:50,height:35,width:35,justifyContent:'center',alignItems:'center'}}>
                                                                <LinearGradient style={{width:"100%",height:"100%",alignItems:"center",borderRadius:50}} colors={["#7cc0c0","#fff"]} >
                                                                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>#</Text>
                                                                </LinearGradient>
                                                                
                                                                </View>
                                                                <Text style={{color:'white',marginTop:20,fontSize:18,fontWeight:'bold'}}>凉宫春日</Text>
                                                                <Text style={{color:'white',marginTop:20,fontSize:12}}>朝气蓬勃</Text>
                                                                <TouchableOpacity style={{marginTop:10,width:"40%",height:"20%",elevation:5,backgroundColor:"#7cc0c0",borderRadius:15,alignItems:"center",justifyContent:"center"}}
                                                                onPress={()=>this.context.navigate('huati',{tag:'#凉宫春日'})}>
                                                                <Text style={{color:'white',fontSize:15,padding:5}}>参与 </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </ImageBackground>
                                                    </TouchableOpacity>
                                                 </ScrollView>
                                            </View>
                                        <View key={k} style={{marginTop:10,backgroundColor:'white'}}>
                                            <View style={{marginLeft:width * 0.05,width:width * 0.9}}>
                                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                                        <TouchableOpacity
                                                        onPress={() => {this.context.navigate('people',v.username), 
                                                        AsyncStorage.setItem('Person',v.username,(error)=>{
                                                            if (!error){
                                                                console.log('Person保存成功');
                                                            } else {
                                                                console.log('保存失败',err);
                                                            }
                                                        });
                                                    }}
                                                        >
                                                            <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                                        </TouchableOpacity> 
                                                        <View style={{marginLeft:10}}>
                                                            <Text style={styles.name}>{v.nickname}</Text>
                                                            <Text style={{color:'#aaa',fontSize:12}}>{v.fabiao_time}</Text>
                                                        </View>
                                                    </View>
                                                    {/* <TouchableOpacity onPress={()=>this.setState({showtf:true,kk:k})}><Text style={{fontSize:15,color:'skyblue'}}>删除</Text></TouchableOpacity> */}
                                                </View>
                                          <Text style={v.title===''?{height:0}:styles.txt}
                                          ellipsizeMode="tail"
                                          numberOfLines={8}>{v.title}</Text>
                                          <View style={styles.box}>
                                          <FlatList
                                            contentContainerStyle={styles.listViewStyle}
                                            keyExtractor={(item, index) => (index + '1')}
                                            data = {v.pic}
                                           renderItem={({item,index})=>{
                                             if (item === null ){
                                                return ;
                                            } else if (v.pic.length > 1 && v.pic.length < 5){
                                                return (
                                                    <View style={styles.box2}>
                                                <TouchableOpacity
                                                key = {index}
                                                onPress={()=>this.handleShowAlbum(k,index)}>
                                                    <Image source={{uri:item}} style={{height:(width * 0.9 - 4) / 2,width:(width * 0.9 - 4) / 2}}/>
                                                </TouchableOpacity>
                                                </View>
                                                );
                                        } else if (v.pic.length >= 5 && v.pic.length <= 9){
                                            return (
                                                <View style={styles.box2}>
                                                <TouchableOpacity
                                                key = {index}
                                                onPress={()=>this.handleShowAlbum(k,index)}>
                                                    <Image source={{uri:item}} style={{height:(width * 0.9 - 7) / 3,width:(width * 0.9 - 7) / 3}}/>
                                                </TouchableOpacity>
                                            </View>
                                            );
                                        } else {
                                            return (
                                                <View style={styles.box2}>
                                                    <TouchableOpacity
                                                    key = {index}
                                                    onPress={()=>this.handleShowAlbum(k,index)}>
                                                        <Image source={{uri:item}} style={{height:width * 0.9 - 2,width:width * 0.9 - 2}}/>
                                                    </TouchableOpacity>
                                                </View>
                                            );
                                        }
                                           }}/>
                                           </View>

                                        {/* tag标签 */}
                                       <TouchableOpacity style={v.tag ==='' ||v.tag===null?{height:0,width:0}:{flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:'#FFE6CC',borderRadius:10,width:width*0.25,justifyContent:'center',alignItems:'center'}}
                                       onPress={()=>this.context.navigate('huati',{tag:v.tag})}>
                                           
                                           <Text style={{marginLeft:5,paddingTop:5,paddingBottom:5}}>{v.tag}</Text>
                                           
                                       </TouchableOpacity>

                                           <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around',marginBottom:10}}>
                                                <TouchableOpacity>
                                                    <View style={{flexDirection:'row'}}>
                                                        <TouchableOpacity onPress={()=>{this.update_dianzan(v),DeviceEventEmitter.emit('dianzan',1)}}>
                                                            <Ionicons
                                                            name={v.dianzan_username === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                            size={20}
                                                            color={v.dianzan_username === this.state.denglu_username ? 'red' : 'black'}
                                                            />
                                                        </TouchableOpacity> 
                                                        <Text style={{marginLeft:5}}>{v.dianzan}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={()=>this.goComment(v)}>
                                                <View style={{flexDirection:'row'}}>
                                                    <Ionicons
                                                    name="chatbubble-ellipses-outline"
                                                    size={20}
                                                    color="black"/>
                                                    <Text style={{marginLeft:5}}>{v.counts}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                 onPress={() => {
                                                    
                                                    this.onShare();
                                                  }}
                                                >
                                                    <View style={{flexDirection:'row'}}>
                                                        <Ionicons
                                                        name="arrow-redo-outline"
                                                        size={20}
                                                        color="#000"/>
                                                    </View>
                                                </TouchableOpacity>
                                           </View>
                                           </View>
                                        </View>
                                        </View>
                                      );
                                
                            }else {
                                return (
                                    <View key={k} style={{marginTop:10,backgroundColor:'white'}}>
                                        <View style={{marginLeft:width * 0.05,width:width * 0.9}}>
                                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                                    <TouchableOpacity
                                                    onPress={() => {this.context.navigate('people',v.username), 
                                                                AsyncStorage.setItem('Person',v.username,(error)=>{
                                                                    if (!error){
                                                                        console.log('Person保存成功');
                                                                    } else {
                                                                        console.log('保存失败',err);
                                                                    }
                                                                });
                                                            }}
                                                    >
                                                        <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                                    </TouchableOpacity> 
                                                    <View style={{marginLeft:10}}>
                                                        <Text style={styles.name}>{v.nickname}</Text>
                                                        <Text style={{color:'#aaa',fontSize:12}}>{v.fabiao_time}</Text>
                                                    </View>
                                                </View>
                                                {/* <TouchableOpacity onPress={()=>this.setState({showtf:true,kk:k})}><Text style={{fontSize:15,color:'skyblue'}}>删除</Text></TouchableOpacity> */}
                                            </View>
                                      <Text style={v.title===''?{height:0}:styles.txt}
                                      ellipsizeMode="tail"
                                      numberOfLines={8}>{v.title}</Text>
                                      <View style={styles.box}>
                                      <FlatList
                                        contentContainerStyle={styles.listViewStyle}
                                        keyExtractor={(item, index) => (index + '1')}
                                        data = {v.pic}
                                       renderItem={({item,index})=>{
                                         if (item === null ){
                                            return ;
                                        }  else if (v.pic.length > 1 && v.pic.length < 5){
                                            return (
                                                <View style={styles.box2}>
                                            <TouchableOpacity
                                            key = {index}
                                            onPress={()=>this.handleShowAlbum(k,index)}>
                                                <Image source={{uri:item}} style={{height:(width * 0.9 - 4) / 2,width:(width * 0.9 - 4) / 2}}/>
                                            </TouchableOpacity>
                                            </View>
                                            );
                                    } else if (v.pic.length >= 5 && v.pic.length <= 9){
                                        return (
                                            <View style={styles.box2}>
                                            <TouchableOpacity
                                            key = {index}
                                            onPress={()=>this.handleShowAlbum(k,index)}>
                                                <Image source={{uri:item}} style={{height:(width * 0.9 - 7) / 3,width:(width * 0.9 - 7) / 3}}/>
                                            </TouchableOpacity>
                                        </View>
                                        );
                                    } else {
                                        return (
                                            <View style={styles.box2}>
                                                <TouchableOpacity
                                                key = {index}
                                                onPress={()=>this.handleShowAlbum(k,index)}>
                                                    <Image source={{uri:item}} style={{height:width * 0.9 - 2,width:width * 0.9 - 2}}/>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }
                                       }}/>
                                       </View>

                                       {/* tag标签 */}
                                       <TouchableOpacity style={v.tag ==='' || v.tag === null?{height:0,width:0}:{flexDirection:'row',marginTop:10,alignItems:'center',backgroundColor:'#FFE6CC',borderRadius:10,width:100,justifyContent:'center',alignItems:'center'}}
                                       onPress={()=>this.context.navigate('huati',{tag:v.tag})}>
                                           <Text style={{marginLeft:5,paddingTop:5,paddingBottom:5}}>{v.tag}</Text>
                                       </TouchableOpacity>

                                       <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around',marginBottom:10}}>
                                            <TouchableOpacity>
                                                <View style={{flexDirection:'row'}}>
                                                    <TouchableOpacity onPress={()=>{this.update_dianzan(v),DeviceEventEmitter.emit('dianzan',1)}}>
                                                        <Ionicons
                                                        name={v.dianzan_username === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                        size={20}
                                                        color={v.dianzan_username === this.state.denglu_username ? 'red' : 'black'}
                                                        />
                                                    </TouchableOpacity> 
                                                    <Text style={{marginLeft:5}}>{v.dianzan}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>this.goComment(v)}>
                                            <View style={{flexDirection:'row'}}>
                                                <Ionicons
                                                name="chatbubble-ellipses-outline"
                                                size={20}
                                                color="black"/>
                                                <Text style={{marginLeft:5}}>{v.counts}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                             onPress={() => {
                                                
                                                this.onShare();
                                              }}
                                            >
                                                <View style={{flexDirection:'row'}}>
                                                    <Ionicons
                                                    name="arrow-redo-outline"
                                                    size={20}
                                                    color="#000"/>
                                                </View>
                                            </TouchableOpacity>
                                       </View>
                                       </View>
                                    </View>
                                  );
                            
                        } }
                       
                        )
                      }
                    </ScrollView>
                    </View>
                <Modal animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { this.setState({modalVisible:false});}}>
                    <ImageViewer imageUrls={imgUrls} style = {{flex:1}} index={currentIndex} onClick={() => { this.setState({ modalVisible: false }); }}/>
                </Modal>
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
        // backgroundColor:'blue',
        overflow:'hidden',
        borderRadius:15,
        marginTop:10,
    },
    touxiang:{
        height:40,
        width:40,
        borderRadius:50,
        marginTop:10,
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
});