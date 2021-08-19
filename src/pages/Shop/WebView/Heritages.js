import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Dimensions, Text, ImageBackground, FlatList } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { State } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window")

const SECTIONS = [
    {
        title: '徽州竹雕',
        title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
        content: '√已选择',
        img: 'https://img0.baidu.com/it/u=2873019793,1197104957&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        title: '徽州竹雕',
        title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
        content: '√已选择',
        img: 'https://img0.baidu.com/it/u=1982611232,328499575&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        title: '徽州竹雕',
        title2: '徽州竹雕是传统雕刻艺术之一，与砖雕，木雕，石雕并称徽州四雕。',
        content: '√已选择',
        img: 'https://img0.baidu.com/it/u=1680309156,3850096561&fm=26&fmt=auto&gp=0.jpg'
    },
];

export default class Heritages extends Component {
    state = {
        activeSections: [],
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    _renderHeader(section, index, isActive, sections) {
        return (

            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={{ borderColor:isActive? "#7cc0c0":"#fff" ,borderWidth:3 ,width:width*0.9,marginHorizontal:width*0.05,borderRadius:10,marginTop:10,elevation:2}}>
                <View style={{ flexDirection: "row",backgroundColor:"#fff",borderRadius:5}}>

                    <Image style={{ width: width * 0.5, height: width * 0.5, borderRadius: 5 }} source={{ uri: SECTIONS[index].img }} />
                    <View style={{ width: width * 0.32, marginLeft: 10, height: width * 0.5, justifyContent: "center" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center",color:"#333333" }}>{section.title}</Text>
                        <Text style={{ fontSize: 13, flexWrap: "wrap", marginTop: 10,color:"#333333" }}>{section.title2}</Text>
                    </View>
                </View>
            </Animatable.View>

        );
    }
    _renderContent(section, i, isActive, sections) {
        return (
            <Animatable.View
                duration={300}
                transition="borderColor"
                style={{ width:width*0.9,marginHorizontal:width*0.05}}>
                <Animatable.Text
                    duration={300}
                    easing="ease-out"
                    animation={isActive ? 'zoomIn' : false}
                    style={{textAlign:"left",fontSize:15,marginLeft:width*0.7,fontWeight:"bold",color:"#333333"}}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }

    render() {
        return (
            <Accordion
                underlayColor={false}
                expandMultiple={true}
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
            
        );
    }
}