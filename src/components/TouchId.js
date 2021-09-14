import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    StyleSheet,
    TouchableHighlight,
    DeviceEventEmitter
} from 'react-native';
import TouchID from "react-native-touch-id";

export default class TouchTest extends Component {
    constructor() {
        super()
        this.state = {
            supportTouch: ''
        };
    }

    componentDidMount() {
        // 是否支持生物识别身份验证
        TouchID.isSupported()
            .then(res => {
                this.setState({
                    supportTouch: res
                });
            })
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }

    // 验证身份
    handleTouch() {
        TouchID.isSupported()
            .then(() => {
                TouchID.authenticate()
                    .then(() => {
                        this.props.navigation.navigate('BtnRoute');
                        DeviceEventEmitter.emit('test',1)
                        DeviceEventEmitter.emit('denglu',1)           
                         console.log('username', this.state.username);
                    })
                    .catch(e => {
                        Alert.alert(e.message);
                    });
            })
            .catch(e => {
                console.log(e);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF"
    },
    btn: {
        padding: 12,
        borderRadius: 50,
        backgroundColor: "#409EFF"
    },
    txt: {
        color: "#fff",
        fontWeight: "bold"
    },
    miniText: {
        color: "#999",
        marginBottom: 24
    }
});