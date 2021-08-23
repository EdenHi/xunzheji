/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    AsyncStorage,
    TouchableWithoutFeedback,
    Keyboard,
    RefreshControl,
    DeviceEventEmitter,

} from 'react-native';
const { height, width } = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import { BottomSheet, ListItem } from 'react-native-elements'
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from 'react-native-vector-icons/Entypo'


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
export default class Comment extends React.Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            title_id: this.props.route.params.title_id,
            data: [],
            modalVisible: false,
            //放大显示的图片索引
            currentIndex: 0,
            //存放图片的路径
            imgUrls: [],
            comment_zhu: [],
            comment_fu: [],
            content: '',
            denglu_username: '',
            isLoding: false,
            isVisible: false,
            counts: this.props.route.params.counts,
            heart: false,
            time: '',
            dianzan: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        };
    }
    //底部弹窗
    list = [
        {
            title: '删除',
            onPress: () => this.delect()
        },
        {
            title: '取消',
            containerStyle: { backgroundColor: '#7cc0c0' },
            titleStyle: { color: 'white' },
            onPress: () => this.setState({ isVisible: false }),
        },
    ];
    //删除该条评论
    delect() {
        fetch('http://8.142.11.85:3000/dongtai/delect_Dongtai', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title_id: this.state.data.title_id,
            }),
        });
        this.setState({ isVisible: false });
        this.go_luntan();
    }

    //获取某一个数据
    get_One() {
        fetch('http://8.142.11.85:3000/dongtai/OneDongtai', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title_id: this.state.title_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson[0],
                });

                let a = responseJson[0].fabiao_time.slice(0, 10)
                let b = responseJson[0].fabiao_time.slice(11, 16)
                let time1 = new Date();
                let time2 = new Date(responseJson[0].fabiao_time).getTime()
                let sum = a + ' ' + b
                //获得相差的秒
                let ss = (time1 - time2) / 1000
                let day = Math.floor(ss / 86400)
                let hour = Math.floor(ss / 3600)
                let min = Math.floor(ss / 60)
                if (day >= 1 && day < 4) {
                    this.setState({
                        time: day + '天前'
                    })
                }
                else if (hour >= 1 && hour < 24) {
                    this.setState({
                        time: hour + '小时前'
                    })
                }
                else if (min >= 1 && min < 60) {
                    this.setState({
                        time: min + '分钟前'
                    })
                }
                else if (day >= 4) {
                    this.setState({
                        time: sum
                    })
                }
                else {
                    this.setState({
                        time: '刚刚'
                    })
                }

            }).catch((error) => {
                console.error('error', error);
            });
    }


    //点击图片方法事件
    handleShowAlbum = (index) => {
        const imgUrls = this.state.data.pic.map(v => ({ url: v }));
        const currentIndex = index;
        const modalVisible = true;
        this.setState({
            imgUrls, currentIndex, modalVisible,
        });
    }
    //刷新
    loding() {
        this.setState({
            isLoding: true,
        });

        setTimeout(() => {
            this.setState({
                isLoding: false,
            });
            this.go_select();
            this.get_One();
        }, 1000);
    }

    pinglun() {
        var date = new Date();

        fetch('http://8.142.11.85:3000/dongtai/insert_comment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment_id: this.state.data.title_id,
                content: this.state.content,
                username: this.state.denglu_username,
                date_zhu: date,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.go_select();
                this.get_One();
            })

    }

    //渲染图片
    renderData({ item, index }) {
        if (item === null) {
            return;
        } else if (this.state.data.pic.length > 1 && this.state.data.pic.length < 5) {
            return (
                <View style={styles.box2}>
                    <TouchableOpacity
                        activeOpacity={1}
                        key={index}
                        onPress={() => this.handleShowAlbum(index)}>
                        <Image source={{ uri: item }} style={{ height: (width * 0.9 - 4) / 2, width: (width * 0.9 - 4) / 2 }} />
                    </TouchableOpacity>
                </View>
            );
        } else if (this.state.data.pic.length >= 5 && this.state.data.pic.length <= 9) {
            return (
                <View style={styles.box2}>
                    <TouchableOpacity
                        activeOpacity={1}
                        key={index}
                        onPress={() => this.handleShowAlbum(index)}>
                        <Image source={{ uri: item }} style={{ height: (width * 0.9 - 7) / 3, width: (width * 0.9 - 7) / 3 }} />
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.box2}>
                    <TouchableOpacity
                        activeOpacity={1}
                        key={index}
                        onPress={() => this.handleShowAlbum(index)}>
                        <Image source={{ uri: item }} style={{ height: width * 0.9 - 2, width: width * 0.9 - 2 }} />
                    </TouchableOpacity>
                </View>
            );
        }
    }

    //获取评论信息
    go_select() {
        fetch('http://8.142.11.85:3000/dongtai/comment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                title_id: this.state.title_id,
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    comment_zhu: responseJson,
                });
            }).catch((error) => {
                console.error('error', error);
            });
        this.get_One()
    }


    //获取评论信息
    componentDidMount() {
        AsyncStorage.getItem('username', (err, resule) => {
            if (!err) {
                this.setState({
                    denglu_username: resule
                }, () => {
                    console.log(',');
                })
            }
        })
        this.go_select();
        this.get_One();
        this.listener = DeviceEventEmitter.addListener('update', this.go_select.bind(this))
    }

    //移除监听
    componentWillUnmount() {
        this.listener.remove();
    }

    //更新点赞信息
    update_dianzan() {
        if (this.state.data.dianzan_username === this.state.denglu_username) {
            fetch('http://8.142.11.85:3000/dongtai/update_dianzan2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title_id: this.state.data.title_id,
                }),
            });
        } else {
            fetch('http://8.142.11.85:3000/dongtai/update_dianzan', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title_id: this.state.data.title_id,
                    denglu_username: this.state.denglu_username,
                }),
            });
        }
        this.get_One();
        DeviceEventEmitter.emit('dianzan_1', 1)
    }

    goComment = (v) => {
        this.context.navigate('Comment_huifu', v);
    }

    go_luntan() {
        DeviceEventEmitter.emit('shuaxin', 1);
        DeviceEventEmitter.emit('myfabu', 1);
        this.props.navigation.goBack();
    }


    putong_dianzan(k) {
        let a = this.state.dianzan
        if (this.state.dianzan[k] === '0') {
            a.splice(k, 1, '1')
        } else {
            a.splice(k, 1, '0')
        }
        this.setState({ dianzan: a })
    }



    render() {
        const { data, comment_zhu, denglu_username, time } = this.state;
        // console.log('data',data);
        // console.log('comment_zhu',comment_zhu);
        // console.log('denglu_username',denglu_username);
        const { modalVisible, imgUrls, currentIndex } = this.state;





        if (data.username === denglu_username) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", backgroundColor: "#7cc0c0" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.go_luntan()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>论坛详情</Text>
                    </View>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isLoding} //设置是否在刷新
                                onRefresh={this.loding.bind(this)} //下拉刷新结束}
                            />
                        }>
                        <BottomSheet
                            isVisible={this.state.isVisible}
                            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
                        >
                            {this.list.map((l, i) => (
                                <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                                    <ListItem.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            ))}
                        </BottomSheet>
                        <View style={{ backgroundColor: 'white' }}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05 }}>
                                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                        <TouchableOpacity activeOpacity={1}>
                                            <Image source={{ uri: data.portrait }} style={styles.touxiang} />
                                        </TouchableOpacity>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={styles.name}>{data.nickname}</Text>
                                            <Text style={{ color: '#aaa' }}>{time}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Entypo name='dots-three-vertical' color='#7cc0c0' size={20} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={data.title === '' ? { height: 0 } : styles.txt}
                                    ellipsizeMode="tail"
                                    numberOfLines={8}>{data.title}</Text>
                                <View style={styles.box}>
                                    <FlatList
                                        contentContainerStyle={styles.listViewStyle}
                                        keyExtractor={(item, index) => (index + '1')}
                                        data={data.pic}
                                        renderItem={this.renderData.bind(this)} />
                                </View>

                                {/* tag标签 */}
                                <View style={data.tag === '' || data.tag === null ? { height: 0, width: 0 } : { flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#7cc0c0', borderRadius: 10, width: width * 0.25, justifyContent: 'center', alignItems: 'center' }}>
                                    <Fontisto name='hashtag' color='#fff' />
                                    <Text style={{ paddingTop: 5, paddingBottom: 5, color: "#fff" }}>{data.tag}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                    <TouchableOpacity activeOpacity={1}>
                                        <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                            <TouchableOpacity onPress={() => { this.update_dianzan(), DeviceEventEmitter.emit('dianzan', 1) }}>
                                                <Ionicons
                                                    name={data.dianzan_username === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                    size={20}
                                                    color={data.dianzan_username === this.state.denglu_username ? 'red' : '#999'}
                                                />
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: 5, color: "#999" }}>{data.dianzan}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons
                                            name="chatbubble-ellipses-outline"
                                            size={20}
                                            color="#999" />
                                        <Text style={{ marginLeft: 5, color: "#999" }}>{data.counts}</Text>
                                    </View>

                                    <TouchableOpacity activeOpacity={1}>
                                        <View style={{ flexDirection: 'row', marginLeft: "20%" }}>
                                            <Ionicons
                                                name="arrow-redo-outline"
                                                size={20}
                                                color="#999" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* 放大图片的遮罩层 */}
                        <Modal animationType={'slide'}
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => { this.setState({ modalVisible: false }); }}>
                            <ImageViewer imageUrls={imgUrls} style={{ flex: 1 }} index={currentIndex} onClick={() => { this.setState({ modalVisible: false }); }} />
                        </Modal>
                        {/* 评论的渲染 */}
                        <View style={{ marginTop: 10 }}>
                            {
                                comment_zhu.map((v, k) => {


                                    //取出年月日
                                    let a = v.date_zhu.slice(0, 10)
                                    //取出时分
                                    let b = v.date_zhu.slice(11, 16)
                                    let time1 = new Date();
                                    let time2 = new Date(v.date_zhu).getTime()
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


                                    if (v.counts > 0) {
                                        return (
                                            <View style={{ marginTop: 10, width: width * 0.9, backgroundColor: "#fff", marginLeft: width * 0.05, borderRadius: 15 }}>
                                                <View key={k} style={{ backgroundColor: '#fff', borderRadius: 15 }}>
                                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: width * 0.025, width: width * 0.85, }}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <Image source={{ uri: v.portrait }} style={styles.touxiang} />
                                                        </TouchableOpacity>
                                                        <View style={{ marginLeft: 10, width: width * 0.8 }}>
                                                            <Text style={styles.name}>{v.nickname}</Text>
                                                            <Text style={{ color: "#333" }}>{v.content}</Text>
                                                            <TouchableOpacity activeOpacity={1} onPress={() => this.goComment(v)}
                                                                style={{ marginTop: 5, width: width * 0.6, backgroundColor: '#eee', height: width * 0.08, justifyContent: 'center', borderRadius: 15 }}>
                                                                <Text style={{ color: 'skyblue', paddingLeft: 10 }}>{'共' + v.counts + '条回复'}</Text>
                                                            </TouchableOpacity>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <TouchableOpacity activeOpacity={1} onPress={() => this.putong_dianzan(k)}>
                                                                        <Ionicons
                                                                            name={this.state.dianzan[k] === '0' ? "heart-outline" : "heart"}
                                                                            size={15}
                                                                            color={this.state.dianzan[k] === '0' ? "black" : "red"} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }} onPress={() => this.goComment(v)}>
                                                                        <Ionicons
                                                                            name="chatbubble-ellipses-outline"
                                                                            size={15}
                                                                            color="black" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <Text style={{ color: '#aaa', marginRight: width * 0.2 }}>{time}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    } else {
                                        return (
                                            <View style={{ marginTop: 10, width: width * 0.9, backgroundColor: "#fff", marginLeft: width * 0.05, borderRadius: 15 }}>
                                                <View key={k} >
                                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: width * 0.025, width: width * 0.85, }}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <Image source={{ uri: v.portrait }} style={styles.touxiang} />
                                                        </TouchableOpacity>
                                                        <View style={{ marginLeft: 10, width: width * 0.8 }}>
                                                            <Text style={styles.name}>{v.nickname}</Text>
                                                            <Text style={{ color: "#333" }}> {v.content}</Text>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <TouchableOpacity activeOpacity={1} onPress={() => this.putong_dianzan(k)}>
                                                                        <Ionicons
                                                                            name={this.state.dianzan[k] === '0' ? "heart-outline" : "heart"}
                                                                            size={15}
                                                                            color={this.state.dianzan[k] === '0' ? "black" : "red"} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }}
                                                                        onPress={() => this.goComment(v)} >
                                                                        <Ionicons
                                                                            name="chatbubble-ellipses-outline"
                                                                            size={15}
                                                                            color="black" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <Text style={{ color: '#aaa', marginRight: width * 0.2 }}>{time}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    }
                                })
                            }
                        </View>
                    </ScrollView>
                    <View style={styles.box3}>
                        <TextInput
                            placeholder="我要评论..."
                            style={styles.txt2}
                            multiline={true}
                            clearTextOnFocus={true}
                            onChangeText={(content) => this.setState({ content })}
                            ref={input => { this.textInput = input }}
                        />

                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { this.pinglun(), Keyboard.dismiss(), this.textInput.clear() }}
                            style={{ marginLeft: width * 0.05, backgroundColor: '#7cc0c0', borderRadius: 50, width: width * 0.12, height: width * 0.12, alignItems: "center", justifyContent: "center", elevation: 5 }}>
                            <FontAwesome
                                name="send-o"
                                color="#fff"
                                size={20} />
                        </TouchableOpacity>
                    </View>


                </View>
            );

        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", backgroundColor: "#7cc0c0" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.go_luntan()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>论坛详情</Text>

                    </View>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isLoding} //设置是否在刷新
                                onRefresh={this.loding.bind(this)} //下拉刷新结束}
                            />
                        }>
                        <View style={{ backgroundColor: 'white' }}>
                            <View style={{ width: width * 0.9, marginLeft: width * 0.05 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 15 }}>
                                    <TouchableOpacity activeOpacity={1}>
                                        <Image source={{ uri: data.portrait }} style={styles.touxiang} />
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.name}>{data.nickname}</Text>
                                        <Text style={{ color: '#aaa' }}>{time}</Text>
                                    </View>
                                </View>
                                <Text style={data.title === '' ? { height: 0 } : styles.txt}
                                    ellipsizeMode="tail"
                                    numberOfLines={8}>{data.title}</Text>
                                <View style={styles.box}>
                                    <FlatList
                                        contentContainerStyle={styles.listViewStyle}
                                        keyExtractor={(item, index) => (index + '1')}
                                        data={data.pic}
                                        renderItem={this.renderData.bind(this)} />
                                </View>


                                {/* tag标签 */}
                                <View style={data.tag === '' || data.tag === null ? { height: 0, width: 0 } : { flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor: '#7cc0c0', borderRadius: 10, width: width * 0.25, justifyContent: 'center', alignItems: 'center' }}>
                                    <Fontisto name='hashtag' color='#fff' />
                                    <Text style={{ paddingTop: 5, paddingBottom: 5, color: "#fff" }}>{data.tag}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                    <TouchableOpacity activeOpacity={1}>
                                        <View style={{ flexDirection: 'row', marginLeft: "10%" }}>
                                            <TouchableOpacity onPress={() => { this.update_dianzan(), DeviceEventEmitter.emit('dianzan', 1) }}>
                                                <Ionicons
                                                    name={data.dianzan_username === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                    size={20}
                                                    color={data.dianzan_username === this.state.denglu_username ? 'red' : '#999'}
                                                />
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: 5, color: "#999" }}>{data.dianzan}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons
                                            name="chatbubble-ellipses-outline"
                                            size={20}
                                            color="#999" />
                                        <Text style={{ marginLeft: 5, color: "#999" }}>{data.counts}</Text>
                                    </View>

                                    <TouchableOpacity activeOpacity={1}>
                                        <View style={{ flexDirection: 'row', marginLeft: "20%" }}>
                                            <Ionicons
                                                name="arrow-redo-outline"
                                                size={20}
                                                color="#999" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/* 放大图片的遮罩层 */}
                        <Modal animationType={'slide'}
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => { this.setState({ modalVisible: false }); }}>
                            <ImageViewer imageUrls={imgUrls} style={{ flex: 1 }} index={currentIndex} onClick={() => { this.setState({ modalVisible: false }); }} />
                        </Modal>
                        {/* 评论的渲染 */}
                        <View style={{ marginTop: 10 }}>
                            {
                                comment_zhu.map((v, k) => {
                                    if (v.counts > 0) {
                                        return (
                                            <View style={{ marginTop: 10, width: width * 0.9, backgroundColor: "#fff", marginLeft: width * 0.05, borderRadius: 15 }}>
                                                <View key={k} style={{ backgroundColor: '#fff', borderRadius: 15 }}>
                                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: width * 0.025, width: width * 0.85, }}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <Image source={{ uri: v.portrait }} style={styles.touxiang} />
                                                        </TouchableOpacity>
                                                        <View style={{ marginLeft: 10, width: width * 0.8 }}>
                                                            <Text style={styles.name}>{v.nickname}</Text>
                                                            <Text>{v.content}</Text>
                                                            <TouchableOpacity activeOpacity={1} onPress={() => this.goComment(v)}
                                                                style={{ marginTop: 5, width: width * 0.6, backgroundColor: '#eee', height: width * 0.08, justifyContent: 'center', borderRadius: 15 }}>
                                                                <Text style={{ color: 'skyblue', paddingLeft: 10 }}>{'共' + v.counts + '条回复'}</Text>
                                                            </TouchableOpacity>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ heart: !this.state.heart })}>
                                                                        <Ionicons
                                                                            name={this.state.heart === false ? "heart-outline" : "heart"}
                                                                            size={15}
                                                                            color={this.state.heart === false ? "black" : "red"} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }} onPress={() => this.goComment(v)}>
                                                                        <Ionicons
                                                                            name="chatbubble-ellipses-outline"
                                                                            size={15}
                                                                            color="black" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <Text style={{ color: '#aaa', marginRight: width * 0.2 }}>{time}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    } else {
                                        return (
                                            <View style={{ marginTop: 10, width: width * 0.9, backgroundColor: "#fff", marginLeft: width * 0.05, borderRadius: 15 }}>
                                                <View key={k} >
                                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: width * 0.025, width: width * 0.85, }}>
                                                        <TouchableOpacity activeOpacity={1}>
                                                            <Image source={{ uri: v.portrait }} style={styles.touxiang} />
                                                        </TouchableOpacity>
                                                        <View style={{ marginLeft: 10, width: width * 0.8 }}>
                                                            <Text style={styles.name}>{v.nickname}</Text>
                                                            <Text style={{ color: "#333" }}>{v.content}</Text>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ heart: !this.state.heart })}>
                                                                        <Ionicons
                                                                            name={this.state.heart === false ? "heart-outline" : "heart"}
                                                                            size={15}
                                                                            color={this.state.heart === false ? "black" : "red"} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity activeOpacity={1} style={{ marginLeft: 10 }}
                                                                        onPress={() => this.goComment(v)}>
                                                                        <Ionicons
                                                                            name="chatbubble-ellipses-outline"
                                                                            size={15}
                                                                            color="black" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <Text style={{ color: '#aaa', marginRight: width * 0.2 }}>{time}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        );
                                    }
                                })
                            }
                        </View>
                    </ScrollView>
                    <View style={styles.box3}>
                        <TextInput
                            placeholder="我要评论..."
                            style={styles.txt2}
                            multiline={true}
                            clearTextOnFocus={true}
                            onChangeText={(content) => this.setState({ content })}
                            ref={input => { this.textInput = input }}
                        />

                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { this.pinglun(), Keyboard.dismiss(), this.textInput.clear() }}
                            style={{ marginLeft: width * 0.05, backgroundColor: '#7cc0c0', borderRadius: 50, width: width * 0.12, height: width * 0.12, alignItems: "center", justifyContent: "center", elevation: 5 }}>
                            <FontAwesome
                                name="send-o"
                                color="#fff"
                                size={20} />
                        </TouchableOpacity>
                    </View>


                </View>
            );

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
        //backgroundColor:'blue',
        overflow: 'hidden',
        borderRadius: 15,
        marginTop: 10,
    },
    touxiang: {
        height: 50,
        width: 50,
        borderRadius: 50,
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
    box3: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.08,
        backgroundColor: '#dcdcdc',
        elevation: 5,

        width: width,
        backgroundColor: "#fff"

    },
    txt2: {
        backgroundColor: '#f1f1f1',
        paddingLeft: 15,
        paddingRight: 15,
        width: '70%',
        height: 40,
        borderRadius: 30,
        marginRight: 0,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: "5%"
    },
});
