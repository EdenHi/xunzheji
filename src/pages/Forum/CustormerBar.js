import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { pxToDp } from "./styleKits";

class Index extends Component {
    render() {
        // const { navigation } = this.props;
        const { goToPage, tabs, activeTab ,navigation} = this.props;
        return (
            <View>
                <View
                    style={{
                        height: pxToDp(50), flexDirection: "row", alignItems:"center",paddingLeft: pxToDp(20),
                        justifyContent: "space-around",backgroundColor:"#fff"
                    }}

                >
                    {tabs.map((v, i) => <TouchableOpacity
                        key={i}
                        onPress={() => goToPage(i)}
                        style={{
                            justifyContent: 'center',
                            borderBottomColor: "#003C66",//下划线颜色
                            borderBottomWidth: activeTab === i ? pxToDp(3) : 0,
                            borderRadius:2
                        }}
                    >
                        <Text
                            style={{ color: activeTab === i ? "black" : "grey", fontSize: activeTab === i ? pxToDp(20) : pxToDp(20) }}
                        >{v}</Text>
                    </TouchableOpacity>)}
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Fabu')}
                     style={{width:"17%",height:"60%",backgroundColor:"pink",borderRadius:20,elevation:5,alignItems:"center",justifyContent:"center",marginLeft:"50%"}}>
                        <Text style={{color:"#fff"}}>发布</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Index;