import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import { View } from 'react-native-animatable';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
const {width, height} = Dimensions.get('window');

class Draggable extends Component{
  constructor(props){
      super(props);
      this.state = {
          pan: new Animated.ValueXY(),
          scale: new Animated.Value(1),
          rotate: new Animated.Value(0)
      };
  }
  componentWillMount() {
      this._panResponder = PanResponder.create({
          onMoveShouldSetResponderCapture: () => true,
          onMoveShouldSetPanResponderCapture: () => true,
          // 设置初始位置
          onPanResponderGrant: (e, gestureState) => {
              this.state.pan.setOffset({
                  x: this.state.pan.x._value,
                  y: this.state.pan.y._value
              });
              this.state.pan.setValue({x: 0, y: 0});
              Animated.spring(this.state.scale, {
                  toValue: 1.3,
                  friction: 3 }
              ).start();
              Animated.timing(this.state.rotate, {
                  toValue: 25,
                  duration: 300
              }).start();
          },
          // 使用拖拽的偏移量来定位
          onPanResponderMove: Animated.event([
              null, {dx: this.state.pan.x, dy: this.state.pan.y},
          ]),
          onPanResponderRelease: (e, {vx, vy}) => {
              this.state.pan.flattenOffset();
              // Animated.spring(
              //     this.state.pan,
              //     {toValue: {x: 0, y: 0}}
              // ).start();
              Animated.spring(
                  this.state.scale,
                  { toValue: 1, friction: 3 }
              ).start();
              Animated.timing(this.state.rotate, {
                  toValue: 0,
                  duration: 300
              }).start();
          }
      });
  }
  render(){
      // 从state中取出pan
      
      const { pan, scale } = this.state;
      // 从pan里计算出偏移量
      const [translateX, translateY] = [pan.x, pan.y];
      // 计算旋转
      const rotate = this.state.rotate.interpolate({
          inputRange: [0, 100],
          outputRange: ['0deg', '00deg']
      });
      // 设置transform为偏移量
      const imageStyle = {transform: [{translateX}, {translateY},  {scale}, {rotate}]};
      return (
        <View style={{width:width,height:height,alignItems:"center"}}>
          <View style={{ flexDirection: "row",backgroundColor:"#fff",width:width, alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
                <TouchableOpacity
                 activeOpacity={1} style={{}}>
                    <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#333333" }} name="left" size={20} color="#000000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333", width: width * 0.85, marginLeft: "2%" }}>定制</Text>
            </View>
            <View style={{width:width,height:height*0.65,backgroundColor:"#fff"}}>

          <Animated.View style={[styles.container,imageStyle]} {...this._panResponder.panHandlers}>
              <Image style={{width:50,height:50}} source={require('../img/T.jpg')}/>
          </Animated.View>
          </View>
          <View style={{width:width,height:height*0.35,backgroundColor:"#fff",borderTopRightRadius:20,elevation:20,position:"absolute",bottom:0,borderTopLeftRadius:20}}>
          <LinearGradient style={{ width: width, height: "100%" ,alignItems:"center",borderTopRightRadius:20,borderTopLeftRadius:20,elevation:20,}} colors={["#7cc0bf", "#fff"]} >
            <View style={{width:"100%",height:"50%",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
            <TouchableOpacity style={{width:width*0.25,height:width*0.25}}><Image style={{width:"100%",height:"100%"}} source={require("../img/T.jpg")}></Image></TouchableOpacity>
            <TouchableOpacity style={{width:width*0.25,height:width*0.25}}><Image style={{width:"100%",height:"100%"}} source={require("../img/T.jpg")}></Image></TouchableOpacity>
            <TouchableOpacity style={{width:width*0.25,height:width*0.25}}><Image style={{width:"100%",height:"100%"}} source={require("../img/T.jpg")}></Image></TouchableOpacity>
            </View>
            <View style={{width:"100%",height:"50%",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
            <TouchableOpacity style={{width:width*0.25,height:width*0.25}}><Image style={{width:"100%",height:"100%"}} source={require("../img/T.jpg")}></Image></TouchableOpacity>
            <TouchableOpacity style={{width:width*0.25,height:width*0.25}}><Image style={{width:"100%",height:"100%"}} source={require("../img/T.jpg")}></Image></TouchableOpacity>
            <TouchableOpacity style={{width:width*0.25,height:width*0.25}}><Image style={{width:"100%",height:"100%"}} source={require("../img/T.jpg")}></Image></TouchableOpacity>
            </View>
            </LinearGradient>
          </View>
        </View>
      )
  }
}
export default Draggable;
const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      left: 100,
      top: 200,
  }
});