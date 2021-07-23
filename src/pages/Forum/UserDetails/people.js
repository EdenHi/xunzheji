
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
    SectionList
} from 'react-native';
import AboutComponent from "./head";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
const width = Dimensions.get("window").width;

const TribuneTabNavigation = createMaterialTopTabNavigator();

export default class ParallaxScrollViewDemo extends Component {

    constructor(props) {
        super(props)
        this.aboutCommon = new AboutComponent(props, null, null, null);
       
    }

    render() {
        let contentView = 
        <View
            style={{width: width,backgroundColor:"#f2f2f2", flexDirection: "row", justifyContent: "center", alignItems: "center",marginTop:30}}>
            <Text>自定义的布局</Text>
        </View>

        return this.aboutCommon.renderView(contentView, {
           
        
        })
    }

}