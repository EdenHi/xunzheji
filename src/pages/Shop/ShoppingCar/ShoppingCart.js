
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image,Dimensions, StyleSheet, SectionList, AsyncStorage,DeviceEventEmitter} from 'react-native'
import {commonStyle} from './commonStyle'
import AntDesign from "react-native-vector-icons/AntDesign"
import { SwipeRow } from 'react-native-swipe-list-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
let {width,height} = Dimensions.get("window");
export default class ShoppingCart extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data:[],
      tempArr:[],
      status: [],
      isSelectedAllItem: false,
      totalNum: 0,
      totalPrice: 0.00,
      shops:'',
    }
  }

//得到需要传的数据
send(){
  let arr = [];
  const {status}=this.state
  for(var i=0;i<status.length;i++){
    for(var j=0;j<status[i].items.length;j++){
      if(status[i].items[j].checked===true){
        arr.push(status[i].items[j])
      }
    }
  }
  console.log('arr',arr);
  this.props.navigation.navigate('zhifu_cart',{shops:arr,total:parseFloat(this.state.totalPrice).toFixed(2)})
}

  //获取购物车数据
  get(){
    AsyncStorage.getItem('username',(err,result)=>{
      if(!err){
        fetch('http://8.142.11.85:3000/shop/get_shopcart', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username:result,
          }),
      }) .then((response) => response.json())
      .then((json) => {
          this.setState({
              data:json,
          });
          let dataArr = json;
    let tempStatusArr = []
    for (let i = 0; i < dataArr.length; i++) {
      let items = dataArr[i].shopItems
      let shopObj = {}
      shopObj.checked = false
      let tempItems = []
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        item.checked = false
        item.quantity = item.minQuantity
        tempItems.push(item)
      }
      shopObj.items = tempItems
      tempStatusArr.push(shopObj)
    }
    this.state.status = tempStatusArr
    console.log('status',this.state.status)
    //数据源
    let tempArr = this.state.data.map((item, index) => {
      let tempData = {}
      tempData.key = item.key
      tempData.index = index
      tempData.data = item.shopItems
      return tempData
    })
    this.setState({
      tempArr
    })
      })
      }
    })
  }

  //删除购物车某一条数据
  delect_shop(v){
      fetch('http://8.142.11.85:3000/shop/delect_shopcart', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id:v,
        }),
      })
      this.get();
  }

  componentDidMount() {
    // 网络请求获取购物车数据
    this.get();
    this.listener = DeviceEventEmitter.addListener('shop_cart',this.get.bind(this))
  }
   //移除监听
   componentWillUnmount(){
    this.listener.remove();
    }

  checkItem(sectionIndex, index) {
    let tempStatus = this.state.status
    let tempShop = tempStatus[sectionIndex]
    let tempShopItems = tempStatus[sectionIndex].items
    let item = tempShopItems[index]
    item.checked = !item.checked

    let isSelectedAllShopItem = true
    for (let j = 0; j < tempShopItems.length; j++) {
      let item = tempShopItems[j]
      if (!item.checked) {
        isSelectedAllShopItem = false
        break
      }
    }

    tempShop.checked = isSelectedAllShopItem

    let isSelectedAllShop = true
    for (let k = 0; k < tempStatus.length; k ++) {
      let shop = tempStatus[k]
      if (!shop.checked) {
        isSelectedAllShop = false
        break
      }
    }

    this.calculateCountAndPrice()
    this.setState({isSelectedAllItem: isSelectedAllShop, status: tempStatus})
  }

  checkedShop(index) {
    let tempStatus = this.state.status
    let shop = tempStatus[index]
    shop.checked = !shop.checked
    let items = shop.items
    for (let j = 0; j < items.length; j++) {
      let item = items[j]
      item.checked = shop.checked
    }

    let isSelectedAllShop = true
    for (let j = 0; j < tempStatus.length; j++) {
      let shop = tempStatus[j]
      if (!shop.checked) {
        isSelectedAllShop = false
        break
      }
    }

    this.calculateCountAndPrice()
    this.setState({isSelectedAllItem: isSelectedAllShop, status: tempStatus})
  }

  checkAllShop() {
    let tempSelectedAllItem = !this.state.isSelectedAllItem
    let tempStatus = this.state.status
    for (let i = 0; i < tempStatus.length; i++) {
      let shop = tempStatus[i]
      shop.checked = tempSelectedAllItem
      let items = shop.items
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        item.checked = tempSelectedAllItem
      }
    }

    this.calculateCountAndPrice()
    this.setState({isSelectedAllItem: tempSelectedAllItem, status: tempStatus})
  }

  //减少购买数量
  minus(sectionIndex, index) {
    let tempStatus = this.state.status
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if (item.quantity <= item.minQuantity) {
      alert('商品购买数量不能小于:'+item.minQuantity)
    } else {
      item.quantity -= 1
    }

    if (item.checked) {
      this.calculateCountAndPrice()
    }
    this.setState({status: tempStatus})
  }

  //增加购买数量
  add(sectionIndex, index) {
    let tempStatus = this.state.status
    let shop = tempStatus[sectionIndex]
    let items = shop.items
    let item = items[index]
    if (item.quantity >= item.maxQuantity) {
      alert('商品购买数量不能大于:'+item.maxQuantity)
    } else {
      item.quantity += 1
    }
    if (item.checked) {
      this.calculateCountAndPrice()
    }
    this.setState({status: tempStatus})
  }

  calculateCountAndPrice() {
    let tempTotalNum = 0
    let tempTotalPrice = 0
    let tempStatus = this.state.status
    for (let i = 0; i < tempStatus.length; i ++) {
      let shop = tempStatus[i]
      let items = shop.items
      for (let j = 0; j < items.length; j++) {
        let item = items[j]
        if (item.checked) {
          tempTotalNum += 1
          tempTotalPrice += item.itemPrice * item.quantity
        }
      }
    }
    this.setState({totalNum: tempTotalNum, totalPrice: tempTotalPrice})
  }

  renderItem = (info) => {
    let item = info.item
    let index = info.index
    let sectionIndex = info.section.index
    let shop = this.state.status[sectionIndex]
    let statusItem = shop.items[index]
    return (
      <View>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            disableRightSwipe={true} //禁止向右滑动
            >
            <TouchableOpacity activeOpacity={1} style={{backgroundColor:'red',flexDirection:'row',justifyContent: 'flex-end',paddingRight:10,flex: 1,alignItems: 'center',paddingRight:20}}
            onPress={()=>this.delect_shop(item.id)}
            >
                <Text allowFontScaling={false} style={{color:'white',fontSize:15}}>删除</Text>
            </TouchableOpacity>
            <View style={styles.cellStyle}>
              <TouchableOpacity onPress={() => this.checkItem(sectionIndex, index)}>
                <Image style={styles.checkBox} source={statusItem.checked ? require('../assets/ic_selected.png') : require('../assets/ic_defult.png')} resizeMode={'center'}/>
              </TouchableOpacity>
              <Image style={{width: 80, height: 80}} source={{uri:item.itemimg}}/>
              <View style={{justifyContent: commonStyle.around, flex: 1, marginHorizontal: 10, height: 50}}>
                <Text style={{fontSize: 13, color:"#333333"}}numberOfLines={2}>{item.itemName}</Text>
                <Text style={{fontSize: 13,color:"#7cc0c0",marginTop:30}}>{`￥${item.itemPrice}`}</Text>
              </View>
              <View style={{flexDirection: commonStyle.row, alignItems: commonStyle.center, marginHorizontal: 10}}>
                <TouchableOpacity onPress={() => this.minus(sectionIndex, index)}>
                  <Image source={require('../assets/Group.png')}/>
                </TouchableOpacity>
                <Text style={{width: 30, textAlign: 'center',color:"#333333"}}>{statusItem.quantity}</Text>
                <TouchableOpacity onPress={() => this.add(sectionIndex, index)}>
                  <Image source={require('../assets/Group5.png')}/>
                </TouchableOpacity>
              </View>
            </View>
            </SwipeRow>
      </View>
    )
  }

  renderSectionHeader = (info) => {
    let section = info.section.key;
    let index = info.section.index;
    let shop = this.state.status[index];
    return (
      <View style={styles.sectionHeader}>
        <TouchableOpacity onPress={() => this.checkedShop(index)}>
          <Image style={styles.checkBox} source={shop.checked ? require('../assets/ic_selected.png') : require('../assets/ic_defult.png')} resizeMode={'center'}/>
        </TouchableOpacity>
        <Text style={{ fontSize: 14,color:"#333333"}}>{section}</Text>
      </View>
    )
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={{width:width,height:height*0.07,backgroundColor:"#7cc0c0",flexDirection:"row",alignItems:"center"}}>
          <TouchableOpacity activeOpacity={1} style={{width:width*0.06,marginLeft:width*0.05}}
                      onPress={() => navigation.goBack()}
          >
            <FontAwesome  name={'angle-left'} size={25} color={'#fff'} />
          {/* <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="left"
              size={20}
              color="#fff"
            /> */}
          </TouchableOpacity>
          <Text style={{fontSize:18,color:"#fff",fontWeight:"bold"}}>购物车</Text>
          <TouchableOpacity style={{width:width*0.09,height:width*0.09,}}>
          </TouchableOpacity>
        </View>
        <SectionList
          renderSectionHeader={this.renderSectionHeader.bind(this)}
          renderItem={this.renderItem.bind(this)}
          sections={this.state.tempArr}
          keyExtractor={(item, index) => (index + '1')}
        />
        <View style={styles.toolBar}>
          <View style={{flex: 1, flexDirection: commonStyle.row, alignItems: commonStyle.center}}>
            <TouchableOpacity onPress={() => this.checkAllShop()}>
              <Image style={styles.checkBox} source={this.state.isSelectedAllItem ? require('../assets/ic_selected.png') : require('../assets/ic_defult.png')} resizeMode={'center'}/>
            </TouchableOpacity>
            <Text style={{color:"#333333"}}>全选</Text>
          </View>
          <Text style={{marginHorizontal: 10,color:"#333333"}}>合计:
            <Text style={{color:"#7cc0c0"}}>￥{parseFloat(this.state.totalPrice).toFixed(2)}</Text>
          </Text>
          <View style={{width: 120,backgroundColor:"#7cc0c0", alignItems: commonStyle.center, justifyContent: commonStyle.center, height: commonStyle.cellHeight}}>
            <TouchableOpacity onPress={()=>this.send()}>
            <Text style={{color: "#fff"}}>去结算({this.state.totalNum})</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyle.white
  },
  navBar: {
    flexDirection:"row",
    height: commonStyle.navHeight,
    alignItems: commonStyle.center,
    justifyContent: commonStyle.center,
    borderBottomWidth: commonStyle.lineWidth,
    borderBottomColor: commonStyle.lineColor
  },
  cellStyle: {
    flexDirection: commonStyle.row,
    alignItems: commonStyle.center,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: commonStyle.lineColor,
    backgroundColor:'white'
  },
  sectionHeader: {
    height: 40,
    flexDirection: commonStyle.row,
    backgroundColor: commonStyle.bgColor,
    alignItems: commonStyle.center,
  },
  checkBox: {
    width: 40,
    height: 40,
  },
  toolBar: {
    height: commonStyle.cellHeight,
    flexDirection: commonStyle.row,
    alignItems: commonStyle.center
  },
})