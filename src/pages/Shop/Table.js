import React ,{Component}from 'react'
import { View,Dimensions,Image,Text,FlatList } from 'react-native'
import Good from './Goods';

let {width,height} = Dimensions.get("window");
const good_data=[
    {
        id:1,
        name:'Table',
        price:1000,
        img:'http://pic33.nipic.com/20131009/8952533_124801280000_2.jpg'
    },
    {
        id:2,
        name:'chair1',
        price:1000,
        img:'https://www.ikea.cn/cn/zh/images/products/battern-ba-teng-zhuo-zi-bai-se__0488715_PE623254_S4.JPG'
    },
    {
        id:3,
        name:'chair1',
        price:1000,
        img:'http://pic101.nipic.com/file/20160621/7063349_180901327000_2.jpg'
    },
    {
        id:4,
        name:'chair1',
        price:1000,
        img:'https://www.fordaq.com/p-17880000-17870270-1/%e6%a1%8c%e5%ad%90---%e8%ae%be%e8%ae%a1.JPG'
    },
    {
        id:5,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:6,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:7,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:8,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:9,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:10,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:11,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:12,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },

]


export default class Table extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    renderGoods=({item})=>{
        return(
            <View style={{width:width*0.425,height:width*0.425,marginLeft:'0%',marginVertical:'2%',borderRadius:10,marginRight:'10%',borderWidth:0}}>
            <Good  navigation={this.props.navigation}
            name={item.name}
            price={item.price}
            img={item.img}
            /> 
            </View>

        )
    }

render(){
    return(
        <FlatList style={{borderWidth:1}}
        style={{ borderWidth:0,width:"100%",}}
        numColumns={2}
        data={good_data}
        renderItem={this.renderGoods}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{borderWidth:0,justifyContent:"space-around",marginLeft:width*0.09}}
        
        />
    )
}
}