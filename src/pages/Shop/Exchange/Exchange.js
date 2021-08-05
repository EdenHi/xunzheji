/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ScrollView, Dimensions, Image, Text} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import Water from '../../water';
import SearchBar from 'react-native-searchbar';
import Swiper from 'react-native-swiper';
import {SpeedDial } from 'react-native-elements'
const {width, height} = Dimensions.get('window');
export default class componentName extends Component {
  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            borderWidth: 0,
            height: 50,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: width * 0.05,
          }}>
          {/* 头部两个ICON */}
          <SimpleLineIcons
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{textAlignVertical: 'center'}}
            name="arrow-left"
            size={25}
            color="black"
          />
          <SimpleLineIcons
            onPress={() => this.searchBar.show()}
            style={{textAlignVertical: 'center'}}
            name="magnifier"
            size={25}
            color="black"
          />
        </View>
        <ScrollView style={{flex: 1, borderWidth: 1}}>
          <View style={{height: height * 0.2}}>
            <Swiper autoplay style={{height: '100%'}}>
              <Image
                resizeMode={'stretch'}
                source={{
                  uri: 'http://src.house.sina.com.cn/imp/imp/deal/6f/62/0/575c5b3e518069bbb868a2069ea_p24_mk24.jpg',
                }}
                style={{width: '100%', height: '100%'}}
              />
              <Image
                resizeMode={'stretch'}
                source={{
                  uri: 'http://www.weishowzy.com/uploads/2019/09/2019091308112738.png',
                }}
                style={{width: '100%', height: '100%'}}
              />
            </Swiper>
          </View>
          <View style={{borderWidth: 1, height: height * 0.1}}>
            <Swiper
            autoplay
            autoplayTimeout={4}
            horizontal={false}
            showsPagination={false}
            >
              <View style={{justifyContent:'center',alignItems:'center', height: height * 0.1}}>
                <Text>用户 金**** 7小时前发布帖子：用玫瑰换香水</Text>                
              </View>
              <View style={{justifyContent:'center',alignItems:'center', height: height * 0.1}}>
                <Text>用户 皮*** 8小时前发布帖子：用篮球换球衣</Text>                
              </View>
              <View style={{justifyContent:'center',alignItems:'center', height: height * 0.1}}>
                <Text>用户 S**** 1天前发布帖子：用红酒换故事</Text>                
              </View>
              <View style={{justifyContent:'center',alignItems:'center', height: height * 0.1}}>
                <Text>用户 金**** 1天前发布帖子：用酒换朋友</Text>                
              </View>
            </Swiper>

          </View>
          <View style={{flex: 1}}>
            <Water />
          </View>
        </ScrollView>
        <SpeedDial
          buttonStyle={{borderRadius:50}}
          isOpen={this.state.open}
          icon={{ name: 'add', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => this.setState({open:true})}
          onClose={() =>this.setState({open:false})}
        >
          <SpeedDial.Action
            buttonStyle={{borderRadius:50}}
            icon={{ name: 'drive-file-rename-outline', color: '#fff' }}
            onPress={() => {this.props.navigation.navigate('Exchange2'),this.setState({open:false})}}
          />
        </SpeedDial>
        <SearchBar
          ref={ref => (this.searchBar = ref)}
          //data={items}
          //handleResults={this._handleResults}
          showOnLoad={false}
        />
      </View>
    );
  }
}
