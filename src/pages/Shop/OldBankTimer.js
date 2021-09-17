import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Open from '../Shop/Offline/open'
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Timer from './Timer/Timer'
const { width, height } = Dimensions.get("window")
export default class OldBankTimer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient style={{width:width,height:"100%"}} colors={[global.mainColor,"#fff","#fff"]} >
        <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
                <TouchableOpacity activeOpacity={1} style={{width:width*0.06, }}>
                <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                </TouchableOpacity>
                <Text style={{fontSize:18,fontWeight:"bold",color:"#fff",width:width*0.85}}>线下老字号</Text>

              </View> 
      
          <Open></Open>
    {/* <Timer></Timer> */}
    
        </LinearGradient>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  letter_up_1: {
    width: '80%',
    backgroundColor: '#fff',
    top: 10,
    left: 25
  },
  word: {
    fontSize: 14,
    color: '#000',
    letterSpacing: 1,
    top: 4,
    left: 4
  }
});