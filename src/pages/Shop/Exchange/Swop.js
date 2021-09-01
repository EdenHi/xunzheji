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
  TouchableOpacity,
  FlatList,
  DeviceEventEmitter,
  Easing,
} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import FlipCard from 'react-native-flip-card';
import Swiper from 'react-native-swiper'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native';
import { SpeedDial } from 'react-native-elements';

const { width, height } = Dimensions.get("window")



export default class Swop extends Component {
  UNSAFE_componentWillMount = () => {
    this.state.fadeAnim = new Animated.Value(0)
  }
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: 'https://img2.baidu.com/it/u=133347796,434139622&fm=26&fmt=auto&gp=0.jpg',
      data: [],
      open: false,
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

  switch = (index) => {
    this.state.fadeAnim = new Animated.Value(0)
    Animated.timing(this.state.fadeAnim, {
      toValue: 400,
      duration: 200,
      useNativeDriver: true,
      opacity: this.state.fadeAnim
    }).start()
    if (index % 5 >= 0 && index % 5 < 1) {
      this.setState({ imgUrl: 'https://img2.baidu.com/it/u=133347796,434139622&fm=26&fmt=auto&gp=0.jpg' })
    }
    if (index % 5 >= 1 && index % 5 < 2) {
      this.setState({ imgUrl: 'https://img0.baidu.com/it/u=3857011018,2401665306&fm=26&fmt=auto&gp=0.jpg' })
    }
    if (index % 5 >= 2 && index % 5 < 3) {
      this.setState({ imgUrl: 'https://img1.baidu.com/it/u=2950161631,1547424886&fm=26&fmt=auto&gp=0.jpg' })
    }
    if (index % 5 >= 3 && index % 5 < 4) {
      this.setState({ imgUrl: 'https://img1.baidu.com/it/u=255308796,3200634604&fm=26&fmt=auto&gp=0.jpg' })
    }
    if (index % 5 >= 4 && index % 5 < 5) {
      this.setState({ imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Ffe3c884f7062f393d3007b882743ceb1b4f0ba3c.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632188158&t=395f209f9e09e58b1a3eded8216115e3' })
    }
  }

  get_shuju() {
    fetch('http://8.142.11.85:3000/shop/select_exchange2')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
        });
      })
  }
  componentDidMount() {
    this.get_shuju();
    this.listener = DeviceEventEmitter.addListener('exchange', this.get_shuju.bind(this));
  }
  //移除监听
  componentWillUnmount() {
    this.listener.remove();
  }
  renderDate({ item, index }) {
    return (
      <FlipCard
        friction={6}
        perspective={2000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
      >
        <View style={{ marginHorizontal: width * 0.05, marginVertical: height * 0.15 }} key={index}>
          <View style={{  zIndex: 5, position: "absolute", marginTop: height * 0.03,flexDirection:'row' }}>
              <Text style={{marginLeft:'10%',fontSize:18,fontWeight:'bold'}}>{item.tag}</Text>
            <LottieView style={{ width: 60, height: 40, marginLeft: '55%' }} source={require('../../../../animal/qwe.json')} autoPlay loop progress={this.state.progress} />
          </View>
          <ImageBackground imageStyle={{ borderRadius: 15 }} style={{ width: width * 0.9, height: height * 0.6,alignItems: "center", justifyContent: "center" }} source={{ uri: this.state.imgUrl }} >
            <View style={{ backgroundColor: "rgba(255,255,255,0.8)", width: width * 0.7, height: height * 0.25,borderRadius:15,
          }}>
              <View style={{flexDirection:'row',backgroundColor:"rgba(124,192,192,0.5)",borderTopLeftRadius:15,borderTopRightRadius:15}}>
                <Image source={{uri:item.portrait}} style={{width:width*0.2,height:width*0.2,borderRadius:50,marginTop:-height*0.05,marginLeft:width*0.25}}/>
                <View style={{marginLeft:5,justifyContent:'space-between'}}>
                  {/* <Text>{item.nickname}</Text> */}
                  {/* <Text>{item.renzheng}</Text> */}
                </View>
              </View>
              <View style={{width:"100%",height:"20%",alignItems:"center",justifyContent:"center",flexDirection:"row",backgroundColor:"rgba(124,192,192,0.5)"}}>
                  <Text style={{fontSize:18,color:"#333333",position:"absolute"}}>{item.nickname}</Text>
                  <View style={{width:width*0.15,height:height*0.03,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",borderRadius:15,marginLeft:width*0.5,elevation:5}}><Text style={{fontSize:13,color:"#333333"}}>{item.renzheng}</Text></View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center",width:"100%",height:"55%",}}>
                <Text style={{ fontSize: 16, color: "#7cc0c0" }}>交换的物品：</Text>
                <Text style={{ fontSize: 14, color: "#333333" }}>{item.wupin}</Text>
                <Text style={{ fontSize: 16, color: "#7cc0c0" }}>想换什么：</Text>
                <Text style={{ fontSize: 14, color: "#333333" }}>{item.exchang_wupin}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', marginHorizontal: width * 0.05, height: height * 0.6, width: width * 0.9, borderRadius: 10, marginTop: height * 0.15, padding: 10 }}>
          <View style={{}}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333" }}>
              {item.liyou}
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
            <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[0] }} />
            <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[1] }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
            <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[2] }} />
            <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[3] }} />
          </View>
          <View style={{flexDirection:'row', marginTop: 15}}>
            <Text onPress={()=>{ this.props.navigation.navigate('Chats', { room: '2' }) }} style={{marginLeft:'10%',fontWeight: "bold", fontSize: 15, color: "#7cc0c0",marginTop:5}}>聊天</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Exchange_want',item)} style={{ flexDirection: "row", width: width * 0.2, height: 50, alignItems: "center", marginLeft: "55%" }} >
              <View style={{ width: 50, height: 40 }}><Text style={{ fontWeight: "bold", fontSize: 15, color: "#7cc0c0" }}>我想要</Text></View>
              <LottieView style={{ width: 60, height: 40 }} source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
            </TouchableOpacity>
          </View>
        </View>
      </FlipCard>
    )
  }
  render() {
    const Imgref = createRef();
    console.log('data', this.state.data);
    const { data } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Animated.Image source={{ uri: this.state.imgUrl }} style={{ opacity: 1 }} />
        <BlurView blurType="light" blurAmount={10} style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <Animated.Image source={{ uri: this.state.imgUrl }} style={{ opacity: 0.4 }} />
        </BlurView> 
        <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
          <TouchableOpacity style={{width:width*0.06}} activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
          <FontAwesome  name={'angle-left'} size={25} color={'#fff'} />
            {/* <AntDesign name="left" size={20} color="#fff" /> */}
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85}}>以物换物</Text>
        </View>
        <FlatList
          data={data}
          horizontal
          pagingEnabled={true}
          keyExtractor={(item, index) => (index + '1')}
          renderItem={this.renderDate.bind(this)}
          ref={ref => this.scrollRef = ref}
          onScroll={(e) => {
            let a = (e.nativeEvent.contentOffset.x + 1) / width
            this.switch(a);
          }} />
        <SpeedDial
          buttonStyle={{ borderRadius: 50 }}
          isOpen={this.state.open}
          color="#7cc0c0"
          icon={{ name: 'add', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => this.setState({ open: true })}
          onClose={() => this.setState({ open: false })}
        >
          <SpeedDial.Action
            color="#7cc0c0"
            buttonStyle={{ borderRadius: 50 }}
            icon={{ name: 'drive-file-rename-outline', color: '#fff' }}
            onPress={() => { this.props.navigation.navigate('Exchange2'), this.setState({ open: false }) }}
          />
        </SpeedDial>
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
