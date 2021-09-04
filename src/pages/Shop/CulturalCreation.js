import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from 'react-native-vector-icons/Entypo';
const data = [{ key: 0 },
{
    key: 1
},
{
    key: 2
}, {
    key: 3
}, {
    key: 4
}, {
    key: 5
}, {
    key: 6
},
]

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    Modal,
    PanResponder,
    Animated,
    FlatList,
    DeviceEventEmitter
} from 'react-native';
import Clothe from '../../components/Clothe';

const { width, height } = Dimensions.get('window');
export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            course: "T恤",

        };
    }
    selCourse(course) {
        this.setState({
            showModal: false,
            course: course,
        });

    }
    render() {


        const Z = this.state.course === "T恤" ? <Clothe navigation={this.props.navigation} ref={(view) => this.childList = view} index={'http://47.100.78.254:3000/public/images/yifu.png'} /> : null
        const H = this.state.course === "帆布包" ? <Clothe navigation={this.props.navigation} ref={(view) => this.childList = view} index={'http://47.100.78.254:3000/public/images/daizi.png'} /> : null
        const A = this.state.course === "手机壳" ? <Clothe navigation={this.props.navigation} ref={(view) => this.childList = view} index={'http://47.100.78.254:3000/public/images/shoujike.png'} /> : null
        const N = this.state.course === "拉拉" ? <Clothe navigation={this.props.navigation} ref={(view) => this.childList = view} index={'http://47.100.78.254:3000/public/images/134880490.png'} /> : null
        const G = this.state.course === "夫夫" ? <Clothe navigation={this.props.navigation} ref={(view) => this.childList = view} index={'http://47.100.78.254:3000/public/images/134880490.png'} /> : null

        return (
            <View style={styles.container1}>
                <View style={styles.headStyle}>
                    <AntDesign onPress={() => this.props.navigation.goBack()} style={{ marginLeft:width*0.025,textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#fff" />
                    <TouchableOpacity style={{ width: width * 0.3 }}
                        onPress={() => { this.setState({ showModal: true }) }}
                        hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
                        <Text style={{ width: '100%', textAlign: 'center', height: '100%', textAlignVertical: 'center', fontSize: 18,color:"#fff"}}>{this.state.course}<Entypo name="select-arrows" size={20} Color="#fff" /></Text>
                    </TouchableOpacity>

                    <AntDesign onPress={() => this.childList.Sure()} style={{ color: "#fff" ,marginRight:width*0.025}} name="check" size={20} color="#fff" />
                </View>
                <Modal
                    visible={this.state.showModal}
                    transparent={true}
                    animationType='fade'
                    onRequestClose={() => { }}
                    style={{ flex: 1 }}
                    ref="modal"  >
                    <TouchableWithoutFeedback onPress={() => { this.setState({ showModal: false }) }} >
                        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}

                        >
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={{
                                    backgroundColor: '#fff', width: width,
                                    justifyContent: 'center',

                                }}

                                >
                                    <View style={styles.headStyle}>
                                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff",marginLeft:width*0.025 }} name="left" size={20} color="#fff" />

                                        <TouchableOpacity style={{ width: width * 0.3 }}
                                            onPress={() => { this.setState({ showModal: false }) }}
                                            hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}>
                                            <Text style={{ width: '100%', textAlign: 'center', height: '100%', textAlignVertical: 'center', fontSize: 18 ,color:"#fff"}}>{this.state.course}<Entypo name="select-arrows" size={20} Color="#fff" /></Text>
                                        </TouchableOpacity>

                                        <AntDesign onPress={() => this.childList.Sure()} style={{ color: "#fff",marginRight:width*0.025 }} name="check" size={20} color="#fff" />
                                    </View>
                                    <View style={styles.courseWrap}>
                                        <CourseItem course="T恤" onPress={() => { this.selCourse('T恤') }}  />
                                        <CourseItem course="帆布包" onPress={() => { this.selCourse('帆布包') }} />
                                        <CourseItem course="手机壳" onPress={() => { this.selCourse('手机壳') }} />
                                    </View>

                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                {Z}{H}{A}{N}{G}

            </View>
        );
    }
}
class CourseItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.boxView} onPress={this.props.onPress}>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 15, }}>{this.props.course}</Text>

                </View>
            </TouchableOpacity>
        )
    }
}
var cols = 3;
var boxW = 70;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;
const styles = StyleSheet.create({
    arrStyle: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
    boxView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: boxW,
        height: boxW,
        marginLeft: vMargin,
        marginTop: hMargin/2,
        marginBottom: hMargin/2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        borderRadius: 5,
    },
    courseWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0,
        borderColor: 'orange',
    },
    selCourseText: {
        padding: 8,
        fontSize: 18,
    },
    blackText: {
        color: 'black',
        fontSize: 16,
    },
    arrowStyle: {
        width: 20,
        height: 20,
    },
    textWrapView: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    headText: {
        fontSize: 22,
        borderWidth: 1
    },
    headStyle: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: global.back2,
        paddingTop: 15,
        paddingBottom: 15,
        height: height * 0.07,

    },
    container1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    container: {
        position: 'absolute',
        left: 170,
        top: 200,
    }

})
