/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View,Image,Text,TouchableOpacity, Dimensions,TextInput, FlatList,AsyncStorage,DeviceEventEmitter,StyleSheet, ScrollView,RefreshControl } from 'react-native';
const {width,height} = Dimensions.get('window');
import { SwipeRow } from 'react-native-swipe-list-view';

export default class AddressList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            username:'',
            isLoding:false,
            
        };
    }

    //获取地址的方法
    get_list(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
                console.log('username',result);
                fetch('http://192.168.50.117:3000/shop/selectdizhi', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username:result,
                    }),
                    }) .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({
                            data:responseJson,
                        });
                    })
            } else {
                console.log('获取数据失败',error);
            }
        });
    }
    //刷新页面
    loding(){
        this.setState({
            isLoding : true,
        });

        setTimeout(() => {
            this.setState({
                isLoding : false,
            });
            this.get_list();
        }, 500);
    }
    componentDidMount(){
        this.get_list();
        this.listener = DeviceEventEmitter.addListener('test',this.loding.bind(this))
    }
    componentWillUnmount(){
        this.listener.remove();
        }

    //删除收货地址
    handleShowAlbum = (k)=>{
        fetch('http://192.168.50.117:3000/shop/delect_dizhi', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:this.state.data[k].id
                }),
            }).then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson)
            })
        this.loding();
        }

    render() {
        const {data} = this.state;
        console.log('data',data)
        return (
            <View style={{padding:10}}>
                <View style={{height:height * 0.85}}>
                <View style={{flexDirection:'row',alignItems:'center',marginBottom:10,marginTop:10,borderBottomWidth:0.5,borderBottomColor:'#808080',justifyContent:'space-between',height:50}}>
                    <View  style={{width:width * 0.03,height:width * 0.03,borderWidth:1}}/>
                    <Text style={{width:width * 0.8,textAlign:'center',fontSize:18,fontWeight:'bold'}}>
                        地址列表
                    </Text>
                    <View style={{width:width * 0.03,height:height * 0.03}} />
                </View>

                <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing = {this.state.isLoding} //设置是否在刷新
                        onRefresh = {this.loding.bind(this)} //下拉刷新结束}
                    />
                }>
                {
                    data.map((v,k)=>{
                        return (
                            <View style={styles.outView} key = {k} >
                                    <SwipeRow
                                    leftOpenValue={75}
                                    rightOpenValue={-75}
                                    disableRightSwipe={true} //禁止向右滑动
                                    >
                                    <TouchableOpacity style={styles.rowBack}
                                    onPress={()=>this.handleShowAlbum(k)}>
                                        <Text allowFontScaling={false} style={{color:'white'}}>删除</Text>
                                    </TouchableOpacity>
                                    <View style={{flexDirection:'row',height:60,justifyContent:'space-between',alignItems:'center',backgroundColor:'#ccc'}}>
                                        <View>
                                        <View style={{flexDirection:'row',height:30 }}><Text style={{fontSize:16,width:width * 0.2,fontWeight:'bold'}}>{v.name}</Text><Text>{v.phone}</Text></View>
                                        <View style={{flexDirection:'row',height:30 }}><Text style={{marginRight:10}}>{v.dizhi}</Text><Text style={{marginRight:10}}>{v.xiangxi}</Text></View>
                                        </View>
                                        <View  style={{width:width * 0.03,height:width * 0.03,borderWidth:1}}/>
                                    </View>

                                    </SwipeRow>
                                </View>
                        )
                    })
                }
                </ScrollView>
                </View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Address');}} underlayColor="red"><View style={{backgroundColor:'#ff0000',height:40,borderRadius:20,justifyContent:'center'}}><Text style={{textAlign:'center',fontSize:18,color:'#fff'}}>添加新地址</Text></View></TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    outView: {
      marginBottom:10,
    },
    rowBack: {
      alignItems: 'center',
      backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight:10,
      flex: 1,
    },
    rowFront: {
      alignItems: 'center',
      backgroundColor: '#CCC',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      justifyContent: 'center',
      height: 50,
    },
    leftView: {
      width: 75,
      alignItems: 'center',
      backgroundColor: 'green',
      height: 50,
      justifyContent: 'center',
    },
  });
  