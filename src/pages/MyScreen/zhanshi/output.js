/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View,Text,Dimensions, AsyncStorage, Image,StyleSheet,} from 'react-native';
import Timeline from 'react-native-timeline-listview'
const ddd = [
    {
        time: '7-28',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688',

        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '7-26',
        title: 'Play Badminton',
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',

        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '7-25',
        title: 'Watch Soccer',
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688',

        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '7-20',
        title: 'Go to Fitness center',
        description: 'Look out for the Best Gym & Fitness Centers around me :)',

        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
  ]
const {height,width} = Dimensions.get('window');
export default class output extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            username:'',
            selected: null,
        }
    }

    get_shuju(v){
        fetch('http://192.168.50.117:3000/index/select_Dongtai', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: v,
            })
            }).then((response) => response.json())
            .then((responseJson) => {
              console.log('data',responseJson)
            })
    }

    componentDidMount(){
        AsyncStorage.getItem('username',(error,result)=>{
            if (!error) {
                this.setState({
                    username:result,
                });
                this.get_shuju(result);
            }
        })
    }

    onEventPress(data){
        this.setState({selected: data})
      }
    
      renderSelected(){
          if(this.state.selected)
            return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
      }
    
      renderDetail(rowData, sectionID, rowID) {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if(rowData.description && rowData.imageUrl)
          desc = (
            <View style={styles.descriptionContainer}>   
              <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
              <Text style={[styles.textDescription]}>{rowData.description}</Text>
            </View>
          )
        
        return (
          <View style={{flex:1}}>
            {title}
            {desc}
          </View>
        )
      }


    render() {
        return (
            // <View style={{flex:1,backgroundColor:'#eee'}}>
            //     <View style={{width:width * 0.9,marginLeft:width * 0.05,marginTop:10}}>
            //         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            //             <View style={{backgroundColor:'white',height:100,width:70,borderRadius:25}}>
            //                 <Text style={{fontSize:15,width:35}}>2021-5-20</Text>
            //             </View>
            //             <View style={{backgroundColor:'white',width:width*0.9-90,height:200}}>
            //                 <Image source={{uri:'https://img1.baidu.com/it/u=3286259770,3266600404&fm=26&fmt=auto&gp=0.jpg'}} style={{height:100,width:100}}/>
            //             </View>
            //         </View>
                   
            //     </View>
            // </View>
            <View style={styles.container}>
                {this.renderSelected()}
                <Timeline 
                style={styles.list}
                data={ddd}
                circleSize={20}
                circleColor='rgba(0,0,0,0)'
                lineColor='rgb(45,156,219)'
                timeContainerStyle={{minWidth:52}}
                timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
                descriptionStyle={{color:'gray'}}
                options={{
                    style:{paddingTop:5}
                }}
                innerCircle={'dot'}
                onEventPress={this.onEventPress.bind(this)}
                renderDetail={this.renderDetail.bind(this)}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    marginTop:10,
      backgroundColor:'white'
    },
    list: {
      flex: 1,
      marginTop:20,
    },
    title:{
      fontSize:16,
      fontWeight: 'bold'
    },
    descriptionContainer:{
      flexDirection: 'row',
      paddingRight: 50
    },
    image:{
      width: 50,
      height: 50,
      borderRadius: 25
    },
    textDescription: {
      marginLeft: 10,
      color: 'gray'
    }
  });