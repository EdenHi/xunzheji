/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import axios from 'axios';
import {
    View, Image, FlatList, Animated, Modal,
    Easing, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, AsyncStorage, DeviceEventEmitter
} from 'react-native';
const { height, width } = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';
import randId from '../../components/comment/randId';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

const tags = [];
export default class Fabu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fayan: '',
            arr: [],
            uuid: randId.uuid(8),
            username: '',
            progress: new Animated.Value(0),
            modalVisible: false,
            tag: [],
        };
    }

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
        }).start();

        this.listener = DeviceEventEmitter.addListener('tag', this.tag.bind(this))
    }

    tag(tag) {
        tags.push(tag)
        this.setState({
            tag: tags
        })
        console.log('fabu', tags);
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    //加号图片的存放
    tianjia() {
        if (this.state.arr != null && this.state.arr.length >= 9) {
            //这里的判断根据所传图片张数定
            return;
        } else {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this._openPicker()}>
                    <Image source={{ uri: 'http://8.142.11.85:3000/public/images/addimg.png' }} style={{ width: 100, height: 100, marginLeft: "10%" }} />
                </TouchableOpacity>
            );
        }
    }

    //返回清空tags
    goBack() {
        this.props.navigation.goBack();
        let arr = tags.length;
        tags.splice(0, arr);
    }

    _fetchImage(image) {
        let url = 'http://8.142.11.85:3000/dongtai/releaseDongtai';
        let head = { uri: image.path, type: image.mime, name: image.path.split('/').pop() };
        let formData = new FormData();
        formData.append('files', head); // 这里的 file 要与后台名字对应。
        formData.append('uuid', this.state.uuid);
        //   formData.append('title',this.state.fayan);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((josn) => {
                //      let  source = ret.data.images[0].oUrl;
                console.log('josn', josn);
            });
    }
    _fetchText() {
        var date = new Date();
        AsyncStorage.getItem('username', (error, result) => {
            if (!error) {
                this.setState({
                    username: result,
                });
                console.log('username', result)
                fetch('http://8.142.11.85:3000/dongtai/title', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: this.state.fayan,
                        uuid: this.state.uuid,
                        fabiao_time: date,
                        username: result,
                        tag: this.state.tag[0],
                    }),
                });
                let aa = tags.length;
                tags.splice(0, aa);
            } else {
                console.log('获取数据失败', error);
            }
        });
    }

    //发布成功
    _goget() {
        const arr = this.state.arr;
        DeviceEventEmitter.emit('shuaxin', 1);
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) { this._fetchImage(arr[i]); }
            this._fetchText();
            this.props.navigation.navigate('BtnRoute');
            DeviceEventEmitter.emit('myfabu', 1)
        } else {
            this._fetchText();
            this.props.navigation.navigate('BtnRoute');
            DeviceEventEmitter.emit('myfabu', 1)
        }
    }
    //打开本地图册
    _openPicker() {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
            multiple: true,
            maxFiles: 9,
        }).then(image => {
            console.log('imag', image);

            // this.state.arr.push(image)
            // this.setState({
            //     arr:image,
            // });
            const { arr } = this.state;
            for (var i = 0; i < image.length; i++) {
                arr.push(image[i]);
            }
            this.setState({ arr })
            //     console.log('arr',arr[1])
        });
    }
    _openModalWin = () => {
        this.setState({ modalVisible: true });
    }

    _closeModalWin = () => {
        this.setState({ modalVisible: false });
    }
    render() {
        const { navigation } = this.props;
        const { arr } = this.state;
        return (
            <View style={styles.container}>
                <LinearGradient style={{ width: width, height: "100%", alignItems: "center" }} colors={["#7cc0bf", "#fff", "#fff"]} >
                    <View style={styles.box}>
                        <TouchableOpacity
                            activeOpacity={1}>
                            <AntDesign onPress={() => this.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>发布动态</Text>
                        <TouchableOpacity
                            onPress={this._openModalWin}
                            activeOpacity={1}
                        >
                            <FontAwesome
                                name="send-o"
                                color="#fff"
                                size={20} />
                        </TouchableOpacity>
                        <Modal
                            animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                            transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                            visible={this.state.modalVisible} // 是否显示 modal 窗口
                            onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                            onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
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
                                                <LottieView source={require('../../../animal/success.json')} autoPlay loop progress={this.state.progress} />
                                            </View>
                                            <View style={{
                                                width: '100%',
                                                height: '25%',
                                                alignItems: 'center',

                                            }}>
                                                <Text style={{ fontSize: 20, color: "#7cc0c0" }}>发布成功</Text>
                                            </View>
                                            <TouchableOpacity style={styles.modalButtonStyle}
                                                onPress={() => {
                                                    this._closeModalWin()
                                                    this._goget()

                                                }}

                                            >
                                                <Text style={{ fontSize: 15 }}>确定</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </Modal>
                    </View>
                    <View style={{ width: width * 0.9, height: height, backgroundColor: "#fff", borderRadius: 15 }}>
                        <View style={{ height: 200, width: "100%" }}>
                            <TextInput
                                style={styles.tx}
                                multiline={true}
                                placeholder="这一刻的想法..."
                                defaultValue={this.state.fayan}
                                onChangeText={(fayan) => this.setState({ fayan: fayan })}
                            />
                        </View>

                        {/* 选择标签 */}
                        <View style={{// 主轴方向
                            flexDirection: 'row',
                            // 一行显示不下,换一行
                            flexWrap: 'wrap',
                            // 侧轴方向
                            alignItems: 'center', // 必须设置,否则换行不起作用
                        }}>
                            {
                                this.state.tag.map((v, k) => {
                                    return (
                                        <View key={k} style={{ alignItems: 'flex-end' }}>
                                            <View style={{ marginLeft: 10, width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee', borderRadius: 15, position: 'relative' }}
                                                activeOpacity={1}>
                                                <Text style={{ color: 'orange', padding: 5 }}>{v}</Text>
                                            </View>
                                            <AntDesign
                                                name='closecircle'
                                                size={15}
                                                style={{ position: 'absolute' }}
                                                onPress={() => { tags.splice(k, 1), this.setState({ tag: tags }) }} />
                                        </View>
                                    )
                                })
                            }
                            <TouchableOpacity style={{ marginLeft: 10, marginBottom: 20, width: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee', borderRadius: 15 }}
                                onPress={() => this.props.navigation.navigate('tag')}>
                                <Text style={{ color: 'orange', padding: 5 }}>#话题</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{// 主轴方向
                            flexDirection: 'row',
                            // 一行显示不下,换一行
                            flexWrap: 'wrap',
                            // 侧轴方向
                            alignItems: 'center', // 必须设置,否则换行不起作用
                        }}>

                            {
                                this.state.arr.map((v, k) => {
                                    return (
                                        <View style={styles.Box} key={k}>
                                            <Image style={{ height: (width - 100) / 3, width: (width * 0.84 - 48) / 3, position: 'relative' }} source={{ uri: v.path }} />
                                            <TouchableOpacity
                                                activeOpacity={0.5}
                                                onPress={() => { arr.splice(k, 1), this.setState({ arr }) }}
                                                style={{ position: 'absolute' }}
                                            >
                                                <AntDesign
                                                    name='closecircle'
                                                    size={20} />
                                            </TouchableOpacity>

                                        </View>
                                    );
                                })
                            }
                            {this.tianjia()}
                        </View>



                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center"


    },
    Box: {
        marginRight: 10,
        marginBottom: 10,
        height: (width - 100) / 3,
        width: (width * 0.84 - 48) / 3,
        alignItems: 'flex-end',
        marginLeft: width * 0.03
    },
    box: {
        width: width * 0.9,
        height: height * 0.07,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        alignItems: "center"
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tx: {

        marginLeft: "2%"

    },
    txt: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderWidth: 3,
    },
    btn: {
        backgroundColor: 'green',
    },
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