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
import Clothes from './clothes/index'
export default function ClothesMade() {
  return (
    <View style={{ flex: 1 }}>
      <Clothes/>
    </View>
  );
}