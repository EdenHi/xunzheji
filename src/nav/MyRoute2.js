/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Shoucang2 from '../pages/MyScreen/zhanshi2_geren/Shoucang2';
import Dianzan2 from '../pages/MyScreen/zhanshi2_geren/Dianzan2';
import Output2 from '../pages/MyScreen/zhanshi2_geren/Output2';
import Goods2 from '../pages/MyScreen/zhanshi2_geren/Goods2';
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
        name="我的发布" component={Output2}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen

        name="我的商品" component={Goods2}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={'planet-outline'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="点赞" component={Dianzan2}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'shopping-bag'} size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="收藏" component={Shoucang2}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name={'ghost'} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}
