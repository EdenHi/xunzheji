import React, { Component } from 'react';
import {
    StyleSheet, View, Text, ImageBackground, Modal,//加这个
    Animated,//加这个
    Easing,//加这个,
    TouchableOpacity, Image, TextInput, Touchable,
    Keyboard,  TouchableWithoutFeedback
} from 'react-native';
import BarrageMoveView from './BarrageMoveView';
import BarrageInputView from './BarrageInputView';
import UI from './UI';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
export default class luntan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            icon: [],
            txt:''
        };
        this.id = 0;
        this.data = [
'就这九折水平',
'急了急了',
'就这九折水平',
'急了急了',
'就这九折水平',
'急了急了',
'就这九折水平',
'我想啸啊',

        ];
    }

    componentDidMount() {
        this.addBarrageWithInterval();
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
        this.interval1 && clearInterval(this.interval1);
    }

    addBarrageWithInterval = () => {
        this.interval = setInterval(() => {
            this.id = this.id + 1;
            const text = this.getText();
            const newData = [{ title: text, id: this.id }];
            this.setState({ data: newData });
        }, 100);
    }

    onButtonPress = (text) => {
        this.id = this.id + 1;
        const newData = [{ title: text, id: this.id }];
        this.setState({ data: newData });
    }

    getText = () => {
        const number = this.getRundomNumber(this.data.length - 1);
        return this.data[number];
    }

    getRundomNumber = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }

    render() {
        const { navigation } = this.props;
        console.debug('Barrage');
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <TouchableOpacity
                        style={styles.back}
                        onPress={() => navigation.goBack()}
                    >
                        <Image style={{ width: "100%", height: "100%" }}
                            source={{uri:'http://picture.ik123.com/uploads/allimg/201118/12-20111Q64451.jpg'}}></Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, }}>论坛</Text>
                    <TouchableOpacity
                        style={styles.back}
                    >
                        <Image style={{ width: "100%", height: "100%" }}
                           source={{uri:'http://picture.ik123.com/uploads/allimg/201118/12-20111Q64451.jpg'}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.barrageView}>

                    <BarrageMoveView newMessages={this.state.data} numberOfLines={5} speed={0.8} />


                </View>
                <View style={{ width: "100%", height: "27%", alignItems: "center", justifyContent: "center", backgroundColor: "red", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <View style={{ width: "100%", height: "70%", backgroundColor: "#FF7A7A", flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: "60%", height: "90%", marginLeft: 20, marginTop: 40 }}>
                            <Text style={{ fontSize: 15 }}>近日，国家发展改革委发布了《关于“十四五”时期深化价格机制改革行动方案的通知》（简称《行动方案》）</Text>
                        </View>
                        <Image style={{ width: 100, height: 100, marginLeft: 15 }} source={{uri:'http://picture.ik123.com/uploads/allimg/201118/12-20111Q64451.jpg'}}></Image>
                    </View>
                    <View style={{ width: "100%", height: "30%", backgroundColor: "#FF7A7A", flexDirection: "row", alignItems: "center" }}>
                        <TextInput  style={{ width: "70%", height: 40, backgroundColor: "#E0E0E0", borderRadius: 30, marginLeft: 10 }}
                        onChangeText={txt=>{
                            this.setState({txt});
                        }}
                        ref={input => { this.textInput = input }} 
                        
                        ></TextInput>
                        <TouchableOpacity onPress={()=>{this.data.push(this.state.txt);Keyboard.dismiss();this.textInput.clear()}} style={{ width: 80, height: 40, backgroundColor: "#FF3D3D", borderRadius: 50, marginLeft: 15, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: 15 }}>发送</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    barrageView: {
        width: '100%',
        height: "65%",
    },
    header: {
        width: "100%",
        height: "8%",
        backgroundColor: "#FF3D3D",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    back: {
        width: 30,
        height: 30,
        margin: 5,
    },
});