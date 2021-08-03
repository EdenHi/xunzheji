import React, { Component } from 'react'
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get("window")

export default class HuZhou extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUnlock: this.props.isUnlock,
            showAlert: false
        }
    }
    render() {
        return (
            <ScrollView style={{ width: width * 0.9, flex: 1, marginHorizontal: width * 0.05 }} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ width: width * 0.3, height: 20, marginTop: 10, alignItems: "center", justifyContent: "center", borderRadius: 10 }}><Text style={{ fontSize: 15, fontWeight: 'bold' }}>湖州南浔四象</Text></View>
                    <View style={{ width: width * 0.9, height: 120, borderWidth: 1, borderStyle: "dashed", borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#7cc0c0", marginTop: 10 }}><Text style={{ fontSize: 12, width: width * 0.85 }}>南浔四象八牛，即以“四象八牛七十二金狗”为代表的南浔富商，清光绪年间，出现在湖州南浔民间及江浙一带。所谓“四象、八牛、七十二狗”者，皆资本雄厚，或自为丝通事，或有近亲为丝通事者。财产达千万两白银以上者称之曰“象”。五百万两以上不过千万者，称之曰“牛”，其在一百万两白银以上不达五百万者则譬之曰“狗”。下面介绍名声远扬的南浔四象。</Text></View>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                            <View style={{ width: width * 0.5 }}>
                                <View><Text>刘镛（1825－1889）</Text></View>
                                <View><Text>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text></View>
                            </View>
                            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img2.baidu.com/it/u=3633243584,2230097737&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                            <View style={{ width: width * 0.5 }}>
                                <View><Text>刘镛（1825－1889）</Text></View>
                                <View><Text>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text></View>
                            </View>
                            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img2.baidu.com/it/u=3633243584,2230097737&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                            <View style={{ width: width * 0.5 }}>
                                <View><Text>刘镛（1825－1889）</Text></View>
                                <View><Text>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text></View>
                            </View>
                            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10, resizeMode: 'stretch' }} source={{ uri: "https://img2.baidu.com/it/u=3633243584,2230097737&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                            <View style={{ width: width * 0.5 }}>
                                <View><Text>刘镛（1825－1889）</Text></View>
                                <View><Text>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text></View>
                            </View>
                            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img2.baidu.com/it/u=3633243584,2230097737&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ width: width * 0.3, height: 20, marginTop: 10, alignItems: "center", justifyContent: "center", borderRadius: 10 }}><Text style={{ fontSize: 15, fontWeight: 'bold' }}>湖州商人介绍</Text></View>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                            <View style={{ width: width * 0.5 }}>
                                <View><Text>刘镛（1825－1889）</Text></View>
                                <View><Text>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text></View>
                            </View>
                            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img2.baidu.com/it/u=3633243584,2230097737&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                            <View style={{ width: width * 0.5 }}>
                                <View><Text>刘镛（1825－1889）</Text></View>
                                <View><Text>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text></View>
                            </View>
                            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img2.baidu.com/it/u=3633243584,2230097737&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10, width: width * 0.9, height: 150, borderWidth: 1, justifyContent: "center", alignItems: "center", borderStyle: "dashed", borderColor: "#7cc0c0", borderRadius: 10 }}>
                            <View style={{ width: width * 0.5 }}>
                                <View><Text>刘镛（1825－1889）</Text></View>
                                <View><Text>名介康，字冠军、贯经，浙江湖州府南浔人，祖籍浙江绍兴上虞；实业家、慈善家。</Text></View>
                            </View>
                            <Image style={{ width: width * 0.3, height: width * 0.3, borderRadius: 10 }} source={{ uri: "https://img2.baidu.com/it/u=3633243584,2230097737&fm=26&fmt=auto&gp=0.jpg" }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
