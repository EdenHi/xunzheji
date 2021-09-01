/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {View,Text, ScrollView, FlatList,AsyncStorage,Dimensions,ImageBackground,TouchableOpacity,DeviceEventEmitter} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
        fetch('http://47.100.78.254:3000/index/selectShoucang', {
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
    this.listener = DeviceEventEmitter.addListener('wenzhang',this.get.bind(this))
  }

  componentWillUnmount(){
    this.listener.remove();
    }

    go_wenzhang(item){
        if(item===1){
            this.props.navigation.navigate('Zs',{wenzhang_id:1})
        }
        if(item===2){
            this.props.navigation.navigate('Topic1',{wenzhang_id:2})
        }
        if(item===3){
            this.props.navigation.navigate('Topic2',{wenzhang_id:3})
        }
        if(item===4){
            this.props.navigation.navigate('Topic3',{wenzhang_id:4})
        }
        if(item===5){
            this.props.navigation.navigate('Topic2',{wenzhang_id:5})
        }
    }

    renderData({item,index}){
        return (
            <View key={index}>
                <ImageBackground style={{ height: 150, marginTop: 10, width: width * 0.9 }} borderRadius={10} source={{ uri: item.img }}>
                    <TouchableOpacity onPress={() => this.go_wenzhang(item.id)} activeOpacity={1} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                        <View style={{ flex: 3 }} />
                        <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>{item.title}</Text></View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>{item.tag1}</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>{item.tag2}</Text></View></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 40, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>{item.tag3}</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
    render() {
        const {data} = this.state;
        return (
            <View style={{width:width * 1}}>
                 <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,backgroundColor:"#7cc0c0"}}>
                    <TouchableOpacity activeOpacity={1} style={{width:width*0.06,marginLeft:width*0.05 }}>
                    <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center',marginLeft:width*0.05, height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff"}}>我的收藏</Text>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff",opacity:0 }} name="sound" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:width*0.05,height:height*0.93}}>

                
                
                <FlatList
                 keyExtractor={(item, index) => (index + '1')}
                 data = {data}
                 renderItem = {this.renderData.bind(this)}/>

                <View style={{marginBottom:10}}/>

                </View>
            </View>
        );
    }
}