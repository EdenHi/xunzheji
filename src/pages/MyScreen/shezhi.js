/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Dimensions, AsyncStorage, DeviceEventEmitter } from 'react-native';
import { ListItem } from 'react-native-elements';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SwitchSelector from "react-native-switch-selector";

const { height, width } = Dimensions.get('window');
const options = [
    { label: "日间", value: ['#7cc0c0', '#fff', '#333'] },
    { label: "黑夜", value: ['#145A59', '#1B1B1B', '#fff'] },
    { label: "自定义", value: "2" }
];
const Touchoptions=[
    {label:'关闭',value:'关闭'},
    {label:'开启',value:'开启'}
]
export default class shezhi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f: 1,
            TouchID:'关闭',
            TouchNum:0
        }
    }


    go_back() {
        AsyncStorage.removeItem('username');
        this.props.navigation.navigate('Login');
    }
    fresh(){
        AsyncStorage.getItem('TouchID', (error, result) => {
            if (!error) {
              console.log(1, result);
                if(result==="开启"){
                    this.setState({TouchNum:1})
                console.log('kaiqi',this.state.TouchNum);
                }
            }
          })
    }
    componentDidMount(){
        this.fresh()
        this.listerner=DeviceEventEmitter.addListener('PickColor',(msg)=>{global.back([msg,'#fff']), DeviceEventEmitter.emit('yanse', 1),this.setState({f:this.state.f+1})})
    }
    componentWillUnmount(){
        this.listerner.remove();
    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: global.backColor }}>

                <View style={{ flexDirection: "row", backgroundColor: global.mainColor, alignItems: "center", height: height * 0.07, justifyContent: "center", marginBottom: "5%" }}>
                    <TouchableOpacity activeOpacity={1} style={{ width: width * 0.06, }}>
                        <FontAwesome onPress={() => this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        {/* <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={15} color="#000000" /> */}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: global.backColor, width: width * 0.85 }}>设置</Text>

                </View>
                {/* <View>
    <TouchableOpacity onPress={()=>{global.back(['#7cc0c0','#fff','#333']),console.log('global',global.mainColor,global.backColor),DeviceEventEmitter.emit('yanse',1),this.setState({f:this.state.f+1})}} style={{height:height*0.075,width:0.95*width,marginLeft:width*0.025,backgroundColor:'#eee',borderRadius:10,marginBottom:10}}>
        <Text style={{textAlignVertical:'center',height:'100%',fontSize:16,paddingLeft:width*0.075,color:'#333'}}>白天模式</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{global.back(['#145A59','#1B1B1B','#fff']),console.log('global',global.mainColor,global.backColor),DeviceEventEmitter.emit('yanse',1),this.setState({f:this.state.f+1})}} style={{height:height*0.075,width:0.95*width,marginLeft:width*0.025,backgroundColor:'#eee',borderRadius:10,marginBottom:10}}>
        <Text style={{textAlignVertical:'center',height:'100%',fontSize:16,paddingLeft:width*0.075,color:'#333'}}>黑夜模式</Text>
    </TouchableOpacity>
</View> */}
                <SwitchSelector
                    selectedColor={'#fff'}
                    buttonColor={global.mainColor}
                    borderColor={global.mainColor}
                    hasPadding
                    options={options}
                    initial={0}
                    onPress={value => {
                        if (value !== '2') 
                        { global.back(value), DeviceEventEmitter.emit('yanse', 1), this.setState({ f: this.state.f + 1 }) } 
                        else {
                            this.props.navigation.navigate('ColorPicker')
                        }
                    }}
                />
                <Text>指纹解锁</Text>
                                <SwitchSelector
                    selectedColor={'#fff'}
                    buttonColor={global.mainColor}
                    borderColor={global.mainColor}
                    hasPadding
                    options={Touchoptions}
                    initial={this.state.TouchNum}
                    onPress={value => {

                        {AsyncStorage.setItem('TouchID', value, (error) => {
                            if (!error) {
                                console.log('保存成功');
                            } else {
                                console.log('保存失败', error);
                            }
                        }), this.setState({ f: this.state.f + 1 },this.setState({TouchID:value}))} 
                
                    }}
                />
                <View>


                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: global.mainColor, width: width * 0.8, marginLeft: width * 0.1, height: height * 0.075, borderRadius: 25, marginTop: height * 0.05 }}
                        onPress={() => this.go_back()}>
                        <Text style={{ fontSize: 18, color: global.backColor, height: '100%', textAlignVertical: 'center', textAlign: 'center' }}>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
