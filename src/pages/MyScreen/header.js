/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  // ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Platform,
  ToastAndroid,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import ListView from 'deprecated-react-native-listview'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {height, width} = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375;
export default class AboutComponent {
  
  /**
     * 这些参数可以根据自己的需要传递
     * 比如常见的我的，设置，关于等
     * @param props
     * @param updateState
     * @param flag
     * @param config

     */
  constructor(props, updateState, flag, config) {
    this.props = props;
    this.updateState = updateState;
    this.flag = flag;
    this.config = config;
  }


  /**
   * 配置ParallaxScrollView
   * @param params
   * @returns {{}}
   */
  renderParallaxScrollView(params) {
    let config = {};
    config.renderBackground = () => <View key="background" />;

    config.renderForeground = () => (
      <View key="parallax-header" style={styles.parallaxHeader}>
        <ImageBackground
          style={{
            width: width,
            height: '100%',
            flexDirection: 'column-reverse',
          }}
          source={{
            uri: params.backpic,
          }}>
          <View
            style={{
              width: '100%',
              height: '75%',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <View
              style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: width * 0.21,
                  height: width * 0.21,
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  marginLeft: '5%',
                }}
                source={{uri:params.portrait}}
              />
              <View
                style={{
                  width: '70%',
                  height: '80%',
                  marginLeft: '3%',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{fontSize: 15, color: '#7cc0c0', fontWeight: 'bold'}}>
                  {params.nickname}
                </Text>
                <Text style={{fontSize: 13, color: '#7cc0c0'}}>{params.signature === '' ? '暂无个性签名' : params.signature }</Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', width: '30%',backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",marginTop:"10%",justifyContent:"center",borderTopRightRadius:20,borderBottomRightRadius:20}}>
                <TouchableOpacity

                activeOpacity={1}
                  style={{
                    width: '50%',
                    height: '60%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 15, color: '#fff'}}>{params.fensi}</Text>
                  <Text style={{fontSize: 15, color: '#fff'}}>粉丝</Text>
                </TouchableOpacity>
                <TouchableOpacity
                //  onPress={() => navigation.navigate('Concerns')}
                activeOpacity={1}
                  style={{
                    width: '50%',
                    height: '70%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 15, color: '#fff'}}>{params.guanzhu}</Text>
                  <Text style={{fontSize: 15, color: '#fff'}}>关注</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
              activeOpacity={1}
                style={{
                  width: '25%',
                  height: '30%',
                  borderRadius: 20,
                  marginLeft: '15%',
                  marginTop: '8%',
                  backgroundColor: '#7cc0c0',
                  elevation:5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={()=>this.props.navigation.navigate('bianjiziliao',{
                    username:params.username,
                    portrait:params.portrait,
                    nickname:params.nickname,
                    sex:params.sex,
                    birthday:params.birthday,
                    signature:params.signature,
                    phone:params.phone,
                    area:params.area,
                    backpic:params.backpic,
                })}>

                <Text style={{fontSize: 15, color: '#fff'}}>编辑资料</Text>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={1}
                style={{
                  width: '20%',
                  height: '30%',
                  borderRadius: 20,
                  elevation:5,
                  marginLeft: '5%',
                  marginTop: '8%',
                  backgroundColor: '#7cc0c0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={()=>this.props.navigation.navigate('shezhi')}>
                <Text style={{fontSize: 15, color: '#fff'}}>设置</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
    config.renderStickyHeader = () => (
      <View key="sticky-header" style={styles.stickySection}>
        <Image
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#7cc0c0',
            marginLeft: '10%',
            borderRadius: 50,
          }}
          source={{uri:params.portrait}}
        />
        <Text style={styles.stickySectionText}>{params.nickname}</Text>
      </View>
    );
    config.renderFixedHeader = () => (
      <View key="fixed-header" style={styles.fixedSection}>
        <TouchableOpacity
        activeOpacity={1}
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
          >
          <Feather name="menu" size={25} color="#7cc0c0" />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={1}
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name="external-link" size={25} color="#7cc0c0" />  
        </TouchableOpacity>
      </View>
    );
    return config;
  }

  /**
   *
   * @param contentView
   * @param params
   * @returns {XML}
   */
  renderView(contentView, params) {
    this.RenderConfig = this.renderParallaxScrollView(params);

        this.isScroll = false;

    return (
      <ParallaxScrollView
        headerBackgroundColor="#fff"
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={1}
        scrollEnabled={this.isScroll}
        ref={ref => this.scrollRef = ref} 
        onScroll={(e) =>{
          if(e.nativeEvent.contentOffset.y <= 200){
            this.isScroll = true
          }
          }}
        
        {...this.RenderConfig}>
        {contentView}
      </ParallaxScrollView>
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 50;
const ROW_HEIGHT = 50;
const PARALLAX_HEADER_HEIGHT = 250;
const STICKY_HEADER_HEIGHT = 50;
const SCREEN_WIDTH = window.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: STICKY_HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  stickySectionText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
  },
  fixedSection: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fixedSectionText: {
    color: '#fff',
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    // borderColor: '#ccc',
    // borderBottomWidth: 1,
    justifyContent: 'center',
  },
  rowText: {
    fontSize: 20,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
