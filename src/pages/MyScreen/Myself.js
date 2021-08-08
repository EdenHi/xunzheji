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
  RefreshControl,
  ActivityIndicator,
  SwipeableFlatList,
  TouchableHighlight,
  SectionList,
  AsyncStorage,
  DeviceEventEmitter,
} from 'react-native';
import AboutComponent from './header';
import MyRoute from '../../nav/MyRoute';
import axios from 'axios';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
const width = Dimensions.get('window').width;

export default class Myself extends Component {
  constructor(props) {
    super(props);
    this.aboutCommon = new AboutComponent(props, null, null, null);
    this.state = {
        username:'',
        data:[],
    }
  }

  get_shuju(){
    AsyncStorage.getItem('username',(error,result)=>{
        if (!error) {
            this.setState({
                username:result,
            });
            console.log('username',result)
            axios.post('http://8.142.11.85:3000/index/selectPerson',{
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
    this.listener = DeviceEventEmitter.addListener('test',this.get_shuju.bind(this))
  }
  
//移除监听
componentWillUnmount(){
    this.listener.remove();
    }
  render() {
    const {data} = this.state;
    let contentView = (
      <View
        style={{
          width: width,
          backgroundColor: '#f2f2f2',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MyRoute />
      </View>
    );

    return this.aboutCommon.renderView(contentView, {
        nickname:data.nickname,
        signature:data.signature,
        fensi:data.fensi,
        guanzhu:data.guanzhu,
        portrait:data.portrait,
        phone:data.phone,
        area:data.area,
        birthday:data.birthday,
        username:this.state.username,
        sex:data.sex,
        backpic:data.backpic,
        isScroll:false,
    });
  }
}
