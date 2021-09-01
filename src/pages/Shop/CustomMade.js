/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Carousel from 'react-native-snap-carousel';
const { height, width } = Dimensions.get('window');
export default class CustomMade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "老字号出道",
          text: "文创定制",
          img: "http://47.100.78.254:3000/public/images/wenchuang.jpg",
          t1: "T恤定制",
          t2: "手机壳定制",
          t3: "帆布袋定制"
        },
        {
          title: "非遗大师",
          text: "手工定制",
          img: "http://47.100.78.254:3000/public/images/feiyi.jpg",
          t1: "皮影定制",
          t2: "木刻定制",
          t3: "香包定制"
        },
        {
          title: "投资收藏",
          text: "名家定制",
          img: "http://47.100.78.254:3000/public/images/16.jpg",
          t1: "T恤定制",
          t2: "手机壳定制",
          t3: "帆布袋定制"
        },
      ]
    }
  }
  go_papg(index) {
    if (index === 0) {
      this.props.navigation.navigate('CulturalCreation')
    }
    if (index === 1) {
      this.props.navigation.navigate('dingzhi')
    }
    if (index === 2) {
      this.props.navigation.navigate('MinJia')
    }
  }
  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        height: height * 0.7,
        elevation: 5,
      }}>
        <View style={{ width: "100%", height: "65%" }}>
          <ImageBackground style={{ width: "100%", height: "100%" }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.img }}>
            <View style={{ width: width * 0.4, height: height * 0.06, backgroundColor: "#f5e7aa", borderTopLeftRadius: 10, borderBottomRightRadius: 10, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 13, color: "#fff" }}>已有10人参与</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ width: "100%", height: "40%", alignItems: "center" }}>
          <View style={{ width: "100%", height: "60%", flexDirection: "row" }}>
            <View style={{ width: "60%", height: "100%" }}>
              <Text style={{ fontSize: 15, marginLeft: "10%", marginTop: "5%", color: "#7cc0c0" }}>{item.title}</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "10%", marginTop: "5%", color: "#7cc0c0" }}>{item.text}</Text>
            </View>
            <View style={{ width: "40%", height: "100%", }}>
              <Text style={{ fontSize: 13, marginLeft: "10%", marginTop: "5%", color: "#7cc0c0" }}>{item.t1}</Text>
              <Text style={{ fontSize: 13, marginLeft: "10%", marginTop: "5%", color: "#7cc0c0" }}>{item.t2}</Text>
              <Text style={{ fontSize: 13, marginLeft: "10%", marginTop: "5%", color: "#7cc0c0" }}>{item.t3}</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.go_papg(index)}
            style={{ width: "50%", height: "20%", backgroundColor: "#7cc0c0", borderRadius: 20, alignItems: "center", justifyContent: "center", elevation: 10 }}>
            <Text style={{ fontSize: 15, color: "#fff" }}>去定制</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ width: width, height: height }}>
        <LinearGradient style={{ width: width, height: "100%" }} colors={["#7cc0bf", "#fff", "#fff"]} >
          <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center" }}>
            <TouchableOpacity activeOpacity={1} style={{width:width*0.06}}>
            <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
              {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85 }}>定制</Text>
          </View>
          <SafeAreaView style={{ flex: 1, paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
              <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={350}
                itemWidth={300}
                renderItem={this._renderItem.bind(this)}
                onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }
}

