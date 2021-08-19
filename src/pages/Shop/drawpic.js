import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  FlatList
} from 'react-native';
import Draw from './draw/index'
export default function drawpic() {
  return (
    <View style={{ flex: 1 }}>
      <Draw />
    </View>
  );
}