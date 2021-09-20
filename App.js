import React, { Component } from 'react';
import { View, StyleSheet, Image ,Text, ImageBackground} from 'react-native';
import 'react-native-gesture-handler';
import StackNav from './src/nav/StackNav';
import { NavigationContainer } from '@react-navigation/native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLauncher: true,
      time:3
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isShowLauncher: false,
      });
    }, 3000);
    this.startTimer()
  }
  startTimer(){
    let timeChange;
    let time=this.state.time;
    const clock=()=>{
      if(time>0){
        time=time-1;
        this.setState({time:time})
      }else{
        clearInterval(timeChange);
      }
    }
    timeChange=setInterval(clock,1000);
  }
  render() {
    return !this.state.isShowLauncher ?
      (
        <NavigationContainer>
          <StackNav></StackNav>
        </NavigationContainer>
      ) : (<View style={{width:'100%',height:'100%'}}>

        <ImageBackground style={{ width:'100%',height:'100%' }} resizeMode={'cover'} source={require('./src/pages/img/shouye.png')}>
        <Text style={{fontSize:30}}>{this.state.time}</Text>
        </ImageBackground>
{/* <View style={{width:'100%',height:'20%',backgroundColor:'red'}}></View> */}
      </View>)
  }
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
