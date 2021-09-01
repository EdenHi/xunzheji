import { LayoutAnimation, Animated, Dimensions, Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Constants } from 'expo';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
var { height, width } = Dimensions.get('window');

const smallSize = width / 5;
const itemWidth = width * 0.7;
const itemHeight = width * 0.7;
const fontSize = 50;


const COLORS = ['coral', 'mediumturquoise', 'palevioletred', 'papayawhip', 'tomato']
const ITEMS = [
  { img: 'http://8.142.11.85:3000/public/images/xiaoshao1.png', name: "萧绍商帮", item: "萧绍地区即古越文化的核心地区，萧绍商帮是指活跃在萧绍平原上的萧山，萧山和绍兴是浙江经济最为发达的地区，是中国最大的纺织化纤制造基地。" },
  { img: 'http://8.142.11.85:3000/public/images/huzhou1.png', name: "湖州商帮", item: "湖商，是继徽商、晋商之后，在近代中国涌现的具有强烈地域特征的商人群体。" },
  { img: 'http://8.142.11.85:3000/public/images/quzhou1.png', name: "龙游商帮", item: "明清时期中国十大商帮之一，主要指历史上今浙江境内金丽衢地区商人的集合，它以原衢州府龙游县为中心。" },
  { img: 'http://8.142.11.85:3000/public/images/shaoxin1.png', name: "绍兴越商", item: "绍兴越商，是中国一大商帮，从民国时期逐鹿上海滩、控制金融命脉的绍兴帮。" },
  { img: 'http://8.142.11.85:3000/public/images/ningbo1.png', name: "宁波商帮", item: "甬商（即宁波籍商人）是中国近代最大的商帮，为中国民族工商业的发展做出了贡献，推动了中国工商业的近代化。" },
  { img: 'http://8.142.11.85:3000/public/images/wenzhou1.png', name: "温州商帮", item: "温州商人有经商传统，改革开放之后，温州商人更活跃于国内外商界。" },
  { img: 'http://8.142.11.85:3000/public/images/taizhou1.png', name: "台州商帮", item: "台州早有经商传统，改革开放之后，台州商人更活跃于国内外商界。" },
  { img: 'http://8.142.11.85:3000/public/images/yiwu1.png', name: "义乌商帮", item: "义乌以制造、经营小商品闻名于世，其小商品行销全球。义乌商人 “鸡毛换糖” 的商业行为，被列为浙商标志性事件第一名。" },

]


// const SMALL_ITEMS = [
//   {img:'https://img0.baidu.com/it/u=2760969569,3249886625&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889',name:"萧绍商帮"},
//   {img:'https://s-media-cache-ak0.pinimg.com/236x/8e/e3/ef/8ee3efa5a843f2c79258e3f0684d306e.jpg',name:"萧a绍商帮"},
//   {img:'https://s-media-cache-ak0.pinimg.com/236x/f1/1c/26/f11c26247021daeac5ec8c3aba1792d1.jpg',name:"萧绍a商帮"},
//   {img:'https://s-media-cache-ak0.pinimg.com/236x/fa/5c/a9/fa5ca9074f962ef824e513aac4d59f1f.jpg',name:"萧绍商a帮"},
//   {img:'https://s-media-cache-ak0.pinimg.com/236x/95/bb/e4/95bbe482ca9744ea71f68321ec4260a2.jpg',name:"萧绍商帮"},
//   {img:'https://s-media-cache-ak0.pinimg.com/564x/54/7d/13/547d1303000793176aca26505312089c.jpg',name:"萧绍商帮"},
//   ''
// ]


export default class ShangBang extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollX: new Animated.Value(0),
      indicator: new Animated.Value(1),
      data: [
        { text1: '湖州商帮' },
        { text1: '绍兴商帮' },
        { text1: '台州商帮' },
        { text1: '湖州商帮' },
        { text1: '湖州商帮' },
        { text1: '湖州商帮' },
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
      snapToInterval={width * 0.75}
      scrollEventThrottle={20}
      snapToAlignment="start"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }]
      )}
    >
      {ITEMS.map((k, i) => {
        return this.renderRow(k, i)
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

  renderRow(k, i) {
    let inputRange = [(i - 1) * itemWidth, i * itemWidth, (i + 1) * itemWidth, (i + 2) * itemWidth];
    let secondRange = [(i - 1) * itemWidth, i * itemWidth, (i + 1) * itemWidth]

    // Ensure that we're leaving space for latest item.
    if (k === '') {
      return <View key={i} style={[styles.emptyItem, { width: width * 0.2 }]}></View>
    }

    return (
      <TouchableOpacity activeOpacity={1}>
        <Animated.View key={i} style={[styles.emptyItem, {
          opacity: this.state.scrollX.interpolate({
            inputRange: secondRange,
            outputRange: [.3, 1, 1]
          }),
          height: this.state.scrollX.interpolate({
            inputRange: secondRange,
            outputRange: [itemHeight * 0.7, itemHeight, itemHeight],
          })
        }]}>
          <ImageBackground key={i} source={{ uri: k.img }} style={[StyleSheet.absoluteFill, { height: itemHeight, width: itemWidth, borderRadius: 20, opacity: 1, resizeMode:'stretch' }]}>
            <View style={[StyleSheet.absoluteFill, { opacity: 0.5, width: itemWidth, height: itemHeight }]}></View>
            <Animated.View
              style={[{
                width: width * 0.7,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flex: 1,
                position: 'relative',
                height: itemHeight,
                opacity: this.state.scrollX.interpolate({
                  inputRange,
                  outputRange: [0.5, 1, 1, 1]
                }),
                transform: [{
                  scale: this.state.scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 1, 1]
                  })
                }]
              }]}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: width * 0.7, height: itemHeight, position: 'absolute', bottom: -itemHeight / 2.8, }}>
                {/* <Text style={{fontSize: fontSize,color: 'rgba(0,0,0,0.4)'}}>{i + 1}</Text> */}
                <View style={{ width: "100%", height: height * 0.2, backgroundColor: "rgba(255,255,255,0.8)", padding: 10 }}>
                  <Text style={{ fontSize: 15, color: "#333", fontWeight: "bold" }}>{k.name}</Text>
                  <Text style={{ fontSize: 13, color: "#333" ,lineHeight:25}}>{k.item}</Text>
                </View>
                {/* <Text style={{fontSize: 40,color: '#7cc0c0',fontWeight:"bold",opacity:0.9}}>湖州商帮</Text> */}
                {/* <Text style={{fontSize: fontSize,color: '#7cc0c0'}}>商帮</Text> */}
              </View>
            </Animated.View>
          </ImageBackground>
        </Animated.View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.35,
    width: width * 0.9,
    // marginLeft:-20
    // backgroundColor:"red",

  },
  emptyItem: {
    overflow: 'hidden',
    height: itemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    width: width * 0.7,
    borderRadius: 15,
    elevation: 2,

    marginRight: width * 0.05
  },

});
