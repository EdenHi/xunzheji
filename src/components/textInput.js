import { View, Text, TextInput, StyleSheet ,Dimensions} from "react-native";
import React, { Component } from "react";
import Feather from "react-native-vector-icons/Feather"
let { height, width } = Dimensions.get('window');
const ratio_w = Dimensions.get('window').width / 375
export default class Textinput extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }
    render() {
        return (
            <View style={styles.box}>
                <Feather style={styles.icon}
                    name={this.props.icon}
                    size={20*ratio_w}
                    color="#49b3c5"
                />
                <TextInput style={styles.text} placeholder={this.props.text} placeholderTextColor="#49b3c5"
                >
                </TextInput>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: "80%",
        marginRight: "10%",
        borderTopRightRadius: 50,
        borderBottomRightRadius:50,
        fontSize:11*ratio_w,
        backgroundColor: "#ffffff",
        color:"#49b3c5",
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical:0.015*height,
        height:height*0.07
    },
    icon: {
        width: "20%",
        marginLeft: "10%",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        paddingLeft:"3%",

        textAlign:"left",
        textAlignVertical: 'center'
    }
})