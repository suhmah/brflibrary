import { Margin } from '@/brfLibrary_ui';
import React from 'react';
import Chips from '../Chips';
import { WrapperText } from './styles';

const Header = () => {
  return (
    <>
      <Chips />
      <Margin />
      <WrapperText variant="@body1" value="RECOMMENDED FOR YOU" />
    </>
  );
};

export default Header;
