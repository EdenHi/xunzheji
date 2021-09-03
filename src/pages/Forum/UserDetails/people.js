/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage,
  DeviceEventEmitter,
} from 'react-native';
import AboutComponent from './head';
import MyRoute from '../../../nav/MyRoute';
import axios from 'axios';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationContext} from '@react-navigation/native';
import uuid from 'react-native-uuid'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
const width = Dimensions.get('window').width;

export default class people extends Component {
    static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
        username:this.props.route.params,
        data:[],
        denglu_username:'',
        panduan_guanzhu:'',
        isScroll:true,
        chatroom:0
    }
  }

  //获取用户数据
  get_shuju(){
    axios.post('http://47.100.78.254:3000/index/selectPerson',{
                    username:this.props.route.params,
            }).then((json)=>{
                this.setState({
                    data:json.data[0][0],
                });
            });
  }
  //查询聊天室
  SelcetChatRoom(x){
    fetch('http://47.100.78.254:3000/users/getchatroom', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_1: x,
            user_2: this.state.username
        })
    }).then((response) => response.json())
        .then((json) => {
            if(json!==[]){

                this.setState({chatroom:json[0].room})
            }
        })
        .catch((error) => {
            console.log(error);
        })
  }
  //判断是否关注该用户
  panduan_guanzhu(v){
    axios.post('http://47.100.78.254:3000/index/panduan_guanzhu',{
        user_name:this.props.route.params,
        username:v,
        }).then((json)=>{
            console.log('panduan_guanzhu',json.data);
            this.setState({
                panduan_guanzhu:json.data,
            });
        });
  }
  componentDidMount(){
    AsyncStorage.getItem('username',(error,result)=>{
        if (!error) {
            console.log('denglu_username',result);
            this.setState({
                denglu_username:result,
            });
            this.SelcetChatRoom(result);
            this.panduan_guanzhu(result);
        }
    })

    this.get_shuju();
    
}


  //点击关注按钮，增加粉丝数量，增加登录用户的关注数
  guanzhu(){
    fetch('http://47.100.78.254:3000/index/insert_guanzhu', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            username:this.state.denglu_username,
            user_name:this.state.username,
        })
    })
       .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        this.get_shuju();
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    denglu_username:result,
                });
                this.panduan_guanzhu(result);
            }
        })
  }

  //取消关注
  quxiao_guanzhu(){
    fetch('http://47.100.78.254:3000/index/delect_guanzhu', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            username:this.state.denglu_username,
            user_name:this.state.username,
        })
    })
       .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        this.get_shuju();
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    denglu_username:result,
                });
                this.panduan_guanzhu(result);
            }
        })
  }

//判断点击按钮是关注还是取消
dianji_anniu(){
    if(this.state.panduan_guanzhu === 1){
        this.quxiao_guanzhu();
        this.setState({
            panduan_guanzhu:0
        })
    }
    if(this.state.panduan_guanzhu === 0){
        this.guanzhu();
        this.setState({
           panduan_guanzhu:1
        })
    }
}

//创建聊天室
CreateChatRoom(){
    let uid=uuid.v4();
    this.setState({chatroom:uid})
    console.log('name',this.state.chatroom);
    fetch('http://47.100.78.254:3000/users/creatchatroom', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_1: this.state.denglu_username,
            user_2: this.state.username,
            room:uid
        })
    })
    this.props.navigation.navigate('Chats',{room:uid})
  }
  render() {
    const { navigation } = this.props;
    const {data,isScroll} = this.state;
    console.log('data',data);
    console.log('username',this.props.route.params);
      return (
        <View style={{flex:1}}>
          <ParallaxScrollView
              headerBackgroundColor="#fff"
              stickyHeaderHeight={STICKY_HEADER_HEIGHT}
              parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
              backgroundSpeed={1}
              scrollEnabled={isScroll}
              renderBackground={()=>(
                <View key="background" />
              )}

              renderForeground={() => (
                <View key="parallax-header" style={styles.parallaxHeader}>
                <ImageBackground style={{ width: width, height: '100%',flexDirection:'column-reverse'}} source={{ uri:data.backpic }}>
                <View style={{width:'100%',height:'60%',backgroundColor:'#fff',borderTopLeftRadius:15,borderTopRightRadius:15}}>
                    <View style={{width:'100%',height:'20%',flexDirection:'row-reverse',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>{if (this.state.chatroom==0) {
                            this.CreateChatRoom()

                            
                        }else{console.log('chat',this.state.chatroom);
                            this.props.navigation.navigate('Chats',{room:this.state.chatroom})
                        }}} style={{width:'15%',height:'85%',borderWidth:1,borderColor:'#7cc0c0',borderRadius:20,margin:'5%',alignItems:'center',justifyContent:'center'}}>
                            <Feather style={styles.icon}
                                    name="mail"
                                    size={30}
                                    color="#7cc0c0"
                                />
                        </TouchableOpacity>
                        
                        
                            
                            <TouchableOpacity style={{width:'35%',height:'78%',backgroundColor:this.state.panduan_guanzhu === 1 ? 'white':'#7cc0c0',borderRadius:20,alignItems:'center',elevation:5,justifyContent:'center'}}
                            onPress={()=>this.dianji_anniu()}>
                            <Text style={{fontSize:15,color:this.state.panduan_guanzhu === 1 ? 'black' : '#fff'}}>{this.state.panduan_guanzhu === 1 ? '已关注' :'关注'}</Text>
                            </TouchableOpacity>
                        
                    
                    </View>
                    <View style={{width:'100%',height:'15%',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{marginLeft:'10%',fontSize:15}}>{data.nickname}</Text>

                    </View>
                    <View style={{width:'100%',height:'10%',justifyContent:'center'}}>
                        <Text style={{marginLeft:'10%',fontSize:13}}>{data.signature === '' ? '暂无个性签名' : data.signature }</Text>
                    </View>
                    <View style={{width:'100%',height:'15%',flexDirection:'row',alignItems:'center'}}>
                     <View style={{width:'0%',height:'80%',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',marginLeft:'10%',borderRadius:5}} />
                     <View style={{height:'80%',justifyContent:'center',backgroundColor:'#f1f1f1',borderRadius:5}}>
                         <Text style={{fontSize:13,margin:3}}>{data.area}</Text>
                     </View>
                    </View>
                    <View style={{width:'100%',height:'30%',marginTop:'5%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <View style={{width:'20%',height:'90%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:25}}>101 </Text>
                            <Text style={{fontSize:15}}>获赞</Text>
                        </View>
                        <TouchableOpacity style={{width:'20%',height:'90%',alignItems:'center',justifyContent:'center'}}
                        onPress={()=>{this.props.navigation.push('fans',this.state.username)}}>
                            <Text style={{fontSize:25}}>{data.fensi}</Text>
                            <Text style={{fontSize:15}}>粉丝</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:'20%',height:'90%',alignItems:'center',justifyContent:'center'}}
                        onPress={()=>{this.props.navigation.push('Concerns',this.state.username)}}>
                            <Text style={{fontSize:25}}>{data.guanzhu}</Text>
                            <Text style={{fontSize:15}}>关注</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{width:width*0.28,height:width*0.28,backgroundColor:'#7cc0c0',position:'absolute',borderRadius:50,borderWidth:3,borderColor:'#fff',bottom:'50%',left:'6%'}} source={{uri:data.portrait}}/>
                </ImageBackground>

            </View>
                    )}
                    renderStickyHeader={()=>
                      <View key="sticky-header" style={styles.stickySection}>
                      <Image style={{width:30,height:30,backgroundColor:'#7cc0c0',marginLeft:'10%',borderRadius:50}} source={{uri:data.portrait}}/>
                      <Text style={styles.stickySectionText}>{data.nickname}</Text>
                  </View>
                    }

                    //渲染固定头部
                    renderFixedHeader={() =>
                      <View key="fixed-header" style={styles.fixedSection}>
                      <TouchableOpacity activeOpacity={1} style={{height: 40, width:40,alignItems:'center',justifyContent:'center'}} onPress={() => {
                         { this.props.navigation.goBack(),DeviceEventEmitter.emit('test2',1)};
                      }}>
                          <Feather style={styles.icon}
                          name="chevron-left"
                          size={30}
                          color="#fff"
                      />
                      </TouchableOpacity>
                      {/* <TouchableHighlight style={{height: 40, width: 40,alignItems:'center',justifyContent:'center'}} >
                      <Feather style={styles.icon}
                          name="share"
                          size={30}
                          color="#000"
                      />
                      </TouchableHighlight> */}
                  </View>}
                >

               <MyRoute />

          </ParallaxScrollView>

        </View>

      );
  }
}
const window = Dimensions.get('window');

const AVATAR_SIZE = 50;
const ROW_HEIGHT = 50;
const PARALLAX_HEADER_HEIGHT = 400;
const STICKY_HEADER_HEIGHT = 50;
const SCREEN_WIDTH = window.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    background: {
        position: 'absolute',
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT,

    },
    stickySection: {
        flexDirection: 'row',
        alignItems: 'center',
        height: STICKY_HEADER_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor:'#fff',
    },
    stickySectionText: {
        color: 'black',
        fontSize: 15,
        marginLeft:5,
    },
    fixedSection: {
        width: SCREEN_WIDTH,
        position: 'absolute',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    fixedSectionText: {
        color: '#fff',
        fontSize: 20,
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',

    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2,
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5,
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5,
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        // borderColor: '#ccc',
        // borderBottomWidth: 1,
        justifyContent: 'center',
    },
    rowText: {
        fontSize: 20,
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
});
