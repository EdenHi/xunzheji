
import React, { Component } from 'react'
import { View, Image, Dimensions, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions'
const { width, height } = Dimensions.get("window")
export default class JiangRen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={{width:width*0.9,height:height*0.3,elevation:5,marginTop:height*0.02,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:10}}>
                    <Image source={{uri:"https://img1.baidu.com/it/u=3393244626,2513611823&fm=26&fmt=auto&gp=0.jpg"}} style={{width:"100%",height:"70%",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
                    <View style={{width:"100%",height:"30%"}}>
                        <View style={{width:width*0.65,height:"75%",marginLeft:width*0.25,flexDirection:"row"}}>
                            <View style={{width:'60%',height:"100%",justifyContent:"center"}}>
                                <Text style={{fontSize:15,color:"#333",marginLeft:width*0.02}}>黄小建</Text>
                                <Text style={{fontSize:12,color:"#999",marginLeft:width*0.02}}>雕版印刷技艺非遗传承人</Text>
                            </View>
                            <View style={{width:'40%',height:"100%",alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{width:"80%",height:"70%",backgroundColor:"#7cc0c0",elevation:5,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:13,color:"#fff"}}>请他定制</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={{uri:"https://img1.baidu.com/it/u=921504807,57987865&fm=26&fmt=auto&gp=0.jpg"}} style={{width:width*0.22,height:width*0.22,borderWidth:2,borderColor:"#fff",borderRadius:50,position:"absolute",marginLeft:width*0.03,marginTop:height*0.17}}></Image>
                </View>
                <View style={{width:width*0.9,height:height*0.3,elevation:5,marginTop:height*0.02,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:10}}>
                    <Image source={{uri:"https://img1.baidu.com/it/u=3393244626,2513611823&fm=26&fmt=auto&gp=0.jpg"}} style={{width:"100%",height:"70%",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
                    <View style={{width:"100%",height:"30%"}}>
                        <View style={{width:width*0.65,height:"75%",marginLeft:width*0.25,flexDirection:"row"}}>
                            <View style={{width:'60%',height:"100%",justifyContent:"center"}}>
                                <Text style={{fontSize:15,color:"#333",marginLeft:width*0.02}}>黄小建</Text>
                                <Text style={{fontSize:12,color:"#999",marginLeft:width*0.02}}>雕版印刷技艺非遗传承人</Text>
                            </View>
                            <View style={{width:'40%',height:"100%",alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{width:"80%",height:"70%",backgroundColor:"#7cc0c0",elevation:5,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:13,color:"#fff"}}>请他定制</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={{uri:"https://img1.baidu.com/it/u=921504807,57987865&fm=26&fmt=auto&gp=0.jpg"}} style={{width:width*0.22,height:width*0.22,borderWidth:2,borderColor:"#fff",borderRadius:50,position:"absolute",marginLeft:width*0.03,marginTop:height*0.17}}></Image>
                </View>
                <View style={{width:width*0.9,height:height*0.3,elevation:5,marginTop:height*0.02,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:10}}>
                    <Image source={{uri:"https://img1.baidu.com/it/u=3393244626,2513611823&fm=26&fmt=auto&gp=0.jpg"}} style={{width:"100%",height:"70%",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
                    <View style={{width:"100%",height:"30%"}}>
                        <View style={{width:width*0.65,height:"75%",marginLeft:width*0.25,flexDirection:"row"}}>
                            <View style={{width:'60%',height:"100%",justifyContent:"center"}}>
                                <Text style={{fontSize:15,color:"#333",marginLeft:width*0.02}}>黄小建</Text>
                                <Text style={{fontSize:12,color:"#999",marginLeft:width*0.02}}>雕版印刷技艺非遗传承人</Text>
                            </View>
                            <View style={{width:'40%',height:"100%",alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{width:"80%",height:"70%",backgroundColor:"#7cc0c0",elevation:5,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:13,color:"#fff"}}>请他定制</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={{uri:"https://img1.baidu.com/it/u=921504807,57987865&fm=26&fmt=auto&gp=0.jpg"}} style={{width:width*0.22,height:width*0.22,borderWidth:2,borderColor:"#fff",borderRadius:50,position:"absolute",marginLeft:width*0.03,marginTop:height*0.17}}></Image>
                </View>
                <View style={{width:width*0.9,height:height*0.3,elevation:5,marginTop:height*0.02,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:10}}>
                    <Image source={{uri:"https://img1.baidu.com/it/u=3393244626,2513611823&fm=26&fmt=auto&gp=0.jpg"}} style={{width:"100%",height:"70%",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
                    <View style={{width:"100%",height:"30%"}}>
                        <View style={{width:width*0.65,height:"75%",marginLeft:width*0.25,flexDirection:"row"}}>
                            <View style={{width:'60%',height:"100%",justifyContent:"center"}}>
                                <Text style={{fontSize:15,color:"#333",marginLeft:width*0.02}}>黄小建</Text>
                                <Text style={{fontSize:12,color:"#999",marginLeft:width*0.02}}>雕版印刷技艺非遗传承人</Text>
                            </View>
                            <View style={{width:'40%',height:"100%",alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{width:"80%",height:"70%",backgroundColor:"#7cc0c0",elevation:5,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:13,color:"#fff"}}>请他定制</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={{uri:"https://img1.baidu.com/it/u=921504807,57987865&fm=26&fmt=auto&gp=0.jpg"}} style={{width:width*0.22,height:width*0.22,borderWidth:2,borderColor:"#fff",borderRadius:50,position:"absolute",marginLeft:width*0.03,marginTop:height*0.17}}></Image>
                </View>
                <View style={{width:width*0.9,height:height*0.3,elevation:5,marginTop:height*0.02,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:10}}>
                    <Image source={{uri:"https://img1.baidu.com/it/u=3393244626,2513611823&fm=26&fmt=auto&gp=0.jpg"}} style={{width:"100%",height:"70%",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
                    <View style={{width:"100%",height:"30%"}}>
                        <View style={{width:width*0.65,height:"75%",marginLeft:width*0.25,flexDirection:"row"}}>
                            <View style={{width:'60%',height:"100%",justifyContent:"center"}}>
                                <Text style={{fontSize:15,color:"#333",marginLeft:width*0.02}}>黄小建</Text>
                                <Text style={{fontSize:12,color:"#999",marginLeft:width*0.02}}>雕版印刷技艺非遗传承人</Text>
                            </View>
                            <View style={{width:'40%',height:"100%",alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{width:"80%",height:"70%",backgroundColor:"#7cc0c0",elevation:5,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:13,color:"#fff"}}>请他定制</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={{uri:"https://img1.baidu.com/it/u=921504807,57987865&fm=26&fmt=auto&gp=0.jpg"}} style={{width:width*0.22,height:width*0.22,borderWidth:2,borderColor:"#fff",borderRadius:50,position:"absolute",marginLeft:width*0.03,marginTop:height*0.17}}></Image>
                </View>
                <View style={{width:width*0.9,height:height*0.3,elevation:5,marginTop:height*0.02,backgroundColor:"#fff",marginLeft:width*0.05,borderRadius:10}}>
                    <Image source={{uri:"https://img1.baidu.com/it/u=3393244626,2513611823&fm=26&fmt=auto&gp=0.jpg"}} style={{width:"100%",height:"70%",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
                    <View style={{width:"100%",height:"30%"}}>
                        <View style={{width:width*0.65,height:"75%",marginLeft:width*0.25,flexDirection:"row"}}>
                            <View style={{width:'60%',height:"100%",justifyContent:"center"}}>
                                <Text style={{fontSize:15,color:"#333",marginLeft:width*0.02}}>黄小建</Text>
                                <Text style={{fontSize:12,color:"#999",marginLeft:width*0.02}}>雕版印刷技艺非遗传承人</Text>
                            </View>
                            <View style={{width:'40%',height:"100%",alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{width:"80%",height:"70%",backgroundColor:"#7cc0c0",elevation:5,borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={{fontSize:13,color:"#fff"}}>请他定制</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={{uri:"https://img1.baidu.com/it/u=921504807,57987865&fm=26&fmt=auto&gp=0.jpg"}} style={{width:width*0.22,height:width*0.22,borderWidth:2,borderColor:"#fff",borderRadius:50,position:"absolute",marginLeft:width*0.03,marginTop:height*0.17}}></Image>
                </View>
                
                {/* <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img0.baidu.com/it/u=891597252,2888416509&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img2.baidu.com/it/u=3001434889,941154094&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground style={{ width: width * 0.9, height: width * 0.9, marginHorizontal: width * 0.05 ,marginTop:10}} borderRadius={10} source={{ uri: "https://img0.baidu.com/it/u=2899734245,647783329&fm=26&fmt=auto&gp=0.jpg" }}>
                    <View style={{ margin: 15,backgroundColor:"rgba(255,255,255,0.5)",width:width*0.3,height:60,justifyContent:"center",alignItems:"center",borderRadius:10}}>
                        <View style={{ }}><Text style={{ fontSize: 25, fontWeight: "bold" }}>洪建华</Text></View>
                        <View style={{}}><Text style={{ fontSize: 15 }}>徽派雕刻</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Heritage')} style={{width:80,height:30,backgroundColor:global.mainColor,justifyContent:"center",alignItems:"center",borderRadius:10,marginTop:"60%",marginLeft:"75%"}}>
                        <Text style={{color:"#fff"}}>请他定制</Text>
                    </TouchableOpacity>
                </ImageBackground> */}

            </View>
        )
    }
}
