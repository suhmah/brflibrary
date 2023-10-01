/* eslint-disable no-nested-ternary */
import React from 'react';
import { Chip } from '@/brfLibrary_ui';
import { IItem } from '../Chips';

const ItemChip = ({ item, onPress, selectedItem }: IItem) => {
  return (
    <Chip
      label={item.display_name}
      variant={selectedItem === item.display_name ? '@selected' : '@normal'}
      onPress={onPress}
    />
  );
};

export default ItemChip;
