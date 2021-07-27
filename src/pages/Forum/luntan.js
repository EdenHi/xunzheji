/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
const {height,width} = Dimensions.get('window');
import ImageViewer from 'react-native-image-zoom-viewer';
import {NavigationContext} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LunTan extends Component {
    static contextType = NavigationContext;
    constructor(props){
        super(props);
        this.state = {
            data:[],
            modalVisible:false,
            pic:[],
            title:'',
            //放大显示的图片索引
            currentIndex:0,
            //存放图片的路径
            imgUrls:[],
        };
    }
    //图片点击放大
    handleShowAlbum = (k,index)=>{
        const imgUrls =   this.state.data[k].pic.map(s=>({url:s}));
        const currentIndex = index;
        const modalVisible = true;
        this.setState({
            imgUrls,currentIndex,modalVisible,
        });
       }
    componentDidMount() {
        axios.get('http://192.168.50.117:3000/dongtai/allDongtai')
          .then((json)=>{
            this.setState({
                data:json.data,
            });
            console.log('data',json.data);
          });

      }
      goComment=(v)=>{
       this.context.navigate('Comment',v);
      this.props.navigation.navigate('Fabu')
      }

    render () {
        const {modalVisible,imgUrls,currentIndex} = this.state;
        const navigation = this.context;
        return (
            <View style={{marginLeft:10,marginRight:10}}>
                <View>
                    <ScrollView
                    showsVerticalScrollIndicator={false}>
                        {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Fabu')}>
                            <Text>发布动态</Text>
                        </TouchableOpacity> */}
                    {
                        this.state.data.map((v,k)=>{
                          return (
                            <View key={k} style={{marginTop:20}}>
                                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                    <TouchableOpacity>
                                        <Image source={{uri:v.portrait}} style={styles.touxiang}/>
                                    </TouchableOpacity>

                                    <View style={{marginLeft:10}}>
                                        <Text style={styles.name}>{v.nickname}</Text>
                                        <Text style={{color:'#aaa'}}>{v.fabiao_time}</Text>
                                    </View>
                                </View>
                              <Text style={styles.txt}
                              ellipsizeMode="tail"
                              numberOfLines={8}>{v.title}</Text>
                              <View style={styles.box}>
                              <FlatList
                                contentContainerStyle={styles.listViewStyle}
                                keyExtractor={(item, index) => (index + '1')}
                                data = {v.pic}
                               renderItem={({item,index})=>{
                                 if (item === null ){
                                    return ;
                                }  else if (v.pic.length > 1 && v.pic.length < 5){
                                    return (
                                        <View style={styles.box2}>
                                    <TouchableOpacity   
                                    key = {index}
                                    onPress={()=>this.handleShowAlbum(k,index)}>
                                        <Image source={{uri:item}} style={{height:(width - 32) / 2,width:(width - 32) / 2}}/>
                                    </TouchableOpacity>
                                    </View>
                                    );
                            } else if (v.pic.length >= 5 && v.pic.length <= 9){
                                return (
                                    <View style={styles.box2}>
                                    <TouchableOpacity
                                    key = {index}
                                    onPress={()=>this.handleShowAlbum(k,index)}>
                                        <Image source={{uri:item}} style={{height:(width - 40) / 3,width:(width - 40) / 3}}/>
                                    </TouchableOpacity>
                                </View>
                                );
                            } else {
                                return (
                                    <View style={styles.box2}>
                                        <TouchableOpacity
                                        key = {index}
                                        onPress={()=>this.handleShowAlbum(k,index)}>
                                            <Image source={{uri:item}} style={{height:(width - 24),width:(width - 24)}}/>
                                        </TouchableOpacity>
                                    </View>
                                );
                            }
                               }}/>
                               </View>
                               <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around'}}>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row'}}>
                                            <Ionicons
                                            name="heart-outline"
                                            size={20}
                                            color="black"/>
                                            <Text style={{marginLeft:5}}>{v.dianzan}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>this.goComment(v)}>
                                    <View style={{flexDirection:'row'}}>
                                        <Ionicons
                                        name="chatbubble-ellipses-outline"
                                        size={20}
                                        color="black"/>
                                        <Text style={{marginLeft:5}}>{v.counts}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={{flexDirection:'row'}}>
                                            <Ionicons
                                            name="arrow-redo-outline"
                                            size={20}
                                            color="black"/>
                                        </View>
                                    </TouchableOpacity>
                               </View>

                            </View>
                          );
                        })
                      }
                    </ScrollView>
                    </View>
                <Modal animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { this.setState({modalVisible:false});}}>
                    <ImageViewer imageUrls={imgUrls} style = {{flex:1}} index={currentIndex} />
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box2:{
        flexDirection:'row',
        margin:2,
    },
    photo1:{
        height:100,
        width:100,
        marginRight:5,
    },
    listViewStyle: {
        // 主轴方向
        flexDirection: 'row',
        // 一行显示不下,换一行
        flexWrap: 'wrap',
        // 侧轴方向
        alignItems: 'center', // 必须设置,否则换行不起作用
    },
    box:{
      //  backgroundColor:'blue',
        overflow:'hidden',
        borderRadius:30,
        marginTop:10,
    },
    touxiang:{
        height:50,
        width:50,
        borderRadius:50,
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
    },
    txt:{
        marginTop:10,
        fontSize:18,
    },
});
