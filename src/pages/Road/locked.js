import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image, ImageBackground, Animated, Alert, DeviceEventEmitter } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FlipCard from 'react-native-flip-card';
import AwesomeAlert from 'react-native-awesome-alerts';
const { height, width } = Dimensions.get('window');

export default class Locked extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isUnlock: this.props.isUnlock,
      showAlert: false,
      showAlert_unAbleToUnLock: false,
      refresh: '',
      road: this.props.roadNumber,
      lastStep: 0,
      picture:''
    }
  }
  //第一次渲染
  componentDidMount() {
    this.getThisData();
    if(this.props.roadNumber>=1&&this.props.roadNumber<=4){
      this.setState({picture:'http://47.100.78.254:3000/public/images/a.png'})
    }else if(this.props.roadNumber>=5&&this.props.roadNumber<=7){
      this.setState({picture:'http://47.100.78.254:3000/public/images/c.png'})
    }else{
      this.setState({picture:'http://47.100.78.254:3000/public/images/b.png'})  
    }
  }

  //获取上一条路线信息
  getLastData() {
    if (this.props.roadNumber >= 2){
      fetch('http://47.100.78.254:3000/shouye/get_user_map', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.props.username,
          road: this.props.roadNumber - 1
        })
      }).then((response) => response.json())
        .then((json) => {

          this.setState({ lastStep: json[0].steps })

        })
        .catch((error) => {
          console.log(error);
        })
    }

  }
  //获取当前路线信息
  getThisData() {
    this.getLastData()
    fetch('http://47.100.78.254:3000/shouye/get_user_map', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.props.username,
        road: this.props.roadNumber
      })
    }).then((response) => response.json())
      .then((json) => {

        this.setState({ isUnlock: json[0].locks })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //前端判断解锁
  updateThisData() {
    this.getLastData()
    fetch('http://47.100.78.254:3000/shouye/get_user_map', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.props.username,
        road: this.props.roadNumber
      })
    }).then((response) => response.json())
      .then((json) => {
        if (this.state.lastStep >= 200) {
          this.unLock();
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  //页面前端解锁并上传
  unLock() {
    this.setState({ isUnlock: "false" })
    this.updateLock();
    console.log('成功解锁');
  }

  //后台解锁
  updateLock() {

    fetch('http://47.100.78.254:3000/shouye/update_lock', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.props.username,
        road: this.props.roadNumber
      })

    }).then((response) => {
      console.log(this.props.username);
      console.log(this.props.roadNumber);
      console.log('成功上传');
    })
      .catch((error) => {
        console.log(error);
      })
  }
  //弹框提示{是否解锁？}
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
  //二级弹框{不能解锁}
  showAlert_unAbleToUnLock = () => {
    this.setState({
      showAlert_unAbleToUnLock: true
    })
  }
  hideAlert_unAbleToUnLock = () => {
    this.setState({
      showAlert_unAbleToUnLock: false
    });
  };

  render() {
    const { showAlert } = this.state;
    const { showAlert_unAbleToUnLock } = this.state;
    if (this.state.isUnlock === 'false') {
      return (
        <FlipCard>
          <View style={{ width: '100%', height: height * 0.55, marginTop: height * 0.01, borderRadius: 15, backgroundColor:"#fff",elevation:2 }}>
            <View style={{ width: '85%', marginHorizontal: '7%', height: '60%', borderRadius: 60, marginTop: "5%" }}>
              <Image style={{ width: '100%', height: '100%', }} resizeMode="stretch" borderRadius={30} source={{ uri: this.state.picture }}></Image>
              <View style={{ borderColor: 'orange', height: '25%', width: '25%', marginTop: '-23%', marginLeft: '73%', borderRadius: 15 }}>
                <ImageBackground style={{ width: '100%', height: '100%', }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/nanlu.jpg' }}>
                  <AntDesign style={{ backgroundColor: global.mainColor, width: '35%', height: '35%', borderRadius: 50, textAlign: 'center', textAlignVertical: 'center', marginTop: '60%', marginLeft: '60%' }}
                    name="right"
                    size={20}
                    color='white'
                  />
                </ImageBackground>
              </View>
            </View>
            <Text style={{ marginTop: '5%', fontSize: 20, paddingLeft: '7.5%', width: '70%', color: "#333" }}>{this.props.roadname}</Text>
            <Text style={{ fontSize: 15, paddingLeft: '7.5%', width: '70%', color: "#333" }}>可获得 <FontAwesome5
              name='coins'
              size={15}
              color='gold'
            /> 25</Text>
            <Text style={{ fontSize: 15, paddingLeft: '7.5%', width: '70%', color: "#333" }}>共225用户参与</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Video', {
              username: this.props.username,
              road: this.props.roadNumber
            })} style={{ backgroundColor: '#fff', width: '90%', marginHorizontal: '5%', borderColor:global.mainColor,borderWidth:1,height: '10%', borderRadius: 20, marginTop: '1%',elevation:5 }}>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center', height: '100%', fontSize: 20, color: global.mainColor }}>进入路线 全程26公里</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', backgroundColor: '#fff', height: height * 0.55, marginTop: height * 0.01, borderRadius: 15, elevation: 1 }}>
            <View style={{ width: '85%', marginHorizontal: '7%', borderColor: 'green', height: '60%', borderRadius: 60, marginTop: "5%" }}>
              <Image style={{ width: '100%', height: '100%', }} borderRadius={60} source={{ uri: 'http://47.100.78.254:3000/public/images/nanlu.jpg' }}></Image>
              <View style={{ borderColor: 'orange', height: '25%', width: '25%', marginTop: '-23%', marginLeft: '73%', borderRadius: 15 }}>
              </View>
            </View>

            <Text style={{ marginTop: 10, fontSize: 15, width: '100%', color: global.mainColor, textAlign: 'center' }}>共225用户参与</Text>
            <Text style={{ marginTop: 10, width: '80%', color: "#333", marginHorizontal: '10%', fontSize: 12, textAlign: 'center' }}>空蒙山色里住着诗人的一直，潋滟水光映透西子成鱼落雁般的容颜，柔美的线条中透露江南韵味。</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Video', {
              username: this.props.username,
              road: this.props.road
            })} style={{ backgroundColor: global.mainColor, width: '90%', marginHorizontal: '5%', height: '10%', borderRadius: 20, marginTop: '1%' ,elevation:5}}>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center', height: '100%', fontSize: 20, color: '#fff' }}>进入路线 全程26公里</Text>
            </TouchableOpacity>
          </View>
        </FlipCard>
      );
    } else
      return (
        <View style={{ width: '100%',bottom:10, height: height * 0.15, backgroundColor: '#B4E0E0', elevation:2 ,marginTop: height * 0.04, borderColor: 'yellow', borderRadius: 15}}>
          <Text style={{ marginTop: '7%', fontSize: 20, paddingLeft: '7.5%', width: '70%', color: '#333' }}>{this.props.roadname}</Text>
          <Text style={{ fontSize: 15, paddingLeft: '7.5%', width: '70%', color: '#333' }}>可获得 <FontAwesome5
              name='coins'
              size={15}
              color='gold'
            /> 25</Text>
          <Text style={{ fontSize: 15, paddingLeft: '7.5%', width: '70%', color: '#333' }}>共225用户参与</Text>
          <View style={{ height: width * 0.15, width: width * 0.15, marginLeft: '80%', marginTop: '-19%', borderRadius: 50, backgroundColor: global.mainColor ,elevation:5}}>
            <Fontisto style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', }}
              onPress={() => {
                this.showAlert()
              }}
              name='locked'
              size={28}
              color='#fff'
            />
          </View>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="提示"
            message="你确定要解锁该条路线吗!"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            confirmText="确认"
            cancelText="取消"

            confirmButtonColor={global.mainColor}
            onCancelPressed={() => {
              this.hideAlert();

            }}
            onConfirmPressed={() => {
              this.hideAlert();
              this.updateThisData();
              this.showAlert_unAbleToUnLock();
            }}
          />
          <AwesomeAlert
            show={showAlert_unAbleToUnLock}
            showProgress={false}
            title="提示"
            message="您还没有完成上一条路线，无法解锁!"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="确认"
            confirmButtonColor={global.mainColor}

            onConfirmPressed={() => {
              this.hideAlert_unAbleToUnLock();
              // this.setState({ isUnlock: false })
            }}
          />
        </View>
      );


  }
}
