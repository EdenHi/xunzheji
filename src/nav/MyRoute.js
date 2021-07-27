/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import shoucang from '../pages/MyScreen/zhanshi/shoucang';
import dianzan from '../pages/MyScreen/zhanshi/dianzan';
const Tab = createMaterialTopTabNavigator();

export default    function MyRoute() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="收藏" component={shoucang} />
      <Tab.Screen name="点赞" component={dianzan} />
    </Tab.Navigator>
  );
}
