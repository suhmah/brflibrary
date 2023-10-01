/* eslint-disable import/no-extraneous-dependencies */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getBookCategorieRepository } from '../repository/getBookCategorieRepository';

export const useRequestListBooksCategorie = () => {
  const queryClient = useQueryClient();
  return useMutation<string, unknown, string>(async (categorie) => {
    return queryClient.fetchQuery(['getBooks'], () =>
      getBookCategorieRepository(categorie),
    ); 
  });
};
