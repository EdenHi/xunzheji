/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import Lightbox from 'react-native-lightbox';
import Good from './Goods';
const {width, height} = Dimensions.get('window');
class GoodsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.Box1}>
        {/* 头部 */}
        <View style={styles.Head}>
          <Entypo
            onPress={() => {
              this.props.navigation.goBack();
            }}
            name="chevron-thin-left"
            size={25}
          />
          <Entypo name="dots-three-vertical" size={25} />
        </View>
        {/* 可滑动部分 */}
        <ScrollView style={{borderWidth: 0}}>
          {/* 图片展示 */}
          <View style={styles.ImgBox}>
            <Swiper loop={true}>
              <View>
                <Lightbox>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri: 'http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg',
                    }}
                  />
                </Lightbox>
              </View>
              <Lightbox>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg',
                  }}
                />
              </Lightbox>
              <Lightbox>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg',
                  }}
                />
              </Lightbox>
            </Swiper>
          </View>

          {/*描述及价格  */}
          <View style={styles.PriceBox}>
            <Text style={styles.Wz}>$999999999</Text>
            <Text style={styles.Wz}>大马路</Text>
            <Text style={styles.Wz1}>家用大马路,自用一手，低价甩卖</Text>
          </View>
          <View
            style={{width: '85%', marginHorizontal: '7.5%', borderRadius: 20}}>
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
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                尺寸
              </Text>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'center',
                  color: 'grey',
                  width: width * 0.71,
                  fontSize: 13,
                  marginLeft: width * 0.116,
                }}>
                1000000km*5m
              </Text>
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
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: '2%',
                }}>
                特点
              </Text>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'top',
                  color: 'grey',
                  paddingTop: '2%',
                  width: width * 0.64,
                  fontSize: 13,
                  marginLeft: width * 0.116,
                }}
                numberOfLines={3}
                ellipsizeMode={'tail'}>
                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
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
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                材质
              </Text>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'center',
                  color: 'grey',
                  width: width * 0.64,
                  fontSize: 13,
                  marginLeft: width * 0.116,
                }}
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0,
                height: height * 0.12,
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
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: '2%',
                }}>
                商品评价
              </Text>
              <Text
                style={{
                  borderWidth: 0,
                  textAlignVertical: 'top',
                  color: 'grey',
                  paddingTop: '2%',
                  width: width * 0.64,
                  fontSize: 13,
                  marginLeft: '2.5%',
                  height: '70%',
                }}
                numberOfLines={3}
                ellipsizeMode={'tail'}>
                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  borderWidth: 0,
                  marginTop: '23%',
                  marginLeft: -width * 0.19,
                  alignItems: 'center',
                }}>
                查看更多
              </Text>
              <Entypo
                style={{marginTop: height * 0.0889}}
                name="chevron-right"
                size={20}
              />
            </View>
          </View>
          <View style={{height: '5%', borderWidth: 0, borderRadius: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: '100%',
              }}>
              <View style={{borderWidth: 0, width: '30%'}}>
                <Image
                  style={{
                    borderWidth: 0,
                    width: '90%',
                    height: '80%',
                    alignSelf: 'center',
                    marginVertical: '10%',
                  }}
                  source={{
                    uri: 'http://pic.sc.chinaz.com/files/pic/pic9/201812/zzpic15507.jpg',
                  }}
                />
              </View>
              <View
                style={{
                  borderWidth: 0,
                  width: '35%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    width: '100%',
                    height: '50%',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  门口小店
                </Text>
                <Text
                  style={{
                    width: '100%',
                    height: '50%',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  浙江·杭州
                </Text>
              </View>
              <View style={{borderWidth: 0, width: '35%'}}>
                <Text
                  style={{
                    width: '100%',
                    height: '50%',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  评分
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Entypo name="star" size={20} />
                  <Entypo name="star" size={20} />
                  <Entypo name="star" size={20} />
                  <Entypo name="star" size={20} />
                  <Entypo name="star" size={20} />
                </View>
              </View>
            </View>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
              borderWidth: 0,
              width: '100%',
              height: width * 0.55,
              flexDirection: 'row',
            }}>
            <View style={styles.tuijian}>
              <Good
                img="http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg"
                navigation={this.props.navigation}
              />
            </View>
            <View style={styles.tuijian}>
              <Good
                img="http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg"
                navigation={this.props.navigation}
              />
            </View>
            <View style={styles.tuijian}>
              <Good
                img="http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg"
                navigation={this.props.navigation}
              />
            </View>
            <View style={styles.tuijian}>
              <Good
                img="http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg"
                navigation={this.props.navigation}
              />
            </View>
          </ScrollView>

          <Image
            style={{width: '100%', height: width}}
            source={{
              uri: 'http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg',
            }}
          />

          <Image
            style={{width: '100%', height: width}}
            source={{
              uri: 'http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg',
            }}
          />
          <Image
            style={{width: '100%', height: width}}
            source={{
              uri: 'http://img.ewebweb.com/uploads/20190730/21/1564493723-CdYEFxqXur.jpg',
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
                style={{borderWidth: 0, marginTop: '15%'}}
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
            <View style={{flexDirection: 'column', alignSelf: 'center'}}>
              <Entypo
                style={{borderWidth: 0, marginTop: '15%'}}
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
              height: '90%',
              backgroundColor: 'black',
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              marginTop: '1%',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                textAlignVertical: 'center',
                height: '100%',
                textAlign: 'center',
              }}>
              加入购物车
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              borderWidth: 0,
              width: '27.5%',
              height: '90%',
              backgroundColor: 'black',
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              marginTop: '1%',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                textAlignVertical: 'center',
                height: '100%',
                textAlign: 'center',
              }}>
              立即购买
            </Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 0,
    marginLeft: width * 0.08,
    marginTop: '5%',
  },
  Wz1: {
    fontSize: 15,
    borderWidth: 0,
    color: 'grey',
    marginLeft: width * 0.08,
    marginTop: '5%',
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
