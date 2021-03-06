import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import jianjie from '../pages/HomeScreen/Book/jianjie';
import jianjie_6 from '../pages/HomeScreen/Book/jianjie_6';
import jianjie_0 from '../pages/HomeScreen/Book/jianjie_0';
import jianjie_2 from '../pages/HomeScreen/Book/jianjie_2';
import jianjie_7 from '../pages/HomeScreen/Book/jianjie_7';
import jianjie_9 from '../pages/HomeScreen/Book/jianjie_9';
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
        labelStyle:{fontSize:18,padding:0,margin:0},
        tabStyle:{width:width*0.2},
        indicatorStyle:{backgroundColor:global.mainColor,width:width*0.1,marginHorizontal:width*0.05},
        style:{width:width*0.4,elevation:0,marginLeft:20},
       
    }}>

       {route===3?<Tab.Screen name="简介" component={jianjie_0}/>:null}
       {route===4?<Tab.Screen name="简介" component={jianjie_2}/>:null}
       {route===5?<Tab.Screen name="简介" component={jianjie}/>:null}
       {route===6?<Tab.Screen name="简介" component={jianjie_6}/>:null}
       {route===7?<Tab.Screen name="简介" component={jianjie_7}/>:null}
       {route===9?<Tab.Screen name="简介" component={jianjie_9}/>:null}
       <Tab.Screen name="书评" component={shuping} />
    </Tab.Navigator>

  );
}
