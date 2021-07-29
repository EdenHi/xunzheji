/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from "react-native-vector-icons/AntDesign";
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageViewer from 'react-native-image-zoom-viewer';
// import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
import Good from './Goods';
const { width, height } = Dimensions.get('window');
class GoodsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible1: false,
      modalVisible: false,
      //放大显示的图片索引
      currentIndex: 0,
      //存放图片的路径
      imgUrls: [
        {
          url: 'https://gd2.alicdn.com/imgextra/i1/1990475129/TB2Zns2qlUSMeJjy1zkXXaWmpXa_!!1990475129.jpg',
        },
        {
          url: 'https://gd4.alicdn.com/imgextra/i4/1990475129/TB2_Ge.qH8kpuFjy0FcXXaUhpXa_!!1990475129.jpg',
        },
        {
          url: 'https://gd2.alicdn.com/imgextra/i2/1990475129/TB2NWcVcpXXXXbVXXXXXXXXXXXX_!!1990475129.jpg',
        },
      ],
    };
  }

  //点击图片方法事件
  handleShowAlbum = (index) => {
    const imgUrls = this.state.imgUrls;
    const currentIndex = index;
    const modalVisible = true;
    this.setState({
      imgUrls, currentIndex, modalVisible,
    });
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible1: visible });
  }

  render() {
    const { modalVisible1 } = this.state;
    const { navigation } = this.props;
    const { modalVisible, imgUrls, currentIndex } = this.state;
    return (
      <View style={styles.Box1}>
        {/* <LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0bf","#fff","#fff"]} > */}
            {/* <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"space-around"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff"}}>定制</Text>
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
            </View>  */}
                <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible1}
          hardwareAccelerated={true}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible1);
          }}
        >
          <View>
<View style={{ borderBottomRightRadius:10,borderBottomLeftRadius:10,elevation:5, height: height * 0.15, width: width, backgroundColor: '#eee',width: "100%" }}>
            <View style={{ width: width, height: "80%", borderWidth: 0, flexDirection: 'row'}}>
              <TouchableOpacity style={{marginVertical:'4%',height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20,marginLeft:width*0.024 }}>

                <MaterialCommunityIcons onPress={()=>{this.props.navigation.navigate('ShoppingCart'),this.setModalVisible(!modalVisible1)}}style={{ textAlign: 'center', marginTop:"-15%", height: '100%', textAlignVertical: 'center' }}
                  name="cart-outline"
                  size={35}
                  color="#7cc0c0"
                />
                <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>购物车</Text>


              </TouchableOpacity>
              <TouchableOpacity style={{ marginVertical:'4%',height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20,marginLeft:width*0.024 }}>
                <MaterialCommunityIcons style={{ textAlign: 'center', marginTop:"-15%", height: '100%', textAlignVertical: 'center' }}
                  name="clipboard-text-outline"
                  size={35}
                  color="#7cc0c0"
                />
                <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>订单</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Chats'),this.setModalVisible(!modalVisible1)}} style={{ marginVertical:'4%',height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20,marginLeft:width*0.024 }}>
                <AntDesign style={{ textAlign: 'center',  marginTop:"-15%", height: '100%', textAlignVertical: 'center' }}
                  name="customerservice"
                  size={35}
                  color="#7cc0c0"
                />
                <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>客服</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddressList'),this.setModalVisible(!modalVisible1)}} style={{marginVertical:'4%',height: "80%", width: width * 0.22, backgroundColor: '#fff', borderRadius: 20,marginLeft:width*0.024 }}>
                <MaterialCommunityIcons  style={{ textAlign: 'center',  marginTop:"-15%", height: '100%', textAlignVertical: 'center' }}
                  name="map-marker-radius"
                  size={35}
                  color="#7cc0c0"
                />
                <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>地址管理</Text>
              </TouchableOpacity>
            </View>
            <MaterialCommunityIcons onPress={() => {
              this.setModalVisible(!modalVisible1);
            }} style={{ borderWidth: 0, height: '20%', width: "100%", textAlignVertical: 'center', textAlign: 'center' }}

              name="apple-keyboard-control"
              size={30}
              color="#7cc0c0"
            />
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => {
              this.setModalVisible(!modalVisible1);
            }} style={{width:width,height:"85%"}}></TouchableOpacity>
          </View>
          
          
        </Modal>
        {/* 头部 */}
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#fff",height:height*0.07,justifyContent:"space-around"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#000",marginLeft:"25%",marginRight:"25%"}}>商品详情</Text>
              <Entypo onPress={() => {
              this.setModalVisible(!modalVisible);
            }} name="dots-three-vertical"  color="#000"  size={20} />
            </View> 
        {/* <View style={styles.Head}>
          <Entypo
            onPress={() => {
              this.props.navigation.goBack();
            }}
            name="chevron-thin-left"
            size={25}
          />
          <Entypo onPress={() => {
              this.setModalVisible(!modalVisible);
            }} name="dots-three-vertical" size={25} />
        </View> */}
        {/* 可滑动部分 */}
        <ScrollView style={{ borderWidth: 0 }}>
          {/* 图片展示 */}
          <View style={styles.ImgBox}>
            <Swiper loop={true}>
              <TouchableOpacity onPress={() => this.handleShowAlbum(0)}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{
                    uri: this.state.imgUrls[0].url,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleShowAlbum(1)}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{
                    uri: this.state.imgUrls[1].url,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleShowAlbum(2)}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{
                    uri: this.state.imgUrls[2].url,
                  }}
                />
              </TouchableOpacity>
            </Swiper>
          </View>
          {/* 放大图片的遮罩层 */}
          <Modal animationType={'slide'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { this.setState({ modalVisible: false }); }}>
            <ImageViewer imageUrls={imgUrls} style={{ flex: 1 }} index={currentIndex} />
          </Modal>

          {/*描述及价格  */}
          <View style={styles.PriceBox}>
            <Text style={styles.Wz}>¥19.90</Text>
            <Text style={styles.Wz}>万昌黑芝麻酥糖夹猪油</Text>
            <Text style={styles.Wz1}>天天特价万昌黑芝麻酥糖夹猪油老字号传统糕点500g小包装点心包邮</Text>
          </View>
          <View
            style={{ width: '85%', marginHorizontal: '7.5%', borderRadius: 20 }}>
            <View
              style={{
                borderWidth: 0,
                height: height * 0.05,
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'center',
                  height: '100%',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                净含量
              </Text>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'center',
                  color: 'grey',
                  width: width * 0.64,
                  fontSize: 12,
                  marginLeft: width * 0.07,
                }}>500g</Text>
            </View>
            <View
              style={{
                borderWidth: 0,
                height: height * 0.08,
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'top',
                  height: '100%',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: '2%',
                }}>
                产品描述
              </Text>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'top',
                  color: 'grey',
                  paddingTop: '2%',
                  width: width * 0.64,
                  fontSize: 12,
                  marginLeft: "2.5%",
                }}
                numberOfLines={3}
                ellipsizeMode={'tail'}>
                江南地区特色传统小吃，它是用炒熟的芝麻研粉和糖加料制成，用一张小纸包成长方形，小纸上印有店家的招牌，其味香甜、质感松软。过年时家家都把小纸包糖装在果子盒里招待客人，到亲戚家去拜年一定要送上麻酥糖。民谚曰:“拜年不带麻酥糖，请君不要进厅堂”。
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0,
                height: height * 0.05,
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'center',
                  height: '100%',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                配料
              </Text>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'center',
                  color: 'grey',
                  width: width * 0.64,
                  fontSize: 12,
                  marginLeft: width * 0.116,
                }}
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                小麦粉、白砂糖、黑芝麻、饴糖、猪油
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0,
                height: height * 0.15,
                flexDirection: 'row',
                borderBottomWidth: 0.2,
                borderColor: 'grey',
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'top',
                  height: '90%',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: '2%',
                }}>
                商品评价
              </Text>
              <View style={{marginTop:30}}>
                <Text
                  style={{
                    borderBottomWidth: 0.5,
                    textAlignVertical: 'center',
                    color: 'grey',
                    paddingTop: '2%',
                    width: width * 0.64,
                    fontSize: 12,
                    marginLeft: '2.5%',
                    height: '50%',
                  }}
                  numberOfLines={2}
                  ellipsizeMode={'tail'}>
李***1:太甜了，吃了一小块就感觉很甜腻。
                </Text>
                <Text
                  style={{
                    borderWidth: 0,
                    textAlignVertical: 'center',
                    color: 'grey',
                    paddingTop: '2%',
                    width: width * 0.64,
                    fontSize: 12,
                    marginLeft: '2.5%',
                    height: '50%',
                  }}
                  numberOfLines={2}
                  ellipsizeMode={'tail'}>
阿***式:还是原来的味道，好评，儿子经常念叨要吃，一到货马上开吃
                </Text>
              </View>

              <Text
                style={{
                  fontWeight: 'bold',
                  borderWidth: 0,
                  marginTop: '2.5%',
                  marginLeft: -65,
                  alignItems: 'center',
                  height:25
                }}>
                查看更多
              </Text>
              <Entypo
                style={{ marginTop: '2.2%',marginLeft:-5}}
                name="chevron-right"
                size={20}
              />
            </View>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
              marginTop:20,
              width: '100%',
              height: width * 0.4,
              flexDirection: 'row',
            }}>
            <View style={styles.tuijian}>
              <Good price="10"
                img={this.state.imgUrls[0].url}
                navigation={this.props.navigation}
              />
            </View>
            <View style={styles.tuijian}>
              <Good price="10"
               img={this.state.imgUrls[1].url}
                navigation={this.props.navigation}
              />
            </View>
            <View style={styles.tuijian}>
              <Good price="10"
              img={this.state.imgUrls[2].url}
                navigation={this.props.navigation}
              />
            </View>
            <View style={styles.tuijian}>
              <Good price="10"
              img={this.state.imgUrls[1].url}
                navigation={this.props.navigation}
              />
            </View>
          </ScrollView>
          <Image resizeMode={'stretch'}
            style={{ width: '100%', height: width,marginTop:20 }}
            source={{
              uri: 'https://img.alicdn.com/imgextra/i3/1990475129/TB2WDMUqm0jpuFjy0FlXXc0bpXa_!!1990475129.jpg'
            }}
          />
          <Image
            style={{ width: '100%', height: width }}
            source={{
              uri: this.state.imgUrls[0].url
            }}
          />

          <Image
            style={{ width: '100%', height: width }}
            source={{
              uri: this.state.imgUrls[1].url
            }}
          />
          <Image
            style={{ width: '100%', height: width }}
            source={{
              uri: this.state.imgUrls[2].url
            }}
          />
        </ScrollView>
        {/* 底部 */}
        <View style={styles.Foot}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '40%',
            }}>
            <View
              style={{
                flexDirection: 'column',
                borderWidth: 0,
                alignSelf: 'center',
              }}>
              <Entypo
                style={{ borderWidth: 0, marginTop: '15%' }}
                name="shop"
                size={25}
              />
              <Text
                style={{
                  fontSize: 10,
                  alignSelf: 'center',
                  marginTop: '-5%',
                  borderWidth: 0,
                }}>
                店铺
              </Text>
            </View>
            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
              <Entypo
                style={{ borderWidth: 0, marginTop: '15%' }}
                name="shopping-bag"
                size={25}
              />
              <Text
                style={{
                  fontSize: 10,
                  alignSelf: 'center',
                  marginTop: '-5%',
                  borderWidth: 0,
                }}>
                背包
              </Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            style={{
              borderWidth: 0,
              width: '27.5%',
              height: '80%',
              backgroundColor: '#7cc0c0',
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              marginTop: '1%',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                textAlignVertical: 'center',
                height: '100%',
                textAlign: 'center',
              }}>
              加入购物车
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Zhifu')}
            activeOpacity={1}
            style={{
              borderWidth: 0,
              width: '27.5%',
              height: '80%',
              backgroundColor: '#7cc0c0',
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              marginTop: '1%',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                textAlignVertical: 'center',
                height: '100%',
                textAlign: 'center',
              }}>
              立即购买
            </Text>
          </TouchableOpacity>
        </View>
        {/* </LinearGradient> */}
      </View>
    );
  }
}

export default GoodsDetail;
const styles = StyleSheet.create({
  Box1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Head: {
    borderWidth: 0,
    height: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '2.5%',
    width: '95%',
    marginHorizontal: '2.5%',
  },
  ImgBox: {
    borderWidth: 0,
    height: height * 0.4,
    width: '100%',
  },
  PriceBox: {
    borderWidth: 0,
    height: height * 0.2,
    width: width,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    backgroundColor: '#fff',
  },
  BigTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 1,
    marginLeft: width * 0.08,
  },
  SmlTxt: {
    fontSize: 10,
    borderWidth: 1,
    marginLeft: width * 0.08,
  },
  Wz: {
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 0,
    marginLeft: width * 0.08,
    marginTop: '2%',
  },
  Wz1: {
    fontSize: 12,
    borderWidth: 0,
    color: 'grey',
    marginLeft: width * 0.08,
    marginTop: '2%',
    width: '85%'
  },
  Foot: {
    borderWidth: 0,
    height: '6%',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: 'grey',
  },
  tuijian: {
    marginHorizontal: 15,
  },
});
