/* eslint-disable import/no-extraneous-dependencies */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getBookRepository } from '../repository/getBookRepository';

export const useRequestListBooksAll = () => {
  const queryClient = useQueryClient();
  return useMutation(async () => {
    return queryClient.fetchQuery(['getBooks'], () => getBookRepository()); // Retorne a categoria recebida como argumento.
  });
};
