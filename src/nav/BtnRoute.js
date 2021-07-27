/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import My from '../pages/MyScreen/My';
import Store from '../pages/Shop/store';
import Home from '../pages/HomeScreen/HOME/Home';
import Forum from '../pages/Forum/luntan';
import ForumTop from '../pages/Forum/ForumTop'
import Tour from '../pages/Tour/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Tab = createBottomTabNavigator(); //底部导航

export default function BtnRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#945357',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'home'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="社区"
        component={ForumTop}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'planet-outline'} size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="商城"
        component={Store}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name={'shopping-bag'} size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="我的"
        component={My}
        options={{
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name={'ghost'} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
