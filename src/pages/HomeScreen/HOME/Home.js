/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Easing, Animated, Image, Dimensions, ImageBackground, BVLinearGradient, DeviceEventEmitter, TouchableOpacity, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper';
import Card from '../../../components/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Characters from './Characters';
import ShiCha from './ShiCha';
import ShiCha2 from './shicha2';
import LinearGradient from 'react-native-linear-gradient';
import Demo from './Demo';
import EZSwiper from 'react-native-ezswiper';
import Horiz from '../../../components/horiz';
import LottieView from 'lottie-react-native';
import Homepagebook from '../Homepagebook'
import ScrollTopView from 'react-native-scrolltotop';
import { Button } from 'react-native';
import ShangBang from './ShangBang';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');



export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: new Animated.Value(0),
            username: '',
            isShowToTop: true,

            isLoding: false,
            showpage: 5,
            modalVisible: false,
            currentPage: 0,
            activeIndex: 0,
            f: 1,
            carouselItems: [
                {
                    img: "http://47.100.78.254:3000/public/images/a.png",
                },
                {
                    img: "http://47.100.78.254:3000/public/images/b.png",
                },
                {
                    img: "http://47.100.78.254:3000/public/images/c3.png",
                },

            ],

        }
    }
    roadJump(e) {
        if (e == 0) {
            this.props.navigation.navigate('Road', {
                username: this.state.username,
            })
        } else if (e == 1) {
            this.props.navigation.navigate('Road2', {
                username: this.state.username,
            })
        } else if (e == 2) {
            this.props.navigation.navigate('Road3', {
                username: this.state.username,
            })
        }


    }
    _renderItem({ item, index }) {
        return (

            <TouchableOpacity style={{

                borderRadius: 15,
                height: 200,
                width: "90%",
                elevation: 5,
                backgroundColor: global.backColor
            }} activeOpacity={1} onPress={() => {

                this.roadJump(index - 3)
            }}>
                <ImageBackground resizeMode="stretch" imageStyle={{ borderRadius: 15, }} style={{ width: "100%", height: "100%", flexDirection: "column-reverse" }} source={{ uri: item.img }} >

                </ImageBackground>
            </TouchableOpacity>



        )
    }


    //获取路线信息
    get_shuju() {
        AsyncStorage.getItem('username', (error, result) => {
            if (!error) {
                this.setState({
                    username: result,
                });
                console.log('username', this.state.username);
            }
        })
    }

    componentDidMount() {
        console.log(this.state.username);
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 3500,
            easing: Easing.linear,
        }).start();

        this.get_shuju();
        this.listener = DeviceEventEmitter.addListener('yanse', this.f.bind(this))
    }

    f() {
        this.setState({ f: this.state.f + 1 })
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    _onScroll(e) {
        const offsetY = e.nativeEvent.contentOffset.y;

        if (offsetY > 100) {
            this.setState({
                isShowToTop: true
            })
        } else {
            this.setState({
                isShowToTop: false
            })
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={{ alignItems: 'center', }}>
                <LinearGradient style={{ width }} colors={[global.mainColor, global.backColor, global.backColor]} >
                    <View style={{ height: height * 0.08, width: width, flexDirection: "row", alignItems: "center", borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                        <Image source={require("../../img/logo.png")} style={{ width: width * 0.5, height: height * 0.25, marginLeft: -width * 0.05 }}>
                        </Image>
                    </View>
                    <View style={{ alignItems: 'center', height: height * 0.88 }}>
                        <ScrollView
                            ref={component => this._scrollView = component}
                            //     onScroll={(e) => {
                            //         console.log(Math.ceil(e.nativeEvent.contentOffset.y)); if (Math.ceil(e.nativeEvent.contentOffset.y) == 800) {
                            //             this.childList.move()
                            //         } else if (Math.ceil(e.nativeEvent.contentOffset.y) == 420) {
                            //             this.childList.stopSlide()
                            //         }
                            //     }
                            // }
                            renderScrollComponent={(props) => {
                                return <ScrollView style={{ backgroundColorL: global.backColor }}  {...props} />
                            }}
                            showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.95 }}>
                                <View style={{ marginBottom: -5, width: width, height: height * 0.22 }}>
                                    <ShiCha2 navigation={this.props.navigation} />
                                    {/* <ShiCha  navigation={this.props.navigation} /> */}
                                </View>
                                <View style={{ height: 220, backgroundColor: global.backColor, borderRadius: 10, marginTop: 10, justifyContent: 'center' }} >
                                    <View>
                                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('History')} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginBottom: 10 }}>
                                            <View style={{ backgroundColor: global.mainColor, width: 3, height: 29, marginLeft: 10 }} />
                                            <View style={{ marginLeft: 10, width: width * 0.75 }}>
                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: global.mainColor }}>浙商历史推荐</Text>
                                                <Text style={{ fontSize: 9, fontWeight: 'bold', color: global.mainColor }}>ZHEJIANG MERCHANTS HISTORY RECOMMENDATION</Text>
                                            </View>
                                            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('History')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor }}>
                                                <LottieView source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                        <View style={{ width: width * 0.9, marginLeft: width * 0.025 }}>
                                            <ScrollView
                                                horizontal={true} showsHorizontalScrollIndicator={false}
                                            >
                                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Zs', { wenzhang_id: 1 })} activeOpacity={1}>
                                                    < View style={{ height: 150, marginBottom: 10, elevation: 5, width: width * 0.8, marginLeft: 5, marginRight: 10, elevation: 5 }}>
                                                        <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.8, marginRight: 20 }} borderRadius={10} source={{ uri: 'http://47.100.78.254:3000/public/images/zs1.jpeg' }}>
                                                            <View style={{ height: 150, borderRadius: 10, shadowRadius: 15, padding: 15, width: width * 0.8 }}>
                                                                <View style={{ flex: 3 }} />
                                                                <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>浙江商帮的崛起</Text></View>
                                                                <View style={{ flex: 1 }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>宁波商帮</Text></View></TouchableOpacity>
                                                                        <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>龙游商帮</Text></View></TouchableOpacity>
                                                                        <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>南浔商帮</Text></View></TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </ImageBackground>
                                                    </View>
                                                </TouchableOpacity>
                                                <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.8, marginRight: 10 }} borderRadius={10} source={{ uri: 'https://img0.baidu.com/it/u=3608384836,3487578051&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=301' }}>
                                                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Topic1', { wenzhang_id: 2 })} activeOpacity={1} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                        <View style={{ flex: 3 }} />
                                                        <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>“浙商人”在非洲</Text></View>
                                                        <View style={{ flex: 1 }}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>浙江商人</Text></View></TouchableOpacity>
                                                                <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>尼日利亚</Text></View></TouchableOpacity>
                                                                <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>非洲</Text></View></TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                </ImageBackground>
                                                <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.8, marginRight: 10 }} borderRadius={10} source={{ uri: 'https://img1.baidu.com/it/u=3947839322,680992620&fm=26&fmt=auto&gp=0.jpg' }}>
                                                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Topic2', { wenzhang_id: 3 })} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                        <View style={{ flex: 3 }} />
                                                        <View style={{ flex: 2 }}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: height * 0.015 }}>浙江“优秀建设者”</Text></View>
                                                        <View style={{ flex: 1 }}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>浙商观察</Text></View></TouchableOpacity>
                                                                <TouchableOpacity activeOpacity={1}><View style={styles.Comment}><Text style={{ fontSize: 12, color: global.backColor }}>浙江</Text></View></TouchableOpacity>
                                                                {/* <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>非洲</Text></View></TouchableOpacity> */}
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                </ImageBackground>
                                            </ScrollView>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: height * 0.4, backgroundColor: global.backColor, borderRadius: 10, marginTop: 10 }} >
                                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Book')} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginBottom: 10 }}>
                                        <View style={{ backgroundColor: global.mainColor, width: 3, height: 29, marginLeft: 10 }} />
                                        <View style={{ marginLeft: 10, width: width * 0.75 }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: global.mainColor }}>浙商必知丛书</Text>
                                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: global.mainColor }}>ZHEJIANG MERCHANTS MUST KNOW SERIES</Text>
                                        </View>
                                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Book')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor, }}>
                                            <LottieView source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                    {/* book top */}
                                    <View style={{ borderWidth: 1, height: height * 0.4 * 0.4, borderTopRightRadius: 10, borderTopLeftRadius: 10, flexDirection: 'row' }}>
                                        <View style={{ borderWidth: 1, width: width * 0.195, height: height * 0.4 * 0.35, marginTop: 5, marginLeft: '3.15%' }}>

                                        </View>
                                        <View style={{ borderWidth: 1, borderColor: 'green', width: '72.5%' }}>
                                            <Text style={{borderWidth:1,fontSize:20,marginTop:height*0.01,paddingLeft:10}}>😄</Text>
                                            <Text style={{borderWidth:1,marginTop:height*0.02}}></Text>
                                            <Text style={{borderWidth:1,marginTop:height*0.02}}></Text>
                                        </View>
                                    </View>
                                    {/* book 1 */}
                                    <View style={{ borderWidth: 1, height: height * 0.4 * 0.46, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, flexDirection: 'row' }}>
                                        <View style={{ width: '22%', borderWidth: 1, borderColor: 'red', height: '100%', marginLeft: '2.5%' }}>
                                            <View style={{ borderWidth: 1, width: '95%', height: '70%', marginTop: 5, marginLeft: '2.5%' }}>

                                            </View>
                                            <Text style={{borderWidth:1,width:'95%',marginLeft:'2.5%'}}></Text>
                                            <View style={{borderWidth:1,width:'95%',marginLeft:'2.5%',height:'12.5%'}}></View>
                                        </View>
                                        {/* book 2 */}
                                        <View style={{ width: '22%', borderWidth: 1, borderColor: 'red', height: '100%', marginLeft: '2.5%' }}>
                                            <View style={{ borderWidth: 1, width: '95%', height: '70%', marginTop: 5, marginLeft: '2.5%' }}>

                                            </View>
                                            <Text style={{borderWidth:1,width:'95%',marginLeft:'2.5%'}}></Text>
                                            <View style={{borderWidth:1,width:'95%',marginLeft:'2.5%',height:'12.5%'}}></View>
                                        </View>
                                        {/* book 3 */}
                                        <View style={{ width: '22%', borderWidth: 1, borderColor: 'red', height: '100%', marginLeft: '2.5%' }}>
                                            <View style={{ borderWidth: 1, width: '95%', height: '70%', marginTop: 5, marginLeft: '2.5%' }}>

                                            </View>
                                            <Text style={{borderWidth:1,width:'95%',marginLeft:'2.5%'}}></Text>
                                            <View style={{borderWidth:1,width:'95%',marginLeft:'2.5%',height:'12.5%'}}></View>
                                        </View>
                                        {/* book 4 */}
                                        <View style={{ width: '22%', borderWidth: 1, borderColor: 'red', height: '100%', marginLeft: '2.5%' }}>
                                            <View style={{ borderWidth: 1, width: '95%', height: '70%', marginTop: 5, marginLeft: '2.5%' }}>

                                            </View>
                                            <Text style={{borderWidth:1,width:'95%',marginLeft:'2.5%'}}></Text>
                                            <View style={{borderWidth:1,width:'95%',marginLeft:'2.5%',height:'12.5%'}}></View>
                                        </View>
                                    </View>




                                </View>
                                <View style={{ height: height * 0.35, backgroundColor: global.backColor, marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft: 10 }}>
                                        <View style={{ backgroundColor: global.mainColor, width: 3, height: 29 }} />
                                        <View style={{ width: width * 0.75, marginRight: 10 }}>
                                            <Text onPress={() => {

                                                this.props.navigation.navigate('Road', {
                                                    initialPage: 0,
                                                    username: this.state.username,
                                                    road1: this.state.road1,
                                                    road2: this.state.road2,
                                                    road3: this.state.road3,
                                                    road4: this.state.road4,
                                                    road5: this.state.road5,
                                                    road6: this.state.road6,
                                                    road7: this.state.road7,
                                                    road8: this.state.road8,
                                                    road9: this.state.road9,
                                                    road10: this.state.road10
                                                })
                                            }} style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', color: global.mainColor }}

                                            >重走鸡毛换糖之路</Text>
                                            <Text style={{ marginLeft: 10, fontSize: 9, fontWeight: 'bold', color: global.mainColor }}>TAKE THE ROAD OF CHICKEN FEATHER FOR SUGAR AGAIN</Text>
                                        </View>
                                        {/* <TouchableOpacity activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '30%', color: global.mainColor }}>
                                            <AntDesign onPress={()=>{this.props.navigation.navigate('Road')}} style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', color: global.mainColor }} name="doubleright" size={25} color="#000000" />
                                        </TouchableOpacity> */}
                                        <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Road', {
                                            username: this.state.username,
                                        })} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor }}>
                                            <LottieView source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", marginLeft: width * 0.05 }}>
                                        {/* <TouchableOpacity style={{}}> */}
                                        <Carousel

                                            // layout={"default"}
                                            layout={'tinder'} layoutCardOffset={`10`}
                                            // layout={'tinder'} layoutCardOffset={`15`} 
                                            ref={ref => this.carousel = ref}
                                            data={this.state.carouselItems}
                                            sliderWidth={400}
                                            itemWidth={350}
                                            renderItem={this._renderItem.bind(this)}
                                            loop={true}
                                        //onSnapToItem={index => this.setState({ activeIndex: index })} 
                                        />
                                    </View>
                                    {/* </TouchableOpacity> */}
                                    {/* <View style={{ height: 200, backgroundColor: '#fff', justifyContent: 'center', margin: 10, marginTop: -5, borderRadius: 10, padding: 10, elevation: 5 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View><Image style={{ height: 80, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{ uri: 'http://47.100.78.254:3000/public/images/jm2.jpeg' }} /></View>
                                                <View style={{}}>
                                                    <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>鸡毛换糖</Text>
                                                    <Text style={{ fontSize: 12, marginLeft: 7, flexWrap: 'wrap', width: width * 0.52,color:"#333"  }}>&emsp;&emsp;鸡毛换糖最著名的是义乌，义乌市场形成的历史就是鸡毛换糖的历史，是鸡毛换糖慢慢形成的！</Text>
                                                </View>
                                            </View>
                                            <View ><Text style={{  flexWrap: 'wrap', fontSize: 12,color:"#333"  }}>&emsp;&emsp;鸡毛换糖是指在那个物资匮缺的年代，小商小贩走南闯北走街串巷，以红糖、草纸等低廉物品，换取居民家中的鸡毛等废品以获取微利。最早的鸡毛换糖，形成于我国的浙江省义乌地区，而最终，这一行为对地区经济和发展的促进作用得到认可，并发挥出巨大的积极作用。</Text></View>
                                        </View> */}

                                    {/* <View style={{ height: 120, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 10, elevation: 5, paddingTop: 10 }}> */}
                                    {/* <Swiper paginationStyle={{ bottom: -1 }} horizontal={true} autoplay autoplayTimeout={3} >
                                            <TouchableOpacity activeOpacity={1}>
                                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center' }}>
                                                    <View><Image style={{ height: 100, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{ uri: 'http://47.100.78.254:3000/public/images/jm1.jpeg' }} /></View>
                                                    <View >
                                                        <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>敲糖帮</Text>
                                                        <Text style={{  fontSize: 12,color:"#333" , marginLeft: 10, flexWrap: 'wrap', width: width * 0.52 }} >&emsp;&emsp;鸡毛换糖的人又被称为敲糖帮。从事鸡毛换糖的人多了久而久之就形成了一个群体，人们习惯于称他们“敲糖帮”，是从事鸡毛换糖的人的一个组织。</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}>
                                                <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                                                    <View><Image style={{ height: 100, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{ uri: 'http://47.100.78.254:3000/public/images/jm5.jpeg' }} /></View>
                                                    <View style={{}}>
                                                        <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>鸡毛换糖的路线</Text>
                                                        <Text style={{  fontSize: 12,color:"#333" , marginLeft: 10, flexWrap: 'wrap', width: width * 0.52 }} >&emsp;&emsp;最早的鸡毛换糖，形成于我国的浙江省义乌地区，而义乌最初的鸡毛换糖是从廿三里镇开始的...</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}>
                                                <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                                                    <View><Image style={{ height: 100, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{ uri: 'http://47.100.78.254:3000/public/images/jm4.jpeg' }} /></View>
                                                    <View style={{}}>
                                                        <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>鸡毛换糖的故事</Text>
                                                        <Text style={{  fontSize: 12,color:"#333" , marginLeft: 10, flexWrap: 'wrap', width: width * 0.52 }} numberOfLines={5}>&emsp;&emsp;听妈妈说，她儿时在家玩耍的时候，每次听到“拨浪鼓”的声音，都要高兴地往外跑。只见一个叔叔手摇着“拨浪鼓”，肩上挑着货郎担，嘴里大声吆喝着“鸡毛换糖喽……”</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </Swiper> */}
                                    {/* </View> */}
                                </View>
                                <View style={{ height: height * 0.3, backgroundColor: global.backColor, borderRadius: 10, marginTop: 10, marginBottom: 15 }} >
                                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('vr')} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginBottom: 10 }}>
                                        <View style={{ backgroundColor: global.mainColor, width: 3, height: 29, marginLeft: 10 }} />
                                        <View style={{ marginLeft: 10, width: width * 0.75 }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: global.mainColor }}>云游浙商</Text>
                                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: global.mainColor }}>TRAVELING ZHEJIANG ERCHANTS</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('vr')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor }}>
                                            <LottieView source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('vr')}>
                                        <Image style={{ width: width * 0.90, marginLeft: width * 0.025, height: height * 0.2, borderRadius: 15 }} source={require("../../img/vr.png")}></Image>
                                    </TouchableOpacity>
                                </View>
                                {/* <ScrollView horizontal={true} style={{height:width*0.5}} showsHorizontalScrollIndicator={false}>
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                        <Card navigation={this.props.navigation} />
                    </ScrollView> */}
                                <View style={{ height: height * 0.5, backgroundColor: global.backColor, borderRadius: 10, marginBottom: height * 0.05 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Business')} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginBottom: 10, marginTop: 10 }}>
                                        <View style={{ backgroundColor: global.mainColor, width: 3, height: 29, marginLeft: 10 }} />
                                        <View style={{ marginLeft: 10, width: width * 0.75 }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: global.mainColor }}>商帮介绍</Text>
                                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: global.mainColor }}>INTRODUCION TO SHANGBANG</Text>
                                        </View>
                                        {/* <TouchableOpacity activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '35%', color: global.mainColor }}>
                                            <AntDesign onPress={() => this.props.navigation.navigate('Business')} style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', color: global.mainColor }} name="doubleright" size={25} color="#000000" />
                                        </TouchableOpacity> */}
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Business')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: global.mainColor }}>
                                            <LottieView source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                                        </TouchableOpacity>
                                    </TouchableOpacity>

                                    <View style={{ alignItems: "center", width: width * 0.9, marginLeft: width * 0.025 }}>
                                        <ShangBang></ShangBang>
                                        {/* <Horiz
                                                ref={(view) => this.childList = view}
                                            /> */}


                                        {/* <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ borderColor: global.mainColor, height: 30, width: 60, fontSize: 12 }}>浙财视点</Text>
                                            <Text style={{ borderColor: global.mainColor, height: 30, fontSize: 10 }}>杭州出台14项政策大力度吸引浙商回归</Text>
                                        </View> */}
                                        {/* <View style={{height:180,width:width*0.9,marginTop:10,borderRadius:10}}>
                            <Swiper showsPagination={false} horizontal={false} autoplay autoplayTimeout={5} >
                             <View style={{flex:1,height:180,width:width*0.9,borderRadius:10,justifyContent:"space-around",alignItems:"center"}}>
                                     <TouchableOpacity onPress={()=>this.props.navigation.navigate("News")}>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:global.mainColor,borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:global.mainColor,borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:global.mainColor,borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                             </View>
                             <View style={{flex:1,height:180,width:width*0.9,borderRadius:10,justifyContent:"space-around",alignItems:"center"}}>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:global.mainColor,borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:global.mainColor,borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:global.mainColor,borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                             </View>
                             </Swiper>
                            </View> */}
                                    </View>
                                </View>
                            </View>

                        </ScrollView>

                    </View>
                </LinearGradient>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    lb: {
        height: 150,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    fwrl: {
        height: 150,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    htbox1: {
        height: 30,
        fontSize: 22,
    },
    htbox2: {
        height: 30,
        fontSize: 22,
    },
    zr2: {
        height: 100,
        width: 120,
        backgroundColor: '#00ffff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    zr3: {
        height: 100,
        width: 120,
        backgroundColor: '#00ffff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    zr4: {
        height: 100,
        width: 120,
        backgroundColor: '#00ffff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    zr5: {
        height: 100,
        width: 120,
        backgroundColor: '#00ffff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    item: {
        width: width - 60,
        height: width - 60,
        // backgroundColor:"red"
    },
    imageContainer: {
        width: width * 0.6,
        height: width * 0.4,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    Comment: {
        borderRadius: 5,
        marginRight: 5,
        backgroundColor: global.mainColor,
        width: 55,
        alignItems: 'center',
        elevation: 5,
        justifyContent: "center",
        padding: 1
    }
});
