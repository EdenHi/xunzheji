
import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Water from "../../water"
const {width, height} = Dimensions.get('window');

export default class goods extends Component {
  render() {
    return (
      <View>
      <Water></Water>
      </View>
    );
  }
}
