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
          title: "亨达利",
          text: "亨达利，英文名hengdali，是广州市信德箱包皮具有限公司旗下的箱包品牌，以经营、设计、生产拉杆箱、旅行包、高端女包、钱包、皮带等箱包皮具中高端产品，以最具性价比的品牌为目标，为顾客创造价值，为社会提供就业，并致力于打造中国国有皮具品牌。",
          img: "https://img0.baidu.com/it/u=4037245012,4140780654&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "邵芝岩",
          text: "邵芝岩，杭州笔庄，原名粲花室，开建于清朝同治元年（1862），距今已有139年的历史。在杭州的百年老店中，笔庄是唯一精制各类毛笔和经营文房四宝的中华老字号企业。她是浙江省旅游涉外定点商场，又是自营出口的生产企业。",
          img: "https://img0.baidu.com/it/u=1277136832,1694045219&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "西泠印社",
          text: "西泠印社，创建于清光绪三十年（1904年），由浙派篆刻家丁辅之、王福庵、吴隐、叶为铭等召集同人发起创建，吴昌硕为第一任社长。以“保存金石，研究印学，兼及书画”为宗旨。是海内外研究金石篆刻历史最悠久、成就最高、影响最广国际性的研究印学、书画的民间艺术团体，有“天下第一名社”之誉。",
          img: "https://img0.baidu.com/it/u=2201631777,1359889989&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "朱府铜艺",
          text: "“朱府铜艺”发源于绍兴，始创于清朝同治末年1875年，距今已有近150年历史。“朱府铜艺”第一代传人，出身书香门弟的朱雨相，和他的三弟——后来名噪江南的书法才子朱庆润，挂出了“朱府义大铜铺”的牌匾。此后，朱家的铜雕技艺代代相传，享誉江南，成就了“朱府铜艺”的金字招牌。",
          img: "https://img2.baidu.com/it/u=58945123,1870849876&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "王星记",
          text: "杭州是我国制扇名城，自古有“杭州雅扇”之说，南宋以来有不少制扇艺人会集杭州。1875年王星斋在杭城清河坊创建王星记扇庄（后改名王星记扇厂），迄今已有130年历史，他在选材、做工、品种等方面苦下功夫。2008年，“王星记”制扇技艺被列入国家级非物质文化遗产保护名录。",
          img: "https://img0.baidu.com/it/u=2741521114,3468646386&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "张小泉",
          text: "张小泉品牌成名于1628年(明朝崇祯元年 [1]  )，是中华老字号，也是刀剪行业中唯一的中国驰名商标。2002年通过了ISO9001质量管理体系认证，同年还获得原产地注册保护。产品包括家庭用剪系列、工农业园林剪系列、服装剪系列、美容美发剪系列、旅游礼品剪系列、刀具系列等共100多个品种，400多个规格。中国国内市场覆盖率和占有率一直居同行之首，同时产品还远销东南亚，欧美等地区。张小泉在国内外享有很高的知名度和美誉度，深受消费者信赖。",
          img: "https://img1.baidu.com/it/u=2069743543,1338079641&fm=15&fmt=auto&gp=0.jpg",
        },
      ]
    };
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
        <ImageBackground imageStyle={{ borderRadius: 15, }} style={{ width: "100%", height: "100%", flexDirection: "column-reverse" }} source={{ uri: item.img }} >
          <View style={{ width: "100%", height: "30%", backgroundColor: 'rgba(0,0,0,0.5)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold", marginLeft: "5%", marginTop: "2%" }}>{item.title}</Text>
            <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 12, color: "#fff", marginLeft: "5%", marginTop: "2%" }}>{item.text}</Text>
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
                  {/* <View style={{ width: 3, height: "70%", marginLeft: "2%", backgroundColor: "#7cc0c0" }}></View> */}

                  {/* <Text style={{ fontSize: 15, marginLeft: "2%", color: "#7cc0c0", fontWeight: "bold" }}>上新好物New good things</Text> */}
                  {/* <TouchableOpacity  activeOpacity={1}
                  onPress={() => navigation.navigate('NewWorks')}
                  style={{ width: width * 0.08, height: width * 0.08, marginLeft: "65%" }}>
                  <AntDesign style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%" }}
                    name="right"
                    size={20}
                    color="#7cc0c0"
                  />
                </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('NewWorks')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, marginLeft: '62%', color: '#7cc0bf' }}>
                    <LottieView source={require('../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("GoodsDetail") }} activeOpacity={1} style={styles.suggest}>
                  <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                    <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>姜枣膏</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>姜枣膏是一道美味佳肴，主料是姜，枣。</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text style={{ fontSize: 13, color: "#7cc0c0" }}>￥50</Text>
                    </View>
                    <View style={{ width: "90%", height: "18%", flexDirection: "row" }}>
                      <View style={{ width: "70%", height: "100%", }}>
                        <LottieView source={require('./star5.json')} progress={this.state.progress} />
                      </View>
                      <View style={{ width: "26%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 12 }}>5.0</Text>
                      </View>
                    </View>
                    <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                      <TouchableOpacity activeOpacity={1} style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                      </TouchableOpacity>
                      {/* <TouchableOpacity  activeOpacity={1} style={{ width: "20%", height: "98%", backgroundColor: "#fff", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                      <AntDesign style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%" }}
                        name="staro"
                        size={25}
                        color="orange"
                      />

                    </TouchableOpacity> */}

                    </View>
                  </View>
                  <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={{ uri: 'http://8.142.11.85:3000/public/images/2.jpg' }} >

                  </Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("GoodsDetail") }} activeOpacity={1} style={styles.suggest}>
                  <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                    <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>姜枣膏</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>姜枣膏是一道美味佳肴，主料是姜，枣。</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text style={{ fontSize: 13, color: "#7cc0c0" }}>￥50</Text>
                    </View>
                    <View style={{ width: "90%", height: "18%", flexDirection: "row" }}>
                      <View style={{ width: "70%", height: "100%", }}>
                        <LottieView source={require('./star5.json')} progress={this.state.progress} />
                      </View>
                      <View style={{ width: "26%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 12 }}>5.0</Text>
                      </View>
                    </View>
                    <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                      <TouchableOpacity activeOpacity={1} style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                      </TouchableOpacity>
                      {/* <TouchableOpacity  activeOpacity={1} style={{ width: "20%", height: "98%", backgroundColor: "#fff", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                      <AntDesign style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%" }}
                        name="staro"
                        size={25}
                        color="orange"
                      />

                    </TouchableOpacity> */}

                    </View>
                  </View>
                  <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={{ uri: 'http://8.142.11.85:3000/public/images/2.jpg' }} >

                  </Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("GoodsDetail") }} activeOpacity={1} style={styles.suggest}>
                  <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                    <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>双合成月饼</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>双合成月饼连续十余年被国家评为“中国名饼、名牌月饼”。</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text style={{ fontSize: 13, color: "#7cc0c0" }}>￥30</Text>
                    </View>
                    <View style={{ width: "90%", height: "18%", flexDirection: "row" }}>
                      <View style={{ width: "70%", height: "100%", }}>
                        <LottieView source={require('./star5.json')} progress={this.state.progress} />
                      </View>
                      <View style={{ width: "26%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 12 }}>5.0</Text>
                      </View>
                    </View>
                    <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                      <TouchableOpacity activeOpacity={1} style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={{ uri: 'http://8.142.11.85:3000/public/images/3.webp' }} >
                  </Image>
                </TouchableOpacity>
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
                    sliderWidth={400}
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
    height: width * 1.3,
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
