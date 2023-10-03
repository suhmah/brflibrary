import { api } from '@/api';

export const getBookRepository = async () => {
  try {
    const response = await api.get('/lists/overview.json');

    return response.data;
  } catch (error) {
    return error;
  }
};
