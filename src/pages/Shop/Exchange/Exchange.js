import React, { Component } from 'react';
import { View, ScrollView, Dimensions,Image ,Text} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Water from "../../water"
import SearchBar from 'react-native-searchbar';
import Swiper from 'react-native-swiper';
const { width, height } = Dimensions.get('window');
export default class componentName extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ borderWidth: 0, height: 50, justifyContent: "space-between", flexDirection: 'row', marginHorizontal: width * 0.05 }}>
                    {/* 头部两个ICON */}
                    <SimpleLineIcons onPress={() => { this.props.navigation.goBack() }}
                        style={{ textAlignVertical: 'center' }}
                        name="arrow-left"
                        size={25}
                        color="black"
                    />
                    <SimpleLineIcons onPress={() => this.searchBar.show()}
                        style={{ textAlignVertical: 'center' }}
                        name="magnifier"
                        size={25}
                        color="black"
                    />
                </View>
                <ScrollView style={{ flex: 1, borderWidth: 1 }}>
                    <View style={{ height:height*0.2}}>

<Swiper autoplay style={{height:"100%"}}>

    <Image resizeMode={"stretch"} source={{uri:'http://src.house.sina.com.cn/imp/imp/deal/6f/62/0/575c5b3e518069bbb868a2069ea_p24_mk24.jpg'}} style={{width:'100%',height:'100%'}}></Image>
    <Image resizeMode={"stretch"} source={{uri:'http://www.weishowzy.com/uploads/2019/09/2019091308112738.png'}} style={{width:'100%',height:'100%'}}></Image>

</Swiper>
                    </View>
                    <View style={{borderWidth:1,height:height*0.1}}>
<Text>旧物发布区</Text>
</View>
                    <View style={{ flex: 1 }}>
                        <Water />
                    </View>

                </ScrollView>
                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    //data={items}
                    //handleResults={this._handleResults}
                    showOnLoad={false}
                />
            </View>

        );
    }
}
