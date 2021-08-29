import { fromByteArray } from 'base64-js'
import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Share, Dimensions, Text, ImageBackground, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import { DeviceEventEmitter } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window")

export default class Heritage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emitMsg: '',
            count: -1,
            data: [{
                id: 0,
                title: '徽州竹雕1',
                title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
                select: false,
                img: 'https://img0.baidu.com/it/u=2873019793,1197104957&fm=26&fmt=auto&gp=0.jpg'
            },
            {
                id: 1,
                title: '徽州竹雕2',
                title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
                select: false,
                img: 'https://img0.baidu.com/it/u=1982611232,328499575&fm=26&fmt=auto&gp=0.jpg'
            },
            {
                id: 2,
                title: '徽州竹雕3',
                title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
                select: false,
                img: 'https://img0.baidu.com/it/u=1680309156,3850096561&fm=26&fmt=auto&gp=0.jpg'
            },
            ],

        }
    }
    // componentDidMount(){
    //     this.subscription=DeviceEventEmitter.addListener('choiceDingZhi',(msg)=>{this.setState({emitMsg:msg})})
    // };

    // componentWillUnmount(){
    //     this.subscription.remove();
    // };
    selcetOnpress(item, index) {

        console.log('before change', this.state.data[index].select);
        console.log(this.state.count);

        if (this.state.count == index) {
            let data = this.state.data;
            data[index].select = false
            this.setState({ data })
            this.setState({ count: -1 })
        } else if (this.state.count == -1) {
            let data = this.state.data;
            data[index].select = true
            this.setState({ data })
            this.setState({ count: index })
        }
        if (item.select == true) {
            this.setState({ emitMsg: { title: item.title, img: item.img } })
        } else {
            this.setState({ emitMsg: {} })
        }
        console.log('after change', this.state.data[index].select);
    }
    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={1} style={{ borderWidth: 0, }}
                onPress={() => { this.selcetOnpress(item, index) }} >
                <View style={{ borderColor: this.state.data[index].select ? "#fedc61" : "#fff", flexDirection: "row", backgroundColor: "#fff", borderRadius: 5, marginVertical: height * 0.01, borderWidth: 2 }} >
                    <Image style={{ width: width * 0.5, height: width * 0.5, borderRadius: 5 }}
                        source={{ uri: item.img }}/>
                    <View style={{ width: width * 0.32, marginLeft: 10, height: width * 0.5, justifyContent: "center" }} >
                        <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", color: "#333333" }} > {item.title} </Text>
                        <Text style={{ fontSize: 13, flexWrap: "wrap", marginTop: 10, color: "#333333" }} > {item.title2} </Text>
                         </View>
                </View>
            </TouchableOpacity>


        )
    }
    onShare = async () => {
        try {
            const result = await Share.share({
                message: '是寻商迹哦',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <LinearGradient colors={['#7cc0c0', '#fff', '#fff']} >
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05 }} >
                        < TouchableOpacity activeOpacity={1}
                            style={{width:width*0.06}} >
                           
                           <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>人物介绍 </Text> 
                        </View> 
                        <View style={{  alignItems: "center", height: height * 0.93 }} >
                        <ScrollView>
                            <View style={{ alignItems: "center" }} >
                                <View style={{ width, height: 180, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                    <ImageBackground style={{ width, height: 180, flexDirection: "row", justifyContent: "space-between" }}
                                        source={{ uri: 'http://8.142.11.85:3000/public/images/customs.gif' }} >
                                    </ImageBackground>
                                     </View> 
                                     <View style={{ backgroundColor: "#fff", marginTop: 15, marginBottom: 10, elevation: 10, borderRadius: 10 }} >
                                    <View style={{ flexDirection: "row", borderRadius: 5, backgroundColor: "#fff", alignItems: "center", height: 120, width: width * 0.95 }} >
                                        <Image style={{ width: width * 0.25, marginLeft: 10, height: width * 0.25, borderRadius: 5 }}
                                            source={{ uri: "https://img2.baidu.com/it/u=360064306,3967606391&fm=15&fmt=auto&gp=0.jpg" }}/> 
                                <View style={{ marginLeft: 10 }} >
                                            <View > 
                                                < Text style={{ fontSize: 15, color: "#333333" }}> 陆小华 </Text>
                                                </View >
                                            <View tyle={{ marginTop: 10 }} > 
                                            < Text style={{ fontSize: 13, color: "#333333" }}>市级非遗传承人</Text>
                                            </View >
                                            <View style={{ flexDirection: "row", marginTop: 25 }} >
                                                <View style={{ width: 70, elevation:5,height: 20, backgroundColor: "#7cc0c0", borderRadius: 10, marginRight: 10, justifyContent: "center", alignItems: "center" }} > 
                                                <Text style={{ fontSize: 13,color:"#fff" }} > 五彩梁弄 </Text>
                                                        </View >
                                                <View style={{ width: 70, height: 20, elevation:5, backgroundColor: "#7cc0c0", borderRadius: 10, marginRight: 10, justifyContent: "center", alignItems: "center" }} > 
                                                <Text style={{ fontSize: 13,color:"#fff" }} > 梁弄大糕 </Text>
                                                        </View >
                                            </View> 
                                            </View>
                                             </View> 
                                             <View style={{ width: width * 0.95, height: 120, backgroundColor: "#fff", justifyContent: "center" }} >
                                        <Text style={{ marginLeft: 15, color: "#333333" }}>我国非物质文化遗产研究领域的领军人物，民俗学博士， 中国艺术研究院研究员、 博士生导师。 原国际亚细亚民俗学会副会长， 中国分会会长， 中国民间文艺家协会副主席、 中国农业历史学会副理事长、 中国人类学民族学学会民族遗产专业委员会主任。 </Text> 
                                        </View> 
                                        </View> 
                                        <View style={{ width: width * 0.95, height: 40 }} > 
                                        < Text style={{ fontSize: 15, fontWeight: "bold", margin: 10, color: "#333333" }}>可定制项目 </Text>
                                        </View >
                                <View style={{ marginTop: 10 }} >
                                    <FlatList handleMethod={
                                        ({ viewableItems }) => this.handleViewableItemsChanged(viewableItems)}
                                        data={this.state.data}
                                        renderItem={this.renderItem}
                                    />

                                </View>
                            </View>
                        </ScrollView>
                        <View style={{ height: height * 0.07, backgroundColor: "#fff", flexDirection: "row", width: width, alignItems: "center",}} >
                            <TouchableOpacity activeOpacity={1} style={{marginLeft:width*0.08}} activeOpacity={1}
                                onPress={() => this.props.navigation.navigate('Chats', { room: 3 })} >
                                <AntDesign style={
                                    { textAlign: 'center', height: '100%', textAlignVertical: 'center' }}
                                    name="customerservice"
                                    size={35}
                                    color="#7cc0c0"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={
                                () => this.props.navigation.navigate('dingzhi_xuqiu', { msg: this.state.emitMsg })}
                                activeOpacity={1}
                                style={
                                    { width: width * 0.7, height: height * 0.05,elevation:5, backgroundColor: "#7cc0c0",marginLeft:width*0.05, justifyContent: "center", alignItems: "center", borderRadius: 20 }} >
                                <Text style={
                                    { fontWeight: "bold", fontSize: 18, color: "#fff" }} > 下单定制 </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}