/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

import {View,Text ,Dimensions} from 'react-native';
import WebView from 'react-native-webview';
const {width,height} = Dimensions.get('window')
export default class book_xiangqing extends Component {



    render() {
        return (
            <View style={{flex:1,backgroundColor:'rgb(251,250,248)'}} ref="mycomponent">
                <ScrollView horizontal pagingEnabled={true} showsHorizontalScrollIndicator={false}
                ref={ref => this.scrollRef = ref}
                // onScroll={(e) => {
                //   console.log('e', e.nativeEvent.contentOffset.x);
                // }}
                onTouchStart={()=>console.log('123')}>
                    
                    
                    
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

\t\t\t\t浙江为什么有今天？当时浙江的工业经济基础比较薄弱，但后来发展得很快，老百姓很富裕，社会很稳定，因为老百姓都在创业。这就是市场经济的本质。对浙江经验调研多次后，我提出了“民本经济”的概念，即政府作为创造环境的主体，老百姓和企业才是创造财富的主体。对民营经济来说，创业是基础，创新是关键。政府正确转变职能，百姓就有更多、更大的创新创业空间，浙江的实践是在中国特色社会主义道路上迈出的一大步。我`}</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}