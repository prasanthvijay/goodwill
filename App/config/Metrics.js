import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const METRICS = { // eslint-disable-line
    screenWidth: width,
    screenHeight: height,
    scaleWidth: width / 375,
    scaleHeight: height / 812,
};