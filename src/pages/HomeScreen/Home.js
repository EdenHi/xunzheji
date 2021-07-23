import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Button,
    Image,
    ScrollView
} from 'react-native';
import Card from '../../components/Card';

export default class Home extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card navigation={this.props.navigation} />
                    <Card navigation={this.props.navigation} />
                    <Card navigation={this.props.navigation} />
                </ScrollView>

            </View>
        )
    }
}