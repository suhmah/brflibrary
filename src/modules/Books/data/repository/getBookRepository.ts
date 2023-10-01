import { api } from '@/api';
import { books } from './mocks';

export const getBookRepository = async () => {
  try {
    /*  const response = await api.get('/lists/overview.json');
     */
    return books;
  } catch (error) {
    return error;
  }
};
