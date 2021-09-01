import React, { Component } from 'react'
import { Dimensions, Image, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';



const { width, height } = Dimensions.get("window")

export default class ZhenCe3 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07, justifyContent: "space-between", backgroundColor: "#7cc0c0" }}>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff", }}>文章详情</Text>
                    <TouchableOpacity activeOpacity={1} style={{}}>
                        <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="sound" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ width, marginHorizontal: width * 0.05 }}>
                        {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{uri:'http://8.142.11.85:3000/public/images/zsb1.jpeg'}} /> */}
                        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10, fontWeight: "bold", width: width * 0.9, color: "#333" }}>浙江省全面深化“证照分离”改革 520项涉企经营许可事项大调整</Text>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Text style={{ fontSize: 10, marginLeft: "-45%" }}>#浙江日报</Text>
                            <Text style={{ fontSize: 10 }}>|2021-7-13</Text>
                        </View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;日前，浙江省政府印发《浙江省深化“证照分离”改革进一步激发市场主体发展活力实施方案》，省市场监管局发布《浙江省涉企经营许可事项改革清单（2021年）》和《中国（浙江）自由贸易试验区涉企经营许可事项改革清单（2021年）》。这标志着我省“证照分离”改革再一次迭代升级，全省520项涉企经营许可事项进行大调整。
                            </Text>
                        </View>
                        {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb3.jpeg' }} />
                            <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb1.jpeg' }} /> */}


                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;据了解，本轮“证照分离”改革，对全省范围内520项涉企经营许可事项按照《浙江省涉企经营许可事项改革清单（2021年）》规定的改革方式、改革举措和事中事后监管措施进行分类管理。其中，直接取消审批、审批改为备案、实行告知承诺的涉企许可总事项达185项，优化审批服务335项。同时，在浙江自由贸易试验区增加实施43项改革试点举措。
                            </Text>
                        </View>
                        <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>牵住“数智金融”牛鼻子</Text></View>
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;为强化改革系统集成和协同配套，浙江还将在实施改革过程中同步推进商事主体登记确认制改革、准入准营“一件事”改革、电子证照多维度运用、打造“证照分离”协同平台、构建信用综合监管体系等创新举措，进一步提升改革能级。
                            </Text>
                        </View>
                        {/* <Image style={{ width: width * 0.9, height: 200 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb2.jpeg' }} />
                        <View style={{ borderStyle: "dashed", borderRadius: 5, borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 10 }}>
                            <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25, marginHorizontal: width * 0.025, color: "#333" }}>
                                &emsp;&emsp;“‘金融大脑’则像一个中枢系统，能实现政府、金融机构、企业、居民等各方面数据的集成共享。”金雪军认为。大数据、云计算、区块链、人工智能等数字技术奠定了体系构建的基石，须同步发展，合力形成完整的金融技术生态系统。最终，不断完善运用场景，将金融与产业链、供应链等实体经济体系深度融合，形成完善的“链网式金融”。建设数智化区域金融运行体系，金雪军有几个提醒，“首先是把握金融体系建设不是孤立的，而是要与供应链、产业链协调对接，加强技术和场景的深度融合，形成完整系统。同时，积极争取数字人民币试点，这对金融大脑构建具有重要推动意义。此外，风控和监管要跟上。”
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
                                &emsp;&emsp;围绕加快打造全国一流新兴金融中心这个任务，各地可在区域金融改革的基础上充分发挥各自的比较优势，从而复制推广一批成熟有效的金融改革经验。推动金融促进高质量发展建设共同富裕示范区是统筹区域金融发展的应有之义。《规划》提出，实施金融帮扶山区26县工作举措，做好政策性、开发性金融机构“共同富裕”等专项融资对接，推动跨越式发展。下一步，我省还将出台金融支持高质量发展建设共同富裕示范区的政策措施。将目光望向更远处，浙江金融业发展也应为推动长三角高质量一体化发展提供有力保障。“这要求我们主动对接上海国际金融中心建设，进一步协同完善长三角金融一体化合作机制，如加强地方金融立法、区域金融改革等方面合作，推进金融联合监管、风险联防联控等机制建设。同时，扩大区域金融高水平双向开放，推进跨境资金流动便利化，提高金融业国际化发展水平。”省地方金融监管局负责人表示。
                            </Text>
                        </View>
                        <View><Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10, color: "#333" }}>打造“凤凰行动”升级版</Text></View>
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
                        {/* <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: 'http://8.142.11.85:3000/public/images/zsb4.jpeg' }} /> */}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
