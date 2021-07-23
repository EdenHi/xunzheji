import React, { Component } from "react";

import { StyleSheet, Text, View, Image, FlatList, Button,} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import ListItem from "./listItem"


const mockBooks = [
  {
    rank: 5,
    username: "GATHERING PREY",
    subs: "啊啊实打实大苏打实",
    date:"2020-1-1",
    book_image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"

  },
  
  {
    rank: 5,
    username: "GATHERING PREY",
    subs: "John Sandford",
    date:"2020-1-1"
    ,book_image:
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"

  },
  {
    rank: 5,
    username: "GATHERING PREY",
    subs: "John Sandford",
    date:"2020-1-1"
    ,book_image:
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"

  },
  {
    rank: 5,
    username: "GATHERING PREY",
    subs: "John Sandford",
    date:"2020-1-1"
    ,book_image:
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"

  },
  {
    rank: 5,
    username: "GATHERING PREY",
    subs: "John Sandford",
    date:"2020-1-1"
    ,book_image:
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"

  },
{
    rank: 1,
    username: "GATHERING PREY",
    subs: "John Sandford",
    date:'2021-7-11',
    book_image:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic27.nipic.com%2F20130223%2F890845_101648793000_2.jpg&refer=http%3A%2F%2Fpic27.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628482217&t=780b6043de8e564cf304bf41fd4d547d"

  }
];

class Followlist extends Component {


 
  _renderItem = ({ item}) => {
    return (
      <ListItem
        coverURL={item.book_image}
        username={item.username}
        subs={item.subs}
      />
)
};

render() {
  return (
    <View>
   
  <FlatList
  data={mockBooks} renderItem={this._renderItem}/>
   </View>)
 
}
}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });

export default  Followlist ;