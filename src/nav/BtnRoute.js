import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import My from "../pages/MyScreen/My"
import Store from "../pages/Store/index"
import Home from "../pages/HomeScreen/Home"
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
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Forum" component={Forum} />
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Tour" component={Tour} />
        <Tab.Screen name="MyScreen" component={My} />
      </Tab.Navigator>
    );
  
  }
  