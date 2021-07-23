
import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class Tour extends Component {
  render() {
    return (
      <View>
        <Text>这是旅游</Text>
      </View>
    );
  }
}
