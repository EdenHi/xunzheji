
import React, { useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  Animated,
} from "react-native";
const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
  "http://8.142.11.85:3000/public/images/home2.png",
  "http://8.142.11.85:3000/public/images/home3.png",
  "http://8.142.11.85:3000/public/images/home2.png",
  "http://8.142.11.85:3000/public/images/home3.png",
  "http://8.142.11.85:3000/public/images/home2.png",
  "http://8.142.11.85:3000/public/images/home2.png",
  "http://8.142.11.85:3000/public/images/home3.png",
  "http://8.142.11.85:3000/public/images/home3.png",
  "http://8.142.11.85:3000/public/images/home3.png",
  "http://8.142.11.85:3000/public/images/home3.png",
];

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));

export default function shicha2() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>

      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{
                width: width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{

                }}
              >
                <View
                  style={{
                    width: width * 0.95,
                    height: height * 0.21,
                    marginLeft: -width * 0.05,
                    overflow: "hidden",

                    alignItems: "center",
                    borderRadius: 15,
                    // elevation:5
                  }}
                >
                  <Animated.Image
                    source={{ uri: item.photo }}
                    style={{
                      width: width,
                      height: height * 0.22,
                      resizeMode: "stretch",
                      transform: [
                        {
                          translateX: translateX,
                        },
                      ],
                    }}
                  />
                </View>
                {/* <Image
                  source={{ uri: item.avatar_url }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    position: "absolute",
                    bottom: -20,
                    right: -20,
                    borderColor: "white",
                    borderWidth: 5,
                  }}
                /> */}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});