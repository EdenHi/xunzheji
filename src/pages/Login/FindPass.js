import React, { Component } from 'react';
let { height, width } = Dimensions.get('window');
import Feather from "react-native-vector-icons/Feather"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TextInput
} from 'react-native';
import axios from 'axios';
import Textinput from '../../components/textInput';
import AntDesign from "react-native-vector-icons/AntDesign"
const ratio_w = Dimensions.get('window').width / 375
export default class FindPass extends Component {
  load() {
    axios
      .post('http://192.168.50.108:3000/users/login', {
        username: this.state.username,
        password: this.state.Password,
      })
      .then(resp => {
        if (resp.data.msg == '登录成功') {
          this.props.navigation.navigate('Home');
        } else {
          alert(resp.data.msg);
        }
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
      showStar: '',
    };
  }

  changeTextFunction(e) {
    let finalWord = '';
    finalWord = e.split('')[e.length - 1];
    let addStr = '';
    addStr = this.state.Password;
    addStr = addStr + finalWord;
    let pass = e;
    let showPass = '';
    let arr = pass.split('');
    arr.map((item, index) => {
      showPass += '*';
    });
    this.setState({ showStar: showPass, Password: addStr });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "" }}>

        <View style={{ flex: 2, borderWidth: 0, justifyContent: "space-between", flexDirection: 'column-reverse' }}>


          <View style={{ marginBottom: height * 0.03 }}>
            <Text style={{ fontSize: ratio_w * 30, borderWidth: 0, textAlign: "center", marginBottom: height * 0.01, color: global.back2 }} allowFontScaling={false}>找回密码</Text>
            <Text style={{ fontSize: ratio_w * 20, borderWidth: 0, textAlign: "center", color: "grey", }}></Text>
          </View>
        </View>
        <View style={{ flex: 3 }}>

          <Textinput
            onChangeText={e => {
              this.setState({ username: e });
            }}
            icon="phone" text="请输入手机号"></Textinput>
               <Textinput
            onChangeText={e => {
              this.setState({ username: e });
            }}
            icon="phone" text="请输入邮箱"></Textinput>
          <View style={styles.box}>

            <Feather style={styles.icon}
              name={'lock'}
              size={20 * ratio_w}
              color={global.back2}
            />
            <TextInput style={styles.text} placeholder={'请输入密码'} placeholderTextColor={global.back2}
              secureTextEntry={true}
              onChangeText={password => {
                this.changeTextFunction(password);
              }}
            >
            </TextInput>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => { this.props.navigation.navigate('BtnRoute') }} >
            <ImageBackground borderRadius={20} style={{ height: "100%", width: "100%",backgroundColor:global.back2,borderRadius:20,elevation:5}}>
              <Text style={{ fontSize: 20 * ratio_w, textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#ffffff", borderRadius: 20 }}  >登录</Text>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 0, height: height * 0.05, marginTop: height * 0.17 }}>
            <Text style={{ fontSize: 12 * ratio_w, marginTop: -height * 0.0001, textAlign: 'center', borderWidth: 0 }}>还没有账号？</Text>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  btn: {
    height: height * 0.05,
    width: "40%",
    marginHorizontal: "30%",
    marginTop: "6%"
  },
  text: {
    width: "80%",
    marginRight: "10%",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    fontSize: 11 * ratio_w,
    backgroundColor: "#ffffff",
    color: global.back2,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 0.015 * height,
    height: height * 0.07
  },
  icon: {
    width: "20%",
    marginLeft: "10%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: "3%",

    textAlign: "left",
    textAlignVertical: 'center'
  }
});
