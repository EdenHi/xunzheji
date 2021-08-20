/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,TouchableOpacity,Dimensions,Image,TextInput,ScrollView, ImageBackground } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient'
import Picker from 'react-native-picker';
const {width,height} = Dimensions.get('window')
const year = ["2024年","2023年","2022年","2021年"]
const month = ["01月","02月","03月","04月","05月","06月","07月","08月","09月","10月","11月","12月"]
const day = ["01日","02日","03日","04日","05日","06日","07日","08日","09日","10日","11日","12日","13日","14日","15日","16日","17日","18日","19日","20日","21日","22日","23日","24日","25日","26日","27日","28日","29日","30日","31日"]
export default class dingzhi_xuqiu extends Component {
    constructor(props){
        super(props)
        this.state = {
            isCailiao:false,
            isXiangmu0:false,
            isXiangmu1:false,
            isXiangmu2:false,
            isGuige:false,
            isBaozhuang0:false,
            isBaozhuang1:false,
            isBaozhuang2:false,
            year:'',
            month:'',
            day:'',
        }
    }

    //判断可定制项目是否被选中
    isXiangmu(k){
        const {isXiangmu0,isXiangmu1,isXiangmu2} =this.state
        if(k===0){
            if(isXiangmu0===false){
                this.setState({isXiangmu0:true,isXiangmu1:false,isXiangmu2:false})
            }else{
                this.setState({isXiangmu0:false})
            }
        }
        if(k===1){
            if(isXiangmu1===false){
                this.setState({isXiangmu0:false,isXiangmu1:true,isXiangmu2:false})
            }else{
                this.setState({isXiangmu1:false})
            }
        }
        if(k===2){
            if(isXiangmu2===false){
                this.setState({isXiangmu0:false,isXiangmu1:false,isXiangmu2:true})
            }else{
                this.setState({isXiangmu2:false})
            }
        }
    }

    //判断定制规格是否被选中
    isGuige(){
        const {isGuige} =this.state
        if(isGuige===false){
            this.setState({isGuige:true})
        }else{
            this.setState({isGuige:false})
        }
    }

    //判断材料是否被选中
    isCailiao(){
        const {isCailiao}=this.state
        //判断材料是否被选中
        if(isCailiao===false){
            this.setState({isCailiao:true})
        }else{
            this.setState({isCailiao:false})
        }
    }

    //判断包装是否被选中
    isBaozhuang(k){
        const {isBaozhuang0,isBaozhuang1,isBaozhuang2} = this.state
        if(k===0){
            if(isBaozhuang0===false){
                this.setState({isBaozhuang0:true,isBaozhuang1:false,isBaozhuang2:false})
            }else{
                this.setState({isBaozhuang0:false})
            }
        }
        if(k===1){
            if(isBaozhuang1===false){
                this.setState({isBaozhuang0:false,isBaozhuang1:true,isBaozhuang2:false})
            }else{
                this.setState({isBaozhuang1:false})
            }
        }
        if(k===2){
            if(isBaozhuang2===false){
                this.setState({isBaozhuang0:false,isBaozhuang1:false,isBaozhuang2:true})
            }else{
                this.setState({isBaozhuang2:false})
            }
        }
    }

    //选择预定的日子
    _year(){
        Picker.init({
            pickerData:year,
            selectedValue:['2021年'],
            wheelFlex:[1],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择年份',
            onPickerConfirm:(year)=>this.setState({year}),
        });
        Picker.show();
    }
    _month(){
        Picker.init({
            pickerData:month,
            selectedValue:['01月'],
            wheelFlex:[1],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择月份',
            onPickerConfirm:(month)=>this.setState({month}),
        });
        Picker.show();
    }

    _day(){
        Picker.init({
            pickerData:day,
            selectedValue:['01日'],
            wheelFlex:[1],
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText:'选择日子',
            onPickerConfirm:(day)=>this.setState({day}),
        });
        Picker.show();
    }



    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient style={{ width: width, height: "100%" }} colors={["#7cc0bf", "#fff", "#fff"]} >
                    <View style={{width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,height}}> 
                        {/* 标题 */}
                        <View style={{ flexDirection: "row", alignItems: "center" ,height: height * 0.07, justifyContent:'space-between' }}>
                            <TouchableOpacity activeOpacity={1} style={{}}>
                                <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff"}}>定制需求</Text>

                                <AntDesign name="left" size={20} color="rgba(0,0,0,0)" />

                        </View>

                        <ScrollView style={{height:height*0.9}} showsVerticalScrollIndicator={false}>
                        
                            {/* 可定制项目 */}
                            <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>可定制项目</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                            style={{marginTop:10}}>
                                <View>
                                    <TouchableOpacity activeOpacity={1} style={{borderRadius:10,borderColor:this.state.isXiangmu0?'orange':'rgba(0,0,0,0)',borderWidth:1}} onPress={()=>this.isXiangmu(0)}>
                                        <Image style={{height:width*0.35,width:width*0.35,margin:2,borderRadius:10}} source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20200805%2Fd160acc7ccc54543ae96306cf689aa1b.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632013127&t=92366525746964222404ebe301bee1ac'}}/>
                                    </TouchableOpacity>
                                    <Text style={{marginTop:5,color:this.state.isXiangmu0===false?'black':'orange'}}>血檀竹节茶架</Text>
                                </View>

                                <View>
                                    <TouchableOpacity activeOpacity={1} style={{borderRadius:10,borderColor:this.state.isXiangmu1?'orange':'rgba(0,0,0,0)',borderWidth:1}} onPress={()=>this.isXiangmu(1)}>
                                        <Image style={{height:width*0.35,width:width*0.35,margin:2,borderRadius:10}} source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20200805%2Fd160acc7ccc54543ae96306cf689aa1b.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632013127&t=92366525746964222404ebe301bee1ac'}}/>
                                    </TouchableOpacity>
                                    <Text style={{marginTop:5,color:this.state.isXiangmu1===false?'black':'orange'}}>玉兰花</Text>
                                </View>

                                <View>
                                    <TouchableOpacity activeOpacity={1} style={{borderRadius:10,borderColor:this.state.isXiangmu2?'orange':'rgba(0,0,0,0)',borderWidth:1}} onPress={()=>this.isXiangmu(2)}>
                                        <Image style={{height:width*0.35,width:width*0.35,margin:2,borderRadius:10}} source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fimages01%2F20200805%2Fd160acc7ccc54543ae96306cf689aa1b.jpeg&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632013127&t=92366525746964222404ebe301bee1ac'}}/>
                                    </TouchableOpacity>
                                    <Text style={{marginTop:5,color:this.state.isXiangmu2===false?'black':'orange'}}>黄杨木摆件</Text>
                                </View>
                                
                            </ScrollView>

                            {/* 定制规格 */}
                            <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>定制规格</Text>
                            <View style={{backgroundColor:'#fff',borderRadius:10,marginTop:10}}>
                                <TouchableOpacity activeOpacity={1} style={{backgroundColor:!this.state.isGuige?'#eee':'orange',width:'33%',height:height*0.05,borderRadius:20,margin:15,justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.isGuige()}>
                                    <Text >自定义</Text>
                                </TouchableOpacity>
                                <TextInput
                                placeholder='自定义输入'
                                style={{borderWidth:0.5,fontSize:14,borderRadius:10,width:'70%',height:35,padding:0,paddingLeft:10,marginBottom:15,marginLeft:15}}
                                />
                            </View>

                            {/* 定制材料 */}
                            <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>定制材料</Text>
                            <View style={{backgroundColor:'#fff',borderRadius:10,marginTop:10}}>
                                <TouchableOpacity activeOpacity={1} style={{backgroundColor:!this.state.isCailiao?'#eee':'orange',width:'33%',height:height*0.05,borderRadius:20,margin:15,justifyContent:'center',alignItems:'center'}}
                                onPress={()=>this.isCailiao()}>
                                    <Text >竹</Text>
                                </TouchableOpacity>
                            </View>

                            {/* 定制图案 */}
                            <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>定制图案</Text>
                            <View style={{backgroundColor:'#fff',borderRadius:10,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity style={{width:width*0.25,height:width*0.25,backgroundColor:'#eee',margin:15,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:16,color:'orange'}}>选择</Text>
                                    <Text>官方图库</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:width*0.25,height:width*0.25,backgroundColor:'#eee',marginTop:15,marginBottom:15,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:16,color:'orange'}}>上传</Text>
                                    <Text>参考图片</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:width*0.25,height:width*0.25,backgroundColor:'#eee',margin:15,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:16,color:'orange'}}>预约</Text>
                                    <Text>设计服务</Text>
                                </TouchableOpacity>
                            </View>
                    
                            {/* 包装要求 */}
                            <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>包装要求</Text>
                            <View style={{backgroundColor:'#fff',borderRadius:10,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity activeOpacity={1} style={{padding:2,margin:11,marginBottom:13,marginTop:13,borderRadius:10,borderWidth:1,borderColor:this.state.isBaozhuang0?'orange':'rgba(0,0,0,0)'}} onPress={()=>this.isBaozhuang(0)}>
                                    <ImageBackground borderRadius={10} style={{width:width*0.25,height:width*0.25,justifyContent:'center',alignItems:'center'}} source={{uri:'https://img0.baidu.com/it/u=3988042386,1218264988&fm=26&fmt=auto&gp=0.jpg'}}>
                                        <Text style={{color:'#fff'}}>通用包装</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{padding:2,marginTop:13,marginBottom:13,borderRadius:10,borderWidth:1,borderColor:this.state.isBaozhuang1?'orange':'rgba(0,0,0,0)'}} onPress={()=>this.isBaozhuang(1)}>
                                    <ImageBackground borderRadius={10} style={{width:width*0.25,height:width*0.25,justifyContent:'center',alignItems:'center'}} source={{uri:'https://img0.baidu.com/it/u=3988042386,1218264988&fm=26&fmt=auto&gp=0.jpg'}}>
                                        <Text style={{color:'#fff'}}>礼盒包装+logo</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{padding:2,margin:11,marginBottom:13,marginTop:13,borderRadius:10,borderWidth:1,borderColor:this.state.isBaozhuang2?'orange':'rgba(0,0,0,0)'}} onPress={()=>this.isBaozhuang(2)}>
                                    <ImageBackground borderRadius={10} style={{width:width*0.25,height:width*0.25,justifyContent:'center',alignItems:'center'}} source={{uri:'https://img0.baidu.com/it/u=3988042386,1218264988&fm=26&fmt=auto&gp=0.jpg'}}>
                                        <Text style={{color:'#fff'}}>包装设计服务</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                    
                            {/* 交付时间 */}
                            <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>交付时间</Text>
                            <View style={{backgroundColor:'#fff',borderRadius:10,marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity onPress={()=>this._year()} activeOpacity={1} style={{backgroundColor:'#eee',width:width*0.23,height:width*0.1,margin:15,flexDirection:'row',alignItems:'center',borderRadius:10}}>
                                    <View  style={{width:'85%',alignItems:'center'}}>
                                        <Text>{this.state.year===''?'年':this.state.year}</Text>
                                    </View>
                                    <Text>▽</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>this._month()} activeOpacity={1} style={{backgroundColor:'#eee',width:width*0.23,height:width*0.1,margin:15,flexDirection:'row',alignItems:'center',borderRadius:10}}>
                                    <View  style={{width:'85%',alignItems:'center'}}>
                                        <Text>{this.state.month===''?'月':this.state.month}</Text>
                                    </View>
                                    <Text>▽</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>this._day()} activeOpacity={1} style={{backgroundColor:'#eee',width:width*0.23,height:width*0.1,margin:15,flexDirection:'row',alignItems:'center',borderRadius:10}}>
                                    <View  style={{width:'85%',alignItems:'center'}}>
                                        <Text>{this.state.day===''?'日':this.state.day}</Text>
                                    </View>
                                    <Text>▽</Text>
                                </TouchableOpacity>
                            </View>

                            {/* 定制数量 */}
                            <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>定制数量</Text>
                            <View style={{backgroundColor:'#fff',borderRadius:10,marginTop:10,marginBottom:10}}>
                                <TextInput
                                    placeholder='请输入数量'
                                    style={{borderWidth:0.5,fontSize:14,borderRadius:10,width:'70%',height:35,padding:0,paddingLeft:10,marginBottom:15,marginLeft:15}}
                                />
                            </View>

                        </ScrollView>

                        <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#7cc0c0',height:'80%',width:'80%'}}>
                                <Text style={{color:'#fff',fontWeight:'bold'}}>下定制需求</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                   
                </LinearGradient>
            </View>
        );
    }
}
