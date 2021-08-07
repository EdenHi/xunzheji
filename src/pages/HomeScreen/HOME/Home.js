/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,  Easing, Animated, Image, Dimensions, ImageBackground, BVLinearGradient, RefreshControl, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Card from '../../../components/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Characters from './Characters';
import ShiCha from './ShiCha';
import LinearGradient from 'react-native-linear-gradient';
import Demo from './Demo';
import EZSwiper from 'react-native-ezswiper';
import Horiz from '../../../components/horiz';
import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get('window');



export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            progress: new Animated.Value(0),

        }
        
    }
    componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 3500,
          easing: Easing.linear,
          
        }).start();
      }
    render() {
        return (
            <View style={{ alignItems: 'center',  }}>
                <LinearGradient style={{ width }} colors={['#7cc0bf', '#fff', '#fff']} >
                    <View style={{ height:height*0.1,flexDirection:"row",alignItems:"center"}}>
                    <View style={{marginLeft:"5%"}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>寻商迹</Text>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#fff' }}>XUN SHANG JI</Text>
                        </View>
                    
   
                       
                    </View>
                    <View style={{ alignItems: 'center', }}>
                        <ScrollView 
                        onScroll={(e)=>{console.log(Math.ceil(e.nativeEvent.contentOffset.y));if (Math.ceil(e.nativeEvent.contentOffset.y)==800) {
                                this.childList.move()
                        }else if(Math.ceil(e.nativeEvent.contentOffset.y)==420){
                            this.childList.stopSlide()
                        }
                    }}
                    
                        
                        showsVerticalScrollIndicator={false}>
                            <View style={{ width: width * 0.95 }}>
                                <View style={{  marginBottom: -10 }}>
                                    <ShiCha />
                                </View>
                                <View style={{ height: 220, backgroundColor: 'white', borderRadius: 10, marginTop: 10, justifyContent: 'center' }} >
                                    <View>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginBottom: 10 }}>
                                            <View style={{ backgroundColor: '#7cc0bf', width: 2, height: 28, marginLeft: 10 }} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7cc0bf' }}>浙商历史推荐</Text>
                                                <Text style={{ fontSize: 7, fontWeight: 'bold', color: '#7cc0bf' }}>ZHEJIANG MERCHANTS HISTORY RECOMMENDATION</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '30%', color: '#7cc0bf' }}>
                                                <LottieView  source={require('../../../../animal/right.json')}  autoPlay loop  progress={this.state.progress} />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                        <ScrollView 
   
                                        horizontal={true} showsHorizontalScrollIndicator={false}
                                       
                                        >
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} activeOpacity={1}>
                                                < View style={{ height: 150, marginBottom: 10, elevation: 5, width: width * 0.8, marginLeft: 10, marginRight: 10, elevation: 5 }}>
                                                    <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.8, marginRight: 20 }} borderRadius={10} source={{uri:'http://8.142.11.85:3000/public/images/zs1.jpeg'}}>
                                                        <View style={{ height: 150, borderRadius: 10, shadowRadius: 15, padding: 15, width: width * 0.8 }}>
                                                            <View style={{ flex: 3 }} />
                                                            <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>浙江商帮的崛起</Text></View>
                                                            <View style={{ flex: 1 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>宁波商帮</Text></View></TouchableOpacity>
                                                                    <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>龙游商帮</Text></View></TouchableOpacity>
                                                                    <TouchableOpacity activeOpacity={1}><View style={{ borderRadius: 5, marginRight: 5, backgroundColor: '#ffffff', width: 55, alignItems: 'center' }}><Text style={{ fontSize: 12 }}>南浔商帮</Text></View></TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.8, marginRight: 10 }} borderRadius={10}source={{uri:'http://8.142.11.85:3000/public/images/travel4.jpeg'}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} activeOpacity={1} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                    <View style={{ flex: 3 }} />
                                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>浙江·温州</Text></View>
                                                    <View style={{ flex: 1 }}><Text style={{ fontSize: 14, color: '#fff' }}>温州集山、江、海、湖、岛、泉之大成</Text></View>
                                                    <View style={{ flex: 1 }}><Text style={{}} /></View>
                                                </TouchableOpacity>
                                            </ImageBackground>
                                            <ImageBackground style={{ height: 150, marginBottom: 10, width: width * 0.8, marginRight: 10 }} borderRadius={10} source={{uri:'http://8.142.11.85:3000/public/images/travel4.jpeg'}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Zs')} style={{ height: 150, borderRadius: 10, padding: 15, width: width * 0.8 }}>
                                                    <View style={{ flex: 3 }} />
                                                    <View style={{ flex: 2 }}><Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>浙江·温州</Text></View>
                                                    <View style={{ flex: 1 }}><Text style={{ fontSize: 14, color: '#fff' }}>温州集山、江、海、湖、岛、泉之大成</Text></View>
                                                    <View style={{ flex: 1 }}><Text style={{}} /></View>
                                                </TouchableOpacity>
                                            </ImageBackground>
                                        </ScrollView>
                                    </View>
                                </View>


                                <View style={{ height: 250, backgroundColor: 'white', borderRadius: 10, marginTop: 10, justifyContent: 'center' }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginBottom: 10 }}>
                                        <View style={{ backgroundColor: '#7cc0bf', width: 2, height: 28, marginLeft: 10 }} />
                                        <View style={{ marginLeft: 10, width: width * 0.48 }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7cc0bf' }}>浙商必知丛书</Text>
                                            <Text style={{ fontSize: 7, fontWeight: 'bold', color: '#7cc0bf' }}>ZHEJIANG MERCHANTS MUST KNOW SERIES</Text>
                                        </View>
                                        {/* <TouchableOpacity activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '35%', color: '#7cc0bf' }}>
                                            <AntDesign onPress={() => this.props.navigation.navigate('Book')} style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', color: '#7cc0bf' }} name="doubleright" size={25} color="#000000" />
                                        </TouchableOpacity> */}
                                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Book')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '31%', color: '#7cc0bf' }}>
                                                <LottieView source={require('../../../../animal/right.json')}  autoPlay loop  progress={this.state.progress} />
                                            </TouchableOpacity>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', elevation: 5 }}>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                            <View style={{ width: width * 0.3, height: 180, margin: 10, borderColor: '#00000', borderRadius: 10, elevation: 5 }}><Image style={{ width: width * 0.3, flex: 1, borderRadius: 10 }} source={{uri:'http://8.142.11.85:3000/public/images/sj1.jpeg'}} /></View>
                                            <View style={{ width: width * 0.3, height: 180, margin: 10, borderColor: '#00000', borderRadius: 10, elevation: 5 }}><Image style={{ width: width * 0.3, flex: 1, borderRadius: 10 }} source={{uri:'http://8.142.11.85:3000/public/images/sj2.jpg'}} /></View>
                                            <View style={{ width: width * 0.3, height: 180, margin: 10, borderColor: '#00000', borderRadius: 10, elevation: 5 }}><Image style={{ width: width * 0.3, flex: 1, borderRadius: 10 }} source={{uri:'http://8.142.11.85:3000/public/images/sj3.jpeg'}} /></View>
                                            <View style={{ width: width * 0.3, height: 180, margin: 10, borderColor: '#00000', borderRadius: 10, elevation: 5 }}><Image style={{ width: width * 0.3, flex: 1, borderRadius: 10 }} source={{uri:'http://8.142.11.85:3000/public/images/sj4.jpeg'}} /></View>
                                        </ScrollView>
                                    </View>
                                </View>



                                <View style={{ height: 400, backgroundColor: '#fff', marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                                        <View style={{ backgroundColor: '#7cc0bf', width: 2, height: 28 }} />
                                        <View>
                                            <Text onPress={()=>{this.props.navigation.navigate('Road')}} style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold', color: '#7cc0bf' }}>重走鸡毛换糖之路</Text>
                                            <Text style={{ marginLeft: 10, fontSize: 7, fontWeight: 'bold', color: '#7cc0bf' }}>TAKE THE ROAD OF CHICKEN FEATHER FOR SUGAR AGAIN</Text>
                                        </View>
                                        {/* <TouchableOpacity activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '30%', color: '#7cc0bf' }}>
                                            <AntDesign onPress={()=>{this.props.navigation.navigate('Road')}} style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', color: '#7cc0bf' }} name="doubleright" size={25} color="#000000" />
                                        </TouchableOpacity> */}
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Road')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '25%', color: '#7cc0bf' }}>
                                                <LottieView source={require('../../../../animal/right.json')}  autoPlay loop  progress={this.state.progress} />
                                            </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity activeOpacity={1} >
                                        <View style={{ height: 200, backgroundColor: '#fff', justifyContent: 'center', margin: 10, marginTop: -5, borderRadius: 10, padding: 10, elevation: 5 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View><Image style={{ height: 80, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{uri:'http://8.142.11.85:3000/public/images/jm2.jpeg'}} /></View>
                                                <View style={{}}>
                                                    <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>鸡毛换糖</Text>
                                                    <Text style={{ color: '#000000', fontSize: 12, marginLeft: 7, flexWrap: 'wrap', width: width * 0.52 }}>       鸡毛换糖最著名的是义乌，义乌市场形成的历史就是鸡毛换糖的历史，是鸡毛换糖慢慢形成的！</Text>
                                                </View>
                                            </View>
                                            <View ><Text style={{ width: width * 0.88, flexWrap: 'wrap' }}>       鸡毛换糖是指在那个物资匮缺的年代，小商小贩走南闯北走街串巷，以红糖、草纸等低廉物品，换取居民家中的鸡毛等废品以获取微利。最早的鸡毛换糖，形成于我国的浙江省义乌地区，而最终，这一行为对地区经济和发展的促进作用得到认可，并发挥出巨大的积极作用。</Text></View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ height: 120, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 10, elevation: 5, paddingTop: 10 }}>
                                        <Swiper paginationStyle={{ bottom: -1 }} horizontal={true} autoplay autoplayTimeout={3} >
                                            <TouchableOpacity activeOpacity={1}>
                                                <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center' }}>
                                                    <View><Image style={{ height: 100, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{uri:'http://8.142.11.85:3000/public/images/jm1.jpeg'}} /></View>
                                                    <View >
                                                        <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>敲糖帮</Text>
                                                        <Text style={{ color: '#000000', fontSize: 12, marginLeft: 10, flexWrap: 'wrap', width: width * 0.52 }} >鸡毛换糖的人又被称为敲糖帮。从事鸡毛换糖的人多了久而久之就形成了一个群体，人们习惯于称他们“敲糖帮”，是从事鸡毛换糖的人的一个组织。</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}>
                                                <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                                                    <View><Image style={{ height: 100, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{uri:'http://8.142.11.85:3000/public/images/jm5.jpeg'}} /></View>
                                                    <View style={{}}>
                                                        <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>鸡毛换糖的路线</Text>
                                                        <Text style={{ color: '#000000', fontSize: 12, marginLeft: 10, flexWrap: 'wrap', width: width * 0.52 }} >最早的鸡毛换糖，形成于我国的浙江省义乌地区，而义乌最初的鸡毛换糖是从廿三里镇开始的...</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={1}>
                                                <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                                                    <View><Image style={{ height: 100, width: width * 0.3, borderRadius: 10, marginLeft: 5, alignItems: 'center' }} source={{uri:'http://8.142.11.85:3000/public/images/jm4.jpeg'}} /></View>
                                                    <View style={{}}>
                                                        <Text style={{ color: '#f4a460', fontSize: 13, fontWeight: 'bold', marginLeft: 10 }}>鸡毛换糖的故事</Text>
                                                        <Text style={{ color: '#000000', fontSize: 12, marginLeft: 10, flexWrap: 'wrap', width: width * 0.52 }} numberOfLines={5}>听妈妈说，她儿时在家玩耍的时候，每次听到“拨浪鼓”的声音，都要高兴地往外跑。只见一个叔叔手摇着“拨浪鼓”，肩上挑着货郎担，嘴里大声吆喝着“鸡毛换糖喽……”</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </Swiper>
                                    </View>
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
                                <View style={{ height: 800, backgroundColor: '#fff', borderRadius: 10 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Business')} activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: width * 0.9, marginBottom: 10, marginTop: 10 }}>
                                        <View style={{ backgroundColor: '#7cc0bf', width: 2, height: 28, marginLeft: 10 }} />
                                        <View style={{ marginLeft: 10, width: width * 0.48 }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7cc0bf' }}>浙商人物介绍</Text>
                                            <Text style={{ fontSize: 7, fontWeight: 'bold', color: '#7cc0bf' }}>INTRODUCTION TO ZHEJIANG BUSINESSMEN</Text>
                                        </View>
                                        {/* <TouchableOpacity activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '35%', color: '#7cc0bf' }}>
                                            <AntDesign onPress={() => this.props.navigation.navigate('Business')} style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', color: '#7cc0bf' }} name="doubleright" size={25} color="#000000" />
                                        </TouchableOpacity> */}
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Business')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '30%', color: '#7cc0bf' }}>
                                                <LottieView source={require('../../../../animal/right.json')}  autoPlay loop  progress={this.state.progress} />
                                            </TouchableOpacity>
                                    </TouchableOpacity>
                                    <View style={{ alignItems: 'center' }}>
<View>
    <Horiz 
    ref={(view)=>this.childList=view}
    />
    
</View>
                                        {/* <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ borderColor: '#7cc0bf', height: 30, width: 60, fontSize: 12 }}>浙财视点</Text>
                                            <Text style={{ borderColor: '#7cc0bf', height: 30, fontSize: 10 }}>杭州出台14项政策大力度吸引浙商回归</Text>

    
                                        </View> */}

                                        {/* <View style={{height:180,width:width*0.9,marginTop:10,borderRadius:10}}>
                            <Swiper showsPagination={false} horizontal={false} autoplay autoplayTimeout={5} >
                             <View style={{flex:1,height:180,width:width*0.9,borderRadius:10,justifyContent:"space-around",alignItems:"center"}}>
                                     <TouchableOpacity onPress={()=>this.props.navigation.navigate("News")}>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#7cc0bf",borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#7cc0bf",borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#7cc0bf",borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                             </View>
                             <View style={{flex:1,height:180,width:width*0.9,borderRadius:10,justifyContent:"space-around",alignItems:"center"}}>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#7cc0bf",borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#7cc0bf",borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
                                         <Text style={{fontSize:13,marginLeft:15}}>杭州出台14项政策大力度吸引浙商回归</Text>
                                     </View>
                                     </TouchableOpacity>
                                     <TouchableOpacity>
                                     <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",elevation:5,width:width*0.9,height:50,borderRadius:10}}>
                                         <View style={{height:30,width:width*0.2,backgroundColor:"#7cc0bf",borderRadius:5,justifyContent:"center",alignItems:"center",marginLeft:10}}><Text style={{fontSize:13}}>浙财视点</Text></View>
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
});
