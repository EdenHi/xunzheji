import React, { Component } from 'react';
import { StyleSheet, Text, Image ,ScrollView, TouchableOpacity, View} from 'react-native';

export default class Comment2 extends Component{
  render() {
    return (
      <TouchableOpacity
        style={{ width: "90%", height: 220, backgroundColor: "#F6F6F6", marginLeft: 60, marginTop: 15 }}>
        <TouchableOpacity style={{ width: "50%", marginTop: 10 }}>
          <Text
            style={{ borderWidth: 0, marginLeft: 10, fontSize: 16, fontWeight: "bold" }}>{this.props.username1}</Text>
        </TouchableOpacity>
        <Text style={{ borderWidth: 0, marginTop: 10, marginLeft: 10, fontSize: 15, width: "90%" }}
              numberOfLines={2}>{this.props.comment1}</Text>
        <TouchableOpacity style={{ width: "50%", marginTop: 10 }}>
          <Text
            style={{ borderWidth: 0, marginLeft: 10, fontSize: 16, fontWeight: "bold" }}>{this.props.username2}</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 15, borderWidth: 0, width: "90%" }}
              numberOfLines={2}>{this.props.comment2}</Text>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("comment");
        }} style={{ width: "50%", marginTop: 10 }}>
          <Text style={{
            marginTop: 5,
            marginLeft: 10,
            fontSize: 15,
            color: "grey",
            fontWeight: "bold",
          }}>查看全部{this.props.commentnum}条评论</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}
const styles=StyleSheet.create({

    nickname:{
      fontSize:15,
      marginTop:-50,
      marginLeft:60,
      marginBottom:20,

      width:"50%"
    }
  })
