/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

let { height, width } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  AsyncStorage,
  DeviceEventEmitter,
  Easing,
  Animated,

} from 'react-native';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';
import Textinput from '../../components/textInput';
import LinearGradient from 'react-native-linear-gradient';
import TouchTest from '../../components/TouchId';


const ratio_w = Dimensions.get('window').width / 375;
export default class Login extends Component {
  load() {
    if(this.state.checked==true){
      if (this.state.username === '') {
        alert('用户名不能为空')
      }
      else if (this.state.password === '') {
        alert('密码不能为空')
      }
      else {
        axios
          .post('http://47.100.78.254:3000/index/login', {

            username: this.state.username,
            password: this.state.password,
            
          })
          .then(resp => {
            if (resp.data === '登录成功'&&this.state.checked==true) {
              AsyncStorage.setItem('username', this.state.username, (error) => {
                if (!error) {
                  console.log('保存成功');
                } else {
                  console.log('保存失败');
                }
              });
              this.props.navigation.navigate('BtnRoute');
              DeviceEventEmitter.emit('test', 1)
              DeviceEventEmitter.emit('denglu', 1)
            } else {
              alert(resp.data);
            }
          });
      }
    }else{
      alert('请确认条款')
    }

  }

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      username: '',
      password: '',
      Touchable: '',
      checked: false
    };
  }
  get_shuju() {
    AsyncStorage.getItem('TouchID', (error, result) => {
      if (!error) {
        this.setState({ Touchable: result })
      }
    })
    AsyncStorage.getItem('username', (error, result) => {
      if (!error) {
        console.log(1, result);
        if (result !== null && this.state.Touchable == '开启') {
          this.childList.handleTouch()
        }

      }
    })
  }
  componentDidMount() {
    this.get_shuju()
    console.log(this.state.username);
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,
    }).start();
  }
  render() {
    return (
      <View style={{ width: width, height: height, }}>
        <TouchTest ref={(view) => this.childList = view} navigation={this.props.navigation} />
        <LinearGradient style={{ width: width, height: height, }} colors={[global.mainColor, global.backColor, global.backColor, global.backColor]} >
          <View style={{ width: width, height: height * 0.3 }}>
            <LottieView source={require('../../../animal/circle.json')} autoPlay loop progress={this.state.progress} />
            <Image style={{ width: width * 0.22, height: width * 0.22, marginLeft: width * 0.39, marginTop: height * 0.1 }} source={require("../img/xun.png")}></Image>
          </View>
          <View style={{ width: width, height: height * 0.7, backgroundColor: global.backColor, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
            <View style={{ marginTop: height * 0.05 }}>
              <View style={styles.box}>
                <Feather style={styles.icon}
                  name={'user'}
                  size={20 * ratio_w}
                  color={global.mainColor}
                />
                <TextInput style={styles.text}
                  placeholder={'请输入用户名'}
                  placeholderTextColor={global.mainColor}
                  onChangeText={username => {
                    this.setState({ username });
                  }}
                />
              </View>
              <View style={styles.box}>
                <Feather style={styles.icon}
                  name={'lock'}
                  size={20 * ratio_w}
                  color={global.mainColor}
                />
                <TextInput style={styles.text} placeholder={'请输入密码'} placeholderTextColor={global.mainColor}
                  secureTextEntry={true}
                  password={true}
                  onChangeText={password => {
                    this.setState({ password });
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: "2%", borderWidth: 0, width: '90%', marginHorizontal: '5%' }}>
                <TouchableOpacity style={{ marginLeft: "10%" }} onPress={() => this.props.navigation.navigate('BtnRoute')}>
                  <Text style={{ textAlign: 'center', fontSize: 13 * ratio_w }}>游客登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('FindPass')}
                  style={{ borderWidth: 0, marginRight: "10%" }}>
                  <Text style={{ textAlign: 'center', fontSize: 13 * ratio_w }}>忘记密码</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btn} onPress={() => { this.load(); }} >

                <LottieView source={require('../../../animal/loginicon.json')} autoPlay loop progress={this.state.progress} />
                {/* <View borderRadius={20} style={{ height: '100%', width: '100%',backgroundColor:global.mainColor,elevation:5 }}>
              <Text style={{ fontSize: 20 * ratio_w, textAlign: 'center', textAlignVertical: 'center', height: '100%', color: '#ffffff', borderRadius: 20 }}  >登录</Text>
            </View> */}
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: "2%", borderWidth: 0 }}>
                <Text style={{ fontSize: 12 * ratio_w, marginTop: height * 0.01, textAlign: 'center', borderWidth: 0 }}>还没有账号？</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={{ fontSize: 12 * ratio_w, marginTop: height * 0.01, textAlign: 'center', color: global.mainColor }}>此处注册</Text>

                </TouchableOpacity>

              </View>
              <View style={{flexDirection:'row',alignSelf:'center'}}>
                <CheckBox
                  onPress={() => { this.setState({ checked: !this.state.checked }) }}
                  title=""
                  checkedColor={global.mainColor}
                  size={20}
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  containerStyle={{ backgroundColor: '#fff', width: '8%',marginLeft:-5 }}
                  checked={this.state.checked}
                />
                <Text style={{height:'100%',textAlignVertical:'center',marginLeft:-5}}>已阅读并同意</Text><Text style={{height:'100%',textAlignVertical:'center',color:global.mainColor}}>《隐私条款》</Text>
              </View>



              <View style={{ width: width, height: height * 0.5, backgroundColor: global.backColor }}>
                <LottieView style={{ marginTop: "-30%" }} source={require('../../../animal/zhuceWave.json')} autoPlay loop progress={this.state.progress} />
              </View>

            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  btn: {
    height: height * 0.07,
    marginHorizontal: '30%',
    marginTop: "10%",

  },
  text: {
    width: '65%',
    marginRight: '15%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    fontSize: 11 * ratio_w,
    backgroundColor: '#f1f1f1',
    color: global.mainColor,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 0.015 * height,
    height: height * 0.07,

  },
  icon: {
    width: '20%',
    marginLeft: '15%',
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: '3%',

    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
