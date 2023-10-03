/* eslint-disable @typescript-eslint/no-unused-vars */
import { getData } from '@/asyncStorage';
import React, {
  createContext,
  FC,
  JSX,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { IBooks } from '../../domain/useCases/useCaseGetBooks';
import { saveBook } from './saveBook';

interface BookMarksContextData {
  saveItem: (itemSave?: IBooks) => void;
  localItem?: IBooks[];
  init: () => void;
}

const BookMarksContext = createContext<BookMarksContextData>(
  {} as BookMarksContextData,
);
interface IProps {
  children: JSX.Element;
}

export const BooksProviders: FC<IProps> = ({ children }) => {
  const [localItem, setLocalItem] = useState<IBooks[] | undefined>();

  const init = async () => {
    const response = await getData();
    setLocalItem(response);
  };
  useEffect(() => {
    init();
  }, []);
  const saveItem = useCallback(
    (itemSave?: IBooks) => {
      saveBook(itemSave, localItem);
      init();
    },
    [localItem],
  );

  const contextValue = useMemo(
    () => ({
      saveItem,
      init,
      localItem,
    }),
    [saveItem, localItem],
  );

  return (
    <BookMarksContext.Provider value={contextValue}>
      {children}
    </BookMarksContext.Provider>
  );
};

export function useBookMarks(): BookMarksContextData {
  const context = useContext(BookMarksContext);

  return context;
}
