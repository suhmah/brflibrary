import { useRequestCategories } from '../../data/services/getCategoriesService';

export interface IResponseCategories {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
}

export const useCategories = () => {
  const { isLoading, data } = useRequestCategories();

  return {
    data: data?.results as IResponseCategories[],
    isLoading,
  };
};
