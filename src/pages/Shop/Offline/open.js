import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Animated,
    Dimensions
} from 'react-native';

import Images from './index';
const { width, height } = Dimensions.get("window")
const DUMMY_TEXT = "Lorem ipsum dolor sit amet,consectetur adipisicing elit.\
Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo \
reprehenderit optio amet ab temporibus asperiores quasi cupiditate. \
Voluptatum ducimus voluptates voluptas?"


export default class open extends React.Component
{

  state={
      activeImage: null,
      activeIndex: null,
      size: new Animated.ValueXY(),
      position: new Animated.ValueXY(),
      animation: new Animated.Value(0)
  }

  componentWillMount(){
      this._gridImages = {};
  }

  handleOpeningImage = (idx) => {
    this._gridImages[idx].measure((x, y, width, height, pageX, pageY) => {
        this._x = pageX
        this._y = pageY
        this._width = width
        this._height = height

        this.state.position.setValue({
            x: pageX,
            y: pageY
        })

        this.state.size.setValue({
            x: width,
            y: height
            
        })

        this.setState({
            activeImage: Images[idx],
            activeIndex: idx
        }, () => {
            this._viewImage.measure((tX, tY, tWidth, tHeight, tPageX, tPageY) => {
                Animated.parallel([
                    Animated.spring(this.state.position.x, {
                        toValue: tPageX
                    }),
                    Animated.spring(this.state.position.y, {
                        toValue: 0
                    }),
                    Animated.spring(this.state.size.x, {
                        toValue: tWidth
                    }),
                    Animated.spring(this.state.size.y, {
                        toValue: tHeight
                    }),
                    Animated.spring(this.state.animation, {
                        toValue: 1
                    })
                ]).start()
            })
        })
    })
  }

  handleClose = () => {
      Animated.parallel([
        Animated.timing(this.state.position.x, {
              toValue: this._x,
              duration: 250
          }),
          Animated.timing(this.state.position.y, {
            toValue: this._y,
            duration: 250
          }),
          Animated.timing(this.state.size.x, {
            toValue: this._width,
            duration: 250
          }),
          Animated.timing(this.state.size.y, {
            toValue: this._height,
            duration: 250
          }),
          Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 250
          })
      ]).start(() => {
          this.setState({
              activeImage: null
          })
      })
  }

  renderFocusableImages = () => {

    const activeIndexStyle = {
        opacity: this.state.activeImage ? 0 : 1
    }

    return (
        <View style={styles.grid}>
            {
                Images.map((src, idx) => {

                    const activeStyle = idx === this.state.activeIndex ? activeIndexStyle : undefined
                    return (
                        <TouchableOpacity
                        style={{flexDirection:"column-reverse"}}
                            key={idx}
                            onPress={() => this.handleOpeningImage(idx)}
                        >
                            <Image
                            // imageStyle={{borderRadius:15}}
                                source={src}
                                resizeMode="cover"
                                style={[styles.photoStyle, activeStyle]}
                                ref={image => this._gridImages[idx] = image}
                            />
                            <View style={{width: width*0.45,height:width*0.2,borderBottomLeftRadius:15,borderBottomRightRadius:15,backgroundColor:"rgba(255,255,255,0.8)",position:"absolute",  marginLeft:width*0.033,}}></View>
                            {/* 外面图片的大小 */}
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
  }

  renderImageDummyData = () => {
    const animatedContentTranslate = this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [500, 0]
    })

    const animatedContentStyle = {
        opacity: this.state.animation,
        transform: [
            {
                translateY: animatedContentTranslate
            }
        ]
    }
      return (
            <Animated.View
                style={[styles.content, animatedContentStyle]}
            >
                <View style={styles.headingStyle}>
                <ScrollView>
                    <Text style={styles.contentStyle}>
                    {DUMMY_TEXT}
                </Text>
                </ScrollView>
                </View>
            </Animated.View>
      )
  }
  renderImageCloseButton = () => {
    const animatedCloseStyle = {
        opacity: this.state.animation
    }
    return (
        <TouchableWithoutFeedback onPress={this.handleClose}>
            <Animated.View  style={[styles.close, animatedCloseStyle]}>
                <Text style={styles.closeText}>X</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
  }

  renderActiveImage = () => {
    const activeImageStyle = {
        width: this.state.size.x,
        height: this.state.size.y,
        top: this.state.position.y,
        left: this.state.position.x
    }
    return (
        <Animated.Image
            key={this.state.activeImage}
            source={this.state.activeImage}
            resizeMode="cover"
            style={[styles.viewImage, activeImageStyle]}
        />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            {this.renderFocusableImages()}
        </ScrollView>

        <View 
            style={StyleSheet.absoluteFill}
            pointerEvents={this.state.activeImage ? "auto" : "none"}
        >
            <View
                style={styles.topContent}
                ref={image => this._viewImage = image}
                onLayout={() => {}} // For Android
            >
            </View>
            {this.renderImageDummyData()}
        </View>
        {this.renderActiveImage()}
        {this.renderImageCloseButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  grid: {
      
      flexDirection: 'row',
      flexWrap: "wrap-reverse",
    //   width:width,
    //   height:height*0.93
    // justifyContent:"space-around"
  },
  photoStyle: {
      width: width*0.45,
      height: height*0.3,
      marginLeft:width*0.033,
      marginTop:width*0.033,
    //   elevation:5
      borderRadius:15,
      
  },
  topContent: {
      flex: 2, 
  },
  content: {
      flex: 3,
      backgroundColor: 'rgb(240, 240, 240)'
  },
  viewImage: {
      width: width,
      height: height*0.01,
      position: "absolute",
      top: 0,
      left: 0
  },
  headingStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
      fontSize: 28,
  },
  contentStyle: {
    margin: 10
  },
  close: {
      position: "absolute",
      top: 20,
      right: 20
  },
  closeText: {
      backgroundColor: "transparent",
      fontSize: 28,
      color: "#FFF"
  }
});

