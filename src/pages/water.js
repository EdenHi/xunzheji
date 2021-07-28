import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  Image
} from 'react-native';

import Waterfall from 'react-native-waterfall'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FC00',
  },
  waterfall: {
    flex: 1,
    backgroundColor: 'black'
  }
});



export default class Water extends Component {
  state = {
    isRefreshing: false,
    isLoadingMore: false
  }
  componentWillMount() {
    this.data = [
      {
        id: 1,
        name: 'Table',
        price: 1000,
        img: 'http://pic33.nipic.com/20131009/8952533_124801280000_2.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 2,
        name: 'chair1',
        price: 1000,
        img: 'https://www.ikea.cn/cn/zh/images/products/battern-ba-teng-zhuo-zi-bai-se__0488715_PE623254_S4.JPG',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 3,
        name: 'chair1',
        price: 1000,
        img: 'http://pic101.nipic.com/file/20160621/7063349_180901327000_2.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 4,
        name: 'chair1',
        price: 1000,
        img: 'https://www.fordaq.com/p-17880000-17870270-1/%e6%a1%8c%e5%ad%90---%e8%ae%be%e8%ae%a1.JPG',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 5,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 6,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 7,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 8,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 9,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 10,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 11,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 30)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },

      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg',
        height: 200 + Math.floor(Math.random() * 50)
      },
    ]

    this.loadMore()
  }
  randomSortArray(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));  //随机索引值randomIndex是从0-arr.length中随机抽取的，因为Math.floor()方法是向下取整的，所以这里是i+1
      //下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置
      var temp = arr[randomIndex];
      arr[randomIndex] = arr[i];
      arr[i] = temp;
    }
    //每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面
    return arr;
  }

  addMoreDatas() {
    for (var i = 0; i < 5; i++) {
      this.data.push(this.randomSortArray(this.data[i]))
    }
  }

  refresh = () => {
    if (this.state.isRefreshing || this.state.isLoadingMore) {
      return;
    }
    this.setState({ isRefreshing: true })
    setTimeout(() => {
      this.data = this.randomSortArray(this.data);
      this.addMoreDatas();
      this.setState({ isRefreshing: false })
    }, 500)
  }

  loadMore = () => {
    if (this.state.isRefreshing || this.state.isLoadingMore) {
      return;
    }
    this.setState({ isLoadingMore: true })
    setTimeout(() => {
      this.addMoreDatas();
      this.setState({ isLoadingMore: false })
    }, 500)
  }

  renderItem = (itemData, itemIdx, itemContainer) => {
    return (
      <TouchableOpacity style={{ width: itemContainer.width, height: itemData.height, borderRadius: 10, borderWidth: 1, borderColor: 'white' }} onPress={() => { console.log({ itemIdx }); }}>
        <Image borderRadius={10} style={{ width: '100%', height: '100%' }} source={{ uri: this.data[itemIdx].img }}></Image>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Waterfall
          style={styles.waterfall}
          data={this.data}
          gap={5}
          numberOfColumns={2}
          expansionOfScope={0}
          onEndReachedThreshold={1000}
          onEndReached={this.loadMore}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.refresh}
            />
          } />
      </View>
    );
  }
}

