import React, { Component } from 'react'
import { ToastAndroid, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import { View, Text, Animated, Easing, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
const { width, height } = Dimensions.get("window")

export default class ShiMin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            data: [],
            img:'',
            img2:''
        }
    }
    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 3500,
            easing: Easing.linear,

        }).start();

    }
    _openPicker(){
        ImagePicker.openPicker({
            width:100,
            height:100,

        }).then(image => {
            console.log('imag',image);
            this.setState({img:image})
        });

    }

    _openPicker2(){
        ImagePicker.openPicker({
            width:100,
            height:100,

        }).then(image => {
            console.log('imag',image);
            this.setState({img2:image})
        });

    }

    render() {
        console.log('1',this.state.img);
        const {img,img2} = this.state
        return (
            <View>
                <View style={{flexDirection:"row",backgroundColor:global.mainColor,alignItems:"center",height:height*0.07}}>
                <TouchableOpacity  onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={{width:width*0.06,marginLeft:width*0.05 }}>
                <FontAwesome  name={'angle-left'} size={25} color={'#fff'} />
                    {/* <AntDesign name='left' size={20} color='#fff' /> */}
                   
                </TouchableOpacity>
                <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>实名认证中心</Text>
                </View>
                {/* <View style={{ width: width * 0.15, height: height * 0.05,marginTop:10,elevation:50}}>
                    <LottieView source={require('../../../animal/wave.json')} style={{ width: width * 1, marginTop: -10, elevation:50}} autoPlay loop progress={this.state.progress} />
                </View> */}

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: width * 0.35 }}>
                    <Text style={{ fontSize: 15, color: global.mainColor, fontWeight: "bold" }}>姓名</Text>
                    <TextInput placeholder={'请输入真实姓名'} style={{ width: width * 0.8, height: height * 0.06, marginHorizontal: width * 0.05, borderRadius: 20, borderWidth: 1, borderColor: global.mainColor, textAlign: "center", marginTop: 15 }} />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: width * 0.1 }}>
                    <Text style={{ fontSize: 15, color: global.mainColor, fontWeight: "bold" }}>身份证</Text>
                    <TextInput keyboardType="number-pad" placeholder={'请输入身份证号码'} style={{ width: width * 0.8, height: height * 0.06, marginHorizontal: width * 0.05, borderRadius: 20, borderWidth: 1, borderColor: global.mainColor, textAlign: "center", marginTop: 15 }} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: width * 0.1, marginHorizontal: width * 0.1 }}>
                    <TouchableOpacity onPress={()=>this._openPicker()} style={{ width: width * 0.35, height: height * 0.15, borderRadius: 10, borderColor: global.mainColor, borderWidth: 1 }}>
                        {this.state.img===''?
                        <View>
                        <Image source={require("../../pages/HomeScreen/photos/camera.png")} style={{ width: width * 0.1, height: width * 0.1, marginTop:45, marginLeft: 50 ,}} />
                        <Text style={{width:'100%',textAlign:'center',marginTop:10}}>正面</Text>
                        </View>:null}
                        {this.state.img===''?null:<Image source={{uri:img.path}} style={{ width: "100%", height:"100%"}} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this._openPicker2()} style={{ width: width * 0.35, height: height * 0.15, borderRadius: 10, borderColor: global.mainColor, borderWidth: 1 }}>
                    {this.state.img===''?
                        <View>
                        <Image source={require("../../pages/HomeScreen/photos/camera.png")} style={{ width: width * 0.1, height: width * 0.1, marginTop:45, marginLeft: 50  }} />
                        <Text style={{width:'100%',textAlign:'center',marginTop:10}}>反面</Text>
                        </View>:null}
                        {this.state.img2===''?null:<Image source={{uri:img2.path}} style={{ width: "100%", height:"100%"}} />}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{ToastAndroid.show('提交成功！',2000),this.props.navigation.goBack()}} style={{ width: width * 0.9, height: height * 0.05, borderRadius: 20, backgroundColor: global.mainColor, alignItems: "center", justifyContent: "center",marginLeft:width*0.05,elevation:5, marginTop: width * 0.2 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>提交</Text>
                </TouchableOpacity>

            </View>
            // <View>
            //     <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={{ height: height * 0.07, alignItems: "center", flexDirection: "row", backgroundColor: global.mainColor }}>
            //         <AntDesign name='left' size={20} color='#fff' />
            //         <Text style={{ fontSize: 15, color: "#fff", marginLeft: 10 }}>实名认证中心</Text>
            //     </TouchableOpacity>
            //     <View style={{ marginHorizontal: width * 0.05, backgroundColor: global.mainColor, height: height * 0.25, marginTop: 10, borderRadius: 10, justifyContent: "space-around" }}>
            //         <View style={{ marginHorizontal: width * 0.05, flexDirection: "row", alignItems: "center" }}>
            //             <View style={{ width: width * 0.2, height: width * 0.2, backgroundColor: "#fff" }}></View>
            //             <View >
            //                 <Text style={{ color: '#fff', marginLeft: 20, fontSize: 15 }}>xun shan ji </Text>
            //                 <Text style={{ color: '#fff', marginLeft: 20, fontSize: 15, marginTop: 15 }}>3****************8</Text>
            //             </View>
            //         </View>
            //         <View><Text style={{ color: '#fff', marginLeft: 20 }}>个人隐私信息安全保障中</Text></View>
            //     </View>
            //     <Text style={{ fontSize: 15, marginHorizontal: width * 0.05, marginVertical: width * 0.05,fontWeight:"bold" }}>个人信息</Text>
            //     <View style={{backgroundColor:"#fff",height:height*0.2,marginHorizontal:width*0.05,borderRadius:10,elevation:5,marginBottom:10}}>
            //         <View style={{ marginHorizontal: width * 0.05 ,justifyContent:"space-around",height:height*0.2}}>
            //             <View style={{ flexDirection: "row", justifyContent: "space-between", height: height * 0.06, alignItems: "center", borderBottomWidth: 0.5, borderBottomColor: "#999" }}>
            //                 <Text style={{fontSize:15}}>姓名</Text>
            //                 <Text style={{fontSize:15}}>xun shan ji</Text>
            //             </View>
            //             <View style={{ flexDirection: "row", justifyContent: "space-between", height: height * 0.06, alignItems: "center", borderBottomWidth: 0.5, borderBottomColor: "#999" }}>
            //                 <Text style={{fontSize:15}}>性别</Text>
            //                 <Text style={{fontSize:15}}>国籍</Text>
            //             </View>
            //             <View style={{ flexDirection: "row", justifyContent: "space-between", height: height * 0.06, alignItems: "center" }}>
            //                 <Text style={{fontSize:15}}>姓名</Text>
            //                 <Text style={{fontSize:15}}>xun shan ji</Text>
            //             </View>
            //         </View>
            //     </View>
            //     <View style={{backgroundColor:"#fff",height:height*0.2,marginHorizontal:width*0.05,borderRadius:10,elevation:5,marginBottom:10,marginTop:10}}>
            //         <View style={{ marginHorizontal: width * 0.05 ,justifyContent:"space-around",height:height*0.2}}>
            //             <View style={{ flexDirection: "row", justifyContent: "space-between", height: height * 0.06, alignItems: "center", borderBottomWidth: 0.5, borderBottomColor: "#999" }}>
            //                 <Text style={{fontSize:15}}>证件类型</Text>
            //                 <Text style={{fontSize:15}}>身份证</Text>
            //             </View>
            //             <View style={{ flexDirection: "row", justifyContent: "space-between", height: height * 0.06, alignItems: "center", borderBottomWidth: 0.5, borderBottomColor: "#999" }}>
            //                 <Text style={{fontSize:15}}>证件号码</Text>
            //                 <Text style={{fontSize:15}}>3****************8</Text>
            //             </View>
            //             <View style={{ flexDirection: "row", justifyContent: "space-between", height: height * 0.06, alignItems: "center" }}>
            //                 <Text style={{fontSize:15}}>证件有效期</Text>
            //                 <Text style={{fontSize:15}}>2025.10.10</Text>
            //             </View>
            //         </View>
            //     </View>

            // </View>
        )
    }
}
