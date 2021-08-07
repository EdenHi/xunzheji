/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text, ScrollView, FlatList,AsyncStorage,Dimensions,ImageBackground,TouchableOpacity,DeviceEventEmitter} from 'react-native';

const {height,width} = Dimensions.get('window');
export default class shhoucang extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            username:'',
        }
    }
    get_shuju(){
        fetch('http://8.142.11.85:3000/index/selectShoucang', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:this.state.username,
                }),
        }).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data:responseJson
            })
            console.log('json',responseJson)
        })
        
    }
    componentDidMount(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
                this.get_shuju();
            }
        });

    }

    renderData({item,index}){
        return (
            <View key={index}>
                <ImageBackground style={{height:150,marginBottom:10,width:width * 0.8,marginRight:20}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    render() {
        const {data} = this.state;
        console.log('aaaa',this.props.route.params);
        return (
            <View style={{width:width * 0.9,marginLeft:width * 0.05}}>
                <ScrollView
                style={{height:height -50}}
                ref={ref => this.scrollRef = ref}
                onScroll={(e) =>{
                  console.log('e22',e.nativeEvent.contentOffset.y);
                  if (e.nativeEvent.contentOffset.y === 0 ){
                    DeviceEventEmitter.emit('scrollview',1);
                  }
                  }}>
                {/* <FlatList
                 keyExtractor={(item, index) => (index + '1')}
                 data = {data}
                 renderItem = {this.renderData.bind(this)}/> */}
                 <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <ImageBackground style={{height:150,marginTop:10}} borderRadius={10} source={require('../../HomeScreen/photos/zs1.jpeg')}>
                    <View style={{height:150,borderRadius: 10,shadowRadius:15,padding:15,width:width * 0.8}}>
                        <View style={{flex:3}} />
                        <View style={{flex:2}}><Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>浙江商帮的崛起</Text></View>
                        <View style={{flex:1}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>宁波商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>龙游商帮</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{borderRadius:5, marginRight:5,backgroundColor:'#ffffff',width:55,alignItems:'center'}}><Text style={{fontSize:12}}>南浔商帮</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                </ScrollView>
            </View>
        );
    }
}