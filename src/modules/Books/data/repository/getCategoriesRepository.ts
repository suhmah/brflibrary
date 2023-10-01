import { api } from '@/api';
import { categories } from './mocks';

export const getCategoriesRepository = async () => {
  try {
    /*  const response = await api.get('/lists/names.json');
     */
    return categories;
  } catch (error) {
    return error;
  }
};
