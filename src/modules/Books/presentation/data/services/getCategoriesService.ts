/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import { getCategoriesRepository } from '../repository/getCategoriesRepository';

export const useRequestCategories = () => {
  return useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategoriesRepository,
  });
};
