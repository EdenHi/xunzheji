import React, { Component } from "react";
import { FlatList } from "react-native";
import { View, Text, Image,Dimensions, TouchableOpacity, ScrollView, StyleSheet, AsyncStorage,DeviceEventEmitter } from "react-native";
// import { Nav } from "../../component";//顶部标签看
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign"
// import IconFont from "../../iconfont";
// import global from "../../utils/global";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const {height,width} = Dimensions.get('window');
export default class zhifu_cart extends Component {

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
            way: "请选择支付方式",
            price: this.props.route.params,
            dingdan:'待确认',
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
            this.setState({ way: "微信支付" });
        }
        else if (index == 1) {
            this.setState({ way: "支付宝支付" });
        }
        else {
            this.setState({ way: "银行卡支付" });
        }
    }
    changeDingdan = ()=>{
        this.setState({dingdan:'提交成功'})
    }

    //增加商品数量
    add_total(){
        this.setState({
            total:this.state.total+1
        })
    }
    //减少商品数量
    jianshao_total(){
        if(this.state.total > 1){
            this.setState({
                total:this.state.total-1
            })
        }
    }
    //获取地址
    get_dizhi(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
                console.log('username',result);
                fetch('http://47.100.78.254:3000/shop/selectdizhi_2', {
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
        console.log(this.props.route.params);
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


        renderDate({item,index}){
            return(
                <View>
                     {/* 商品信息 */}
                     <View style={{ flexDirection: 'row',marginTop: 25 }}>
                        <View style={{ marginLeft: 15 }}>
                            <Image style={{ width: 110, height: 110, borderRadius: 10 }} source={{ uri:item.itemimg }} />
                        </View>
                        <View style={{ marginLeft: 8,justifyContent:'space-around',marginLeft:20 }}>
                            {/* 商品名称 */}
                            <Text style={{ fontSize: 15, fontWeight: "bold",width:width*0.5,color:'#333' }} numberOfLines={3} >{item.itemName}</Text>
                        </View>
                    </View>
                    
                    <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10,margin:5 }}>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ opacity: 0.6 ,fontSize:15,color:'#333'}}>商品价格</Text>
                            <Text style={{ opacity: 0.6  ,fontSize:15,color:'#333'}}>￥{item.itemPrice}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
                            <Text style={{ opacity: 0.6 ,fontSize:15 ,color:'#333'}}>商品数量</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                               
                                <Text style={{ fontSize:15,marginLeft:10,marginRight:10 ,color:'#333'}}>x{item.quantity}</Text>
   
                            </View>
                            
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: 10, justifyContent: "space-between", flexDirection: "row", marginTop: 10, marginBottom: 15, marginLeft: 20 }}>
                            <Text style={{ fontSize: 15 ,color:'#333'}}>合计</Text>
                            <Text style={{ fontSize:15, color: global.mainColor, fontWeight: "bold" ,color:'#333'}}>￥{parseFloat(item.itemPrice*item.quantity).toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            )
        }


        ListFooterComponent(){
            return(
                <View>
                    <TouchableOpacity onPress={() => this.Scrollable.open()} style={{ justifyContent: 'space-between', alignItems: "center", height: 40, margin:5, flexDirection: "row", backgroundColor: "white", marginTop:10, borderRadius:10 }} activeOpacity={0.95}>
                        <Text style={{ marginLeft: 15 }}>支付方式:</Text>
                        <Text style={{ marginRight:15 ,}}>{this.state.way}</Text>
                        {/* <IconFont name="jiantou" size={20}  /> */}
                    </TouchableOpacity>
                </View>
            )
        }

        ListHeaderComponent(){
            const {dizhi} = this.state
            return(
                <View>
                    {/* 收货地址 */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddressList2')} style={{ marginTop: 5, borderRadius: 10, margin: 5, backgroundColor: "#fff", width: width * 0.9, marginLeft: width * 0.05, borderColor: global.mainColor, borderWidth: 2, flexDirection: 'row' }} activeOpacity={1}>
                            <MaterialCommunityIcons style={{height:'100%',textAlignVertical:'center',paddingLeft:width*0.025 }}
                                name="map-marker-radius"
                                size={35}
                                color={global.mainColor}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ marginTop: 5, marginLeft: 20, flexDirection: "row", }}>
                                    <Text style={{ fontSize: 16 }}>{dizhi === '' ? '' : dizhi.name}</Text>
                                    <Text style={{ fontSize: 16, marginLeft: 40 }}>{dizhi === '' ? '' : dizhi.phone}</Text>

                                    {/* <IconFont name="jiantou" size={20} style={{ marginLeft: 130, marginTop: 15 }} /> */}
                                </View>
                                <View style={{ marginLeft: 20, marginBottom: 10, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: "#333333" }}>{dizhi === '' ? '' : dizhi.dizhi}</Text>
                                    <Text style={{ fontSize: 14, marginLeft: 10, color: "#333333" }}>{dizhi === '' ? '' : dizhi.xiangxi}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                </View>
            )
        }

    render() {

        return (
            <View style={{flex:1}}>
                {/* <Nav title="等待买家付款" /> */}
                <View style={{ width:width,height:height*0.07,backgroundColor:global.mainColor,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                       
                       <TouchableOpacity style={{marginLeft:"2%"}}
                       onPress={() => this.props.navigation.goBack()}
                           >
                           <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
                               name="left"
                               size={20}
                               color="#fff"
                               />
                       </TouchableOpacity>
                       <Text style={{fontSize:15,color:"#fff"}}>确认订单</Text>
                       <View style={{width:width*0.09,height:width*0.09,}}></View>
                   </View>
                



                    <FlatList
                    data={this.props.route.params.shops}
                    renderItem={this.renderDate.bind(this)}
                    keyExtractor={(item, index) => (index + '1')}
                    ListFooterComponent={this.ListFooterComponent.bind(this)}
                    ListHeaderComponent={this.ListHeaderComponent.bind(this)}/>


                <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", backgroundColor: "white", height: 70 }}>
                    <View style={{ flexDirection: "row", marginLeft: 15, alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 15 ,color:'#333'}}>合计金额</Text>
                        <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: "bold", color: global.mainColor }}>￥{this.props.route.params.total}</Text>
                    </View>
                  
                        <TouchableOpacity style={{width:width*0.3,height:"50%",backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",marginRight:"5%",borderRadius:20,elevation:5}}>

                            <Text  style={{fontSize:15,color:"#fff"}}>提交订单</Text>
                       
                        </TouchableOpacity>
                    
                </View>
                <RBSheet ref={ref => { this.Scrollable = ref; }} height={200} closeOnDragDowncustomStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }}>
                    <View>
                        <Text style={{ marginLeft: 25, fontSize:15, marginTop: 10,color:'#333' }}>支付方式</Text>
                        {this.state.paidway.map((item, index) => (
                            <TouchableOpacity key={item.id} onPress={() => {this.changeTab(index),this.Scrollable.close()}} style={{ alignItems: 'center', flexDirection: "row", marginTop: 15, marginLeft: 20 }}>
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
