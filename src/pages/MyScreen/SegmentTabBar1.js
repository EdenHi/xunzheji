import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Animated,
    Easing,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get('window');
const Button = (props) => {
    return (
        <TouchableOpacity {...props} activeOpacity={0.95}>
            {props.children}
        </TouchableOpacity>
    )
};
export default class SegmentTabBar1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderTab(name, page, isTabActive, onPressHandler, index) {

        const textColor = isTabActive ? '#0086E5' : '#fff';
        // const backgroundColor = isTabActive ? '#fff' : '#fff';
        console.log('index', index)
        return <TouchableOpacity
            style={{ height: 50, width: width * 0.25, backgroundColor: global.back2,justifyContent: "center", alignItems: "center" }}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
            activeOpacity={1}
        >
            {/* <LottieView source={page === 0 ? require('../../../../animal/sign2.json') : page === 1 ? require('../../../../animal/sign1.json') : page === 1 ? require('../../../animal/sign1.json') : page === 1 ? require('../../../animal/sign1.json') : require("../../../animal/jinbi.json")} autoPlay loop={false} progress={this.state.progress} /> */}
         <AntDesign  name={page === 0 ? 'appstore-o' : page === 1 ? 'clockcircleo' : page === 2 ? 'staro' : 'hearto'} color={isTabActive ? '#0086E5' : '#fff'} size={30} />

        </TouchableOpacity>;
    }

    render() {
        console.log('this.props.goToPage', this.props);
        return (
            <View style={styles.tabBarBox}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row'}}>
                        {this.props.tabs.map((name, page) => {
                            const isTabActive = this.props.activeTab === page;
                            const renderTab = this.props.renderTab || this.renderTab;
                            return renderTab(name, page, isTabActive, this.props.goToPage);
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    tabBarBox: {
        height: 50,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBox: {
        margin: 15
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        borderRadius: 2,
        borderColor: '#0086E5',
        borderWidth: 1,
        width: width / 2,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
    },
});
