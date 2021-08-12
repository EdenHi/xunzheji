import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'


const { width, height } = Dimensions.get("window")


export default class Dingdan extends Component {
    render() {
        return (
            <View>
                <LinearGradient colors={["#7CC0C0","#fff","#fff"]}>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05 }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <View style={{marginLeft:10}}><Text style={{fontSize:15,fontWeight:"bold"}}>订单</Text></View>
                    </View>
                </View>
                <View style={{height:height*0.86}}>
                    <ScrollView>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#ff4500" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" }}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: "40%" }}><Text>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" }}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "50%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14 }}>申请退款</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#ff4500" }}><Text style={{ fontSize: 14, color: "#ff4500" }}>确认收货</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#ff4500" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" }}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: "40%" }}><Text>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" }}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "50%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14 }}>申请退款</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#ff4500" }}><Text style={{ fontSize: 14, color: "#ff4500" }}>确认收货</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#ff4500" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" }}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: "40%" }}><Text>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" }}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "50%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14 }}>申请退款</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#ff4500" }}><Text style={{ fontSize: 14, color: "#ff4500" }}>确认收货</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#ff4500" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" }}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: "40%" }}><Text>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" }}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "50%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14 }}>申请退款</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#ff4500" }}><Text style={{ fontSize: 14, color: "#ff4500" }}>确认收货</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#ff4500" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" }}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: "40%" }}><Text>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" }}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "50%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14 }}>申请退款</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#ff4500" }}><Text style={{ fontSize: 14, color: "#ff4500" }}>确认收货</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#ff4500" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" }}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: "40%" }}><Text>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" }}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "50%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14 }}>申请退款</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#ff4500" }}><Text style={{ fontSize: 14, color: "#ff4500" }}>确认收货</Text></View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: width * 0.05, backgroundColor: "#fff", padding: 5, elevation: 5, borderRadius: 10,marginBottom:10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={{ width: width * 0.05, height: width * 0.05, marginRight: 5 }} source={{ uri: "https://img0.baidu.com/it/u=3046345567,3277050006&fm=26&fmt=auto&gp=0.jpg" }} />
                                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                                    手工定制
                                </Text>
                                <Text style={{ marginLeft: "52%", color: "#ff4500" }}>
                                    卖家已发货
                                </Text>
                            </View>
                            < View style={{ flexDirection: "row", marginTop: 10 }}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=4139270903,2443656479&fm=26&fmt=auto&gp=0.jpg" }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" }}>手工竹雕定制</Text></View>
                                        <View style={{ marginLeft: "40%" }}><Text>¥ 249</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" }}>小号</Text></View>
                                        <View style={{ marginLeft: "66%" }}><Text style={{ color: "#808080" }}>x1</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: "50%" }}>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20 }}><Text style={{ fontSize: 14 }}>申请退款</Text></View>
                                <View style={{ justifyContent: "center", alignItems: "center", width: 80, height: 35, borderWidth: 1, borderRadius: 20, marginLeft: 10, borderColor: "#ff4500" }}><Text style={{ fontSize: 14, color: "#ff4500" }}>确认收货</Text></View>
                            </View>
                        </View>
                    </ScrollView>
                    
                    <View style={{ width, height: height * 0.07, backgroundColor: "white", flexDirection: "row", alignItems: "center",justifyContent:'space-around' }} >
                        <View style={{ width: 250, height: 40, backgroundColor: "#808080", opacity: 0.4, marginLeft: 20, borderRadius: 20 }}>
                            <TextInput style={{ marginLeft: 20 }} placeholder="欢迎发表你的观点" />
                        </View>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf", marginLeft: 5,alignItems:'center',justifyContent:'center' }}>
                            <AntDesign  name="staro" size={25} color="#7cc0bf" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf" }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#7cc0bf" }} name="export" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </View>
                </LinearGradient>
            </View>
        )
    }
}
