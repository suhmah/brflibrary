import { api } from '@/api';

export const getBookCategorieRepository = async (categorie?: string) => {
  try {
    const response = await api.get(`/lists/current/${categorie}.json`);

    return response.data;
  } catch (error) {
    return error;
  }
};
