/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { View, Text, Dimensions, AsyncStorage, Image, StyleSheet, FlatList, TouchableOpacity, DeviceEventEmitter, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-listview'
import { NavigationContext } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window');
export default class Output2 extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      username: '',
      selected: null,
      jishu: 0,
      aa: 1,
    }
  }

  get_shuju(v) {
    fetch('http://8.142.11.85:3000/index/select_Dongtai', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: v,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log('data', responseJson)
        this.setState({
          data: responseJson
        })
      })
  }
  get_shuju2(v) {
    fetch('http://8.142.11.85:3000/index/select_Dongtai2', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: v,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log('data', responseJson)
        this.setState({
          data: responseJson
        })
      })
  }

  select() {
    if (this.state.jishu === 0) {
      this.setState({
        jishu: 1
      })
      this.get_shuju2(this.state.username)
    }
    if (this.state.jishu === 1) {
      this.setState({
        jishu: 0
      })
      this.get_shuju(this.state.username)
    }
  }

  select2() {
    if (this.state.jishu === 0) {
      this.get_shuju(this.state.username)
    }
    if (this.state.jishu === 1) {
      this.get_shuju2(this.state.username)
    }
  }


  get() {
    AsyncStorage.getItem('username', (error, result) => {
      if (!error) {
        this.setState({
          username: result,
        });
        this.get_shuju(result);
      }
    })
  }

  //退出登录，清空data数据
  delect() {
    this.setState({
      data: [],
    })
  }
  componentDidMount() {
    this.get();
    this.listener = DeviceEventEmitter.addListener('test', this.select2.bind(this))
    this.listener = DeviceEventEmitter.addListener('test', this.get.bind(this))
    this.listener = DeviceEventEmitter.addListener('test2', this.delect.bind(this))
    this.listener = DeviceEventEmitter.addListener('myfabu', this.get.bind(this))
  }

  componentWillUnmount() {
    this.listener.remove();
  }



  go_comment(v) {
    this.context.navigate('Comment', v)
  }

  renderDetail(rowData, sectionID, rowID) {
    //  let title = <Text style={[styles.title]}>{rowData.title}</Text>
    console.log('rowdata', rowData)
    if (rowData.title && rowData.pic[0] === null) {
      return (
        <TouchableOpacity onPress={() => this.go_comment(rowData)}>
          <View style={styles.descriptionContainer}>
            <Text style={{ color: 'gray', backgroundColor: '#eee', width: width }}>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => this.go_comment(rowData)}>
          <View style={styles.descriptionContainer}>

            <View>
              <FlatList
                contentContainerStyle={styles.listViewStyle}
                keyExtractor={(item, index) => (index + '1')}
                data={rowData.pic}
                renderItem={({ item, index }) => {
                  if (rowData.pic.length === 1) {
                    if (item === null) {
                      return;
                    } else {
                      return (
                        <View key={index} >
                          <Image source={{ uri: item }} style={{ height: 100, width: 100 }} />
                        </View>
                      )
                    }
                  } else if (rowData.pic.length === 2) {
                    return (
                      <View key={index}>
                        <Image source={{ uri: item }} style={{ height: 100, width: 50 }} />
                      </View>
                    )
                  } else if (rowData.pic.length === 3) {
                    return (
                      <View key={index}>
                        <Image source={{ uri: item }} style={{ height: 100, width: 33.3 }} />
                      </View>
                    )
                  } else if (rowData.pic.length === 4) {
                    return (
                      <View key={index}>
                        <Image source={{ uri: item }} style={{ height: 50, width: 50 }} />
                      </View>
                    )
                  } else if (rowData.pic.length > 4 && item.length <= 6) {
                    return (
                      <View key={index}>
                        <Image source={{ uri: item }} style={{ height: 50, width: 33.3 }} />
                      </View>
                    )
                  } else {
                    return (
                      <View key={index}>
                        <Image source={{ uri: item }} style={{ height: 33.3, width: 33.3 }} />
                      </View>
                    )
                  }
                }}
              />
            </View>
            <Text style={[styles.textDescription]}>{rowData.title}</Text>

          </View>
        </TouchableOpacity>
      )
    }
  }


  render() {
    console.log('我的发布', this.props.route);
    return (
      <View style={styles.container}>
        <LinearGradient style={{padding:20}} colors={["#7cc0c0","#fff","#fff"]}>
          <ScrollView
            style={{ height: height - 50 - 120 }}
            ref={ref => this.scrollRef = ref}
            onScroll={(e) => {
              if (e.nativeEvent.contentOffset.y === 0) {
                DeviceEventEmitter.emit('scrollview', 1);
              }
            }}>
            <TouchableOpacity onPress={() => this.select()}>
              <Text>{this.state.data.length === 0 ? '' : '排序'}</Text>
            </TouchableOpacity>
            <Timeline
              style={styles.list}
              data={this.state.data}
              circleSize={20}
              //   circleColor='rgba(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{ minWidth: 52 }}
              timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
              descriptionStyle={{ color: 'gray' }}
              options={{
                style: { paddingTop: 5 }
              }}
              innerCircle={'dot'}

              // //  onEventPress={this.onEventPress.bind(this)}
              renderDetail={this.renderDetail.bind(this)}
            />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    flexDirection: 'row',

    //  backgroundColor:'green',
    overflow: 'hidden',
  },

  textDescription: {
    marginLeft: 10,
    color: 'gray',
    //   backgroundColor:'blue'
  },
  listViewStyle: {
    // 主轴方向
    flexDirection: 'row',
    // 一行显示不下,换一行
    flexWrap: 'wrap',
    // 侧轴方向
    alignItems: 'center', // 必须设置,否则换行不起作用
    width: 100,
    // backgroundColor:'yellow'
  },
});
