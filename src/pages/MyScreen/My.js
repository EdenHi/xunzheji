/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,Image,StyleSheet,Dimensions, TouchableOpacity,AsyncStorage,DeviceEventEmitter,ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import axios from 'axios';
import {NavigationContext} from '@react-navigation/native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import MyRoute from '../../nav/MyRoute';

const {height,width} = Dimensions.get('window');
export default class My extends Component {
  static contextType = NavigationContext;
    constructor(props){
      super(props);
      this.state = {
        username:'',
        data:[],
        isScroll:true,
      };
    }

    get_shuju(){
      AsyncStorage.getItem('username',(error,result)=>{
          if (!error) {
              this.setState({
                  username:result,
              });
              console.log('username',result);
              axios.post('http://192.168.50.117:3000/index/selectPerson',{
                              username:result,
                      }).then((json)=>{
                          this.setState({
                            data:json.data[0],
                          });
                        });
          } else {
              console.log('获取数据失败',error);
          }
      });
    }


    componentDidMount(){
      this.get_shuju();
      this.listener = DeviceEventEmitter.addListener('test',this.get_shuju.bind(this));
      this.listener = DeviceEventEmitter.addListener('scrollview',this.scrollview.bind(this));
    }

    scrollview(){
      this.setState({isScroll:true})
    }

  //移除监听
  componentWillUnmount(){
      this.listener.remove();
      }

    go_bianji=(v)=>{
      this.context.navigate('bianjiziliao',v);
    }
    render() {
      const { navigation } = this.props;
      const {data,isScroll} = this.state;
      console.log('data',data);
        return (
          <View style={{flex:1}}>
            <ParallaxScrollView
                headerBackgroundColor="#fff"
                stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                backgroundSpeed={1}
                scrollEnabled={isScroll}
                ref={ref => this.scrollRef = ref}
                onScroll={(e) =>{
                  console.log('e',e.nativeEvent.contentOffset.y);
                  console.log('isScro',isScroll)
                  if (e.nativeEvent.contentOffset.y >= 195 && e.nativeEvent.contentOffset.y <= 199){
                    this.setState({
                      isScroll:false,
                    });
                  }
                  }}



                renderBackground={()=>(
                  <View key="background" />
                )}

                renderForeground={() => (
                    <View key="parallax-header" style={styles.parallaxHeader}>
              <ImageBackground
                style={{
                  width: width,
                  height: '100%',
                  flexDirection: 'column-reverse',
                }}
                source={{
                  uri: data.backpic,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '75%',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: width * 0.21,
                        height: width * 0.21,
                        backgroundColor: '#fff',
                        borderRadius: 50,
                        marginLeft: '5%',
                      }}
                      source={{uri:data.portrait}}
                    />
                    <View
                      style={{
                        width: '70%',
                        height: '80%',
                        marginLeft: '3%',
                        justifyContent: 'space-around',
                      }}>
                      <Text
                        style={{fontSize: 15, color: '#7cc0c0', fontWeight: 'bold'}}>
                        {data.nickname}
                      </Text>
                      <Text style={{fontSize: 13, color: '#7cc0c0'}}>{data.signature === '' ? '暂无个性签名' : data.signature }</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', width: '30%',backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',marginTop:'10%',justifyContent:'center',borderTopRightRadius:20,borderBottomRightRadius:20}}>
                      <TouchableOpacity
                       onPress={() => navigation.navigate('fans')}
                      activeOpacity={1}
                        style={{
                          width: '50%',
                          height: '60%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 15, color: '#fff'}}>{data.fensi}</Text>
                        <Text style={{fontSize: 15, color: '#fff'}}>粉丝</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                         onPress={() => navigation.navigate('Concerns')}
                      activeOpacity={1}
                        style={{
                          width: '50%',
                          height: '70%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 15, color: '#fff'}}>{data.guanzhu}</Text>
                        <Text style={{fontSize: 15, color: '#fff'}}>关注</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                    activeOpacity={1}
                      style={{
                        width: '25%',
                        height: '30%',
                        borderRadius: 20,
                        marginLeft: '15%',
                        marginTop: '8%',
                        backgroundColor: '#7cc0c0',
                        elevation:5,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={()=>this.props.navigation.navigate('bianjiziliao',{
                          username:data.username,
                          portrait:data.portrait,
                          nickname:data.nickname,
                          sex:data.sex,
                          birthday:data.birthday,
                          signature:data.signature,
                          phone:data.phone,
                          area:data.area,
                          backpic:data.backpic,
                      })}>

                      <Text style={{fontSize: 15, color: '#fff'}}>编辑资料</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={1}
                      style={{
                        width: '20%',
                        height: '30%',
                        borderRadius: 20,
                        elevation:5,
                        marginLeft: '5%',
                        marginTop: '8%',
                        backgroundColor: '#7cc0c0',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={()=>this.props.navigation.navigate('shezhi')}>
                      <Text style={{fontSize: 15, color: '#fff'}}>设置</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
                      )}
                      renderStickyHeader={()=>
                        <View key="sticky-header" style={styles.stickySection}>
                        <Image
                          style={{
                            width: 30,
                            height: 30,
                            backgroundColor: '#7cc0c0',
                            marginLeft: '10%',
                            borderRadius: 50,
                          }}
                          source={{uri:data.portrait}}
                        />
                        <Text style={styles.stickySectionText}>{data.nickname}</Text>
                      </View>
                      }

                      //渲染固定头部
                      renderFixedHeader={() =>
                        <View key="fixed-header" style={styles.fixedSection}>
                        <TouchableOpacity
                        activeOpacity={1}
                          style={{
                            height: 40,
                            width: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          onPress={() => {
                            this.props.navigation.goBack();
                          }}
                          >
                          <Feather name="menu" size={25} color="#7cc0c0" />
                        </TouchableOpacity>
                        <TouchableOpacity
                        activeOpacity={1}
                          style={{
                            height: 40,
                            width: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Feather name="external-link" size={25} color="#7cc0c0" />
                        </TouchableOpacity>
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
const PARALLAX_HEADER_HEIGHT = 250;
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
    backgroundColor: '#fff',
  },
  stickySectionText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
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
