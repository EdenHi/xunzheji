import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Observer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    }
    this.isPresse=this.isPresse.bind(this)
  }
  isPresse() {
    if (this.state.isPressed == false)
      this.setState({isPressed:true},()=>{})
    else {
      this.setState({isPressed:false},()=>{})
    }

  }
  render() {
    return (
      <View>

        <TouchableOpacity style={{ borderWidth: 0, width: "60%", height: 50, marginTop: 10 }}>
          <Image style={{ width: 45, height: 45 }} source={{ uri: this.props.headimg }}></Image>
          <Text style={styles.nickname}>{this.props.username}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row-reverse", borderWidth: 0, marginTop: -50 }}>
          <Text style={{
            textAlign: "center",
            borderWidth: 0,
            marginRight: 0,
            fontSize: 13,
            fontWeight: "200",
            width: "10%",
            color: "grey",
            marginBottom: 10,
          }}>2031</Text>
          <AntDesign onPress={this.isPresse} style={{ width: "5.5%" }}
                     name={this.state.isPressed ? "heart" : "hearto"}
                     size={20}
                     color={this.state.isPressed ? "#FF0000" : "#000"} />

        </View>
        <Text style={{
          color: "grey",
          marginLeft: 60,
          marginTop: 6,
          borderWidth: 0,
          width: "40%",
        }}>{this.props.datetime}</Text>
        <Text style={{
          borderColor: "grey",
          marginTop: 15,
          marginLeft: 60,
          fontSize: 15,
        }}>{this.props.comment}</Text>

      </View>

    );
  }
}
const styles = StyleSheet.create({

  nickname: {
    fontSize: 15,
    marginTop: -45,
    marginLeft: 60,

borderWidth:0,
    width: "50%"
  }
})
