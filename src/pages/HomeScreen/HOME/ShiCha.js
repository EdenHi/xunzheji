import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://8.142.11.85:3000/public/images/travel2.jpeg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://8.142.11.85:3000/public/images/travel3.jpeg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'http://8.142.11.85:3000/public/images/travel1.jpeg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://8.142.11.85:3000/public/images/zs1.jpeg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://8.142.11.85:3000/public/images/travel2.jpeg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://8.142.11.85:3000/public/images/travel1.jpeg',
  },
];
const { width, height } = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          autoplay={true}
          autoplayDelay={1}
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.8}
          {...parallaxProps}
       />

      </View>

    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop={true}
        ref={carouselRef}
        sliderWidth={width}
        sliderHeight={width}
        itemWidth={width}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        autoplay={true}
        autoplayDelay={1}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  item: {
    height: 140,
    width: width * 0.95,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
    // backgroundColor:"red"
  },
  imageContainer: {
    width: '100%',
    height: "100%",
    backgroundColor: 'white',
    borderRadius: 15,
    alignSelf: 'center'
  },
  image: {

    width: width * 0.95,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});