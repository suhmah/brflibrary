/* eslint-disable import/no-extraneous-dependencies */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getBestSellersRepository } from '../repository/getBestSellers';

export const useRequestListBestSellers = () => {
  const queryClient = useQueryClient();
  return useMutation(async () => {
    return queryClient.fetchQuery(['getBooks'], () =>
      getBestSellersRepository(),
    );
  });
};
