import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Observer from './observer';
import Comment2 from './comment2'

export default class Comment extends Component {
  render() {
    return (
      <TouchableOpacity style={{ borderWidth: 0, marginTop: 20, borderColor: "#E7EBEE", borderBottomWidth: 1 }}>
        <View style={{ borderBottomWidth: 0, marginBottom: 10 }}>
          <Observer username={this.props.username}
                    headimg={this.props.headimg}
                    datetime={this.props.datetime}
                    comment={this.props.comment}
          ></Observer>

          <Comment2 navigation={this.props.navigation}
                    comment1={this.props.comment1}
                    comment2={this.props.comment2}
                    username1={this.props.username1}
                    username2={this.props.username2}
                    commentnum={this.props.commentnum}
          ></Comment2>
        </View>
      </TouchableOpacity>
    );



  }
}
