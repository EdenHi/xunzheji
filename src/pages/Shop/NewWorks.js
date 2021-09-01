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
  AsyncStorage,
  ToastAndroid,
  DeviceEventEmitter
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
      username:'',
      shops:[
        {
          "name":"知味观绿豆糕杭州特产小吃绿豆饼网红糕点办公室零食好吃的点心",
          "jieshao":"清香绵软",
          "price":"12.90",
          "sales":"8W+",
          "pic":[
              "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01vnfZVZ2HGNwoO10hJ_!!2200646689123.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01lGZiEM2HGNwoNz44Z_!!2200646689123.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i4/2200646689123/O1CN01lTyJzz2HGNwnAeeAu_!!2200646689123.jpg_500x500q90.jpg"
            ],
            "dianpu":"知味观",
            "loge":"https://img2.baidu.com/it/u=2448793404,1008146234&fm=26&fmt=auto&gp=0.jpg",
            "imag1":"https://img.alicdn.com/imgextra/i1/475325704/O1CN01vYGvQb1s0TldPD9z7_!!475325704.jpg",
            "imag2":"https://img.alicdn.com/imgextra/i1/475325704/O1CN01HyaZR81s0TlVItdff_!!475325704.jpg",
            "imag3":"https://img.alicdn.com/imgextra/i1/475325704/O1CN015rX3P21s0TlhMoPOn_!!475325704.jpg",
            "imag4":"https://gdp.alicdn.com/imgextra/i2/2200646689123/O1CN01fanmSb2HGNx3tUh3H_!!2200646689123.jpg"
        },
        {
          "name":"翠沁斋麻糕黑麻酥糖老字号杭州特产点心网红食品零食小吃糕点推荐",
          "jieshao":"中华老字号",
          "price":"24.90",
          "sales":"200+",
          "pic":[
              "https://img.alicdn.com/imgextra/i1/2086085971/O1CN01x1Ny0Y1tylbc4cZbe_!!2086085971.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01PahoMY1tylb93oDSh_!!2086085971.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i3/2086085971/O1CN01QyR8uR1tylb93pDpP_!!2086085971.jpg_500x500q90.jpg"
          ],
          "dianpu":"翠沁斋",
          "loge":"https://bkimg.cdn.bcebos.com/pic/00e93901213fb80e4b9d12d53ed12f2eb9389467?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
          "imag1":"https://img.alicdn.com/imgextra/i2/2086085971/O1CN01gqfLom1tylb8VBFfy_!!2086085971.jpg",
          "imag2":"https://img.alicdn.com/imgextra/i2/2086085971/O1CN01yK7rmA1tylazo6eiE_!!2086085971.jpg",
          "imag3":"https://img.alicdn.com/imgextra/i4/2086085971/O1CN01l0gWlg1tylb9rVl1Y_!!2086085971.jpg",
          "imag4":"https://img.alicdn.com/imgextra/i2/2086085971/O1CN01Z1t3zi1tylbBkHeJv_!!2086085971.jpg"
        },
        {
          "name":"陈源昌 东北开口松子大颗粒200g独立包厂家直销坚果休闲零食批发",
          "jieshao":"",
          "price":"57.00",
          "sales":"1K+",
          "pic":[
              "https://cbu01.alicdn.com/img/ibank/2018/359/558/9223855953_1063743152.500x500.jpg",
              "https://cbu01.alicdn.com/img/ibank/2017/145/079/5245970541_1063743152.500x500.jpg",
              "https://cbu01.alicdn.com/img/ibank/2017/153/640/7275046351_1063743152.500x500.jpg"
          ],
          "dianpu":"陈源昌",
          "loge":"https://shangbiaopic.11467.com/15/54/15546473.jpg",
          "imag1":"https://cbu01.alicdn.com/img/ibank/2018/673/697/9115796376_1063743152.jpg",
          "imag2":"https://cbu01.alicdn.com/img/ibank/2018/383/144/9097441383_1063743152.jpg",
          "imag3":"https://cbu01.alicdn.com/img/ibank/2018/225/534/9097435522_1063743152.jpg",
          "imag4":"https://cbu01.alicdn.com/img/ibank/2018/113/997/9115799311_1063743152.jpg"
        },
        {
          "name":"张小泉菜刀 家用厨师专用超快锋利切片刀手工厨房切斩肉刀具 厨房",
          "jieshao":"锋利复合钢 高硬度 95Cr18Mov 花梨木手柄",
          "price":"139.00",
          "sales":"3K+",
          "pic":[
              "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/684978371/O1CN01xNf6SM2Bhy4HrXGM1_!!684978371.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/684978371/O1CN01VfI0zN2Bhy8FMuvgB_!!684978371.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/https://img.alicdn.com/bao/uploaded/i3/684978371/O1CN018JCM972Bhy4HrXvqt_!!684978371.jpg_500x500q90.jpg"
          ],
          "dianpu":"张小泉",
          "loge":"https://img1.baidu.com/it/u=2038748790,171493189&fm=26&fmt=auto&gp=0.jpg",
          "imag1":"https://img.alicdn.com/imgextra/i4/684978371/O1CN01bisRLa2Bhy4Qrvoi4_!!684978371.jpg",
          "imag2":"https://img.alicdn.com/imgextra/i4/684978371/O1CN01bisRLa2Bhy4Qrvoi4_!!684978371.jpg",
          "imag3":"https://img.alicdn.com/imgextra/i2/684978371/O1CN01E3Hsa02Bhy5eyXZVu_!!684978371.jpg",
          "imag4":"https://img.alicdn.com/imgextra/i3/684978371/O1CN01IKALwd2Bhy4MTeuS8_!!684978371.jpg"
        },
        {
          "name":"朱府铜艺《万签春意》高端创意牙签盒家居饰品铜工艺品餐厅摆件",
          "jieshao":"",
          "price":"298.00",
          "sales":"5",
          "pic":[
              "https://img.alicdn.com/imgextra/i4/2211562091974/O1CN017uWHIr1QS8VtcLJJV_!!0-item_pic.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i1/2211562091974/O1CN01IR8wri1QS8Vtb2LkL_!!2211562091974.jpg_500x500q90.jpg",
              "https://img.alicdn.com/imgextra/i4/2211562091974/O1CN01ZLx3jE1QS8VzF2pGm_!!2211562091974.jpg_500x500q90.jpg"
          ],
          "dianpu":"朱府铜艺",
          "loge":"https://img1.baidu.com/it/u=2357527845,3079209392&fm=26&fmt=auto&gp=0.jpg",
          "imag1":"https://img.alicdn.com/imgextra/i2/2211562091974/O1CN0124AMKG1QS8VtLd9ch_!!2211562091974.jpg",
          "imag2":"https://img.alicdn.com/imgextra/i2/2211562091974/O1CN01ERL9na1QS8VvbFXjt_!!2211562091974.jpg",
          "imag3":"https://img.alicdn.com/imgextra/i4/2211562091974/O1CN01PB1A6C1QS8Vs7F5XF_!!2211562091974.jpg",
          "imag4":"https://img.alicdn.com/imgextra/i4/2211562091974/O1CN01YwBtRp1QS8Vs7F1MN_!!2211562091974.jpg"
      },
      ]
    }
  }



  componentDidMount() {

 
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,

    }).start();
  }

  insert_shopcart(item){

          fetch('http://47.100.78.254:3000/shop/insert_shopcart', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username:this.state.username,
                  shop_name:item.name,
                  shop_pic:item.pic[0],
                  price:item.price,
                  shop_dianpu:item.dianpu,
              }),
          })
      
  
  ToastAndroid.showWithGravity('加入购物车成功',2000,ToastAndroid.BOTTOM)
  DeviceEventEmitter.emit('shop_cart',1)
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
              <Text style={{fontSize:18,fontWeight:"bold",color:"#fff",width:width*0.85,marginLeft:"2%"}}>上新好物</Text>

            </View> 
        <View style={styles.list}>
          <FlatList
          // style={{width:width,height:height*0.93}}
            data = {this.state.shops}
            renderItem = {({item})=>
            <View style={{width:width,alignItems:"center"}}>
                 <TouchableOpacity onPress={() => { this.props.navigation.navigate("Shopdetails",{shops:item}) }} activeOpacity={1} style={styles.suggest}>
                <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                  <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold",color:"#333333" }} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13,color:"#333333"  }}>{item.jieshao}</Text>
                  </View>
                  <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                    <Text style={{  color: "#7cc0c0" }}>￥<Text style={{ fontSize: 13, color: "#7cc0c0" }}>{item.price}</Text></Text>
                  </View>
                  
                  <View style={{ width: "90%", height: "18%", flexDirection: "row" ,alignItems:"center",marginLeft:"2%"}}>
                  <LottieView style={{width:"50%",height:"100%"}} source={require('../../../animal/67511-stars (1).json')} progress={this.state.progress} />
                  <Text style={{color:"#333333",fontSize:13}}>5.0</Text>
                  </View>
                  
                  <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                    <TouchableOpacity activeOpacity={1} style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}
                    onPress={()=>this.insert_shopcart(item)}>
                      <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                    </TouchableOpacity>


                  </View>
                </View>
                <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} resizeMode='stretch' source={{uri:item.pic[0]}} >

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
// width:width*0.9,
height:height*0.93,
    alignItems:"center",
    marginBottom:20,

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
