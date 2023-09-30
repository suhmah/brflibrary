import React from 'react';
import { Image, ImageSourcePropType, ImageStyle } from 'react-native';

interface IProps {
  source: ImageSourcePropType;
  size?: number;
  style?: ImageStyle;
}

const BaseIcon = ({ source, size, style }: IProps) => {
  const imageStyles: ImageStyle = { width: size, height: size };

  return (
    <Image source={source} style={[imageStyles, style]} resizeMode="contain" />
  );
};

export default BaseIcon;
