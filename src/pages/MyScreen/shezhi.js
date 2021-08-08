/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text, TouchableOpacity,Dimensions,AsyncStorage, ScrollView,DeviceEventEmitter } from 'react-native';
import {ListItem} from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
const {height,width} = Dimensions.get('window');
export default class shezhi extends Component {
    constructor(props){
        super(props);
        this.state={
        data:this.props.route.params,
        username:this.props.route.params.username,
    }}

    componentDidMount(){
        console.log(this.props.route.params);
    }
    go_back(){
        AsyncStorage.removeItem('username');
        this.props.navigation.goBack();
        this.props.route.params.callback('')
        // this.props.route.params.shuaxing()
    }
    render() {
        return (
            <View style={{flex:1}}>
                 <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center",marginBottom:"5%",backgroundColor:"#fff"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={15} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#000",width:width*0.85,marginLeft:"2%"}}>设置</Text>

            </View> 
                <ScrollView
                showsVerticalScrollIndicator={false}>
               <ListItem
               bottomDivider>
                   <ListItem.Content>
                       <ListItem.Title>账号与安全</ListItem.Title>
                   </ListItem.Content>
                    <ListItem.Chevron
                    size={30}/>
               </ListItem>
               <ListItem
               bottomDivider>
                   <ListItem.Content>
                       <ListItem.Title>隐私设置</ListItem.Title>
                   </ListItem.Content>
                    <ListItem.Chevron
                    size={30} />
               </ListItem>
                <View style={{marginTop:15}}>
                    <ListItem
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>通知设置</ListItem.Title>
                        </ListItem.Content>
                            <ListItem.Chevron
                            size={30} />
                    </ListItem>
                    <ListItem
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>通知设置</ListItem.Title>
                        </ListItem.Content>
                            <ListItem.Chevron
                            size={30} />
                    </ListItem>
                    <ListItem
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>功能申请</ListItem.Title>
                        </ListItem.Content>
                            <ListItem.Chevron
                            size={30} />
                    </ListItem>
                </View>
                <View style={{marginTop:15}}>
                    <ListItem
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>青少年模式</ListItem.Title>
                        </ListItem.Content>
                            <ListItem.Chevron
                            size={30} />
                    </ListItem>
                    <ListItem
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>深色模式</ListItem.Title>
                        </ListItem.Content>
                            <ListItem.Chevron
                            size={30} />
                    </ListItem>
                </View>
                <View style={{marginTop:15}}>
                    <ListItem
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>帮助与客服</ListItem.Title>
                        </ListItem.Content>
                            <ListItem.Chevron
                            size={30} />
                    </ListItem>
                    <ListItem
                        bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>鼓励一下</ListItem.Title>
                        </ListItem.Content>
                            <ListItem.Chevron
                            size={30} />
                    </ListItem>
                </View>
                <TouchableOpacity activeOpacity={1} style={{marginTop:15,width:width * 0.9,backgroundColor:'#7cc0c0',height:width * 0.1,alignItems:'center',justifyContent:'center',marginLeft:width * 0.05,borderRadius:30,marginBottom:15}}
                onPress={()=>{this.go_back(),DeviceEventEmitter.emit('test2',1)}}>
                    <Text style={{fontSize:17,color:"#fff"}}>退出登录</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
