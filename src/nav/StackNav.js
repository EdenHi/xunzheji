/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BtnRoute from './BtnRoute';

import {
  My,
  Tour,
  Store,
  Home,
  Login,
  Register,
  FindPass,
  Page1,
  Page2,
  Page3,
  GoodsDetail,
  Comment,
  Comment_huifu,
  Fabu,
  bianjiziliao,
  shezhi,
  CustomMade,
  ShoppingCart,
  CustormerBar,
  Goods,
  NewWorks,
  people,
  OldBank,
  search,
  dingzhi,
  Exchange,
  AddressList,
  Address,
  DaoHang,
  Book,
  Zhifu,
  History,
  Zs,
  CulturalCreation,
  Classify,
  Heritage,
  Concerns,
  fans,
  Exchange2,
  AddressList2,
  Business,
  LiuYu,
  HuZhou,
  updateDizhi,
  OldBankTimer,
  MinJia,
  Jiang,
  Min,
  tag,
  AR,
  Video,
  Shopclassifymore,
  Zhan,
  JieShao,
  Swop,
  Topic1,
  Topic2,
  Topic3,
  Dingdan,
  Shoplist,
  Shopdetails,
  zhifu_cart,
  JiFen,
  duihuan_jinbi,
  Story,
  Story2,
  huati,
  culture,
  ClothesMade,
  musicPlayer,
  MatchGame,
  book_1,
  book_xiangqing,
  discuss,
  Shoucang2,
  Dianzan2,
  Output2,
  Goods2,
  drawpic,
  dingzhi_xuqiu,
  vr,
  dingzhi_tupian,
  JuBao,
  Exchange_want,
  Register2,
  Register_tuijian,
  ShiMin,
  XiaoXi,
  Want,
  ShangBang,
  new_exchange,
  open,
  go_map,
  FootMark,

  book_0,
  book_xiangqing_0,
  zanheshoucang,
  go_pinglun,
  ZhenCe,
  ZhenCe2,
  ZhenCe3,
  ZhenCe4,
  book_6,
  book_xiangqing_6,
  shicha2,
  book_2,
  book_xiangqing_2,
  book_7,
  book_xiangqing_7,
  duihuan,
} from '../pages/index';
import CityList from '../components/CityList';
import Ranking from '../Ranking';
import { startClock } from 'react-native-reanimated';
import Road from '../pages/Road/Road';
import Road2 from '../pages/Road/Road2';
import Road3 from '../pages/Road/Road3';
import Chats from '../pages/chat/demo';
import articel from '../pages/article/comment/article_detail';
import Live from '../components/Live/Live';
const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator headerMode="none"
      initialRouteName="Login">

      <Stack.Screen name="BtnRoute" component={BtnRoute} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MyScreen" component={My} />
      <Stack.Screen name="Tour" component={Tour} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FindPass" component={FindPass} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="CustomMade" component={CustomMade} />
      <Stack.Screen name="NewWorks" component={NewWorks} />
      <Stack.Screen name="OldBank" component={OldBank} />
      <Stack.Screen name="search" component={search} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Exchange" component={Exchange} />
      <Stack.Screen name="Exchange2" component={Exchange2} />
      <Stack.Screen name="AddressList2" component={AddressList2} />
      <Stack.Screen name="updateDizhi" component={updateDizhi} />
      <Stack.Screen name="articel" component={articel} />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Comment" component={Comment} />
      <Stack.Screen name="GoodsDetail" component={GoodsDetail} />
      <Stack.Screen name="Goods" component={Goods} />
      <Stack.Screen name="dingzhi" component={dingzhi} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="bianjiziliao" component={bianjiziliao} />
      <Stack.Screen name="shezhi" component={shezhi} />
      <Stack.Screen name="Comment_huifu" component={Comment_huifu} />
      <Stack.Screen name="Fabu" component={Fabu} />
      <Stack.Screen name="people" component={people} />
      <Stack.Screen name="CustormerBar" component={CustormerBar} />
      <Stack.Screen name="AddressList" component={AddressList} />
      <Stack.Screen name="DaoHang" component={DaoHang} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Zhifu" component={Zhifu} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Zs" component={Zs} />
      <Stack.Screen name="CulturalCreation" component={CulturalCreation} />
      <Stack.Screen name="Road" component={Road} />
      <Stack.Screen name="Road2" component={Road2} />
      <Stack.Screen name="Road3" component={Road3} />
      <Stack.Screen name="Classify" component={Classify} />

      <Stack.Screen name="Heritage" component={Heritage} />
      <Stack.Screen name="Concerns" component={Concerns} />
      <Stack.Screen name="fans" component={fans} />
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="LiuYu" component={LiuYu} />
      <Stack.Screen name="HuZhou" component={HuZhou} />
      <Stack.Screen name="OldBankTimer" component={OldBankTimer} />
      <Stack.Screen name="MinJia" component={MinJia} />
      <Stack.Screen name="Min" component={Min} />
      <Stack.Screen name="Jiang" component={Jiang} />
      <Stack.Screen name="AR" component={AR} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Zhan" component={Zhan} />
      <Stack.Screen name="JieShao" component={JieShao} />
      <Stack.Screen name="tag" component={tag} />
      <Stack.Screen name="Shopclassifymore" component={Shopclassifymore} />
      <Stack.Screen name="Swop" component={Swop} />
      <Stack.Screen name="Topic1" component={Topic1} />
      <Stack.Screen name="Topic2" component={Topic2} />
      <Stack.Screen name="Topic3" component={Topic3} />
      <Stack.Screen name="Dingdan" component={Dingdan} />
      <Stack.Screen name="Shoplist" component={Shoplist} />
      <Stack.Screen name="Shopdetails" component={Shopdetails} />
      <Stack.Screen name="CityList" component={CityList} />

      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="Story2" component={Story2} />

      <Stack.Screen name="zhifu_cart" component={zhifu_cart} />
      <Stack.Screen name="JiFen" component={JiFen} />
      <Stack.Screen name="duihuan_jinbi" component={duihuan_jinbi} />
      <Stack.Screen name="huati" component={huati} />

      <Stack.Screen name="culture" component={culture} />
      <Stack.Screen name="ClothesMade" component={ClothesMade} />
      <Stack.Screen name="musicPlayer" component={musicPlayer} />
      <Stack.Screen name="MatchGame" component={MatchGame} />
      <Stack.Screen name="book_1" component={book_1} />
      <Stack.Screen name="book_xiangqing" component={book_xiangqing} />
      <Stack.Screen name="discuss" component={discuss} />
      <Stack.Screen name="Dianzan2" component={Dianzan2} />
      <Stack.Screen name="Shoucang2" component={Shoucang2} />
      <Stack.Screen name="Output2" component={Output2} />
      <Stack.Screen name="Goods2" component={Goods2} />
      <Stack.Screen name="drawpic" component={drawpic} />
      <Stack.Screen name="dingzhi_xuqiu" component={dingzhi_xuqiu} />
      <Stack.Screen name="vr" component={vr} />
      <Stack.Screen name="dingzhi_tupian" component={dingzhi_tupian} />
      <Stack.Screen name="JuBao" component={JuBao} />
      <Stack.Screen name="Exchange_want" component={Exchange_want} />
      <Stack.Screen name="Register2" component={Register2} />
      <Stack.Screen name="Register_tuijian" component={Register_tuijian} />
      <Stack.Screen name="ShiMin" component={ShiMin} />
      <Stack.Screen name="XiaoXi" component={XiaoXi} />
      <Stack.Screen name="Want" component={Want} />
      <Stack.Screen name="ShangBang" component={ShangBang} />
      <Stack.Screen name="new_exchange" component={new_exchange} />
      <Stack.Screen name="open" component={open} />
      <Stack.Screen name="go_map" component={go_map} />
      <Stack.Screen name="FootMark" component={FootMark} />
      <Stack.Screen name="book_0" component={book_0} />
      <Stack.Screen name="book_xiangqing_0" component={book_xiangqing_0} />
      <Stack.Screen name="zanheshoucang" component={zanheshoucang} />
      <Stack.Screen name="go_pinglun" component={go_pinglun} />
      <Stack.Screen name="ZhenCe" component={ZhenCe} />
      <Stack.Screen name="ZhenCe2" component={ZhenCe2} />
      <Stack.Screen name="ZhenCe3" component={ZhenCe3} />
      <Stack.Screen name="ZhenCe4" component={ZhenCe4} />
      <Stack.Screen name="book_6" component={book_6} />
      <Stack.Screen name="book_xiangqing_6" component={book_xiangqing_6} />
      <Stack.Screen name="shicha2" component={shicha2} />
      <Stack.Screen name="Live" component={Live} />
      <Stack.Screen name="book_2" component={book_2} />
      <Stack.Screen name="book_xiangqing_2" component={book_xiangqing_2} />
      <Stack.Screen name="book_7" component={book_7} />
      <Stack.Screen name="book_xiangqing_7" component={book_xiangqing_7} />
      <Stack.Screen name="duihuan" component={duihuan} />
    </Stack.Navigator>
  );
}
