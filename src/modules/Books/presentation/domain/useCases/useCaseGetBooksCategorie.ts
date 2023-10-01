/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRequestListBooksAll } from '../../data/services/getAllBooks';
import { useRequestListBooksCategorie } from '../../data/services/getBookServiceByCategorie';

export const useBookCategories = () => {
  const { isLoading, mutate } = useRequestListBooksCategorie();
  const all = useRequestListBooksAll();

  const request = (categorie: string) => {
    mutate(categorie);
  };
  const requestAll = () => {
    all.mutate();
  };

  return {
    request,
    isLoading,
    requestAll,
  };
};
