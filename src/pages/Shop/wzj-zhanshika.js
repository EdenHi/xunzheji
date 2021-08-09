import React, { Component, createRef, useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
} from 'react-native'
/**
 * 下面两个包需要手动下载
 */
import FlipCard from 'react-native-flip-card';
import Swiper from 'react-native-swiper'


class App extends Component {
  UNSAFE_componentWillMount = () => {
    this.state.fadeAnim = new Animated.Value(1)
  }
  state = {
    imgUrl: require('http://8.142.11.85:3000/public/images/5.jpg')
  }
  switch = (index) => {
    this.state.fadeAnim = new Animated.Value(0.4)
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start()
    if (index == 0) {
      this.setState({ imgUrl: require('http://8.142.11.85:3000/public/images/5.jpg') })
    } else if (index == 1) {
      this.setState({ imgUrl: require('http://8.142.11.85:3000/public/images/5.jpg') })
    } else {
      this.setState({ imgUrl: require('http://8.142.11.85:3000/public/images/5.jpg') })
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
        <Text style={styles.text}>首页</Text>
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
              <Image style={{ height: pxToDp(150), width: pxToDp(350), borderRadius: 20 }} source={require('../../../images/j1.jpg')}></Image>
            </View> */}
            <View style={styles.slide}>
              <Image source={require('http://8.142.11.85:3000/public/images/5.jpg')} style={styles.image} />
            </View>
            {/* Back Side */}

            <View style={[{ backgroundColor: '#595f79', marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
              <ScrollView style={{ height: 400 }}>
                <View>
                <Image source={require('http://8.142.11.85:3000/public/images/5.jpg')}  />
                  <Text style={{ fontSize: 14, fontWeight: '500', justifyContent: 'center', alignItems: 'center', }}>
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
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
              <Image style={{ height: pxToDp(150), width: pxToDp(350), borderRadius: 20 }} source={require('../../../images/j1.jpg')}></Image>
            </View> */}
            <View style={styles.slide}>
              <Image source={require('http://8.142.11.85:3000/public/images/5.jpg')} style={styles.image} />
            </View>
            {/* Back Side */}

            <View style={[{ backgroundColor: '#595f79', marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
              <ScrollView style={{ height: 400 }}>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '500', justifyContent: 'center', alignItems: 'center', }}>
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
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
              <Image style={{ height: pxToDp(150), width: pxToDp(350), borderRadius: 20 }} source={require('../../../images/j1.jpg')}></Image>
            </View> */}
            <View style={styles.slide}>
              <Image source={require('http://8.142.11.85:3000/public/images/5.jpg')} style={styles.image} />
            </View>
            {/* Back Side */}

            <View style={[{ backgroundColor: '#595f79', marginLeft: 5, height: '90%', width: '97%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
              <ScrollView style={{ height: 400 }}>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '500', justifyContent: 'center', alignItems: 'center', }}>
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
                    骆宾王,字观光，婺州义乌（今浙江义乌）人，唐代诗人，与王勃、卢照邻、杨炯并称为“初唐四杰”。
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
    // includeFontPadding: false,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: '#9bebe5'
  },
  image: {
    width: '80%',
    height: '80%'
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  }
});

export default App;
