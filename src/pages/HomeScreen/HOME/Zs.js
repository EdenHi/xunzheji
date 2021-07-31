import React, { Component } from 'react'
import { Dimensions, Image, View,TouchableOpacity,Text } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'

const {width,height} = Dimensions.get("window")

export default class Zs extends Component {
    render() {
        return (
            <View style={{alignItems:"center",width}}>
                 <LinearGradient style={{width,height:800}} colors={["#7cc0bf","#fff","#fff"]}>
                 <View style={{flexDirection:"row",alignItems:"center",width:width*0.9,marginBottom:10,height:height*0.07}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{width:width*0.1,height:width*0.1,color:"white"}}>
                        <AntDesign style={{textAlign:'center',textAlignVertical:'center',height:"100%",color:"white" }} name="left" size={25} color="#000000" />
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>浙商人物介绍</Text>
                    </View>
                    <TouchableOpacity  style={{width:width*0.1,height:width*0.1,color:"white"}}>
                        <AntDesign style={{textAlign:'center',textAlignVertical:'center',height:"100%",color:"white" }} name="sound" size={25} color="#000000" />
                    </TouchableOpacity>
                 </View>
                 <View style={{width,alignItems:"center"}}>
                     <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{width:width*0.9,height:4000,alignItems:"center"}}>
                                <Image style={{width:width*0.9,height:200}} borderRadius={15} source={require("../photos/zsb1.jpeg")}/>
                                 <Text style={{fontSize:16,textAlign:"center",marginTop:10,fontWeight:"bold"}}>浙江商帮为何能在明清时期就纷纷兴起？</Text>
                                 <View style={{flexDirection:"row",marginTop:5}}>
                                   <Text style={{fontSize:10,marginLeft:"-48%"}}>#浙商话题</Text>
                                   <Text style={{fontSize:10}}>|2021-7-30</Text>
                                 </View>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:185,alignItems:"center",marginBottom:5,marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         明代中后期因为全国的交通条件得到了大幅的改善和发展。大规模的远航的商业活动和商品贩卖贩运开始，发展也从而推动了各地的商帮的兴起和发展。尤其是在明代，当时国家统一交通也便利幅员辽阔水路都非常的畅通，也是为大规模的商品的流通提供了非常便利的交通运输条件。我国古代的商帮的诞生，从刚开始的经商风气的形成到最后商品经济的发展一直是一个比较艰难而长久的过程。在封建社会的多种的因素合条件之下，明清时期各地的商帮开始先后形成。
                                     </Text>
                                 </View>
                                 <Image style={{width:width*0.9,height:200,marginTop:10,marginBottom:10}} borderRadius={15} source={require("../photos/zsb3.jpeg")}/>
                                 <Image style={{width:width*0.9,height:200,marginTop:10,marginBottom:10}} borderRadius={15} source={require("../photos/zsb1.jpeg")}/>
                                 
                                 <View><Text style={{fontSize:15,fontWeight:"bold",textAlign:"center"}}>地域化的商帮兴起的背景</Text></View>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center"}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         商业想要发展，首先是要有交通的便利条件和经济发展水平。在明代中后期，当时的交通条件开始大为改观，水路的畅通有利于大规模的远距离的商品的贩运，这一变化也是促进着各地的商帮的兴起。当时的明代幅员辽阔，全国统一水路非常的畅通。
                                     </Text>
                                 </View>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:155,alignItems:"center",marginTop:5,marginBottom:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         明朝更是为了利用贯通南北大运河来转输粮草。在后来的永乐年间，为了对付蒙古的设立，便于军队的往来和粮食的运输，更是修建了很多的道路。是北边与内地的交通更加的便利和畅通。从宿州通向西域的道路也是通过明朝的修筑，也开始变得畅通无阻。到了明朝中后期的时候，全国各地的水陆交通开始有十分大的改观。
                                     </Text>
                                 </View>
                                 <Image style={{width:width*0.9,height:200}} borderRadius={15} source={require("../photos/zsb2.jpeg")}/>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderRadius:5,borderWidth:0.5,width:width*0.9,height:260,alignItems:"center",marginBottom:5,marginTop:10}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         除此之外，当时商品经济生产发展和它的结构也是有利于商人进行群体集团的产生。在明代时期，当时的商业主要经营生产是棉布和丝绸等纺织品的经营。当时的棉花在全国进行种植，南北都是可以的，遍布全国。每年江南要从华北地区输入各种的原材料。当时可以向海内外输入大量丝绸的，只有江南，这就形成了江南丝绸，可以畅销于海内外的单向的一个商品流畅。也就形成了一种垄断垄断的方式。从而促进了商业群体的活动。加之当时的白银货币已经改变了当时的支付手段，提高了结算的效率，从而也就给商业大规模的流通带来了一种便利的条件，有利于商帮群体的产生。
                                     </Text>
                                 </View>
                                 <View><Text style={{fontSize:15,fontWeight:"bold",textAlign:"center",marginTop:10}}>浙东学派经商思想的影响</Text></View>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:110,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         在明清时期由黄宗羲开创的浙东学派。为当时的商品经济和学以致用的文化传统相结合的思想带来了非常成功的思想成果。当时的浙东文化当中的施工使用工商皆本的思想，也是孕育了当时浙江很大一批人强烈的经商意识
                                     </Text>
                                 </View>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:160,alignItems:"center",marginBottom:5,marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                          传统的根深蒂固的重商思想开始慢慢的在这江浙地区延伸开来。也是成为了江浙地区有很多商帮兴起的原因之一。因为深厚的思想是民间经商的基础大大加深也使庞大的商人群体开始产生。当时在江浙地区经世致用思想已经成为了当时江浙人的一种集体无意识的人文精神。他强调个人个体能力公立还是注重实际成为了他们的主导思想。
                                     </Text>
                                 </View>
                                 <Image style={{width:width*0.9,height:200,marginTop:10,marginBottom:10}} borderRadius={15} source={require("../photos/zsb4.jpeg")}/>
                                 <View><Text style={{fontSize:15,fontWeight:"bold",textAlign:"center",marginTop:10}}>较为著名的区域性商人团体</Text></View>
                                 <View style={{marginBottom:5}}><Text style={{fontSize:12,lineHeight:25}}>浙商有湖州商帮，龙游商帮，宁波商帮，萧绍商帮，绍兴商帮（越商），温州商帮，台州商帮，义乌商帮等著名浙商群体。</Text></View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>湖州商帮</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         湖商，是继徽商、晋商之后，在近代中国涌现的具有强烈地域特征的商人群体。南浔镇的丝商在清末迅速崛起，形成了以“四象、八牛、七十二条金狗”为代表的中国近代最大的丝商团体。湖州的丝商在上海举办了大量的绸厂，并控制了码头和租界大半房产。
                                     </Text>
                                 </View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>宁波商帮</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:125,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         宁波商帮是中国十大商帮之一，历史悠久、经济实力雄厚，是唯一一个实现了集团性或整体性近现代化转型的传统商帮。以上海为活动基地，在京、津、汉有很大影响力，且波及全国及世界各地。
                                     </Text>
                                 </View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>龙游商帮</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         主要指历史上今浙江境内金丽衢地区商人的集合，它以原衢州府龙游县为中心。主要经营书业，纸业，珠宝业等。龙游商帮于南宋已初见端倪，于明朝中叶最盛，清代走向衰弱。明万历年间，与徽商、晋商以及江右商人在商场中各霸一方，有“遍地龙游”之谚。
                                     </Text>
                                 </View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>萧绍商帮</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         萧绍地区，即古越文化的核心地区。萧绍商帮是指活跃在萧绍平原上的萧山，绍兴本土企业家群体。萧山和绍兴是浙江经济最为发达的地区，是中国最大的纺织化纤制造基地。萧绍商人以“奔竞不息，勇立潮头，敢为天下先”的气魄闻名于世。
                                     </Text>
                                 </View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>温州商帮</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                     温州早有经商传统，改革开放之后，温州商人更活跃于国内外商界。温商有遍布全国及海外的各级商会以及建有“温州街”、“温州商城”等。温州商人以精明、吃苦耐劳、敢闯敢干、得风气之先著名，即使是在条件较为艰苦的非洲，也能够找到温州商人的身影。
                                     </Text>
                                 </View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>绍兴商帮（越商）</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         绍兴越商，从民国时期逐鹿上海滩、控制金融命脉，到21世纪叱咤风云，享誉海内外。绍兴商帮在全球市场实行资本扩张、并购重组，涌现了大批量的行业巨头和上市公司。越商奉行低调稳健、实业投资的理念，在新兴产业、全球化浪潮中继续勇立潮头，敢为天下先。
                                     </Text>
                                 </View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>台州商人</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         台州早有经商传统，改革开放之后，台州商人更活跃于国内外商界。新台商有遍布全国及海外的各级商会以及建有“台州街”、“台州工业园”、“武汉汉正街”、“浙商新城”等。台州商人以精明、吃苦耐劳、敢闯敢干著名，从东北、到新疆、南到海南，在中国只要有民营经济的地方就有台州商人的身影。
                                     </Text>
                                 </View>
                                 <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} style={{width:width*0.9,marginTop:10,height:26,borderRadius:5}} colors={["#fff","#7cc0bf"]}>
                                      <View style={{flexDirection:"row",borderRadius:10,height:30,width:width*0.9,justifyContent:"space-between",alignItems:"center"}}>
                                          <Text style={{fontSize:13,fontWeight:"bold",height:24,marginLeft:5}}>义乌商人</Text>
                                          <TouchableOpacity  style={{height:24}}>
                                              <AntDesign  style={{ color:"#000" ,height:24}} name="doubleright" size={18} color="#000" />
                                          </TouchableOpacity>  
                                      </View>
                                 </LinearGradient>
                                 <View style={{borderStyle:"dashed",borderRadius:5,borderWidth:0.5,width:width*0.9,height:130,alignItems:"center",marginTop:5}}>
                                     <Text style={{fontSize:13,marginTop:5,lineHeight:25}}>
                                         义乌以制造、经营小商品闻名于世。义乌商人遍布世界各地，人称“蚂蚁商人”。现义乌小商品市场是联合国和世界银行公认的世界最大的小商品集散地、交易中心。义乌商人“鸡毛换糖”的商业行为，被列为浙商标志性事件第一名。义乌商人信奉这这样一个原则：在自己赚钱的同时，想尽一切办法让合作对象也赚钱。 
                                     </Text>
                                 </View>
                        </View>
                     </ScrollView>
                        <View style={{width,height:60,backgroundColor:"white",flexDirection:"row",position:"absolute",marginTop:"175%",alignItems:"center"}} >  
                               <View style={{width:250,height:40,backgroundColor:"#808080",opacity:0.4,marginLeft:20,borderRadius:10}}>
                                   <TextInput style={{marginLeft:20}} placeholder="欢迎发表你的观点"/>
                               </View>
                               <TouchableOpacity  style={{width:width*0.1,height:width*0.1,color:"#7cc0bf",marginLeft:5}}>
                                  <Entypo style={{textAlign:'center',textAlignVertical:'center',height:"100%",color:"#7cc0bf" }} name="heart-outlined" size={25} color="#000000" />
                               </TouchableOpacity>
                               <TouchableOpacity  style={{width:width*0.1,height:width*0.1,color:"#7cc0bf"}}>
                                  <Entypo style={{textAlign:'center',textAlignVertical:'center',height:"100%",color:"#7cc0bf" }} name="export" size={25} color="#000000" />
                               </TouchableOpacity>
                        </View>   
                 </View>
                 </LinearGradient>
            </View>
        )
    }
}
