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
    { title: '作者序',
    onPress: () => this.go(0) },
    { title: '第一章　吴越文化　悠久而深厚的商道历史',
    onPress: () => this.go(43) },
    { title: '第二章　春风再生　改革开放时代续写辉煌',
    onPress: () => this.go(83) },
    { title: '第三章　勤苦为径　小草根如何当老板',
    onPress: () => this.go(120) },
    { title: '第四章　活水捕鱼　最敏锐的市场参与者',
    onPress: () => this.go(143) },
  ];

go(kk){
    this.setState({isVisible:false})
    this.props.navigation.navigate('book_xiangqing_9',{k:kk})
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
                    <Text style={{color:'#333',lineHeight:23}}>{`中国第一商帮的创富秘籍
“可怕”的他们如何从无到有，缔造东方奇迹？
伟大商帮的奋斗通史，个人创业的秘籍典范。
浙商其实并不“可怕”，你也可以一样成功！

2500年前的越地文明对浙商有什么深远影响？改革开放以来，浙商如何快速崛起、称雄商界？野心、勤奋、诚信，哪些是草根商人必须坚守的原则？如何才能在生意场上善做脑筋急转弯？浙商制造是怎样走出中国、走遍世界的？为何有家族同业中的你帮我、我帮你？哪些是浙商一以贯之的经营法则？新危机下浙商的前进之路几何？`}</Text>
                    <View style={{borderWidth:0.5,borderColor:'#333',marginTop:20}}/>
                    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',marginBottom:10}}
                    onPress={()=>this.setState({isVisible:true})}>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:"#333"}}>目录</Text>
                            <Text style={{color:'#ccc',marginLeft:10}}>已完结  共四章</Text>
                        </View>
                        <Text>{`>`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}