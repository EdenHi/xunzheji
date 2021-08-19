import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Dimensions, Image,TextInput,Animated, Modal,AsyncStorage,
    Easing,DeviceEventEmitter } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import LottieView from 'lottie-react-native';
import {NavigationContext} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import ImagePicker from 'react-native-image-crop-picker';
import randId from '../../components/comment/randId';

const { width, height } = Dimensions.get("window")

export default class discuss extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
            modalVisible: false,
            generalStarCount: 0,
            arr: [],
            // customStarCount: 2.5,
            pingjia:'',
            uuid: randId.uuid(8),
        }
    }
        tianjia() {
            if (this.state.arr != null && this.state.arr.length >= 9) {
                //这里的判断根据所传图片张数定
                return;
            } else {
                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._openPicker()}>
                        <Image source={{ uri: 'http://8.142.11.85:3000/public/images/addimg.png' }} style={{   height: (width - 100) / 3,
        width: (width * 0.84 - 48) / 3, marginLeft: "8%" }} />
                    </TouchableOpacity>
                );
            }
        }
        onGeneralStarRatingPress(rating) {
            this.setState({
              generalStarCount: rating,
            });
          }
          _openPicker() {
            ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: true,
                multiple: true,
                maxFiles: 9,
            }).then(image => {
                console.log('imag', image);
    
                // this.state.arr.push(image)
                // this.setState({
                //     arr:image,
                // });
                const { arr } = this.state;
                for (var i = 0; i < image.length; i++) {
                    arr.push(image[i]);
                }
                this.setState({ arr })
                //     console.log('arr',arr[1])
            });
        }
        
          onCustomStarRatingPress(rating) {
            this.setState({
              customStarCount: rating,
            });
          }
        componentDidMount() {
            Animated.timing(this.state.progress, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
            }).start();
    
           
        }
        _openModalWin = () => {
            this.setState({ modalVisible: true });
        }
    
        _closeModalWin = () => {
            this.setState({ modalVisible: false });
        }
        //上传评价文本
        pingjia_txt(){
            AsyncStorage.getItem('username',(err,result)=>{
                if(!err){
                    fetch('http://8.142.11.85:3000/shop/insert_pingjia_txt', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username:result,
                            pingjia:this.state.pingjia,
                            time:new Date(),
                            pingfen:this.state.generalStarCount,
                            parent_id:this.props.route.params.id,
                            uuid:this.state.uuid,
                            shop_name:this.props.route.params.shop_name
                        }),
                    })
                }
            })
        }
        //上传评价图片
        _fetchImage(image) {
            let url = 'http://8.142.11.85:3000/shop/insert_pingjia_img';
            let head = { uri: image.path, type: image.mime, name: image.path.split('/').pop() };
            let formData = new FormData();
            formData.append('files', head); // 这里的 file 要与后台名字对应。
            formData.append('uuid', this.state.uuid);
            //   formData.append('title',this.state.fayan);
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            })
        }

        //发布成功
        _goget() {
            const arr = this.state.arr;
            DeviceEventEmitter.emit('Shopdetails', 1);
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) { this._fetchImage(arr[i]); }
                this.pingjia_txt();
                this.props.navigation.goBack()
                DeviceEventEmitter.emit('pingjia', 1)
            } else {
                this.pingjia_txt();
                this.props.navigation.goBack()
                DeviceEventEmitter.emit('pingjia', 1)
            }
        }

    render() {
        console.log('11',this.props.route.params);
        const data=this.props.route.params
        return (
            <View>
                <LinearGradient colors={["#7CC0C0","#fff","#fff"]}>
                
                    <View style={{ flexDirection: "row", justifyContent:"space-between",alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05 }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() =>this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <View style={{}}><Text style={{fontSize:15,fontWeight:"bold",color:"#fff"}}>评价</Text></View>
                        <TouchableOpacity
                        onPress={this._openModalWin}
                        activeOpacity={1} style={{}}>
                        <FontAwesome
                                name="send-o"
                                color="#fff"
                                size={20} />
                        </TouchableOpacity>
                        <Modal
                            animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                            transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                            visible={this.state.modalVisible} // 是否显示 modal 窗口
                            onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                            onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                        >
                            <TouchableOpacity

                                style={{ height: '100%', width: '100%', position: "absolute", top: 0, left: 0 }}
                            // onPress={this._closeModalWin}
                            >
                                <View style={styles.modalLayer}>

                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => {

                                        }}
                                    >
                                        <View style={styles.modalContainer}>
                                            <View style={{
                                                width: 150,
                                                height: '45%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <LottieView source={require('../../../animal/success.json')} autoPlay loop progress={this.state.progress} />
                                            </View>
                                            <View style={{
                                                width: '100%',
                                                height: '25%',
                                                alignItems: 'center',

                                            }}>
                                                <Text style={{ fontSize: 20, color: "#7cc0c0" }}>发布成功</Text>
                                            </View>
                                            <TouchableOpacity style={styles.modalButtonStyle}
                                                onPress={() => {
                                                    this._closeModalWin()
                                                    this._goget()
                                                }}

                                            >
                                                <Text style={{ fontSize: 15 }}>确定</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </Modal>
                    </View>
                
                <View style={{height:height*0.93,width:width}}>
                    <View style={{width:width*0.9,marginLeft:width*0.05,backgroundColor:"#fff",height:height*0.9,borderRadius:15,elevation:5}}>
                        < View style={{ flexDirection: "row", marginTop: 10,backgroundColor:"#fff",width:"90%",marginLeft:"5%"}}>
                                <View>
                                    <Image style={{ width: width * 0.25, height: width * 0.25, borderRadius: 10 }} resizeMode="stretch" source={{ uri: data.img }} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ fontWeight: "bold" ,color:"#333333",width:width*0.4}} numberOfLines={1}>{data.shop_name}</Text></View>
                                        <View style={{ marginLeft: width*0.2 }}><Text style={{color:"#7CC0C0"}}>¥ {data.price}</Text></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#808080" ,fontSize:12}}></Text></View>
                                        <View style={{ marginLeft: "65%" }}><Text style={{ color: "#808080" }}>x{data.num}</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={{width:"90%",marginLeft:"5%",height:height*0.1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <Text style={{fontSize:18,fontWeight:"bold",color:"#333333"}}>评分</Text>
                                <View style={{width:"70%"}}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.generalStarCount}
                                    //   reversed
                                    starSize={30}
                                    emptyStarColor="grey"
                                    fullStarColor="yellow"
                                    starPadding={10}
                                    selectedStar={rating => this.onGeneralStarRatingPress(rating)}
                                />
                            </View>
        
        <Text style={styles.instructions}>
          {`${this.state.generalStarCount}.0`}
        </Text>
                            </View>
                            <View style={{width:"90%",marginLeft:"5%",height:height*0.5,backgroundColor:"#f1f1f1",borderRadius:15}}>
                            <TextInput
                                style={{marginLeft:"2%",}}
                                multiline={true}
                                placeholder="推荐给大家..."
                               onChangeText={(pingjia)=>this.setState({pingjia})}
                            />
                            <View style={{// 主轴方向
                            flexDirection: 'row',
                            // 一行显示不下,换一行
                            flexWrap: 'wrap',
                            // 侧轴方向
                            alignItems: 'center', // 必须设置,否则换行不起作用
                        }}>

                            {
                                this.state.arr.map((v, k) => {
                                    return (
                                        <View style={styles.Box} key={k}>
                                            <Image style={{ height: (width - 100) / 3, width: (width * 0.84 - 48) / 3, position: 'relative' }} source={{ uri: v.path }} />
                                            {/* <TouchableOpacity
                                                activeOpacity={0.5}
                                                onPress={() => { arr.splice(k, 1), this.setState({ arr }) }}
                                                style={{ position: 'absolute' }}
                                            >
                                                <AntDesign
                                                    name='closecircle'
                                                    size={20} />
                                            </TouchableOpacity> */}

                                        </View>
                                    );
                                })
                            }
                            {this.tianjia()}
                        </View>

                            </View>
                    </View>
                  
                </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    modalLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContainer: {
        width: 250,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: 15
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    //   },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      Box: {
        marginRight: 5,
        marginBottom: 10,
        height: (width - 100) / 3,
        width: (width * 0.84 - 48) / 3,
        alignItems: 'flex-end',
        marginLeft: width * 0.02
    },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        fontSize:18
      
      },
      star: {
        paddingHorizontal: 6,
        opacity: 0,
      },
      modalLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContainer: {
        width: 250,
        height: 150,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: 15
    },
});

