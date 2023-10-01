import React from 'react';
import { ScrollView } from 'react-native';
import { Main, Wrapper } from './styles';
import Header from '../Header';
import { Margin } from '../Margin';

interface IContainer {
  children?: React.ReactNode;
  noFlatList?: boolean;
  title?: string;
}

const Container = ({ children, noFlatList, title }: IContainer) => {
  return (
    <Main>
      {noFlatList ? (
        <Wrapper>{children}</Wrapper>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Wrapper>
            <Header title={title} />
            <Margin />
            {children}
          </Wrapper>
        </ScrollView>
      )}
    </Main>
  );
};

export default Container;
