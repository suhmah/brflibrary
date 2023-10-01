import { api } from '@/api';

export const getCategoriesRepository = async () => {
  try {
    const response = await api.get('/lists/names.json');

    return response.data;
  } catch (error) {
    return error;
  }
};
