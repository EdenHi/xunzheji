import React, { Component } from 'react';
import { View ,Text,Image,Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window")
export  class Title extends Component {
  render() {
    return (
        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
            {this.props.text}
        </Text>
    </View>
    );
  }
}
export  class ImageA extends Component {
    render() {
      return (
        <Image style={{ width: width * 0.9, height: 200, marginTop: 10, marginBottom: 10 }} borderRadius={15} source={{ uri: this.props.image }} />
      );
    }
  }
  export  class Head extends Component {
    render() {
      return (
        <View><Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>{this.props.text}</Text></View>
      );
    }
  }
  export  class Body extends Component {
    render() {
      return (
        <View style={{ borderStyle: "dashed", borderRadius: 5, borderWidth: 0.5, width: width * 0.9, alignItems: "center", marginBottom: 5, marginTop: 5 }}>
        <Text style={{ fontSize: 13, marginTop: 5, lineHeight: 25 }}>
        {this.props.text}
        </Text>
    </View>
      );
    }
  }
  

