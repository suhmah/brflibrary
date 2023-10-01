import React from 'react';
import { BRFLibraryText, BaseIcon, images } from '@/brfLibrary_ui';
import { Main, SaveButton, WrapperTexts } from './styles';

interface IProps {
  title: string;
  subtitle: string;
}

const TopCard = ({ title, subtitle }: IProps) => {
  return (
    <Main>
      <WrapperTexts>
        <BRFLibraryText variant="@titleh2" value={title} />
        <BRFLibraryText variant="@subtitle" value={subtitle} />
      </WrapperTexts>
      <SaveButton>
        <BaseIcon size={16} source={images.bookmark} />
      </SaveButton>
    </Main>
  );
};

export default TopCard;
