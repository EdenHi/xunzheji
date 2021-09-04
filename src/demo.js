/**
 * Created by gaocai on 16/9/5.
 */
 import React, {Component} from 'react';
 import {
     AppRegistry,
     StyleSheet,
     View,
     Text,
 
 } from 'react-native';

//  class TimerG extends Component 
 export default class output extends Component
 {
     /**
      * 渲染界面
      * @returns {XML}
      */
     render() {
         return (
             <View
                 style={{
                         flex: 1,
                         justifyContent: 'center',
                         alignItems: 'center'
                        }}>
                 <Text>
                     这里是ES6写法注意开启几个定时器就要清除几个
                     ES5参考react-timer-mixin中的README.md文件
                 </Text>
             </View>
         )
     }
 
     /**
      * 加载完毕之后调用
      */
     componentDidMount() {
         /**
          * 参数一是一个函数
          * 参数二是持续时长
          * @type {number}
          */
         this.timer = setTimeout(
             () => {
                 alert('3秒后弹出!!!!!!')
             },
             3000
         );
 
        //  this.timer2 = setTimeout(
        //      ()=> {
        //          alert('8秒后弹出!!!!!!')
        //      },
        //      8000
        //  )
     }
 
     /**
      * 记得要在图形卸载是同时清除Timer相关事件
      */
     componentWillUnMount() {
         this.timer && clearTimeout(this.timer);
         this.timer2 && clearTimeout(this.timer2)
     }
 }
 
//  module.exports = TimerG;
 