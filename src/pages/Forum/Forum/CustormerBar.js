/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground,AsyncStorage} from 'react-native';
import {pxToDp} from './styleKits';
import {NavigationContext} from '@react-navigation/native';

class CustormerBar extends Component {
    static contextType = NavigationContext;
    constructor(props){
        super(props);
        this.state={
          username:null
        }
    }
    componentDidMount(){

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
    const {goToPage, tabs, activeTab, navigation} = this.props;
    return (
      <View>
        <View
          style={{
            height: pxToDp(60),
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: pxToDp(20),
            justifyContent: 'space-around',
            backgroundColor: '#fff',
          }}>
          {tabs.map((v, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => goToPage(i)}
              style={{
                justifyContent: 'center',
                borderBottomColor: '#7cc0c0', //下划线颜色
                borderBottomWidth: activeTab === i ? pxToDp(4) : 0,
                borderRadius: 2,
              }}>
              <Text
                style={{
                  fontWeight:'bold',
                  color: activeTab === i ? 'black' : 'grey',
                  fontSize: activeTab === i ? pxToDp(20) : pxToDp(20),
                }}>
                {v}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>this.state.username===null? console.log('登录'):this.context.navigate('Fabu')}
            style={{
              width: '17%',
              height: '60%',
              backgroundColor: '#7cc0c0',
              borderRadius: 20,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '40%',
            }}>
            <Text style={{color: '#fff'}}>发布</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CustormerBar;
