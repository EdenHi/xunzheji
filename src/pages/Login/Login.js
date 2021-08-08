/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
let { height, width } = Dimensions.get('window');
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
  DeviceEventEmitter
} from 'react-native';
import axios from 'axios';
import Textinput from '../../components/textInput';
const ratio_w = Dimensions.get('window').width / 375;
export default class Login extends Component {
  load() {
    axios
      .post('http://8.142.11.85:3000/index/login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(resp => {
        if (resp.data === '登录成功') {
          AsyncStorage.setItem('username',this.state.username,(error)=>{
            if (!error){
                console.log('保存成功');
            } else {
                console.log('保存失败');
            }
        });
          this.props.navigation.navigate('BtnRoute');
          DeviceEventEmitter.emit('test',1)
          DeviceEventEmitter.emit('denglu',1)
        } else {
          alert(resp.data);
        }
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',

    };
  }



  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f1f1f1' }}>

        <View style={{ flex: 2, borderWidth: 0, justifyContent: 'space-between', flexDirection: 'column-reverse' }}>


          <View style={{ marginBottom: height * 0.03 }}>
            <Text style={{ fontSize: ratio_w * 30, borderWidth: 0, textAlign: 'center', marginBottom: height * 0.01, color: '#7cc0c0' }} allowFontScaling={false}>欢迎回来！</Text>
            <Text style={{ fontSize: ratio_w * 20, borderWidth: 0, textAlign: 'center', color: 'grey' }}>登录以获取更多资讯</Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>
            <View style={styles.box}>

              <Feather style={styles.icon}
                name={'user'}
                size={20 * ratio_w}
                color="#7cc0c0"
              />
              <TextInput style={styles.text}
                placeholder={'请输入用户名'}
                placeholderTextColor="#7cc0c0"
                onChangeText={username => {
                  this.setState({username});
                }}
              />
            </View>
          <View style={styles.box}>

            <Feather style={styles.icon}
              name={'lock'}
              size={20 * ratio_w}
              color="#7cc0c0"
            />
            <TextInput style={styles.text} placeholder={'请输入密码'} placeholderTextColor="#7cc0c0"
              secureTextEntry={true}
              password={true}
              onChangeText={password => {
                this.setState({password});
              }}
             />
          </View>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('FindPass')}
          style={{ borderWidth: 0, width: width * 0.2, marginLeft: width * 0.75 }}>
            <Text style={{ textAlign: 'center',fontSize:10 * ratio_w }}>忘记密码</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => { this.load(); }} >
            <View borderRadius={20} style={{ height: '100%', width: '100%',backgroundColor:"#7cc0c0",elevation:5 }}>
              <Text style={{ fontSize: 20 * ratio_w, textAlign: 'center', textAlignVertical: 'center', height: '100%', color: '#ffffff', borderRadius: 20 }}  >登录</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 0, height: height * 0.05, marginTop: height * 0.17 }}>
            <Text style={{ fontSize: 12 * ratio_w, marginTop: height * 0.01, textAlign: 'center', borderWidth: 0 }}>还没有账号？</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{ fontSize: 12 * ratio_w, marginTop: height * 0.01, textAlign: 'center', color: '#7cc0c0' }}>此处注册</Text>
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
