import { LayoutAnimation, Animated, Dimensions, Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Constants } from 'expo';
import { ImageBackground } from 'react-native';
var { height, width } = Dimensions.get('window');

const smallSize = width / 5;
const itemWidth = width * .67;
const itemHeight = height / 2 - 50;
const fontSize = 50;


const COLORS = ['coral', 'mediumturquoise', 'palevioletred', 'papayawhip', 'tomato']
const ITEMS = [
  'https://img0.baidu.com/it/u=2760969569,3249886625&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
  'http://8.142.11.85:3000/public/images/xiaoshao1.png',
  'http://8.142.11.85:3000/public/images/shaoxin1.png',
  'http://8.142.11.85:3000/public/images/taizhou1.png',
  'https://img0.baidu.com/it/u=2760969569,3249886625&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
  ''
]

// const SMALL_ITEMS = [
//   'https://img0.baidu.com/it/u=2760969569,3249886625&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',
//   'https://s-media-cache-ak0.pinimg.com/236x/8e/e3/ef/8ee3efa5a843f2c79258e3f0684d306e.jpg',
//   'https://s-media-cache-ak0.pinimg.com/236x/f1/1c/26/f11c26247021daeac5ec8c3aba1792d1.jpg',
//   'https://s-media-cache-ak0.pinimg.com/236x/fa/5c/a9/fa5ca9074f962ef824e513aac4d59f1f.jpg',
//   'https://s-media-cache-ak0.pinimg.com/236x/95/bb/e4/95bbe482ca9744ea71f68321ec4260a2.jpg',
//   'https://s-media-cache-ak0.pinimg.com/564x/54/7d/13/547d1303000793176aca26505312089c.jpg',
//   ''
// ]


export default class ShangBang extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollX: new Animated.Value(0),
      indicator: new Animated.Value(1),
      data:[
       { text1:'湖州商帮'},
       { text1:'绍兴商帮'},
       { text1:'台州商帮'},
       { text1:'湖州商帮'},
       { text1:'湖州商帮'},
       { text1:'湖州商帮'},
      ]
    }
  }

  componentDidMount() {
    LayoutAnimation.spring()
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{height: 20 + height / 2}}> */}
        {this.renderScroll()}
        {/* </View> */}
      </View>
    );
  }

  renderScroll() {
    return <Animated.ScrollView
      horizontal={true}
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}
      decelerationRate={0}
      snapToInterval={itemWidth}
      scrollEventThrottle={16}
      snapToAlignment="start"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }]
      )}
    >
      {ITEMS.map((image, i) => {
        return this.renderRow(image, i)
      })}
    </Animated.ScrollView>
  }


  // renderNormal(image, i) {
  //   if (image === '' ) {
  //     return null
  //   }

  //   return <View key={i}  style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
  //       <Image source={{uri: image}} style={[{height: smallSize, width: smallSize, opacity: 1, resizeMode: 'cover'}]} />
  //       <View style={{marginLeft: 20}}>
  //         <Text style={{fontWeight: '600', fontSize: 16}}>Words of wisdom</Text>
  //         <Text style={{fontWeight: '300', fontSize: 12}}>We live in a world of deadlines</Text>
  //       </View>
  //     </View>
  // }

  renderRow(image, i) {
    let inputRange = [(i - 1) * itemWidth, i * itemWidth, (i + 1) * itemWidth, (i + 2) * itemWidth];
    let secondRange = [(i - 1) * itemWidth, i * itemWidth, (i + 1) * itemWidth]

    // Ensure that we're leaving space for latest item.
    if (image === '') {
      return <View key={i} style={[styles.emptyItem, { width: width * .33 }]}></View>
    }

    return (
      <Animated.View key={i} style={[styles.emptyItem, {
        opacity: this.state.scrollX.interpolate({
          inputRange: secondRange,
          outputRange: [.3, 1, 1]
        }),
        height: this.state.scrollX.interpolate({
          inputRange: secondRange,
          outputRange: [itemHeight * .8, itemHeight, itemHeight],
        })
      }]}>
        <ImageBackground  key={i} source={{ uri: image }} style={[StyleSheet.AbsoluteFill, { height: itemHeight, width: itemWidth, borderRadius: 20, opacity: 1, resizeMode: 'cover' }]}>
          <View style={[StyleSheet.AbsoluteFill, { opacity: 0.4, backgroundColor: COLORS[i], width: itemWidth, height: itemHeight }]}></View>
          <Animated.View
            style={[{
              width: itemWidth,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flex: 1,
              position: 'relative',
              height: itemHeight,
              opacity: this.state.scrollX.interpolate({
                inputRange,
                outputRange: [0.4, 1, 1, 1]
              }),
              transform: [{
                scale: this.state.scrollX.interpolate({
                  inputRange,
                  outputRange: [.5, 1, 1.4, 1]
                })
              }]
            }]}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: itemWidth, height: itemHeight, position: 'absolute', bottom: -itemHeight / 3, }}>
              {/* <Text style={{fontSize: fontSize,color: 'rgba(0,0,0,0.4)'}}>{i + 1}</Text> */}
              <Text style={{ fontSize: fontSize, color: '#7cc0c0', opacity: 0.8 }}>湖州商帮</Text>
              {/* <Text style={{fontSize: fontSize,color: '#7cc0c0'}}>商帮</Text> */}

            </View>
          </Animated.View>
        </ImageBackground>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.45,
    width: width * 0.9,
    marginLeft: -20
    // backgroundColor:"red",

  },
  emptyItem: {
    overflow: 'hidden',
    height: itemHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 20,
    borderColor: 'white',
    width: itemWidth,
    backgroundColor: 'transparent',
  },
  // heading: {
  //   fontSize: 22,
  //   fontWeight: '300',
  //   alignSelf: 'flex-start',
  //   paddingHorizontal: 10,
  //   paddingVertical: 10,
  // }
});
