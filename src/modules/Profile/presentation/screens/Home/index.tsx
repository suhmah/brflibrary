import {
  BRFLibraryText,
  BaseIcon,
  Container,
  images,
  metric,
  Header as HeaderLibrary,
  Margin,
} from '@/brfLibrary_ui';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { iItemCard } from '@/modules/Books/presentation/screens/Home';
import CardItem from '@/modules/Books/shared/presentation/components/CardItem';
import { useBookMarks } from '@/modules/Books/shared/Hooks/bookMarks';
import Actions from './components/Actions';
import VoidList from './components/VoidList';

const Home = () => {
  const { localItem, saveItem } = useBookMarks();

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
        data={localItem}
        renderItem={renderItem}
        ItemSeparatorComponent={space}
        style={{ paddingBottom: metric(20) }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<VoidList />}
      />
    </Container>
  );
};

export default Home;
