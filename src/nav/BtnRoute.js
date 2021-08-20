/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Text, View, Button ,Animated,
  Image,
  Easing,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import My from '../pages/MyScreen/My';
import Personal from '../pages/MyScreen/Personal';
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
        activeTintColor: '#7cc0c0',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          tabBarIcon: ({ tintColor,focused }) =>
          ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:35,height:35}}  imageAddress={require('./tabpic/homeafter.png')} />//
          :
          <Image source={ require('./tabpic/homebefore.png') }
          style={{width:30,height:30} }//前面是未被选中的图
          />
          )
        }}
      />
      <Tab.Screen
        name="社区"
        component={ForumTop}
        options={{
          tabBarIcon: ({ tintColor,focused }) =>
          ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:35,height:35}}  imageAddress={require('./tabpic/forumafter.png')} />//
          :
          <Image source={ require('./tabpic/forumbefore.png') }
          style={{width:30,height:30} }//前面是未被选中的图
          />
          )
        }}
      />
      <Tab.Screen
        name="商城"
        component={Store}
        options={{
          tabBarIcon: ({ tintColor,focused }) =>
          ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:35,height:35}}  imageAddress={require('./tabpic/storeafter.png')} />//
          :
          <Image source={ require('./tabpic/storebefore.png') }
          style={{width:30,height:30} }//前面是未被选中的图
          />
          )
         
        }}
      />
      <Tab.Screen
        name="我的"
        component={Personal}
        options={{
          // tabBarIcon: ({color}) => (
          //   <SimpleLineIcons name={'ghost'} size={24} color={color} />
          // ),
          tabBarIcon: ({ tintColor,focused }) =>
          ( focused? <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:35,height:35}}  imageAddress={require('./tabpic/myafter.png')} />//
          :
          <Image source={ require('./tabpic/mybefore.png') }
          style={{width:30,height:30} }//前面是未被选中的图
          />
          )
        }}
      />
    </Tab.Navigator>
  );
}
