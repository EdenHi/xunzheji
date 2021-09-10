import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const { width, height } = Dimensions.get("window")

export default class ZhenCe2 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "space-between", backgroundColor: global.mainColor }}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                    <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                        {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="sound" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ width, marginHorizontal: width * 0.05 }}>
                        {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{uri:'http://47.100.78.254:3000/public/images/zsb1.jpeg'}} /> */}
                        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold", width: width * 0.9, color: "#333" }}>浙江省出台计划推进文旅高质量发展</Text>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙江日报</Text>
                            <Text style={{ fontSize: 10 }}>|2021-7-13</Text>
                        </View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;如今，家住杭州临安区的陈女士早已习惯了这样的文化生活——在杭州时去浙江图书馆借书，周末回家后将图书归还到临安图书馆。早在今年初，两家图书馆就实现了共享通借通还业务。不仅如此，在临安，文化馆、图书馆、博物馆样样俱全，连村里的文化礼堂都越来越有“文艺范儿”。未来5年里，陈女士还能在“15分钟品质文化生活圈”里享受到更丰富的公共文化资源。近日，省文化和旅游厅印发了《浙江省文化和旅游厅推进文化和旅游高质量发展促进共同富裕示范区建设行动计划（2021-2025年）》（下称《计划》）。《计划》提出，浙江将在“物质富裕、精神富有”上双向发力，到2025年基本建成新时代文化高地、中国最佳旅游目的地、全国文化和旅游融合发展样板地，为全国文化和旅游系统提供可复制、可推广的“浙江经验”。
                            </Text>
                        </View>
                        {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb3.jpeg' }} />
                            <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb1.jpeg' }} /> */}


                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;为推动公共文化服务现代化先行省的建成，《计划》提出了公共文化服务标准2.0版。首先在硬件设施上升级：每个市要有图书馆、文化馆、博物馆、非遗馆和美术馆，实现“市有五馆一院一厅，县有四馆一院，区有三馆，乡镇（街道）有综合文化站，村有农村文化礼堂”的全覆盖。文化设施建成后，如何发挥作用？省文化和旅游厅相关负责人告诉记者，在公共文化服务领域可以引入社会力量，如萧山的“文化管家”运营管理模式，让专业团队来代管、托管场所，为老百姓提供真正需要的服务。
                            </Text>
                        </View>
                        <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>牵住“数智金融”牛鼻子</Text></View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;《计划》还关注基层文艺队伍建设，要求推进乡村文艺团队“三团三社”（合唱团、民乐团、艺术团、文学社、摄影社、书画社）建设，到“十四五”末，“三团三社”数量从如今的3万余支增加到4万支。同时，开展文化示范户和乡村文化能人培育，提升乡村文化的造血功能。《计划》提出，“十四五”期间，浙江将实施促进居民收入十年倍增计划，努力成为旅游富民的省域范例。到2025年，旅游业对国民经济的综合贡献率达19%，农村居民的旅游收入占其可支配收入的比重达13%以上。
                            </Text>
                        </View>
                        <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb2.jpeg' }} />
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;省文化和旅游厅提出，不仅要协调城乡均衡，还要促进区域协调发展，目标将地区人均文化和旅游总收入最高最低倍差缩小到2.1以下。为此，省文化和旅游厅等6部门此前印发了《关于加快推动山区26县旅游业高质量发展的意见》，提出到2025年，实现山区26县旅游总产出、游客总人次年均分别增长5%以上。
                            </Text>
                        </View>
                        <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>统筹区域金融发展</Text></View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;新兴金融中心如何布局？从空间上看，主要是“一城”“一湾”“四带”。“一城”即以杭州国际金融科技中心为龙头建设国际金融科技创新高地；“一湾”指以钱塘江金融港湾为核心打造财富管理高地；“四带”则是联动建设科创金融、绿色金融、普惠金融和开放金融四大特色带。空间布局覆盖全省，意味着浙江要统筹区域金融发展。据悉，截至目前我省已有湖州绿色金融改革创新试验区、衢州绿色金融改革创新试验区、宁波国家保险创新综合试验区、宁波普惠金融改革试验区等7个国务院批准的金融改革试验区，加上一批国家部委和省级试点，基本实现重点领域和关键环节全覆盖，居于全国领先。
                            </Text>
                        </View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;在提升旅游品质的同时，还要丰富旅游业态。浙江争取把舟山、宁波等市列入中国邮轮旅游发展实验区，协调国际、国内邮轮线路延伸至浙江十大海岛公园和滨海景区景点，将邮轮游与海岛游相结合，积极探索海上绿水青山就是金山银山理念旅游转化路径。
                            </Text>
                        </View>
                        {/* <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>打造“凤凰行动”升级版</Text></View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;《规划》提出，全力打造“凤凰行动”升级版。“凤凰行动”启动以来，浙江资本市场实现飞跃。“十三五”期间，浙江新增境内上市公司219家，累计达518家，均保持全国第二。如果算上境外上市公司，则累计达到659家。省地方金融监管局负责人表示，“十四五”要通过资金全过程参与、政策全周期支持和服务全链条保障，力争境内外上市公司达1000家，每年动态保有股份制企业1万家以上、重点上市后备企业1000家以上和报会（交易所）企业100家以上，“打造一批以上市公司为龙头的现代产业集群，促进浙江经济高质量发展。”
                            </Text>
                        </View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;浙江企业将迎来哪些利好？金雪军认为，“全链条”建设是“凤凰行动”升级版的最大特色。“这不光是一个简单的上市工作，还包括股改、再融资、并购等环节，涵盖企业培育到上市之后的全过程。”升级版的“凤凰行动”将更注重“全方位、全要素、全市场、全系统”。除了企业自身推进外，在这个过程中，还需要在企业发展的不同阶段丰富金融机构参与场景，各类金融资源共同发力，不仅助力企业做大做强，也反向推动金融机构自身的发展，实现双赢。而多层次资本市场体系也将得到完善。其中，大力推动上市公司引领高质量发展仍是“凤凰行动”升级版的核心。浙江企业通过与资本市场对接，进一步加强科技创新，提升企业治理水平，最终实现产业引领。
                            </Text>
                        </View> */}
                        {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://47.100.78.254:3000/public/images/zsb4.jpeg' }} /> */}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
