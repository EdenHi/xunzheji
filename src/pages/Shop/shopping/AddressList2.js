/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View,Image,Switch,Text,TouchableOpacity, Dimensions,TextInput, FlatList,AsyncStorage,DeviceEventEmitter,StyleSheet, ScrollView,RefreshControl } from 'react-native';
const {width,height} = Dimensions.get('window');
import { SwipeRow } from 'react-native-swipe-list-view';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'

export default class AddressList2 extends Component {
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
                fetch('http://8.142.11.85:3000/shop/selectdizhi', {
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
        fetch('http://8.142.11.85:3000/shop/delect_dizhi', {
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

    //修改默认地址
    update_moren = (k)=>{
        fetch('http://8.142.11.85:3000/shop/update_moren', {
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
        this.get_list();
    }

    goback(v){
        let dizhi = v ;
        DeviceEventEmitter.emit('test',dizhi);
        this.props.navigation.goBack();

    }
    render() {
        const {data} = this.state;
        console.log('data',data)
        return (
            <View style={{}}>
                <View style={{height:height * 0.85}}>
                {/* <LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0bf","#fff","#fff"]} > */}
                <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#000",width:width*0.85,marginLeft:"2%"}}>地址管理</Text>

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

                                    <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={()=>this.goback(v)}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fff'}}>
                                        <View>
                                            <View style={{flexDirection:'row',height:30 }}><Text style={{fontSize:15,width:width * 0.2,fontWeight:'bold',marginLeft:"5%"}}>{v.name}</Text><Text>{v.phone}</Text></View>
                                            <View style={{flexDirection:'row',height:30 }}><Text style={{marginRight:10,marginLeft:"5%"}}>{v.dizhi}</Text><Text style={{marginRight:10,marginLeft:"5%"}}>{v.xiangxi}</Text></View>

                                        </View>
                                        <View  style={{width:width * 0.03,height:width * 0.03,borderWidth:1}}/>
                                    </View>
                                    </TouchableOpacity>
                                    
                            </View>
                        )
                    })
                }
                </ScrollView>
                {/* </LinearGradient> */}
                </View>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.props.navigation.navigate('Address');}} underlayColor="red"><View style={{backgroundColor:'#fedc61',height:40,borderRadius:20,justifyContent:'center',width:width*0.9,marginLeft:width*0.05}}><Text style={{textAlign:'center',fontSize:18,color:'#fff'}}>添加新地址</Text></View></TouchableOpacity>
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
  