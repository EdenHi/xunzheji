import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ImageBackground, Image, Modal, ScrollView, ToastAndroid, } from 'react-native';
import Video from 'react-native-video';
const { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Step from '../../components/step/Step'
import { Animated } from 'react-native';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { captureRef } from "react-native-view-shot";
import { createRef } from 'react';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: 0,
            poused: true,
            modalVisible: false,
            modalVisible2: false,
            modalVisible3: false,
            modalVisible4: false,
            progress: new Animated.Value(0),
            play: true,
            step: 0,
            road: 0,
            prevSteps: 0,
            gold: 0,
            mission1: false,
            mission2: false,
            mission3: false,
            shoturi: 'http://8.142.11.85:3000/public/images/initimg.jpg'
        }
    }

    componentDidMount() {

        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 0,
        }).start();
        console.log('road', this.props.route.params);
        console.log('username', this.props.route.params.username);
        //网络请求
        fetch('http://8.142.11.85:3000/shouye/get_user_map', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.props.route.params.username,
                road: this.props.route.params.road
            })

        }).then((response) => response.json())
            .then((json) => {
                console.log(json[0].steps);
                this.setState({ prevSteps: json[0].steps })
            })
            .catch((error) => {
                console.log(error);
            })


    }
    //继续播放
    continuePlay() {
        this.setState({
            play: true
        })
    }
    //遮罩modal
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    setModalVisible2 = (visible) => {
        this.setState({ modalVisible2: visible });
    }
    setModalVisible3 = (visible) => {
        this.setState({ modalVisible3: visible });
    }
    setModalVisible4 = (visible) => {
        this.setState({ modalVisible4: visible });
    }
    //控制播放进度
    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });

        // this.onPouse
        if (data.currentTime >= 6 * this.state.step / 200) {
            this.onPouse()
        }
    };
    //暂停
    onPouse() {
        this.setState({ poused: true })
    }
    //开始
    Start() {
        if (this.state.currentTime <= 6 * this.state.step / 200)
            this.setState({ poused: false })
    }
    //更新step
    getSteps(e) {
        this.setState({
            step: (Number(e) + Number(this.state.prevSteps))
        })
    }
    //向服务器上传steps
    updateStep() {
        console.log(this.state.step);
        axios.post('http://8.142.11.85:3000/shouye/update_map', {
            username: this.props.route.params.username,
            road: this.props.route.params.road,
            steps: this.state.step
        })
    }
    //更新金币数
    getAllGold(gold1) {
        console.log(gold1);
        var oldgold = this.state.gold;
        oldgold += gold1;
        this.setState({ gold: oldgold })
    }
    /* 更新任务完成情况 */
    isFinished(mission) {
        if (mission == 'mission1') {
            this.setState({ mission1: true })
        } else if (mission == 'mission2') {
            this.setState({ mission2: true })
        } else if (mission == 'mission3') {
            this.setState({ mission3: true })
        }
        console.log(this.state.mission1);
        console.log(this.state.mission2);
        console.log(this.state.mission3);
    }
    render() {

        const viewRef = createRef();
        const { modalVisible, modalVisible2, modalVisible3, modalVisible4 } = this.state;
        return (
            <View style={{ backgroundColor: 'rgb(249,200,159)', flex: 1 }}>

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
                                <Text style={{ width, height: '100%', color: '#fff', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>浙商小故事</Text>
                            </View>



                            <View style={{ flex: 0.9, backgroundColor: '#7cc0c0', elevation: 5 }}>
                                <ScrollView>



                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%' }} borderRadius={10} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170329%2Ff767b2d8563b46d787b6e8f4459fa110_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631497805&t=1cb7cdd93f00c78d6bb54740699a55ac' }}>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Story'), this.setModalVisible(!modalVisible) }} style={{ height: '100%', borderRadius: 10, width: '100%', }}>
                                                <View style={{ height: '30%' }}>

                                                </View>
                                                <View style={{ height: '70%' }}>
                                                    <Text style={{ height: '60%', fontSize: 23, textAlignVertical: 'center', paddingLeft: width * 0.05, color: '#fff' }}>时空难阻货郎情</Text>
                                                    <View style={{ flexDirection: 'row', height: '40%', marginVertical: '-1%', paddingLeft: width * 0.03 }}>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>政务专题</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>义乌政府</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%' }} borderRadius={10} source={{ uri: 'http://5b0988e595225.cdn.sohucs.com/images/20190416/b33d693950ed4c57a465d3b447a7b660.jpeg' }}>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Story2'), this.setModalVisible(!modalVisible) }} style={{ height: '100%', borderRadius: 10, width: '100%', }}>
                                                <View style={{ height: '30%' }}>

                                                </View>
                                                <View style={{ height: '70%' }}>
                                                    <Text style={{ height: '60%', fontSize: 23, textAlignVertical: 'center', paddingLeft: width * 0.05, color: '#fff' }}>朱耀俊：谱写新丝路传奇 </Text>
                                                    <View style={{ flexDirection: 'row', height: '40%', marginVertical: '-1%', paddingLeft: width * 0.03 }}>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>政务专题</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>义乌政府</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%' }} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=744598801,3259292112&fm=26&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Story'), this.setModalVisible(!modalVisible) }} style={{ height: '100%', borderRadius: 10, width: '100%', }}>
                                                <View style={{ height: '30%' }}>

                                                </View>
                                                <View style={{ height: '70%' }}>
                                                    <Text style={{ height: '60%', fontSize: 23, textAlignVertical: 'center', paddingLeft: width * 0.05, color: '#fff' }}>一段难以忘却的辛酸记忆</Text>
                                                    <View style={{ flexDirection: 'row', height: '40%', marginVertical: '-1%', paddingLeft: width * 0.03 }}>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>政务专题</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>义乌政府</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%' }} borderRadius={10} source={{ uri: 'https://img0.baidu.com/it/u=1024542878,1224044941&fm=26&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Story'), this.setModalVisible(!modalVisible) }} style={{ height: '100%', borderRadius: 10, width: '100%', }}>
                                                <View style={{ height: '30%' }}>

                                                </View>
                                                <View style={{ height: '70%' }}>
                                                    <Text style={{ height: '60%', fontSize: 23, textAlignVertical: 'center', paddingLeft: width * 0.05, color: '#fff' }}>在报恩中感受别样人生</Text>
                                                    <View style={{ flexDirection: 'row', height: '40%', marginVertical: '-1%', paddingLeft: width * 0.03 }}>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>政务专题</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>义乌政府</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%' }} borderRadius={10} source={{ uri: 'https://img0.baidu.com/it/u=3379326313,336250877&fm=15&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Story'), this.setModalVisible(!modalVisible) }} style={{ height: '100%', borderRadius: 10, width: '100%', }}>
                                                <View style={{ height: '30%' }}>

                                                </View>
                                                <View style={{ height: '70%' }}>
                                                    <Text style={{ height: '60%', fontSize: 23, textAlignVertical: 'center', paddingLeft: width * 0.05, color: '#fff' }}>唱一曲团结协作的歌</Text>
                                                    <View style={{ flexDirection: 'row', height: '40%', marginVertical: '-1%', paddingLeft: width * 0.03 }}>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>政务专题</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>义乌政府</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%' }} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=3419080691,3340640814&fm=26&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Story'), this.setModalVisible(!modalVisible) }} style={{ height: '100%', borderRadius: 10, width: '100%', }}>
                                                <View style={{ height: '30%' }}>

                                                </View>
                                                <View style={{ height: '70%' }}>
                                                    <Text style={{ height: '60%', fontSize: 23, textAlignVertical: 'center', paddingLeft: width * 0.05, color: '#fff' }}>唱一曲团结协作的歌</Text>
                                                    <View style={{ flexDirection: 'row', height: '40%', marginVertical: '-1%', paddingLeft: width * 0.03 }}>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>政务专题</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ height: '80%', width: '25%', borderRadius: 10, marginHorizontal: '2%', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                                                            <Text style={{ color: '#fff', fontSize: 15, width: '100%', textAlignVertical: 'center', textAlign: 'center', height: '100%' }}>义乌政府</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </TouchableOpacity>
                                        </ImageBackground>
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
                        {/* 右弹窗 */}
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0)', }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible2(!modalVisible2)} style={{ height: '100%' }}>

                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.1, backgroundColor: '#7cc0c0', borderTopRightRadius: 50, borderTopLeftRadius: 50, elevation: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text onPress={() => this.props.navigation.navigate('duihuan_jinbi')} style={{ width: '30%', height: '100%', color: '#fff', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', }}>金币商城</Text>


                                <Text style={{ width: '30%', height: '100%', color: '#fff', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}> <FontAwesome5 style={{ textAlignVertical: 'center' }}
                                    name='coins'
                                    size={15}
                                    color='gold'
                                /> {this.state.gold}个 </Text>
                            </View>
                            <View style={{ flex: 0.9, backgroundColor: '#7cc0c0', elevation: 5 }}>
                                <View style={{ height: height * 0.1, width, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.25)', marginVertical: '0.25%' }}>
                                    <Text style={{ marginLeft: '4%', width: '20%', height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', color: '#333' }}>签到有奖:</Text>
                                    <Text style={{ width: '40%', height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', color: '#333' }}>每日签到可获得 5 <FontAwesome5
                                        name='coins'
                                        size={15}
                                        color='gold'
                                    /></Text>
                                    <TouchableOpacity activeOpacity={1} style={{ borderWidth: 0, width: '20%', height: '50%', backgroundColor: 'rgb(249,200,159)', marginVertical: '6%', borderRadius: 20, marginHorizontal: '11%', }}>
                                        <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontsize: 15, fontWeight: 'bold', color: '#fff' }}>领取</Text>

                                    </TouchableOpacity>
                                </View>

                                <ThisMission target="孝顺镇" progress="1" gold={5} sendGold={this.getAllGold.bind(this)} step={this.state.step} isGet={this.state.mission1} isFinished={this.isFinished.bind(this)} />
                                <ThisMission target="龙游" progress="2" gold={10} sendGold={this.getAllGold.bind(this)} step={this.state.step} isGet={this.state.mission2} isFinished={this.isFinished.bind(this)} />
                                <ThisMission target="上饶" progress="3" gold={10} sendGold={this.getAllGold.bind(this)} step={this.state.step} isGet={this.state.mission3} isFinished={this.isFinished.bind(this)} />

                            </View>

                        </View>
                    </Modal>

{/*  */}

                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modalVisible4}
                        hardwareAccelerated={true}
                        onRequestClose={() => {
                            this.setModalVisible4(!modalVisible4);
                        }}
                    >
                        <TouchableOpacity  activeOpacity={1} onPress={() => { this.setModalVisible4(!modalVisible4) }} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
                            <View collapsable={false} ref={viewRef} style={{borderWidth:1,height:height*0.83}}>
                            <ImageBackground  resizeMode={'stretch'} style={{ flex: 5, width: '80%', height: height * 0.6, marginLeft: '10%', marginTop: height * 0.15, borderWidth: 0, }} imageStyle={{ width: '100%' }} borderRadius={10} source={require('../img/haibao.png')}>
                                <View style={{ height: height * 0.05, width: '90%', marginLeft: '4.7%', borderColor: 'red', marginTop: height * 0.433, borderWidth: 0 }}>
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: '100%', height: '100%', textAlignVertical: 'center' }}>已抵达孝顺镇{ }，累计走过{ }00公里</Text>
                                </View>
                            </ImageBackground>
                            </View>
                            
                            <View style={{ backgroundColor: '#fff', width, flex: 1, marginBottom: height * 0 }}>
                                <View style={{ borderWidth: 0, flex: 1, flexDirection: 'row', width: '90%', marginLeft: '5%' }}>

                                    <View style={{ width: '33.33333%', height: '100%', borderWidth: 0, }}>
                                        <TouchableOpacity onPress={() => { captureRef(viewRef, {
                                        format: "jpg",
                                        quality: 0.8
                                    }).then(
                                        uri => {
                                            this.setState({ shoturi: uri })
                                            console.log("Image saved to", uri)
                                            this.props.navigation.navigate('Fabu', { path:uri, mime: 'image/jpeg' }) }

                                    );console.log(this.state.shoturi),this.setModalVisible4(!modalVisible4)}} style={{ borderWidth: 1, width: height * 0.07, height: height * 0.07, alignSelf: 'center', marginTop: height * 0.02, borderRadius: 100, backgroundColor: '#333333' }}>
                                            <Image style={{ width: '100%', height: '100%', }} source={require('../img/pyq.png')}></Image>
                                        </TouchableOpacity>
                                        <Text style={{ marginTop: height * 0.01, width: '60%', alignSelf: 'center', textAlignVertical: 'center', textAlign: 'center', fontSize: 17, color: '#333' }}>
                                            论坛发布
                                        </Text>
                                    </View>
                                    <View style={{ width: '33.33333%', height: '100%', borderWidth: 0, }}>
                                        <TouchableOpacity onPress={() => { this.setModalVisible4(!modalVisible4) }} style={{ borderWidth: 1, width: height * 0.07, height: height * 0.07, alignSelf: 'center', marginTop: height * 0.02, borderRadius: 100, backgroundColor: '#333333' }}>
                                            <Image style={{ width: '100%', height: '100%', }} source={require('../img/wx.png')}></Image>

                                        </TouchableOpacity>
                                        <Text style={{ marginTop: height * 0.01, width: '60%', alignSelf: 'center', textAlignVertical: 'center', textAlign: 'center', fontSize: 17, color: '#333' }}>
                                            微信好友
                                        </Text>
                                    </View>
                                    <View style={{ width: '33.33333%', height: '100%', borderWidth: 0, }}>
                                        <TouchableOpacity onPress={() => { this.setModalVisible4(!modalVisible4), ToastAndroid.showWithGravity('保存成功', 1000, ToastAndroid.BOTTOM) }} style={{ borderWidth: 1, width: height * 0.07, height: height * 0.07, alignSelf: 'center', marginTop: height * 0.02, borderRadius: 100, backgroundColor: '#333333' }}>
                                            <Image style={{ width: '100%', height: '100%', }} source={require('../img/bc.png')}></Image>

                                        </TouchableOpacity>
                                        <Text style={{ marginTop: height * 0.01, width: '60%', alignSelf: 'center', textAlignVertical: 'center', textAlign: 'center', fontSize: 17, color: '#333' }}>
                                            保存海报
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                    </Modal>
                    {/* 顶部 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={1} style={{ marginLeft: '2%' }}>
                            <AntDesign onPress={() => { this.props.navigation.goBack(), this.updateStep() }} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={25} color="#333333" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff", width: width * 0.15, marginLeft: "37.5%" }}>路线</Text>

                        <Step prevStep={this.state.prevSteps} getSteps={this.getSteps.bind(this)} />
                    </View>
                    <Image style={{ height: height * 0.8, width: width }} source={{ uri: 'http://8.142.11.85:3000/public/images/nanlu.jpg' }}></Image>
                    <View style={{ zIndex: 10, backgroundColor: 'rgba(255,255,255,255,0.5)', width: '15%', height: width * 0.15, marginTop: -height * 0.7, marginBottom: height * 0.65, marginLeft: width * 0.875, borderRadius: 10, }}>
                        <TouchableOpacity style={{}} onPress={() => { this.props.navigation.navigate('AR') }} >
                            {/* <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%', textAlign: 'center', height: '100%', textAlignVertical: 'center' }}>Ar</Text> */}
                            <MaterialCommunityIcons
                                name="augmented-reality"
                                size={50}
                                color="orange"
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Video
                            source={{ uri: 'http://8.142.11.85:8080/1.mp4' }}
                            paused={this.state.poused}
                            resizeMode="stretch"
                            posterResizeMode='contain'
                            style={{ zIndex: 0, height: height * 0.8, width: width, marginTop: -height * 0.8 }}
                            onProgress={this.onProgress}
                        />
                    </View>
                    {/* 底部 */}
                    <View style={{ height: height * 0.2, flexDirection: 'row', marginTop: -height * 0.075 }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible(!modalVisible)} style={{ height: '100%', width: '30%', justifyContent: 'space-around' }}>
                            <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={{ uri: 'http://8.142.11.85:3000/public/images/28-plantrips.png' }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.Start(), this.continuePlay(), this.updateStep(), console.log(this.state.play); }} style={{ width: width * 0.25, height: width * 0.25, borderRadius: 60, backgroundColor: '#7cc0c0', alignSelf: 'center', marginTop: -height * 0.07, borderWidth: 5, borderColor: '#fff', marginLeft: width * 0.06 }}>
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Go</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setModalVisible2(!modalVisible2) }} style={{ height: '100%', width: '20%', justifyContent: 'space-around', alignItems: 'flex-end', borderWidth: 0 }}>
                            <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={{ uri: 'http://8.142.11.85:3000/public/images/16-travel.png' }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setModalVisible4(!modalVisible4) }} style={{ height: '100%', width: '20%', justifyContent: 'space-around', alignItems: 'flex-end', borderWidth: 0 }}>
                            <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={require('../img/打卡.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View >
        );
    }
}


class ThisMission extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isGet: this.props.isGet,
            goldNum: 0
        }
    }
    getGold() {
        if (this.state.isGet == false && this.props.step > ((this.props.progress * 200) / 3)) {
            this.setState({ isGet: true })
            this.sendGold()
            this.sendMission()
            ToastAndroid.showWithGravity('领取成功', 1000, ToastAndroid.BOTTOM)
        } else if (this.state.isGet == true) {
            ToastAndroid.showWithGravity('请不要重复领取', 1000, ToastAndroid.BOTTOM)
        } else {
            ToastAndroid.showWithGravity('任务未完成，加油', 500, ToastAndroid.BOTTOM)
        }
    }
    sendGold() {
        this.props.sendGold(this.props.gold)
    }
    sendMission() {
        this.props.isFinished("mission" + this.props.progress)
        console.log("mission" + this.props.progress);
    }
    render() {
        let Lingqu = this.state.isGet ? <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontsize: 15, fontWeight: 'bold', color: '#fff', }}>已领取</Text> : <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontsize: 15, fontWeight: 'bold', color: '#fff', backgroundColor: 'orange', borderRadius: 20 }}>领取</Text>
        return (
            <View style={{ height: height * 0.1, width, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.25)', marginVertical: '0.25%' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', width: '70%', borderWidth: 0 }}>
                        <Text style={{ marginLeft: '7.5%', width: 0.2 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', color: '#333333' }}>任务目标:</Text>
                        <Text style={{ width: 0.5 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', color: '#333' }}>{this.props.target}( {this.props.gold} <FontAwesome5
                            name='coins'
                            size={15}
                            color='gold'
                        />)</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: '5%', borderWidth: 0, color: '#333333' }}>大约走过{this.props.progress}00公里，进度为{this.props.progress}/3</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { this.getGold() }} activeOpacity={1} style={{ borderWidth: 0, width: width * 0.2, height: '50%', backgroundColor: 'rgb(249,200,159)', marginVertical: '6%', borderRadius: 20, marginHorizontal: '0%', }}>
                    {Lingqu}
                </TouchableOpacity>
            </View>
        );
    }
}
