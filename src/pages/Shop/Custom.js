import * as React from 'react';
import {
  Text, 
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView, 
  TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
let {width,height} = Dimensions.get("window");
export default class CustomMade extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
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
                  <ImageBackground style={{width:"100%",height:"100%"}} imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}}  source={{uri:'http://8.142.11.85:3000/public/images/15.jpg'}}>
                  <View style={{width:width*0.4,height:height*0.06,backgroundColor:"grey",borderTopLeftRadius:10,borderBottomRightRadius:10,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,color:"#fff"}}>已有100人参与</Text>
                  </View>
                  </ImageBackground>
                 
                  </View>
                  <View style={{width:"100%",height:"40%",alignItems:"center"}}>
                    <View style={{width:"100%",height:"60%",flexDirection:"row"}}>
                      <View style={{width:"60%",height:"100%"}}>
                        <Text style={{fontSize:15,marginLeft:"10%",marginTop:"5%"}}>国宝出道</Text>
                        <Text style={{fontSize:20,fontWeight:"bold",marginLeft:"10%",marginTop:"5%"}}>文创定制</Text>
                      </View>
                      <View style={{width:"40%",height:"100%",}}>
                      <Text style={{fontSize:13,marginLeft:"10%",marginTop:"5%"}}>T恤定制</Text>
                      <Text style={{fontSize:13,marginLeft:"10%",marginTop:"5%"}}>手机壳定制</Text>
                      <Text style={{fontSize:13,marginLeft:"10%",marginTop:"5%"}}>帆布袋定制</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={{width:"50%",height:"20%",backgroundColor:"grey",borderRadius:20,alignItems:"center",justifyContent:"center",elevation:10}}>
                      <Text style={{fontSize:15,color:"#fff"}}>去定制</Text>
                    </TouchableOpacity>
                  </View>
          </View>

        )
    }
    render() {
      const { navigation } = this.props;
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'#f1f1f1', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

