/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {pxToDp} from './styleKits';
import {NavigationContext} from '@react-navigation/native';

class Index extends Component {
    static contextType = NavigationContext;
    constructor(props){
        super(props);
    }
  render() {
    // const { navigation } = this.props;
    const {goToPage, tabs, activeTab, navigation} = this.props;
    return (
      <View>
        <View
          style={{
            height: pxToDp(50),
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
                borderBottomWidth: activeTab === i ? pxToDp(3) : 0,
                borderRadius: 2,
              }}>
              <Text
                style={{
                  color: activeTab === i ? 'black' : 'grey',
                  fontSize: activeTab === i ? pxToDp(20) : pxToDp(20),
                }}>
                {v}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => this.context.navigate('Fabu')}
            style={{
              width: '17%',
              height: '60%',
              backgroundColor: '#7cc0c0',
              borderRadius: 20,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '50%',
            }}>
            <Text style={{color: '#fff'}}>发布</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Index;
