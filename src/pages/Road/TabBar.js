import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
        const textColor = isTabActive ? global.mainColor : '#fff';
        const backgroundColor = isTabActive ? '#fff' : global.mainColor;

        return <TouchableOpacity  activeOpacity={1}
            style={{height: 35, backgroundColor:backgroundColor,width:70,marginTop:10,borderRadius:20,marginHorizontal:5,elevation:5}}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab]}>
                <Text style={{color: textColor }}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>;
    }
    render() {
        return (
            <View style={styles.tabBarBox}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        {this.props.tabs.map((name, page) => {
                            const isTabActive = this.props.activeTab === page;
                            const renderTab = this.props.renderTab || this.renderTab;
                            return renderTab(name, page, isTabActive, this.props.goToPage);
                        })}

                </ScrollView>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    tabBarBox: {
        height: 50,

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
