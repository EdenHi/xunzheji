import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  Image
} from 'react-native'

class Card extends Component {
  render () {
    return (
      <TouchableOpacity onPress={ this.props.onPress } style={{ ...this.props.style }}>
<Image source={{uri:this.props.isShow? this.props.uri:'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/574e9258d109b3de8cb95bb4c0bf6c81810a4ce3.jpg'}} style={{width:"100%",height:"100%"}}></Image>
      </TouchableOpacity>
    )
  }
}

export default Card
