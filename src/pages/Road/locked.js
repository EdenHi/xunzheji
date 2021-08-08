import React, { Component } from 'react';
import {View, Dimensions, TouchableOpacity, Text, Image, ImageBackground ,Animated, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FlipCard from 'react-native-flip-card';
import AwesomeAlert from 'react-native-awesome-alerts';
const { height, width } = Dimensions.get('window');

export default class Locked extends Component {
    constructor(props){
        super(props)
        this.state={
            isUnlock:this.props.isUnlock,
            showAlert: false
        }
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
    

    render() {
        const {showAlert} = this.state;
     if (this.state.isUnlock==false) {
        return (
            <FlipCard>
            <View style={{ width: '100%', backgroundColor: '#fff', height: height * 0.6, marginTop: height * 0.01, borderRadius: 15 ,elevation:1}}>
            <View style={{ width: '90%', marginHorizontal: '5%', borderColor: 'green', height: '60%', borderRadius: 60, marginTop: "5%" }}>
                <Image style={{ width: '100%', height: '100%', }} borderRadius={60} source={{ uri: 'https://img.zcool.cn/community/01e7bf58c8c065a801219c77f23072.jpg@1280w_1l_2o_100sh.jpg' }}></Image>
                <View style={{ borderColor: 'orange', height: '25%', width: '25%', marginTop: '-23%', marginLeft: '73%', borderRadius: 15 }}>
                    <ImageBackground style={{ width: '100%', height: '100%', }} borderRadius={15} source={{uri:'http://8.142.11.85:3000/public/images/南路.jpg'}}>
                        <AntDesign style={{ backgroundColor: '#7cc0bf', width: '35%', height: '35%', borderRadius: 50, textAlign: 'center', textAlignVertical: 'center', marginTop: '60%', marginLeft: '60%' }}
                            name="right"
                            size={20}
                            color='white'
                        />
                    </ImageBackground>
                </View>
            </View>
            <Text style={{ marginTop: '5%', fontSize: 30, paddingLeft: '7.5%', width: '70%',color:"#000" }}>西湖风景线</Text>
            <Text style={{ fontSize: 20, paddingLeft: '7.5%', width: '70%',color:"#000"}}>可获得 <FontAwesome5
                name='coins'
                size={15}
                color='gold'
            /> 25</Text>
            <Text style={{ fontSize: 15, paddingLeft: '7.5%', width: '70%',color:"#000"}}>共2256万+用户参与</Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Video')}} style={{ backgroundColor: '#7cc0bf', width: '90%', marginHorizontal: '5%', height: '10%', borderRadius: 20, marginTop: '2.5%' }}>
                <Text style={{ textAlignVertical: 'center', textAlign: 'center', height: '100%', fontSize: 20, color: '#fff' }}>进入路线 全程26公里</Text>
            </TouchableOpacity>
            </View>
            <View style={{ width: '100%', backgroundColor: '#fff', height: height * 0.6, marginTop: height * 0.01, borderRadius: 15 ,elevation:1}}>
            <View style={{ width: '90%', marginHorizontal: '5%', borderColor: 'green', height: '60%', borderRadius: 60, marginTop: "5%" }}>
                <Image style={{ width: '100%', height: '100%', }} borderRadius={60} source={{uri:'http://8.142.11.85:3000/public/images/南路.jpg'}}></Image>
                <View style={{ borderColor: 'orange', height: '25%', width: '25%', marginTop: '-23%', marginLeft: '73%', borderRadius: 15 }}>

                        
                   
                </View>
            </View>

            <Text style={{ marginTop:10,fontSize: 20, width: '100%',color:"#7cc0bf",textAlign:'center'}}>共2256万+用户参与</Text>
            <Text style={{marginTop:10,width:'80%',marginHorizontal:'10%',fontSize:15,textAlign:'center'}}>空蒙山色里住着诗人的一直，潋滟水光映透西子成鱼落雁般的容颜，柔美的线条中透露江南韵味。</Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Video')}} style={{ backgroundColor: '#7cc0bf', width: '90%', marginHorizontal: '5%', height: '10%', borderRadius: 20, marginTop: '2.5%' }}>
                <Text style={{ textAlignVertical: 'center', textAlign: 'center', height: '100%', fontSize: 20, color: '#fff' }}>进入路线 全程26公里</Text>
            </TouchableOpacity>
            </View>
            </FlipCard>

                );
     } else 
     return (
         
        <View style={{ width: '100%', height: height * 0.165, backgroundColor: '#93c9c9', marginTop: height * 0.04, borderColor: 'yellow', borderRadius: 15, elevation: 0.8 }}>
            <Text style={{ marginTop: '7%', fontSize: 30, paddingLeft: '7.5%', width: '70%', color: '#fff' }}>西湖风景线</Text>
            <Text style={{ fontSize: 20, paddingLeft: '7.5%', width: '70%', color: '#fff' }}>可获得Y25</Text>
            <Text style={{ fontSize: 15, paddingLeft: '7.5%', width: '70%', color: '#fff' }}>共2256万+用户参与</Text>
            <View style={{ height: width * 0.15, width: width * 0.15, marginLeft: '80%', marginTop: '-21%', borderRadius: 50, backgroundColor: '#729c9c' }}>
                <Fontisto style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', }}
               onPress={() => {
                this.showAlert()}}
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

          confirmButtonColor="#93c9c9"
          onCancelPressed={() => {
            this.hideAlert();

          }}
          onConfirmPressed={() => {
            this.hideAlert();
            this.setState({isUnlock:false})
          }}
        />
        </View>
    );
        
        
    }
}
