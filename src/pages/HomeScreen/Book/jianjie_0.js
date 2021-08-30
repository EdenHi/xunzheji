/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements'
import {View,Text,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default class jianjie_0 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible:false,
        }
    }
    
//底部弹窗
list = [
    { title: '第一章  鸦片战争后的中国社会和国际环境',
    onPress: () => this.go(2) },
    { title: '总序 记录一段重要历史',
    onPress: () => this.go(7) },
    { title: '前言 他是一个时代的“标杆',
    onPress: () => this.go(8) },
    { title: '第一篇 创业家',
    onPress: () => this.go(10) },
    { title: '第二篇 战略家',
    onPress: () => this.go(0) },
    { title: '第三篇 创新家',
    onPress: () => this.go(0) },
    { title: '第四篇 哲学家',
    onPress: () => this.go(0) },
  ];

go(kk){
    this.setState({isVisible:false})
    this.props.navigation.navigate('book_xiangqing',{k:kk})
}
    render() {
        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                {/* 书籍章节列表 */}
                 <BottomSheet
                    isVisible={this.state.isVisible}
                    containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}

                    >
                    <TouchableOpacity activeOpacity={1} onPress={()=>this.setState({isVisible:false})} style={{height:250}}/>
                    {this.list.map((l, i) => (
                        <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content style={{justifyContent:'center',alignItems:'center'}}>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                        </ListItem>
                    ))}
                    
                    </BottomSheet>
                <View style={{width:width*0.9,marginLeft:width*0.05,marginTop:20}}>
                    <Text style={{color:'#333',lineHeight:23}}>{`本书分五编，共二十一章，内容包括：中国共产党的创立、党在大革命时期、党在土地革命战争时期、党在全民族抗日战争时期等。`}</Text>
                    <View style={{borderWidth:0.5,borderColor:'#333',marginTop:20}}/>
                    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',marginBottom:10}}
                    onPress={()=>this.setState({isVisible:true})}>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:"#333"}}>目录</Text>
                            <Text style={{color:'#ccc',marginLeft:10}}>已完结  共十三章</Text>
                        </View>
                        <Text>{`>`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}