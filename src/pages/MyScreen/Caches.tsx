import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { getCacheSize, clearCache } from '@damoness/react-native-http-cache';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const fresh=()=>{
    clearCache();
    setResult(0);
  }
  React.useEffect(() => {
    getCacheSize().then(setResult);
  }, []);

  return (
    <View >
      <Text>缓存大小{(result/1024/500).toFixed(2)}Mb</Text>
      <Button
        title="清除"
        onPress={() => {
fresh()
        }}
      />
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