import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, AsyncStorage, FlatList } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Title,Body,Head,ImageA } from '../../components/storycomponent'
const { width, height } = Dimensions.get("window")

export default class Zs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pinglun: [],
            denglu_username: '',
        }
    }
    // get_pinglun() {
    //     AsyncStorage.getItem('username', (err, result) => {
    //         if (!err) {
    //             this.setState({
    //                 denglu_username: result,
    //             })
    //             fetch('http://8.142.11.85:3000/shouye/get_pinglun', {
    //                 method: 'POST',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     username: result,
    //                     wenzhang_id: this.props.route.params.wenzhang_id
    //                 })
    //             })
    //                 .then((response) => response.json())
    //                 .then((json) => {
    //                     this.setState({
    //                         pinglun: json
    //                     })
    //                 });
    //         }
    //     })
    // }
    // componentDidMount() {
    //     this.get_pinglun();
    // }
    //更新文章评论点赞
    update_dianzan(v) {
        if (v.wenzhang_dianzan === this.state.denglu_username) {
            fetch('http://8.142.11.85:3000/shouye/update_pldianzan2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: v.id,
                }),
            });
        } else {
            fetch('http://8.142.11.85:3000/shouye/update_pldianzan', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: v.id,
                    username: this.state.denglu_username,
                }),
            });
        }
        this.get_pinglun();
    }
    //Flastlist 中间渲染
    renderDate({ item, index }) {
        return (
            <View style={{ marginTop: 10, width: width * 0.9, backgroundColor: "#fff", marginLeft: width * 0.05, padding: 5, borderRadius: 15, elevation: 5, marginBottom: 5 }} key={index}>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: width * 0.025, width: width * 0.85, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={{ uri: item.portrait }} style={{ width: width * 0.08, height: width * 0.08, backgroundColor: 'pink', borderRadius: 50 }} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 14, marginLeft: '2%', fontWeight: 'bold', color: '#6edcf8' }}>{item.nickname}</Text>
                            <Text style={{ marginTop: 10 }}>{item.pinglun}</Text>
                            <Text style={{ color: '#aaa', marginRight: width * 0.2, fontSize: 13, marginTop: 10 }}>{item.pinglun_time}</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 10 }}>
                        <Ionicons
                            name={item.wenzhang_dianzan === this.state.denglu_username ? 'heart' : 'heart-outline'}
                            size={20}
                            color={item.wenzhang_dianzan === this.state.denglu_username ? 'red' : 'black'}
                            onPress={() => this.update_dianzan(item)}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    //Flastlist 顶部渲染
    header() {
        return (
            <View>
                <View style={{ width, alignItems: "center" }}>
                    {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{uri:'http://8.142.11.85:3000/public/images/zsb1.jpeg'}} /> */}
                    <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold" }}>朱耀俊：谱写新丝路传奇 </Text>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙商话题</Text>
                        <Text style={{ fontSize: 10 }}>|2021-7-30</Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        上世纪九十年代中期，义乌市场从以内贸为主向内贸外贸并重转型，数以千计的义乌人敏锐地捕捉到海外市场存在的巨大商机。敢闯敢创的义乌人离开故土，前往不通当地语言、不知当地民俗、不懂当地法律甚至缺医少药、缺水少电、缺衣少食的陌生国度开拓海外市场，将义乌商品源源不断地向世界各地输送，他们堪称是新丝绸之路上的蚂蚁雄兵。义乌市侨联通过义乌籍侨商群体口述方式，将他们海外筚路蓝缕创业历程和开拓精神展现出来、提炼出来，让年轻一代创业者铭记和传承。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://5b0988e595225.cdn.sohucs.com/images/20190416/4bc87cba9dd2432283ec37894cefa748.jpeg' }} />
                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>朱耀俊口述王锦豪整理</Text></View>

                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}></Text></View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center" }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        朱耀俊，1962年3月出生，后宅街道遗安村人。巴西南锥华人联合会副会长，南部非州义乌总商会顾问，巴拉圭华人乒乓球协会顾问及南非ZERO WHOLESALERS与巴拉圭ZERO WHOLESALERS 驻中国代表处首席代表，中国－拉丁美洲商贸协会（巴拉圭）副会长。
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        从义乌到南非再到巴拉圭，凭着一股不服输的劲头，从小到大把商品源源不断输入到异国他乡，创造出国际贸易的“义乌模式”，成功把义乌小商品“植入”拉丁美洲。1997年跨出国门的那一刻起，我始终在商言商、精益求精，把义乌人最好的一面展现给国外朋友。这些年来，我经过磕磕碰碰，摸索前行，最终在国外扎根，并取得了一定地位。我忘不了自己是几千万华人华侨在海外奋斗的一员，也忘不了家乡义乌的情义，兢兢业业做好每一笔生意，无怨无悔助力义乌发展。
                        </Text>
                    </View>
                    <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>奋发图强</Text></View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        我叫朱耀俊，后宅街道遗安村人。祖祖辈辈都是过着“面朝黄土背朝天”的日子。家里有五个人，除了父母之外还有一个弟弟和一个妹妹，我是老大。
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        6岁那年，我就被父母送进小学读书。1977年，16岁的我高中毕业。那时，没地方打工，只好在村里从事农业生产。我一边种田，一边又当村里的电工兼出纳。电工和出纳虽不是村里的主要干部，我好歹也能为村民服务，这样既锻炼了自己的工作能力，也增强了交际技巧。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://5b0988e595225.cdn.sohucs.com/images/20190416/4c6f1a4c470d42f2b45151c5dadb84db.jpeg' }} />
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        当时，国家还没改革开放，但村里已经有人凭借义乌人传统的经商“本能”，开始“小打小闹”，在侍弄庄稼的空隙之余做点事赚个小钱贴补家用。况且遗安与有着“小深圳”美称的洪华毗邻，又与素有“小商品制作基地”北苑街道莲塘村相隔仅五里路，加上廿三里的小商小贩经常来拿货，商业氛围比较浓厚受其影响，我不由得萌发出挑着货郎担走南闯北的念头。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://5b0988e595225.cdn.sohucs.com/images/20190416/5b1b0c48160b42a39fdab2b20a5eb646.jpeg' }} />
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        说真的，因为家里困难，我就千方百计想着出门赚点钱。此时，身边已有人开始做生意。这种生意就是“鸡毛换糖”，用义乌当地的红糖煎熬成生姜糖饼，再配点小百货，用箩筐一挑，到外地去换鸡毛、碎布等物，当然，也换钱。1977年的12月，我毅然告别家人奔向江西贵溪，开启了“鸡毛换糖”的经商之旅。
                        </Text>
                    </View>
                    <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
                        “鸡毛换糖的日子真的很苦，最怕的就是下雪天，路上湿滑，走在泥巴地里一不小心摔倒，箩筐里的小百货散落一地，就得从泥巴里把绣花针、纽扣之类的小商品一个个挑拣出来。东西收拾好了，手也冻得麻木了。这样的滋味，只有经历过的人才能表达出来。
                        </Text>
                    </View>
                    <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://5b0988e595225.cdn.sohucs.com/images/20190416/b33d693950ed4c57a465d3b447a7b660.jpeg' }} />
                    <Head text="鸡毛换糖"/>
                    <Body text="从农历11月出门到次年正月，都要在外地走村串巷鸡毛换糖。因为腊月这段时间是农闲季节，每家每户都要杀鸡过年，鸡毛也很多，一年收鸡毛挣钱的机会也就这几天最好。“在江西，我们都是住在当地的农户家的，早上吃了饭就出门，走到晚上才回来，中午那顿基本上不吃，实在饿了就在小店买点吃的，或者吃点干粮。”"/>
                    <Body text="在当时，“鸡毛换糖”是一件上不了台面的事，用当时的官方话说，就是投机倒把，挖社会主义墙脚，走资本主义道路。随便哪一条，轻则没收货物，重则罚款拘留，或者送回原籍上学习班。不过，这种事情我是没有碰到过，这也算是十分幸运的事情。"/>
                    <Body text="虽然这段经历时间不长，却能丰富自己的阅历。1980年的那个夏天，我想到了卖冰棍，趁个空闲的日子，就批来一些冰棍，骑个自行车走村串巷，吆喝着卖。碰见运气好，一天下来，也能来个七块八块，那时算是一笔大收入了。"/>
                    <Head text="商海沉浮"/>
                    <Body text="1988年的时候，我开始涉足联托运行业。那时，我是为老板打工的，给别人押车送货，有点像电视剧里的保镖。每一次跟车外出，都是提心吊胆的：因为那个时候，一些山区道路抢劫的人还是不乏其人。所幸的是，我一直没有遇上这种倒霉的事情。"/>
                    <Body text="就这样，我在联托运线路上来回奔走，一干就是两年多。渐渐地，我看着别人大把大把地赚钱，心里难免不平衡起来，久而久之也萌发出一种念头：改天自己也办个托运部。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/3b5af9e678494affacfbab2fa2a7d6b6.jpeg"/>
                    <Head text="托运部"/>
                    <Body text="1990年，有了两年托运经历的我，经过一番努力，终于到广州办起了属于自己的托运处。这托运处是专营从广州至郑州的货物运输，由于路途遥远，利润单薄，加上人生地不熟的，这期间还遇到过不少困难。结果经营了一年，还亏了本。"/>
                    <Body text="既然远的不行，那就选择本省范围的。1992年，我又到嘉兴办起托运处。结果，又亏了。接下来几年，我回义乌搞起了副食品批发，生意总算是风生水起，并积累了一些资金，那时的心也像浸在了蜜罐里。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/bb56a2562abe40cbbec780c73a6c5609.jpeg"/>
                    <Head text="试探南非"/>
                    <Body text="1996年，一个偶然机会，我听一位朋友介绍在南非开餐馆的利润可观。我当时心里想，不如到南非去闯荡一番。此时中国与南非还没建交，出国签证很难，我与另两位朋友跑了好几趟北京，才在1997年就手续办妥，终算能成行。 南非，地处非洲大陆最南端，是全非洲54个经济最发达的国家。同时，它也被公认的世界上犯罪率最高的国家之一。而它的首都约翰内斯堡，作为南非的经济中心，有人称它为“南非的上海”。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/4caa4b7e1bf64a728e2d6dca559f9ecd.jpeg"/>
                    <Body text="1990年，有了两年托运经历的我，经过一番努力，终于到广州办起了属于自己的托运处。这托运处是专营从广州至郑州的货物运输，由于路途遥远，利润单薄，加上人生地不熟的，这期间还遇到过不少困难。结果经营了一年，还亏了本。"/>
                    <Head text="南非"/>
                    <Body text="世界各地的商人，很想在那里找个落脚点，以打开自己的市场，赢得赚钱的机会。据说，如今在那里的生意人，大约有20万人。这是我第一次出国，到了约翰内斯堡，发现这里的商品与义乌市场的差价太大了。“这下不发也难了。”三个人踌躇满志，也不考察餐馆了，马上注册公司，决定搞外贸，大干一场，打开南非市场。 一回到义乌，我们就根据在南非考察的日用小商品品类，积极组织货源，决定赚个盆满钵满。一口气组到6个货柜，总价值150万元，通过上海口岸运往南非。那些天，我们焦急又充满希望的等待着货物漂洋过海，从起航起的那个40天，是感觉中最漫长的一段日子。"/>
                    <Head text="寻求客户"/>
                    <Body text="经历过煎熬的等待后，我们要在货物到达之前赶到南非，把货物放进租用的仓库。货到了，接下来的问题就是怎么卖出去？这个看似十分简单的事，在当时却成了大难题。因为当时中南未建交，我们是第一批到南非做生意的大陆商人，拿到的签证有效期只有一个月，不能光明正大地经商，碰见警察还得躲起来。更要命的是，我们三个泥腿子都不会外语，简直是聋子与哑巴，没法与南非人交流。“开始的时候，是我找南非的公司、商店，开着汽车，带上样品，带着翻译，一家又一家地去跑。 一回到义乌，我们就根据在南非考察的日用小商品品类，积极组织货源，决定赚个盆满钵满。一口气组到6个货柜，总价值150万元，通过上海口岸运往南非。那些天，我们焦急又充满希望的等待着货物漂洋过海，从起航起的那个40天，是感觉中最漫长的一段日子。"/>
                    <Body text="后来，总算找到了一位愿意为自己“效劳”的翻译，只能通过他悄悄地做。但这些中介往往从中拿差价渔利，俗叫“搬砖”，却没任何办法，只得任他们“掐”。“最大的障碍，就是不会说英语，相互间语言不通。正因为语言不通，许多内心的话无法向对方表达，生意自然就难以成功。” 一回到义乌，我们就根据在南非考察的日用小商品品类，积极组织货源，决定赚个盆满钵满。一口气组到6个货柜，总价值150万元，通过上海口岸运往南非。那些天，我们焦急又充满希望的等待着货物漂洋过海，从起航起的那个40天，是感觉中最漫长的一段日子。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/4c1074c6e13c4836941f8931ab80162d.jpeg"/>
                    <Head text="朱耀俊在南非"/>
                    <Body text="因此，我就下定决心，要学习英语。于是，我请了翻译当老师，可这翻译不久就走了。走了一个，我就再请一位而且是中国的大学教授。在教授的指导下，我坚持每晚都学习英语。有时，为了记住几个单词，我只好死记硬背，一直坚持学到深夜。"/>
                    <Body text="在信息时代，电脑在生意场上的用途越来越大。所以，我在学习英语的同时，又请了老师，认真地学习电脑的使用。不久，他就学会了用电脑开发票。"/>
                    <Body text="在南非，最大的难题是竞争对手的敌视。在这之前，这里的市场是台湾和香港的商人占据的，商品价格比较高。自从义乌商品进去之后，价格优势非常明显，他们感到了极大威胁，就扬言要做了我们这仨人。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/f3ecd9a051ae443bac5119e94b0ed22b.jpeg"/>
                    <Body text="还别说有一次，这帮人真的雇了当地人拿着冲锋枪过来。 想起这些事，我真是心有余悸。在南非最大的威胁就是安全没有保障，那里治安乱，老百姓都有枪，弄不好就会出事，所以在那里经商，也就是“脑袋拴在裤腰带上的买卖”。最初到南非，是考虑商品的较大差价，能得到可观的利润，从生意的角度了说是走对了路。但同时，一种整天提心吊胆的生活，又让人恐惧。"/>
                    <Head text="车轮飞了"/>
                    <Body text="义乌有句老话叫，“自手自便”。在国外，没有属于自己的交通工具，出行肯定不方便。所以，我就抓紧学会开汽车。"/>
                    <Body text="1998年11月，我白天刚刚买来一辆汽车，停在家门口。没想到，第二天打开门一看，四个车轮不翼而飞，汽车被固定到一堆砖块上。原来，由于自己不知深浅，租房租到黑人区。那里，可是南非底层平民居住地，治安十分混乱。"/>
                    <Body text="当有了一点小名气后，更成了抢劫者的目标。有好几次，歹徒冲进来，用枪顶着我的脑袋，眼睁睁地看着这些人把钱和货物拿走。这样的经历，大概有过四五回。最厉害的一次，我的一位伙伴被歹徒用塑料袋罩着跪在地上，差点窒息而亡。半年后，这位伙伴连货都不要了，赶紧回到家乡义乌。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/b33de054be024743b79cb7534874733a.jpeg"/>
                    <Body text="虽说南非是被誉为彩虹国家，自然环境很好，是“欧洲的后花园”。但在那段时间，我连有好景不敢去游览，做生意也是战战兢兢。 其实，开车找客户的经历有很多。我记得自己为了打开销路，一路开着车登门拜访，有一次将车开到有部队把守的村庄。当地人看到一位黄皮肤的人，都露出惊讶的眼神，感到莫名其妙。后来，我才知道那里是“艾滋病村”。"/>
                    <Body text="还有一次，我是带着地图找客户的。从约翰内斯堡到德班600多公里的路程，自己独自来回奔跑，照着地图的几号路，寻寻觅觅挖掘新客源。现在想想，那时可真有“孤胆英雄”般的勇气。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/11c9c2a7696e4b6584202655b2bed361.jpeg"/>
                    <Body text="在南非，货物会经常性的“失踪”。刚到那里，根本不知道当地的情况。晚上打烊后，我跟我们义乌这边一样将卷拉门锁上完事。不曾想，人家夜里直接将卷拉门撬上，钻进去将货物搬走。连续了好几天，我才发觉这件事。原来，人家是踩点好的，是正儿八经开着卡车来偷东西的。后来，我只好转移仓库，同时将卷拉门锁上后，还在两头加上挂锁，让人家难以撬动。"/>
                    <Head text="南非轶事"/>
                    <Body text="纵然困难重重，我并没有退却,也没有泄气，而是千方百计开拓市场，建立与扩大自己的售销网络。“因为自己背靠义乌大市场，不想发财都难的。”那些年，为了组货、推销，我就在中国与南非之间来回奔波。“那时，我一年中有4个月时间在南非，8个月在中国。”通过我的努力，吸引了不少南非人到中国要货、组货。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/8398b45aa0434039b336a3157036f73f.jpeg"/>
                    <Body text="纵然困难重重，我并没有退却,由于经常两地奔波，难免会闹出一些类似“午夜惊魂”的小插曲。1999年，当央视四台专题宣传义乌的时候，我兴奋地忘了中国与南非的时差。当天晚上北京时间8点，我看到央视中义乌的影象，就情不自禁地打电话给南非的朋友。人家迷迷糊糊地接听着，我才发觉中国跟南非的时差相差6小时，此时人家那边已是深夜两点钟。"/>
                    <Body text="纵然困难重重，我并没有退却,想起当初到南非，我就连买瓶可口可乐也是一件困难的事。有一天，我十分口渴想买瓶可口可乐喝，可是自己不会说英语，就用手指着可口可乐讲。由于比较着急，伸手的过程快了点。商场店员以为自己要打她，害得人家连忙后退，一头雾水地盯着自己"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/497c5bfe507c464a9202a261daa530dc.jpeg"/>
                    <Body text="纵然困难重重，我并没有退却,随着我国与南非建交，形势有了好转，我也渐渐与当地的一些超市老板熟悉了，开始了直接贸易。虽然双方语言不通，那就用手势比划，用计算机打数字讲价钱。相互当起老师，共同提升沟通能力。比如，客商拿起一把牙刷，我就教对方“牙刷”“牙刷”。而对方教我“图布拉西”；拿起花就说“花、花”，对方教我“弗老瓦”。"/>
                    <Body text="纵然困难重重，我并没有退却,滴水可以穿石，我们渐渐地能够交流做生意了，大家彼此脱离了中介，合作更加稳固了。以至于南非老板感慨：“做超市不到义乌，就别做买卖。义乌的品种实在多，每样弄一点，就是一个货柜，很适合我们开超市。”如今，在南非已有50多家连锁店与自己建立贸易合作伙伴。这样，每年就得从义乌发出50个左右集装箱。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/bd58f3d39f6248ecad2db1ce3b8e56d2.jpeg"/>
                    <Body text="纵然困难重重，我并没有退却,毫不夸张地说，我已打通了往约翰内斯堡的生意之路，自己只要在义乌组货，南非那头有专人专管，只要把货运过去就行了。"/>
                    <Head text="挺进巴拉圭"/>
                    <Body text="纵然困难重重，我并没有退却,在海外独自打拼的生涯，让我的商业头脑变得越来越灵活。2008年6月，我决定到南美开拓市场，为此赶赴巴西考察了一段时间，结果发现了与巴西、阿根廷相邻的巴拉圭，这个属贸易“金三角”的国家。"/>
                    <Body text="纵然困难重重，我并没有退却,“明知山有虎，偏向虎山行。”巴拉圭是南美洲唯一没有和我国建交的国家，也是世界仅有二十几个和台湾建交的国家之一。于是，我想起了初到南非的遭遇。当时，南非也未与中国建交，自己不是照样将生意做成了。尽管不可能给我们中国公民发签证，那自己只能采取“借鸡生蛋”的方法，将生意输送到巴拉圭。"/>
                    <ImageA image="http://5b0988e595225.cdn.sohucs.com/images/20190416/fb6fd7b6334c497c94225f8fd0b2310d.jpeg"/>
                    <Head text="巴拉圭"/>
                    <Body text="纵然困难重重，我并没有退却,无国界贸易正慢慢地引起世界贸易的变革。初到巴拉圭，我发现在此经商的台湾人非常多。巴拉圭商人一般较好客，但商业决策迟缓。台湾商人听说我的经历吓坏了，没有巴拉圭签证，一旦被警察抓住，属于非法入境或是偷渡，罚款事小，要是被拘个三天五天的，那可麻烦了。"/>
                    <Body text="纵然困难重重，我并没有退却,后来，我就和台湾商人合作，利用他的身份，将义乌商品销往巴拉圭。2011年，我个人估计有近1亿产值的商品漂洋过海到达巴拉圭。通过合作台湾的伙伴，做起边贸生意，虽说利润薄了些，却能为义乌商品输出国门而高兴。"/>

                
                </View>
                <View style={{ width: width, flexDirection: "row", alignItems: "center", marginTop: "5%" }}>
                    <View style={{ width: 2, height: 28, backgroundColor: "#7cc0c0", marginLeft: width * 0.05 }}></View>
                    <Text style={{ fontSize: 15, color: "#7cc0c0", marginLeft: "2%" }}>相关评论</Text>
                </View>
            </View>
        )
    }
    render() {
        console.log('123', this.state.pinglun);
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient style={{ flex: 1 }} colors={["#7cc0bf", "#fff", "#fff"]}>
                    <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, width: width * 0.9, marginLeft: width * 0.05, justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
                        <TouchableOpacity activeOpacity={1} style={{}}>
                            <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="sound" size={20} color="#000000" />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.pinglun}
                        renderItem={this.renderDate.bind(this)}
                        ListHeaderComponent={this.header.bind(this)}
                    />
                    <View style={{ width, height: height * 0.07, backgroundColor: "white", flexDirection: "row", alignItems: "center", justifyContent: 'space-around' }} >
                        <View style={{ width: 250, height: 40, backgroundColor: "#808080", opacity: 0.4, marginLeft: 20, borderRadius: 20 }}>
                            <TextInput style={{ marginLeft: 20 }} placeholder="欢迎发表你的观点" />
                        </View>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf", marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name="staro" size={25} color="#7cc0bf" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: width * 0.1, height: width * 0.1, color: "#7cc0bf" }}>
                            <Entypo style={{ textAlign: 'center', textAlignVertical: 'center', height: "100%", color: "#7cc0bf" }} name="export" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
