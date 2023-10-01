import { setData } from '@/asyncStorage';
import { IBooks } from '../../../domain/useCases/useCaseGetBooks';

export const saveBook = (books?: IBooks, localItem?: IBooks[]) => {
  if (localItem) {
    const checkExisteItem = localItem.filter(
      (itemFilter) => itemFilter.primary_isbn13 === books?.primary_isbn13,
    );

    if (checkExisteItem.length > 0) {
      const filterRemoveExistItem = localItem.filter(
        (itemFilter) => itemFilter.primary_isbn13 !== books?.primary_isbn13,
      );
      setData(filterRemoveExistItem);
    } else {
      const newData = [...localItem, books];
      setData(newData);
    }
  } else {
    const newData = [books];
    setData(newData);
  }
};
