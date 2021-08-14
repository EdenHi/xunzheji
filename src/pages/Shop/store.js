import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  ImageBackground,
  Modal,
  Alert,
  AsyncStorage,
  FlatList  ,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';
import Water from "../water"
import EZSwiper from 'react-native-ezswiper';
import LottieView from 'lottie-react-native';
import Foundation from "react-native-vector-icons/Foundation"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Carousel from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ShiCha from '../HomeScreen/HOME/ShiCha';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('window');
const images = [{ uri: 'http://8.142.11.85:3000/public/images/5.jpg' }, { uri: 'http://8.142.11.85:3000/public/images/6.jpg' }, { uri: 'http://8.142.11.85:3000/public/images/6.jpg' }, { uri: 'http://8.142.11.85:3000/public/images/5.jpg' }]

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      currentPage: 0,
      progress: new Animated.Value(0),
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
      shops:[
        {
          "name":"知味观绿豆糕杭州特产小吃绿豆饼网红糕点办公室零食好吃的点心",
          "jieshao":"清香绵软",
          "price":"12.90",
          "sales":"8W+",
          "pic":[
              "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01vnfZVZ2HGNwoO10hJ_!!2200646689123.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01lGZiEM2HGNwoNz44Z_!!2200646689123.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i4/2200646689123/O1CN01lTyJzz2HGNwnAeeAu_!!2200646689123.jpg_500x500q90.jpg"
            ],
            "dianpu":"知味观",
            "loge":"https://img2.baidu.com/it/u=2448793404,1008146234&fm=26&fmt=auto&gp=0.jpg",
            "imag1":"https://img.alicdn.com/imgextra/i1/475325704/O1CN01vYGvQb1s0TldPD9z7_!!475325704.jpg",
            "imag2":"https://img.alicdn.com/imgextra/i1/475325704/O1CN01HyaZR81s0TlVItdff_!!475325704.jpg",
            "imag3":"https://img.alicdn.com/imgextra/i1/475325704/O1CN015rX3P21s0TlhMoPOn_!!475325704.jpg",
            "imag4":"https://gdp.alicdn.com/imgextra/i2/2200646689123/O1CN01fanmSb2HGNx3tUh3H_!!2200646689123.jpg"
        },
        {
          "name":"翠沁斋麻糕黑麻酥糖老字号杭州特产点心网红食品零食小吃糕点推荐",
          "jieshao":"中华老字号",
          "price":"24.90",
          "sales":"200+",
          "pic":[
              "https://img.alicdn.com/imgextra/i1/2086085971/O1CN01x1Ny0Y1tylbc4cZbe_!!2086085971.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01PahoMY1tylb93oDSh_!!2086085971.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i3/2086085971/O1CN01QyR8uR1tylb93pDpP_!!2086085971.jpg_500x500q90.jpg"
          ],
          "dianpu":"翠沁斋",
          "loge":"https://bkimg.cdn.bcebos.com/pic/00e93901213fb80e4b9d12d53ed12f2eb9389467?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
          "imag1":"https://img.alicdn.com/imgextra/i2/2086085971/O1CN01gqfLom1tylb8VBFfy_!!2086085971.jpg",
          "imag2":"https://img.alicdn.com/imgextra/i2/2086085971/O1CN01yK7rmA1tylazo6eiE_!!2086085971.jpg",
          "imag3":"https://img.alicdn.com/imgextra/i4/2086085971/O1CN01l0gWlg1tylb9rVl1Y_!!2086085971.jpg",
          "imag4":"https://img.alicdn.com/imgextra/i2/2086085971/O1CN01Z1t3zi1tylbBkHeJv_!!2086085971.jpg"
        },
        {
          "name":"陈源昌 东北开口松子大颗粒200g独立包厂家直销坚果休闲零食批发",
          "jieshao":"",
          "price":"57.00",
          "sales":"1K+",
          "pic":[
              "https://cbu01.alicdn.com/img/ibank/2018/359/558/9223855953_1063743152.500x500.jpg",
              "https://cbu01.alicdn.com/img/ibank/2017/145/079/5245970541_1063743152.500x500.jpg",
              "https://cbu01.alicdn.com/img/ibank/2017/153/640/7275046351_1063743152.500x500.jpg"
          ],
          "dianpu":"陈源昌",
          "loge":"https://shangbiaopic.11467.com/15/54/15546473.jpg",
          "imag1":"https://cbu01.alicdn.com/img/ibank/2018/673/697/9115796376_1063743152.jpg",
          "imag2":"https://cbu01.alicdn.com/img/ibank/2018/383/144/9097441383_1063743152.jpg",
          "imag3":"https://cbu01.alicdn.com/img/ibank/2018/225/534/9097435522_1063743152.jpg",
          "imag4":"https://cbu01.alicdn.com/img/ibank/2018/113/997/9115799311_1063743152.jpg"
        },
      ]
    };
  }



  insert_shopcart(item){
    AsyncStorage.getItem('username',(err,result)=>{
      if(!err){
          fetch('http://8.142.11.85:3000/shop/insert_shopcart', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username:result,
                  shop_name:item.name,
                  shop_pic:item.pic[0],
                  price:item.price,
                  shop_dianpu:item.dianpu,
              }),
          })
      }
  })
  ToastAndroid.showWithGravity('加入购物车成功',2000,ToastAndroid.BOTTOM)
  DeviceEventEmitter.emit('shop_cart',1)
  }


  
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,

    }).start();

  }
  renderRow(obj, index) {
    return (
      <View style={styles.cell}>
        <Image
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, borderRadius: 15, width: width * 0.65, height: undefined }}
          resizeMode={"cover"}
          source={obj} />
      </View>
    )
  }
  _renderItem({ item, index }) {
    return (
      <View style={{

        borderRadius: 15,
        height: 250,
        width: "90%",
        elevation: 5,
        backgroundColor: "#fff"
      }}>
        <ImageBackground imageStyle={{ borderRadius: 15, }} style={{ width: "100%", height: "100%", flexDirection: "column-reverse" }} source={{ uri: 'http://8.142.11.85:3000/public/images/2.jpg' }} >
          <View style={{ width: "100%", height: "30%", backgroundColor: 'rgba(0,0,0,0.5)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold", marginLeft: "5%", marginTop: "2%" }}>鱼宴馆·家宴老字号</Text>
            <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 12, color: "#fff", marginLeft: "5%", marginTop: "2%" }}>一家经典网红餐厅，浓汤鱼头是主打，据说是千岛湖野生鱼头做的，店里的菜品品种丰富多样</Text>
          </View>
        </ImageBackground>
      </View>

    )
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient style={{ width }} colors={["#7cc0bf", "#fff", "#fff"]} >
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            hardwareAccelerated={true}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View>
              <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, elevation: 5, height: height * 0.15, width: width, backgroundColor: '#eee', width: "100%" }}>
                <View style={{ width: width, height: "80%", borderWidth: 0, flexDirection: 'row' }}>
                  <TouchableOpacity activeOpacity={1} style={{ marginVertical: '4%', height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20, marginLeft: width * 0.024 }}>

                    <MaterialCommunityIcons onPress={() => { this.props.navigation.navigate('ShoppingCart'), this.setModalVisible(!modalVisible) }} style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="cart-outline"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>购物车</Text>


                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Dingdan') }} style={{ marginVertical: '4%', height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20, marginLeft: width * 0.024 }}>
                    <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="clipboard-text-outline"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>订单</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Chats'), this.setModalVisible(!modalVisible) }} style={{ marginVertical: '4%', height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20, marginLeft: width * 0.024 }}>
                    <AntDesign style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="customerservice"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>客服</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AddressList'), this.setModalVisible(!modalVisible) }} style={{ marginVertical: '4%', height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20, marginLeft: width * 0.024 }}>
                    <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="map-marker-radius"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>地址管理</Text>
                  </TouchableOpacity>
                </View>
                <MaterialCommunityIcons onPress={() => {
                  this.setModalVisible(!modalVisible);
                }} style={{ borderWidth: 0, height: '20%', width: "100%", textAlignVertical: 'center', textAlign: 'center' }}

                  name="apple-keyboard-control"
                  size={30}
                  color="#7cc0c0"
                />
              </View>
              <TouchableOpacity activeOpacity={1} onPress={() => {
                this.setModalVisible(!modalVisible);
              }} style={{ width: width, height: "85%" }}></TouchableOpacity>
            </View>
          </Modal>
          <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Page1')} activeOpacity={1} style={styles.left}>
              <MaterialCommunityIcons style={{ textAlign: 'center', borderWidth: 0, height: '100%', textAlignVertical: 'center' }}
                name="clipboard-text-outline"
                size={25}
                color="#fff"
              />
            </TouchableOpacity> */}
            <TouchableOpacity activeOpacity={1}
              onPress={() => navigation.navigate('search')}
              style={styles.input}>
              <View style={{ width: width * 0.07, marginLeft: "5%", height: width * 0.07, }}>
                <SimpleLineIcons style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', borderWidth: 0, }}
                  name="magnifier"
                  size={18}
                  color="grey"
                />
              </View>
              <Text style={{ fontSize: 15, marginLeft: "3%", color: "#7cc0c0" }}>搜索好物</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.left}
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <MaterialCommunityIcons style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%" }}
                name="dots-vertical"
                size={25}
                color="#fff"
              />

            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{ alignItems: "center", }}>
              <View style={{ width: width * 0.95, height: 180, marginBottom: 10 }}  >
                <Swiper
                  //样式
                  //组件高度
                  loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                  autoplay={true}                //自动轮播
                  autoplayTimeout={10}            //每隔4秒切换
                  horizontal={true}              //水平方向，为false可设置为竖直方向
                  paginationStyle={{ bottom: 1 }} //小圆点的位置：距离底部10px
                  showsButtons={false}           //为false时不显示控制按钮
                  showsPagination={true}       //为false不显示下方圆点
                  dot={<View style={{           //未选中的圆点样式
                    backgroundColor: 'rgba(0,0,0,.2)',
                    width: 5,
                    height: 5,
                    marginLeft: 2,
                    marginRight: 2,
                    marginTop: 9,
                    marginBottom: 9,
                  }} />}
                  activeDot={<View style={{    //选中的圆点样式
                    backgroundColor: '#7cc0c0',
                    width: 18,
                    height: 5,
                    marginLeft: 2,
                    marginRight: 2,
                    marginTop: 9,
                    marginBottom: 9,
                  }} />}
                >
                  <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=3861618596,4141988624&fm=26&fmt=auto&gp=0.jpg" }} />
                  <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=1617206691,1514069942&fm=26&fmt=auto&gp=0.jpg" }} />
                  <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img1.baidu.com/it/u=471631677,3527280070&fm=26&fmt=auto&gp=0.jpg" }} />
                  <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img1.baidu.com/it/u=1910157183,2748145307&fm=26&fmt=auto&gp=0.jpg" }} />
                  <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=3177392174,4240871380&fm=15&fmt=auto&gp=0.jpg" }} />
                  <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=2924370352,4021490996&fm=26&fmt=auto&gp=0.jpg" }} />
                </Swiper>
                {/* <ShiCha /> */}
                {/* <EZSwiper style={{ width: "100%", height: "100%",marginBottom:"2%" }}
                dataSource={images}
                width={width}
                height={160}
                renderRow={this.renderRow}
                ratio={0.6}
                index={5}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
              /> */}
              </View>
              <View style={styles.part}>
                <TouchableOpacity activeOpacity={1} style={{ width: "39%", height: "100%", borderRadius: 15, marginRight: "1%", elevation: 5,backgroundColor:"#fff" }}
                  onPress={() => navigation.navigate('CustomMade')}
                >
                  <View style={{width:"100%",height:"50%",alignItems:"center",justifyContent:"center"}}>
                  
             <Text style={{fontSize:18,fontWeight:"bold",color:"#7cc0c0",marginTop:"7%"}}>文化定制</Text>
                 <Image style={{width:"90%",height:"50%"}} source={require("../img/made2.png")}></Image>
                    {/* <Text style={{fontSize:20,fontWeight:"bold"}}>文化定制</Text> */}
                  </View>
                  <View style={{width:"100%",height:"50%"}}>
                  <LottieView source={require('../../../animal/dingzhi.json')} autoPlay loop progress={this.state.progress} />
                  </View>
                  {/* <Image style={{ width: "100%", height: "100%", borderRadius: 15, }} source={{ uri: 'http://8.142.11.85:3000/public/images/8.jpg' }}></Image> */}
                </TouchableOpacity>
                <View style={{ width: "59%", height: "100%", marginLeft: "1%", justifyContent: "center" }}>
                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Classify')} style={{ width: "100%",flexDirection:"row", height: "49%", marginBottom: "2%", backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
                  <View style={{}}></View>
                    <Image style={{ width: "100%", height: "100%", borderRadius: 15 }} source={{ uri: 'http://8.142.11.85:3000/public/images/9.jpg' }}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Swop')} style={{ width: "100%", height: "49%", backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
                    <Image style={{ width: "100%", height: "100%", borderRadius: 15 }} source={{ uri: 'http://8.142.11.85:3000/public/images/10.jpg' }}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.old}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('NewWorks')} style={{ width: "100%", height: "12%", alignItems: "center", flexDirection: "row" }}>
                <View style={{ backgroundColor: '#7cc0bf', width: 2, height: 28, marginLeft: 10 }} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7cc0bf' }}>上新好物</Text>
                                                <Text style={{ fontSize: 7, fontWeight: 'bold', color: '#7cc0bf' }}>NEW GOOD THINKGS</Text>
                                            </View>


                  <TouchableOpacity onPress={() => this.props.navigation.navigate('NewWorks')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '62%', color: '#7cc0bf' }}>
                    <LottieView source={require('../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                  </TouchableOpacity>
                </TouchableOpacity>
                
                

                <FlatList
        //   style={{width:width,height:10000}}
            data = {this.state.shops}
            renderItem = {({item})=>
            <View style={{width:width,marginLeft:10}}>
                 <TouchableOpacity onPress={() => { this.props.navigation.navigate("Shopdetails",{shops:item}) }} activeOpacity={1} style={{width: width*0.9,
                                                                                                                                                height: height*0.18,
                                                                                                                                                backgroundColor: "grey",
                                                                                                                                                marginBottom: "3%",
                                                                                                                                                borderRadius: 10,
                                                                                                                                                elevation: 10,
                                                                                                                                                flexDirection: "row",}}>
                <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                  <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>{item.jieshao}</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text style={{  color: "#7cc0c0" }}>￥<Text style={{ fontSize: 13, color: "#7cc0c0" }}>{item.price}</Text></Text>
                  </View>
                  
                  <View style={{ width: "90%", height: "18%", flexDirection: "row" }}>

                  </View>
                  
                  <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                    <TouchableOpacity activeOpacity={1} style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}
                    onPress={()=>this.insert_shopcart(item)}>
                      <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                    </TouchableOpacity>


                  </View>
                </View>
                <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} resizeMode='stretch' source={{uri:item.pic[0]}} >

                </Image>
              </TouchableOpacity>
        
            </View>
        
        
        }/>



              </View>
              <View style={styles.limit}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('OldBankTimer')} style={{ width: "100%", height: "12%", alignItems: "center", flexDirection: "row" }}>
                <View style={{ backgroundColor: '#7cc0bf', width: 2, height: 28, marginLeft: 10 }} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7cc0bf' }}>线下老字号</Text>
                                                <Text style={{ fontSize: 7, fontWeight: 'bold', color: '#7cc0bf' }}>OFFLINE TIME-HONONER BRANDS</Text>
                                            </View>
                  {/* <View style={{ width: 3, height: "70%", marginLeft: "2%", backgroundColor: "#7cc0c0" }}></View> */}
                  {/* <Text style={{ fontSize: 15, marginLeft: "2%", color: "#7cc0c0", fontWeight: "bold" }}>线下旗舰店</Text> */}
                  {/* <TouchableOpacity  activeOpacity={1}
                  onPress={() => navigation.navigate('OldBankTimer')}
                  style={{ width: width * 0.08, height: width * 0.08, marginLeft: "60%" }}>
                  <AntDesign style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%" }}
                    name="right"
                    size={20}
                    color="#7cc0c0"
                  />
                </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('OldBankTimer')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '50%', color: '#7cc0bf' }}>
                    <LottieView source={require('../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                  </TouchableOpacity>
                </TouchableOpacity>
                <View style={styles.oldname}>
                  <Carousel
                    // layout={"default"}
                    layout={'stack'} layoutCardOffset={`10`}
                    // layout={'tinder'} layoutCardOffset={`15`} 
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={350}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    loop={true}
                    onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
              </View>

              <View style={{ width: "95%", height: height * 0.4, alignItems: "center", marginBottom: -height * 0.27, backgroundColor: '#fff', marginTop: 10, marginHorizontal: '2.5%', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                <Text style={{ height: 20, fontSize: 15, color: "#7cc0c0", fontWeight: "bold", marginTop: "2%", fontWeight: "bold" }}>今日推荐</Text>
                <View style={{ width: "25%", height: "1%", backgroundColor: "#7cc0c0", marginTop: 10 }}></View>
              </View>

            </View>
            <View style={{ width: "95%", marginHorizontal: '2.5%', }}>
              {/* <Water /> */}
            </View>

          </ScrollView>
          {/* <ActionButton
          hideLabelShadow={true}
          activeOpacity={1}
          elevation={100}
          size={60}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { alert('你点了我！') }}
        /> */}
        </LinearGradient>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center"


  },
  header: {
    width: width,
    height: height * 0.07,
    // backgroundColor: "#f1f1f1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  left: {
    width: width * 0.1,
    height: width * 0.1,

  },
  input: {
    width: width * 0.80,
    height: width * 0.09,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5
  },
  icon: {
    width: "100%",
    height: "100%"
  },
  cell: {
    // backgroundColor: 'red',
    width: "95%",
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  part: {
    width: width * 0.95,
    height: width * 0.4,

    flexDirection: "row",
    marginBottom: "2%"

  },
  old: {
    width: width * 0.95,
    height:width *1.2,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center"
  },
  suggest: {
    width: "95%",
    height: "27%",
    backgroundColor: "grey",
    marginTop: "2%",
    borderRadius: 15,
    elevation: 5,
    flexDirection: "row",

  },
  limit: {
    width: width * 0.95,
    height: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    marginTop: "2%"

  },
  oldname: {
    width: "95%",
    height: "80%",
    // backgroundColor:"grey",
    marginTop: "2%",
    borderRadius: 15,
    // elevation:10,
    flexDirection: "row",
  },
  waterfall: {
    width: width * 0.95,
    height: height,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    marginTop: "2%"

  },

  actionButtonView: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
  },





})
