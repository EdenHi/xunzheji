import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class Store extends Component {
  render() {
    return (
      <View>
        <Text>这是商城</Text>
      </View>
    );
  }
}
