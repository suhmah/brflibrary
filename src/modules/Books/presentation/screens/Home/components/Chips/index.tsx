/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import Metrics from '@/brfLibrary_ui/helpers/metric';
import {
  IResponseCategories,
  useCategories,
} from '@/modules/Books/presentation/domain/useCases/useCaseGetCategories';
import { Chip } from '@/brfLibrary_ui';
import { useBookCategories } from '@/modules/Books/presentation/domain/useCases/useCaseGetBooksCategorie';
import { GapItem, Main } from './styles';
import ItemChip from '../ItemChip';

export interface IMock {
  label: string;
  selected: boolean;
  disable: boolean;
}

export interface IItem {
  item: IResponseCategories;
  onPress?: () => void;
  selectedItem?: string;
}

const Chips = () => {
  const { data } = useCategories();
  const { request, requestAll } = useBookCategories();

  const [selected, setSelected] = useState('all');

  const renderItem = useCallback(
    ({ item }: IItem) => {
      return (
        <ItemChip
          selectedItem={selected}
          item={item}
          onPress={() => {
            setSelected(item.display_name);
            request(item.list_name_encoded);
          }}
        />
      );
    },
    [selected, request],
  );

  const gapItem = () => {
    return <GapItem />;
  };

  return (
    <Main>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={
          <Chip
            label="All"
            variant={selected === 'all' ? '@selected' : '@normal'}
            onPress={() => {
              requestAll();
              setSelected('all');
            }}
          />
        }
        horizontal
        ItemSeparatorComponent={gapItem}
        style={{ paddingLeft: Metrics(16) }}
        showsHorizontalScrollIndicator={false}
      />
    </Main>
  );
};

export default Chips;
