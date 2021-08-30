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
  Modal,
  Alert,
  AsyncStorage,
  FlatList,
  ToastAndroid,
  DeviceEventEmitter,
  ActivityIndicator
} from 'react-native';
import Water from "../water"
import EZSwiper from 'react-native-ezswiper';
import LottieView from 'lottie-react-native';
import Foundation from "react-native-vector-icons/Foundation"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Carousel from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import ShiCha from '../HomeScreen/HOME/ShiCha';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import ScrollTopView from 'react-native-scrolltotop';
import shoplist from './shoplist/shoplist.json';
import Geolocation from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('window');
const images = [{ uri: 'http://8.142.11.85:3000/public/images/5.jpg' }, { uri: 'http://8.142.11.85:3000/public/images/6.jpg' }, { uri: 'http://8.142.11.85:3000/public/images/6.jpg' }, { uri: 'http://8.142.11.85:3000/public/images/5.jpg' }]

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowToTop: true,
      isLoding: false,
      showpage: 5,
      modalVisible: false,
      currentPage: 0,
      progress: new Animated.Value(0),
      activeIndex: 0,
      zuobiao: '查询',
      carouselItems: [
        {
          title: "亨达利",
          text: "亨达利，英文名hengdali，是广州市信德箱包皮具有限公司旗下的箱包品牌，以经营、设计、生产拉杆箱、旅行包、高端女包、钱包、皮带等箱包皮具中高端产品，以最具性价比的品牌为目标，为顾客创造价值，为社会提供就业，并致力于打造中国国有皮具品牌。",
          img: "https://img0.baidu.com/it/u=4037245012,4140780654&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "邵芝岩",
          text: "邵芝岩，杭州笔庄，原名粲花室，开建于清朝同治元年（1862），距今已有139年的历史。在杭州的百年老店中，笔庄是唯一精制各类毛笔和经营文房四宝的中华老字号企业。她是浙江省旅游涉外定点商场，又是自营出口的生产企业。",
          img: "https://img0.baidu.com/it/u=1277136832,1694045219&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "西泠印社",
          text: "西泠印社，创建于清光绪三十年（1904年），由浙派篆刻家丁辅之、王福庵、吴隐、叶为铭等召集同人发起创建，吴昌硕为第一任社长。以“保存金石，研究印学，兼及书画”为宗旨。是海内外研究金石篆刻历史最悠久、成就最高、影响最广国际性的研究印学、书画的民间艺术团体，有“天下第一名社”之誉。",
          img: "https://img0.baidu.com/it/u=2201631777,1359889989&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "朱府铜艺",
          text: "“朱府铜艺”发源于绍兴，始创于清朝同治末年1875年，距今已有近150年历史。“朱府铜艺”第一代传人，出身书香门弟的朱雨相，和他的三弟——后来名噪江南的书法才子朱庆润，挂出了“朱府义大铜铺”的牌匾。此后，朱家的铜雕技艺代代相传，享誉江南，成就了“朱府铜艺”的金字招牌。",
          img: "https://img2.baidu.com/it/u=58945123,1870849876&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "王星记",
          text: "杭州是我国制扇名城，自古有“杭州雅扇”之说，南宋以来有不少制扇艺人会集杭州。1875年王星斋在杭城清河坊创建王星记扇庄（后改名王星记扇厂），迄今已有130年历史，他在选材、做工、品种等方面苦下功夫。2008年，“王星记”制扇技艺被列入国家级非物质文化遗产保护名录。",
          img: "https://img0.baidu.com/it/u=2741521114,3468646386&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          title: "张小泉",
          text: "张小泉品牌成名于1628年(明朝崇祯元年 [1]  )，是中华老字号，也是刀剪行业中唯一的中国驰名商标。2002年通过了ISO9001质量管理体系认证，同年还获得原产地注册保护。产品包括家庭用剪系列、工农业园林剪系列、服装剪系列、美容美发剪系列、旅游礼品剪系列、刀具系列等共100多个品种，400多个规格。中国国内市场覆盖率和占有率一直居同行之首，同时产品还远销东南亚，欧美等地区。张小泉在国内外享有很高的知名度和美誉度，深受消费者信赖。",
          img: "https://img1.baidu.com/it/u=2069743543,1338079641&fm=15&fmt=auto&gp=0.jpg",
        },
      ],
      shops: [
        {
          "name": "绿豆糕杭州特产小吃绿豆饼网红糕点办公室零食好吃的点心",
          "jieshao": "知味观",
          "price": "12.90",
          "sales": "8W+",
          "pic": [
            "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01vnfZVZ2HGNwoO10hJ_!!2200646689123.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01lGZiEM2HGNwoNz44Z_!!2200646689123.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i4/2200646689123/O1CN01lTyJzz2HGNwnAeeAu_!!2200646689123.jpg_500x500q90.jpg"
          ],
          "dianpu": "知味观",
          "loge": "https://img2.baidu.com/it/u=2448793404,1008146234&fm=26&fmt=auto&gp=0.jpg",
          "imag1": "https://img.alicdn.com/imgextra/i1/475325704/O1CN01vYGvQb1s0TldPD9z7_!!475325704.jpg",
          "imag2": "https://img.alicdn.com/imgextra/i1/475325704/O1CN01HyaZR81s0TlVItdff_!!475325704.jpg",
          "imag3": "https://img.alicdn.com/imgextra/i1/475325704/O1CN015rX3P21s0TlhMoPOn_!!475325704.jpg",
          "imag4": "https://gdp.alicdn.com/imgextra/i2/2200646689123/O1CN01fanmSb2HGNx3tUh3H_!!2200646689123.jpg"
        },
        {
          "name": "翠沁斋麻糕黑麻酥糖老字号杭州特产点心网红食品零食小吃糕点推荐",
          "jieshao": "中华老字号",
          "price": "24.90",
          "sales": "200+",
          "pic": [
            "https://img.alicdn.com/imgextra/i1/2086085971/O1CN01x1Ny0Y1tylbc4cZbe_!!2086085971.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01PahoMY1tylb93oDSh_!!2086085971.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i3/2086085971/O1CN01QyR8uR1tylb93pDpP_!!2086085971.jpg_500x500q90.jpg"
          ],
          "dianpu": "翠沁斋",
          "loge": "https://bkimg.cdn.bcebos.com/pic/00e93901213fb80e4b9d12d53ed12f2eb9389467?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
          "imag1": "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01gqfLom1tylb8VBFfy_!!2086085971.jpg",
          "imag2": "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01yK7rmA1tylazo6eiE_!!2086085971.jpg",
          "imag3": "https://img.alicdn.com/imgextra/i4/2086085971/O1CN01l0gWlg1tylb9rVl1Y_!!2086085971.jpg",
          "imag4": "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01Z1t3zi1tylbBkHeJv_!!2086085971.jpg"
        },
        {
          "name": "陈源昌 东北开口松子大颗粒200g独立包厂家直销坚果休闲零食批发",
          "jieshao": "",
          "price": "57.00",
          "sales": "1K+",
          "pic": [
            "https://cbu01.alicdn.com/img/ibank/2018/359/558/9223855953_1063743152.500x500.jpg",
            "https://cbu01.alicdn.com/img/ibank/2017/145/079/5245970541_1063743152.500x500.jpg",
            "https://cbu01.alicdn.com/img/ibank/2017/153/640/7275046351_1063743152.500x500.jpg"
          ],
          "dianpu": "陈源昌",
          "loge": "https://shangbiaopic.11467.com/15/54/15546473.jpg",
          "imag1": "https://cbu01.alicdn.com/img/ibank/2018/673/697/9115796376_1063743152.jpg",
          "imag2": "https://cbu01.alicdn.com/img/ibank/2018/383/144/9097441383_1063743152.jpg",
          "imag3": "https://cbu01.alicdn.com/img/ibank/2018/225/534/9097435522_1063743152.jpg",
          "imag4": "https://cbu01.alicdn.com/img/ibank/2018/113/997/9115799311_1063743152.jpg"
        },
      ],
      shops2: [
        {
          "name": "知味观绿豆糕杭州特产小吃绿豆饼网红糕点办公室零食好吃的点心",
          "jieshao": "清香绵软",
          "price": "12.90",
          "sales": "8W+",
          "pic": [
            "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01lGZiEM2HGNwoNz44Z_!!2200646689123.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i1/2200646689123/O1CN01vnfZVZ2HGNwoO10hJ_!!2200646689123.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i4/2200646689123/O1CN01lTyJzz2HGNwnAeeAu_!!2200646689123.jpg_500x500q90.jpg"
          ],
          "dianpu": "知味观",
          "loge": "https://img2.baidu.com/it/u=2448793404,1008146234&fm=26&fmt=auto&gp=0.jpg",
          "imag1": "https://img.alicdn.com/imgextra/i1/475325704/O1CN01vYGvQb1s0TldPD9z7_!!475325704.jpg",
          "imag2": "https://img.alicdn.com/imgextra/i1/475325704/O1CN01HyaZR81s0TlVItdff_!!475325704.jpg",
          "imag3": "https://img.alicdn.com/imgextra/i1/475325704/O1CN015rX3P21s0TlhMoPOn_!!475325704.jpg",
          "imag4": "https://gdp.alicdn.com/imgextra/i2/2200646689123/O1CN01fanmSb2HGNx3tUh3H_!!2200646689123.jpg"
        },
        {
          "name": "翠沁斋麻糕黑麻酥糖老字号杭州特产点心网红食品零食小吃糕点推荐",
          "jieshao": "中华老字号",
          "price": "24.90",
          "sales": "200+",
          "pic": [
            "https://img.alicdn.com/imgextra/i3/2086085971/O1CN01QyR8uR1tylb93pDpP_!!2086085971.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01PahoMY1tylb93oDSh_!!2086085971.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i1/2086085971/O1CN01x1Ny0Y1tylbc4cZbe_!!2086085971.jpg_500x500q90.jpg"
          ],
          "dianpu": "翠沁斋",
          "loge": "https://bkimg.cdn.bcebos.com/pic/00e93901213fb80e4b9d12d53ed12f2eb9389467?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
          "imag1": "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01gqfLom1tylb8VBFfy_!!2086085971.jpg",
          "imag2": "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01yK7rmA1tylazo6eiE_!!2086085971.jpg",
          "imag3": "https://img.alicdn.com/imgextra/i4/2086085971/O1CN01l0gWlg1tylb9rVl1Y_!!2086085971.jpg",
          "imag4": "https://img.alicdn.com/imgextra/i2/2086085971/O1CN01Z1t3zi1tylbBkHeJv_!!2086085971.jpg"
        },
        {
          "name": "陈源昌 东北开口松子大颗粒200g独立包厂家直销坚果休闲零食批发",
          "jieshao": "",
          "price": "57.00",
          "sales": "1K+",
          "pic": [
            "https://cbu01.alicdn.com/img/ibank/2017/145/079/5245970541_1063743152.500x500.jpg",
            "https://cbu01.alicdn.com/img/ibank/2018/359/558/9223855953_1063743152.500x500.jpg",
            "https://cbu01.alicdn.com/img/ibank/2017/153/640/7275046351_1063743152.500x500.jpg"
          ],
          "dianpu": "陈源昌",
          "loge": "https://shangbiaopic.11467.com/15/54/15546473.jpg",
          "imag1": "https://cbu01.alicdn.com/img/ibank/2018/673/697/9115796376_1063743152.jpg",
          "imag2": "https://cbu01.alicdn.com/img/ibank/2018/383/144/9097441383_1063743152.jpg",
          "imag3": "https://cbu01.alicdn.com/img/ibank/2018/225/534/9097435522_1063743152.jpg",
          "imag4": "https://cbu01.alicdn.com/img/ibank/2018/113/997/9115799311_1063743152.jpg"
        },
        {
          "name": "朱府铜艺 全铜香炉《古檀香炉》家用盘香炉香薰书房茶桌摆件",
          "jieshao": "",
          "price": "420.00",
          "sales": "15",
          "pic": [
            "https://img.alicdn.com/imgextra/i4/2211562091974/O1CN01n3K7km1QS8Vu08yFy_!!2211562091974.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i1/2211562091974/O1CN01n6VD311QS8W12an5M_!!0-item_pic.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i1/2211562091974/O1CN01kD3tGT1QS8W1irDTM_!!2211562091974.jpg_500x500q90.jpg"
          ],
          "dianpu": "朱府铜艺",
          "loge": "https://img1.baidu.com/it/u=2357527845,3079209392&fm=26&fmt=auto&gp=0.jpg",
          "imag1": "https://img.alicdn.com/imgextra/i1/2211562091974/O1CN01NkDLUO1QS8VwWr4gm_!!2211562091974.jpg",
          "imag2": "https://img.alicdn.com/imgextra/i3/2211562091974/O1CN013p9irH1QS8VtTXgdH_!!2211562091974.jpg",
          "imag3": "https://img.alicdn.com/imgextra/i1/2211562091974/O1CN01HjcqHA1QS8Vw127Z7_!!2211562091974.jpg",
          "imag4": "https://img.alicdn.com/imgextra/i3/2211562091974/O1CN01xYL32I1QS8WBiasMO_!!2211562091974.jpg"
        },
        {
          "name": "朱府铜艺 全铜香炉《莲花香炉》铜工艺品香炉",
          "jieshao": "",
          "price": "1080.00",
          "sales": "7",
          "pic": [
            "https://img.alicdn.com/imgextra/i4/2211562091974/O1CN01ABGPtP1QS8VzUuFxN_!!0-item_pic.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i4/2211562091974/O1CN01BYCPda1QS8W1hKf4M_!!2211562091974.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i2/2211562091974/O1CN01PmNW0D1QS8W11bhUn_!!2211562091974.jpg_500x500q90.jpg"
          ],
          "dianpu": "朱府铜艺",
          "loge": "https://img1.baidu.com/it/u=2357527845,3079209392&fm=26&fmt=auto&gp=0.jpg",
          "imag1": "https://img.alicdn.com/imgextra/i2/2211562091974/O1CN01YCb2wo1QS8VtSi3l4_!!2211562091974.jpg",
          "imag2": "https://img.alicdn.com/imgextra/i3/2211562091974/O1CN013Fq38B1QS8Vs2jefh_!!2211562091974.jpg",
          "imag3": "https://img.alicdn.com/imgextra/i3/2211562091974/O1CN015n6MHj1QS8W2WdcmC_!!2211562091974.jpg",
          "imag4": "https://img.alicdn.com/imgextra/i1/2211562091974/O1CN01sH8WRt1QS8VxVQe9V_!!2211562091974.jpg"
        },
        {
          "name": "2021年益龙芳茶叶开化龙顶高山土茶春茶250g袋装茶叶绿茶野茶",
          "jieshao": "茶客挚爱口粮茶，醇厚耐泡。",
          "price": "138.00",
          "sales": "100+",
          "pic": [
            "https://img.alicdn.com/imgextra/i4/1665326773/TB2b8ZlnnJYBeNjy1zeXXahzVXa_!!1665326773.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i2/1665326773/TB209zNXyb.BuNjt_jDXXbOzpXa_!!1665326773.jpg_500x500q90.jpg",
            "https://img.alicdn.com/imgextra/i2/1665326773/TB29yPEXxUaBuNjt_iGXXXlkFXa_!!1665326773.jpg_500x500q90.jpg"
          ],
          "dianpu": "益龙芳",
          "loge": "https://img1.baidu.com/it/u=2603973728,1089830249&fm=26&fmt=auto&gp=0.jpg",
          "imag1": "https://img.alicdn.com/imgextra/i4/1665326773/TB2fengdRnTBKNjSZPfXXbf1XXa_!!1665326773.jpg",
          "imag2": "https://img.alicdn.com/imgextra/i4/1665326773/TB2e9WTdOjQBKNjSZFnXXa_DpXa_!!1665326773.jpg",
          "imag3": "https://img.alicdn.com/imgextra/i3/1665326773/TB2rRTZdRjTBKNjSZFDXXbVgVXa_!!1665326773.jpg",
          "imag4": "https://img.alicdn.com/imgextra/i1/1665326773/TB2YZTXdSYTBKNjSZKbXXXJ8pXa_!!1665326773.jpg"
        },
      ]
    };
  }
  insert_shopcart(item) {
    AsyncStorage.getItem('username', (err, result) => {
      if (!err) {
        fetch('http://8.142.11.85:3000/shop/insert_shopcart', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: result,
            shop_name: item.name,
            shop_pic: item.pic[0],
            price: item.price,
            shop_dianpu: item.dianpu,
          }),
        })
      }
    })
    ToastAndroid.showWithGravity('加入购物车成功', 2000, ToastAndroid.BOTTOM)
    DeviceEventEmitter.emit('shop_cart', 1)
  }


  _onScroll(e) {
    const offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY > 100) {
      this.setState({
        isShowToTop: true
      })
    } else {
      this.setState({
        isShowToTop: false
      })
    }
  }
  // 获取位置并逆地理转换
  handleGetLocation() {
    // 当前定位经纬度



    Geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = position
        console.log(initialPosition)
        const { longitude } = initialPosition.coords
        const { latitude } = initialPosition.coords
        console.log(`${longitude},${latitude}`)
        //通过调用高德地图逆地理接口，传入经纬度获取位置信息
        fetch(`https://restapi.amap.com/v3/geocode/regeo?output=json&location=${longitude},${latitude}&key=f5315ceb57f0e671aeddbb152b99eff3&radius=1000&extensions=all`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: ``
        })
          .then((response) => response.json())
          .then((jsonData) => {
            try {
              console.log('dizhi', jsonData.regeocode.addressComponent.district)
              var str=jsonData.regeocode.addressComponent.district;
              this.setState({ zuobiao: str.slice(0,2) })
            } catch (e) {

            }
          })
          .catch((error) => {
            console.error(error);
          })
      },
      (error) => console.log(error),
      { timeout: 20000, maximumAge: 1000 },
    )
  }

  componentDidMount() {
    this.handleGetLocation();
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,
    }).start();

   this.tuijian();
    this.subscription=DeviceEventEmitter.addListener('dizhi',(msg)=>{
      console.log(msg);
      this.setState({zuobiao:msg})
    })
  }

//移除监听
componentWillUnmount(){
  this.subscription.remove();
  }


  tuijian(){
    AsyncStorage.getItem('username',(err,result)=>{
      if(!err){
        fetch('http://8.142.11.85:3000/index/selectTuijian', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username: result,
      })
  })
      .then((response) => response.json())
      .then((ress) => {

        let x = ress.tuijian
        console.log('x',x);
        let newJson = [];
        let json = eval(shoplist);
         //先查询最外层的分类  
         if(x==='meishi'){
          //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
          for(var k=0;k<json[1].meishi.length;k++){
              //这里是商品的查询
              for(var j=0;j<json[1].meishi[k].shops.length;j++){
                  //查询商品中，含有知味的商品数据
                  if((json[1].meishi[k].shops[j].name).indexOf('')>-1){
                      var tempJson = {
                          "shops":json[1].meishi[k].shops[j],
                      }
                      newJson.push(tempJson.shops);
                  }
              }
            }
            this.setState({shops2:newJson})
        }
        if(x==='zhizao'){
        //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
        for(var k=0;k<json[2].zhizao.length;k++){
            //这里是商品的查询
            for(var j=0;j<json[2].zhizao[k].shops.length;j++){
                //查询商品中，含有知味的商品数据
                if((json[2].zhizao[k].shops[j].name).indexOf('')>-1){
                    var tempJson = {
                        "shops":json[2].zhizao[k].shops[j],
                    }
                    newJson.push(tempJson.shops);
                    }
                }
            }
            this.setState({shops2:newJson})
        }
        if(x==='gongmei'){
        //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
        for(var k=0;k<json[3].gongmei.length;k++){
            //这里是商品的查询
            for(var j=0;j<json[3].gongmei[k].shops.length;j++){
                //查询商品中，含有知味的商品数据
                if((json[3].gongmei[k].shops[j].name).indexOf('')>-1){
                    var tempJson = {
                        "shops":json[3].gongmei[k].shops[j],
                    }
                    newJson.push(tempJson.shops);
                    }
                }
            }
            this.setState({shops2:newJson})
        }
        if(x==='chajiu'){
        //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
        for(var k=0;k<json[4].chajiu.length;k++){
            //这里是商品的查询
            for(var j=0;j<json[4].chajiu[k].shops.length;j++){
                //查询商品中，含有知味的商品数据
                if((json[4].chajiu[k].shops[j].name).indexOf('')>-1){
                    var tempJson = {
                        "shops":json[4].chajiu[k].shops[j],
                    }
                    newJson.push(tempJson.shops);
                    }
                }
            }
            this.setState({shops2:newJson})
        }

        
    
      })
      }
    })


         

    
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

        borderRadius: 15,
        height: 250,
        width: "90%",
        elevation: 5,
        backgroundColor: "#fff"
      }}>
        <ImageBackground imageStyle={{ borderRadius: 15, }} style={{ width: "100%", height: "100%", flexDirection: "column-reverse" }} source={{ uri: item.img }} >
          <View style={{ width: "100%", height: "40%", backgroundColor: 'rgba(255,255,255,0.8)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
            <Text style={{ fontSize: 15, color: "#333", fontWeight: "bold", marginLeft: 5, marginTop: "2%" }}>{item.title}</Text>
            <Text numberOfLines={3} ellipsizeMode='tail' style={{ fontSize: 12, color: "#000",padding:5, marginTop: "2%" }}>{item.text}</Text>
          </View>
        </ImageBackground>
      </View>

    )
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }



  renderDate2({item,index}){
    if(index > this.state.showpage){
      return ;
    }else{
    return(
        <TouchableOpacity key={index} style={{backgroundColor:'white',width:width*0.425,borderRadius:10,margin:width*0.025,elevation:5}} activeOpacity={1}
        onPress={()=>this.props.navigation.navigate('Shopdetails',{shops:item})}>
            <Image source={{uri:item.pic[0]}} style={{width:width *0.425,height:width*0.425,borderTopLeftRadius:10,borderTopRightRadius:10}}/>
            <Text style={{width:"100%",paddingLeft:8,paddingRight:8,paddingTop:8,paddingBottom:2,color:"#333333",fontSize:13}} numberOfLines={2}>{item.name}</Text>
            <View style={{flexDirection:'row',paddingLeft:8,alignItems:'baseline',justifyContent:'space-between',paddingRight:8,marginBottom:5}}>
                <View style={{flexDirection:'row',alignItems:'baseline'}}>
                    <Text style={{color:"#7cc0c0",fontSize:15}}>￥</Text>
                    <Text style={{color:'#7cc0c0',fontSize:15}}>{item.price}</Text>
                </View>
                <Text style={{color:"#333333",fontSize:10}}>{item.sales}人付款</Text>
            </View>
        </TouchableOpacity>
    )}
  }


  yangshi() {
    if (this.state.showpage >= this.state.shops2.length) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text>加载完毕</Text></View>
      )
    } else {
      return (
        <View>
          <ActivityIndicator
            size="large"
            animating={true} //动画效果
            color="#7cc0c0"
          />
        </View>
      );
    }
  }

  loadData() {
    if (this.state.showpage >= this.state.shops2.length) {
      return;
    } else {
      this.setState({
        isLoding: true,
      });
      setTimeout(() => {


        this.setState({
          isLoding: false,

          showpage: this.state.showpage + 6,
        });
      }, 2000);
    }
  }

  ListHeaderComponent() {
    const { modalVisible } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: width * 0.95, height: 180, marginBottom: 10 }}  >
          <Swiper
            //样式
            //组件高度
            loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
            autoplay={true}                //自动轮播
            autoplayTimeout={10}            //每隔4秒切换
            horizontal={true}              //水平方向，为false可设置为竖直方向
            paginationStyle={{ bottom: 1 }} //小圆点的位置：距离底部10px
            showsButtons={false}           //为false时不显示控制按钮
            showsPagination={true}       //为false不显示下方圆点
            dot={<View style={{           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 5,
              height: 5,
              marginLeft: 2,
              marginRight: 2,

              marginBottom: 9,
              borderRadius: 50
            }} />}
            activeDot={<View style={{    //选中的圆点样式
              backgroundColor: '#7cc0c0',
              width: 15,
              height: 5,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 9,
              marginBottom: 9,
              borderRadius: 15
            }} />}
          >
            <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "http://8.142.11.85:3000/public/images/store1.png" }} />
            <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "http://8.142.11.85:3000/public/images/store2.png" }} />
            <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "http://8.142.11.85:3000/public/images/store3.png" }} />
            <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img1.baidu.com/it/u=1910157183,2748145307&fm=26&fmt=auto&gp=0.jpg" }} />
            <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "http://8.142.11.85:3000/public/images/store1.png" }} />
            <Image style={{ width: width * 0.95, height: 180, borderRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img2.baidu.com/it/u=2924370352,4021490996&fm=26&fmt=auto&gp=0.jpg" }} />
          </Swiper>
          {/* <ShiCha /> */}
          {/* <EZSwiper style={{ width: "100%", height: "100%",marginBottom:"2%" }}
                dataSource={images}
                width={width}
                height={160}
                renderRow={this.renderRow}
                ratio={0.6}
                index={5}
                horizontal={true}
                loop={true}
                autoplayTimeout={2}
              /> */}
        </View>
        <View style={styles.part}>
          <TouchableOpacity activeOpacity={1} style={{ width: "39%", height: "100%", borderRadius: 15, marginRight: "1%", elevation: 5, backgroundColor: "#fff" }}
            onPress={() => navigation.navigate('CustomMade')}
          >
            <View style={{ width: "100%", height: "50%", alignItems: "center", justifyContent: "center" }}>

              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#7cc0c0", marginTop: "7%" }}>文化定制</Text>

              {/* <Text style={{fontSize:20,fontWeight:"bold"}}>文化定制</Text> */}
            </View>
            <View style={{ width: "100%", height: "50%" }}>
              <LottieView source={require('../../../animal/dingzhi.json')} autoPlay loop progress={this.state.progress} />
            </View>
            {/* <Image style={{ width: "100%", height: "100%", borderRadius: 15, }} source={{ uri: 'http://8.142.11.85:3000/public/images/8.jpg' }}></Image> */}
          </TouchableOpacity>
          <View style={{ width: "59%", height: "100%", marginLeft: "1%", justifyContent: "center" }}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Classify')} style={{ width: "100%", flexDirection: "row", height: "49%", marginBottom: "2%", backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
              <View style={{}}></View>
              <Image style={{ width: "100%", height: "100%", borderRadius: 15 }} source={{ uri: 'http://8.142.11.85:3000/public/images/9.jpg' }}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Swop')} style={{ width: "100%", height: "49%", backgroundColor: "#fff", borderRadius: 15, elevation: 5 }}>
              <Image style={{ width: "100%", height: "100%", borderRadius: 15 }} resizeMode="contain" source={require("../img/以物换物.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.old}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('NewWorks')} style={{ width: "100%", height: "12%", alignItems: "center", flexDirection: "row" }}>
            <View style={{ backgroundColor: '#7cc0bf', width: 3, height: 29, marginLeft: 10 }} />
            <View style={{ marginLeft: 10, width: width * 0.75 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#7cc0bf' }}>上新好物</Text>
              <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#7cc0bf' }}>NEW GOOD THINKGS</Text>
            </View>


            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewWorks')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: '#7cc0bf' }}>
              <LottieView source={require('../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
            </TouchableOpacity>
          </TouchableOpacity>



          <FlatList
            //   style={{width:width,height:10000}}
            data={this.state.shops}
            keyExtractor={(item, index) => (index + '1')}
            renderItem={({ item }) =>
              <View style={{ width: width, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Shopdetails", { shops: item }) }} activeOpacity={1} style={{
                  width: width * 0.9,
                  height: height * 0.18,
                  // marginLeft:width*0.05,
                  backgroundColor: "grey",
                  marginBottom: "3%",
                  borderRadius: 10,
                  elevation: 5,
                  flexDirection: "row",
                }}>
                  <View style={{ width: "60%", height: "100%", backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                    <View style={{ width: "80%", height: "18%", marginLeft: "5%", marginTop: "2%" }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333" }} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 13, color: "#333333" }}>{item.jieshao}</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", marginLeft: "5%" }}>
                      <Text style={{ color: "#7cc0c0" }}>￥<Text style={{ fontSize: 13, color: "#7cc0c0" }}>{item.price}</Text></Text>
                    </View>

                    <View style={{ width: "90%", height: "18%", flexDirection: "row", alignItems: "center", marginLeft: "2%" }}>
                      <LottieView style={{ width: "50%", height: "100%" }} source={require('../../../animal/67511-stars (1).json')} progress={this.state.progress} />
                      <Text style={{ color: "#333333", fontSize: 13 }}>5.0</Text>
                    </View>

                    <View style={{ width: "100%", height: "25%", marginLeft: "5%", flexDirection: "row", }}>
                      <TouchableOpacity activeOpacity={1} style={{ width: "60%", height: "95%", backgroundColor: "#7cc0c0", marginRight: "5%", borderRadius: 50, elevation: 5, alignItems: "center", justifyContent: "center" }}
                        onPress={() => this.insert_shopcart(item)}>
                        <Text style={{ fontSize: 13, color: "#fff" }}>加入购物车</Text>
                      </TouchableOpacity>


                    </View>
                  </View>
                  <Image style={{ width: "40%", height: "100%", borderTopRightRadius: 10, borderBottomRightRadius: 10 }} resizeMode='stretch' source={{ uri: item.pic[1] }} >

                  </Image>
                </TouchableOpacity>

              </View>


            } />



        </View>
        <View style={styles.limit}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('OldBankTimer')} style={{ width: "100%", height: "12%", alignItems: "center", flexDirection: "row" }}>
            <View style={{ backgroundColor: '#7cc0bf', width: 3, height: 29, marginLeft: 10 }} />
            <View style={{ marginLeft: 10, width: width * 0.75 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#7cc0bf' }}>线下老字号</Text>
              <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#7cc0bf' }}>OFFLINE TIME-HONONER BRANDS</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('OldBankTimer')} activeOpacity={1} style={{ width: width * 0.1, height: width * 0.1, color: '#7cc0bf' }}>
              <LottieView source={require('../../../animal/right.json')} autoPlay loop progress={this.state.progress} />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.oldname}>
            <Carousel
              // layout={"default"}
              layout={'stack'} layoutCardOffset={`10`}
              // layout={'tinder'} layoutCardOffset={`15`} 
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={400}
              itemWidth={330}
              renderItem={this._renderItem}
              loop={true}
              //onSnapToItem={index => this.setState({ activeIndex: index })} 
              />
          </View>
        </View>
        <View style={{ width: "95%", alignItems: "center", backgroundColor: '#fff', marginTop: 10, marginHorizontal: '2.5%', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
          <Text style={{ height: 20, fontSize: 16, color: "#7cc0c0", fontWeight: "bold", marginTop: "0.5%", fontWeight: "bold" }}>今日推荐</Text>
          <Text style={{ height: 20, fontSize: 9, color: "#7cc0c0", fontWeight: "bold", marginTop: "0.5%" }}>RECOMMENTED TODAY</Text>

          <View style={{ width: "25%", borderWidth: 2, borderColor: "#7cc0c0", marginTop: "0.5%" }}></View>
        </View>
      </View>
    )
  }


  render() {
    const { modalVisible } = this.state;
    const { navigation } = this.props;
    console.log('showpage', this.state.showpage);
    return (
      <View style={styles.container}>
        <LinearGradient style={{ width }} colors={["#7cc0bf", "#fff", "#fff"]} >
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            hardwareAccelerated={true}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View>
              <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, elevation: 5, height: height * 0.15, width: width, backgroundColor: '#eee', width: "100%" }}>
                <View style={{ width: width, height: "80%", borderWidth: 0, flexDirection: 'row', justifyContent: "space-around" }}>
                  <TouchableOpacity activeOpacity={1} style={{ marginVertical: '4%', height: width * 0.2, width: width * 0.2, backgroundColor: '#fff', borderRadius: 20, }}>

                    <MaterialCommunityIcons onPress={() => { this.props.navigation.navigate('ShoppingCart'), this.setModalVisible(!modalVisible) }} style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="cart-outline"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%", color: "#333333" }}>购物车</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Dingdan'), this.setModalVisible(!modalVisible) }} style={{ marginVertical: '4%', height: width * 0.2, width: width * 0.2, backgroundColor: '#fff', borderRadius: 20 }}>
                    <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="clipboard-text-outline"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%" }}>订单</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Chats', { room: '1' }), this.setModalVisible(!modalVisible) }} style={{ marginVertical: '4%', height: width * 0.2, width: width * 0.2, backgroundColor: '#fff', borderRadius: 20 }}>
                    <AntDesign style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="customerservice"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%", color: "#333333" }}>客服</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AddressList'), this.setModalVisible(!modalVisible) }} style={{ marginVertical: '4%', height: width * 0.2, width: width * 0.2, backgroundColor: '#fff', borderRadius: 20 }}>
                    <MaterialCommunityIcons style={{ textAlign: 'center', marginTop: "-15%", height: '100%', textAlignVertical: 'center' }}
                      name="map-marker-radius"
                      size={35}
                      color="#7cc0c0"
                    />
                    <Text style={{ borderWidth: 0, textAlign: 'center', marginTop: "-20%", color: "#333333" }}>地址管理</Text>
                  </TouchableOpacity>
                </View>
                <MaterialCommunityIcons onPress={() => {
                  this.setModalVisible(!modalVisible);
                }} style={{ height: "10%", width: "100%", textAlignVertical: 'center', textAlign: 'center' }}

                  name="apple-keyboard-control"
                  size={20}
                  color="#7cc0c0"
                />
              </View>
              <TouchableOpacity activeOpacity={1} onPress={() => {
                this.setModalVisible(!modalVisible);
              }} style={{ width: width, height: "85%" }}>

              </TouchableOpacity>
            </View>
          </Modal>
          <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Page1')} activeOpacity={1} style={styles.left}>
              <MaterialCommunityIcons style={{ textAlign: 'center', borderWidth: 0, height: '100%', textAlignVertical: 'center' }}
                name="clipboard-text-outline"
                size={25}
                color="#fff"
              />
            </TouchableOpacity> */}
            <Text onPress={()=>this.props.navigation.navigate('CityList',{zuobiao:this.state.zuobiao})} style={{ fontSize: 16,fontWeight:"bold", width: width * 0.20, textAlign: 'center', textAlignVertical: 'center', color: '#fff' ,marginLeft:width*0.0}}>{this.state.zuobiao}</Text><AntDesign style={{marginLeft:-width*0.03}} name="down" size={14} color='#fff'/>
            <TouchableOpacity activeOpacity={1}
              onPress={() => navigation.navigate('search')}
              style={styles.input}>
              <View style={{ width: width * 0.07, marginLeft: "5%", height: height * 0.08, }}>
                <SimpleLineIcons style={{ textAlign: 'center', textAlignVertical: 'center', height: '100%', borderWidth: 0, }}
                  name="magnifier"
                  size={18}
                  color="grey"
                />
              </View>
              <Text style={{ fontSize: 15, marginLeft: "3%", color: "#7cc0c0" }}>搜索好物</Text>
            </TouchableOpacity>

            <MaterialCommunityIcons onPress={() => {
              this.setModalVisible(true);
            }} style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", width: width * 0.15 }}
              name="dots-vertical"
              size={25}
              color="#fff"
            />

          </View>
          

             
                <FlatList
                style={{height:height*0.855}}
                  ref={(flatList)=>this._flatList = flatList}
                  //onScroll={(e)=>this._onScroll(e)}
                  numColumns={2}
                  keyExtractor={(item, index) => (index + '1')}
                  data={this.state.shops2}
                  columnWrapperStyle={{backgroundColor:'#fff',width:width*0.95,marginLeft:width*0.025}}
                  renderItem={this.renderDate2.bind(this)}
                  ListHeaderComponent={this.ListHeaderComponent.bind(this)}
                  ListFooterComponent = {this.yangshi.bind(this)} //确定刷新的样式
                 onEndReached = {this.loadData.bind(this)}//上拉刷新
                  onEndReachedThreshold={0}
                  />  
              


        
        </LinearGradient>
        {this.state.isShowToTop ? <TouchableOpacity onPress={()=>this._flatList.scrollToOffset({x:0, y:0, animated:true})} style={{width: 60,height: 60,left: Dimensions.get('window').width - 80,top: Dimensions.get('window').height - 160,borderRadius: 30,position:'absolute'}}>
                        <Image 
                        style={{
                            width: 60,
                            height: 60,
                        }} 
                        source={{
                            uri: 'data:image/png;base64,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'
                        }} />
            </TouchableOpacity>: null}
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
    height: height * 0.08,
    // backgroundColor: "#f1f1f1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  left: {
    width: width * 0.1,
    height: width * 0.1,
    borderWidth: 0
  },
  input: {
    width: width * 0.70,
    height: width * 0.09,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    marginLeft:width*0.04
  },
  icon: {
    width: "100%",
    height: "100%"
  },
  cell: {
    width: "95%",
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  part: {
    width: width * 0.95,
    height: width * 0.4,
    flexDirection: "row",
    marginBottom: "2%"
  },
  old: {
    width: width * 0.95,
    height: width * 1.4,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center"
  },
  suggest: {
    width: "95%",
    height: "27%",
    backgroundColor: "grey",
    marginTop: "2%",
    borderRadius: 15,
    elevation: 5,
    flexDirection: "row",

  },
  limit: {
    width: width * 0.95,
    height: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    marginTop: "2%"

  },
  oldname: {
    width: "95%",
    // height: height*0.5,
    // backgroundColor:"grey",
    marginTop: "2%",
    marginRight: 35,
    borderRadius: 15,


  },
  waterfall: {
    width: width * 0.95,
    height: height,
    backgroundColor: "#fff",
    borderRadius: 15,
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
