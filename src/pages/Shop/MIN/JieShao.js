import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'
import ZuoPin from './ZuoPin'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get("window")

export default class JieShao extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    name:"何士扬",
                    tx:"https://img0.baidu.com/it/u=632352887,1110488995&fm=26&fmt=auto",
                    zuopin:[
                        {

                        }
                    ],
                    jieshao:"何士扬，中国美术学院教授，中国画学博士。现任中国美术学院艺术鉴藏系主任，艺术鉴藏研究所主任，博士生导师，兼任中国人民大学文献书画保护与鉴定研究中心研究员、杭州佛学院首届佛教艺术硕士研究生导师、杭州国画院学术委员，中国美术家协会会员。1981年毕业于福建工艺美术学校，1990年毕业于浙江美术学院中国画系，2009年获中国画理论与实践博士学位。1998年起任厦门大学美术系副主任，2002年调入中国美术学院任教至今。何士扬在他的作品中展开了都市生活空间里年轻族群的形态、状态和姿态，用他的眼光带着我们迸入阳光灿烂的地带，看到新鲜的图景，也感受到都市的脉动。他的画在视觉反应上是直接的，在情调上是明快的，在心理上是健康的，这些看上去不复杂的特点集合在一起，就拉开了在都市主题上他与其他画家不同的面貌。在日下普遍沉郁、晦涩、萎靡的都市图像中，他的画是一种发拨。"
                },
                {
                    name:"范扬",
                    tx:"https://img1.baidu.com/it/u=4232791948,1821944607&fm=26&fmt=auto",
                    jieshao:"范扬，1955年1月生于香港，祖籍江苏南通市。曾任南京师范大学美术学院院长、教授、博士生导师。现为中国国家画院国画院副院长，兼任南京书画院院长，中国艺术研究院中国画院研究员，文化部优秀专家，享受国务院特殊津贴。画家范扬[2] ，范扬，1955年1月生于香港，祖籍江苏南通市。曾任南京师范大学美术学院院长画家范扬作品多次参加海内外各级大型展览，多家专业刊物作为专题介绍。作品《支前》，《苦麓烟峦》等为中国美术馆，江苏省美术馆等展馆收藏。中国画《支前》获第六届全国美展铜奖。擅长中国画，工写兼备。工笔重彩《唐人诗意》组画，设色精当，温润蕴藉。山水画作风淳厚，笔法沉雄，水墨华滋。多作实景写生，外师造化，中得心源，绘事画境，更上层楼。偶作花鸟，师法青藤、白阳，清新俊逸，不让前贤。指导国家画院“范扬工作室”学员的专业培训和学术研究，遍历名山大川，搜尽奇峰，积稿盈囊，归来创作，成果颇丰。画家范扬设计有《太湖》特种邮票、《周恩来同志诞生100周年》纪念邮票、《普陀秀色》 特种邮票。出版印行有《水浒人物全图》，《范扬画集》等。"
                },
                {
                    name:"霍春阳",
                    tx:"https://img1.baidu.com/it/u=2055805123,4217949613&fm=26&fmt=auto",
                    jieshao:"霍春阳，1946年生于河北省清苑县李庄乡李庄村。1969年毕业于天津美术学院，留校任教至今。霍春阳先生70年代中期崭露头角，擅长写意花鸟画。80年代以后进入创作丰收期，并确立了在当代中国画坛的地位，作品多次入选全国美术大展并获奖。霍春阳先生创作的大量作品被人民大会堂、中国美术馆、毛主席纪念堂、钓鱼台国宾馆、中央电视台等单位及国外博物馆收藏，多次出国进行艺术交流，出版个人画集多种。霍春阳倾心元、明、清以来的文人画传统，经过对中国传统文化深刻领悟及对自然之美的悉心体味，潜心追求虚静空灵的艺术境界，以“净化人的心灵”为创作宗旨，是我国传统写意花鸟最具代表性的画家之一。自1976年以巨幅作品《山花烂漫》名闻四方后，霍春阳一直执教于天津美术学院国画系，潜心花鸟画，成为当代最具代表性的写意花鸟大家之一。霍春阳追求画的意境，用简约的形象表达出深沉、博大的意境。绘画中的用笔能传达情性，线条中轻重缓急的变化，更能呈现出一个人的思想、情感乃至学识修养。他的画中能有超凡脱俗的意境，主要得益于自己继承传统和文化上的积淀。在霍春阳看来，传统本身是一个博大的世界，经久弥远，是精神世界永恒的自由王国。对于霍春阳的成功探索，美术界一直评价颇高。当代著名的写意人物画家赵星说：“最简单的一花一草在他的绘画中，都以境界的营造融入了画家已有的思想和情怀，这样的‘因心造境’，显示了画家厚重豁达的性格内涵和人格修养。”中国美术学院中国画系教授、著名画家吴山明说，霍春阳深厚的传统根基，才使他能够由传统而出新，形成有时代特征的个人画风。美术评论家薛永年更是赞叹霍春阳“是在物欲膨胀、生态危机的异化威胁中重建着充满自信的精神家园。”“霍春阳个人画展”举办期间，他应邀到中央美术学院、清华大学美术学院做了题为《中国画笔墨的文化背景》学术讲座。霍春阳说：“举办讲座的目的，就是希望学子们能关注中国的优秀传统文化，所以我的研究生必须熟读《论语》。学生中有人问我，我在中国画史上最崇尚的画家是谁？我说，从当时在美院上学，到现在耳顺之年，不同时期崇尚的画家不一样，最后还是落脚在宋元上，因为它最能体现传统文化精神。中国画的文脉不是来自亚里士多德、柏拉图，它来自国学，来自孔子、孟子、庄子……中国画的根是传统民族文化。”霍春阳在《双清图》题跋中写道：“兴来磨就三长墨，写得芭蕉和梅花。骨格纵然清瘦甚，品高终不染尘埃。”人们都说画如其人，也许，这正是霍春阳画风和人格的最好写照。"
                },
                {
                    name:"程大利",
                    tx:"https://img0.baidu.com/it/u=3618821348,3191669522&fm=26&fmt=auto",
                    jieshao:"程大利，1945年生，1971～1980年，先后任沛县师范学校美术教师和沛县文化馆创作干部。1980年，调江苏人民出版社任美术编辑。1984年，江苏美术出版社成立，任副总编辑。与周积寅、马鸿增合著《江苏历代画家》。1985年加入中国美术家协会。1988年出任江苏美术出版社社长兼总编辑。1992年被江苏省出版系列高级职称评委会评为编审，俟后担任江苏省出版系列高评委委员，兼任《江苏画刊》主编。1998年2月，调人民美术出版社，任副总编辑，5月，任中国美术出版总社副董事长。2000年担任中国美术出版总社总编辑及人民美术出版社总编辑。2006年担任中国画研究院导师。中央文史研究馆馆员。出版有《宾退集——灯下谈艺录》、《师心居随笔》、《笔墨精神与中国文化——在北京大学的讲座》、《师心居笔谭》、《程大利画选》、《程大利山水画集》、《程大利水墨》等。编著《敦煌石窟艺术》（22卷）、《六朝美术史》、《中国民间美术全集》（6卷）、《童归》（8卷）、《百年中国画》、《新中国出版50年》等。"
                },
                {
                    name:"邹平朝",
                    tx:"https://img1.baidu.com/it/u=2192082569,518403466&fm=26&fmt=auto",
                    jieshao:"1997年，为祝贺香港回归，新华社香港分社为邹先生成功地在西九龙中心举办了书画展，展览期间与香港兰亭学会、人物画会的同道作了深刻艺术交谈，推动加深两地艺术界交流。1996年10月1日，先行号列车提速时，创造性地将中国画与金箔结合起来策划制作了纯金纪念火车票，为国家创收了巨大的经济效益。此后相继策划制作了艺术大师李可染金、银牛画，其1997号被南京博物院收藏，静海寺迎香港回归纪念金卡、磁卡门票、江苏国画院成立四十周年院庆纪念金画、世界文化遗产苏州园林纪念品、宁夏回族自治区成立四十周年纪念金卡等十数种有重大社会影响，深受广大消费者、收藏爱好者青睐的艺术品，1999年12月设计制作的金箔工艺品“大理菊”获江苏省工艺美术品、旅游纪念品博览会金奖。2000年发明的金、银扑克牌被国家专利局批准授予专利。2007年，由五色堂画廊上海办事处主办的“李畹、邹平朝书画联展”在上海朵云轩展出并获得很高的评价。"
                },
                {
                    name:"龙瑞",
                    tx:"https://img0.baidu.com/it/u=3838740743,1485579276&fm=26&fmt=auto",
                    jieshao:"龙瑞，1946年生于成都，长在北京。笔名大龙、蜀人。1966年毕业于北京工艺美术学校，之后从事工艺美术设计10余年。1981年毕业于中央美术学院中国画系山水画研究生班，受教于山水画大师李可染先生；毕业后于中国美术家协会工作，1985年调中国画研究院为专职画家，曾为该院业务处副处长，副研究员。2001年任中国艺术研究院美术研究所所长；2003年，改任中国画研究院院长；2006年，中国画研究院更名中国国家画院，龙瑞任院长。现为全国政协委员、中国国家画院名誉院长、国家一级美术师、中国美术家协会中国画艺术委员会主任、中国国际书画艺术研究会会长、文化部高级职称评委会美术组主任、国家有突出贡献中青年专家。"
                }
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={[global.mainColor, "#fff", "#fff"]}>
                    <View style={{ marginHorizontal: width * 0.05, alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "center", }}>
                            <TouchableOpacity activeOpacity={1} style={{width:width*0.06}} onPress={() => this.props.navigation.goBack()}>
                            <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                                {/* <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", width: width * 0.85 }}>主页</Text>
                        </View>
                        <View style={{ height: height * 0.93 }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{  }}>
                                    <View style={{width:width,alignItems:"center"}}>
                                        <Image style={{ width: width * 0.2, height: width * 0.2, borderRadius: 100 }} source={{ uri:this.state.data[this.props.route.params.id].tx }} />
                                    </View>
                                    <View style={{width:width,alignItems:"center"}}>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10 }}>{this.state.data[this.props.route.params.id].name}</Text>
                                    </View>
                                    <View style={{width:width*0.9,padding:5}}>
                                        <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 5 }}>简介</Text>
                                    </View>
                                    <View style={{width:width*0.9,padding:5}}>
                                        <Text style={{ fontSize: 13, lineHeight: 25, marginTop: 5 }}>{this.state.data[this.props.route.params.id].jieshao}</Text>
                                    </View>
                                    
                                </View>
                                <View >
                                    <View style={{ flexDirection: "row",justifyContent: "space-around", marginTop: 10,marginBottom:35 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Zhifu', {price:8890,name:"《高士品茗图》",pic:['https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg']})} activeOpacity={1} style={{ width: width * 0.4, height: width * 0.6,elevation:5,backgroundColor:"#fff",borderRadius:10}}>
                                            <Image style={{ width: width * 0.4, height: width * 0.43, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                                            <View style={{ width: width * 0.4, height: width * 0.1, backgroundColor: "#fff", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                                <Text style={{ marginTop: '5%' ,color:'#333',marginLeft:"2%"}}>《高士品茗图》</Text>
                                                <Text style={{color:'#7cc0c0',width: '100%',marginTop:'5%',marginLeft:"5%"}}>￥8890</Text>
                                            </View>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Zhifu', {price:8890,name:"《高士品茗图》",pic:['https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg']})}   activeOpacity={1}   style={{ width: width * 0.4, height: width * 0.6,elevation:5,backgroundColor:"#fff",borderRadius:10}}>
                                        <Image style={{ width: width * 0.4, height: width * 0.43, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} resizeMode="stretch" source={{ uri: "https://img0.baidu.com/it/u=678895359,1528526055&fm=26&fmt=auto&gp=0.jpg" }} />
                                            <View style={{ width: width * 0.4, height: width * 0.1, backgroundColor: "#fff", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                                <Text style={{ marginTop: '5%' ,color:'#333',marginLeft:"2%"}}>《高士品茗图》</Text>
                                                <Text style={{color:'#7cc0c0',width: '100%',marginTop:'5%',marginLeft:"5%"}}>￥8890</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    
                                
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
