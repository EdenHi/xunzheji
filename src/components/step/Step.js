import React, { useEffect, useState } from 'react';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import { SafeAreaView, StyleSheet, Text, View,Dimensions } from 'react-native';
import { Component } from 'react';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');



function Step(props){

  const [steps, setSteps] = useState(0);
  const {getSteps}=props;
  useEffect(() => {
    const config = {
      default_threshold: 15.0,
      default_delay: 150000000,
      cheatInterval: 3000,
      onStepCountChange: (stepCount) => { setSteps(stepCount),getSteps(stepCount)},
    }
    startCounter(config);
    return () => { stopCounter()}
  }, []);

  return (

      <View style={{borderWidth:0,flexDirection:'row',paddingStart:40,paddingEnd:10,width:width*0.4}}>
         <LottieView  autoPlay autoSize={true} style={{ height: 40, alignSelf:'center' }} source={require('../../../animal/16969-walker-man.json')}  />
        <Text  style={styles.step}>{steps}步</Text>
      </View>

  );
};

const styles = StyleSheet.create({
  step: {
    borderWidth:0,
    width: '85%',
    fontSize: 20,
    textAlignVertical:'center',
    textAlign:'center'
  }
});

export default Step;