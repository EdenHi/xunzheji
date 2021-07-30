import React, {Component} from 'react';
import {
  StyleSheet, 
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import LottieView from 'lottie-react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get('window');
export default class NewWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnOn: true,
      turnOff: false,
      progress: new Animated.Value(0),
    }
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,

    }).start();
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.container}>
<LinearGradient style={{width:width,height:"100%"}} colors={["#7cc0bf","#fff","#fff"]} >
            <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,justifyContent:"center"}}> 
              <TouchableOpacity activeOpacity={1} style={{ }}>
                  <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#fff" }} name="left" size={20} color="#000000" />
              </TouchableOpacity>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",width:width*0.85,marginLeft:"2%"}}>上新好物</Text>

            </View> 
        <View style={styles.list}>
          <FlatList
        //   style={{width:width,height:10000}}
            data = {[
              {key: '姜枣膏',name:'姜枣膏是一道美味佳肴，主料是姜，枣。',price:'￥10'},
              {key: '姜枣膏',name:'姜枣膏是一道美味佳肴',price:'￥20'},
              {key: '姜枣膏',name:'姜枣膏是一道美味佳肴，主料是姜，枣。',price:'￥30'},
              {key: '姜枣膏',name:'姜枣膏是一道美味佳肴，主料是姜，枣。',price:'￥40'},
              {key: '姜枣膏',name:'姜枣膏是一道美味佳肴，主料是姜，枣。',price:'￥10'},
              {key: '姜枣膏',name:'姜枣膏是一道美味佳肴，主料是姜，枣。',price:'￥10'},
            ]}
            renderItem = {({item})=>
            <View style={{width:width,alignItems:"center"}}>
                 <TouchableOpacity onPress={() => { this.props.navigation.navigate("GoodsDetail") }} activeOpacity={1} style={styles.suggest}>
                <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                  <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.key}</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13 }}>{item.name}</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text style={{ fontSize: 13, color: "#7cc0c0" }}>{item.price}</Text>
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
                    <TouchableOpacity activeOpacity={1} style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                      <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ width: "20%", height: "98%", backgroundColor: "#fff", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}>
                    <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="staro"
              size={25}
              color="orange"
            />

                    </TouchableOpacity> */}

                  </View>
                </View>
                <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} source={require("../img/2.jpg")} >

                </Image>
              </TouchableOpacity>
        
            </View>
        
        
        }

          />
        </View>
        </LinearGradient>
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

  list: {
flex:1,
    alignItems:"center"
  },
  suggest: {
    width: width*0.9,
    height: height*0.18,
    backgroundColor: "grey",
    marginBottom: "3%",
    borderRadius: 10,
    elevation: 10,
    flexDirection: "row",

  },
});
