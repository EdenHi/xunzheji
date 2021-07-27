import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    ScrollView,

  } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import CustormerBar from './CustormerBar'
import LunTan from './luntan';

export default class ForumTop extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            modalVisible:false,
            pic:[],
            title:'',
            //放大显示的图片索引
            currentIndex:0,
            //存放图片的路径
            imgUrls:[],
        };
    }
    render () {

    return (

        <ScrollableTabView
        initialPage={1}
        renderTabBar={()=><CustormerBar></CustormerBar>}
        >
            <LunTan tabLabel='关注'></LunTan>
            <LunTan tabLabel="推荐" ></LunTan>
        </ScrollableTabView>

    );
    }
}
