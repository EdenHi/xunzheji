// 此组件可根据具体需求自定义
import React, {Component} from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native'

const {height,width} = Dimensions.get('window');
export default class ControlPanel extends Component {
    render() {
        let {closeDrawer} = this.props
        return (
            <ScrollView style={styles.container}>
                <View style={{width:width}}>
                    <TouchableOpacity style={styles.button} onPress={closeDrawer}>
                        <Text>Close Drawer</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#d0d0d0',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})