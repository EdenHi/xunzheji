/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage, DeviceEventEmitter, ImageBackground, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import axios from 'axios';
import { NavigationContext } from '@react-navigation/native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import MyRoute2 from '../../nav/MyRoute2';
import AwesomeAlert from 'react-native-awesome-alerts';
import SideMenu from 'react-native-side-menu';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get('window');
let _this = this;
export default class My extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      data: [],
      isScroll: true,
      isOpen: false,
      aa: 1,
      showAlert: false,
    }
    // this.SelectMenuItemCallBack = this.SelectMenuItemCallBack.bind(this);
  }
  //   SelectMenuItemCallBack() {
  //     this.setState({
  //         isOpen: !this.state.isOpen,
  //     })
  // }
  //点击打开侧边栏
  SelectToOpenLeftSideMenu() {
    this.setState({
      isOpen: true,
    })
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  //获取个人信息数据
  get_shuju() {
    AsyncStorage.getItem('username', (error, result) => {
      if (!error) {
        this.setState({
          username: result,
        });
        console.log('username', result);
        axios.post('http://8.142.11.85:3000/index/selectPerson', {
          username: result,
        }).then((json) => {
          this.setState({
            data: json.data[0],
          });
        });
      } else {
        console.log('获取数据失败', error);
      }
    });
  }
  //退出刷新
  init() {
    AsyncStorage.getItem('username', (error, result) => {
      if (!error) {
        this.setState({
          username: result,
        });
        console.log('username', result);
        axios.post('http://8.142.11.85:3000/index/selectPerson', {
          username: result,
        }).then((json) => {
          this.setState({
            data: json.data[0],
          });
        });
      } else {
        console.log('获取数据失败', error);
      }
    });
  }
  //进行渲染页面
  componentDidMount() {

    this.get_shuju();

    this.listener = DeviceEventEmitter.addListener('denglu', this.get_shuju.bind(this));
    this.listener = DeviceEventEmitter.addListener('scrollview', this.scrollview.bind(this));
  }


  //打开ScrollView的移动
  scrollview() {
    this.setState({ isScroll: true })
  }

  //移除监听
  componentWillUnmount() {
    this.listener.remove();
  }

  //带着参数 跳转到编辑资料页面
  go_bianji = (v) => {
    this.context.navigate('bianjiziliao', v);
  }
  //退出
  loginOut(username) {
    this.setState({ username: '' })
  }
  render() {
    const { showAlert } = this.state;
    const { navigation } = this.props;
    const { data, isScroll } = this.state;
    console.log('data', data);
    let showLogin = this.state.username === '' ? <TouchableOpacity activeOpacity={1} style={{ width: width * 0.2, height: width * 0.3 * 0.5, marginLeft: width * -0.25, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 10 }} onPress={() => this.props.navigation.navigate('Login')}>
      <View >
        <Text style={{ color: '#7cc0c0', width: '100%', height: '50%', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold', fontSize: 15 }}>账号</Text>
        <Text style={{ color: '#7cc0c0', width: '100%', height: '50%', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold', fontSize: 15 }}>登录</Text>

      </View>
    </TouchableOpacity> : null;
    const menu =
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", marginTop: '5%' }}>
          <TouchableOpacity style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <MaterialCommunityIcons onPress={() => { this.props.navigation.navigate('ShoppingCart') }} style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="cart-outline"
              size={35}
              color="#7cc0c0"
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="clipboard-text-outline"
              size={35}
              color="#7cc0c0"
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>订单</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", marginTop: '5%' }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Chats',{room:'1'}) }} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <AntDesign style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="customerservice"
              size={35}
              color="#7cc0c0"
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>客服</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddressList') }} style={{ width: width * 0.23, height: width * 0.25, backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
            <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
              name="map-marker-radius"
              size={35}
              color="#7cc0c0"
            />
            <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>地址管理</Text>
          </TouchableOpacity>

        </View>

      </View>
    return (
      <SideMenu
        menu={menu}                    //抽屉内的组件
        isOpen={this.state.isOpen}     //抽屉打开/关闭
        openMenuOffset={width * 0.6}     //抽屉的宽度
        hiddenMenuOffset={0}          //抽屉关闭状态时,显示多少宽度 默认0 抽屉完全隐藏
        edgeHitWidth={100}              //距离屏幕多少距离可以滑出抽屉,默认60
        disableGestures={false}

        onChange={                   //抽屉状态变化的监听函数
          (isOpen) => {
            // isOpen ? console.log('抽屉当前状态为开着')
            //     :
            //     console.log('抽屉当前状态为关着')
            this.setState({
              isOpen
            })
          }}

        onMove={                     //抽屉移动时的监听函数 , 参数为抽屉拉出来的距离 抽屉在左侧时参数为正,右侧则为负
          (marginLeft) => {
            console.log(marginLeft)
          }}

        menuPosition={'left'}     //抽屉在左侧还是右侧
        autoClosing={false}         //默认为true 如果为true 一有事件发生抽屉就会关闭
      >


        <View style={{ flex: 1 }}>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="提          示"
            message="您还未登录，请登录！"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            confirmText="确认"
            cancelText="取消"

            confirmButtonColor="#93c9c9"
            onCancelPressed={() => {
              this.hideAlert();

            }}
            onConfirmPressed={() => {
              this.hideAlert();
              this.props.navigation.navigate('Login')
            }}
          />

          <ParallaxScrollView
            headerBackgroundColor="#fff"
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={1}
            scrollEnabled={isScroll}
            ref={ref => this.scrollRef = ref}
            onScroll={(e) => {
              console.log('e', e.nativeEvent.contentOffset.y);
              console.log('isScro', isScroll)
              if (e.nativeEvent.contentOffset.y >= 195 && e.nativeEvent.contentOffset.y <= 199) {
                this.setState({
                  isScroll: false,
                });
              }
            }}



            renderBackground={() => (
              <View key="background" />
            )}

            renderForeground={() => (
              <View key="parallax-header" style={styles.parallaxHeader}>
                <ImageBackground
                  style={{
                    width: width,
                    height: '100%',
                    flexDirection: 'column-reverse',
                  }}
                  source={{

                    uri: this.state.username == '' ? 'https://img2.baidu.com/it/u=3103353974,1334583232&fm=11&fmt=auto&gp=0.jpg' : data.backpic,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '75%',
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          width: width * 0.21,
                          height: width * 0.21,
                          backgroundColor: '#fff',
                          borderRadius: 50,
                          marginLeft: '5%',
                        }}
                        source={{ uri: this.state.username == '' ? 'https://pic3.zhimg.com/v2-3552b94e2f2ce79718974bd36d0e7746_1440w.jpg?source=172ae18b' : data.portrait }}
                      />
                      <View
                        style={{
                          width: '70%',
                          height: '80%',
                          marginLeft: '3%',
                          justifyContent: 'space-around',
                        }}>
                        <Text
                          style={{ fontSize: 15, color: '#7cc0c0', fontWeight: 'bold', width: width * 0.3 }}>
                          {this.state.username == '' ? '游客' : data.nickname}
                        </Text>
                        <Text ellipsizeMode={'tail'} numberOfLines={2} style={{ fontSize: 13, color: '#7cc0c0', width: width * 0.4, borderWidth: 0 }}>{this.state.username === '' ? '暂无个性签名' : (data.signature === '' ? '暂无个性签名' : data.signature)}</Text>
                      </View>
                      {showLogin}

                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={{ flexDirection: 'row', width: '30%', backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', marginTop: '10%', justifyContent: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
                        <TouchableOpacity
                          onPress={() => { this.state.username === '' ? this.showAlert() : this.props.navigation.push('fans', this.state.username) }}
                          activeOpacity={1}
                          style={{
                            width: '50%',
                            height: '60%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text style={{ fontSize: 15, color: '#fff' }}>{this.state.username === '' ? '0' : data.fensi}</Text>
                          <Text style={{ fontSize: 15, color: '#fff' }}>粉丝</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => { this.state.username === '' ? this.showAlert() : this.context.navigate('Concerns', this.state.username) }}
                          activeOpacity={1}
                          style={{
                            width: '50%',
                            height: '70%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text style={{ fontSize: 15, color: '#fff' }}>{this.state.username === '' ? '0' : data.guanzhu}</Text>
                          <Text style={{ fontSize: 15, color: '#fff' }}>关注</Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        activeOpacity={1}
                        style={{
                          width: '25%',
                          height: '30%',
                          borderRadius: 20,
                          marginTop: '8%',
                          backgroundColor: '#7cc0c0',
                          elevation: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => this.props.navigation.navigate('JiFen')} >
                        <Text style={{ fontSize: 15, color: '#fff' }}>积分签到</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={1}
                        style={{
                          width: '25%',
                          height: '30%',
                          borderRadius: 20,
                          marginTop: '8%',
                          backgroundColor: '#7cc0c0',
                          elevation: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          this.state.username == '' ? this.showAlert() : this.props.navigation.navigate('bianjiziliao', {
                            username: data.username,
                            portrait: data.portrait,
                            nickname: data.nickname,
                            sex: data.sex,
                            birthday: data.birthday,
                            signature: data.signature,
                            phone: data.phone,
                            area: data.area,
                            backpic: data.backpic,
                          })
                        }}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>编辑资料</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={1}
                        style={{
                          width: '20%',
                          height: '30%',
                          borderRadius: 20,
                          elevation: 5,
                          marginTop: '8%',
                          backgroundColor: '#7cc0c0',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => this.props.navigation.navigate('shezhi', {
                          username: this.state.username,
                          callback: () => this.loginOut(),
                          shuaxing: () => this.get_shuju()
                        })}
                      >
                        <Text style={{ fontSize: 15, color: '#fff' }}>设置</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            )}
            renderStickyHeader={() =>
              <View key="sticky-header" style={styles.stickySection}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#7cc0c0',
                    marginLeft: '10%',
                    borderRadius: 50,
                  }}
                  source={{ uri: this.state.username == '' ? 'https://pic3.zhimg.com/v2-3552b94e2f2ce79718974bd36d0e7746_1440w.jpg?source=172ae18b' : data.portrait }}
                />
                <Text style={styles.stickySectionText}>{data.nickname}</Text>
              </View>
            }

            //渲染固定头部
            renderFixedHeader={() =>
              <View key="fixed-header" style={styles.fixedSection}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => { this.SelectToOpenLeftSideMenu() }}
                >
                  <Feather name="menu" size={25} color="#7cc0c0" />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    height: 40,
                    width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Feather name="external-link" size={25} color="#7cc0c0" />
                </TouchableOpacity>
              </View>}
          >
            <MyRoute2 />
          </ParallaxScrollView>
        </View>
      </SideMenu>

    );
  }
}
const window = Dimensions.get('window');

const AVATAR_SIZE = 50;
const ROW_HEIGHT = 50;
const PARALLAX_HEADER_HEIGHT = 250;
const STICKY_HEADER_HEIGHT = 50;
const SCREEN_WIDTH = window.width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: STICKY_HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  stickySectionText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 5,
  },
  fixedSection: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fixedSectionText: {
    color: '#fff',
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    // borderColor: '#ccc',
    // borderBottomWidth: 1,
    justifyContent: 'center',
  },
  rowText: {
    fontSize: 20,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
