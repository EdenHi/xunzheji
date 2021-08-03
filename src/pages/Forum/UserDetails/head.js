/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    View,
    Platform,
    ToastAndroid,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { height,width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375;
export default class AboutComponent {


      isPresse() {
        if (this.state.isPressed === false)
          {this.setState({isPressed:true},()=>{});}
        else {
          this.setState({isPressed:false},()=>{});
        }

      }
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
        // this.state = {
        //     isPressed: false
        //   }

    }

    /**
     * 配置ParallaxScrollView
     * @param params
     * @returns {{}}
     */
    renderParallaxScrollView(params) {
        let config = {};
        config.renderBackground = () => (
            <View key="background" />
        );

        config.renderForeground = () => (
            <View key="parallax-header" style={styles.parallaxHeader}>
                <ImageBackground style={{ width: width, height: '100%',flexDirection:'column-reverse'}} source={{ uri:params.backpic }}>
                <View style={{width:'100%',height:'60%',backgroundColor:'#fff',borderTopLeftRadius:15,borderTopRightRadius:15}}>
                    <View style={{width:'100%',height:'20%',flexDirection:'row-reverse',alignItems:'center'}}>
                        <TouchableOpacity style={{width:'15%',height:'85%',borderWidth:1,borderColor:'#7cc0c0',borderRadius:20,margin:'5%',alignItems:'center',justifyContent:'center'}}>
                        <Feather style={styles.icon}
                    name="mail"
                    size={30}
                    color="#7cc0c0"
                />
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:'35%',height:'78%',backgroundColor:'#7cc0c0',borderRadius:20,alignItems:'center',elevation:5,justifyContent:'center'}}>

                        <Text style={{fontSize:15,color:'#fff'}}>关注</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',height:'15%',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{marginLeft:'10%',fontSize:15}}>{params.nickname}</Text>
                        <View style={{width:'15%',height:'50%',alignItems:'center',justifyContent:'center',marginLeft:'5%',borderRadius:10,backgroundColor:'#7cc0c0'}}>
                            <Text style={{fontSize:12}}>Lv1</Text>
                        </View>
                    </View>
                    <View style={{width:'100%',height:'10%',justifyContent:'center'}}>
                        <Text style={{marginLeft:'10%',fontSize:13}}>{params.signature === '' ? '暂无个性签名' : params.signature }</Text>
                    </View>
                    <View style={{width:'100%',height:'15%',flexDirection:'row',alignItems:'center'}}>
                     <View style={{width:'7%',height:'80%',alignItems:'center',justifyContent:'center',backgroundColor:'#f1f1f1',marginLeft:'10%',borderRadius:5}} />
                     <View style={{height:'80%',justifyContent:'center',backgroundColor:'#f1f1f1',marginLeft:'2%',borderRadius:5}}>
                         <Text style={{fontSize:13,margin:3}}>{params.area}</Text>
                     </View>
                    </View>
                    <View style={{width:'100%',height:'30%',marginTop:'5%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <View style={{width:'20%',height:'90%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:25}}>101</Text>
                            <Text style={{fontSize:15}}>获赞</Text>
                        </View>
                        <View style={{width:'20%',height:'90%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:25}}>{params.fensi}</Text>
                            <Text style={{fontSize:15}}>粉丝</Text>
                        </View>
                        <View style={{width:'20%',height:'90%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:25}}>{params.guanzhu}</Text>
                            <Text style={{fontSize:15}}>关注</Text>
                        </View>
                    </View>
                </View>
                <Image style={{width:width*0.28,height:width*0.28,backgroundColor:'#7cc0c0',position:'absolute',borderRadius:50,borderWidth:3,borderColor:'#fff',bottom:'50%',left:'6%'}} source={{uri:params.portrait}}/>
                </ImageBackground>

            </View>
        );
        config.renderStickyHeader = () => (
            <View key="sticky-header" style={styles.stickySection}>
                <Image style={{width:30,height:30,backgroundColor:'#7cc0c0',marginLeft:'10%',borderRadius:50}} source={{uri:params.portrait}}/>
                <Text style={styles.stickySectionText}>{params.nickname}</Text>
            </View>
        );
        config.renderFixedHeader = () => (
            <View key="fixed-header" style={styles.fixedSection}>
                <TouchableOpacity activeOpacity={1} style={{height: 40, width:40,alignItems:'center',justifyContent:'center'}} onPress={() => {
                    this.props.navigation.goBack();
                }}>
                    <Feather style={styles.icon}
                    name="chevron-left"
                    size={30}
                    color="#fff"
                />
                </TouchableOpacity>
                {/* <TouchableHighlight style={{height: 40, width: 40,alignItems:'center',justifyContent:'center'}} >
                <Feather style={styles.icon}
                    name="share"
                    size={30}
                    color="#000"
                />
                </TouchableHighlight> */}
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
        return (
            <ParallaxScrollView
                headerBackgroundColor="#fff"
                stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                backgroundSpeed={1}
                {...this.RenderConfig}>
                {contentView}
            </ParallaxScrollView>
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 50;
const ROW_HEIGHT = 50;
const PARALLAX_HEADER_HEIGHT = 400;
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
        backgroundColor:'#fff',
    },
    stickySectionText: {
        color: 'black',
        fontSize: 15,
        marginLeft:5,
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
