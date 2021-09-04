import React, { Component } from 'react'
import { TouchableOpacity, View, Dimensions, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get("window")

export default class JuBao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isType0: false,
            isType1: false,
            isType2: false,
            isType3: false,
            isType4: false,
            isType5: false,
            isType6: false,
            isType7: false,
            isType8: false,
            isType9: false,
            isType10: false,
            f:1,
        }
    }
    componentDidMount() {

        this.listener = DeviceEventEmitter.addListener('yanse',this.f.bind(this))
 }
 f(){
     this.setState({f:this.state.f+1})
 }
 componentWillUnmount(){
    this.listener.remove();
    }

    isType(index) {
        const { isType0, isType1, isType2, isType3, isType4, isType5, isType6, isType7,isType8,isType9,isType10 } = this.state
        if (index == 0) {
            if (isType0 === false) {
                this.setState({ isType0: true })
            } else {
                this.setState({ isType0: false })
            }
        }
        if (index == 1) {
            if (isType1 === false) {
                this.setState({ isType1: true })
            } else {
                this.setState({ isType1: false })
            }
        }
        if (index == 2) {
            if (isType2 === false) {
                this.setState({ isType2: true })
            } else {
                this.setState({ isType2: false })
            }
        }
        if (index == 3) {
            if (isType3 === false) {
                this.setState({ isType3: true })
            } else {
                this.setState({ isType3: false })
            }
        }
        if (index == 4) {
            if (isType4 === false) {
                this.setState({ isType4: true })
            } else {
                this.setState({ isType4: false })
            }
        }
        if (index == 5) {
            if (isType5 === false) {
                this.setState({ isType5: true })
            } else {
                this.setState({ isType5: false })
            }
        }
        if (index == 6) {
            if (isType6 === false) {
                this.setState({ isType6: true })
            } else {
                this.setState({ isType6: false })
            }
        }
        if (index == 7) {
            if (isType7 === false) {
                this.setState({ isType7: true })
            } else {
                this.setState({ isType7: false })
            }
        }
        if (index == 8) {
            if (isType8 === false) {
                this.setState({ isType8: true })
            } else {
                this.setState({ isType8: false })
            }
        }
        if (index == 9) {
            if (isType9 === false) {
                this.setState({ isType9: true })
            } else {
                this.setState({ isType9: false })
            }
        }
        if (index == 10) {
            if (isType10 === false) {
                this.setState({ isType10: true })
            } else {
                this.setState({ isType10: false })
            }
        }
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", backgroundColor: global.back2 }}>
                    <TouchableOpacity activeOpacity={1}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff", width: width * 0.85, marginLeft: "2%" }}>投诉</Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", backgroundColor: '#fff', marginTop: 20, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, marginLeft: 10 }}>投诉</Text>
                        <Text style={{ fontSize: 15, color: global.back2 }}>111</Text>
                        <Text style={{ fontSize: 15 }}>的微博：</Text>
                    </View>
                    <View style={{ backgroundColor: "#dcdcdc", width, height: height * 0.2 }}></View>
                    <View style={{ elevation: 5, marginTop: 20, backgroundColor: "#fff", width, height: height * 0.3, justifyContent: "space-around" }}>
                        <Text style={{ fontSize: 15, marginLeft: 10 }}>请选择你想要投诉的类型</Text>
                        <View style={{ width, height: height * 0.25, justifyContent: "space-around", backgroundColor: "#fff" }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: width * 0.02 }}>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType0 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(0)}><Text style={{ fontSize: 13 }}>垃圾营销</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType1 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(1)}><Text style={{ fontSize: 13 }}>涉黄信息</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType2 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(2)}><Text style={{ fontSize: 13 }}>不实信息</Text></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: width * 0.02 }}>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType3 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(3)}><Text style={{ fontSize: 13 }}>人身攻击</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType4 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(4)}><Text style={{ fontSize: 13 }}>有害信息</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType5 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(5)}><Text style={{ fontSize: 13 }}>内容抄袭</Text></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: width * 0.02 }}>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType6 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(6)}><Text style={{ fontSize: 13 }}>违法信息</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType7 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(7)}><Text style={{ fontSize: 13 }}>诈骗信息</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType8 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(8)}><Text style={{ fontSize: 13 }}>恶意营销</Text></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: width * 0.02 }}>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType9 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(9)}><Text style={{ fontSize: 13 }}>宣扬仇恨</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType10 ? global.back2 : '#dcdcdc' }} onPress={() => this.isType(10)}><Text style={{ fontSize: 13 }}>设计未成年</Text></TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ opacity:0,width: width * 0.25, height: height * 0.05, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: this.state.isType8 ? 'orange' : '#dcdcdc' }}><Text style={{ fontSize: 13 }}>恶意营销</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: width * 0.9, height: height * 0.06, backgroundColor: global.back2, marginTop: 30, justifyContent: "center", alignItems: "center", marginHorizontal: width * 0.05 ,borderRadius:10}}>
                        <Text style={{ textAlign: "center", fontSize: 15, color: "#fff" }}>提交</Text>
                    </TouchableOpacity>
                    <View style={{ width, marginTop: 50 }}><Text style={{ textAlign: "center" }}>投诉咨询：1008610000</Text></View>
                </View>

            </View>
        )
    }
}
