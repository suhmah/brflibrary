import {
  BRFLibraryText,
  BaseIcon,
  Container,
  images,
  metric,
  Header as HeaderLibrary,
  Margin,
} from '@/brfLibrary_ui';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { getData } from '@/asyncStorage';
import { IBooks } from '@/modules/Books/domain/useCases/useCaseGetBooks';
import { iItemCard } from '@/modules/Books/presentation/screens/Home';
import { saveBook } from '@/modules/Books/presentation/screens/Home/saveBook';
import CardItem from '@/modules/Books/shared/presentation/components/CardItem';
import Actions from './components/Actions';

const Home = () => {
  const [data, setData] = useState<IBooks[]>();

  const init = async () => {
    const response = await getData();

    setData(response);
  };
  useEffect(() => {
    init();
  }, []);

  const renderItem = useCallback(
    ({ item }: iItemCard) => {
      const save =
        data &&
        data?.filter(
          (filterItem) => filterItem?.primary_isbn13 === item?.primary_isbn13,
        );

      const saveItem = (itemSave?: IBooks) => {
        saveBook(itemSave, data);
        init();
      };

      return (
        <CardItem
          onPress={(book) => saveItem(book)}
          save={save && save?.length > 0}
          item={item}
        />
      );
    },
    [data],
  );
  const space = () => {
    return <View style={{ height: 6 }} />;
  };

  const renderHeader = useCallback(() => {
    return (
      <>
        <HeaderLibrary title="Profile" />
        <Margin />
        <Actions />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginTop: 32,
          }}
        >
          <BRFLibraryText variant="@subtitle" value="MY BOOKMARKS" />
          <BaseIcon source={images.bookmark} size={24} />
        </View>
        <Margin />
      </>
    );
  }, []);

  return (
    <Container noFlatList>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={space}
        style={{ paddingBottom: metric(20) }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
