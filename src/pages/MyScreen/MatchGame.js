import React, { Component, Fragment } from 'react'
import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import Card from './Card'

/* 
  制作配对游戏：
    1. 建构界面
    2. 组件与事件
    3. 游戏逻辑
*/

export default class App extends Component {
  state = {
    cardSymbols: [
      'http://wx2.sinaimg.cn/mw690/007ioaW7gy1fwvypxwqbej30yg0hkgxr.jpg',
      'https://c-ssl.duitang.com/uploads/item/201804/02/20180402022216_qavoq.jpg',
      'https://yxbao-img.xiazaibao2.com/patch/image/201905/06/e0e9686860.jpg',
      'https://img.qzjlw.com.cn:4433/uploads/images/20191116/20191116170340_84279.jpg',
      'https://img.qzjlw.com.cn:4433/uploads/images/20191116/20191116170402_68374.jpg',
      'https://img.qzjlw.com.cn:4433/uploads/images/20191116/20191116170421_60119.jpg',
      'https://img.qzjlw.com.cn:4433/uploads/images/20191116/20191116170439_40047.jpg',
      'https://img.qzjlw.com.cn:4433/uploads/images/20191116/20191116170730_79651.jpg'
    ],
    // 打乱顺序的 16 个图标
    cardSymbolsInRand: [],
    // 记录被图标反转的状态
    isOpen: [],
    // 第一次点击的图标
    firstPickedIndex: null,
    // 第二次点击的图标
    secondPickedIndex: null,
    // 记录所有图标被反转的次数
    steps: 0,
    // 判断游戏是否已结束
    isEnded: false
  }

  initGame = () => {
    let newCardsSymbols = [...this.state.cardSymbols, ...this.state.cardSymbols]
    // 将 16 个 emoji 的顺序打乱
    let cardSymbolsInRand = this.shuffleArray(newCardsSymbols)
    // 存储打开状态
    let isOpen = []

    for (let i = 0; i < newCardsSymbols.length; i++) {
      isOpen.push(false)
    }
    
    this.setState({
      cardSymbolsInRand,
      isOpen
    })
  }

  componentDidMount () {
    this.initGame()
  }

  shuffleArray = (arr) => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
    }
    return newArr
  }

  // 每一次点击图标的事件
  cardPressHandler = (index) => {
    let isOpen = [...this.state.isOpen]

    // 如果点击的是已被翻开的图标，不执行后续代码
    if (isOpen[index]) {
      return
    }

    isOpen[index] = true

    if (this.state.firstPickedIndex == null && this.state.secondPickedIndex == null) {
      this.setState({
        isOpen,
        firstPickedIndex: index
      })
    } else if (this.state.firstPickedIndex != null && this.state.secondPickedIndex == null) {
      this.setState({
        isOpen,
        secondPickedIndex: index
      })
    }

    this.setState({
      steps: this.state.steps + 1
    })
  }

  calculateGameResult = () => {
    if (this.state.firstPickedIndex != null && this.state.secondPickedIndex != null) {
      // 判断是否所有图标都被打开（结束游戏）
      if (this.state.cardSymbolsInRand.length > 0) {
        let totalOpens = this.state.isOpen.filter((isOpen) => isOpen)
        if (totalOpens.length === this.state.cardSymbolsInRand.length) {
          this.setState({
            isEnded: true
          })
          return
        }
      }

      let firstSymbol = this.state.cardSymbolsInRand[this.state.firstPickedIndex]
      let secondSymbol = this.state.cardSymbolsInRand[this.state.secondPickedIndex]

      if (firstSymbol != secondSymbol) {
        // Incorrect
        setTimeout(() => {
          let isOpen = [...this.state.isOpen]
          isOpen[this.state.firstPickedIndex] = false
          isOpen[this.state.secondPickedIndex] = false

          this.setState({
            firstPickedIndex: null,
            secondPickedIndex: null,
            isOpen
          })
        }, 1000)
      } else {
        // Correct
        this.setState({
          firstPickedIndex: null,
          secondPickedIndex: null
        })
      }
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.secondPickedIndex != this.state.secondPickedIndex) {
      this.calculateGameResult()
    }
  }

  resetGame = () => {
    this.initGame()

    this.setState({
      firstPickedIndex: null,
      secondPickedIndex: null,
      steps: 0,
      isEnded: false
    })
  }

  render () {
    return (
      <Fragment>
        <StatusBar />
        <SafeAreaView style={ styles.container }>
          <View style={ styles.header }>
            <Text style={ styles.heading }>Matching Game</Text>
          </View>
          <View style={ styles.main }>
            <View style={ styles.gameBoard }>
              {
                this.state.cardSymbolsInRand.map((symbol, index) => {
                  return (
                    <Card
                      key={ index }
                      onPress={ () => this.cardPressHandler(index) }
                      style={ styles.button }
                      fontSize={ 30 }
                      uri={ symbol }
                      cover="❓"
                      isShow={ this.state.isOpen[index] }
                    />
                  )
                })
              }
            </View>
          </View>
          <View style={ styles.footer }>
            <Text style={ styles.footerText }>{
              this.state.isEnded
                ? `Congrats! You have completed in ${ this.state.steps } setps.`
                : `You have tried ${ this.state.steps } time(s).`
            }</Text>
            {
              this.state.isEnded ?
                <TouchableOpacity onPress={ this.resetGame } style={ styles.tryAgainButton }>
                  <Text style={ styles.tryAgainButtonText }>Try Again</Text>
                </TouchableOpacity>
                : null
            }
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  main: {
    flex: 3,
    backgroundColor: '#fff'
  },
  footer: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 20,
    textAlign: 'center'
  },
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    //margin: (Dimensions.get('window').width - (48 * 4)) / (5 * 2)
  },
  buttonText: {
    fontSize: 30
  },
  tryAgainButton: {
    backgroundColor: '#ab956d',
    padding: 8,
    borderRadius: 8,
    marginTop: 20
  },
  tryAgainButtonText: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#fff'
  }
})
