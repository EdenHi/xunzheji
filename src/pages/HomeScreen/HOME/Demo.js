import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
 
export default class TextLantern extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nowText: "", // 显示的文本
            opacity: 1, // 透明度
            index: 0, // 下标
            list: [], // 滚动的列表
        }
    }
 
    componentWillMount() {
        const {  } = this.props
        this.setState({
            nowText: {}.title, // 插入显示的文本
            list: [
              { id: 1, title: "不是这件事很难，而是每件事都难", address: 1 },
              { id: 2, title: "稳食姐，犯法啊", address: 2 },
              { id: 3, title: "夜半诉心声，何须太高清", address: 3 },
              { id: 4, title: "失恋唱情歌，即是漏煤气关窗", address: 4 },
          ],
  
            
// 滚动的列表
        })
        this.onStart() // 启动计时器 A
    }
 
    onStart = () => {
        const { Intervals = 5000 } = this.props // Intervals 可为参数非必传
        this.timer = setInterval(() => {
            this.onDisappear() // 间隔Intervals毫秒启动计时器B
        }, Intervals)
    };
 
    onDisappear = () => {
        this.timer1 = setInterval(() => {
            const { opacity, index, list } = this.state
            if (opacity === 0) {
                // 当透明度为0时候开始显示在一个文本
                if (index + 2 > list.length) {
                    // 当前显示的文本为最后一个时 重头再来
                    this.setState({
                        nowText: list[0].title,
                        index: 0,
                    })
                } else {
                    this.setState({
                        nowText: list[index + 1].title, // 下一个文本
                        index: index + 1,
                    })
                }
                this.onAppear() // 显示
                clearInterval(this.timer1)
                return
            }
            this.setState({
                opacity: parseFloat(Math.abs(opacity - 0.04).toFixed(2)),
            })
        }, 20)
    };
 
    onAppear = () => {
        this.timer2 = setInterval(() => {
            const { opacity } = this.state
            if (opacity === 1) {
                clearInterval(this.timer2)
                return
            }
            this.setState({
                opacity: parseFloat(Math.abs(opacity + 0.04).toFixed(2)),
            })
        }, 20)
    };
 
    render() {
        const { nowText, opacity, list, index } = this.state
        return (
            <View style={{ padding: 5, borderColor: "#dddddd",width: "80%",height:30}}>
                        <Text style={{fontSize: 10,width:"80%"}}>
                           {nowText}
                        </Text>
            </View>
        )
    }
}