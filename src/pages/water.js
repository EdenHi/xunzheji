import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Waterfall from 'react-native-waterfall'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FC00',
  },
  waterfall: {
    flex: 1,
    backgroundColor: '#fff'
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
        img: 'https://www.engiel.com/wp-content/uploads/2018/07/gif-applauso-3.gif',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 2,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2021/01/28/14/45/meerkat-5958194_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 3,
        name: 'chair1',
        price: 1000,
        img: 'http://pic101.nipic.com/file/20160621/7063349_180901327000_2.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 4,
        name: 'chair1',
        price: 1000,
        img: 'https://www.fordaq.com/p-17880000-17870270-1/%e6%a1%8c%e5%ad%90---%e8%ae%be%e8%ae%a1.JPG',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 5,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 6,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 7,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 8,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 9,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 10,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2015/02/04/08/03/baby-623417_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 11,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2013/10/16/14/04/polar-bear-196318_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/07/30/02/00/iceberg-404966_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/08/27/12/58/emperor-penguins-429128_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/08/27/12/59/penguins-429134_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2018/04/28/12/17/sculpture-3357150_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2013/10/22/19/54/buddha-199462_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/01/05/01/19/dragon-238931_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/07/10/10/20/golden-gate-bridge-388917_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },

      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/12/21/15/44/raindrops-574971_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
      },
      {
        id: 12,
        name: 'chair1',
        price: 1000,
        img: 'https://cdn.pixabay.com/photo/2014/02/27/16/08/splashing-275950_960_720.jpg',
        height: 200 + Math.floor(Math.random() * 100)
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
      <TouchableOpacity activeOpacity={1} style={{ width: itemContainer.width, height: itemData.height, borderRadius: 10, elevation: 5 }} onPress={() => { console.log({ itemIdx }); }}>
        <ImageBackground imageStyle={{borderRadius:10}} style={{width: '100%', height: '100%', flexDirection: 'column-reverse' }} source={{ uri: this.data[itemIdx].img }}>
          <View style={{ justifyContent:'space-between',height: height * 0.075, backgroundColor: 'rgba(118,118,118,0.5)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={{ color: '#fff', height: '40%', textAlign: 'left', fontWeight: 'bold',paddingLeft:5,paddingTop:5,fontSize:15}}ellipsizeMode="tail" numberOfLines={1}>食肉者钛合金折扇子</Text>
            <Text style={{color:'#fff',fontSize:15,paddingLeft:5,paddingBottom:5}}>￥30</Text>
          </View>

        </ImageBackground>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Waterfall
          style={styles.waterfall}
          data={this.data}
          gap={15}
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

