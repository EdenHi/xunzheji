/* eslint-disable prettier/prettier */
import React, {Component} from 'react';


import {  StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    DeviceEventEmitter,
    AsyncStorage,
    Share,
    ImageBackground } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {NavigationContext} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {height,width} = Dimensions.get('window')
export default class huati extends Component {
    static contextType = NavigationContext;
    constructor(props){
        super(props)
        this.state = {
            data:[],
            modalVisible:false,
            pic:[],
            title:'',
            //放大显示的图片索引
            currentIndex:0,
            //存放图片的路径
            imgUrls:[],
            isLoding:false,
            denglu_username:'',
        }
    }

//图片点击放大
handleShowAlbum = (index,k)=>{
    const imgUrls =   this.state.data[index].pic.map(s=>({url:s}));
    const currentIndex = k;
    const modalVisible = true;
    this.setState({
        imgUrls,currentIndex,modalVisible,
    });
   }

    get_shuju(){
        fetch('http://8.142.11.85:3000/dongtai/select_tag', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                tag:this.props.route.params.tag
            })
        })
           .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data:responseJson,
                });
            }) .catch((error) => {
                console.error('error',error);
              });
    }

    componentDidMount(){
        this.get_shuju()
        AsyncStorage.getItem('username',(err,result)=>{
            if(!err){
                this.setState({
                    denglu_username:result
                })
            }
        })
    }


    goComment=(v)=>{
        this.context.navigate('Comment',v);
    }


    loding(){
        this.setState({
            isLoding : true,
        });

        setTimeout(() => {
            this.setState({
                isLoding : false,
            });
            this.get_shuju();
        }, 1000);
    }

  
    //更新点赞信息
    update_dianzan(v){
        if(v.dianzan_username === this.state.denglu_username){
            fetch('http://8.142.11.85:3000/dongtai/update_dianzan2', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title_id: v.title_id,
                    }),
                });
        }else {

            fetch('http://8.142.11.85:3000/dongtai/update_dianzan', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title_id: v.title_id,
                        denglu_username:this.state.denglu_username,
                    }),
                });
        }
        this.get_shuju();
    }

onShare = async () => {
    try {
      const result = await Share.share({
        message:
          '是寻商迹哦',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
};

ListEmptyComponent(){
    return(
        <View style={{width,height:height*0.9,justifyContent:'center',alignItems:'center'}}>
            <Text>暂无讨论</Text>
        </View>
    )
}

    renderDate({item,index}){
        return(
            <View key={index} style={{marginTop:10,backgroundColor:'white'}}>
                                        <View style={{marginLeft:width * 0.05,width:width * 0.9}}>
                                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                                    <TouchableOpacity
                                                    onPress={() => {this.context.navigate('people',item.username), 
                                                                AsyncStorage.setItem('Person',item.username,(error)=>{
                                                                    if (!error){
                                                                        console.log('Person保存成功');
                                                                    } else {
                                                                        console.log('保存失败',err);
                                                                    }
                                                                });
                                                            }}
                                                    >
                                                        <Image source={{uri:item.portrait}} style={styles.touxiang}/>
                                                    </TouchableOpacity> 
                                                    <View style={{marginLeft:10}}>
                                                        <Text style={styles.name}>{item.nickname}</Text>
                                                        <Text style={{color:'#aaa',fontSize:12}}>{item.fabiao_time}</Text>
                                                    </View>
                                                </View>
                                                
                                            </View>
                                      <Text style={item.title===''?{height:0}:styles.txt}
                                      ellipsizeMode="tail"
                                      numberOfLines={8}>{item.title}</Text>
                                      <View style={styles.box}>
                                      
                                      {
                                          item.pic.map((v,k)=>{
                                                if (v === null ){
                                                   return ;
                                               }  else if (item.pic.length > 1 && item.pic.length < 5){
                                                   return (
                                                       <View style={styles.box2}  key = {k}>
                                                   <TouchableOpacity
                                                  
                                                  onPress={()=>this.handleShowAlbum(index,k)}
                                                  >
                                                       <Image source={{uri:v}} style={{height:(width * 0.9 - 4) / 2,width:(width * 0.9 - 4) / 2}}/>
                                                   </TouchableOpacity>
                                                   </View>
                                                   );
                                           } else if (item.pic.length >= 5 && item.pic.length <= 9){
                                               return (
                                                   <View style={styles.box2} key = {k}>
                                                   <TouchableOpacity
                                                   
                                                   onPress={()=>this.handleShowAlbum(index,k)}
                                                  >
                                                       <Image source={{uri:v}} style={{height:(width * 0.9 - 7) / 3,width:(width * 0.9 - 7) / 3}}/>
                                                   </TouchableOpacity>
                                               </View>
                                               );
                                           } else {
                                               return (
                                                   <View style={styles.box2} key = {k}>
                                                       <TouchableOpacity
                                                       
                                                       onPress={()=>this.handleShowAlbum(index,k)}
                                                       >
                                                           <Image source={{uri:v}} style={{height:width * 0.9 - 2,width:width * 0.9 - 2}}/>
                                                       </TouchableOpacity>
                                                   </View>
                                               );
                                           }
                                              
                                          })
                                      }
                                       </View>

                                       {/* tag标签 */}
                                       <View style={item.tag ===''?{height:0,width:0}:{flexDirection:'row',marginTop:10,alignItems:'center',backgroundColor:'#FFE6CC',borderRadius:10,width:100,justifyContent:'center',alignItems:'center'}}>
                                           <Text style={{marginLeft:5,paddingTop:5,paddingBottom:5}}>{item.tag}</Text>
                                       </View>

                                       <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around',marginBottom:10}}>
                                            <TouchableOpacity>
                                                <View style={{flexDirection:'row'}}>
                                                    <TouchableOpacity onPress={()=>{this.update_dianzan(item),DeviceEventEmitter.emit('dianzan',1)}}
                                                    >
                                                        <Ionicons
                                                        name={item.dianzan_username === this.state.denglu_username ? 'heart' : 'heart-outline'}
                                                        size={20}
                                                        color={item.dianzan_username === this.state.denglu_username ? 'red' : 'black'}
                                                        />
                                                    </TouchableOpacity> 
                                                    <Text style={{marginLeft:5}}>{item.dianzan}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>this.context.navigate('Comment',item)}>
                                            <View style={{flexDirection:'row'}}>
                                                <Ionicons
                                                name="chatbubble-ellipses-outline"
                                                size={20}
                                                color="black"/>
                                                <Text style={{marginLeft:5}}>{item.counts}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                             onPress={() => {
                                                
                                                this.onShare();
                                              }}
                                            >
                                                <View style={{flexDirection:'row'}}>
                                                    <Ionicons
                                                    name="arrow-redo-outline"
                                                    size={20}
                                                    color="#000"/>
                                                </View>
                                            </TouchableOpacity>
                                       </View>
                                       </View>
                                    </View>
        )
    }

    render() {
        const {modalVisible,imgUrls,currentIndex} = this.state;
        console.log(this.state.data);
        return (
            <View>
                 {/* 顶部标题栏 */}
                 <View style={{flexDirection:"row",alignItems:"center",height:height*0.07,backgroundColor:"#fff"}}> 
                    <TouchableOpacity activeOpacity={1} style={{ }}>
                        <AntDesign onPress={()=>this.props.navigation.goBack()} style={{textAlignVertical:'center',height:"100%",color:"#000" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <View style={{width:width*0.85,marginLeft:"2%",alignItems:'center'}}>
                        <Text style={{fontSize:15,fontWeight:"bold",color:"#000"}}>{this.props.route.params.tag}</Text>
                    </View>
                </View> 

                <FlatList
                style={{height:height*0.9}}
                keyExtractor={(item, index) => (index + '1')}
                data={this.state.data}
                renderItem={this.renderDate.bind(this)}
                ListEmptyComponent={this.ListEmptyComponent.bind(this)}/>

                <Modal animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { this.setState({modalVisible:false});}}>
                    <ImageViewer imageUrls={imgUrls} style = {{flex:1}} index={currentIndex} onClick={() => { this.setState({ modalVisible: false }); }}/>
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
        margin:1,
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
        // backgroundColor:'blue',
        overflow:'hidden',
        borderRadius:15,
        marginTop:10,
    },
    touxiang:{
        height:40,
        width:40,
        borderRadius:50,
        marginTop:10,
    },
    name:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5,
    },
    txt:{
        marginTop:10,
        fontSize:15,
    },
});