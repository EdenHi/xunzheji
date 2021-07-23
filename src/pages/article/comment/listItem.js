import React, { Component } from "react";

import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity,} from "react-native";
import {Dimensions} from 'react-native';



const styles = StyleSheet.create({
    listItem: {
    
      backgroundColor: "#fff",
      borderBottomColor: "#f5f5f5",
      borderBottomWidth: 5,
      padding: 5,
      height: 200
    },
    cover: { width:50, height: 50,borderRadius:50},
    cover1: { width:80, height: 80,borderRadius:10,position:'absolute',top:10,right:10},

    info: {
      flex: 1,
      alignItems:'flex-start',
      flexDirection: "column",
      alignSelf: 'flex-start',
      padding: 5,
    },
    username: { fontSize: 18,  fontWeight: "bold",marginLeft:0},
    releasetime: { fontSize: 10, color:'gray' },
    cotent:{
    justifyContent:'center',alignItems:'center',backgroundColor:'#f5f5f5',width:350,height:100,marginLeft:18,
    },cotenttitle:{
      width:200,height:60,position:'absolute',left:20,top:5
    }
  });
  
  class ListItem extends Component {
    state={
      isSub:"true",
    }
    subClick=()=>{
      this.setState({isSub:!this.state.isSub})
    }
    render() {
      return (
        <View style={styles.listItem }>
          <View style={{flexDirection:'row'}}>
             <TouchableOpacity activeOpacity={1}>
                <Image style={styles.cover} source={{uri:this.props.coverURL}} />
             </TouchableOpacity>
          <View style={styles.info}>
              <TouchableOpacity activeOpacity={1}>
                 <Text style={styles.username} numberOfLines={1}>{this.props.username}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
            <Text>发表:11</Text><Text style={{marginLeft:30}}>粉丝数:111</Text>
            </View>
            </View>
          <View style={{
                    backgroundColor:this.state.isSub?'red':'#fff',
                    height:30,
                    width:80,
                    opacity:0.6,
                    borderRadius:20,
                   alignItems:'center',
                   marginRight:20,
                   marginTop:10,
                   borderColor:'',
                   borderwidth:2
        }}> 
       
            <TouchableOpacity>
                <Text  onPress={this.subClick}
                style={{fontWeight:'bold',
                color:'#000',
                lineHeight:27,
                fontSize:15
                }}> 
                  {this.state.isSub?'关注':'已关注'}
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.cotent}>
        <TouchableOpacity style={{left:70,bottom:50,flexDirection:'row-reverse'}}>
          <Image style={styles.cover1} source={{uri:this.props.coverURL}}/>
      
          <View style={styles.cotenttitle}>
          <Text style={{fontSize:22,overflow:'hidden',}} numberOfLines={2}>{this.props.subs}</Text>
          <View style={{flexDirection:'row',position:'absolute',top:70}}>
          <Text>点赞数:11</Text>
          <Text style={{marginLeft:20}}>评论数:22</Text>
          </View>
          </View>

          </TouchableOpacity>
        </View>
        </View>
       
      );
    }
  }
  
 export default  ListItem