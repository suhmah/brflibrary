/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PublicStack from './routes';

const queryClient = new QueryClient();

const Main = () => (
  <QueryClientProvider client={queryClient}>
    <PublicStack />
  </QueryClientProvider>
);

export default Main;
