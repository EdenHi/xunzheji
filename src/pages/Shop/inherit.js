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
import Inheritor from './inheritor/index'
export default function homeinherit() {
  return (
    <View style={{ flex: 1 }}>
      <Inheritor />
    </View>
  );
}