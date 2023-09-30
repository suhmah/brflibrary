import React from 'react';
import { ImageSourcePropType } from 'react-native';
import BaseIcon from '../BaseIcon';
import { Main } from './styles';

const BottomLabelNavigation = ({
  focused,
  path,
}: {
  focused: boolean;
  path: ImageSourcePropType;
}) => {
  return (
    <Main focused={focused}>
      <BaseIcon size={24} source={path} />
    </Main>
  );
};

export default BottomLabelNavigation;
