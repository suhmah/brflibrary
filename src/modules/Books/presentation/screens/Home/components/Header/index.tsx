import { Margin } from '@/brfLibrary_ui';
import React from 'react';
import { useRequestBooks } from '@/modules/Books/domain/useCases/useCaseGetBooks';
import Chips from '../Chips';
import { WrapperText } from './styles';

const Header = () => {
  const { labelCategorie } = useRequestBooks();

  return (
    <>
      <Chips />
      <Margin />
      <WrapperText
        variant="@body1"
        value={labelCategorie || 'RECOMMENDED FOR YOU'}
      />
    </>
  );
};

export default Header;
