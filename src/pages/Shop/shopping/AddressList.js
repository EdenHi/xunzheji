/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View,Image,Switch,Text,TouchableOpacity, Dimensions,TextInput, FlatList,AsyncStorage,DeviceEventEmitter,StyleSheet, ScrollView,RefreshControl, Touchable } from 'react-native';
const {width,height} = Dimensions.get('window');
import { SwipeRow } from 'react-native-swipe-list-view';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'

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
    render() {
        const {data} = this.state;
        console.log('data',data)
        return (
            <View style={{}}>
                 <LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0bf","#fff","#fff"]} >
                <View style={{flex:1}}>
               
                <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",width:width*0.85,marginLeft:"2%"}}>地址管理</Text>

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
                                    leftOpenValue={55}
                                    rightOpenValue={-55}
                                    disableRightSwipe={true} //禁止向右滑动
                                    >
                                    <TouchableOpacity activeOpacity={1} style={styles.rowBack}
                                    onPress={()=>this.handleShowAlbum(k)}>
                                        <Text allowFontScaling={false} style={{color:'white'}}>删除</Text>
                                    </TouchableOpacity>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',borderRadius:15}}>
                                        <View>
                                            <View style={{flexDirection:'row',height:30 }}><Text style={{fontSize:15,width:width * 0.2,fontWeight:'bold',marginLeft:"5%"}}>{v.name}</Text><Text>{v.phone}</Text></View>
                                            <View style={{flexDirection:'row',height:30 }}><Text style={{marginRight:10,marginLeft:"5%"}}>{v.dizhi}</Text><Text style={{marginRight:10,marginLeft:"5%"}}>{v.xiangxi}</Text></View>
                                            <View style={{flexDirection:'row',height:30,alignItems:'center' }}>
                                                    <Switch
                                                    onTintColor={'#ffaa11'}
                                                    tintColor={'#aaaa11'}
                                                    value={v.dizhi_id === 1 ? true : false}
                                                    onValueChange={()=> {
                                                        this.update_moren(k);
                                                        }}
                                                        testID={'1'}
                                                        thumbTintColor={'#ff1111'}/>
                                                <Text style={{marginLeft:10}}>默认地址</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('updateDizhi',v)}>
                                            <AntDesign
                                            name='form'
                                            size={25}
                                            style={{marginRight:20}}/>
                                        </TouchableOpacity>
                                    </View>
                                    </SwipeRow>
                                    
                            </View>
                        )
                    })
                }
                </ScrollView>
                {/* </LinearGradient> */}
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.props.navigation.navigate('Address');}} underlayColor="red">
                    <View style={{backgroundColor:'#7cc0c0',height:40,borderRadius:20,justifyContent:'center',width:width*0.9,marginLeft:width*0.05}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'#fff'}}>添加新地址</Text>
                        </View>
                </TouchableOpacity>
                </View>
                
                </LinearGradient>
                
   </View>
        );
    }
}
const styles = StyleSheet.create({
      outView: {
      marginBottom:10,
      width:width*0.9,
      marginLeft:width*0.05,
      borderRadius:15
    },
    rowBack: {
      alignItems: 'center',
      backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight:10,
      flex: 1,
      borderRadius:15
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
  