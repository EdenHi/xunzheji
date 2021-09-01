import React, { Component } from 'react'
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView, Modal, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import {NavigationContext} from '@react-navigation/native';

const { width, height } = Dimensions.get("window")

export default class Homepagebook extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {
                    title: "",
                    img: "https://bkimg.cdn.bcebos.com/pic/a08b87d6277f9e2fbfd2794a1130e924b999f389?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"
                },
                {
                    title: "",
                    img: "http://t15.baidu.com/it/u=3242792747,33567011&fm=224&app=112&f=JPEG?w=368&h=500&s=5DB8AD57718DEAFE84536DEB0300503A"
                },
                {
                    title: "",
                    img: "http://t14.baidu.com/it/u=2886258601,610126850&fm=224&app=112&f=JPEG?w=500&h=500&s=25307D93442F57AD70CC0D630300E062"
                },
                {
                    title: "",
                    img: "https://img.dushu.com/2012/10/08/00162664135308.jpg_200.jpg"
                },
                {
                    title: "",
                    img: "https://img0.baidu.com/it/u=2944285600,2767547880&fm=26&fmt=auto&gp=0.jpg"
                },
            ],
            data: [{
                image: 'https://img2.baidu.com/it/u=1605893453,1786566990&fm=26&fmt=auto&gp=0.jpg',
                title: '作者：周咏南1',
                connent: 'asdasd',
            }],
            data2: [{
                image: 'http://t14.baidu.com/it/u=976136269,2791709464&fm=224&app=112&f=JPEG?w=500&h=500&s=3D2C70339B9572DA1B7C04EE01007022',
                title: '作者：周咏南11',
                connent: 'asdasd',
            }],
            modalVisible: false,
            modalVisible2: false,
        }
    }


    _openModalWin(index) {
        console.log('1:',index)
        if (index == 3) {
            this.setState({
                modalVisible: true,
                data: [
                    {
                        image: 'https://img2.baidu.com/it/u=1605893453,1786566990&fm=26&fmt=auto&gp=0.jpg',
                        title: '作者：周咏南11',
                        connent: '男，汉族，1960年3月生，浙江舟山人',
                        connent2: '1988年3月加入中国共产党，1982年4月参加工作，大学本科学历',
                        connent3: '现任浙江日报报业集团副总编辑、党委委员，浙报传媒控股集团有限公司董事',
                    }
                ],
            })
        }else if (index == 4) {
            this.setState({
                modalVisible: true,
                data: [
                    {
                        image: 'https://img2.baidu.com/it/u=1605893453,1786566990&fm=26&fmt=auto&gp=0.jpg',
                        title: '作者：周咏南12',
                        connent: '男，汉族，1960年3月生，浙江舟山人',
                        connent2: '1988年3月加入中国共产党，1982年4月参加工作，大学本科学历',
                        connent3: '现任浙江日报报业集团副总编辑、党委委员，浙报传媒控股集团有限公司董事',
                    }
                ],
            })
        }else if (index == 5) {
            this.setState({
                modalVisible: true,
                data: [
                    {
                        image: 'https://img2.baidu.com/it/u=1605893453,1786566990&fm=26&fmt=auto&gp=0.jpg',
                        title: '作者：周咏南13',
                        connent: '男，汉族，1960年3月生，浙江舟山人',
                        connent2: '1988年3月加入中国共产党，1982年4月参加工作，大学本科学历',
                        connent3: '现任浙江日报报业集团副总编辑、党委委员，浙报传媒控股集团有限公司董事',
                    }
                ],
            })
        }else if (index == 6) {
            this.setState({
                modalVisible: true,
                data: [
                    {
                        image: 'https://img2.baidu.com/it/u=1605893453,1786566990&fm=26&fmt=auto&gp=0.jpg',
                        title: '作者：周咏南',
                        connent: '男，汉族，1960年3月生，浙江舟山人',
                        connent2: '1988年3月加入中国共产党，1982年4月参加工作，大学本科学历',
                        connent3: '现任浙江日报报业集团副总编辑、党委委员，浙报传媒控股集团有限公司董事',
                    }
                ],
            })
        }else if (index == 7) {
            this.setState({
                modalVisible: true,
                data: [
                    {
                        image: 'https://img2.baidu.com/it/u=1605893453,1786566990&fm=26&fmt=auto&gp=0.jpg',
                        title: '作者：周咏南',
                        connent: '男，汉族，1960年3月生，浙江舟山人',
                        connent2: '1988年3月加入中国共产党，1982年4月参加工作，大学本科学历',
                        connent3: '现任浙江日报报业集团副总编辑、党委委员，浙报传媒控股集团有限公司董事',
                    }
                ],
            });
        }
    }
    _closeModalWin = () => {
        this.setState({ modalVisible: false });
    }

    _openModalWin2(index) {
        if (index == 3) {
            this.setState({
                modalVisible2: true,
                data2: [
                    {
                        title: '内容简介：',
                        connent: '本书结合改革开放40年来中国市场经济发展变化的大背景，以40位不同职业、不同生活背景、不同阶层的普通人口吻，用见证者的视角再现普通人与中国社会变迁同呼吸、共命运的奋斗历程，展示改革开放40年的社会变迁及个人命运际遇的交汇。',
                    }
                ]
            })
        }
        if (index == 4) {
            this.setState({
                modalVisible2: true,
                data2: [
                    {
                        title: '内容简介1：',
                        connent: '本书结合改革开放40年来中国市场经济发展变化的大背景，以40位不同职业、不同生活背景、不同阶层的普通人口吻，用见证者的视角再现普通人与中国社会变迁同呼吸、共命运的奋斗历程，展示改革开放40年的社会变迁及个人命运际遇的交汇。',
                    }
                ]
            })
        }
        if (index == 5) {
            this.setState({
                modalVisible2: true,
                data2: [
                    {
                        title: '内容简介2：',
                        connent: '本书结合改革开放40年来中国市场经济发展变化的大背景，以40位不同职业、不同生活背景、不同阶层的普通人口吻，用见证者的视角再现普通人与中国社会变迁同呼吸、共命运的奋斗历程，展示改革开放40年的社会变迁及个人命运际遇的交汇。',
                    }
                ]
            })
        }
        if (index == 6) {
            this.setState({
                modalVisible2: true,
                data2: [
                    {
                        title: '内容简介3：',
                        connent: '本书结合改革开放40年来中国市场经济发展变化的大背景，以40位不同职业、不同生活背景、不同阶层的普通人口吻，用见证者的视角再现普通人与中国社会变迁同呼吸、共命运的奋斗历程，展示改革开放40年的社会变迁及个人命运际遇的交汇。',
                    }
                ]
            })
        }
        if (index == 7) {
            this.setState({
                modalVisible2: true,
                data2: [
                    {
                        title: '内容简介4：',
                        connent: '本书结合改革开放40年来中国市场经济发展变化的大背景，以40位不同职业、不同生活背景、不同阶层的普通人口吻，用见证者的视角再现普通人与中国社会变迁同呼吸、共命运的奋斗历程，展示改革开放40年的社会变迁及个人命运际遇的交汇。',
                    }
                ]
            })
        }
    }
    _closeModalWin2 = () => {
        this.setState({  modalVisible2: false });
    }


     

    page(index) {
        console.log(index)
        if (index === 3) {
            this.props.navigation.navigate('book_0',{ii:3})
        }
        if (index === 4) {
            this.props.navigation.navigate('book_1',{ii:4})
        }
        if (index === 5) {
            this.props.navigation.navigate('book_1',{ii:5})
        }
        if (index === 6) {
            this.props.navigation.navigate('book_6',{ii:6})
        }
        if (index === 7) {
            this.props.navigation.navigate('book_6',{ii:7})
        }
    }
    _renderItem({ item, index }) {
        return (
            <View style={{ width:width*0.8,flexDirection: "row", marginLeft: -20, backgroundColor: "#fff", elevation: 5,bottom:5,borderRadius: 10, marginBottom: 5, marginTop: 5, alignItems: "center", height: width * 0.45,borderWidth:1,borderColor:"#7cc0c0" }} >
                <TouchableOpacity activeOpacity={1} onPress={() => this.page(index)}>
                    <ImageBackground borderRadius={10} style={{ width: width * 0.35, height: width * 0.4, marginLeft: 10 }} resizeMode="stretch" source={{ uri: item.img }}>
                        <Text style={{ flexWrap: "wrap", width: 15, marginLeft: 10, fontWeight: "bold", marginTop: 10,color:"#333" }}>{item.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                {/* <View style={{width:width*0.3,marginLeft:10}}>
                    <View><Text style={{fontSize:13}}>作者：周咏南</Text></View>
                    <View><Text style={{fontSize:13}}>一部浙江改革开放史，就是一部浙江民营企业家历尽艰辛、书写传奇的创业史，就是一部浙江民营经济风起云涌、波澜壮阔的崛起史，就是一部浙商精神接续传承、丰富升华的发展史。</Text></View>
                </View> */}
                <View style={{ justifyContent: "center", justifyContent: "space-around", borderWidth: 1, width: width * 0.38, height: width * 0.38, borderRadius: 10, borderColor: "#7cc0c0", marginLeft: 5 }}>
                    <TouchableOpacity activeOpacity={1} onPress={() => {this._openModalWin(index)}} >
                        <View style={{ marginLeft: 10, flexDirection: "row", alignItems: "center" }}>
                            <Entypo style={{ marginLeft: 10 }} color='#7cc0c0' name='user' size={25} />
                            <Text style={{ fontSize: 13, color: '#7cc0c0', marginLeft: 10 }}>了解作者</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this._openModalWin2(index)}>
                        <View style={{ marginLeft: 10, flexDirection: "row", alignItems: "center" }}>
                            <FontAwesome style={{ marginLeft: 10 }} name='bars' color='#7cc0c0' size={25} />
                            <Text style={{ fontSize: 13, color: '#7cc0c0', marginLeft: 10 }}>查看简介</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                   onPress={() => this.context.navigate('musicPlayer')}
                     >
                        <View style={{ marginBottom: 10, marginLeft: 10, flexDirection: "row", alignItems: "center" }}>
                            <SimpleLineIcons style={{ marginLeft: 10 }} name='earphones' color='#7cc0c0' size={25} />
                            <Text style={{ fontSize: 13, color: '#7cc0c0', marginLeft: 10 }}>聆听书籍</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View >
                    <Carousel
                        autoplay={true}
                        loop={true}
                        swiper={true}
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        inactiveSlideScale={0.8}
                        renderItem={(e) => this._renderItem(e)}
                        sliderWidth={width * 0.9}
                        itemWidth={280}
                        onSnapToItem={index => this.setState({ activeIndex: index })}
                    />
                </View>
                <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible} // 是否显示 modal 窗口
                    onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                // onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                >
                    <TouchableOpacity activeOpacity={1}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0,0,0,0.5)', }}
                        onPress={this._closeModalWin}
                    >
                        <View style={{ marginHorizontal: width * 0.05, height: height * 0.3, backgroundColor: "#fff", width: width * 0.9, borderRadius: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image style={{ width: width * 0.35, height: width * 0.5, borderRadius: 10 }} resizeMode="stretch" source={{ uri: this.state.data[0].image }} />
                            <View style={{ width: width * 0.4, marginLeft: 10 }}>
                                <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold",color:"#333"  }}>{this.state.data[0].title}</Text>
                                <Text style={{ marginTop: 5, fontSize: 13,color:"#333"  }}>{this.state.data[0].connent}</Text>
                                <Text style={{ marginTop: 5, fontSize: 13,color:"#333" }}>{this.state.data[0].connent2}</Text>
                                <Text style={{ marginTop: 5, fontSize: 13 ,color:"#333" }}>{this.state.data[0].connent3}</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible2} // 是否显示 modal 窗口

                    onRequestClose={() => { this._closeModalWin2(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                // onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                >
                    <TouchableOpacity activeOpacity={1}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0,0,0,0.5)', }}
                        onPress={this._closeModalWin2}
                    >
                        <View style={{ marginHorizontal: width * 0.05, height: height * 0.3, backgroundColor: "#fff", width: width * 0.9, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <View style={{ marginHorizontal: width * 0.1 }}>
                                <Text style={{ marginTop: 5, fontSize: 15, fontWeight: "bold" }}>{this.state.data2[0].title}</Text>
                                <Text style={{ marginTop: 5, fontSize: 13 }}>{this.state.data2[0].connent}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}
