import React from 'react';
import { ScrollView } from 'react-native';
import { Main, Wrapper } from './styles';
import Header from '../Header';
import { Margin } from '../Margin';

interface IContainer {
  children?: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <Main>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Header />
          <Margin />
          {children}
        </Wrapper>
      </ScrollView>
    </Main>
  );
};

export default Container;
