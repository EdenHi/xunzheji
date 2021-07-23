import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class My extends Component {

  render() {
    return (
      <View>
         <Text>这是个人中心</Text>
      </View>
    );
  }
}
