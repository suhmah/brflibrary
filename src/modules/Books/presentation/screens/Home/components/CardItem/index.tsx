import { Card, Margin, metric } from '@/brfLibrary_ui';
import React from 'react';
import { View } from 'react-native';
import Left from './components/Left';
import { Main, WrapperImage } from './styles';
import { iItemCard } from '../..';

const CardItem = ({ item }: iItemCard) => {
  return (
    <View style={{ paddingHorizontal: metric(16) }}>
      <Card>
        <Main>
          <WrapperImage source={{ uri: item?.book_image }} />
          <Margin />
          <Left item={item} />
        </Main>
      </Card>
    </View>
  );
};

export default CardItem;
