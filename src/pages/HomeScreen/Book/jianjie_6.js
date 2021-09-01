/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements'
import {View,Text,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default class jianjie_6 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible:false,
        }
    }
    
//底部弹窗
list = [
    { title: '（代序）引领时代风潮的优秀商帮 ',
    onPress: () => this.go(0) },
    { title: '第一章   大潮汐——浙商机遇',
    onPress: () => this.go(9) },
    { title: '第二章   弄潮人——浙商之魂',
    onPress: () => this.go(34) },
    { title: '第三章   观   潮——浙商现象 ',
    onPress: () => this.go(41) },
  ];

go(kk){
    this.setState({isVisible:false})
    this.props.navigation.navigate('book_xiangqing_6',{k:kk})
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
                    <Text style={{color:'#333',lineHeight:23}}>{`\t\t\t\t什么是真正的商道智慧？谁拥有商业保险柜？百年浙商发展史，告诉你一个真正的商业秘密，商场如战场的时代，不要做了炮灰。在今日中国，商业人士不得不读的一段历史。写透浙商百年史，说尽商道一点智，浙商是中国社会的一个商业奇迹。他们是如何从无到有，由弱而强，缔造了东方奇迹？在百余年的商业奋斗史中，那些优秀的浙商典范，又是如何开创了伟大的商道智慧？百年浙商，这样一部鲜活的大历史，这样一部商人史话，让人温故而知新，鉴往而察来，掩卷之余更添几分对中国商人的理解和对一切创造的敬畏。作品以历史的眼光对浙商百年历史做了透视分析，对浙商人物事迹做了详尽记述，对浙商现象做了独到分析，是一部了解浙商进而了解商业借鉴成功经验的优秀作品。`}</Text>
                    <View style={{borderWidth:0.5,borderColor:'#333',marginTop:20}}/>
                    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',marginBottom:10}}
                    onPress={()=>this.setState({isVisible:true})}>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:"#333"}}>目录</Text>
                            <Text style={{color:'#ccc',marginLeft:10}}>已完结  共三章</Text>
                        </View>
                        <Text>{`>`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}