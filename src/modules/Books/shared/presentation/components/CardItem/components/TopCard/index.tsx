import React from 'react';
import { BRFLibraryText, BaseIcon, baseColor, images } from '@/brfLibrary_ui';
import { Main, SaveButton, WrapperTexts } from './styles';
import { iItemCard } from '../../../..';

const TopCard = ({ item, save, onPress }: iItemCard) => {
  return (
    <Main>
      <>
        <WrapperTexts>
          <BRFLibraryText variant="@titleh2" value={item?.title} />
          <BRFLibraryText variant="@subtitle" value={item?.author} />
        </WrapperTexts>
        <SaveButton
          save={save}
          onPress={() => {
            if (onPress && item) onPress(item);
          }}
        >
          <BaseIcon
            size={16}
            source={images.bookmark}
            style={{ tintColor: save ? baseColor.white : baseColor.gray700 }}
          />
        </SaveButton>
      </>
    </Main>
  );
};

export default TopCard;
