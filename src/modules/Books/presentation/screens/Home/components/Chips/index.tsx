/* eslint-disable no-nested-ternary */
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import Metrics from '@/brfLibrary_ui/helpers/metric';
import { GapItem, Main } from './styles';
import ItemChip from '../ItemChip';

const mock = [
  {
    label: 'All books',
    selected: true,
    disable: false,
  },
  {
    label: 'Best sellers',
    selected: false,
    disable: false,
  },
  {
    label: 'Fiction',
    selected: false,
    disable: true,
  },
  {
    label: 'Released',
    selected: false,
    disable: false,
  },
];

export interface IMock {
  label: string;
  selected: boolean;
  disable: boolean;
}

export interface IItem {
  item: IMock;
}

const Chips = () => {
  const renderItem = useCallback(({ item }: IItem) => {
    return <ItemChip item={item} />;
  }, []);

  const gapItem = () => {
    return <GapItem />;
  };

  return (
    <Main>
      <FlatList
        data={mock}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={gapItem}
        style={{ paddingLeft: Metrics(16) }}
      />
    </Main>
  );
};

export default Chips;
