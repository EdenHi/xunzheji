import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import jianjie from '../pages/HomeScreen/Book/jianjie';
import jianjie_0 from '../pages/HomeScreen/Book/jianjie_0';
import shuping from '../pages/HomeScreen/Book/shuping';
import {Dimensions} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
const {width} = Dimensions.get('window')
const Tab = createMaterialTopTabNavigator();

export default  function BookRoute({route}) {
  console.log('123',route);
  return (

    <Tab.Navigator
    tabBarOptions={{
        labelStyle:{fontSize:18},
        style:{width:width*0.5,elevation:0},
    }}>

       <Tab.Screen name="简介" component={route===3?jianjie_0:jianjie}/>
       <Tab.Screen name="书评" component={shuping} />
    </Tab.Navigator>

  );
}
