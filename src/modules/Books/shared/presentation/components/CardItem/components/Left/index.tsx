import React from 'react';
import { View } from 'react-native';
import { BRFLibraryText, metric } from '@/brfLibrary_ui';
import TopCard from '../TopCard';
import { iItemCard } from '../../../..';

const Left = ({ item, save, onPress }: iItemCard) => {
  return (
    <View style={{ flex: 1 }}>
      <TopCard onPress={onPress} save={save} item={item} />
      <BRFLibraryText
        variant="@description"
        value={item?.description || ''}
        style={{ marginTop: metric(13) }}
      />
    </View>
  );
};

export default Left;
