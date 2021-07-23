import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Observer from '../../../components/comment/observer';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default class comment_detail extends Component{

     constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    }
    this.isPresse=this.isPresse.bind(this)
  }
  isPresse() {
    if (this.state.isPressed == false)
      this.setState({isPressed:true},()=>{})
    else {
      this.setState({isPressed:false},()=>{})
    }

  }

    render(){
        return(
            <ScrollView style={{    flex: 1,
                backgroundColor: '#FEFEFE',
                paddingHorizontal: "4%"}}>
                 <View>

        <TouchableOpacity style={{ borderWidth: 0, width: "60%", height: 50, marginTop: 10 }}>
          <Image style={{ width:45 , height:45 , }} source={{ uri: 'https://img.zcool.cn/community/01c8415b10ec7aa801212d57334fdc.png@1280w_1l_2o_100sh.png' }}></Image>
          <Text style={styles.nickname}>西瓜蒙太奇</Text>
        </TouchableOpacity>
       <View style={{flexDirection:"row-reverse",borderWidth:0,marginTop:-50}}>
       <Text style={{ textAlign:"center",borderWidth: 0, marginRight:0, fontSize: 13, fontWeight: "200", width: "10%", color: "grey",marginBottom:10 }}>2031</Text>
       <AntDesign onPress={this.isPresse} style={{width:"5.5%"}}
          name={this.state.isPressed ? "heart" : "hearto"}
          size={20}
          color={this.state.isPressed?'#FF0000':'#000'} />

       </View>
        <Text style={{ color: "grey", marginLeft: 60, marginTop: 6, borderWidth: 0, width: "40%" }}>2021-7-13 14:06</Text>
       <Text style={{ borderColor:"grey",borderBottomWidth:0.5, marginTop: 15, marginLeft: 0, fontSize: 15 }}>一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四</Text>
      </View>
              <Observer username="hguisdhg"
                        headimg="https://img.zcool.cn/community/01c8415b10ec7aa801212d57334fdc.png@1280w_1l_2o_100sh.png"
                        datetime="2021-7-13 14:06"
                        comment="一二三四五六七八九q5135ae八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
                        comment1="一二三四五六七八九十asfaw四十五十六3523as十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
                        comment2={"一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"}
                        username1="哈哈"
                        username2="66"
                        commentnum="1000"
              ></Observer>
              <Observer username="hguisdhg"
                        headimg="https://img.zcool.cn/community/01c8415b10ec7aa801212d57334fdc.png@1280w_1l_2o_100sh.png"
                        datetime="2021-7-13 14:06"
                        comment="一二三四五六七八九q5135ae八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
              ></Observer>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    nickname: {
      fontSize: 15,
      marginTop: -45,
      marginLeft: 60,

  borderWidth:0,
      width: "50%"
    }
  })
