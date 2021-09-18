import React,{Component} from "react";
import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
export default class Stars extends Component{
    constructor(props){
        super(props)
        this.state={

            }
        
    }
    render(){

        const Star1=this.props.star==1?<View style={{flexDirection:'row'}}><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star-outline" size={14} color="grey" /><Ionicons name="ios-star-outline" size={14} color="grey" /><Ionicons name="ios-star-outline" size={14} color="grey" /><Ionicons name="ios-star-outline" size={14} color="grey" /></View>:null
        const Star2=this.props.star==2?<View style={{flexDirection:'row'}}><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star-outline" size={14} color="grey" /><Ionicons name="ios-star-outline" size={14} color="grey" /><Ionicons name="ios-star-outline" size={14} color="grey" /></View>:null
        const Star3=this.props.star==3?<View style={{flexDirection:'row'}}><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star-outline" size={14} color="grey" /><Ionicons name="ios-star-outline" size={14} color="grey" /></View>:null
        const Star4=this.props.star==4?<View style={{flexDirection:'row'}}><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star-outline" size={14} color="grey" /></View>:null
        const Star5=this.props.star==5?<View style={{flexDirection:'row'}}><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /><Ionicons name="ios-star" size={14} color="gold" /></View>:null
        return(<View>
            {Star1}
            {Star2}
            {Star3}
            {Star4}
            {Star5}
        </View>

        )
    }
}