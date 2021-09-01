import React, { Component, createRef, useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native'
/**
 * 下面两个包需要手动下载
 */
import FlipCard from 'react-native-flip-card';
import Swiper from 'react-native-swiper'
let { height, width } = Dimensions.get('window');

export default class OldBank extends Component {
  UNSAFE_componentWillMount = () => {
    this.state.fadeAnim = new Animated.Value(1)
  }
  state = {
    imgUrl: {
      uri: 'https://img1.baidu.com/it/u=1605489254,3208869051&fm=26&fmt=auto&gp=0.jpg',
      uri: 'https://img1.baidu.com/it/u=1605489254,3208869051&fm=26&fmt=auto&gp=0.jpg',
      uri: 'https://img1.baidu.com/it/u=1605489254,3208869051&fm=26&fmt=auto&gp=0.jpg'
    },         //第一张背景
  }
  switch = (index) => {
    this.state.fadeAnim = new Animated.Value(0.1)
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start()
    if (index == 0) {
      this.setState({ imgUrl: { uri: 'http://47.100.78.254:3000/public/images/2.jpg' } })
    }
    if (index == 1) {
      this.setState({ imgUrl: { uri: 'https://img1.baidu.com/it/u=3476655050,4029386946&fm=26&fmt=auto&gp=0.jpg' } })
    }
    if (index == 2) {
      this.setState({ imgUrl: { uri: 'http://47.100.78.254:3000/public/images/2.jpg' } })
    }
    if (index == 3) {
      this.setState({ imgUrl: { uri: 'https://img1.baidu.com/it/u=3476655050,4029386946&fm=26&fmt=auto&gp=0.jpg' } })
    }
    if (index == 4) {
      this.setState({ imgUrl: { uri: 'http://47.100.78.254:3000/public/images/2.jpg' } })
    }
    if (index == 5) {
      this.setState({ imgUrl: { uri: 'https://img1.baidu.com/it/u=3476655050,4029386946&fm=26&fmt=auto&gp=0.jpg' } })
    }
  }
  render() {


    return (
      <View style={{ flex: 1 }}>
        {/* <Animated.Image ref={Imgref} resizeMode='stretch' source={this.state.imgUrl} style={[styles.imageBackground, animatedStyle]} /> */}
        <Swiper style={{}}
          removeClippedSubviews={false}
          showsPagination={false}
          showsButtons={false}         //显示控制按钮
          loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
          autoplay={false}
          height={600}
          onIndexChanged={(index) => this.switch(index)}
        >
          {/* <FlipCard
            style={{}}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
           
          >
            <View style={styles.slide}>
              <Image source={{ uri: 'https://img1.baidu.com/it/u=3102336817,2216289337&fm=26&fmt=auto&gp=0.jpg' }} style={styles.image} />
            </View>
            <View style={{ backgroundColor: "grey", marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: '500', justifyContent: 'center', alignItems: 'center', }}>
                  第一张图片翻转后的
                </Text>
              </View>
            </View>
          </FlipCard> */}

          <FlipCard
            style={{}}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}

          >
            <View style={styles.slide}>
              <Image source={{ uri: 'https://img2.baidu.com/it/u=106635626,1403223942&fm=26&fmt=auto&gp=0.jpg' }} />
            </View>
            <View style={[{ backgroundColor: '#595f79', marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
              <ScrollView style={{ height: 400 }}>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '500', justifyContent: 'center', alignItems: 'center', }}>
                    第二张图片反转后的
                  </Text>
                </View>
              </ScrollView>
            </View>
          </FlipCard>
          <FlipCard
            style={styles.card}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
          >
            <View style={styles.slide}>
              <Image source={{ uri: 'https://img2.baidu.com/it/u=3165790811,619175679&fm=26&fmt=auto&gp=0.jpg' }} style={styles.image} />
            </View>
            <View style={{ backgroundColor: '#595f79', marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
              <ScrollView style={{ height: 400 }}>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '500', justifyContent: 'center', alignItems: 'center', }}>
                    第三张图片翻转后的
                  </Text>
                </View>
              </ScrollView>
            </View>
          </FlipCard>
        </Swiper>
      </View>
    )
  }
};

const styles = StyleSheet.create({

  imageBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.15,
  },
  slide: {
    width: '100%',
    // backgroundColor:"red",
    // includeFontPadding: false,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: '#9bebe5'
  },
  image: {
    width: '75%',
    height: '70%',
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#FFF"
  },
});

