import React from 'react';
import { Main } from './styles';

interface ICard {
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Card;
