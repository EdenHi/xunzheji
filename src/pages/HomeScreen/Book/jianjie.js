/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements'
import {View,Text,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default class jianjie extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible:false,
        }
    }
    
//底部弹窗
list = [
    { title: '丛书推荐序 四十不惑立潮头',
    onPress: () => this.go() },
    { title: '总序 记录一段重要历史',
    onPress: () => this.go() },
    { title: '前言 他是一个时代的“标杆”',
    onPress: () => this.go() },
    { title: '第一篇 创业家',
    onPress: () => this.go() },
    { title: '第二篇 战略家',
    onPress: () => this.go() },
    { title: '第三篇 创新家',
    onPress: () => this.go() },
    { title: '第四篇 哲学家',
    onPress: () => this.go() },
  ];

go(){
    this.setState({isVisible:false})
}
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                {/* 书籍章节列表 */}
                 <BottomSheet
                    isVisible={this.state.isVisible}
                    containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}

                    >
                    <TouchableOpacity onPress={()=>this.setState({isVisible:false})} style={{height:250}}/>
                    {this.list.map((l, i) => (
                        <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content style={{justifyContent:'center',alignItems:'center'}}>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                        </ListItem>
                    ))}
                    
                    </BottomSheet>
                <View style={{width:width*0.9,marginLeft:width*0.05,marginTop:20}}>
                    <Text style={{color:'#333'}}>{`鲁伟鼎亲定书名，万向官方授权！
浙商开创了一个时代，鲁冠球开创了一代浙商！
浙江大学管理学院院长魏江，还原鲁冠球的四大特质！

鲁冠球，是中国企业史上的传奇。他是浙企"教父级"人物，被誉为民营企业家中的“常青树”；
他是中国第一位登上了美国《新闻周刊》封面的企业家，被《华尔街日报》称为“国家英雄式人物”。
他的成功不仅在于从7个人、4000元家当起步，带领万向发展成为涉足农业、金融、互联网、新能源等多元化产业的千亿级跨国集团公司；
更因为他在48年的企业经营史上，精准“踩点”，使企业的每一个重要发展节点都与时代机遇完美结合。
他是一个时代的“标杆”，而这背后的商学逻辑正是本书所希望探寻的：一个创业家、战略家、创新家、哲学家四大特质的集合体。`}</Text>
                    <View style={{borderWidth:0.5,borderColor:'#333',marginTop:20}}/>
                    <TouchableOpacity style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}
                    onPress={()=>this.setState({isVisible:true})}>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>目录</Text>
                            <Text style={{color:'#ccc',marginLeft:10}}>已完结  共十章</Text>
                        </View>
                        <Text>{`>`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}