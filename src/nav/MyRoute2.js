/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import shoucang2 from '../pages/MyScreen/zhanshi2_geren/shoucang2';
import dianzan2 from '../pages/MyScreen/zhanshi2_geren/dianzan2';
import output2 from '../pages/MyScreen/zhanshi2_geren/output2';
import goods2 from '../pages/MyScreen/zhanshi2_geren/goods2';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createMaterialTopTabNavigator();

export default function MyRoute2() {
  return (
    <Tab.Navigator
    
    tabBarOptions={{
      activeTintColor: '#7196a8',
      inactiveTintColor: 'gray',
      
    }}
    >
      <Tab.Screen
        name="我的发布" component={output2}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
      
        name="我的商品" component={goods2}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={'planet-outline'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="点赞" component={dianzan2}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'shopping-bag'} size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="收藏" component={shoucang2}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name={'ghost'} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}
