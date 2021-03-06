import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Dimensions, Image,TextInput,Animated, Modal,
    Easing,DeviceEventEmitter } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import LottieView from 'lottie-react-native';
import {NavigationContext} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native'
import { AsyncStorage } from 'react-native'

const { width, height } = Dimensions.get("window")

export default class Dingdan extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,
            data:[],
            username:'',
            vv:'',
            kk:'',
        }
    }
        
        componentDidMount() {
            Animated.timing(this.state.progress, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
            }).start();
            
           this.get_dingdan()
           this.listener = DeviceEventEmitter.addListener('pingjia',this.get_dingdan.bind(this))
        }
  
      componentWillUnmount(){
        this.listener.remove();
      }
    
    
        _closeModalWin = () => {
            this.setState({ modalVisible: false });
        }

        get_dingdan(){
            AsyncStorage.getItem('username',(err,result)=>{
                if(!err){
                    this.setState({
                        username:result
                    })
                    fetch('http://47.100.78.254:3000/shop/select_dingdan', {
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
                }
            })
        }

        update_dingdan(){
            fetch('http://47.100.78.254:3000/shop/update_dingdan', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id:this.state.vv,
                    }),
                    })
            this.get_dingdan()
        }

        renderDate({item,index}){
            return(
                <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }} key={index}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: item.dianpu_img }} resizeMode='stretch' />
                        <Text style={{ fontWeight: "bold", fontSize: 15 ,color:"#333333"}}>
                            {item.dianpu==='undefined'?'????????????':item.dianpu}
                        </Text>
                        <Text style={{ marginLeft: "52%", color: global.mainColor }}>
                            {item.fahuo}
                        </Text>
                    </View>
                    < View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View>
                            <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.img }} />
                        </View>
                        <View>
                            <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
                                <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" ,color:"#333333",width:width*0.4}} numberOfLines={1}>{item.shop_name}</Text></View>
                                <View style={{ marginRight:width*0.1 }}><Text style={{color:"#7CC0C0"}}>?? {item.price}</Text></View>
                            </View>
                            <View style={{ flexDirection: "row" }}>

                                <View style={{ marginLeft: "66%" }}><Text style={{ color: "#666" }}>x{item.num}</Text></View>
                            </View>
                        </View>
                    </View>
                   {item.fahuo ==='?????????' ?<View style={{ flexDirection: "row", flexDirection:"row-reverse" }}>
                        {/* <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>????????????</Text></View> */}
                        <TouchableOpacity  onPress={()=>this.setState({vv:item.id,modalVisible: true,kk:item})} style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: global.mainColor }}><Text style={{ fontSize: 14, color: global.mainColor }}>????????????</Text></TouchableOpacity>
                        <TouchableOpacity  style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14,color:"#333333" }}>????????????</Text></TouchableOpacity>
                    </View>
                    :
                    item.pingjia ==='?????????'?
                    <View style={{ flexDirection: "row", flexDirection:"row-reverse" }}>
                        <TouchableOpacity onPress={()=>this.context.navigate('discuss',item)}  style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20,marginRight:20 }}><Text style={{ fontSize: 14,color:"#333333" }}>?????????</Text></TouchableOpacity>
                    </View>
                    :
                    <View style={{ flexDirection: "row", flexDirection:"row-reverse" }}>
                        <TouchableOpacity activeOpacity={1} style={{ justifyContent: "center", alignItems: "center", width: 80, height: height*0.04, borderWidth: 1, borderRadius: 20,marginRight:20 }}><Text style={{ fontSize: 14,color:"#333333" }}>?????????</Text></TouchableOpacity>
                    </View>}
                </View>
            )
        }
    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient colors={["#7CC0C0","#fff","#fff"]} style={{flex:1}}>
                
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05 }}>
                        <TouchableOpacity activeOpacity={1} style={{width:width*0.06}}>
                        <FontAwesome onPress={() => { this.props.navigation.goBack()}} name={'angle-left'} size={25} color={'#fff'} />
                            {/* <AntDesign   onPress={() => {
                                                   this.props.navigation.goBack()
                                                }} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                        </TouchableOpacity>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>????????????</Text>
                    </View>
                        <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => (index + '1')}
                        renderItem={this.renderDate.bind(this)}/>
                       <Modal
                            animationType='fade' // ????????? modal ???????????????????????????slide ?????????????????????|fade ????????????|none ????????????
                            transparent={true} // ?????????????????????????????????????????????true???????????????????????????
                            visible={this.state.modalVisible} // ???????????? modal ??????
                            onRequestClose={() => { this._closeModalWin(); }} // ???????????????????????? Android ?????????????????????????????? Apple TV ?????????????????????????????????????????????????????? Android ?????????????????????????????? modal ???????????????????????????BackHandler??????
                            onShow={() => { console.log('modal???????????????'); }} // ?????????????????? modal ???????????????
                        >
                            <TouchableOpacity

                                style={{ height: '100%', width: '100%', position: "absolute", top: 0, left: 0 }}
                            // onPress={this._closeModalWin}
                            >
                                <View style={styles.modalLayer}>

                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {

                                        }}
                                    >
                                        <View style={styles.modalContainer}>
                                            <View style={{
                                                width: 150,
                                                height: '45%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <LottieView source={require('../../../animal/success.json')}  autoPlay loop  progress={this.state.progress} />
                                            </View>
                                            <View style={{
                                                width: '100%',
                                                height: '25%',
                                                alignItems: 'center',

                                            }}>
                                                <Text style={{ fontSize: 20, color: global.mainColor }}>????????????</Text>
                                            </View>
                                            <View style={{width:"60%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                            <TouchableOpacity style={{}}
                                                onPress={() => {
                                                    this._closeModalWin()
                                                    this.update_dingdan();
                                                }}

                                            >
                                                <Text style={{ fontSize: 15 ,color:"#333333"}}>??????</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{}}
                                                onPress={() => {
                                                    this._closeModalWin()
                                                    this.update_dingdan();
                                                    this.context.navigate('discuss',this.state.kk)
                                                }}

                                            >
                                                <Text style={{ fontSize: 15,color:global.mainColor }}>?????????</Text>
                                            </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </Modal>


                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    modalLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContainer: {
        width: 250,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: 15
    },
});

