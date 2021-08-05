// Load the module

// import React, { Component } from 'react';
// import { View, Dimensions, Text, TouchableOpacity, Image, Modal } from 'react-native';
// import Video from 'react-native-video';
// const { width, height } = Dimensions.get('window');
// import LinearGradient from 'react-native-linear-gradient'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Step from '../../components/step/Step'
// import { Animated } from 'react-native';
// import LottieView from 'lottie-react-native';
// export default class componentName extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             currentTime: 0,
//             poused: true,
//             modalVisible: false,
//             progress: new Animated.Value(0),
//         }
//     }
//     componentDidMount() {
//         Animated.timing(this.state.progress, {
//             toValue: 1,
//             duration: 0,
//         }).start();
//     }
//     setModalVisible = (visible) => {
//         this.setState({ modalVisible: visible });
//     }
//     onProgress = (data) => {
//         this.setState({ currentTime: data.currentTime });
//         console.log(Math.ceil(data.currentTime) + "s");
//         // this.onPouse
//         if (Math.ceil(data.currentTime) >= 5) {
//             this.onPouse()
//         }
//     };
//     onPouse() {
//         this.setState({ poused: true })
//     }
//     Start() {
//         if (this.state.currentTime <= 4)
//             this.setState({ poused: false })
//     }

//     render() {
//         const { modalVisible } = this.state;
//         return (

//             <View style={{ backgroundColor: 'orange', flex: 1 }}>

//                 <LinearGradient style={{ width }} colors={["#7cc0bf", "#fff", "#7cc0bf"]} >
//                     <Modal
//                         animationType='slide'
//                         transparent={true}
//                         visible={modalVisible}
//                         hardwareAccelerated={true}
//                         onRequestClose={() => {
//                             this.setModalVisible(!modalVisible);
//                         }}
//                     >

//                         <View style={{ flex: 1 }}>
//                             <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0)', }}>
//                                 <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible(!modalVisible)} style={{ height: '100%' }}>


//                                 </TouchableOpacity>
//                             </View>

//                             <View style={{ flex: 1, backgroundColor: '#7cc0c0', borderTopRightRadius: 50, borderTopLeftRadius: 50, elevation: 5 }}>

//                             </View>
//                         </View>
//                     </Modal>
//                     <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: 'space-between' }}>
//                         <TouchableOpacity activeOpacity={1} style={{}}>
//                             <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
//                         </TouchableOpacity>
//                         <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>路线</Text>
//                         <LottieView autoPlay={true} autoSize={true} style={{height:40,marginLeft:-75}} source={require('../../../animal/16969-walker-man.json')} progress={this.state.progress} />
//                         <Step />
//                     </View>
//                     <Image style={{ height: height * 0.8, width: width }} source={{ uri: 'https://img.zcool.cn/community/0156955dfdd320a80120a8950ca2bf.jpg@1280w_1l_2o_100sh.jpg' }}></Image>
//                     <Video
//                         source={{ uri: "https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4" }}
//                         paused={this.state.poused}
//                         resizeMode="stretch"
//                         posterResizeMode='contain'
//                         style={{ height: height * 0.8, width: width, marginTop: -height * 0.8 }}
//                         onProgress={this.onProgress}
//                     />
//                     <View style={{ height: height * 0.2, flexDirection: 'row', justifyContent: 'space-around', marginTop: -height * 0.055 }}>
//                         <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} style={{ height: '100%', width: '30%', justifyContent: 'space-around' }}>
//                             <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={require('../img/28-plantrips.png')}></Image>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => { this.Start() }} style={{ width: width * 0.25, height: width * 0.25, borderRadius: 60, backgroundColor: '#7cc0c0', alignSelf: 'center', marginTop: -height * 0.07, borderWidth: 5, borderColor: '#fff' }}>
//                             <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontSize: 25, fontWeight: 'bold', color: '#fff' }}>Go</Text>
//                         </TouchableOpacity>
//                         <View style={{ height: '100%', width: '30%', justifyContent: 'space-around', alignItems: 'flex-end', borderWidth: 0 }}>
//                             <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={require('../img/16-travel.png')}></Image>
//                         </View>
//                     </View>
//                 </LinearGradient>
//             </View>
//         );
//     }
// }

