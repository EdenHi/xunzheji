/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {View,Text, ScrollView, FlatList,AsyncStorage,Dimensions,ImageBackground,TouchableOpacity,DeviceEventEmitter} from 'react-native';

const {height,width} = Dimensions.get('window');
export default class Shhoucang2 extends Component {
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

    get(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
                this.get_shuju();
            }
        });
    }
     //退出登录
  delect(){
    this.setState({
      data:[],
    })
  }


  componentDidMount() {
    this.get();
    this.listener = DeviceEventEmitter.addListener('test',this.get.bind(this))
    this.listener = DeviceEventEmitter.addListener('test2',this.delect.bind(this))
  }

  componentWillUnmount(){
    this.listener.remove();
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
        return (
            <View style={{width:width * 1}}>
                 <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,justifyContent: "space-between" ,backgroundColor:"#7cc0c0"}}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", }}>我的收藏</Text>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff",opacity:0 }} name="sound" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:width*0.05}}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height}}
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
            </View>
        );
    }
}