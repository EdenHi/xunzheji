/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,Image,StyleSheet,Dimensions, TouchableOpacity,AsyncStorage,DeviceEventEmitter} from 'react-native';
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
      };
    }

    componentDidMount(){
      AsyncStorage.getItem('username',(error,result)=>{
        if (!error) {
            this.setState({
                username:result,
            });
            console.log('username',result)
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
    
    
    go_bianji=(v)=>{
      this.context.navigate('bianjiziliao',v);
    }
    render() {
      const {data,nickname} = this.state;
      console.log('data',data);
        return (
          <View style={{flex:1}}>
            <ParallaxScrollView
                backgroundColor="#fff"
                //contentBackgroundColor="pink"
                //下面渲染背景
              //  renderBackground={() =>  <Image style={{width:window.width,height:350}} source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b6eae3250bb62fadb3d2527f466cf033_b.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629681285&t=ae09d63c302629ed285b9d5ac74f04a9'}}/>}
                //下面是渲染前景
                renderForeground={() => (
                    <View style={{backgroundColor:'#3c454c',marginTop:width * 0.13}}>
                  <View style={styles.Box}>
                    <View style={styles.box1}>
                      <TouchableOpacity style={{margin:width * 0.05}}>
                        <Image source={{uri:data.portrait}}
                        style={styles.touxiang}/>
                      </TouchableOpacity>
                      <View style={{marginTop:width * 0.05}}>
                        <TouchableOpacity >
                          <Text style={styles.txt1}>{data.nickname}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:width * 0.05}}>
                          <Text style={{color:'white'}}>{data.signature === '' ? '暂无个性签名' : data.signature }</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:width * 0.05,marginBottom:width * 0.05,alignItems:'center'}}>
                      <View style={{flexDirection:'row'}}>
                        <View style={{marginLeft:10}}>
                          <TouchableOpacity style={styles.box2}>
                            <Text style={styles.txt2}>{data.fensi}</Text>
                          </TouchableOpacity>
                          <Text style={{color:'white'}}>粉丝</Text>
                        </View>
                        <View style={{marginLeft:10}}>
                          <TouchableOpacity style={styles.box2}>
                            <Text style={styles.txt2}>{data.guanzhu}</Text>
                          </TouchableOpacity>
                          <Text style={{color:'white'}}>关注</Text>
                        </View>
                      
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{borderWidth:1,borderRadius:15,height:height * 0.04,width:width * 0.2,justifyContent:'center',alignItems:'center',borderColor:'white',marginRight:10}}
                        onPress={()=>this.go_bianji(this.state.data)}>
                          <Text style={{color:'white'}}>编辑资料</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:1,borderRadius:15,height:height * 0.04,width:width * 0.2,justifyContent:'center',alignItems:'center',borderColor:'white',marginRight:10}}
                        onPress={()=>this.props.navigation.navigate('shezhi')}>
                          <Text style={{color:'white'}}>设置</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>

                )}
                //渲染固定头部
                renderFixedHeader={() =>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#3c454c',height:width * 0.13}}>
                    <TouchableOpacity style={{marginTop:10,marginLeft:30}}>
                        <Feather
                        name="menu"
                        size={30}
                        color="#7cc0c0"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:30,marginTop:10}}>
                        <Feather
                        name="external-link"
                        size={30}
                        color="#7cc0c0"/>
                    </TouchableOpacity>
                </View>}
                // renderStickyHeader={
                //     () =>  <View key="sticky-header" style={styles.stickySection}>
                //         <Text style={styles.stickySectionText}>Header</Text>
                //     </View>
                // }
               // stickyHeaderHeight={50}
                parallaxHeaderHeight={ 280 }
                >

                 <MyRoute />

            </ParallaxScrollView>
            
          </View>
          
        );
    }
}
const styles = StyleSheet.create({
    touxiang:{
        height:width * 0.2,
        width:width * 0.2,
        borderRadius:50,
    },
    Box:{
      marginTop: height * 0.01,
      backgroundColor:'#3c454c',
      width:width ,
      borderRadius:7,
    },
    box1:{
      flexDirection:'row',
    },
    box2:{
      alignItems:'center',
    },
    box3:{
      flexDirection:'row',
      justifyContent:'space-between',
      margin:width * 0.05,
      alignItems:'flex-end',
    },
    box4:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:width * 0.05,
    },
    box5:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:width * 0.05,
      marginBottom:width * 0.1,
    },
    txt1:{
      fontSize:21,
      fontWeight:'bold',
      color:'white',
    },
    txt2:{
      fontWeight:'bold',
      fontSize:18,
      marginBottom:width * 0.02,
      color:'white',
    },
});
