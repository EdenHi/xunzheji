/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    ScrollView,
    RefreshControl,
    DeviceEventEmitter,
    AsyncStorage,
    Share,
    ImageBackground,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BottomSheet } from 'react-native-elements'
import Fontisto from "react-native-vector-icons/Fontisto";
import changeSVGColor from '../../components/ChangeLottie/index'
export default class Luntan_guanzhu extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalVisible: false,
            pic: [],
            title: '',
            //放大显示的图片索引
            currentIndex: 0,
            //存放图片的路径
            imgUrls: [],
            isLoding: false,
            denglu_username: '',
            imgVisibal:false,
            message: 0,
        };
    }




    //图片点击放大
    handleShowAlbum = (k, index) => {
        const imgUrls = this.state.data[k].pic.map(s => ({ url: s }));
        const currentIndex = index;
        const imgVisibal = true;
        this.setState({
            imgUrls, currentIndex, imgVisibal,
        });
    }

    get_xinxi() {
        AsyncStorage.getItem('username', (err, result) => {
            if (!err) {
                this.setState({
                    denglu_username: result
                })
                fetch('http://47.100.78.254:3000/dongtai/guanzhu_allDongtai', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: result,
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson);

                        if (responseJson.length === 0) {
                            this.setState({
                                message: 1
                            });
                        } else {
                            this.setState({
                                data: responseJson,
                                message: 0,
                            });
                        }
                    })
            }
        })

    }
    componentDidMount() {

        this.get_xinxi();
        this.listener = DeviceEventEmitter.addListener('shuaxin', this.get_xinxi.bind(this))
        this.listener = DeviceEventEmitter.addListener('myfabu', this.loding.bind(this))
        this.listener = DeviceEventEmitter.addListener('yanse', this.get_xinxi.bind(this))
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    goComment = (v) => {
        this.context.navigate('Comment', v);
    }


    loding() {
        this.setState({
            isLoding: true,
        });

        setTimeout(() => {
            this.setState({
                isLoding: false,
            });
            this.get_xinxi();
        }, 500);
    }


    //更新点赞信息
    update_dianzan(v) {
        if (v.dianzan_username === this.state.denglu_username) {
            fetch('http://47.100.78.254:3000/dongtai/update_dianzan2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title_id: v.title_id,
                }),
            });
        } else {

            fetch('http://47.100.78.254:3000/dongtai/update_dianzan', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title_id: v.title_id,
                    denglu_username: this.state.denglu_username,
                }),
            });
        }
        this.get_xinxi();
        DeviceEventEmitter.emit('dianzan_1', 1)
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    '是寻商迹哦',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    render() {
        const { modalVisible, imgUrls, currentIndex ,imgVisibal} = this.state;
        // const { navigation } = this.props;
        let long = this.state.data.length;
        //    let mathrom = Math.round(Math.random() * long);
        if (this.state.data.length > 0) {
            return (
                <View>
                    <View>
                        <ScrollView
                            // 间隔
                            style={{ backgroundColor: global.backColor }}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isLoding} //设置是否在刷新
                                    onRefresh={this.loding.bind(this)} //下拉刷新结束}
                                />
                            }
                        >
                            {
                                this.state.data.map((v, k) => {
                                    //取出年月日
                                    let a = v.fabiao_time.slice(0, 10)
                                    //取出时分
                                    let b = v.fabiao_time.slice(11, 16)
                                    let time1 = new Date();
                                    let time2 = new Date(v.fabiao_time).getTime()
                                    let sum = a + ' ' + b
                                    //获得相差的秒
                                    let ss = (time1 - time2) / 1000
                                    let day = Math.floor(ss / 86400)
                                    let hour = Math.floor(ss / 3600)
                                    let min = Math.floor(ss / 60)
                                    let time = ''
                                    if (day >= 1 && day < 4) {

                                        time = day + '天前'

                                    }
                                    else if (hour >= 1 && hour < 24) {

                                        time = hour + '小时前'

                                    }
                                    else if (min >= 1 && min < 60) {

                                        time = min + '分钟前'

                                    }
                                    else if (day >= 4) {

                                        time = sum

                                    }
                                    else {

                                        time = '刚刚'

                                    }
                                    if (k === 1) {
                                        return (
                                            <View>
                                                <View style={{ marginTop: "5%", width: width, backgroundColor: global.backColor }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: "2%", marginLeft: 10, fontSize: 18, color: global.mainColor }}>官方推荐</Text>
                                                    <Text style={{ fontWeight: 'bold', marginLeft: 10, fontSize: 9, color: global.mainColor }}>THE OFFICIAL RECOMMENDATION</Text>
                                                    <ScrollView
                                                        horizontal
                                                        showsHorizontalScrollIndicator={false}
                                                        style={{ marginTop: 10, marginBottom: 10 }}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={require('../img/laowujian.jpg')} resizeMode="stretch" style={{ height: 250, width: 180, borderRadius: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center', marginTop: 50 }}>
                                                                    <View style={{ elevation: 5, borderRadius: 50, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <LinearGradient style={{ width: "100%", height: "100%", alignItems: "center", borderRadius: 50 }} colors={[global.mainColor, global.backColor]} >
                                                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>#</Text>
                                                                        </LinearGradient>

                                                                    </View>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>老物件</Text>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>历史沉淀</Text>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 10, width: "40%", height: "20%", elevation: 5, backgroundColor: global.mainColor, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
                                                                        onPress={() => this.context.navigate('huati', { tag: '老物件' })}>
                                                                        <Text style={{ color: 'white', fontSize: 15, padding: 5 }}>参与 </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: 'https://img0.baidu.com/it/u=2567442348,174032819&fm=26&fmt=auto' }} resizeMode="stretch" style={{ height: 250, width: 180, borderRadius: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center', marginTop: 50 }}>
                                                                    <View style={{ elevation: 5, borderRadius: 50, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <LinearGradient style={{ width: "100%", height: "100%", alignItems: "center", borderRadius: 50 }} colors={[global.mainColor, global.backColor]} >
                                                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>#</Text>
                                                                        </LinearGradient>

                                                                    </View>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>美食</Text>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>沁人心脾</Text>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 10, width: "40%", height: "20%", elevation: 5, backgroundColor: global.mainColor, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
                                                                        onPress={() => this.context.navigate('huati', { tag: '美食' })}>
                                                                        <Text style={{ color: 'white', fontSize: 15, padding: 5 }}>参与 </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.meituan.net%2Fdeal%2F652f50dd927fdbc9f39559c7aa1076c6259870.jpg&refer=http%3A%2F%2Fp0.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634631017&t=d5214137d8e0564d3a02c8ec698fca6f' }} resizeMode="stretch" style={{ height: 250, width: 180, borderRadius: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center', marginTop: 50 }}>
                                                                    <View style={{ elevation: 5, borderRadius: 50, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <LinearGradient style={{ width: "100%", height: "100%", alignItems: "center", borderRadius: 50 }} colors={[global.mainColor, global.backColor]} >
                                                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>#</Text>
                                                                        </LinearGradient>

                                                                    </View>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>鸡毛换糖路</Text>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>重新感受</Text>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 10, width: "40%", height: "20%", elevation: 5, backgroundColor: global.mainColor, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
                                                                        onPress={() => this.context.navigate('huati', { tag: '鸡毛换糖路' })}>
                                                                        <Text style={{ color: 'white', fontSize: 15, padding: 5 }}>参与 </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0828%252F2414ca8dj00qyibjv000wc000hs00d4g.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634630998&t=67bbb60cfa40a864fca20b057069149f' }} resizeMode="stretch" style={{ height: 250, width: 180, borderRadius: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center', marginTop: 50 }}>
                                                                    <View style={{ elevation: 5, borderRadius: 50, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <LinearGradient style={{ width: "100%", height: "100%", alignItems: "center", borderRadius: 50 }} colors={[global.mainColor, global.backColor]} >
                                                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>#</Text>
                                                                        </LinearGradient>

                                                                    </View>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>浙商文化</Text>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>源远流长</Text>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 10, width: "40%", height: "20%", elevation: 5, backgroundColor: global.mainColor, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
                                                                        onPress={() => this.context.navigate('huati', { tag: '浙商文化' })}>
                                                                        <Text style={{ color: 'white', fontSize: 15, padding: 5 }}>参与 </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jiweixin168.com%2FUploads%2F2016%2F10%2F22%2F580ad24cb012a.jpg&refer=http%3A%2F%2Fwww.jiweixin168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634631146&t=9033562f0cb2f46e4bba1bd8e3d0ae89' }} resizeMode="stretch" style={{ height: 250, width: 180, borderRadius: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center', marginTop: 50 }}>
                                                                    <View style={{ elevation: 5, borderRadius: 50, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <LinearGradient style={{ width: "100%", height: "100%", alignItems: "center", borderRadius: 50 }} colors={[global.mainColor, global.backColor]} >
                                                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>#</Text>
                                                                        </LinearGradient>

                                                                    </View>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>书香</Text>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>使人沉醉</Text>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 10, width: "40%", height: "20%", elevation: 5, backgroundColor: global.mainColor, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
                                                                        onPress={() => this.context.navigate('huati', { tag: '书香' })}>
                                                                        <Text style={{ color: 'white', fontSize: 15, padding: 5 }}>参与 </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: 'https://img0.baidu.com/it/u=3234694964,3408344979&fm=26&fmt=auto' }} resizeMode="stretch" style={{ height: 250, width: 180, borderRadius: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center', marginTop: 50 }}>
                                                                    <View style={{ elevation: 5, borderRadius: 50, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <LinearGradient style={{ width: "100%", height: "100%", alignItems: "center", borderRadius: 50 }} colors={[global.mainColor, global.backColor]} >
                                                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>#</Text>
                                                                        </LinearGradient>

                                                                    </View>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>茶酒</Text>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>唇齿留香</Text>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 10, width: "40%", height: "20%", elevation: 5, backgroundColor: global.mainColor, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
                                                                        onPress={() => this.context.navigate('huati', { tag: '茶酒' })}>
                                                                        <Text style={{ color: 'white', fontSize: 15, padding: 5 }}>参与 </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1113%2F041R0115343%2F20041Q15343-6-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634631244&t=83522d4a486614b5b8fb1b40e9f0e55b' }} resizeMode="stretch" style={{ height: 250, width: 180, borderRadius: 10, marginLeft: 10 }}>
                                                                <View style={{ alignItems: 'center', marginTop: 50 }}>
                                                                    <View style={{ elevation: 5, borderRadius: 50, height: 35, width: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                                        <LinearGradient style={{ width: "100%", height: "100%", alignItems: "center", borderRadius: 50 }} colors={[global.mainColor, global.backColor]} >
                                                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>#</Text>
                                                                        </LinearGradient>

                                                                    </View>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>日常</Text>
                                                                    <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>分享现在</Text>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginTop: 10, width: "40%", height: "20%", elevation: 5, backgroundColor: global.mainColor, borderRadius: 20, alignItems: "center", justifyContent: "center" }}
                                                                        onPress={() => this.context.navigate('huati', { tag: '日常' })}>
                                                                        <Text style={{ color: 'white', fontSize: 15, padding: 5 }}>参与 </Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </ImageBackground>
                                                        </TouchableOpacity>
                                                    </ScrollView>
                                                </View>
                                                <View key={k} style={{ marginTop: 10, backgroundColor: global.backColor }}>
                                                    <View style={{ marginLeft: width * 0.05, width: width * 0.9 }}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                                                <TouchableOpacity
                                                                    activeOpacity={1}
                                                                    onPress={() => {
                                                                        this.context.navigate('people', v.username),
                                                                            AsyncStorage.setItem('Person', v.username, (error) => {
                                                                                if (!error) {
                                                                                    console.log('Person保存成功');
                                                                                } else {
                                                                                    console.log('保存失败', err);
                                                                                }
                                                                            });
                                                                    }}
                                                                >
                                                                    <Image source={{ uri: v.portrait }} style={styles.touxiang} />
                                                                </TouchableOpacity>
                                                                <View style={{ marginLeft: 10 }}>
                                                                    <Text style={{
                                                                        fontSize: 15,
                                                                        fontWeight: 'bold',
                                                                        marginBottom: 5,
                                                                        color: global.mainColor == "#145A59" ? '#fff' : '#333'
                                                                    }}>{v.nickname}</Text>
                                                                    <Text style={{ color: '#aaa', fontSize: 12 }}>{time}</Text>
                                                                </View>
                                                            </View>
                                                            <MaterialCommunityIcons name='dots-vertical' size={20} color='#ccc' onPress={() => this.setState({ modalVisible: true })} />
                                                        </View>
                                                        <Text style={v.title === '' ? { height: 0 } : {
                                                            marginTop: 10,
                                                            fontSize: 15,
                                                            color: global.mainColor == "#145A59" ? '#fff' : '#333'
                                                        }}
                                                            ellipsizeMode="tail"
                                                            numberOfLines={8}>{v.title}</Text>
                                                        <View style={styles.box}>
                                                        <FlatList
                                                            contentContainerStyle={styles.listViewStyle}
                                                            keyExtractor={(item, index) => (index + '1')}
                                                            data={v.pic}
                                                            renderItem={({ item, index }) => {
                                                                if (item === null) {
                                                                    return;
                                                                } else if (v.pic.length > 1 && v.pic.length < 5) {
                                                                    return (
                                                                        <View style={styles.box2}>
                                                                            <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                key={index}
                                                                                onPress={() => this.handleShowAlbum(k, index)}>
                                                                                <Image source={{ uri: item }} style={{ height: (width * 0.9 - 4) / 2, width: (width * 0.9 - 10) / 2 }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    );
                                                                } else if (v.pic.length >= 5 && v.pic.length <= 9) {
                                                                    return (
                                                                        <View style={styles.box2}>
                                                                            <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                key={index}
                                                                                onPress={() => this.handleShowAlbum(k, index)}>
                                                                                <Image source={{ uri: item }} style={{ height: (width * 0.9 - 7) / 3, width: (width * 0.9-12 ) / 3 }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <View style={styles.box2}>
                                                                            <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                key={index}
                                                                                onPress={() => this.handleShowAlbum(k, index)}>
                                                                                <Image source={{ uri: item }} style={{ height: width * 0.9 - 2, width: width * 0.9 - 2 }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    );
                                                                }
                                                            }} />
                                                        </View>

                                                        {/* tag标签 */}
                                                        <TouchableOpacity activeOpacity={1} style={v.tag === '' || v.tag === null ? { height: 0, width: 0 } : { flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: global.mainColor, borderRadius: 20, width: width * 0.25, justifyContent: 'center', alignItems: 'center' }}
                                                            onPress={() => this.context.navigate('huati', { tag: v.tag })}>
                                                            <Fontisto name='hashtag' color='#fff' />
                                                            <Text style={{ paddingTop: 5, paddingBottom: 5, color: '#fff' }}>{v.tag}</Text>

                                                        </TouchableOpacity>

                                                        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                                            <TouchableOpacity activeOpacity={1}>
                                                                <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                                                    <TouchableOpacity activeOpacity={1} onPress={() => { this.update_dianzan(v), DeviceEventEmitter.emit('dianzan', 1) }}>
                                                                        <Ionicons
                                                                            name={v.dianzan_username === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                                            size={20}
                                                                            color={v.dianzan_username === this.state.denglu_username ? 'red' : '#999'}
                                                                        />
                                                                    </TouchableOpacity>
                                                                    <Text style={{ marginLeft: 5, color: '#999' }}>{v.dianzan}</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity activeOpacity={1} onPress={() => this.goComment(v)}>
                                                                <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                                                    <Ionicons
                                                                        name="chatbubble-ellipses-outline"
                                                                        size={20}
                                                                        color="#999" />
                                                                    <Text style={{ marginLeft: 5, color: '#999' }}>{v.counts}</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity activeOpacity={1}
                                                                onPress={() => {

                                                                    this.onShare();
                                                                }}
                                                            >
                                                                <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                                                    <Ionicons
                                                                        name="arrow-redo-outline"
                                                                        size={20}
                                                                        color="#999" />
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        );

                                    } else {
                                        return (
                                            <View key={k} style={{ marginTop: 10, backgroundColor: global.backColor }}>
                                                <View style={{ marginLeft: width * 0.05, width: width * 0.9 }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                                            <TouchableOpacity activeOpacity={1}
                                                                onPress={() => {
                                                                    this.context.navigate('people', v.username),
                                                                        AsyncStorage.setItem('Person', v.username, (error) => {
                                                                            if (!error) {
                                                                                console.log('Person保存成功');
                                                                            } else {
                                                                                console.log('保存失败', err);
                                                                            }
                                                                        });
                                                                }}
                                                            >
                                                                <Image source={{ uri: v.portrait }} style={styles.touxiang} />
                                                            </TouchableOpacity>
                                                            <View style={{ marginLeft: 10 }}>
                                                                <Text style={{
                                                                    fontSize: 15,
                                                                    fontWeight: 'bold',
                                                                    marginBottom: 5,
                                                                    color: global.mainColor == "#145A59" ? '#fff' : '#333'
                                                                }}>{v.nickname}</Text>
                                                                <Text style={{ color: '#aaa', fontSize: 12 }}>{time}</Text>
                                                            </View>
                                                        </View>
                                                        <MaterialCommunityIcons name='dots-vertical' size={20} color='#ccc' onPress={() => this.setState({ modalVisible: true })} />
                                                    </View>
                                                    <Text style={v.title === '' ? { height: 0 } : {
                                                        marginTop: 10,
                                                        fontSize: 15,
                                                        color: global.mainColor == "#145A59" ? '#fff' : '#333'
                                                    }}
                                                        ellipsizeMode="tail"
                                                        numberOfLines={8}>{v.title}</Text>
                                                    <View style={styles.box}>
                                                    <FlatList
                                                            contentContainerStyle={styles.listViewStyle}
                                                            keyExtractor={(item, index) => (index + '1')}
                                                            data={v.pic}
                                                            renderItem={({ item, index }) => {
                                                                if (item === null) {
                                                                    return;
                                                                } else if (v.pic.length > 1 && v.pic.length < 5) {
                                                                    return (
                                                                        <View style={styles.box2}>
                                                                            <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                key={index}
                                                                                onPress={() => this.handleShowAlbum(k, index)}>
                                                                                <Image source={{ uri: item }} style={{ height: (width * 0.9 - 4) / 2, width: (width * 0.9 - 10) / 2 }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    );
                                                                } else if (v.pic.length >= 5 && v.pic.length <= 9) {
                                                                    return (
                                                                        <View style={styles.box2}>
                                                                            <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                key={index}
                                                                                onPress={() => this.handleShowAlbum(k, index)}>
                                                                                <Image source={{ uri: item }} style={{ height: (width * 0.9 - 7) / 3, width: (width * 0.9-20 ) / 3 }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <View style={styles.box2}>
                                                                            <TouchableOpacity
                                                                                activeOpacity={1}
                                                                                key={index}
                                                                                onPress={() => this.handleShowAlbum(k, index)}>
                                                                                <Image source={{ uri: item }} style={{ height: width * 0.9 - 2, width: width * 0.9 - 2 }} />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    );
                                                                }
                                                            }} />
                                                    </View>

                                                    {/* tag标签 */}
                                                    <TouchableOpacity activeOpacity={1} style={v.tag === '' || v.tag === null ? { height: 0, width: 0 } : { flexDirection: 'row', marginTop: 10, alignItems: 'center', backgroundColor: global.mainColor, borderRadius: 20, width: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}
                                                        onPress={() => this.context.navigate('huati', { tag: v.tag })}>
                                                        <Fontisto name='hashtag' color='#fff' />
                                                        <Text style={{ paddingTop: 5, paddingBottom: 5, color: '#fff' }}>{v.tag}</Text>
                                                    </TouchableOpacity>

                                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                                                <TouchableOpacity activeOpacity={1} onPress={() => { this.update_dianzan(v), DeviceEventEmitter.emit('dianzan', 1) }}>
                                                                    <Ionicons
                                                                        name={v.dianzan_username === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                                        size={20}
                                                                        color={v.dianzan_username === this.state.denglu_username ? 'red' : '#999'}
                                                                    />
                                                                </TouchableOpacity>
                                                                <Text style={{ marginLeft: 5, color: "#999" }}>{v.dianzan}</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1} onPress={() => this.goComment(v)}>
                                                            <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                                                <Ionicons
                                                                    name="chatbubble-ellipses-outline"
                                                                    size={20}
                                                                    color="#999" />
                                                                <Text style={{ marginLeft: 5, color: "#999" }}>{v.counts}</Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity activeOpacity={1}
                                                            onPress={() => {
                                                                this.onShare();
                                                            }}
                                                        >
                                                            <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                                                <Ionicons
                                                                    name="arrow-redo-outline"
                                                                    size={20}
                                                                    color="#999" />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        );

                                    }
                                }

                                )
                            }
                            <View style={{ alignItems: 'center', backgroundColor: global.backColor }}><Text style={{ color: "#333" }}>------------到底了------------</Text></View>
                        </ScrollView>
                    </View>

{/* 举报 */}
                    <Modal animationType={'fade'}
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => { this.setState({ modalVisible: false }); }}>
                        {/* <ImageViewer imageUrls={imgUrls} style={{ flex: 1 }} index={currentIndex} onClick={() => { this.setState({ modalVisible: false }); }} /> */}
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={()=>{
                                this.setState({modalVisible:false})
                            }} style={{flex:6}}></TouchableOpacity>
                            <View style={{ backgroundColor: '#eee', borderTopRightRadius: 10, borderTopLeftRadius: 10,flex:1 }}>
                            <TouchableOpacity onPress={() => {this.setState({ modalVisible: false }),this.context.navigate('JuBao')}} style={{ backgroundColor: '#fff', height: 50, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                <Text style={{ fontSize: 18 }}>举报</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#fff', marginTop: 10, height: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({ modalVisible: false })}>
                                <Text style={{ fontSize: 18 }}>取消</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </Modal>
                    <Modal animationType={'fade'}
                        transparent={true}
                        visible={imgVisibal}
                        onRequestClose={() => { this.setState({ imgVisibal: false }); }}>
                        <ImageViewer imageUrls={imgUrls} style={{ flex: 1 }} index={currentIndex} onClick={() => { this.setState({ imgVisibal: false }); }} />

                    </Modal>

                </View>
            );
        } else if (this.state.message === 1) {
            return (
                <View style={width}>
                    <View style={{ width, height: height * 0.93, alignItems: 'center', justifyContent: "center", backgroundColor: "#fff" }}>
                        <Image style={{ width: width * 0.5, height: width * 0.5 }} source={require("../nothingpic/暂无消息.png")}></Image>
                        <Text style={{ color: global.mainColor, fontSize: 15, }}>暂无发布</Text>
                    </View>

                </View>
            )
        } else {
            return (
                <View style={{        top: -100,
                    backgroundColor: global.backColor,
                    width: width,
                    height: height,
                    justifyContent: "center",
                    alignItems: "center",}}>
                    <View style={{
                        width: 150,
                        height: 150,
                        // backgroundColor: "rgba(0,0,0,0.6)",
                        opacity: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 7
                    }}>
                        <LottieView source={global.mainColor=="#7cc0c0"?require('../../../animal/mail.json'):changeSVGColor(require('../../../animal/mail.json'),global.mainColor)} autoPlay loop progress={this.state.progress} />
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box2: {
        flexDirection: 'row',
        margin: 1,
    },
    photo1: {
        height: 100,
        width: 100,
        marginRight: 5,
    },
    listViewStyle: {
        // 主轴方向
        flexDirection: 'row',
        // 一行显示不下,换一行
        flexWrap: 'wrap',
        // 侧轴方向
        alignItems: 'center', // 必须设置,否则换行不起作用
    },
    box: {
        // backgroundColor:'blue',
        overflow: 'hidden',
        borderRadius: 20,
        marginTop: 10,
    },
    touxiang: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginTop: 10,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        color: "#333"
    },
    txt: {
        marginTop: 10,
        fontSize: 15,
        color: "#333"
    },
    LoadingPage: {
        top: -100,
        backgroundColor: "rgba(0,0,0,0)",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
    },
});