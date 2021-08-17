import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';

export default class Forum extends Component{
    render(){
        return(
            <View>
                <Text onPress={()=>{this.props.navigation.navigate('articel')}}>这是论坛</Text>
                <Text></Text>
                <Text onPress={()=>{this.props.navigation.navigate('Chats')}}>       聊天</Text>
                <Text></Text>
                <Text onPress={()=>{this.props.navigation.navigate('luntan')}}>       聊天</Text>
                <Text></Text>
                <Text onPress={()=>{this.props.navigation.navigate('Page1')}}>       Page1</Text>
                <Text></Text>            
                </View>
        )
    }
}