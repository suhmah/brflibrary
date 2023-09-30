import React from 'react';
import images from '@/brfLibrary_ui/assets';
import { Main, WrapperText } from './styles';
import BaseIcon from '../BaseIcon';

const Header = () => {
  return (
    <Main>
      <WrapperText variant="@title" value="Welcome, Sarah!" />
      <BaseIcon size={48} source={images.avatar} />
    </Main>
  );
};

export default Header;
