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
        activeTintColor: global.back2,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="首页"
        component={Home}
        options={{
          tabBarIcon: ({ tintColor,focused }) =>
          ( focused?
            <Image source={ require('./tabpic/5.png') }
          style={{width:80,height:80} }/>
            //  <CustomAnimation 
            //  animationStyle={'spring'} junpTime={1000000} 
            //   imageStyle={{width:80,height:80}}  imageAddress={require('./tabpic/5.png')} />
          :
          <Image source={ require('./tabpic/6.png') }
          style={{width:70,height:70} }//前面是未被选中的图
          />
          )
        }}
      />
      <Tab.Screen
        name="社区"
        component={ForumTop}
        options={{
          tabBarIcon: ({ tintColor,focused }) =>
          ( focused?
            <Image source={ require('./tabpic/3.png') }
            style={{width:80,height:80} }/>
            //  <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:80,height:80}}  imageAddress={require('./tabpic/3.png')} />//
          :
          <Image source={ require('./tabpic/4.png') }
          style={{width:70,height:70} }//前面是未被选中的图
          />
          )
        }}
      />
      <Tab.Screen
        name="商城"
        component={Store}
        options={{
          tabBarIcon: ({ tintColor,focused }) =>
          ( focused? 
            <Image source={ require('./tabpic/1.png') }
            style={{width:80,height:80} }/>
          // <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:80,height:80}}  imageAddress={require('./tabpic/1.png')} />//
          :
          <Image source={ require('./tabpic/2.png') }
          style={{width:70,height:70} }//前面是未被选中的图
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
          ( focused?
            <Image source={ require('./tabpic/7.png') }
            style={{width:80,height:80} }/>
            //  <CustomAnimation animationStyle={'spring'} junpTime={1000000}  imageStyle={{width:80,height:80}}  imageAddress={require('./tabpic/7.png')} />//
          :
          <Image source={ require('./tabpic/8.png') }
          style={{width:70,height:70} }//前面是未被选中的图
          />
          )
        }}
      />
    </Tab.Navigator>
  );
}
