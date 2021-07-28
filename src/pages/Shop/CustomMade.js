/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  Text, 
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView, 
  TouchableOpacity} from 'react-native';
  import AntDesign from "react-native-vector-icons/AntDesign"

import Carousel from 'react-native-snap-carousel';
const {height,width} = Dimensions.get('window');
export default class CustomMade extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"老字号出道",
              text: "文创定制",
              img:"https://img2.baidu.com/it/u=646080808,1887979129&fm=26&fmt=auto&gp=0.jpg"
          },
          {
              title:"非遗大师",
              text: "手工定制",
              img:"https://img2.baidu.com/it/u=646080808,1887979129&fm=26&fmt=auto&gp=0.jpg"
          },
          {
              title:"投资收藏",
              text: "名家定制",
              img:"https://img2.baidu.com/it/u=646080808,1887979129&fm=26&fmt=auto&gp=0.jpg"
          },
        ]
      }
    }
    _renderItem({item,index}){
      
        return (
   

          <View style={{
              backgroundColor:'#fff',
              borderRadius: 10,
              height: height*0.7, 
              elevation:5,
              }}>
                <View style={{width:"100%",height:"65%"}}>
                  <ImageBackground style={{width:"100%",height:"100%"}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}  source={{uri:item.img}}>
                  <View style={{width:width*0.4,height:height*0.06,backgroundColor:"#7cc0c0",borderTopLeftRadius:10,borderBottomRightRadius:10,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,color:"#fff"}}>已有1000人参与</Text>
                  </View>
                  </ImageBackground>
                  </View>
                  <View style={{width:"100%",height:"40%",alignItems:"center"}}>
                    <View style={{width:"100%",height:"60%",flexDirection:"row"}}>
                      <View style={{width:"60%",height:"100%"}}>
                        <Text style={{fontSize:15,marginLeft:"10%",marginTop:"5%",color:"#7cc0c0"}}>{item.title}</Text>
                        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:"10%",marginTop:"5%",color:"#7cc0c0"}}>{item.text}</Text>
                      </View>
                      <View style={{width:"40%",height:"100%",}}>
                      <Text style={{fontSize:13,marginLeft:"10%",marginTop:"5%",color:"#7cc0c0"}}>T恤定制</Text>
                      <Text style={{fontSize:13,marginLeft:"10%",marginTop:"5%",color:"#7cc0c0"}}>手机壳定制</Text>
                      <Text style={{fontSize:13,marginLeft:"10%",marginTop:"5%",color:"#7cc0c0"}}>帆布袋定制</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                     onPress={() =>this.props.navigation.navigate('dingzhi')}
                     style={{width:"50%",height:"20%",backgroundColor:"#7cc0c0",borderRadius:20,alignItems:"center",justifyContent:"center",elevation:10}}>
                      <Text style={{fontSize:15,color:"#fff"}}>去定制</Text>
                    </TouchableOpacity>
                  </View>
          </View>
      

        )
    }
    render() {
      const { navigation } = this.props;
        return (
          <View style={{width:width,height:height}}>
            <View style={{width:width,height:height*0.08,backgroundColor:"#fff",alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}>
            <TouchableOpacity style={{marginLeft:"2%"}}
                      onPress={() => navigation.goBack()}
          >
          <AntDesign style={{ textAlign: 'center',textAlignVertical:'center',height:"100%" }}
              name="left"
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{fontSize:15}}>定制</Text>
          <View style={{width:width*0.09,height:width*0.09,}}></View>

            </View>
          <SafeAreaView style={{flex: 1, backgroundColor:'#f1f1f1', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={300}
                  renderItem={this._renderItem.bind(this)}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
          </View>
        );
    }
}

