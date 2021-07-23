import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Comment from '../../../components/comment/comment';
import Bottom from '../../../components/article/Bottom';
 import Top from '../../../components/article/Top'

class articles_detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
    };
    this.isPresse = this.isPresse.bind(this);
  }

  isPresse() {
    if (this.state.isPressed === false)
      this.setState({ isPressed: true }, () => {
      });
    else {
      this.setState({ isPressed: false }, () => {
      });
    }

  }





  render() {

    return (


      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Top
            createtime="2021-2-2"
            writername="lala "
            writerheadimg="https://img.zcool.cn/community/01c8415b10ec7aa801212d57334fdc.png@1280w_1l_2o_100sh.png"
            title="shguiadshiouahoighaoighio"
          />
          {/* <Text  style={styles.text}>{this.state.res[0].text}</Text>
        <Image  style={styles.pic} source={{uri:this.state.res[0].image}}></Image> */}
          <Image style={styles.pic}
                 source={{ uri: "https://x0.ifengimg.com/ucms/2021_29/A16F7912EACA197A9EF7F62A73559D78AE2B5A3B_size81_w400_h350.jpg" }}></Image>
          <Text style={styles.text}>任三动，男，1952年出生,1968年参加工作，1971年加入中国共产党。曾任青海省公安厅九处处长，省公安厅党委委员、副书记、副厅长（正厅级），2013年3月退休。
            2019年7月11日，青海省纪委监委对任三动严重违纪违法问题立案审查调查，并依法采取留置措施。2020年1月，经青海省纪委常委会会议研究并报省委批准，给予任三动开除党籍处分，按规定取消其享受的待遇，并将其涉嫌犯罪问题移送检察机关依法审查起诉。
            2021年5月18日，青海省西宁市中级人民法院以任三动犯受贿罪，判处有期徒刑三年六个月，犯巨额财产来源不明罪，判处有期徒刑五年，数罪并罚，决定执行有期徒刑七年。任三动当庭表示认罪认罚。
            堤溃蚁穴，细水长流式收受礼品礼金，以致无法记清收了多少人多少钱......</Text>

          <Text style={{
            borderWidth: 0,
            fontSize: 20,
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: "#E7EBEE",
            width: "100%",
            height: 40,
          }}>全部评论</Text>
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity style={{
              flexDirection: "row-reverse",
              borderWidth: 0,
              width: "20%",
              marginLeft: 0,
              marginTop: -35,
              marginBottom: 10,
            }} onPress={this.isPresse}><Text
              style={{ color: "#1E90FF" }}>{this.state.isPressed ? "时间正序↑↓" : "热门正序↑↓"}</Text></TouchableOpacity>
          </View>

          <Comment navigation={this.props.navigation}
            username="lalala"
            headimg="https://img.zcool.cn/community/01c8415b10ec7aa801212d57334fdc.png@1280w_1l_2o_100sh.png"
            datetime="2021-7-13 14:06"
            comment="一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
            comment1="一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
            comment2={"一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"}
            username1="哈哈"
            username2="66"
            commentnum="9"/>
          <Comment navigation={this.props.navigation}
                   username="hguisdhg"
                   headimg="https://img.zcool.cn/community/01c8415b10ec7aa801212d57334fdc.png@1280w_1l_2o_100sh.png"
                   datetime="2021-7-13 14:06"
                   comment="一二三四五六七八九q5135ae八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
                   comment1="一二三四五六七八九十asfaw四十五十六3523as十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
                   comment2={"一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"}
                   username1="哈哈"
                   username2="66"
                   commentnum="1000"/>
          <Comment navigation={this.props.navigation}
                   username="lalala"
                   headimg="https://img.zcool.cn/community/01c8415b10ec7aa801212d57334fdc.png@1280w_1l_2o_100sh.png"
                   datetime="2021-7-13 14:06"
                   comment="一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
                   comment1="一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"
                   comment2={"一二三四五六七八九十十一十二十三十四十五十六十七十八十九二十二十一二十二二十三二十四二十五二十六二十七二十八二十九三十三十一三十二三十三三十四"}
                   username1="哈哈"
                   username2="66"
                   commentnum="9"/>
        </ScrollView>
        <View>
          <Bottom />
        </View>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    paddingHorizontal: "4%"
  },
  text: {
    borderWidth:0,
    fontSize: 17,
    textAlign: 'left',
  },
  pic: {

    width: "100%",
    height: 300,
  },

})

export default articles_detail;
