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
  AsyncStorage
} from 'react-native'
import { BlurView } from "@react-native-community/blur";
import FlipCard from 'react-native-flip-card';
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native';
import {SpeedDial } from 'react-native-elements';

const { width, height } = Dimensions.get("window")



export default class goods extends Component {
  UNSAFE_componentWillMount = () => {
    this.state.fadeAnim = new Animated.Value(0)
  }
  constructor(props){
    super(props)
    this.state = {
      imgUrl:  'https://img0.baidu.com/it/u=3712013035,1473651045&fm=15&fmt=auto&gp=0.jpg' ,
      data:[],
      open:false,
      Person:'',
    }
  }
 

  get_shuju(){
    AsyncStorage.getItem('Person',(err,result)=>{
      if(!err){
          this.setState({
              Person:result
          },()=>{
              console.log('result123',result);
          })
          fetch('http://47.100.78.254:3000/shop/select_PersonExchange', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: this.state.Person,
          })
          }).then((response) => response.json())
          .then((responseJson) => {
            console.log('data',responseJson)
            this.setState({
              data:responseJson
            })
          })
      } else {
          console.log('err',err);
      }
  })
  }

  componentDidMount(){
    this.get_shuju();
    this.listener = DeviceEventEmitter.addListener('exchange', this.get_shuju.bind(this));
  }

  //移除监听
  componentWillUnmount(){
    this.listener.remove();
  }

  renderDate({item,index}){
    return(
      <FlipCard
      friction={6}
      perspective={2000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
      onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
    >
      <View style={{ marginHorizontal: width * 0.1, marginVertical: height * 0.15 }} key={index}>
        <ImageBackground style={{ width: width * 0.8, height: height * 0.6, alignItems: "center", justifyContent: "center" }} source={{ uri:this.state.imgUrl }} >
          <View style={{ backgroundColor: "#fff", opacity: 0.7, width: width * 0.7, height: height * 0.2, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>交换的物品：</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.wupin}</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>想换什么：</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.exchang_wupin}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: '#7cc0c0', marginHorizontal: width * 0.05, height: '80%', width: width * 0.9, borderRadius: 10, marginTop: 40, opacity: 0.8, padding: 10 }}>
        <View style={{}}>
          <Text style={{ fontSize: 14 }}>
              {item.liyou}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[0]}} />
          <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[1] }} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
          <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[2] }} />
          <Image style={{ width: width * 0.4, height: height * 0.2, borderRadius: 10 }} resizeMode="stretch" source={{ uri: item.pic[3] }} />
        </View>
        <TouchableOpacity style={{flexDirection:"row",width:width*0.2,height:50,alignItems:"center",marginTop:15,marginLeft:"70%"}} >
          <View style={{width:50,height:40}}><Text style={{fontWeight:"bold",fontSize:16}}>我想要</Text></View>
          <LottieView style={{width:60,height:40}} source={require('../../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
        </TouchableOpacity>
      </View>

    </FlipCard>
    )
  }

  render() {
    const Imgref = createRef();
    console.log('data',this.state.data);
    const {data} = this.state;
    return (
      <View style={{ width }}>

        <BlurView blurType="dark" blurAmount={4000} style={{ position: 'absolute', height: '100%', width: '100%'}}>
          <Animated.Image source={{uri:this.state.imgUrl}} resizeMode="stretch" style={{ opacity: 0.5}} />
        </BlurView>
       
        <ScrollView
         style={{height:height -50}}
         ref={ref => this.scrollRef = ref}
         onScroll={(e) =>{
           if (e.nativeEvent.contentOffset.y === 0 ){
             DeviceEventEmitter.emit('scrollview',1);
           }
           }}>    
        <FlatList
        data={data}
       // horizontal
        //pagingEnabled={true}
        keyExtractor={(item, index) => (index + '1')}
        renderItem={this.renderDate.bind(this)}
        ref={ref => this.scrollRef = ref}
                onScroll={(e) =>{
                  if (e.nativeEvent.contentOffset.y === 0 ){
                    DeviceEventEmitter.emit('scrollview',1);
                  }
                  }}
        />
      </ScrollView>
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
