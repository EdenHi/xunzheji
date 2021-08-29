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

    componentDidMount(){
        let scrollview = this.refs.scrollview;
        if(this.props.route.params.k){
            scrollview.scrollTo({x:this.props.route.params.k * width,y:0})
            this.setState({isVisible:false,num:this.props.route.params.k+1})
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

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text>{`\t\t\t\t企业家到底是什么？什么样的人才能成为企业家？经济学家黑尔斯曾提出：“企业家是指那些能够抓住经济生活中的机遇，或能够对经济生活中发生的机会做出反应，为其本人和社会创造更多的价值，从而使整个经济体系发生变化的人。”管理大师彼得·德鲁克也指出，企业家是革新者，他们敢于承担风险，有目的地寻求革新的源泉；他们善于捕捉变化，并把变化作为可供开发利用的机会。研究表明，风险承担、目标设定和机会识别能力是帮助企业家实现成功、促进企业成长的关键因素。
                        
\t\t\t\t20世纪60年代的一次钱塘江潮，险些要了鲁冠球的命，而这只是他冒险的开端。自他十几岁创业起，风险就如影随形。早期创办粮食加工厂时，他缺乏经验，更没有风险意识，导致粮食加工厂与社会环境格格不入，在一次设备事故后便自生自灭。后来他搭起自行车修理铺，仔细盘算了成本和政策风险，但却忽略了市场规律，最终也走到了尽头。
                    
\t\t\t\t“失败是创业的最宝贵财富”，前期创业的失败，一方面练就了鲁冠球识别、开发商机的能力；另一方面也提高了他的风险控制能力。直到创办万向节厂之后，他接续达成目标，不断增强了自我效能感，创业信心随之增加。
                        
\t\t\t\t在近50年时间里，鲁冠球在一次次环境变化中抓住商机，成就了如今的万向集团。对他来说，创业一词最初就是指办起一家工厂，后来随着时间的推移，其含义愈加丰富：新战略、新业务、新组织、新管理……每一个“新”都具有创业意义，而万向在持续创业中实现了从个人创业到公司创业的转变。
                        `}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(0,122,195)',fontWeight:'bold',fontSize:20}}>第一章</Text>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>风险：无限风光在险峰</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t风险具有不确定性，是“危险”与“机遇”并存的载体。经典经济学理论认为，企业家勇于承担风险以追求超额利润的行为是推动经济持续增长的原动力。创业研究的学者则提出，风险承担是创业导向的关键维度。企业家敢于冒险的精神，有助于企业把握未来的成长机会，能够帮助他们更好地调动整合可利用的资源来发现和利用机会，从而使其快速抢占市场先机，对其永续经营和价值提升具有重要作用。
                        
\t\t\t\t改革开放是一场积极的冒险，身在其中的企业家无疑是冒险家。那些能够在大风大浪中留下来的人，无不具有过人的胆识和勇谋，他们“想别人之所未想，干别人根本不可能干的事”。不过，仅有冲劲还不够，在成功企业家身上，冒险和谨慎总是共存一体。两者看似矛盾，却能和谐共处，达到平衡状态。

\t\t\t\t在万向人眼中，如果要在“大胆”和“谨慎”中选择一个词形容鲁冠球，他们会不约而同地选择后者。万向集团首席与法务工作室总经理李杰说：“（他）每一步都走得很谨慎踏实，在确定非常安全的时候才会往前迈进。问他失败过没有？他说失败过，只是失败的时候你们没看到。”

\t\t\t\t欧洲经济学家斯蒂芬·韦伯斯特认为，企业家是“一个经营冒险事业的组织者，特别是组织、拥有、管理并承担这一事业全部风险的人”。办一家企业，就意味着与风险同行。企业家无法消灭风险，但能通过一些方法与风险共处。鲁冠球说：“既要控制风险，也要大踏步前进。”`}</Text>
                    </View>
                    
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>难避风险，创业首折戟</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t从1953年开始，我国实施了“一化三改造”的第一个五年计划，以实现工业化为结果导向，完成对农业、手工业和资本主义工商业的社会主义改造，全面贯彻工人阶级思想。在那个热火朝天的年代里，工人是光荣的象征。在这种社会浪潮下，各个农村开展了不同层级的农业合作社。许多农民看到了脱贫的曙光，纷纷以摆脱农民身份，当上工人为荣。鲁冠球也认为，工人比农民的日子好，农民只有求变，否则永无出头之日，但工人的身份却是一条康庄大道。
                        
\t\t\t\t鲁冠球初中肄业时，考虑到家庭贫困，他决定放弃求学。那是他面对人生选择的第一次重大风险决策。没有了书读，鲁冠球经常跟着精通医术的父亲出去给别人看病，但他没有放下工人梦。终于有一天，他听说萧山县铁器社可能要招工。听闻消息，鲁冠球激动不已，通过关系辗转进了铁器社。学徒生涯非常辛苦，每天都要起早贪黑，跟着师傅抡铁锤，经受炉火的高温炙烤。然而，年少的鲁冠球却干得十分起劲，他终于成了工人，有工资可以领，不用再过食不果腹的务农生活。

\t\t\t\t农村家庭出身的他，非常珍惜来之不易的机会。在三年的学徒生活中，他学了一身打铁、操作各类机械工具的技艺。不过，工人之路并不如鲁冠球所想的那样美好，反而异常波折。他即将出师时，国家遇到了三年自然灾害，经济陷入困境，城市人口过剩，铁器社必须精减人员。18岁时，鲁冠球因农村户口被精减回家。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text>{`\t\t\t\t但这一次务工经历，让他坚定了要走出穷乡僻壤的决心。既然进城当工人的机会渺茫，那么就自己创造机会。他回到家，思考如何摆脱面朝黄土背朝天的命运，一边思考、一边观察，继续寻找突破口。只要能有赚钱的机会，他都愿意去尝试，哪怕伴随着未知的风险。
                        
\t\t\t\t有一天，邻居来找鲁冠球，请他帮忙把她家里的麦子扛到镇上去磨成面粉。当鲁冠球到了加工厂以后，看到门前排着10多个米袋子，不远处有几个农民在交谈。鲁冠球过去和他们聊了起来，打听到了一个情况：因为集体经济落后，方圆十几里只有一个粮食加工点，所以周围各个村子里的农民大袋加工粮食要扛着粮食走五六里路来加工，还要排很长的队。

\t\t\t\t这个消息让鲁冠球辗转难眠，他琢磨着白天打探到的情况，想到自己也应该办一个粮食加工厂，这样能为村民带来便利，自己还可以赚钱。接下来的几天里，鲁冠球开始了解米面加工的设备。他心中兴奋不已，在了解具体操作以后，又各种游说父母和亲友，终于凑到了钱，买来了磨面机和碾米机，就这样在萧山盈丰乡盈二村开始了第一次创业。

\t\t\t\t首次创业征程开始后没多久，就走向了终点。原因很简单：年少的鲁冠球只看到了商机，却没看见包围在四周的风险。由于缺乏对国家政策的全面了解，米面厂成了“资本主义的尾巴”，不得不关停。其实在最初，鲁冠球的加工厂进展比较顺利，虽然不能明面挂牌，但村民都很淳朴，这种为自己带来方便实惠的事情自然不会去揭穿。不过有一次，电机由于没有固定住，从木板上掉了下来，差点把伙计砸中。此事在周边传得沸沸扬扬，以讹传讹，被传到县里已经变为“差点出了人命”，加上一些舆论认为这个事情不吉利，很快，加工厂被扣上了“黑工厂”和“走资派”的帽子。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>市场波动，二次创业受挫</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t一变不通，再来一变。第一次创业失败不仅没有挫败鲁冠球的积极性，反而让他越挫越勇，这道理很简单：想要摆脱务农命运的渴望实在太过强烈。他虽然遇到了阻碍，但他做过学徒，有技术；加工厂虽然关闭，但前期也赚了些钱，证明有市场。只要不断总结，继续摸索，创业一定是可行的。鲁冠球有了上一次的教训，不敢再冒进，而是耐心等待机会。
                        
\t\t\t\t此时，三年自然灾害过去，国家非常重视农业生产，全国范围开始大兴水利，钱塘江九号坝正进行海涂围垦工程。一天夜晚，鲁冠球在钱塘江大堤徘徊，看到喧嚣的人流和来往的车辆，驻足思量起来。他发现每天有这么多人力车和自行车来来去去，一定容易损坏，而那里还没有修车铺。他仔细思考，反复琢磨，认为开修车铺的成本和风险都不高，可以试试。

\t\t\t\t每天早晨天刚亮，鲁冠球就在江边的堤坝上支起自行车修理摊，就这样一直守到半夜。修车铺的生意时好时坏，但总体比干农活收入高一些。后来，鲁冠球干脆把修车铺搬到防洪堤外，还在旁边建了个草屋，没有夜潮的晚上就睡在里面，这样不仅方便，如果晚上有人来找他修车，他还能多挣几个钱。

\t\t\t\t王建告诉我们：“那个年代的自行车比现在的轿车还少。萧山城北区12个乡，只有两个人有新自行车，其中一个就是我。”`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text>{`\t\t\t\t我是因为教学工作优秀，省里奖励了50块钱，相当于一个半月工资，又找人借了一点钱，总共157.1元，买了一辆永久牌自行车，用了26年。那时候，鲁冠球给我修过车，但修车赚不了几毛钱。”
                        
\t\t\t\t然而好景不长，第二次创业依然走到了尽头。钱塘江的围垦工程结束以后，车辆和人流显著减少，修车生意自然就冷清下来。鲁冠球在当初决定开修车铺的时候并没有预见到这一点，也没有分析市场规律，只从直觉判断生意不错，就一股脑地放手去做，没看到暗藏的市场风险。眼看着生意每况愈下，他不得不再次收起工具回到家里。

\t\t\t\t接下来的路该怎么走？鲁冠球总结认为，第一次失败是不懂政策风险，第二次失败是不懂市场风险。他没有因此气馁，而是决心下次一定要好好筹划新事业，他认为风险不可怕，但一定要将风险控制在自己可承担的范围内。`}</Text>
                    </View>
                
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>七人成师，万向萌芽</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t20世纪60年代，中国共产党逐步在指导思想上做出调整，开始大规模整顿农业。1961年1月，在中共第八届九中全会后，农业调整工作全面展开，以调动农民积极性，大力发展农村生产力为主要出发点。在农业大生产的指导思想下，村民的积极性非常高，鲁冠球就是其中一员。此时，他刚关停了修车铺，恰好赶上这轮全国“大生产”的热潮。经过前些年的创业起落，他练就了敏锐的洞察力，也就是在这个时候，他再度看到了商机。他发现村民的农具坏了，却难以找到维修的地方，于是结合自己的打铁经验，对农具和机械细细琢磨。
                    
\t\t\t\t很快，鲁冠球就制订了一个计划：他决定开一个铁匠铺子。不过与之前单枪匹马不同，他这次开始找帮手一起做。他找到平日里关系较好的几个同伴。鲁冠球说出自己的想法，大家听了觉得很在理，不仅纷纷赞成，还帮忙筹钱。多年以后，鲁冠球在他的文章里提到：“我总认为，一个人的力量是有限的。如果没有猪八戒、沙和尚，即使有孙悟空的通天本领，唐僧也还是难以完成取经任务。”

\t\t\t\t不久后，一个小小的铁匠铺在童家塘镇开张了，几个成员中也包括鲁冠球的妻子章金妹。铁匠铺主要经营打铁和铁器修理业务，鲁冠球在学徒时期学到的技艺得到了充分发挥，他技术过硬，做出的产品质量高，加上市场需求较大，村民常有农具需要修补，铁匠铺逐渐实现盈利，鲁冠球便还清了粮食加工厂倒闭后的债务。`}</Text>
                    </View>
                
                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(0,122,195)',fontWeight:'bold',fontSize:20}}>第二章</Text>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>动机：相信“相信”的力量</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t鲁伟鼎说：“我和他聊得久了就领悟到，动机很重要。任何时候，他的动机都非常真诚、正气，正气和真诚保证了决定的正确性。所以，人们从外面看起来，认为他很聪明。但很多时候，这都是一种直觉的表现。”动机，即行为触发力，是机会识别的重要前提，也是企业家识别和利用机会的重要驱动力之一，它不仅能引导行为，还能通过行动过程增加持久性。
                        
\t\t\t\t鲁冠球为什么能完成许多不可能的事？是什么激发了他挑战不可能的动机？社会学习理论的创始人班杜拉指出，自我效能是促进动机产生的源头，自我效能的功能主要是调节和控制行为动机，并通过行为调控影响行为结果。一个自我效能高的人，通常富有自信，行事果断，勇于挑战困难，不言放弃。当一个人相信自己有能力完成任务、实现目标的时候，他会选择那些适合自己能力水平又充满挑战的任务，敢于创新、敢于突破，更容易找到最佳路径。就企业家群体来讲，他们往往具有较高的自我效能，这使得他们敢于挑战创业的艰难，具有创新、创业的动机，对未来充满信心，能够坚持把企业办好。
                        
\t\t\t\t不断努力进步是企业家自我效能高的重要体现，那些敢于追求更高目标的创业者，才有可能在进取中突破自我，获得成功，这一点在鲁冠球身上十分明显。一番起伏过后，农机厂凭借质量上乘的产品成了杭州农机公司的供应商，而鲁冠球的自我效能感也在成就中提升，创业底气越来越足。有了这样的自信，他走向更大的挑战，将产品打入更大的市场。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'rgb(81,122,205)',fontSize:25}}>一把犁刀“撕开”市场</Text>
                        </View>
                        <Text style={{marginTop:40}}>{`\t\t\t\t宁围农机厂初创时，第一件列入“计划”的产品是犁刀。当时，犁刀是市场上最紧俏的农具。鲁冠球费尽力气弄到了原料，大规模批量生产产品的愿望即将实现。兴奋之余，他深知产品质量的重要性，所以根本不敢怠慢。在生产过程中，鲁冠球整天待在工厂把关，对这批犁刀的质量把控非常严苛。
                        
\t\t\t\t由于原材料材质上佳，做工精细，工厂的产品在萧山县备受欢迎。既有名气，又有公社帮助，农机厂便挤进了萧山县销售计划。这时，鲁冠球的心思又开始活络起来，一个县的销售不够，他想开拓更大的市场，这个市场就是杭州。这么想着，他驮着一大袋犁刀样品，骑着自行车再次出发，走向一扇更大的门。

\t\t\t\t然而，当鲁冠球来到杭州农机公司推销犁刀时，却被泼了盆冷水。机关办公室里的老干部摊开报纸，捧着茶杯，面对这位陌生人，眼皮都不抬一下，说：“犁刀？不要，我们早就有指定购买厂，你拿回去。”鲁冠球磨破嘴皮求了一整天，对方依旧声称，要严格按计划办事，而且也不相信社队企业能做出像样的产品。

\t\t\t\t遭到如此待遇，鲁冠球心里自然很不是滋味，但为了能让产品打入杭州市场，他还是沉住气，强颜欢笑说：“我这样子驮来驮去，实在太累了，这样，我先放在这，有空你们看看。”说罢，他把犁刀小心翼翼放在一个角落，转身离去。`}</Text>
                    </View>

                    <View style={{height,width:width*0.9,marginLeft:width*0.05,marginRight:width*0.05,justifyContent:'center'}}>
                        <Text>{`\t\t\t\t好东西终究不会被埋没，是金子总会发光。一年的春耕大忙即将来临，原本在计划内的定点单位突然出了状况，生产犁刀的原材料供应不足，工人调配不当，采购计划无法完成。此时，各县又纷纷到农机公司要犁刀。这下把农机公司的人急坏了，如果误了农时，可就成了“政治问题”。这时，农机公司负责人瞥见了角落里躺了一年的那袋落满灰尘的犁刀。他们把灰尘擦掉，打开仔细一看才发现，这批犁刀质量很好，规格相符。于是，农机公司的当务之急就是找到这批犁刀的主人鲁冠球。
                        
\t\t\t\t在县物资局局长陆云宪的陪同下，农机公司负责人匆匆忙忙赶到宁围公社农机厂找到了鲁冠球。刚一见面，负责人就火急火燎地说：“你们的犁刀我们包销了。”善弈者善于抓住对方的心理，善猎者善于捕捉任何一个时机。鲁冠球不慌不忙地说：“可以，但要用原材料来换，每年50吨钢材指标，列入计划。”那位负责人欣然应承。于是，宁围这家社办企业所需的原材料奇迹般地进入了国家计划，厂里的生产一下子迎来了突破性发展，销售成绩也越来越好。农机厂生产的小农具不但供应了整个杭州地区，还渐渐在浙江省有了知名度。各大单位纷纷为宁围农机厂下达指标，支援农村的春耕任务。

\t\t\t\t在计划经济封闭的体制下，鲁冠球不惧资源限制，仍然敏锐地捕捉到了市场开放的亮光，奋力为工厂撕开了一条口子。有了原材料的计划指标，又积极与物资计划部门建立了合作关系，鲁冠球的管理才华初见端倪。他运筹帷幄、调配自如，抢先掌握市场供求，甚至还考虑到为农民员工提供盖房子最需要的线材。厂里的职工终于脱离了求告无门的日子，凝聚力急速加强，大家一心一意在鲁冠球的带领下建设工厂。`}</Text>
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