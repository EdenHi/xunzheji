/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {BottomSheet,ListItem} from 'react-native-elements'
import {View,Text,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
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
    { title: '第  一  章: 鸦片战争后的中国社会和国际环境',
    onPress: () => this.go(0) },
    { title: '第  二  章：五四运动和中国共产党的诞生',
    onPress: () => this.go(43) },
    { title: '第  三  章：中国共产党创建初期的活动',
    onPress: () => this.go(83) },
    { title: '第  四  章：第一次国共合作的建立和革命新局面的形成',
    onPress: () => this.go(120) },
    { title: '第  五  章：五卅运动和大革命高潮的兴起',
    onPress: () => this.go(143) },
  ];

go(kk){
    this.setState({isVisible:false})
    this.props.navigation.navigate('book_xiangqing_0',{k:kk})
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
                        <ListItem.Content style={{}}>
                            <ListItem.Title style={{borderWidth:0}}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                        </ListItem>
                    ))}
                    
                    </BottomSheet>
                <View style={{width:width*0.9,marginLeft:width*0.05,marginTop:20}}>
                    <Text style={{color:'#333',lineHeight:23}}>{`本书共五章，内容包括：中国共产党的创立、党在大革命时期、党在土地革命战争时期、党在全民族抗日战争时期等。`}</Text>
                    <View style={{borderWidth:0.5,borderColor:'#333',marginTop:20}}/>
                    <TouchableOpacity activeOpacity={1} style={{flexDirection:'row',marginTop:10,justifyContent:'space-between',marginBottom:10}}
                    onPress={()=>this.setState({isVisible:true})}>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{fontSize:18,fontWeight:'bold',color:"#333"}}>目录</Text>
                            <Text style={{color:'#ccc',marginLeft:10}}>已完结  共五章</Text>
                        </View>
                        <AntDesign  style={{ textAlignVertical: 'center', height: "100%",}} name="right" size={20} color="#333" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}