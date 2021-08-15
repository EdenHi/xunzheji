import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from '../../components/scrollableTabBar';
import Chair from './Chair';
import Table from './Table';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import SearchBar from 'react-native-searchbar';

const items = [
    1337,
    'janeway',
    {
        lots: 'of',
        different: {
            types: 0,
            data: false,
            that: {
                can: {
                    be: {
                        quite: {
                            complex: {
                                hidden: ['gold!'],
                            },
                        },
                    },
                },
            },
        },
    },
    [4, 2, 'tree'],
];

const { width, heihgt } = Dimensions.get('window');
const Props = {};
export default class Page1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            items,
            results: []
        }
        this._handleResults = this._handleResults.bind(this);
        this.SelectMenuItemCallBack = this.SelectMenuItemCallBack.bind(this);
    }
    _handleResults(results) {
        this.setState({ results });
    }

    //点击侧边栏的按钮，回调此函数，关闭menu
    SelectMenuItemCallBack() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    //点击打开侧边栏
    SelectToOpenLeftSideMenu() {
        this.setState({
            isOpen: true,
        })
    }

    render() {
        //侧拉框内容
        const menu =
            <View style={{ backgroundColor: 'grey', flex: 1 }}>
                <TouchableOpacity style={{ borderWidth: 0, height: "10%" }} >
                    <Text style={{ fontSize: 20, textAlignVertical: 'center', textAlign: 'center', borderWidth: 0, marginTop: "15%", borderBottomWidth: 1 }}>桌子</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 0, height: "10%" }}>
                    <Text style={{ fontSize: 20, textAlignVertical: 'center', textAlign: 'center', borderWidth: 0, marginTop: "15%" }} onPress={() => { this.props.navigation.replace('Page2') }} ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 0, height: "10%" }}>
                    <Text style={{ fontSize: 20, textAlignVertical: 'center', textAlign: 'center', borderWidth: 0, marginTop: "15%" }}>桌子</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 0, height: "10%" }}>
                    <Text style={{ fontSize: 20, textAlignVertical: 'center', textAlign: 'center', borderWidth: 0, marginTop: "15%" }}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 0, height: "10%" }}>
                    <Text style={{ fontSize: 20, textAlignVertical: 'center', textAlign: 'center', borderWidth: 0, marginTop: "15%" }}>桌子</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 0, height: "10%" }}>
                    <Text style={{ fontSize: 20, textAlignVertical: 'center', textAlign: 'center', borderWidth: 0, marginTop: "15%" }}>桌子</Text>
                </TouchableOpacity>
            </View>
        return (
            // 侧边导航
            <SideMenu
                menu={menu}                    //抽屉内的组件
                isOpen={this.state.isOpen}     //抽屉打开/关闭
                openMenuOffset={width / 3}     //抽屉的宽度
                hiddenMenuOffset={0}          //抽屉关闭状态时,显示多少宽度 默认0 抽屉完全隐藏
                edgeHitWidth={100}              //距离屏幕多少距离可以滑出抽屉,默认60
                disableGestures={false}

                onChange={                   //抽屉状态变化的监听函数
                    (isOpen) => {
                        isOpen ? console.log('抽屉当前状态为开着')
                            :
                            console.log('抽屉当前状态为关着')

                    }}

                onMove={                     //抽屉移动时的监听函数 , 参数为抽屉拉出来的距离 抽屉在左侧时参数为正,右侧则为负
                    (marginLeft) => {
                        console.log(marginLeft)
                    }}

                menuPosition={'left'}     //抽屉在左侧还是右侧
                autoClosing={false}         //默认为true 如果为true 一有事件发生抽屉就会关闭
            >

                <View style={{ flex: 1, backgroundColor: "#7cc0c0" }}>
                    <View style={{ borderWidth: 0, height: 50, justifyContent: "space-between", flexDirection: 'row', marginHorizontal: width * 0.05 }}>
                        {/* 头部两个ICON */}
                        <SimpleLineIcons onPress={() => { this.SelectToOpenLeftSideMenu() }}
                            style={{ textAlignVertical: 'center' }}
                            name="menu"
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
                    {/* 顶部导航 */}
                    <ScrollableTabView
                        renderTabBar={() => <ScrollableTabBar />}
                    >
                        <Chair navigation={this.props.navigation} tabLabel='椅子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />
                        <Table navigation={this.props.navigation} tabLabel='桌子' />

                    </ScrollableTabView>
                    {/* 弹出式搜索框 */}
                    <SearchBar
                        ref={(ref) => this.searchBar = ref}
                        //data={items}
                        //handleResults={this._handleResults}
                        showOnLoad={false}
                    />
                </View>

            </SideMenu>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 0,
        borderWidth: 0,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
