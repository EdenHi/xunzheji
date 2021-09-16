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
        const textColor = isTabActive ? '#000' : '#333';
        const backgroundColor = isTabActive ? '#fff' : global.mainColor;
        const cu = isTabActive ? 'bold':'100';
        const size = isTabActive ? 20:15
        return <TouchableOpacity  activeOpacity={1}
            style={{height: 40,width:120,marginTop:10,marginHorizontal:5,elevation:5}}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab]}>
            
                <Text style={{color: textColor,fontSize: size,fontWeight:cu,zIndex:5 }}>
                    {name}
                </Text>
                {isTabActive ?<View style={{width:90,borderColor:global.mainColor,borderWidth:5,top:-8,borderRadius:10}}/>:null}
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
