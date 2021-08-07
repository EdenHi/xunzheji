import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
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
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdimg03.c-ctrip.com%2Fimages%2F100f0u000000jh5qyCC3D.jpg&refer=http%3A%2F%2Fdimg03.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629593494&t=15e6aa5f7ea45225a39714655ad4965e',
  },
];
const {width,height} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri:'http://8.142.11.85:3000/public/images/travel1.jpeg'}}
          source={{uri:'http://8.142.11.85:3000/public/images/travel2.jpeg'}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.5}
          {...parallaxProps}
        />
        { <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>}
        
      </View>
      
    );
  };

  return (
    <View style={styles.container}>
      {/* { <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity> } */}
      <Carousel
        ref={carouselRef}
        sliderWidth={width}
        sliderHeight={width}
        itemWidth={width }
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    borderRadius:10,
  },
  item: {
    marginTop:10,
    height:140,
    width:width*0.95,
    justifyContent:"center",
    alignItems:"center"
    // backgroundColor:"red"
  },
  imageContainer: {
    width:'100%',
    height:"100%",
    backgroundColor: 'white',
    borderRadius: 15,
    alignSelf:'center'
  },
  image: {

    width:width*0.95,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});