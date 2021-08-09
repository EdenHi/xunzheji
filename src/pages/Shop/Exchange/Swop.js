import React, { Component, createRef, useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import FlipCard from 'react-native-flip-card';
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window")



export default class Swop extends Component {
  UNSAFE_componentWillMount = () => {
    this.state.fadeAnim = new Animated.Value(0)
  }
  state = {
    imgUrl: { uri: 'https://img0.baidu.com/it/u=3712013035,1473651045&fm=15&fmt=auto&gp=0.jpg' }
  }
  switch = (index) => {
    this.state.fadeAnim = new Animated.Value(0)
    Animated.timing(this.state.fadeAnim, {
      toValue: 400,
      duration: 200,
      useNativeDriver: true,
      opacity: this.state.fadeAnim
    }).start()
    if (index == 0) {
      this.setState({ imgUrl: { uri: 'https://img0.baidu.com/it/u=3712013035,1473651045&fm=15&fmt=auto&gp=0.jpg' } })
    }
    if (index == 1) {
      this.setState({ imgUrl: { uri: 'https://img0.baidu.com/it/u=3857011018,2401665306&fm=26&fmt=auto&gp=0.jpg' } })
    }
    if (index == 2) {
      this.setState({ imgUrl: { uri: 'https://img1.baidu.com/it/u=1425906286,3699473188&fm=26&fmt=auto&gp=0.jpg' } })
    }
    if (index == 3) {
      this.setState({ imgUrl: { uri: 'https://img2.baidu.com/it/u=1773206586,3319484616&fm=26&fmt=auto&gp=0.jpg' } })
    }
    if (index == 4) {
      this.setState({ imgUrl: { uri: 'https://img0.baidu.com/it/u=903583436,3995759237&fm=26&fmt=auto&gp=0.jpg' } })
    }
  }
  render() {
    const Imgref = createRef();
    return (
      <View style={{ flex: 1 }}>
        <BlurView blurType="dark" blurAmount={4000} style={{ position: 'absolute', height: '100%', width: '100%'}}>
          <Animated.Image source={this.state.imgUrl} resizeMode="stretch" style={{ opacity: 0.5}} />
        </BlurView>
        <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
          <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#7cc0c0" }} name="left" size={20} color="#000000" />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#7cc0c0", width: width * 0.85, marginLeft: "2%" }}>以物换物</Text>
        </View>
        <Swiper
        activeOpacity={0.001}
          removeClippedSubviews={false}
          showsPagination={false}
          showsButtons={false}         //显示控制按钮
          loop={false}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
          autoplay={false}
          onIndexChanged={(index) => this.switch(index)}
        >
          <FlipCard
            friction={6}
            perspective={2000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            <View style={{ marginHorizontal: width * 0.1, marginVertical: height * 0.15 }}>
              <ImageBackground style={{ width: width * 0.8, height: height * 0.6, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img0.baidu.com/it/u=3712013035,1473651045&fm=15&fmt=auto&gp=0.jpg' }} >
                <View style={{ backgroundColor: "#fff", opacity: 0.7, width: width * 0.7, height: height * 0.2, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>交换的物品：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>闲置很久的耳机</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>想换什么：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>switch游戏手柄</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ backgroundColor: '#7cc0c0', marginHorizontal: width * 0.05, height: '80%', width: width * 0.9, borderRadius: 10, marginTop: 40, opacity: 0.8, padding: 10 }}>
              <View style={{}}>
                <Text style={{ fontSize: 14 }}>
                  购买iPad通过暑期教育优惠获得，因为已经有一个了所以一直闲置着，全新未开封，想要换一个价值差不多的switch游戏手柄。
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text >品牌</Text>
                <Text style={{ marginLeft: 20 }}>airpods2</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >款式</Text>
                <Text style={{ marginLeft: 20 }}>入耳式</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >成色</Text>
                <Text style={{ marginLeft: 20 }}>全新未拆封</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >功能状态</Text>
                <Text style={{ marginLeft: 20 }}>功能完好无维修</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=2487464966,3433618783&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=366265010,2092814260&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=2831272325,674019940&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=1183976301,890991053&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <TouchableOpacity style={{flexDirection:"row",width:width*0.2,height:50,alignItems:"center",marginTop:15,marginLeft:"70%"}}  >
                <View style={{width:50,height:40}}><Text style={{fontWeight:"bold",fontSize:16}}>我想要</Text></View>
                <LottieView style={{width:60,height:40}} source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
              </TouchableOpacity>
            </View>

          </FlipCard>
          <FlipCard
            friction={6}
            perspective={2000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            <View style={{ marginHorizontal: width * 0.1, marginVertical: height * 0.15 }}>
              <ImageBackground style={{ width: width * 0.8, height: height * 0.6, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img0.baidu.com/it/u=3857011018,2401665306&fm=26&fmt=auto&gp=0.jpg' }} >
                <View style={{ backgroundColor: "#fff", opacity: 0.7, width: width * 0.7, height: height * 0.2, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>交换的物品：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>闲置很久的耳机</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>想换什么：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>switch游戏手柄</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ backgroundColor: '#7cc0c0', marginHorizontal: width * 0.05, height: '80%', width: width * 0.9, borderRadius: 10, marginTop: 40, opacity: 0.8, padding: 10 }}>
              <View style={{}}>
                <Text style={{ fontSize: 14 }}>
                  购买iPad通过暑期教育优惠获得，因为已经有一个了所以一直闲置着，全新未开封，想要换一个价值差不多的switch游戏手柄。
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text >品牌</Text>
                <Text style={{ marginLeft: 20 }}>airpods2</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >款式</Text>
                <Text style={{ marginLeft: 20 }}>入耳式</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >成色</Text>
                <Text style={{ marginLeft: 20 }}>全新未拆封</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >功能状态</Text>
                <Text style={{ marginLeft: 20 }}>功能完好无维修</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=2487464966,3433618783&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=366265010,2092814260&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=2831272325,674019940&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=1183976301,890991053&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <TouchableOpacity style={{flexDirection:"row",width:width*0.2,height:50,alignItems:"center",marginTop:15,marginLeft:"70%"}}  >
                <View style={{width:50,height:40}}><Text style={{fontWeight:"bold",fontSize:16}}>我想要</Text></View>
                <LottieView style={{width:60,height:40}} source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
              </TouchableOpacity>
            </View>

          </FlipCard>
          <FlipCard
            friction={6}
            perspective={2000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            <View style={{ marginHorizontal: width * 0.1, marginVertical: height * 0.15 }}>
              <ImageBackground style={{ width: width * 0.8, height: height * 0.6, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img1.baidu.com/it/u=1425906286,3699473188&fm=26&fmt=auto&gp=0.jpg' }} >
                <View style={{ backgroundColor: "#fff", opacity: 0.7, width: width * 0.7, height: height * 0.2, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>交换的物品：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>闲置很久的耳机</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>想换什么：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>switch游戏手柄</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ backgroundColor: '#7cc0c0', marginHorizontal: width * 0.05, height: '80%', width: width * 0.9, borderRadius: 10, marginTop: 40, opacity: 0.8, padding: 10 }}>
              <View style={{}}>
                <Text style={{ fontSize: 14 }}>
                  购买iPad通过暑期教育优惠获得，因为已经有一个了所以一直闲置着，全新未开封，想要换一个价值差不多的switch游戏手柄。
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text >品牌</Text>
                <Text style={{ marginLeft: 20 }}>airpods2</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >款式</Text>
                <Text style={{ marginLeft: 20 }}>入耳式</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >成色</Text>
                <Text style={{ marginLeft: 20 }}>全新未拆封</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >功能状态</Text>
                <Text style={{ marginLeft: 20 }}>功能完好无维修</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=2487464966,3433618783&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=366265010,2092814260&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=2831272325,674019940&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=1183976301,890991053&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <TouchableOpacity style={{flexDirection:"row",width:width*0.2,height:50,alignItems:"center",marginTop:15,marginLeft:"70%"}}  >
                <View style={{width:50,height:40}}><Text style={{fontWeight:"bold",fontSize:16}}>我想要</Text></View>
                <LottieView style={{width:60,height:40}} source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
              </TouchableOpacity>
            </View>

          </FlipCard>
          <FlipCard
            friction={6}
            perspective={2000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            <View style={{ marginHorizontal: width * 0.1, marginVertical: height * 0.15 }}>
              <ImageBackground style={{ width: width * 0.8, height: height * 0.6, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img2.baidu.com/it/u=1773206586,3319484616&fm=26&fmt=auto&gp=0.jpg' }} >
                <View style={{ backgroundColor: "#fff", opacity: 0.7, width: width * 0.7, height: height * 0.2, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>交换的物品：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>闲置很久的耳机</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>想换什么：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>switch游戏手柄</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ backgroundColor: '#7cc0c0', marginHorizontal: width * 0.05, height: '80%', width: width * 0.9, borderRadius: 10, marginTop: 40, opacity: 0.8, padding: 10 }}>
              <View style={{}}>
                <Text style={{ fontSize: 14 }}>
                  购买iPad通过暑期教育优惠获得，因为已经有一个了所以一直闲置着，全新未开封，想要换一个价值差不多的switch游戏手柄。
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text >品牌</Text>
                <Text style={{ marginLeft: 20 }}>airpods2</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >款式</Text>
                <Text style={{ marginLeft: 20 }}>入耳式</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >成色</Text>
                <Text style={{ marginLeft: 20 }}>全新未拆封</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >功能状态</Text>
                <Text style={{ marginLeft: 20 }}>功能完好无维修</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=2487464966,3433618783&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=366265010,2092814260&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=2831272325,674019940&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=1183976301,890991053&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <TouchableOpacity style={{flexDirection:"row",width:width*0.2,height:50,alignItems:"center",marginTop:15,marginLeft:"70%"}}  >
                <View style={{width:50,height:40}}><Text style={{fontWeight:"bold",fontSize:16}}>我想要</Text></View>
                <LottieView style={{width:60,height:40}} source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
              </TouchableOpacity>
            </View>

          </FlipCard>
          <FlipCard
            friction={6}
            perspective={2000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            <View style={{ marginHorizontal: width * 0.1, marginVertical: height * 0.15 }}>
              <ImageBackground style={{ width: width * 0.8, height: height * 0.6, alignItems: "center", justifyContent: "center" }} source={{ uri: 'https://img0.baidu.com/it/u=903583436,3995759237&fm=26&fmt=auto&gp=0.jpg' }} >
                <View style={{ backgroundColor: "#fff", opacity: 0.7, width: width * 0.7, height: height * 0.2, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>交换的物品：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>闲置很久的耳机</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>想换什么：</Text>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>switch游戏手柄</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ backgroundColor: '#7cc0c0', marginHorizontal: width * 0.05, height: '80%', width: width * 0.9, borderRadius: 10, marginTop: 40, opacity: 0.8, padding: 10 }}>
              <View style={{}}>
                <Text style={{ fontSize: 14 }}>
                  购买iPad通过暑期教育优惠获得，因为已经有一个了所以一直闲置着，全新未开封，想要换一个价值差不多的switch游戏手柄。
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text >品牌</Text>
                <Text style={{ marginLeft: 20 }}>airpods2</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >款式</Text>
                <Text style={{ marginLeft: 20 }}>入耳式</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >成色</Text>
                <Text style={{ marginLeft: 20 }}>全新未拆封</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text >功能状态</Text>
                <Text style={{ marginLeft: 20 }}>功能完好无维修</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=2487464966,3433618783&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=366265010,2092814260&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=2831272325,674019940&fm=26&fmt=auto&gp=0.jpg" }} />
                <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=1183976301,890991053&fm=26&fmt=auto&gp=0.jpg" }} />
              </View>
              <TouchableOpacity style={{flexDirection:"row",width:width*0.2,height:50,alignItems:"center",marginTop:15,marginLeft:"70%"}}  >
                <View style={{width:50,height:40}}><Text style={{fontWeight:"bold",fontSize:16}}>我想要</Text></View>
                <LottieView style={{width:60,height:40}} source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
              </TouchableOpacity>
            </View>

          </FlipCard>
  
      
        </Swiper>
      </View>
    )
  }
};

const styles = StyleSheet.create({

  image: {
    width: '80%',
    height: '70%',
    margin: "30%",
  },
});
