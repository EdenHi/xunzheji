import * as React from 'react';
import {
  Text, 
  View,
  Dimensions,
  SafeAreaView } from 'react-native';

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
              elevation:5
              }}>
                  <View style={{width:width*0.3,height:height*0.07,backgroundColor:"red"}}></View>
          </View>

        )
    }
    render() {
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

