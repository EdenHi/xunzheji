import React, { Component } from "react";
import { View, Text, Image,Dimensions, TouchableOpacity, ScrollView, StyleSheet, AsyncStorage,DeviceEventEmitter } from "react-native";
// import { Nav } from "../../component";//顶部标签看
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign"
// import IconFont from "../../iconfont";
// import global from "../../utils/global";
const {height,width} = Dimensions.get('window');
export default class zhifu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paidway: [
                {
                    id: 1,
                    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg011.21cnimg.com%2Fphoto%2F2017%2F0413%2F13%2F201217faf3a7a6a62c949082_o.jpg&refer=http%3A%2F%2Fimg011.21cnimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629772402&t=dccd52d33b8b93d2e9edfa74d2230838',
                    text: "微信支付"
                },
                {
                    id: 2,
                    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F15696%2F20170825221628-1162233375_jpg_400_320_10454.jpg%2F0&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629772465&t=a37c42f7a60343c5838602296f03379a',
                    text: "支付宝支付",
                },
                {
                    id: 3,
                    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic.open-open.com%2Flib%2FuploadImg%2F20150724%2F20150724161913_15.png&refer=http%3A%2F%2Fstatic.open-open.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629772566&t=eab2d80662ed76a01e4a282cf61a983c',
                    text: "银行卡支付",
                },

            ],
            panduan: [
                {
                    id: 1,
                    dingdan: '待确认'
                },
                {
                    id: 2,
                    dingdan: '提交成功'
                }
            ],
            name: '皮皮虾',
            address: '浙江省 杭州市 浙江树人大学',
            phone: '15858162249',
            way: "请选择",
            price: '1200.00',
            dingdan:'待确认',
            goodsname:'康熙茶杯',
            goods: '【专家鉴定】 质量保真康熙喝的水还在里面。质量非常好，日本人都说好',
            dizhi:'',
            username:'',
        }
    }
    static defaultProps = {
        style: {},
        textStyle: {},
        cisabled: false
    }
    changeTab = (index) => {
        this.setState({ activeTab: index })
        if (index == 0) {
            this.setState({ way: "微信" });
        }
        else if (index == 1) {
            this.setState({ way: "支付宝" });
        }
        else {
            this.setState({ way: "银行卡" });
        }
    }
    changeDingdan = ()=>{
        this.setState({dingdan:'提交成功'})
    }


    //获取地址
    get_dizhi(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
                console.log('username',result);
                fetch('http://192.168.50.117:3000/shop/selectdizhi_2', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username:result,
                    }),
                    }) .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({
                            dizhi:responseJson[0],
                        });
                        console.log('dizhi',responseJson);
                    })
            } else {
                console.log('获取数据失败',error);
            }
        });
    }
    componentDidMount(){
        this.get_dizhi();
        this.listener = DeviceEventEmitter.addListener('test',this.update.bind(this))
    }
    update(dizhi){
        console.log('dizhi',dizhi);
        this.setState({
            dizhi
        });
    }
    
    //移除监听
    componentWillUnmount(){
        this.listener.remove();
        }
    render() {
        const {dizhi} = this.state
        return (
            <View >
                {/* <Nav title="等待买家付款" /> */}
                <ScrollView >
                    <View style={{ width:width,height:height*0.07,backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                       
                    <TouchableOpacity style={{marginLeft:"2%"}}
                      onPress={() => this.props.navigation.goBack()}
          >
          <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="left"
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{fontSize:15}}>确认订单</Text>
          <View style={{width:width*0.09,height:width*0.09,}}></View>
                    </View>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddressList2')} style={{ marginTop: 10, borderRadius:10, margin: 5, backgroundColor: "#fff",borderColor:"#7cc0c0",borderWidth:2 }} activeOpacity={0.95}>
                        <View style={{ marginTop: 20, marginLeft: 20, flexDirection: "row", }}>
                            <Text style={{ fontSize: 16 }}>{dizhi.name}</Text>
                            <Text style={{ fontSize: 16, marginLeft: 40 }}>{dizhi.phone}</Text>

                            {/* <IconFont name="jiantou" size={20} style={{ marginLeft: 130, marginTop: 15 }} /> */}
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 10 ,flexDirection:'row'}}>
                            <Text style={{ fontSize: 14 }}>{dizhi.dizhi}</Text>
                            <Text style={{ fontSize: 14,marginLeft:10 }}>{dizhi.xiangxi}</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.95} style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: "center", marginLeft: 15 }}>
                                <Image style={{ width: 110, height: 110, borderRadius: 10 }} source={{ uri: 'https://img0.baidu.com/it/u=1852324688,3068369882&fm=224&fmt=auto&gp=0.jpg' }} />
                            </View>
                            <View style={{ marginLeft: 8, marginTop: 18, justifyContent: "space-between" }}>
                                <View style={{}}>
                                    {/* 商品名称 */}
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }} >{this.state.goodsname}</Text>
                                </View>
                                <View style={{ marginBottom: 30, width: 220, flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ width: 150 }}>
                                        {/* 对商品的解释或者规格 */}
                                        <Text style={{ fontSize:15}} numberOfLines={2}>{this.state.goods}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15}}>X1</Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: 1 }}>
                                    <Text style={{ fontSize: 15, color: "#7cc0c0", fontWeight: "bold" }}>{this.state.price}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ opacity: 0.6 }}>商品价格</Text>
                            <Text style={{ opacity: 0.6 }}>￥{this.state.price}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginTop: 10, marginBottom: 15, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15 }}>合计</Text>
                            <Text style={{ fontSize:15, color: "#7cc0c0", fontWeight: "bold" }}>￥{this.state.price}</Text>
                        </View>
                    </View>
                    <View>






                        <TouchableOpacity onPress={() => this.Scrollable.open()} style={{ justifyContent: 'space-between', alignItems: "center", height: 40, margin: 10, flexDirection: "row", backgroundColor: "white", margin: 5, borderRadius:15 }} activeOpacity={0.95}>
                            <Text style={{ marginLeft: 15 }}>支付方式:</Text>
                            <Text style={{ marginRight:15 ,}}>{this.state.way}</Text>
                            {/* <IconFont name="jiantou" size={20}  /> */}
                        </TouchableOpacity>

                    </View>

                </ScrollView >

                <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", backgroundColor: "white", height: 70 }}>
                    <View style={{ flexDirection: "row", marginLeft: 15, alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 15 }}>合计金额</Text>
                        <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold", color: "#7cc0c0" }}>￥1200.00</Text>
                    </View>
                  
                        <TouchableOpacity style={{width:width*0.3,height:"50%",backgroundColor:"#7cc0c0",justifyContent:"center",alignItems:"center",marginRight:"5%",borderRadius:20,elevation:5}}>

                                <Text  style={{fontSize:15,color:"#fff"}}>提交订单</Text>
                       
                        </TouchableOpacity>
                    
                </View>
                <RBSheet ref={ref => { this.Scrollable = ref; }} height={200} closeOnDragDowncustomStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }}>
                    <View>
                        <Text style={{ marginLeft: 25, fontSize:15, marginTop: 10 }}>支付方式</Text>
                        {this.state.paidway.map((item, index) => (
                            <TouchableOpacity key={item.id} onPress={() => this.changeTab(index)} style={{ alignItems: 'center', flexDirection: "row", marginTop: 15, marginLeft: 20 }}>
                                <Image style={{ width: 30, height: 30 }} source={{uri:item.image}} />
                                <Text style={{ marginLeft: 10 }}>{item.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </RBSheet>

            </View >
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
