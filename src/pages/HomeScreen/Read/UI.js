import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const IS_IPHONE_6 = height === 1334;
const IS_IPHONE_PLUS = height === 2208;
const IS_IPHONE_X = height === 2436;

const size = {
    screenWidth: width,
    screenHeight: height,
}

const fontSize = {
    regular: 60,
    lineHeight: 60,
}

const lineHeight = {
    regular: 40,
}

export default {
    size,
    fontSize,
    lineHeight,
    IS_IPHONE_6,
    IS_IPHONE_PLUS,
    IS_IPHONE_X,
};