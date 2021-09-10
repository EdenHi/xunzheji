import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const Button = (props) => {
    return (
        <TouchableOpacity {...props} activeOpacity={1}>
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
        const textColor = isTabActive ? '#7cc0c0' : '#fff';
        const backgroundColor = isTabActive ? '#fff' : '#7cc0c0';
        console.log(textColor)
        return <Button
            style={{ flex: 1, height: 40, width: width * 0.25, backgroundColor: global.mainColor, margin: 10, borderRadius: 10 }}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab]}>
                <Text style={[{ color: textColor, fontWeight: "bold" },]}>
                    {name}
                </Text>
            </View>
        </Button>;
    }

    render() {
        return (
            <View style={styles.tabBarBox}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row' }}>
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
        height: 60,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 10,
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
