/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Shoucang from '../pages/MyScreen/zhanshi/Shoucang';
import Dianzan from '../pages/MyScreen/zhanshi/Dianzan';
import Output from '../pages/MyScreen/zhanshi/Output';
import Goods from '../pages/MyScreen/zhanshi/Goods';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

export default    function MyRoute() {
  return (

    <Tab.Navigator>

      
       <Tab.Screen name="我的发布" component={Output} />
       <Tab.Screen name="我的商品" component={Goods} />
       <Tab.Screen name="点赞" component={Dianzan} />
       <Tab.Screen name="收藏" component={Shoucang} />
    </Tab.Navigator>

  );
}
