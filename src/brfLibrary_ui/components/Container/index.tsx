import React from 'react';
import { ScrollView } from 'react-native';
import { Main, Wrapper } from './styles';
import Header from '../Header';
import { Margin } from '../Margin';

interface IContainer {
  children?: React.ReactNode;
  noFlatList?: boolean;
}

const Container = ({ children, noFlatList }: IContainer) => {
  return (
    <Main>
      {noFlatList ? (
        <Wrapper>{children}</Wrapper>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Wrapper>
            <Header />
            <Margin />
            {children}
          </Wrapper>
        </ScrollView>
      )}
    </Main>
  );
};

export default Container;
