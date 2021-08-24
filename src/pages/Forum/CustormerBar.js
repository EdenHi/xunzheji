/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { pxToDp } from './styleKits';
import { NavigationContext } from '@react-navigation/native';
import { Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window')

class CustormerBar extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      username: null
    }
  }
  componentDidMount() {

    this.get_token()

  }
  //获取个人信息数据
  get_token() {
    AsyncStorage.getItem('username', (error, result) => {
      if (!error) {
        this.setState({
          username: result,
        });
        console.log('username', result);

      } else {
        console.log('获取数据失败', error);
      }
    });
  }
  render() {
    // const { navigation } = this.props;
    const { goToPage, tabs, activeTab, navigation } = this.props;
    return (
      <View>
        <View
          style={{
            height: pxToDp(60),
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: pxToDp(20),
            justifyContent: 'space-around',
            backgroundColor: '#7cc0c0',
            
            height:height*0.08
          }}>
          {tabs.map((v, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => goToPage(i)}
              style={{
                justifyContent: 'center',
                borderBottomColor: '#fff', //下划线颜色
                borderBottomWidth: activeTab === i ? pxToDp(2) : 0,
                borderRadius: 2,
               
              }}>
              <Text
                style={{
                  color: activeTab === i ? '#fff' : '#fff',
                  fontSize: activeTab === i ? pxToDp(20) : pxToDp(20),
                  textAlign:'center',
                  fontWeight:"bold"
                }}>
                {v}
              </Text>
              <Text
                style={{
                  color: activeTab === i ? '#fff' : '#fff',
                  fontSize: activeTab === i ? pxToDp(8) : pxToDp(8),
                  textAlign:'center',
                  marginTop:-2
                }}>
                {i == 0 ? 'ATTENTION' : 'HOTLISTS'}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.state.username === null ? console.log('登录') : this.context.navigate('Fabu')}
            style={{
              width: '17%',
              height: '60%',
              backgroundColor: '#fff',
              borderRadius: 20,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '40%',
            }}>
            <Text style={{ color: '#7cc0c0' }}>发布</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CustormerBar;
