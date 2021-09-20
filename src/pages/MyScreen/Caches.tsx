import * as React from 'react';

import { StyleSheet, View, Text,Dimensions, Button,ToastAndroid } from 'react-native';
import { getCacheSize, clearCache } from '@damoness/react-native-http-cache';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const fresh=()=>{
    clearCache();
    setResult(0);
    ToastAndroid.show('清理完毕！',2000)
  }
  React.useEffect(() => {
    getCacheSize().then(setResult);
  }, []);

  return (
    <View >
      <TouchableOpacity onPress={()=>{fresh()}} style={{ height: height * 0.05 ,backgroundColor:global.mainColor=="#145A59" ?global.backColor:'#fff',marginVertical:5,borderRadius:10,flexDirection:'row'}}>
      <Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 20,color:global.mainColor=="#145A59" ?'#fff':'#333' }}>清除缓存</Text><Text style={{ height: '100%', textAlignVertical: 'center', paddingLeft: 200,color:'grey' }}>{(result/1024/500/4).toFixed(2)}Mb</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});