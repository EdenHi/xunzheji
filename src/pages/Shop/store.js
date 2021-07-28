import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  ImageBackground,

} from 'react-native';
import EZSwiper from 'react-native-ezswiper';
import LottieView from 'lottie-react-native';
import Foundation from "react-native-vector-icons/Foundation"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Carousel from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign"
import { bgWhite } from 'chalk';
const { width, height } = Dimensions.get('window');
const images = [require("../img/5.jpg"), require("../img/6.jpg"), require("../img/6.jpg"), require("../img/5.jpg")]

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      progress: new Animated.Value(0),
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ]
    };
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,

    }).start();
  }
  renderRow(obj, index) {
    return (
      <View style={styles.cell}>
        <Image
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, borderRadius: 15, width: width * 0.65, height: undefined }}
          resizeMode={"cover"}
          source={obj} />
      </View>
    )
  }
  _renderItem({ item, index }) {
    return (
      <View style={{

        borderRadius: 10,
        height: 250,
        width: "90%",
        elevation: 10,
        backgroundColor: "#fff"
      }}>
        <ImageBackground imageStyle={{ borderRadius: 10, }} style={{ width: "100%", height: "100%", flexDirection: "column-reverse" }} source={require("../img/2.jpg")} >
          <View style={{ width: "100%", height: "30%", backgroundColor: 'rgba(0,0,0,0.5)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold", marginLeft: "5%", marginTop: "2%" }}>鱼宴馆·家宴老字号</Text>
            <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 12, color: "#fff", marginLeft: "5%", marginTop: "2%" }}>一家经典网红餐厅，浓汤鱼头是主打，据说是千岛湖野生鱼头做的，店里的菜品品种丰富多样</Text>
          </View>
        </ImageBackground>
      </View>

    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.left}>
            <MaterialCommunityIcons style={{ textAlign: 'center',borderWidth:0,height:'100%',textAlignVertical:'center'}}
              name="clipboard-text-outline"
              size={25}
              color="#7cc0c0"
            />

          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <View style={{ width: width * 0.07, marginLeft: "5%", height: width * 0.07,  }}>
              <SimpleLineIcons style={{textAlign:'center',textAlignVertical:'center',height:'100%',borderWidth:0,}}
                name="magnifier"
                size={18}
                color="grey"
              />
            </View>
            <Text style={{fontSize:15,marginLeft:"3%",color:"#7cc0c0"}}>搜索好物</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.left}
          onPress={() => navigation.navigate('ShoppingCart')}
          >
            <MaterialCommunityIcons style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="dots-vertical"
              size={25}
              color="#7cc0c0"
            />

          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ alignItems: "center", backgroundColor: "#f1f1f1" }}>
            <ImageBackground style={{ width: "100%", height: width * 0.42 }}  >
              <EZSwiper style={{ width: "100%", height: "100%" }}
                dataSource={images}
                width={width}
                height={160}
                renderRow={this.renderRow}
                ratio={0.6}
                index={5}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
              /></ImageBackground>
            <View style={styles.part}>
              <TouchableOpacity style={{ width: "39%", height: "100%",  borderRadius: 10, marginRight: "1%", elevation: 5 }}
                onPress={() => navigation.navigate('CustomMade')}
              >

                <Image style={{ width: "100%", height: "100%", borderRadius: 10, }} source={require("../img/8.jpg")}></Image>
              </TouchableOpacity>
              <View style={{ width: "59%", height: "100%", marginLeft: "1%", justifyContent: "center" }}>
                <TouchableOpacity style={{ width: "100%", height: "49%", marginBottom: "2%", backgroundColor: "#fff", borderRadius: 10, elevation: 5 }}>
                  <Image style={{ width: "100%", height: "100%", borderRadius: 10 }} source={require("../img/9.jpg")}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "100%", height: "49%", backgroundColor: "#fff", borderRadius: 10, elevation: 5 }}>
                  <Image style={{ width: "100%", height: "100%", borderRadius: 10 }} source={require("../img/10.jpg")}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.old}>
              <View style={{ width: "100%", height: "12%", alignItems: "center", flexDirection: "row" }}>
                <View style={{ width: 3, height: "70%", marginLeft: "2%", backgroundColor: "#7cc0c0" }}></View>
                <Text style={{ fontSize: 15, marginLeft: "2%",color:"#7cc0c0",fontWeight:"bold" }}>上新好物</Text>
                <TouchableOpacity style={{ width: width * 0.08, height: width * 0.08, marginLeft: "65%" }}>
                <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="right"
              size={20}
              color="#7cc0c0"
            />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.suggest}>
                <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                  <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>姜枣膏</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>姜枣膏是一道美味佳肴，主料是姜，枣。</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text style={{ fontSize: 13, color: "#7cc0c0" }}>￥50</Text>
                  </View>
                  <View style={{ width: "90%", height: "18%", flexDirection: "row" }}>
                    <View style={{ width: "70%", height: "100%", }}>
                      <LottieView source={require('./star5.json')} progress={this.state.progress} />
                    </View>
                    <View style={{ width: "26%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                      <Text style={{ fontSize: 12 }}>5.0</Text>
                    </View>
                  </View>
                  <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                    <TouchableOpacity style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                      <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "20%", height: "98%", backgroundColor: "#fff", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                    <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="staro"
              size={25}
              color="orange"
            />

                    </TouchableOpacity>

                  </View>
                </View>
                <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../img/2.jpg")} >

                </Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.suggest}>
                <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                  <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>双合成月饼</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>双合成月饼连续十余年被国家评为“中国名饼、名牌月饼”。</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text style={{ fontSize: 13, color: "#7cc0c0" }}>￥30</Text>
                  </View>
                  <View style={{ width: "90%", height: "18%", flexDirection: "row" }}>
                    <View style={{ width: "70%", height: "100%", }}>
                      <LottieView source={require('./star5.json')} progress={this.state.progress} />
                    </View>
                    <View style={{ width: "26%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                      <Text style={{ fontSize: 12 }}>5.0</Text>
                    </View>
                  </View>
                  <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                    <TouchableOpacity style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                      <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "20%", height: "98%", backgroundColor: "#fff", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                    <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="staro"
              color="orange"
              size={25}
            />

                    </TouchableOpacity>

                  </View>
                </View>
                <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../img/3.webp")} >

                </Image>
              </TouchableOpacity>
            </View>
            <View style={styles.limit}>
              <View style={{ width: "100%", height: "12%", alignItems: "center", flexDirection: "row" }}>
                <View style={{ width: 3, height: "70%", marginLeft: "2%", backgroundColor: "#7cc0c0" }}></View>
                <Text style={{ fontSize: 15, marginLeft: "2%" ,color:"#7cc0c0",fontWeight:"bold"}}>浙江老字号</Text>
                <TouchableOpacity style={{ width: width * 0.08, height: width * 0.08,marginLeft: "60%" }}>
                <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="right"
              size={20}
              color="#7cc0c0"
            />
                </TouchableOpacity>
              </View>
              <View style={styles.oldname}>
                <Carousel
                  // layout={"default"}
                  layout={'stack'} layoutCardOffset={`10`}
                  // layout={'tinder'} layoutCardOffset={`15`} 
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={350}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem={index => this.setState({ activeIndex: index })} />
              </View>
            </View>
            <View style={styles.waterfall}>
              <View style={{ width: "100%", height: "12%", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: "#7cc0c0", fontWeight: "bold", marginTop: "2%" ,fontWeight:"bold"}}>今日推荐</Text>
                <View style={{ width: "25%", height: "3%", backgroundColor: "#7cc0c0" }}></View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <ActionButton
          hideLabelShadow={true}
          activeOpacity={1}
          elevation={100}
          size={60}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { alert('你点了我！') }}
        /> */}
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center"


  },
  header: {
    width: width,
    height: height * 0.07,
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  left: {
    width: width * 0.1,
    height: width * 0.1,

  },
  input: {
    width: width * 0.70,
    height: width * 0.09,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation:5
  },
  icon: {
    width: "100%",
    height: "100%"
  },
  cell: {
    // backgroundColor: 'red',
    width: "95%",
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  part: {
    width: width * 0.95,
    height: width * 0.4,
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    marginBottom: "2%"

  },
  old: {
    width: width * 0.95,
    height: width,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center"
  },
  suggest: {
    width: "95%",
    height: "40%",
    backgroundColor: "grey",
    marginTop: "2%",
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row",

  },
  limit: {
    width: width * 0.95,
    height: width,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    marginTop: "2%"

  },
  oldname: {
    width: "95%",
    height: "80%",
    // backgroundColor:"grey",
    marginTop: "2%",
    borderRadius: 10,
    // elevation:10,
    flexDirection: "row",
  },
  waterfall: {
    width: width * 0.95,
    height: height,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    marginTop: "2%"

  },

  actionButtonView: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
  },





})
