import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity,Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {View,Text,Dimensions } from 'react-native';
const {width,height} = Dimensions.get('window')
export default class book_xiangqing_0 extends Component {
    constructor(props){
        super(props)
        this.state = {
            num:1,
            isVisible:false,
            isOpen:false
        }
    }

    componentDidMount(){
        let scrollview = this.refs.scrollview;
        if(this.props.route.params.k){
            scrollview.scrollTo({x:this.props.route.params.k* width,y:0})
            this.setState({isVisible:false,num:this.props.route.params.k+1})
        }
    }

    go_mulu(index){
        let scrollview = this.refs.scrollview;
        scrollview.scrollTo({x:index * width,y:0})
        this.setState({isVisible:false,num:index+1,isOpen:false})
    }

    //打开菜单栏 or  翻页
    go_page(e){
        let scrollview = this.refs.scrollview;
        if(e){
            if(e.nativeEvent.pageX>266){
                scrollview.scrollTo({x:this.state.num * width,y:0})
                this.setState({
                    num:this.state.num+1
                })
            }else if (e.nativeEvent.pageX<133){
                if(this.state.num>1){
                    scrollview.scrollTo({x:(this.state.num-2) * width,y:0})
                    this.setState({
                        num:this.state.num-1
                    })
                }
            }else if(e.nativeEvent.pageX>134&&e.nativeEvent.pageX<266){
                this.setState({
                    isVisible:true
                })
            }
        }
        
    }

    menu(){
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{alignItems:'center',marginTop:10}}>
                    <Text>目录</Text>
                </View>
                
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(0)}>
                    <Text style={{color:'#333333'}}>{`第  一  章：鸦片战争后的中国社会和国际环境`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(43)}>
                    <Text style={{color:'#333333'}}>{`第  二  章：五四运动和中国共产党的诞生`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(83)}>
                    <Text style={{color:'#333333'}}>{`第  三  章：中国共产党创建初期的活动`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(120)}>
                    <Text style={{color:'#333333'}}>{`第  四  章：第一次国共合作的建立和革命新局面的形成`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(143)}>
                    <Text style={{color:'#333333'}}>{`第  五  章：五卅运动和大革命高潮的兴起`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>

            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'rgb(251,250,248)'}} ref="mycomponent">
                <ScrollView horizontal pagingEnabled={true} showsHorizontalScrollIndicator={false}
                ref='scrollview'
                onTouchEnd={(e)=>this.go_page(e)}>
                
                <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'rgb(0,122,195)',fontWeight:'bold',fontSize:20}}>作者序</Text>
                        <Text style={{color:'rgb(81,122,205)',fontSize:25}}>“可怕”的浙商：中国最值得学习的创富榜样</Text>
                    </View>
                </View>

























                </ScrollView>



                <Modal
                // animationType='slide'
                 transparent={true}
                 visible={this.state.isVisible}
                 hardwareAccelerated={true}
                 onRequestClose={() => {
                     this.setState({isVisible:false});
                 }}
                 >

                     
                     <SideMenu
                        menu={this.state.isOpen===false?null:this.menu()}                    //抽屉内的组件
                        isOpen={this.state.isOpen}     //抽屉打开/关闭
                        openMenuOffset={width * 0.4}     //抽屉的宽度
                        hiddenMenuOffset={0}          //抽屉关闭状态时,显示多少宽度 默认0 抽屉完全隐藏
                        disableGestures={false}

                        onChange={                   //抽屉状态变化的监听函数
                        (isOpen) => {
                            // isOpen ? console.log('抽屉当前状态为开着')
                            //     :
                            //     console.log('抽屉当前状态为关着')
                            this.setState({
                            isOpen
                            })
                        }}


                        menuPosition={'right'}     //抽屉在左侧还是右侧
                    >

                    <View style={{flex:1}}>
                        <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,justifyContent: 'space-between',backgroundColor:'#fff' }}>
                            <TouchableOpacity activeOpacity={1} style={{marginLeft:5}}>
                                <AntDesign onPress={() => {this.props.navigation.goBack(),this.setState({isVisible:false})}} style={{ textAlignVertical: 'center', height: "100%", color: "#333333" }} name="left" size={20} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333", }}>{`可怕的浙商`}</Text>                            
                            <TouchableOpacity style={{marginRight:5}}
                            activeOpacity={1} onPress={()=>this.setState({isOpen:true})}>
                                <Ionicons
                                name='menu'
                                size={20} color="#000"/>
                            </TouchableOpacity>

                        </View>
                        <View style={{flex:1}}>   
                            <TouchableOpacity onPress={()=>this.setState({isVisible:false})} style={{height:'100%'}}/>
                        </View>
                        
                     </View>

          
      </SideMenu>
                     
                </Modal>
            </View>
        );
    }
}