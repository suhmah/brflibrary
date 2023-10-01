import React from 'react';
import { View } from 'react-native';
import { BRFLibraryText, metric } from '@/brfLibrary_ui';
import TopCard from '../TopCard';
import { iItemCard } from '../../../..';

const Left = ({ item }: iItemCard) => {
  return (
    <View style={{ flex: 1 }}>
      <TopCard title={item.title} subtitle={item.author} />
      <BRFLibraryText
        variant="@description"
        value={item.description}
        style={{ marginTop: metric(13) }}
      />
    </View>
  );
};

export default Left;
