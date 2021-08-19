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
        this.setState({isVisible:false,num:index+1,isOpen:false})
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
                onPress={()=>this.go_mulu(7)}>
                    <Text style={{color:'#333333'}}>{`总序 记录一段重要历史`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(8)}>
                    <Text style={{color:'#333333'}}>{`前言 他是一个时代的“标杆`}</Text>
                    <View style={{borderWidth:1,borderColor:'#eee',marginTop:5}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:10,marginLeft:10,marginRight:10}} activeOpacity={1}
                onPress={()=>this.go_mulu(10)}>
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
                    
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(0,122,195)',fontWeight:'bold',fontSize:20}}>丛书推荐序</Text>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>四十不惑立潮头</Text>
                        </View>
                        <Text style={{marginTop:50}}>{`\t\t\t\t改革开放40年之际，浙江大学全球浙商研究院的精兵强将对五位重量级优秀浙商的创业历程与企业家精神进行了专题研究，集结成丛书出版。浙江大学管理学院现任院长魏江教授邀请我为这一套丛书写序，我欣然应允。一来是我曾在浙江大学工作，担任过浙江大学管理学院院长，深知同事们一直致力于“把论文写在祖国大地上”的情怀，这套丛书强调理论紧密联系实际，是一项很好且有意义的研究；二是这套丛书研究的几位浙江企业家以及浙江的企业环境，我非常熟悉。我希望通过对优秀浙商的创新创业历程进行总结，启发和帮助更多的企业家。在这里，我想谈谈我对改革和企业家精神的一些看法。`}</Text>
                        <Text style={{marginTop:20,fontSize:20}}>{`五千精神`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t蓦然回首，中国的改革开放事业已经40周年，经历了从高度集中的计划经济到市场经济、从传统农业经济体到现代工业经济体的双重转型，改革的艰巨性世所罕见。要解决改革过程中面临的巨大挑战，极其需要智慧。40年的成就，显然不是一朝一夕的偶得，而是无数改革者、建设者用他们的勇气、智慧、勤劳坚持奋斗的结果。在这40年的发展中，企业家的作用很重要，比如，浙江企业家自下而上推动改革，虽走过不少弯路，但也取得了历史性的成绩。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text >{`\t\t\t\t这套书研究的鲁冠球、宗庆后、沈爱琴等企业家，他们都亲历了40年的改革历程。这一组作品既是梳理和回顾这些具有代表性的企业家的亲身经历，也是我们这个时代的一面镜子，总结这些经验和教训，可以帮助企业家更好地把握方向，不忘初心，持续前进。
                        
\t\t\t\t按照中央的要求，我正在总结40年的改革经验，目前完成了《中国改革开放40年》《与改革同行》《亲历六次中央决议和改革建言的回顾》三部著作。整理这些著作，恰好对我写这篇序言提供了更清晰的思考，这个时候再来回顾浙江企业家的发展历程，也是一件很有意义的事情。我认为，过去几十年来，浙商身上集中体现了中国企业家精神中最优秀的特质——筚路蓝缕、披荆斩棘、勇立潮头。你到任何一个地方，都能找到浙江人，他们善于寻找市场，勤于学习，敢于实践。我认为，浙江人的精神概括起来就是“五千精神”：千辛万苦来创业、千方百计来经营、千山万水找市场、千家万户搞生产、千头万绪抓根本。

\t\t\t\t浙江改革发展与民营经济发展分不开，民营经济在创新中具有活力，这与浙江的“五千精神”分不开。我在兼任浙江大学管理学院院长期间，发起成立了民本经济研究中心，希望总结、推广浙江经验。习近平同志在浙江工作期间，有一次我在浙江大学开会，他知道我和杜润生在杭州，就特意宴请我们两个人。那次，我说“五千精神”集中到一点就是老百姓和企业是创造财富的主体，政府是创造环境的主体，老百姓就可以安心地通过创新创业富起来。老百姓富起来以后，向国家上交的税多了，政府就可以为老百姓提供更多、更好的公共产品。当然，浙江的经验也要提升和创新。我说，浙江精神和经验不能光在浙江分享，还要在全国分享。所以要`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text >{`请习书记支持，习书记当场表示支持。我希望浙江的“五千精神”能够在全国推广，能够在全国生根发芽。`}</Text>
                        <Text style={{marginTop:20,fontSize:20}}>{`民本经济`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t1956年，我在《人民日报》发表了署名文章《企业要有一定的自主权》。当时，我还在第一机械工业部（以下简称“一机部”）工作，部里的招待所长期人满为患，其源头在于企业缺乏自主权，只能“跑部钱进”。我经常到各地调研，看到了一些经验，也看到了很多问题。我经常讲一个故事，沈阳有两个相邻的工厂，一个变压器厂（隶属一机部），一个冶炼厂（隶属冶金部），都是政府行政主导的企业，变压器厂需要大量的铜，由一机部从云南等地调到沈阳，而冶炼厂生产的铜则由冶金部从沈阳调往全国各地。一墙之隔的两个厂由于行政主导，没有市场机制，造成资源的极大浪费。现在听起来挺可笑，但当时就是那样。

\t\t\t\t浙江为什么有今天？当时浙江的工业经济基础比较薄弱，但后来发展得很快，老百姓很富裕，社会很稳定，因为老百姓都在创业。这就是市场经济的本质。对浙江经验调研多次后，我提出了“民本经济”的概念，即政府作为创造环境的主体，老百姓和企业才是创造财富的主体。对民营经济来说，创业是基础，创新是关键。政府正确转变职能，百姓就有更多、更大的创新创业空间，浙江的实践是在中国特色社会主义道路上迈出的一大步。我们过去搞计划经济，政府是创造财富的主体，纳税人的钱集中到政府，政府再把这个钱分到各个部门。所以，我认为民本经济是市场经济的基础。我给十八大提出了三条建议，第一条就讲这个。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text >{`\t\t\t\t改革已经进入深水区，剩下的都是硬骨头。如何将“市场在资源配置中起决定性作用”这句话落到实处，如何实现产权保护，如何发挥企业家精神，都需要大胆探索。其中，政府需要坚持三个创新：一是坚持人民群众是创造财富的主体的理念；二是坚持“非禁即入”的理念，法律不禁止的，企业都可以干；三是坚持依法行政的理念，政府按照法律授权干好应当做的事情，不能有随意性。`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t了解过去，才能更好地把握未来。40年来，几乎所有重要改革的决议进程，我都不同程度地参与，提出建言，因此对改革的整个历程，我了解得相对多一些。改革开放以后最大的变化是什么？最大的财富是什么？我认为概括起来就是实现四个方面的转变：从以阶级斗争为纲转向以经济建设为中心；从计划经济转向市场经济；从封闭转向全面开放；从人治转向法治。这个转变过程是长期的，不能说一下子就转变完成。党的十八大以来，我国的改革事业肯定会在过去的难点基础上有更大突破和更大作为。`}</Text>
                        <Text style={{marginTop:20,fontSize:20}}>{`进无止境`}</Text>
                        <Text style={{marginTop:20}}>{`\t\t\t\t改革推动开放，开放倒逼改革。市场经济催生了企业家群体，企业家也在促进市场经济发展。“广大非公有制经济人士要准确把握我国经济发展大势，提升自身综合素质，完善企业经营管理制度，激发企业家精神，发挥企业家才能，增强企业内在活力和创造力，推动企业不断取得更新更好发展。”“保护企业家精神，支持企业家专心创新创业。”“我们全面深化改革，就要激发市场蕴藏的活力。市场活力来自于人，特别是来自于企业家，来自于企业家精神。”习近平总书记多次在公开讲话中谈及企业家精神。`}</Text>
                    </View>
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text >{`\t\t\t\t改革开放40年来，最成功的经验是什么？我想是解放思想。正因为解放了思想，改革才能不断取得新的突破。可以说，40年改革的过程也是解放思想的过程。面向未来40年，浙商要继续发扬坚韧不拔的创业精神、敢为人先的创新精神，对浙商精神赋予新的时代内涵。无论是之前在浙江工作还是后来到中央工作，习近平同志一直对浙商很关心、很重视。他提出，希望广大浙商积极适应新的形势，努力提升自身素质，推动技术创新、制度创新、管理创新和企业文化创新，在市场经济的大潮中完成浙商转型，使浙商群体真正成为具有现代化、市场化、国际化素质的企业家群体。

\t\t\t\t企业的发展是无止境的，解放思想也无止境。浙商是中国民营企业家的重要代表，也是国家创新战略的自觉实践者。世界浙商大会上提出“新时代浙商精神就是浙商的魂，是新时代富有浙江特色的企业家精神”。当前，浙商发展过程遇到了一些困难，但总体稳中有进、稳中有变，浙商要发挥新时代精神，砥砺前行，也期待浙江大学管理学院和全球浙商研究院有更多研究浙商、关注中国企业家群体的创新作品面世，为企业和政府提供新的思路。

\t\t\t\t在我著的《中国改革开放40年》的自序中，我写过下面这段话，与读者共勉，也把这段话作为这篇序言的结尾：

\t\t\t\t春蚕到死丝方尽，蜡炬成灰泪始干。我已经88岁了，为什么仍然要朝九晚五坚持在工作岗位上？就是希望能够帮助新时代的改革开拓者有更多的经验可以借鉴，有更多的方法可以适用。改革是我这一生的追求，也是我这一生的牵挂。唯愿中国的改革开放事业蒸蒸日上，直到永远。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(0,122,195)',fontWeight:'bold',fontSize:20}}>总序</Text>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>记录一段重要历史</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t今年是改革开放40周年的重要时点，我提议编写这套丛书，因为，我认为这是具有历史意义的。如果我们能真实地记录这段经济社会变革的历史，可以为300年、500年、1000年后的人们研究这段历史提供素材，让后人理解1978～2018年的40年间，中国是如何创造人类发展史奇迹的。我认为，自从有人类史以来，还没有一段历史，能够让一个如此贫穷、落后的大国，在短时间内发展成世界强国。记录这一段历史，不仅是中国人自己的事，也是全人类的事。

\t\t\t\t毫无疑问，这段历史是由全体中国人共同创造的。其中，一个重要商帮——浙商，在这段历史中演绎了十分精彩的故事。可以按照这样的逻辑来演绎：“浙江的今天，就是中国的明天”，浙江的发展史是这段历史的重要缩影；浙江作为民营经济的发源地，它的发展史也是中国市场经济的发展史；浙江作为改革开放的先驱地，民营企业家是经济奇迹的重要创造者。因此，记录浙商的创新创业史，不就是从一个最重要的样本角度记录了中国改革开放的历史吗？回顾浙商发展的40年，我总是非常骄傲地告诉全世界的朋友们，浙商作为重要的企业家群体，参与书写了中国经济社会发展史上最浓墨重彩的40年，见证了13亿中国人从站起来，到富起来、强起来的整个过程。浙商是浙江最珍贵的战略资源，浙商的创新创业不仅改变了浙江、改变了中国，也改变了世界。浙商厥功至伟！`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(0,122,195)',fontWeight:'bold',fontSize:20}}>前言</Text>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>他是一个时代的“标杆”</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t1916年9月，孙中山观看钱江大潮后感慨：“世界潮流，浩浩荡荡，顺之则昌，逆之则亡。”50多年后，家住钱塘江畔的鲁冠球在第一次创业失败后，面对汹涌江水，决定奋力再搏。此后鲁冠球抵押祖屋还债，在钱塘江九号坝的围垦工地上搭建修车铺，从为围垦工程修理人力车开始再创业。工地人忙车多，修车到半夜的鲁冠球疲惫不堪，倒头就睡。涨潮时节，夜潮来袭，“正睡得迷迷糊糊时，忽然觉得背上很凉。赶紧起身，睁眼一看，只见四周一片汪洋，原来是潮水涨上来了”。鲁冠球连忙起身，扒开草棚，骑到草棚顶上。幸而当天无风，潮涨无浪，鲁冠球逃过一劫。

\t\t\t\t此后关于鲁冠球的故事，成了中国企业史上的传奇，他从带着其他6位农民和自己积累的4000元家当创办宁围公社农机厂开始，一路把万向带向全球，盛誉无数，被称为企业家中的“不倒翁”、浙企商“教父”、民营企业家中的“常青树”。他带着万向集团，最早在乡镇企业进行产权制度改革，成为中国首家上市的乡镇企业，开创了乡镇企业收购海外上市公司的先河……即使是全球的顶级商业媒体，也对鲁冠球充满赞美之词。鲁冠球登上过《新闻周刊》的封面，《华尔街日报》称他是“国家英雄式人物”。

\t\t\t\t作为中国创新创业研究和教育的先驱机构，浙江大学管理学院在30多年前鲁冠球先生到浙大读进修班时，就开始观察和研究万向和鲁冠球，也为他提供了管理思想和青年人才的支持。今年适逢改革开放40周年的历史节点，`}</Text>
                    </View>
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text>{`我认为：“鲁冠球创业发展的历史，不就是中国改革开放历史的缩影吗？”我便决定花精力来记录和研究鲁冠球的创新创业史。我们的好奇在于：他为什么能够经历改革开放的大风大浪而“稳坐钓鱼台”？他为什么作为从田埂里起来的农民企业家却能引领民营企业发展？他怎么会在国际化的步伐上如此勇立潮头而屹立不倒？
                    
\t\t\t\t对于这些问题的探究，我似乎有点发言权，这也增强了我做这个事情的信心。我最早与万向近距离接触是在1997年，我与项保华老师承担了万向集团的“九五”规划，就在这个规划中，鲁冠球先生提出了“奋斗十年添个零”的目标，提出了“集团化发展，划小核算体系”的思路，提出了多元化战略布局。当时，万向正值高速发展时期，大量“农民工”要进行管理知识的培训，我几乎一个月一次去老厂区讲课。直到2005年前后，我还担任了万向集团国家认定技术中心的顾问，参与了集团技术创新体系的设计，这个体系还获得了国家科技进步奖二等奖，我和我的团队对万向国际化、技术创新等项目的研究成果还发表在《管理世界》期刊，并收录于我的《创新全球化：中国企业的跨越》等著作中。

\t\t\t\t也正是20多年近距离的接触，使得我很早就有了与鲁冠球先生面对面交流的机会。尽管交流次数不多，但我已经对鲁冠球先生有了感性认识，我最深的印象就是两个字：“谦虚”！每当说到万向的发展，他从不归功于己，而是归功于党的领导、改革开放、各界的支持和员工共同的努力。到2000年的时候，浙江大学有幸聘请了鲁冠球先生为MBA研究生特聘导师，我刚好是MBA中心副主任，是我直接联系了鲁冠球先生的秘书，没有想到鲁冠球先生爽快地答应了。由此，他与管理学院建立了更加美好的情谊。`}</Text>
                    </View>

                    <Image source={require('../../img/book_2.jpg')} style={{height,width}} resizeMode='stretch'/>
                    

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