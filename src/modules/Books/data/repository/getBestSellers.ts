import { api } from '@/api';

export const getBestSellersRepository = async () => {
  try {
    const response = await api.get('lists/best-sellers/history.json');

    return response.data;
  } catch (error) {
    return error;
  }
};
