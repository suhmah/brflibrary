/* eslint@normal import/no-extraneous-dependencies */
import {
  Container,
  Header as HeaderLibrary,
  Margin,
  metric,
} from '@/brfLibrary_ui';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import Header from './components/Header';
import CardItem from './components/CardItem';
import { IBooks, useRequestBooks } from '../../domain/useCases/useCaseGetBooks';
import { WrapperList } from './styles';

export interface iItemCard {
  item: IBooks;
}

const Home = () => {
  const { data } = useRequestBooks();

  const renderItem = useCallback(({ item }: iItemCard) => {
    return <CardItem item={item} />;
  }, []);

  const space = () => {
    return <View style={{ height: 6 }} />;
  };

  const renderHeader = useCallback(() => {
    return (
      <>
        <HeaderLibrary />
        <Margin />
        <Header />
        <Margin />
      </>
    );
  }, []);

  return (
    <Container noFlatList>
      <WrapperList>
        <FlatList
          data={data}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          ItemSeparatorComponent={space}
          style={{ paddingBottom: metric(20) }}
          showsVerticalScrollIndicator={false}
        />
      </WrapperList>
    </Container>
  );
};

export default Home;
