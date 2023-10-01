import { useRequestListBooks } from '../../data/services/getBookService';

export interface IBooks {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  contributor: string;
  contributor_note: string;
  created_date: string;
  description: string;
  first_chapter_link: string;
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  updated_date: string;
  weeks_on_list: number;
}

interface IResponseRequestBooks {
  books: IBooks[];
  display_name: 'Combined Print & E-Book Fiction';
  list_id: 704;
  list_image: null;
  list_image_height: null;
  list_image_width: null;
  list_name: 'Combined Print and E-Book Fiction';
  list_name_encoded: 'combined-print-and-e-book-fiction';
  updated: 'WEEKLY';
}

interface IResponseData {
  list_name?: string;
  books?: IBooks;
  lists: IResponseRequestBooks[];
}

export const useRequestBooks = () => {
  const { isLoading, data } = useRequestListBooks();
  const isData: IResponseData = data?.results;

  if (isData?.list_name) {
    return {
      data: isData.books,
      isLoading,
    };
  }

  const transformedList: IBooks[] = isData?.lists.reduce(
    (result: IBooks[], list: IResponseRequestBooks) => {
      const books: IBooks[] = list.books.map((book: IBooks) => ({ ...book }));
      return result.concat(books);
    },
    [],
  );

  return {
    data: transformedList as IBooks[],
    isLoading,
  };
};
