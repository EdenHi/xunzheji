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
    TouchableHighlight,
    TouchableOpacity,
    ImageBackground,
    Easing, Animated
} from 'react-native';
import LottieView from 'lottie-react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Feather from "react-native-vector-icons/Feather"


// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

let { height,width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375

export default class AboutComponent extends Component{

     constructor(props){
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            
          }
        }
    /**
     * 配置ParallaxScrollView
     * @param params
     * @returns {{}}
     */
    renderParallaxScrollView(params) {
        let config = {};
        config.renderBackground = () => (
            <View key="background">
                <View style={{
                    position: 'absolute',
                    top: 0,
                    width: window.width,
                    backgroundColor: '#fff',
                    height: PARALLAX_HEADER_HEIGHT
                }}>
                </View>
            </View>
        );
        config.renderForeground = () => (
            <View key="parallax-header" style={styles.parallaxHeader}>
                <ImageBackground style={{ width: width, height: "80%" }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}>
                </ImageBackground>
                <View style={{width: "95%", height:"57%", position:"absolute",marginVertical: width * 0.02, borderRadius: 10, backgroundColor: '#fff',elevation: 5,marginTop:100,alignItems:"center",
                    }}>  
                    <LottieView style={{width:"100%",height:"100%"}} source={require('../../animal/trophy.json')} progress={this.state.progress} />
                <View style={{width:80,height:80,position:"absolute",marginTop:-50,alignItems:"center",justifyContent:"center"}}>
                {/* <LottieView style={{width:"100%",height:"100%"}} source={require('../../animal/trophy.json')} progress={this.state.progress} /> */}
                </View>
                    </View>
            </View>
        );
        config.renderStickyHeader = () => (
            <View key="sticky-header" style={styles.stickySection}>
               
                <Text style={styles.stickySectionText}>
                    {/* {params.title} */}
                    榜单详情
                    </Text>
            </View>
        );
        config.renderFixedHeader = () => (
            <View key="fixed-header" style={styles.fixedSection}>
                <TouchableHighlight style={{height: 40, width:40,alignItems:"center",justifyContent:"center"}} onPress={() => {
                    this.props.navigation.goBack();
                }}>
                    <Feather style={styles.icon}
                    name="chevron-left"
                    size={20*ratio_w}
                    color="#49b3c5"
                />
                </TouchableHighlight>
                <TouchableHighlight style={{height: 40, width: 40,alignItems:"center",justifyContent:"center"}} >
                <Feather style={styles.icon}
                    name="share"
                    size={20*ratio_w}
                    color="#49b3c5"
                />
                </TouchableHighlight>
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
                headerBackgroundColor="green"
                stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                backgroundSpeed={10}
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
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        flexDirection: 'row',
        alignItems: "center",
        height: STICKY_HEADER_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: "#fff",
        justifyContent: 'space-around'
    },
    stickySectionText: {
        color: 'black',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        width: SCREEN_WIDTH,
        position: 'absolute',
        height: 50,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
 
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        // borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    },
    left: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    icon: {
        width: "100%",
        height:"100%",
 
    }
});