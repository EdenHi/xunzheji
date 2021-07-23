
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    RefreshControl,
    ActivityIndicator,
    SwipeableFlatList,
    TouchableHighlight,
    SectionList,
    ImageBackground,

} from 'react-native';
import RankCard from '../../../components/RankCard';
import AboutComponent from "./AboutComponent";
let { height,width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class ParallaxScrollViewDemo extends Component {
    constructor(props) {
        super(props)
        this.aboutCommon = new AboutComponent(props, null, null, null);
    }

    render() {
        let contentView = 
        <View style={{width: width, height: 1100, alignItems: "center"}}>
         <View style={{ borderWidth: 0, width: 0.95 * width, marginHorizontal: width * 0.025 }}>
                    <View style={{
                        width: "100%", height: height * 0.211, marginVertical: width * 0.02, borderRadius: 10, backgroundColor: '#fff',elevation: 5,
                    }}>
                        <View style={{ width: width * 0.9, marginHorizontal: width * 0.02, height: "90%", marginVertical: "1.25%", borderRadius: 10 }}>
                            <ImageBackground borderRadius={10} style={{ width: "100%", height: "90%", borderRadius: 10, marginTop: width * 0.005 }} source={{ uri: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c5/g2/M00/05/0C/ChMlWl1BWGKIa5b1AAkDHph43SoAAMQfgALVicACQM2533.jpg' }}>
                                <Text style={{ fontSize: 20 * ratio_w, fontWeight: 'bold', borderWidth: 1, width: "16%", textAlign: 'center', backgroundColor: 'black', color: 'gold', borderTopLeftRadius: 10, borderBottomRightRadius: 10 ,opacity:0.6}}>NO.1</Text>
                            </ImageBackground>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20 * ratio_w, marginTop: -width * 0.015, }}>123</Text>
                                <Text style={{ fontSize: 20 * ratio_w, marginTop: -width * 0.015 }}>123</Text>
                            </View>
                        </View>
                    </View>
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />
                    <RankCard />



                </View>
        </View>

        return this.aboutCommon.renderView(contentView, {
            

        }
        )
    }

}