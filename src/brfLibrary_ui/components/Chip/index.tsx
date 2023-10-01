import React from 'react';
import { baseColor } from '@/brfLibrary_ui/colors';
import { Main } from './styles';
import BRFLibraryText from '../BRFLibraryText';

interface IChipProps {
  variant: '@normal' | '@selected' | '@disable';
  label?: string;
  onPress?: () => void;
}

const getColor = (value: IChipProps) => {
  switch (value.variant) {
    case '@normal':
      return {
        fontColor: baseColor.gray700,
        background: baseColor.gray100,
      };
    case '@selected':
      return {
        fontColor: baseColor.gray100,
        background: baseColor.gray700,
      };

    default:
      return {
        fontColor: baseColor.gray300,
        background: baseColor.gray200,
      };
  }
};

const Chip = ({ variant, label, onPress }: IChipProps) => {
  return (
    <Main background={getColor({ variant }).background} onPress={onPress}>
      <BRFLibraryText
        variant="@body2"
        value={label}
        color={getColor({ variant }).fontColor}
      />
    </Main>
  );
};

export default Chip;
