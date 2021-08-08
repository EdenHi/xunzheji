// 此组件可根据具体需求自定义
import React, {Component} from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from 'react-native-vector-icons/AntDesign'
const {height,width} = Dimensions.get('window');
export default class ControlPanel extends Component {
    render() {
        let {closeDrawer} = this.props
        return (
            <ScrollView style={styles.container}>
                <View style={{width:"100%",flexDirection:'row-reverse',padding:10}}>
                    <TouchableOpacity style={styles.button} onPress={closeDrawer}>
                    <AntDesign  name="left" size={25} color="#000000" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:"5%"}}>
             <View style={{width:width*0.22,height:width*0.22,borderRadius:15,backgroundColor:'#fff',elevation:5}}></View>
             <View style={{width:width*0.22,height:width*0.22,borderRadius:15,backgroundColor:'#fff',elevation:5}}></View>
             </View>
             <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:"5%",marginBottom:"2%"}}>
             <View style={{width:width*0.22,height:width*0.22,borderRadius:15,backgroundColor:'#fff',elevation:5}}></View>
             <View style={{width:width*0.22,height:width*0.22,borderRadius:15,backgroundColor:'#fff',elevation:5}}></View>
             </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: '#fff',
    },
    button:{
        // width:50,
        // height:50,
 
    }
 
   
})