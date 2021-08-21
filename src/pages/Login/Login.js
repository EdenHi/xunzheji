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
  DeviceEventEmitter,Easing, Animated
} from 'react-native';
import axios from 'axios';
import Textinput from '../../components/textInput';
import LinearGradient from 'react-native-linear-gradient';


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
      progress: new Animated.Value(0),
      username: '',
      password: '',

    };
  }
  componentDidMount() {
    console.log(this.state.username);
    Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 3500,
        easing: Easing.linear,
    }).start();
}
  render() {
    return (
      <View style={{ width:width,height:height, }}>
         <LinearGradient style={{width:width,height:height,}} colors={['#7cc0bf', '#fff',  '#fff', '#fff']} >
           <View style={{width:width,height:height*0.3}}>
           <LottieView source={require('../../../animal/circle.json')} autoPlay loop progress={this.state.progress} />
           <Image style={{width:width*0.22,height:width*0.22,marginLeft:width*0.39,marginTop:height*0.1}} source={require("../img/xun.png")}></Image>
           </View>
        <View style={{width:width,height:height*0.7,backgroundColor:"#fff",elevation:10,borderTopLeftRadius:50,borderTopRightRadius:50}}>
        <View style={{ marginTop:height*0.05}}>
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
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:"2%",borderWidth:0,width:'90%',marginHorizontal:'5%'}}>
          <TouchableOpacity style={{marginLeft:"10%"}} onPress={() => this.props.navigation.navigate('BtnRoute')}>
              <Text style={{ textAlign: 'center',fontSize:13 * ratio_w  }}>游客登录</Text>
            </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('FindPass')}
          style={{ borderWidth: 0,marginRight:"10%"}}>
            <Text style={{ textAlign: 'center',fontSize:13 * ratio_w }}>忘记密码</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => { this.load(); }} >
          <LottieView source={require('../../../animal/loginicon.json')} autoPlay loop progress={this.state.progress} />
            {/* <View borderRadius={20} style={{ height: '100%', width: '100%',backgroundColor:"#7cc0c0",elevation:5 }}>
              <Text style={{ fontSize: 20 * ratio_w, textAlign: 'center', textAlignVertical: 'center', height: '100%', color: '#ffffff', borderRadius: 20 }}  >登录</Text>
            </View> */}
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:"2%", borderWidth: 0}}>
            <Text style={{ fontSize: 12 * ratio_w, marginTop: height * 0.01, textAlign: 'center', borderWidth: 0 }}>还没有账号？</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{ fontSize: 12 * ratio_w, marginTop: height * 0.01, textAlign: 'center', color: '#7cc0c0' }}>此处注册</Text>
            </TouchableOpacity>
          </View>

          <View style={{width:width,height:height*0.5,backgroundColor:"#fff"}}>
        <LottieView style={{marginTop:"-30%"}}  source={require('../../../animal/zhuceWave.json')} autoPlay loop progress={this.state.progress} />
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
    marginTop:"10%",

  },
  text: {
    width: '65%',
    marginRight: '15%',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    fontSize: 11 * ratio_w,
    backgroundColor: '#f1f1f1',
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
    marginLeft: '15%',
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingLeft: '3%',

    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
