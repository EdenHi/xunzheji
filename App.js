import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import StackNav from './src/nav/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends Component {
   SetTime= setTimeout(() => {
    this.setState({
      isShowLauncher: false,
    });
  }, 3000);
  constructor(props) {
    super(props);
    this.state = {
      isShowLauncher: true,
      time: 3
    };
  }
  
  componentDidMount() {
    this.SetTime;
    this.startTimer()
  }

  startTimer() {
    let timeChange;
    let time = this.state.time;
    const clock = () => {
      if (time > 0) {
        time = time - 1;
        this.setState({ time: time })
      } else {
        clearInterval(timeChange);
      }
    }
    timeChange = setInterval(clock, 1000);
  }
  render() {
    return !this.state.isShowLauncher ?
      (
        <NavigationContainer>
          <StackNav></StackNav>
        </NavigationContainer>
      ) : (<View style={{ width: '100%', height: '100%' }}>

        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./src/pages/img/shouye.png')}>
         <TouchableOpacity onPress={()=>{clearTimeout(this.SetTime),this.setState({isShowLauncher:false})}} style={{borderWidth:0.6,width:60,height:30,marginLeft:'82.5%',marginTop:'10%',backgroundColor:'rgba(255,255,255,0.3)',borderRadius:5}}><Text style={{ fontSize: 20,width:'100%',height:'100%',textAlign:'center',textAlignVertical:'center' ,color:'grey'}}>{"跳过"+this.state.time}</Text></TouchableOpacity>
          
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
