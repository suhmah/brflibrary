/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import { getBookRepository } from '../repository/getBookRepository';

export const useRequestListBooks = () => {
  return useQuery({
    queryKey: ['getBooks'],
    queryFn: getBookRepository,
  });
};
