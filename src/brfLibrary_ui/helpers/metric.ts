/* eslint-disable implicit-arrow-linebreak */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const WIDTH_SCREEN = width;
export const WIDTH = 390;
export const VIEW_WIDTH = width;
export const HEIGTH = 844;

const FACTOR = 0.6;

const ISFACTOR = FACTOR;

export const horizontalScale = (size: number) => (width / WIDTH) * size;
export const verticalScale = (size: number) => (height / HEIGTH) * size;
const Metrics = (size: number) =>
  size + (verticalScale(size) - size) * ISFACTOR;

export default Metrics;
