/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import shoucang2 from '../pages/MyScreen/zhanshi2_geren/shoucang2';
import dianzan2 from '../pages/MyScreen/zhanshi2_geren/dianzan2';
import output2 from '../pages/MyScreen/zhanshi2_geren/output2';
import goods2 from '../pages/MyScreen/zhanshi2_geren/goods2';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();

export default    function MyRoute2() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="收藏" component={shoucang2} />
      <Tab.Screen name="点赞" component={dianzan2} />
       <Tab.Screen name="我的发布" component={output2} />
       <Tab.Screen name="我的商品" component={goods2} />
    </Tab.Navigator>

  );
}
