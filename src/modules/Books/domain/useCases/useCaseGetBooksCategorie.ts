/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRequestListBooksAll } from '../../data/services/getAllBooks';
import { useRequestListBooksCategorie } from '../../data/services/getBookServiceByCategorie';
import { useRequestListBestSellers } from '../../data/services/getBestSellersService';

export const useBookCategories = () => {
  const { isLoading, mutate } = useRequestListBooksCategorie();
  const all = useRequestListBooksAll();
  const bestsSellers = useRequestListBestSellers();

  const request = (categorie: string) => {
    mutate(categorie);
  };
  const requestBestSellers = () => {
    bestsSellers.mutate();
  };
  const requestAll = () => {
    all.mutate();
  };

  return {
    request,
    isLoading: isLoading || all.isLoading,
    requestAll,
    requestBestSellers,
  };
};
