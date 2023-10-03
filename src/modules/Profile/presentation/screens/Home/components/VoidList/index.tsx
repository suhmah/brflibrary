import React from 'react';
import { BackHandler, View } from 'react-native';
import {
  BRFLibraryText,
  BaseIcon,
  Margin,
  baseColor,
  images,
} from '@/brfLibrary_ui';
import { Button, Main } from './styles';

const VoidList: React.FC = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Main>
        <BaseIcon
          source={images.book}
          size={30}
          style={{ tintColor: baseColor.gray200 }}
        />
        <Margin />

        <BRFLibraryText
          variant="@body1"
          size={14}
          color={baseColor.gray700}
          value="You don't have books saved yet"
        />
        <Margin />
        <Button>
          <BRFLibraryText
            variant="@subtitle2"
            size={14}
            color={baseColor.white}
            value="See recommended books"
          />
        </Button>
      </Main>
    </View>
  );
};

export default VoidList;
