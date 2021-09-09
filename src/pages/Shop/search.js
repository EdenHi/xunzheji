
import React, {Component} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {View, Text, Image, Dimensions,TextInput, TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
import shoplist from './shoplist/shoplist.json';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class search extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[],
      sousuo:'',
    }
  }
    

  indexSelect(){
    let newJson = [];
    let json = eval(shoplist);
    //先查询最外层的分类
    for(var i=0; i<json.length; i++){  
        if(i===1){
            //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
            for(var k=0;k<json[1].meishi.length;k++){
                //这里是商品的查询
                for(var j=0;j<json[1].meishi[k].shops.length;j++){
                    //查询商品中，含有知味的商品数据
                    if((json[1].meishi[k].shops[j].name).indexOf(this.state.sousuo)>-1){
                        var tempJson = {
                            "shops":json[1].meishi[k].shops[j],
                        }
                        newJson.push(tempJson.shops);
                }
            }
        }
    }
        if(i===2){
          //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
          for(var k=0;k<json[2].zhizao.length;k++){
              //这里是商品的查询
              for(var j=0;j<json[2].zhizao[k].shops.length;j++){
                  //查询商品中，含有知味的商品数据
                  if((json[2].zhizao[k].shops[j].name).indexOf(this.state.sousuo)>-1){
                      var tempJson = {
                          "shops":json[2].zhizao[k].shops[j],
                      }
                      newJson.push(tempJson.shops);
                  }
              }
          }
        }
        if(i===3){
          //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
          for(var k=0;k<json[3].gongmei.length;k++){
              //这里是商品的查询
              for(var j=0;j<json[3].gongmei[k].shops.length;j++){
                  //查询商品中，含有知味的商品数据
                  if((json[3].gongmei[k].shops[j].name).indexOf(this.state.sousuo)>-1){
                      var tempJson = {
                          "shops":json[3].gongmei[k].shops[j],
                      }
                      newJson.push(tempJson.shops);
                  }
              }
          }
        }
        if(i===4){
          //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
          for(var k=0;k<json[4].chajiu.length;k++){
              //这里是商品的查询
              for(var j=0;j<json[4].chajiu[k].shops.length;j++){
                  //查询商品中，含有知味的商品数据
                  if((json[4].chajiu[k].shops[j].name).indexOf(this.state.sousuo)>-1){
                      var tempJson = {
                          "shops":json[4].chajiu[k].shops[j],
                      }
                      newJson.push(tempJson.shops);
                  }
              }
          }
        }
    }  
    console.log('tempJson',newJson);
    // this.setState({
    //     data:newJson
    // })
    this.props.navigation.navigate('Shoplist',{shops:newJson})
}

tuijian(x){
    let newJson = [];
    let json = eval(shoplist);
    //先查询最外层的分类
    for(var i=0; i<json.length; i++){  
        if(i===1){
            //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
            for(var k=0;k<json[1].meishi.length;k++){
                //这里是商品的查询
                for(var j=0;j<json[1].meishi[k].shops.length;j++){
                    //查询商品中，含有知味的商品数据
                    if((json[1].meishi[k].shops[j].name).indexOf(x)>-1){
                        var tempJson = {
                            "shops":json[1].meishi[k].shops[j],
                        }
                        newJson.push(tempJson.shops);
                }
            }
        }
    }
        if(i===2){
          //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
          for(var k=0;k<json[2].zhizao.length;k++){
              //这里是商品的查询
              for(var j=0;j<json[2].zhizao[k].shops.length;j++){
                  //查询商品中，含有知味的商品数据
                  if((json[2].zhizao[k].shops[j].name).indexOf(x)>-1){
                      var tempJson = {
                          "shops":json[2].zhizao[k].shops[j],
                      }
                      newJson.push(tempJson.shops);
                  }
              }
          }
        }
        if(i===3){
          //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
          for(var k=0;k<json[3].gongmei.length;k++){
              //这里是商品的查询
              for(var j=0;j<json[3].gongmei[k].shops.length;j++){
                  //查询商品中，含有知味的商品数据
                  if((json[3].gongmei[k].shops[j].name).indexOf(x)>-1){
                      var tempJson = {
                          "shops":json[3].gongmei[k].shops[j],
                      }
                      newJson.push(tempJson.shops);
                  }
              }
          }
        }
        if(i===4){
          //因为键值是数组，所以继续循环查询键值里的数据,这里是小类里的查询
          for(var k=0;k<json[4].chajiu.length;k++){
              //这里是商品的查询
              for(var j=0;j<json[4].chajiu[k].shops.length;j++){
                  //查询商品中，含有知味的商品数据
                  if((json[4].chajiu[k].shops[j].name).indexOf(x)>-1){
                      var tempJson = {
                          "shops":json[4].chajiu[k].shops[j],
                      }
                      newJson.push(tempJson.shops);
                  }
              }
          }
        }
    }  
    this.props.navigation.navigate('Shoplist',{shops:newJson})
}



  render() {
    const { navigation } = this.props;
    return (
      <View style={{alignItems:"center",backgroundColor:"#fff",flex:1}}>
          <View style={{width:width,marginTop:"2%",height:height*0.07,justifyContent:"space-around",backgroundColor:"#FFF",flexDirection:"row",alignItems:"center"}}>
              <TouchableOpacity style={{marginLeft:'2%'}} onPress={() => navigation.goBack()}><FontAwesome name={'angle-left'} size={25} color={'#000'} /></TouchableOpacity>
              <View style={{width:"60%",height:height*0.05,alignItems:"center",elevation:5,backgroundColor:"#fff",marginLeft:"2%",borderRadius:20,flexDirection:"row"}}>
              <SimpleLineIcons style={{textAlign:'center',marginLeft:"5%",textAlignVertical:'center',height:'100%',borderWidth:0,}}
                name="magnifier"
                size={18}
                color="grey"
              />
              <TextInput placeholder="搜索好物" style={{width:"60%",marginLeft:"2%",height:"100%",}}  onChangeText={(sousuo)=>this.setState({sousuo})}/>
              </View>
              <TouchableOpacity
              onPress={()=>this.indexSelect()}
              style={{width:"15%",height:height*0.05,alignItems:"center",justifyContent:"center",backgroundcolor:global.mainColor,borderRadius:20}}><Text style={{fontSize:15,color:'white'}}>搜索</Text></TouchableOpacity>
          </View>
          <View style={{width:width*0.95,height:height*0.1,marginTop:"5%",}}>
              <Text style={{fontSize:15,fontWeight:"bold"}}>推荐搜索</Text>
              <View style={{width:width,height:"50%",flexDirection:"row",}}>
                  <TouchableOpacity onPress={()=>this.tuijian('龙泉')} activeOpacity={1} style={{width:"15%",height:"90%",backgroundColor:"#f1f1f1",marginTop:"2%",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                      <Text  style={{fontSize:12,color:"grey"}}>龙泉</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.tuijian('糕')} activeOpacity={1} style={{width:"15%",height:"90%",backgroundColor:"#f1f1f1",marginTop:"2%",marginLeft:"2%",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:12,color:"grey"}}>糕</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.tuijian('扇')} activeOpacity={1} style={{width:"15%",height:"90%",backgroundColor:"#f1f1f1",marginTop:"2%",marginLeft:"2%",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:12,color:"grey"}}>扇</Text>
                  </TouchableOpacity>
              </View>
              
          </View>
        
      </View>
    );
  }
}
