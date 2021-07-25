import React ,{Component}from 'react'
import { View,Dimensions,Image,Text,FlatList } from 'react-native'
import Good from './Goods';

let {width,height} = Dimensions.get("window");
const good_data=[
    {
        id:1,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:2,
        name:'chair1',
        price:1000,
        img:'https://www.haijuhui.com/wp-content/uploads/2016/05/06-MODELL-No14_GF.jpg'
    },
    {
        id:3,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
    },
    {
        id:4,
        name:'chair1',
        price:1000,
        img:'http://eter888.com/upload/portal/20190617/9bce0d01d2f8a4302acbb28d3d5c70e1.jpg'
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


export default class Chair extends Component{
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
        <FlatList
        numColumns={2}
        data={good_data}
        renderItem={this.renderGoods}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{borderWidth:0,justifyContent:"space-around",marginLeft:width*0.09}}
        
        />
    )
}
}