import { Margin, images } from '@/brfLibrary_ui';
import React from 'react';
import { View } from 'react-native';
import WrapperCard from './components/WrapperCard';

const Actions: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <WrapperCard
          title="120"
          subTitle="Completed Books"
          icon={images.bookOpen}
        />
      </View>
      <Margin />
      <View style={{ flex: 1 }}>
        <WrapperCard title="120" subTitle="Reviews" icon={images.star} />
      </View>
    </View>
  );
};

export default Actions;
