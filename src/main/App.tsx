/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BooksProviders } from '@/modules/Books/shared/Hooks/bookMarks';
import PublicStack from './routes';

const queryClient = new QueryClient();

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <BooksProviders>
      <PublicStack />
    </BooksProviders>
  </QueryClientProvider>
);

export default Main;
