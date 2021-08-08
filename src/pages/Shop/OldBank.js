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

export default class OldBank extends Component{
  UNSAFE_componentWillMount = () => {
    this.state.fadeAnim = new Animated.Value(1)
  }
  state = {
    imgUrl: {uri:'http://8.142.11.85:3000/public/images/5.jpg'}//第一张背景
  }
  switch = (index) => {
    this.state.fadeAnim = new Animated.Value(0.4)
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start()
    if (index == 0) {
      this.setState({ imgUrl: {uri:'http://8.142.11.85:3000/public/images/2.jpg'} })
    } else if (index == 1) {
      this.setState({ imgUrl: {uri:'http://8.142.11.85:3000/public/images/2.jpg'} })
    } else {
      this.setState({ imgUrl: {uri:'http://8.142.11.85:3000/public/images/2.jpg'} })
    }
  }
  render () {
    const Imgref = createRef();
    const animatedStyle = {
      opacity: this.state.fadeAnim,
    }
    return (
      <View style={{ flex: 1 }}>
        <Animated.Image ref={Imgref} source={this.state.imgUrl} style={[styles.imageBackground, animatedStyle]} />
        <Text onPress={()=>this.props.navigation.navigate('DaoHang')} style={styles.text}>底部图片</Text>
        <Swiper style={styles.wrapper}
          removeClippedSubviews={false}
          showsPagination={false}
          showsButtons={false}         //显示控制按钮
          loop={false}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
          autoplay={false}
          onIndexChanged={(index) => this.switch(index)}
        // width= '90%'            
        >
          <FlipCard
            style={styles.card}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={false}
            clickable={true}
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            {/* Face Side */}
            {/* <View style={[{ backgroundColor: '', marginLeft: pxToDp(5) }, styles.face]}>
              <Image style={{ height: pxToDp(150), width: pxToDp(350), borderRadius: 20 }} source={{uri:'http://8.142.11.85:3000/public/images/./imag}s/j1.jpg')}></Image>
            </View> */}
            <View style={styles.slide}>
              <View style={{width:"20%"}}></View>
              <Image source={{uri:'http://8.142.11.85:3000/public/images/2.jpg'}} style={styles.image} />
            </View>
            {/* Back Side */}

            <View style={[{ backgroundColor:"grey" ,marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
              <ScrollView style={{ height: 400 }}>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '500', justifyContent: 'center', alignItems: 'center', }}>
                    第一张图片翻转后的
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
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
         
            <View style={styles.slide}>
              <Image source={{uri:'http://8.142.11.85:3000/public/images/2.jpg'}} style={styles.image} />
            </View>
            {/* Back Side */}

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
            onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
          >
            {/* Face Side */}
            {/* <View style={[{ backgroundColor: '', marginLeft: pxToDp(5) }, styles.face]}>
              <Image style={{ height: pxToDp(150), width: pxToDp(350), borderRadius: 20 }} source={{uri:'http://8.142.11.85:3000/public/images/./imag}s/j1.jpg')}></Image>
            </View> */}
            <View style={styles.slide}>
              <Image source={{uri:'http://8.142.11.85:3000/public/images/2.jpg'}} style={styles.image} />
            </View>
            {/* Back Side */}

            <View style={[{ backgroundColor: '#595f79', marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
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
  wrapper: {
    // width: '90%',
  }, //整体样式
  imageBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 1,
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
    borderRadius:20,
    elevation:5,
    backgroundColor:"#FFF"
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  }
});

