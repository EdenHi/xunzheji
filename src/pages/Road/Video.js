
import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import Video from 'react-native-video';
const { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Step from '../../components/step/Step'
import { Animated } from 'react-native';






export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: 0,
            poused: true,
            modalVisible: false,
            modalVisible2: false,
            progress: new Animated.Value(0),
            play: true,
            step: 0
        }
    }
    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 0,
        }).start();
    }
    continuePlay() {
        this.setState({
            play: true
        })
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    setModalVisible2 = (visible) => {
        this.setState({ modalVisible2: visible });
    }
    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });

        // this.onPouse
        if (data.currentTime >= 6 * this.state.step / 200) {
            this.onPouse()
        }
    };
    onPouse() {
        this.setState({ poused: true })
    }
    Start() {
        if (this.state.currentTime <= 6 * this.state.step / 200)
            this.setState({ poused: false })
    }
    getSteps(e) {
        this.setState({
            step: e + 0
        })
    }
    render() {
        const { modalVisible, modalVisible2 } = this.state;
        return (

            <View style={{ backgroundColor: 'orange', flex: 1 }}>

                <LinearGradient style={{ width }} colors={["#7cc0bf", "#fff", "#7cc0bf"]} >
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible}
                        hardwareAccelerated={true}
                        onRequestClose={() => {
                            this.setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0)', }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible(!modalVisible)} style={{ height: '100%' }}>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.1, backgroundColor: '#7cc0c0', borderTopRightRadius: 50, borderTopLeftRadius: 50, elevation: 5 }}>
                                <Text style={{width,height:'100%',color:'#fff',textAlign:'center',textAlignVertical:'center',fontSize:15,fontWeight:'bold'}}>浙商小故事</Text>
                            </View>
                            <View style={{ flex: 0.9, backgroundColor: '#7cc0c0', elevation: 5 }}>
                                <ScrollView style={{}}>
                                    <View style={{ borderRadius: 5, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>

                                    </View>
                                    <View style={{ borderRadius: 5, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>

                                    </View>
                                    <View style={{ borderRadius: 5, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>

                                    </View>
                                    <View style={{ borderRadius: 5, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>

                                    </View>
                                    <View style={{ borderRadius: 5, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>

                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible2}
                        hardwareAccelerated={true}
                        onRequestClose={() => {
                            this.setModalVisible2(!modalVisible2);
                        }}
                    >

                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0)', }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible2(!modalVisible2)} style={{ height: '100%' }}>

                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.1, backgroundColor: '#7cc0c0', borderTopRightRadius: 50, borderTopLeftRadius: 50, elevation: 5 }}>
                                <Text style={{width,height:'100%',color:'#fff',textAlign:'center',textAlignVertical:'center',fontSize:15,fontWeight:'bold'}}>领取金币</Text>
                            </View>
                            <View style={{ flex: 0.9, backgroundColor: '#7cc0c0', elevation: 5 }}>
                                <View style={{borderWidth:1,height:height*0.1,width,flexDirection:'row'}}>
                                    <Text style={{width:'20%',height: '100%',borderWidth:1,textAlignVertical:'center',fontSize:15,fontWeight:'bold'}}>签到有奖:</Text>
                                <Text style={{width:'40%',height: '100%',borderWidth:1,textAlignVertical:'center',fontSize:15,fontWeight:'bold'}}>每日签到可获得5金币</Text>
                                <TouchableOpacity style={{borderWidth:1,width:'30%',height:'70%',backgroundColor:'orange',marginVertical:10}}>

                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={1} style={{ marginLeft: '2%' }}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={25} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff", width: width * 0.15, marginLeft: "37.5%" }}>路线</Text>

                        <Step step={0} getSteps={this.getSteps.bind(this)} />
                    </View>
                    <Image style={{ height: height * 0.8, width: width }} source={require('../img/南路.jpg')}></Image>
                    <Video
                        source={{ uri: 'http://8.142.11.85:8080/1.mp4' }}
                        paused={this.state.poused}
                        resizeMode="stretch"
                        posterResizeMode='contain'
                        style={{ height: height * 0.8, width: width, marginTop: -height * 0.8 }}
                        onProgress={this.onProgress}
                    />
                    <View style={{ height: height * 0.2, flexDirection: 'row', justifyContent: 'space-around', marginTop: -height * 0.055 }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible(!modalVisible)} style={{ height: '100%', width: '30%', justifyContent: 'space-around' }}>
                            <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={require('../img/28-plantrips.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.Start(), this.continuePlay(), console.log(this.state.play); }} style={{ width: width * 0.25, height: width * 0.25, borderRadius: 60, backgroundColor: '#7cc0c0', alignSelf: 'center', marginTop: -height * 0.07, borderWidth: 5, borderColor: '#fff' }}>
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Go</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setModalVisible2(!modalVisible2)} style={{ height: '100%', width: '30%', justifyContent: 'space-around', alignItems: 'flex-end', borderWidth: 0 }}>
                            <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={require('../img/16-travel.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

