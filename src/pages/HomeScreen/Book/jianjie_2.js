/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements'
import {View,Text,Dimensions } from 'react-native';
const {width} = Dimensions.get('window')
export default class jianjie_2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible:false,
        }
    }
    
//底部弹窗
list = [
    { title: '总序：记录一段重要历史',
    onPress: () => this.go(0) },
    { title: '前言：传化的“三螺旋体”生长',
    onPress: () => this.go(9) },
    { title: '引言　徐冠巨：传化的初心',
    onPress: () => this.go(34) },
    { title: '第一章　沙地精神',
    onPress: () => this.go(41) },
    { title: '第二章　社会责任感的“传”与“化”',
    onPress: () => this.go(41) },
  ];

go(kk){
    this.setState({isVisible:false})
    this.props.navigation.navigate('book_xiangqing_2',{k:kk})
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
                    <Text style={{color:'#333',lineHeight:23}}>{`\t\t\t\t自古与钱塘江潮休戚共存的萧山人骨子里有一种“奔竞不息，勇立潮头”的精神。这种精神就像一粒种子，离不开土壤与气候的成就。传化企业能从最底层成长起来，成为勇于承担社会责任的企业，徐冠巨先生能够成为着眼于社会及时代的企业家，离不开国家与地方政府在变革中给予的支持。
        本书还原了徐冠巨先生与其父徐传化先生创立传化的创业历程，记录了徐冠巨先生与时代共进，以“社会责任感理念”为依归，持续推进企业转型，成就社会化、时代化企业的历程。`}</Text>
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