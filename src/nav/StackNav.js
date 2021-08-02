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
  Classify
} from '../pages/index';
import Ranking from '../Ranking';
import { startClock } from 'react-native-reanimated';
import Road from '../pages/Road/Road';
import Chats from '../pages/chat/Chats';
import articel from '../pages/article/comment/article_detail';
const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator headerMode="none"
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BtnRoute" component={BtnRoute} />
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
      <Stack.Screen name="History" component={History}/>
      <Stack.Screen name="Zs" component={Zs}/>
      <Stack.Screen name="CulturalCreation" component={CulturalCreation}/>
      <Stack.Screen name="Road" component={Road}/>
      <Stack.Screen name="Classify" component={Classify}/>
    </Stack.Navigator>
  );
}
