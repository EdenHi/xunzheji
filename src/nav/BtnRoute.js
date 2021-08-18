/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, Button ,Animated,
  Image,
  Easing,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import My from '../pages/MyScreen/My';
import Myself from '../pages/MyScreen/Myself';
import Store from '../pages/Shop/store';
import Home from '../pages/HomeScreen/HOME/Home';
//import Forum from '../pages/Forum/LunTan';
import ForumTop from '../pages/Forum/ForumTop'
import Tour from '../pages/Tour/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LottieView from 'lottie-react-native';
import {CustomAnimation} from 'react-native-tabbar-animated';

const Tab = createBottomTabNavigator(); //底部导航

export default function BtnRoute() {
 
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7196a8',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'home'} size={28} color={color} />
          ),
          // tabBarIcon: ({ tintColor,focused }) =>
          // ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:50,height:50,borderRadius:50,marginBottom:30}}  imageAddress={require('../pages/HomeScreen/photos/sj2.jpg')} />//
          // :
          // <Image source={ require('../pages/HomeScreen/photos/zs1.jpeg') }
          // style={{width:30,height:30,borderRadius:50} }//前面是未被选中的图
          // />
          // )
        }}
      />
      <Tab.Screen
        name="社区"
        component={ForumTop}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'planet-outline'} size={28} color={color} />
          ),
          // tabBarIcon: ({ tintColor,focused }) =>
          // ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:50,height:50,borderRadius:50,marginBottom:30}}  imageAddress={require('../pages/HomeScreen/photos/sj2.jpg')} />//
          // :
          // <Image source={ require('../pages/HomeScreen/photos/zs1.jpeg') }
          // style={{width:30,height:30,borderRadius:50} }//前面是未被选中的图
          // />
          // )
        }}
      />
      <Tab.Screen
        name="商城"
        component={Store}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name={'shopping-bag'} size={26} color={color} />
          ),
          // tabBarIcon: ({ tintColor,focused }) =>
          // ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:50,height:50,borderRadius:50,marginBottom:30}}  imageAddress={require('../pages/HomeScreen/photos/sj2.jpg')} />//
          // :
          // <Image source={ require('../pages/HomeScreen/photos/zs1.jpeg') }
          // style={{width:30,height:30,borderRadius:50} }//前面是未被选中的图
          // />
          // )
        }}
      />
      <Tab.Screen
        name="我的"
        component={My}
        options={{
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name={'ghost'} size={24} color={color} />
          ),
          // tabBarIcon: ({ tintColor,focused }) =>
          // ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:50,height:50,borderRadius:50,marginBottom:30}}  imageAddress={require('../pages/HomeScreen/photos/sj2.jpg')} />//
          // :
          // <Image source={ require('../pages/HomeScreen/photos/zs1.jpeg') }
          // style={{width:30,height:30,borderRadius:50} }//前面是未被选中的图
          // />
          // )
        }}
      />
    </Tab.Navigator>
  );
}
