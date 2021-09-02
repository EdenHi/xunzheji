/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements'
import {View,Text,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default class jianjie_7 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible:false,
        }
    }
    
//底部弹窗
list = [
    { title: '前言',
    onPress: () => this.go(0) },
    { title: '第一章　从发展到传承：民营企业成长新阶段',
    onPress: () => this.go(4) },
    { title: '第二章　创办方太之前的茅氏父子',
    onPress: () => this.go(22) },
  ];

go(kk){
    this.setState({isVisible:false})
    this.props.navigation.navigate('book_xiangqing_7',{k:kk})
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
                    <Text style={{color:'#333',lineHeight:23}}>{`家族企业在创业早期表现出极大的活力，而后期却又成为“封闭”“落后”和“低效率”的代名词。中国家族企业如何走上一条可持续发展的健康之路？后创始人时代，企业又该何去何从？
茅理翔和茅忠群父子共同创办了方太，为企业传承提供了一份优秀的范例。方太的传承分为以下三个阶段。
带三年：另起炉灶，约法三章。淡化家族制，实现弯道超车。
帮三年：父亲主外，儿子主内。用“口袋”理论避免了家族股权矛盾，组建了职业经理人团队。
看三年：父亲彻底交权，儿子全面掌舵。共同梳理了方太精神和价值观。
茅理翔交给茅忠群的不是一笔不菲的财富，也非一个可能被时代淘汰的企业，而是将自己毕生的知识、经验和智慧在一次轰轰烈烈的创业中与儿子交流、碰撞、检验和实践，继而创造出一家价值远超此前的公司。
创业式传承的关键，是企业家精神的代际传递！`}</Text>
                    <View style={{borderWidth:0.5,borderColor:'#333',marginTop:20}}/>
                    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',marginBottom:10}}
                    onPress={()=>this.setState({isVisible:true})}>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:"#333"}}>目录</Text>
                            <Text style={{color:'#ccc',marginLeft:10}}>已完结  共二章</Text>
                        </View>
                        <Text>{`>`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}