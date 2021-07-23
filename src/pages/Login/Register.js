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
export default class Register extends Component {
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
      username: '',
      Password: '',
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
      <View style={{ flex: 1 }}>

        <View style={{ flex: 1, borderWidth: 0, justifyContent: "space-between" }}>
<TouchableOpacity 
onPress={()=>this.props.navigation.goBack('Login')}
style={{borderWidth:0,marginTop:height*0.04,marginLeft:width*0.05,width:width*0.1,}}>
<AntDesign 
name="arrowleft"
size={30*ratio_w}
color="#49b3c5"
style={{textAlign:'center'}}
/>
</TouchableOpacity>

          <View style={{marginBottom:height*0.04}}>
            <Text style={{ fontSize: ratio_w*30, borderWidth: 0, textAlign: "center", marginBottom:height*0.01,color:"#49b3c5"}} allowFontScaling={false}>让我们开始吧！</Text>
            <Text style={{ fontSize: ratio_w*20, borderWidth: 0, textAlign: "center", color: "grey", }}>注册一个账户以获取所有资讯</Text>
          </View>

        </View>
        <View style={{ flex: 3 }}>
          <Textinput icon="user" text="请输入用户名"></Textinput>
          <Textinput icon="mail" text="请输入邮箱"></Textinput>
          <Textinput icon="phone" text="请输入手机号"></Textinput>
          <View style={styles.box}>

<Feather style={styles.icon}
  name={'lock'}
  size={20 * ratio_w}
  color="#49b3c5"
/>
<TextInput style={styles.text} placeholder={'请输入密码'} placeholderTextColor="#49b3c5"
  secureTextEntry={true}
  onChangeText={password => {
    this.changeTextFunction(password);
  }}
>
</TextInput>
</View>
<View style={styles.box}>

<Feather style={styles.icon}
  name={'lock'}
  size={20 * ratio_w}
  color="#49b3c5"
/>
<TextInput style={styles.text} placeholder={'请确认密码'} placeholderTextColor="#49b3c5"
  secureTextEntry={true}
  onChangeText={password => {
    this.changeTextFunction(password);
  }}
>
</TextInput>
</View>
          <TouchableOpacity style={styles.btn}>
            <ImageBackground borderRadius={20} style={{ height: "100%", width: "100%", }} source={{ uri: "https://p1.ssl.qhmsg.com/dr/270_500_/t01b23b555f295d07f5.jpg?size=800x800" }}>
              <Text style={{ fontSize: 20*ratio_w, textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#ffffff", borderRadius: 20 }}  >注册</Text>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{flexDirection:"row",justifyContent:'center'}}>
<Text style={{fontSize:12*ratio_w,marginTop:height*0.07,textAlign:'center'}}>已经有账号了？</Text>
<TouchableOpacity onPress={()=>this.props.navigation.goBack('Login')}>
<Text style={{fontSize:12*ratio_w,marginTop:height*0.07,textAlign:'center',color:"#49b3c5"}}>此处登录</Text>
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
    color: "#49b3c5",
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
