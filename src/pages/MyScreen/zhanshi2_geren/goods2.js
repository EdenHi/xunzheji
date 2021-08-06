/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  Image,
  ImageBackground,
  Dimensions,
  DeviceEventEmitter,
  AsyncStorage
} from 'react-native';
const { width, height } = Dimensions.get('window');

import Waterfall from 'react-native-waterfall'
import {NavigationContext} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FC00',
  },
  waterfall: {
    flex: 1,
    backgroundColor: '#fff',
  }
});



export default class goods2 extends Component {
  static contextType = NavigationContext;
  constructor(props){
    super(props)
    this.state = {
      data:[],
      isRefreshing: false,
      isLoadingMore: false,
      username:'',
    }
  }


  select_shuju(){
    fetch('http://192.168.50.117:3000/shop/select_PersonExchange',{
      method:'POST',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        username:this.state.username
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('responseJson',responseJson);
      this.setState({
        data:responseJson
      })
    })
  }
  componentDidMount() {
      AsyncStorage.getItem('username',(err,result)=>{
        if(!err){
          this.setState({
            username:result,
          },() => {
            console.log(this.state.username); 
          })
          this.select_shuju();
        }
      })

    this.listener = DeviceEventEmitter.addListener('test',this.select_shuju.bind(this))
   // this.loadMore()
   
  }

  componentWillUnmount(){
    this.listener.remove();
    }

  height2 = 200 + Math.floor(Math.random() * 100)
  renderItem = (itemData, itemIdx, itemContainer) => {
    return (
      <View style={{ width: itemContainer.width,  borderRadius: 10, elevation: 5,marginTop:10,backgroundColor:'white'}}>
      <TouchableOpacity activeOpacity={1}  onPress={() => {console.log('aaa',itemData);}}>
        <Image  style={{width: '100%', height:itemData.height, flexDirection: 'column-reverse' }} source={{ uri: itemData.img}}/>
          <View style={{ margin:10,borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={{  textAlign: 'left', fontWeight: 'bold',paddingLeft:5,paddingTop:5,fontSize:15}}ellipsizeMode="tail" numberOfLines={1}>{itemData.connent}</Text>
            <View style={{flexDirection:'row',marginTop:6,alignItems:'center'}}>
              <Image source={{uri:itemData.portrait}} style={{height:30,width:30,borderRadius:50}}/>
              <Text style={{fontSize:15,paddingLeft:5,paddingBottom:5}}>{itemData.nickname}</Text>
            </View>
          </View>
      </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Waterfall
          style={styles.waterfall}
          data={this.state.data}
          gap={15}
          numberOfColumns={2}
          expansionOfScope={0}
          onEndReachedThreshold={1000}
         // onEndReached={this.loadMore}
          renderItem={this.renderItem}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={this.state.isRefreshing}
          //     onRefresh={this.refresh}
          //   />
          // } 
          />
      </View>
    );
  }
}

