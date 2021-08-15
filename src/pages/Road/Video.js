
import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ImageBackground, Image, Modal, ScrollView } from 'react-native';
import Video from 'react-native-video';
const { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Step from '../../components/step/Step'
import { Animated } from 'react-native';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
            step: 0,
            road: 0,
            prevSteps: 0
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
    render() {
        const { modalVisible, modalVisible2 } = this.state;
        return (
            <View style={{ backgroundColor: '	rgb(249,200,159)', flex: 1 }}>

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
                                <ScrollView style={{}}>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%'}} borderRadius={10} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170329%2Ff767b2d8563b46d787b6e8f4459fa110_th.jpeg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631497805&t=1cb7cdd93f00c78d6bb54740699a55ac' }}>
                                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Story'),this.setModalVisible(!modalVisible)}} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                <View style={{ flex: 2 }} />
                                                <View style={{ flex: 1.5 }}><Text style={{ textAlignVertical:'center',height: '100%',fontSize: 22, fontWeight: 'bold', color: '#fff' }}>时空难阻货郎情</Text></View>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>政务专题</Text></View></TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>义乌政府</Text></View></TouchableOpacity>
                                                        {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%',}} resizeMode='stretch' borderRadius={10}  source={{ uri: 'http://5b0988e595225.cdn.sohucs.com/images/20190416/b33d693950ed4c57a465d3b447a7b660.jpeg' }}>
                                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Story2'),this.setModalVisible(!modalVisible)}} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                <View style={{ flex: 2 }} />
                                                <View style={{ flex: 1.5 }}><Text style={{ textAlignVertical:'center',height: '100%',fontSize: 22, fontWeight: 'bold', color: '#fff' }}>朱耀俊：谱写新丝路传奇 </Text></View>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>政务专题</Text></View></TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>义乌政府</Text></View></TouchableOpacity>
                                                        {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%'}} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=744598801,3259292112&fm=26&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic3')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                <View style={{ flex: 2 }} />
                                                <View style={{ flex: 1.5 }}><Text style={{ textAlignVertical:'center',height: '100%',fontSize: 22, fontWeight: 'bold', color: '#fff' }}>一段难以忘却的辛酸记忆</Text></View>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>政务专题</Text></View></TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>义乌政府</Text></View></TouchableOpacity>
                                                        {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%'}} borderRadius={10} source={{ uri: 'https://img0.baidu.com/it/u=1024542878,1224044941&fm=26&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic3')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                <View style={{ flex: 2 }} />
                                                <View style={{ flex: 1.5 }}><Text style={{ textAlignVertical:'center',height: '100%',fontSize: 22, fontWeight: 'bold', color: '#fff' }}>在报恩中感受别样人生</Text></View>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>政务专题</Text></View></TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>义乌政府</Text></View></TouchableOpacity>
                                                        {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%'}} borderRadius={10} source={{ uri: 'https://img0.baidu.com/it/u=3379326313,336250877&fm=15&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic3')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                <View style={{ flex: 2 }} />
                                                <View style={{ flex: 1.5 }}><Text style={{ textAlignVertical:'center',height: '100%',fontSize: 22, fontWeight: 'bold', color: '#fff' }}>唱一曲团结协作的歌</Text></View>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>政务专题</Text></View></TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>义乌政府</Text></View></TouchableOpacity>
                                                        {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ borderRadius: 10, height: height * 0.15, backgroundColor: '#eee', marginTop: height * 0.01, width: width * 0.9, marginHorizontal: width * 0.05, }}>
                                        <ImageBackground style={{ height: '100%', marginBottom: 10, width: '100%'}} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=3419080691,3340640814&fm=26&fmt=auto&gp=0.jpg' }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Topic3')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                <View style={{ flex: 2 }} />
                                                <View style={{ flex: 1.5 }}><Text style={{ textAlignVertical:'center',height: '100%',fontSize: 22, fontWeight: 'bold', color: '#fff' }}>换糖路上取到生意经</Text></View>
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 75, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>政务专题</Text></View></TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>义乌政府</Text></View></TouchableOpacity>
                                                        {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
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
                            <View style={{ flex: 0.1, backgroundColor: '#7cc0c0', borderTopRightRadius: 50, borderTopLeftRadius: 50, elevation: 5, flexDirection: 'row' }}>
                                <Text onPress={()=>this.props.navigation.navigate('duihuan_jinbi')} style={{ width: '30%', height: '100%', color: '#fff', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', }}>金币商城</Text>
                                <Text style={{ width: '30%', height: '100%', color: '#fff', textAlign: 'center', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', marginLeft: '5%' }}>领取金币</Text>
                                <FontAwesome5 style={{ textAlignVertical: 'center', marginLeft: '15%', }}
                                    name='coins'
                                    size={15}
                                    color='gold'
                                />
                                <Text style={{ width: '10%', height: '100%', color: '#fff', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold', }}> 2个</Text>
                            </View>
                            <View style={{ flex: 0.9, backgroundColor: '#7cc0c0', elevation: 5 }}>
                                <View style={{ height: height * 0.1, width, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.25)', marginVertical: '0.25%' }}>
                                    <Text style={{ marginLeft: '4%', width: '20%', height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>签到有奖:</Text>
                                    <Text style={{ width: '40%', height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>每日签到可获得5 <FontAwesome5
                                        name='coins'
                                        size={15}
                                        color='gold'
                                    /></Text>
                                    <TouchableOpacity activeOpacity={1} style={{ borderWidth: 0, width: '20%', height: '50%', backgroundColor: 'rgb(249,200,159)', marginVertical: '6%', borderRadius: 20, marginHorizontal: '11%', }}>
                                        <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontsize: 15, fontWeight: 'bold', color: '#fff' }}>领取</Text>

                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: height * 0.1, width, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.25)', marginVertical: '0.25%' }}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <View style={{ flexDirection: 'row', width: '70%', borderWidth: 0 }}>
                                            <Text style={{ marginLeft: '7.5%', width: 0.2 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>运动有奖:</Text>
                                            <Text style={{ width: 0.5 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>已抵达孝顺镇</Text>

                                        </View>
                                        <View>
                                            <Text style={{ marginLeft: '5%', borderWidth: 0, color: '' }}>大约走过100公里，进度为1/3</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity activeOpacity={1} style={{ borderWidth: 0, width: width * 0.2, height: '50%', backgroundColor: 'rgb(249,200,159)', marginVertical: '6%', borderRadius: 20, marginHorizontal: '0%', }}>
                                        <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontsize: 15, fontWeight: 'bold', color: '#fff' }}>领取</Text>
                                    </TouchableOpacity>


                                </View>
                                <View style={{ height: height * 0.1, width, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.25)', marginVertical: '0.25%' }}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <View style={{ flexDirection: 'row', width: '70%', borderWidth: 0 }}>
                                            <Text style={{ marginLeft: '7.5%', width: 0.2 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>运动有奖:</Text>
                                            <Text style={{ width: 0.5 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>已抵达孝顺镇</Text>

                                        </View>
                                        <View>
                                            <Text style={{ marginLeft: '5%', borderWidth: 0, color: '' }}>大约走过100公里，进度为1/3</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity activeOpacity={1} style={{ borderWidth: 0, width: width * 0.2, height: '50%', backgroundColor: 'rgb(249,200,159)', marginVertical: '6%', borderRadius: 20, marginHorizontal: '0%', }}>
                                        <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontsize: 15, fontWeight: 'bold', color: '#fff' }}>领取</Text>
                                    </TouchableOpacity>


                                </View>
                                <View style={{ height: height * 0.1, width, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.25)', marginVertical: '0.25%' }}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <View style={{ flexDirection: 'row', width: '70%', borderWidth: 0 }}>
                                            <Text style={{ marginLeft: '7.5%', width: 0.2 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>运动有奖:</Text>
                                            <Text style={{ width: 0.5 * width, height: '100%', borderWidth: 0, textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>已抵达孝顺镇</Text>

                                        </View>
                                        <View>
                                            <Text style={{ marginLeft: '5%', borderWidth: 0, color: '' }}>大约走过100公里，进度为1/3</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity activeOpacity={1} style={{ borderWidth: 0, width: width * 0.2, height: '50%', backgroundColor: 'rgb(249,200,159)', marginVertical: '6%', borderRadius: 20, marginHorizontal: '0%', }}>
                                        <Text style={{ height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontsize: 15, fontWeight: 'bold', color: '#fff' }}>领取</Text>
                                    </TouchableOpacity>


                                </View>



                            </View>

                        </View>
                    </Modal>
                    {/* 顶部 */}
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: 'space-around' }}>
                        <TouchableOpacity activeOpacity={1} style={{ marginLeft: '2%' }}>
                            <AntDesign onPress={() => { this.props.navigation.goBack(), this.updateStep() }} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={25} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff", width: width * 0.15, marginLeft: "37.5%" }}>路线</Text>

                        <Step prevStep={this.state.prevSteps} getSteps={this.getSteps.bind(this)} />
                    </View>
                    <Image style={{ height: height * 0.8, width: width }} source={{ uri: 'http://8.142.11.85:3000/public/images/nanlu.jpg' }}></Image>
                    <View style={{ zIndex: 10, backgroundColor: 'rgba(255,255,255,255,0.5)', width: '15%', height: width * 0.15, marginTop: -height * 0.7, marginBottom: height * 0.65, marginLeft: width * 0.875, borderRadius: 10, }}>
                        <TouchableOpacity style={{}} onPress={() => this.props.navigation.navigate('AR')}>
                            {/* <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%', textAlign: 'center', height: '100%', textAlignVertical: 'center' }}>Ar</Text> */}
                            <MaterialCommunityIcons
                                name="augmented-reality"
                                size={50}
                                color="orange"
                            />
                        </TouchableOpacity>
                    </View>
                    <Video
                        source={{ uri: 'http://8.142.11.85:8080/1.mp4' }}
                        paused={this.state.poused}
                        resizeMode="stretch"
                        posterResizeMode='contain'
                        style={{ zIndex: 0, height: height * 0.8, width: width, marginTop: -height * 0.8 }}
                        onProgress={this.onProgress}
                    />
                    {/* 底部 */}
                    <View style={{ height: height * 0.2, flexDirection: 'row', justifyContent: 'space-around', marginTop: -height * 0.075 }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setModalVisible(!modalVisible)} style={{ height: '100%', width: '30%', justifyContent: 'space-around' }}>
                            <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={{ uri: 'http://8.142.11.85:3000/public/images/28-plantrips.png' }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.Start(), this.continuePlay(), this.updateStep(), console.log(this.state.play); }} style={{ width: width * 0.25, height: width * 0.25, borderRadius: 60, backgroundColor: '#7cc0c0', alignSelf: 'center', marginTop: -height * 0.07, borderWidth: 5, borderColor: '#fff' }}>
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Go</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setModalVisible2(!modalVisible2)} style={{ height: '100%', width: '30%', justifyContent: 'space-around', alignItems: 'flex-end', borderWidth: 0 }}>
                            <Image style={{ borderWidth: 1, width: width * 0.15, height: width * 0.15, marginTop: 0, alignSelf: 'center' }} source={{ uri: 'http://8.142.11.85:3000/public/images/16-travel.png' }}></Image>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

