/* eslint-disable no-nested-ternary */
import React from 'react';
import { Chip } from '@/brfLibrary_ui';
import { IItem } from '../Chips';

const ItemChip = ({ item }: IItem) => {
  return (
    <Chip
      label={item.label}
      variant={
        item.disable ? '@disable' : item.selected ? '@selected' : '@normal'
      }
    />
  );
};

export default ItemChip;
