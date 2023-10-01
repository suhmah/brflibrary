import React from 'react';
import images from '@/brfLibrary_ui/assets';
import { Main, WrapperText } from './styles';
import BaseIcon from '../BaseIcon';

const Header = ({ title }: { title?: string }) => {
  return (
    <Main>
      <WrapperText variant="@title" value={title || 'Welcome, Sarah!'} />
      <BaseIcon size={48} source={images.avatar} />
    </Main>
  );
};

export default Header;
