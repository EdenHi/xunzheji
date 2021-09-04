import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
const PhoneWidth = Dimensions.get('window').width;
const Button = (props) => {
    return (
        <TouchableOpacity {...props} activeOpacity={0.95}>
            {props.children}
        </TouchableOpacity>
    )
};
export default class SegmentTabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderTab(name, page, isTabActive, onPressHandler) {
        const textColor = isTabActive ? global.back2 : '#fff';
        const backgroundColor = isTabActive ? '#fff' : global.back2;

        return <TouchableOpacity  activeOpacity={1}
            style={{flex: 1, height: 35, backgroundColor:backgroundColor,borderRadius:20,marginHorizontal:10,elevation:5}}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab]}>
                <Text style={[{color: textColor, },]}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>;
    }

    render() {
        return (
            <View style={styles.tabBarBox}>
                <View style={ {flexDirection: 'row',width:PhoneWidth,}}>
                    {this.props.tabs.map((name, page) => {
                        const isTabActive = this.props.activeTab === page;
                        const renderTab = this.props.renderTab || this.renderTab;
                        return renderTab(name, page, isTabActive, this.props.goToPage);
                    })}
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    tabBarBox: {
        height: 50,
        width: PhoneWidth,
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
        width: PhoneWidth / 2,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
    },
});
