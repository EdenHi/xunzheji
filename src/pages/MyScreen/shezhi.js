/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text, TouchableOpacity,Dimensions,AsyncStorage } from 'react-native';
import {ListItem} from 'react-native-elements';
const {height,width} = Dimensions.get('window');
export default class shezhi extends Component {
    constructor(props){
        super(props);
    }
    go_back(){
        AsyncStorage.removeItem('username');
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View>
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
                <View style={{marginTop:20}}>
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
                <View style={{marginTop:20}}>
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
                <View style={{marginTop:20}}>
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
                <TouchableOpacity style={{marginTop:20,width:width * 0.8,backgroundColor:'white',height:width * 0.15,alignItems:'center',justifyContent:'center',marginLeft:width * 0.1,borderRadius:30}}
                onPress={()=>this.go_back()}>
                    <Text style={{fontSize:17}}>退出登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
