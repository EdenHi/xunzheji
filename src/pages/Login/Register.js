/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
let {height, width} = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
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
} from 'react-native';
import axios from 'axios';
import Textinput from '../../components/textInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ratio_w = Dimensions.get('window').width / 375;
export default class Register extends Component {
  load() {
    axios
      .post('http://8.142.11.85:3000/index/register', {
        username: this.state.username,
        password1: this.state.password1,
        password2: this.state.password2,
        phone:this.state.phone,
      })
      .then(resp => {
        if (resp.data === '注册成功') {
          AsyncStorage.setItem('username',this.state.username,(error)=>{
            if (!error){
                console.log('保存成功');
            } else {
                console.log('保存失败');
            }
        });
          this.props.navigation.navigate('BtnRoute');
        } else {
          alert(resp.data);
        }
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password1: '',
      password2: '',
      phone:'',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{flex: 1, borderWidth: 0, justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack('Login')}
            style={{
              borderWidth: 0,
              marginTop: height * 0.04,
              marginLeft: width * 0.05,
              width: width * 0.1,
            }}>
            <AntDesign
              name="arrowleft"
              size={30 * ratio_w}
              color="#7cc0c0"
              style={{textAlign: 'center'}}
            />
          </TouchableOpacity>

          <View style={{marginBottom: height * 0.04}}>
            <Text
              style={{
                fontSize: ratio_w * 30,
                borderWidth: 0,
                textAlign: 'center',
                marginBottom: height * 0.01,
                color: '#7cc0c0',
              }}
              allowFontScaling={false}>
              让我们开始吧！
            </Text>
            <Text
              style={{
                fontSize: ratio_w * 20,
                borderWidth: 0,
                textAlign: 'center',
                color: 'grey',
              }}>
              注册一个账户以获取所有资讯
            </Text>
          </View>
        </View>
        <View style={{flex: 3}}>
          <View style={styles.box}>
              <Feather
                style={styles.icon}
                name={'user'}
                size={20 * ratio_w}
                color="#7cc0c0"
              />
              <TextInput
                style={styles.text}
                placeholder={'请输入用户名'}
                placeholderTextColor="#7cc0c0"
                onChangeText={username => {
                  this.setState({username});
                }}
              />
            </View>
          <Textinput icon="mail" text="请输入邮箱" />
            <View style={styles.box}>
                <Feather
                  style={styles.icon}
                  name={'phone'}
                  size={20 * ratio_w}
                  color="#7cc0c0"
                />
                <TextInput
                  style={styles.text}
                  placeholder={'请输入手机号'}
                  placeholderTextColor="#7cc0c0"
                  onChangeText={phone => {
                    this.setState({phone});
                  }}
                />
              </View>
          <View style={styles.box}>
            <Feather
              style={styles.icon}
              name={'lock'}
              size={20 * ratio_w}
              color="#7cc0c0"
            />
            <TextInput
              style={styles.text}
              placeholder={'请输入密码'}
              placeholderTextColor="#7cc0c0"
              secureTextEntry={true}
              password={true}
              onChangeText={password1 => {
                this.setState({password1});
              }}
            />
          </View>
          <View style={styles.box}>
            <Feather
              style={styles.icon}
              name={'lock'}
              size={20 * ratio_w}
              color="#7cc0c0"
            />
            <TextInput
              style={styles.text}
              placeholder={'请确认密码'}
              placeholderTextColor="#7cc0c0"
              secureTextEntry={true}
              password={true}
              onChangeText={password2 => {
                this.setState({password2});
              }}
            />
          </View>
          <TouchableOpacity style={styles.btn}
          onPress={()=>{this.load();}}>
            <ImageBackground
              borderRadius={20}
              style={{height: '100%', width: '100%',backgroundColor:"#7cc0c0",borderRadius:20,elevation:5}}
              >
              <Text
                style={{
                  fontSize: 20 * ratio_w,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  height: '100%',
                  color: '#ffffff',
                  borderRadius: 20,
                }}>
                注册
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 12 * ratio_w,
                marginTop: height * 0.07,
                textAlign: 'center',
              }}>
              已经有账号了？
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack('Login')}>
              <Text
                style={{
                  fontSize: 12 * ratio_w,
                  marginTop: height * 0.07,
                  textAlign: 'center',
                  color: '#7cc0c0',
                }}>
                此处登录
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    height: height * 0.05,
    width: '40%',
    marginHorizontal: '30%',
    marginTop: '6%',
  },
  text: {
    width: '80%',
    marginRight: '10%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    fontSize: 11 * ratio_w,
    backgroundColor: '#ffffff',
    color: '#7cc0c0',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 0.015 * height,
    height: height * 0.07,
  },
  icon: {
    width: '20%',
    marginLeft: '10%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: '3%',

    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
