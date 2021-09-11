/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {Text, View, Button ,Animated,
  Image,
  Easing,DeviceEventEmitter} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Personal from '../pages/MyScreen/Personal';
import Store from '../pages/Shop/store';
import Home from '../pages/HomeScreen/HOME/Home';
//import Forum from '../pages/Forum/LunTan';
import ForumTop from '../pages/Forum/ForumTop'


const Tab = createBottomTabNavigator(); //底部导航
export default class BtnRoute extends Component{
  constructor(props) {
    super(props);
    this.state = {
        fresh:false,
    }
}
componentDidMount(){
  this.listener = DeviceEventEmitter.addListener('yanse',this.fresh.bind(this))
}
fresh(){
this.setState({fresh:!this.state.fresh})
}
componentWillUnmount() {
  this.listener.remove();
}

  render(){
    return (
      <Tab.Navigator 
        tabBarOptions={{
          inactiveBackgroundColor:global.backColor,
          activeBackgroundColor:global.backColor,
          activeTintColor: global.mainColor,
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
}
