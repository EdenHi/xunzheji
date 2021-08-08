import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Chair from './Chair';
import Table from './Table';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

let { width, height } = Dimensions.get("window");



export default class TopTab extends Component {


    render() {

        return (

            <View style={{ flex: 1, backgroundColor: "#eee" }}>
                <View style={{ borderWidth: 0, height: 50, justifyContent: "space-between", flexDirection: 'row', marginHorizontal: width * 0.05 }}>
                    <SimpleLineIcons
                        style={{ textAlignVertical: 'center' }}
                        name="menu"
                        size={25}
                        color="black"
                    />
                    <SimpleLineIcons
                        style={{ textAlignVertical: 'center' }}
                        name="magnifier"
                        size={25}
                        color="black"
                    />
                </View>
                <ScrollableTabView>
                    <Chair tabLabel='椅子' />
                    <Table tabLabel='桌子' />
                </ScrollableTabView>


            </View>



        );
    }
}

