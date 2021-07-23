import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import StackNav from './src/nav/StackNav';
import {NavigationContainer} from '@react-navigation/native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLauncher: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isShowLauncher: false,
      });
    }, 2000);
  }
  render() {
    return (
      <NavigationContainer>
        <StackNav></StackNav>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
