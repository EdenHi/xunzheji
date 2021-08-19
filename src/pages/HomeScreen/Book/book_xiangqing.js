/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image,Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {View,Text ,Dimensions} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Ionicons from 'react-native-vector-icons/Ionicons'
const {width,height} = Dimensions.get('window')
export default class book_xiangqing extends Component {
    constructor(props){
        super(props)
        this.state = {
            num:1,
            isVisible:false,
            isOpen:false
        }
    }

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

    go_mulu(index){
        let scrollview = this.refs.scrollview;
        scrollview.scrollTo({x:index * width,y:0})
        this.setState({isVisible:false})
    }

    menu(){
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={{alignItems:'center',marginTop:10}}>
                    <Text>目录</Text>
                </View>
                
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(2)}>
                    <Text style={{color:'#333333'}}>{`序 四十不惑立潮头`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(5)}>
                    <Text style={{color:'#333333'}}>{`总序 记录一段重要历史`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}>
                    <Text style={{color:'#333333'}}>{`前言 他是一个时代的“标杆`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}>
                    <Text style={{color:'#333333'}}>{`第一篇 创业家`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}>
                    <Text style={{color:'#333333'}}>{`第二篇 战略家`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}>
                    <Text style={{color:'#333333'}}>{`第三篇 创新家`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}>
                    <Text style={{color:'#333333'}}>{`第四篇 哲学家`}</Text>
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
                // onScroll={(e) => {
                //   console.log('e', e.nativeEvent.contentOffset.x);
                // }}
                onTouchEnd={(e)=>this.go_page(e)}>
                    
                    
                    
                    <Image source={require('../../img/book_1.jpg')} style={{height,width}} resizeMode='stretch'/>
                    <View style={{height,width:width*0.9,alignItems:'center',marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text style={{fontSize:20,marginTop:40}}>版权信息</Text>
                        <Text style={{marginTop:60}}>{`书名：鲁冠球：聚能向宇宙
作者：魏江
排版：济南阿古达
ISBN：978-7-111-61734-1
出版社：机械工业出版社
                        
本书由北京华章图文信息有限公司授权北京多看科技有限公司中国大陆地区范围内电子版制作与发行

版权所有·侵权必究`}</Text>
                    </View>
                    
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(0,122,195)',fontWeight:'bold',fontSize:20,marginTop:40}}>丛书推荐序</Text>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>四十不惑立潮头</Text>
                        </View>
                        <Text style={{marginTop:50}}>{`\t\t\t\t改革开放40年之际，浙江大学全球浙商研究院的精兵强将对五位重量级优秀浙商的创业历程与企业家精神进行了专题研究，集结成丛书出版。浙江大学管理学院现任院长魏江教授邀请我为这一套丛书写序，我欣然应允。一来是我曾在浙江大学工作，担任过浙江大学管理学院院长，深知同事们一直致力于“把论文写在祖国大地上”的情怀，这套丛书强调理论紧密联系实际，是一项很好且有意义的研究；二是这套丛书研究的几位浙江企业家以及浙江的企业环境，我非常熟悉。我希望通过对优秀浙商的创新创业历程进行总结，启发和帮助更多的企业家。在这里，我想谈谈我对改革和企业家精神的一些看法。`}</Text>
                        <Text style={{marginTop:20,fontSize:20}}>{`五千精神`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t蓦然回首，中国的改革开放事业已经40周年，经历了从高度集中的计划经济到市场经济、从传统农业经济体到现代工业经济体的双重转型，改革的艰巨性世所罕见。要解决改革过程中面临的巨大挑战，极其需要智慧。40年的成就，显然不是一朝一夕的偶得，而是无数改革者、建设者用他们的勇气、智慧、勤劳坚持奋斗的结果。在这40年的发展中，企业家的作用很重要，比如，浙江企业家自下而上推动改革，虽走过不少弯路，但也取得了历史性的成绩。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text style={{marginTop:20}}>{`\t\t\t\t这套书研究的鲁冠球、宗庆后、沈爱琴等企业家，他们都亲历了40年的改革历程。这一组作品既是梳理和回顾这些具有代表性的企业家的亲身经历，也是我们这个时代的一面镜子，总结这些经验和教训，可以帮助企业家更好地把握方向，不忘初心，持续前进。
                        
\t\t\t\t按照中央的要求，我正在总结40年的改革经验，目前完成了《中国改革开放40年》《与改革同行》《亲历六次中央决议和改革建言的回顾》三部著作。整理这些著作，恰好对我写这篇序言提供了更清晰的思考，这个时候再来回顾浙江企业家的发展历程，也是一件很有意义的事情。我认为，过去几十年来，浙商身上集中体现了中国企业家精神中最优秀的特质——筚路蓝缕、披荆斩棘、勇立潮头。你到任何一个地方，都能找到浙江人，他们善于寻找市场，勤于学习，敢于实践。我认为，浙江人的精神概括起来就是“五千精神”：千辛万苦来创业、千方百计来经营、千山万水找市场、千家万户搞生产、千头万绪抓根本。

\t\t\t\t浙江改革发展与民营经济发展分不开，民营经济在创新中具有活力，这与浙江的“五千精神”分不开。我在兼任浙江大学管理学院院长期间，发起成立了民本经济研究中心，希望总结、推广浙江经验。习近平同志在浙江工作期间，有一次我在浙江大学开会，他知道我和杜润生在杭州，就特意宴请我们两个人。那次，我说“五千精神”集中到一点就是老百姓和企业是创造财富的主体，政府是创造环境的主体，老百姓就可以安心地通过创新创业富起来。老百姓富起来以后，向国家上交的税多了，政府就可以为老百姓提供更多、更好的公共产品。当然，浙江的经验也要提升和创新。我说，浙江精神和经验不能光在浙江分享，还要在全国分享。所以要`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text style={{marginTop:20}}>{`请习书记支持，习书记当场表示支持。我希望浙江的“五千精神”能够在全国推广，能够在全国生根发芽。`}</Text>
                        <Text style={{marginTop:20,fontSize:20}}>{`民本经济`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t1956年，我在《人民日报》发表了署名文章《企业要有一定的自主权》。当时，我还在第一机械工业部（以下简称“一机部”）工作，部里的招待所长期人满为患，其源头在于企业缺乏自主权，只能“跑部钱进”。我经常到各地调研，看到了一些经验，也看到了很多问题。我经常讲一个故事，沈阳有两个相邻的工厂，一个变压器厂（隶属一机部），一个冶炼厂（隶属冶金部），都是政府行政主导的企业，变压器厂需要大量的铜，由一机部从云南等地调到沈阳，而冶炼厂生产的铜则由冶金部从沈阳调往全国各地。一墙之隔的两个厂由于行政主导，没有市场机制，造成资源的极大浪费。现在听起来挺可笑，但当时就是那样。

\t\t\t\t浙江为什么有今天？当时浙江的工业经济基础比较薄弱，但后来发展得很快，老百姓很富裕，社会很稳定，因为老百姓都在创业。这就是市场经济的本质。对浙江经验调研多次后，我提出了“民本经济”的概念，即政府作为创造环境的主体，老百姓和企业才是创造财富的主体。对民营经济来说，创业是基础，创新是关键。政府正确转变职能，百姓就有更多、更大的创新创业空间，浙江的实践是在中国特色社会主义道路上迈出的一大步。我们过去搞计划经济，政府是创造财富的主体，纳税人的钱集中到政府，政府再把这个钱分到各个部门。所以，我认为民本经济是市场经济的基础。我给十八大提出了三条建议，第一条就讲这个。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text style={{marginTop:20}}>{`\t\t\t\t改革已经进入深水区，剩下的都是硬骨头。如何将“市场在资源配置中起决定性作用”这句话落到实处，如何实现产权保护，如何发挥企业家精神，都需要大胆探索。其中，政府需要坚持三个创新：一是坚持人民群众是创造财富的主体的理念；二是坚持“非禁即入”的理念，法律不禁止的，企业都可以干；三是坚持依法行政的理念，政府按照法律授权干好应当做的事情，不能有随意性。`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t了解过去，才能更好地把握未来。40年来，几乎所有重要改革的决议进程，我都不同程度地参与，提出建言，因此对改革的整个历程，我了解得相对多一些。改革开放以后最大的变化是什么？最大的财富是什么？我认为概括起来就是实现四个方面的转变：从以阶级斗争为纲转向以经济建设为中心；从计划经济转向市场经济；从封闭转向全面开放；从人治转向法治。这个转变过程是长期的，不能说一下子就转变完成。党的十八大以来，我国的改革事业肯定会在过去的难点基础上有更大突破和更大作为。`}</Text>
                        <Text style={{marginTop:20,fontSize:20}}>{`进无止境`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t改革推动开放，开放倒逼改革。市场经济催生了企业家群体，企业家也在促进市场经济发展。“广大非公有制经济人士要准确把握我国经济发展大势，提升自身综合素质，完善企业经营管理制度，激发企业家精神，发挥企业家才能，增强企业内在活力和创造力，推动企业不断取得更新更好发展。”“保护企业家精神，支持企业家专心创新创业。”“我们全面深化改革，就要激发市场蕴藏的活力。市场活力来自于人，特别是来自于企业家，来自于企业家精神。”习近平总书记多次在公开讲话中谈及企业家精神。`}</Text>
                    </View>
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text style={{marginTop:20}}>2</Text>
                    </View>
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text>3</Text>
                    </View>
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text>4</Text>
                    </View>
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text>5</Text>
                    </View>
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05}}>
                        <Text>6</Text>
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


                        menuPosition={'left'}     //抽屉在左侧还是右侧
                    >

                    <View style={{flex:1}}>
                        <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,justifyContent: 'space-between',backgroundColor:'#fff' }}>
                            <TouchableOpacity activeOpacity={1} style={{marginLeft:5}}>
                                <AntDesign onPress={() => {this.props.navigation.goBack(),this.setState({isVisible:false})}} style={{ textAlignVertical: 'center', height: "100%", color: "#333333" }} name="left" size={20} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333", }}>{`鲁冠球：聚能向宇宙`}</Text>                            
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