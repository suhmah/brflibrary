/* eslint@normal import/no-extraneous-dependencies */
import {
  Container,
  Header as HeaderLibrary,
  Margin,
  metric,
} from '@/brfLibrary_ui';
import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import CardItem from '@/modules/Books/shared/presentation/components/CardItem';
import { useBookMarks } from '@/modules/Books/shared/Hooks/bookMarks';
import Header from './components/Header';
import {
  IBooks,
  useRequestBooks,
} from '../../../domain/useCases/useCaseGetBooks';
import { WrapperList } from './styles';

export interface iItemCard {
  item?: IBooks | null;
  save?: boolean;
  onPress?: (item?: IBooks) => void;
}

const Home = () => {
  const { data, isLoading } = useRequestBooks();
  const { saveItem, localItem } = useBookMarks();

  const renderItem = useCallback(
    ({ item }: iItemCard) => {
      const save =
        localItem &&
        localItem?.filter(
          (filterItem) => filterItem?.primary_isbn13 === item?.primary_isbn13,
        );

      return (
        <CardItem
          onPress={(book) => saveItem(book)}
          save={save && save?.length > 0}
          item={item}
        />
      );
    },
    [localItem, saveItem],
  );

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
  const renderFooter = useCallback(() => {
    if (isLoading) {
      return <ActivityIndicator />;
    }
    return null;
  }, [isLoading]);

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
          ListFooterComponent={renderFooter}
        />
      </WrapperList>
    </Container>
  );
};

export default Home;
