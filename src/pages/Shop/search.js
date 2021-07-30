
import React, {Component} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {View, Text, Image, Dimensions,TextInput, TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class search extends Component {
    
  render() {
    const { navigation } = this.props;
    return (
      <View style={{alignItems:"center",backgroundColor:"#fff",flex:1}}>
          <View style={{width:width,height:height*0.07,backgroundColor:"#FFF",flexDirection:"row",alignItems:"center"}}>
              <View style={{width:"80%",height:"70%",alignItems:"center",elevation:5,backgroundColor:"#fff",marginLeft:"2%",borderRadius:20,flexDirection:"row",alignItems:"center"}}>
              <SimpleLineIcons style={{textAlign:'center',marginLeft:"5%",textAlignVertical:'center',height:'100%',borderWidth:0,}}
                name="magnifier"
                size={18}
                color="grey"
              />
              <TextInput placeholder="搜索好物" style={{width:"80%",marginLeft:"2%",height:"100%",}}></TextInput>
              </View>
              <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{width:"15%",height:"80%",alignItems:"center",justifyContent:"center"}}><Text style={{fontSize:15}}>取消</Text></TouchableOpacity>
          </View>
          <View style={{width:width*0.95,height:height*0.1,marginTop:"5%",}}>
              <Text style={{fontSize:15,fontWeight:"bold"}}>推荐搜索</Text>
              <View style={{width:width,height:"50%",flexDirection:"row",}}>
                  <View style={{width:"15%",height:"90%",backgroundColor:"#f1f1f1",marginTop:"2%",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:12,color:"grey"}}>千岛湖</Text>
                  </View>
                  <View style={{width:"15%",height:"90%",backgroundColor:"#f1f1f1",marginTop:"2%",marginLeft:"2%",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:12,color:"grey"}}>千岛湖</Text>
                  </View>
                  <View style={{width:"15%",height:"90%",backgroundColor:"#f1f1f1",marginTop:"2%",marginLeft:"2%",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:12,color:"grey"}}>千岛湖</Text>
                  </View>
              </View>
              
          </View>
        
      </View>
    );
  }
}
