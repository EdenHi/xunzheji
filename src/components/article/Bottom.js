/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, StyleSheet, TextInput, Image, TouchableOpacity, Modal, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
export default class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            heartIsPressed: false,
            starIsPressed:false,
        };
        this.starIsPresse = this.starIsPresse.bind(this)
        this.heartIsPresse = this.heartIsPresse.bind(this)
    }
    _setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible,
        });
    }
    starIsPresse() {
        if (this.state.starIsPressed == false)
            this.setState({ starIsPressed: true }, () => { })
        else {
            this.setState({ starIsPressed: false }, () => { })
        }

    }
    heartIsPresse() {
        if (this.state.heartIsPressed == false)
            this.setState({ heartIsPressed: true }, () => { })
        else {
            this.setState({ heartIsPressed: false }, () => { })
        }

    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       isPressed: false
    //     }
    //     this.isPresse=this.isPresse.bind(this)
    //   }
    //   isPresse() {
    //     if (this.state.isPressed == false)
    //       this.setState({isPressed:true},()=>{})
    //     else {
    //       this.setState({isPressed:false},()=>{})
    //     }

    //   }/



    render() {
        return (
            <View style={styles.container}>

                    <TextInput
                        placeholder="我要评论"
                        style={styles.txt}
                        multiline = {true}
                    />


                <AntDesign onPress={this.heartIsPresse} style={{height:30,marginTop:10}}
                        name={this.state.heartIsPressed?'heart':'hearto'}
                        size={30}
                        color={this.state.heartIsPressed?'#FF0000':'#000'} />


                    <AntDesign onPress={this.starIsPresse} style={{height:30,marginTop:10}}
                        name={this.state.starIsPressed?'star':'staro'}
                        size={30}
                        color={this.state.starIsPressed?'#FFA500':'#000'}/>


                    <Entypo onPress={this.isPresse}  style={{height:30,marginTop:10}}
                        name={'forward'}
                        size={30}
                        color="#000" />


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 60,
        justifyContent:"space-between"
    },
    txt: {
        backgroundColor: '#ccc',
        marginLeft: 0 ,
        width: "55%",
        height: 40 ,
        borderRadius: 35,
        marginRight:0,
        marginTop: 10 ,
        marginBottom: 10 ,

    },
    icon: {
       borderWidth:0,
       marginLeft:90
    },



});
