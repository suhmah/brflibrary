import { Card, Margin, metric } from '@/brfLibrary_ui';
import React from 'react';
import { View } from 'react-native';
import { useRequestBooks } from '@/modules/Books/domain/useCases/useCaseGetBooks';
import { iItemCard } from '@/modules/Books/presentation/screens/Home';
import Left from './components/Left';
import { Main, WrapperImage } from './styles';

const CardItem = ({ item, save, onPress }: iItemCard) => {
  const { labelCategorie } = useRequestBooks();
  const image =
    labelCategorie === 'bestSeller'
      ? `https://storage.googleapis.com/du-prd/books/images/${item?.isbns[0]?.isbn13}.jpg`
      : item?.book_image;

  return (
    <View style={{ paddingHorizontal: metric(16) }}>
      <Card>
        <Main>
          <WrapperImage
            source={{
              uri: image,
            }}
          />
          <Margin />
          <Left onPress={onPress} save={save} item={item} />
        </Main>
      </Card>
    </View>
  );
};

export default CardItem;
