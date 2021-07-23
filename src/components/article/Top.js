/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text ,StyleSheet,Image,Dimensions, TouchableOpacity} from 'react-native';



export default class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isPressed: false
        }
        this.isPresse=this.isPresse.bind(this)
        this.btn=this.isPresse.bind(this)
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
        <View style={styles.Box}>
          <Text style={styles.txt}
                ellipsizeMode="tail"
                numberOfLines={3}>{this.props.title}</Text>
          <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image style={{ width: 45, height: 45 }} source={{ uri: this.props.writerheadimg }}></Image>
              </TouchableOpacity>

              <View style={styles.mz}>
                <Text style={{ fontSize: 12 }}>{this.props.writername}</Text>
                <Text style={styles.txt2}>{this.props.createtime}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={this.isPresse} style={this.state.isPressed ? styles.btn2 : styles.btn}>
              <Text style={{ color: "#fff" }}>{this.state.isPressed ? "取消关注" : "+关注"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    Box:{
        margin: 10,
    },
    txt:{
        fontWeight:'bold',
        fontSize:18,
    },
    container:{
        flexDirection:'row',
        marginTop: 15,
        justifyContent:'space-between',
    },
    touxiang:{
        height:40 ,
        width : 40 ,
        borderRadius:50,
    },
    mz:{
        paddingLeft:10,
    },
    txt2:{
        fontSize:12,
        marginTop:3,
        color:'#ccc',
    },
    btn:{
        backgroundColor:'#EE3B3B',
        height: 25 ,
        width : 70 ,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
    },
     btn2:{
        backgroundColor:'#EEE9E9',
        height: 25 ,
        width : 70 ,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
    },
});

