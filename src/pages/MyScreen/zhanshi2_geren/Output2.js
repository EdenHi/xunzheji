/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Dimensions, AsyncStorage, Image, StyleSheet, FlatList, TouchableOpacity, DeviceEventEmitter, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-listview'
import { NavigationContext } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
    fetch('http://47.100.78.254:3000/index/select_Dongtai', {
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
    fetch('http://47.100.78.254:3000/index/select_Dongtai2', {
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

  //?????????????????????data??????
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

  Sure(){
 
      captureRef(viewRef, {
          format: "jpg",
          quality: 0.8
      }).then(
          uri => {
              console.log("Image saved to", uri),
                  this.setState({ shoturi: uri })
          },
          error => console.error("Oops, snapshot failed", error)
      ), this.setModalVisible4(!modalVisible4)
  
  }

  go_comment(v) {
    this.context.navigate('Comment', v)
  }

  renderDetail(rowData, sectionID, rowID) {
    //  let title = <Text style={[styles.title]}>{rowData.title}</Text>
    console.log('rowdata', rowData)
    if (rowData.title && rowData.pic[0] === null) {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => this.go_comment(rowData)}>
          <View style={styles.descriptionContainer}>
            <Text style={{ color: 'gray', backgroundColor: '#eee', width: width }}>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => this.go_comment(rowData)}>
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
    console.log('????????????', this.props.route);
    if(this.state.data.length>0){
      return (
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,backgroundColor:global.mainColor,}}>
                      <TouchableOpacity activeOpacity={1} style={{width:width*0.06,marginLeft:width*0.05}}>
                      <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                          {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                      </TouchableOpacity>
                      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff"}}>????????????</Text>
                      <TouchableOpacity activeOpacity={1} style={{}}>
                          <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff",opacity:0 }} name="sound" size={20} color="#000000" />
                      </TouchableOpacity>
                  </View>
            <ScrollView
showsVerticalScrollIndicator={false}
              style={{ height: height - 50 - 120 ,width:width*0.9,marginLeft:width*0.05,marginTop:"2%"}}
              >
              <TouchableOpacity activeOpacity={1} onPress={() => this.select()}>
                <Text>{this.state.data.length === 0 ? '' : '??????'}</Text>
              </TouchableOpacity>
              <Timeline
                style={styles.list}
                data={this.state.data}
                circleSize={20}
                  circleColor='#fedc61'
                lineColor='#fedc61'
                timeContainerStyle={{ minWidth: 52 }}
                timeStyle={{ textAlign: 'center', backgroundColor: global.mainColor, color: 'white', padding: 5, borderRadius: 13 }}
                descriptionStyle={{ color: 'gray' }}
                options={{
                  style: { paddingTop: 5 }
                }}
                innerCircle={'dot'}

                // //  onEventPress={this.onEventPress.bind(this)}
                renderDetail={this.renderDetail.bind(this)}
              />
            </ScrollView>
        </View>
      );}else{
        return(
          <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", height: height * 0.07,backgroundColor:global.mainColor,}}>
                <TouchableOpacity activeOpacity={1} style={{width:width*0.06,marginLeft:width*0.05}}>
                <FontAwesome onPress={()=>this.props.navigation.goBack()} name={'angle-left'} size={25} color={'#fff'} />
                    {/* <AntDesign onPress={() => this.props.navigation.goBack()} style={{ textAlignVertical: 'center', height: "100%", color: "#fff" }} name="left" size={20} color="#000000" /> */}
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff"}}>????????????</Text>
                <TouchableOpacity activeOpacity={1} style={{}}>
                    <AntDesign style={{ textAlignVertical: 'center', height: "100%", color: "#fff",opacity:0 }} name="sound" size={20} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={{width,height:height*0.93,alignItems:'center',justifyContent:"center",backgroundColor:"#fff"}}>
                  <Image style={{width:width*0.5,height:width*0.5}} source={require("../../nothingpic/????????????.png")}></Image>
                  <Text style={{color:global.mainColor,fontSize:15,}}>????????????</Text>
              </View>
              
          </View>
      )
      }
  }
}
const styles = StyleSheet.create({
  container: {
    width,
  },
  list: {
    flex: 1,
    marginTop: 20,
    elevation:5
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
    color: '#333',
    //   backgroundColor:'blue'
  },
  listViewStyle: {
    // ????????????
    flexDirection: 'row',
    // ??????????????????,?????????
    flexWrap: 'wrap',
    // ????????????
    alignItems: 'center', // ????????????,????????????????????????
    width: 100,
    // backgroundColor:'yellow'
  },
});
