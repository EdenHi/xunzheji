import React, { Component } from "react";
import { Dimensions, FlatList, TextInput, ToastAndroid } from "react-native";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Image,Modal } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get("window")
import { PasswordInput } from 'react-native-pay-password';
const Password=666666;
export default class Wallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            money: 0,
            moneyData: [],
            f: 0,
            addMoney:0,
            modalVisible: false,
        }
        this.fetchData()
    }
    fetchData(){
        fetch('http://47.100.78.254:3000/users/selectmoney', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "Eden"
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson[0].usermoney);
                this.setState({
                    money: responseJson[0].usermoney
                });
            });
        fetch('http://47.100.78.254:3000/users/consumehistory', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "Eden"
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                
                let Arr = this.state.moneyData;
                Arr.splice(0,Arr.length)
                for (let i = 0; i < responseJson.length; i++) {
                    Arr.unshift(responseJson[i])
                }
                console.log(this.state.moneyData);
            });
    }
    _renderItem = ({ item }) => (
        <View style={{ width: width * 0.97, alignSelf: 'center', height: height * 0.1, backgroundColor: '#fff', flexDirection: 'row', marginVertical: height * 0.0025 }}>
            <Text style={{ width: '20%', height: '100%', textAlign: 'center', textAlignVertical: 'center' }}>??????</Text>
            <Image style={{ width: '20%', height: '80%' ,tintColor:global.mainColor,alignSelf:'center'}} resizeMode={'contain'}  source={item.consume !== null ?require('../img/xiaofei.png') : require('../img/chongzhi.png')} ></Image>
            <View style={{ width: '60%' }}>
                <Text style={{ height: '50%', fontSize: 20, paddingLeft: width * 0.1, textAlignVertical: 'bottom', color: '#333' }}>{item.consume == null ? "+" + item.invest +"???": item.consume+"???"}</Text>
                <Text style={{ height: '50%', fontSize: 15, paddingLeft: width * 0.1, textAlignVertical: 'top', color: 'grey' }}>{item.consume == null ? "??????" + item.invest +"???": "??????" + item.consume+"???"}</Text>
            </View>
        </View>
    );
    componentWillMount() {

    }
    componentDidMount() {

    }
    _openModalWin = () => {
        this.setState({ modalVisible: true });
    }

    _closeModalWin = () => {
        this.setState({ modalVisible: false });
    }
    chongzhi(){
        fetch('http://47.100.78.254:3000/users/addmoney', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: "Eden",
                addmoney: this.state.addMoney
            }),
        }), this.setState({ money: Number(this.state.addMoney)  + this.state.money }),
        
        console.log('????????????');
        ToastAndroid.showWithGravity('???????????????', 500, ToastAndroid.BOTTOM)
        this.setState({modalVisible:false})
        setTimeout(() => {
            this.fetchData()
        }, 500);
        
    }
    render() {

        return (
            <View style={{
                width: width,
                height: height,
                alignItems: "center"
            }}>

                <LinearGradient style={{ width: width, height: height }} colors={[global.mainColor, global.backColor, global.mainColor]} >
                <Modal
                            animationType='fade' // ????????? modal ???????????????????????????slide ?????????????????????|fade ????????????|none ????????????
                            transparent={true} // ?????????????????????????????????????????????true???????????????????????????
                            visible={this.state.modalVisible} // ???????????? modal ??????
                            onRequestClose={() => { this._closeModalWin(); }} // ???????????????????????? Android ?????????????????????????????? Apple TV ?????????????????????????????????????????????????????? Android ?????????????????????????????? modal ???????????????????????????BackHandler??????
                            onShow={() => { console.log('modal???????????????'); }} // ?????????????????? modal ???????????????
                        >

                            <View style={{backgroundColor:'rgba(0,0,0,0.5)',flex:1}}>
                                <View style={{width:width*0.8,marginLeft:width*0.1,height:height*0.35,backgroundColor:'#fff',marginTop:height*0.3,borderRadius:15,}}>
                                    <View style={{flexDirection:'row',height:'20%',justifyContent:'space-between'}}>
                                        <AntDesign onPress={()=>{this._closeModalWin()}} style={{paddingLeft:width*0.05,paddingTop:width*0.05}} name="close" size={20} />
                                        <Text style={{height:'100%',textAlignVertical:'center',fontsize:25,fontWeight:'bold',paddingRight:width*0.05}}>????????????</Text>
                                    </View>
                                    <Text style={{textAlign:'center',color:'#333',fontSize:20}}>????????????</Text>
                                    <TextInput onChangeText={(e)=>{this.setState({addMoney:e})}} style={{textAlign:'center',fontSize:30,color:'#000',fontWeight:'bold',marginTop:height*0.01}}></TextInput>
                                    <View style={{alignSelf:'center'}}>
                            
                                    <PasswordInput  onDone={(password)=>{this.setState({password})}}/>


                                    </View>
                                    <TouchableOpacity onPress={()=>{
                                        console.log(this.state.password);
                                        if(this.state.password==Password){
                                           this.chongzhi()

                                        }
                                    }} activeOpacity={1} style={{height:height*0.07,width:width*0.3,alignSelf:'center',}}>
                                        <Text style={{height:'100%',width:'100%',textAlign:'center',textAlignVertical:'center',fontSize:20,fontWeight:'bold',backgroundColor:global.mainColor,color:'#333',borderRadius:15,marginTop:height*0.03}}>????????????</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </Modal>
                    <View style={{ height: height * 0.07, flexDirection: 'row' }}>

                        <AntDesign
                        onPress={()=>{this.props.navigation.goBack()}}
                        style={{height:'100%',textAlignVertical:'center',width:'30%',paddingLeft:'5%'}}
                            name="left"
                            size={20}
                            color="#fff"
                        />

                        <Text style={{ textAlignVertical: 'center',textAlign:'center', height: '100%', width: '40%', fontSize: 16, color: '#fff', borderBottomWidth: 0 }}>????????????</Text>
                        <Text style={{ textAlignVertical: 'center', height: '100%', width: '30%', fontSize: 16, color: '#fff', borderBottomWidth: 0 }}></Text>
                    </View>

                    <Text style={{ height: height * 0.05, textAlign: 'center', textAlignVertical: 'center', fontSize: 15, color: '#333' }}>???????????????</Text>
                    <Text style={{ height: height * 0.1, textAlign: 'center', textAlignVertical: 'center', fontSize: 28 }}>{this.state.money}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text onPress={()=>{this.setState({f:1})}} style={{ fontSize: 16, height: height * 0.05, color: '#333', paddingLeft: width * 0.05 }}>????????????</Text>
                        <Text onPress={() => {
                           this._openModalWin()
                        }} style={{ fontSize: 16, height: height * 0.05, color: '#333', marginRight: width * 0.05 }}>??????</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#eee' }}>
                        <View style={{ flex: 1 }}>


                            <FlatList
                                 extraData={this.state}
                                data={this.state.moneyData}
                                renderItem={this._renderItem}
                            />
                        </View>
                    </ScrollView>

                </LinearGradient>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    headStyle: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: global.mainColor,
        paddingTop: 15,
        paddingBottom: 15,
        height: height * 0.07,

    },

})
