/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import shoucang from '../pages/MyScreen/zhanshi/shoucang';
import dianzan from '../pages/MyScreen/zhanshi/dianzan';
import output from '../pages/MyScreen/zhanshi/output';
import goods from '../pages/MyScreen/zhanshi/goods';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

export default    function MyRoute() {
  return (

    <Tab.Navigator>

      
       <Tab.Screen name="我的发布" component={output} />
       <Tab.Screen name="我的商品" component={goods} />
       <Tab.Screen name="点赞" component={dianzan} />
       <Tab.Screen name="收藏" component={shoucang} />
    </Tab.Navigator>

  );
}
