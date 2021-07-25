import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import My from "../pages/MyScreen/My"
import Store from "../pages/Shop/store"
import Home from "../pages/HomeScreen/HOME/Home"
import Forum from "../pages/Forum/index"
import Tour from "../pages/Tour/index"

const Tab = createBottomTabNavigator();//底部导航
export default function BtnRoute() {
    return (
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#945357',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="首页" component={Home}></Tab.Screen>
        <Tab.Screen name="社区" component={Forum} />
        <Tab.Screen name="商城" component={Store} />
        <Tab.Screen name="我的" component={My} />
      </Tab.Navigator>
    );
  
  }
  