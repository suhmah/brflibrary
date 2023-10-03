/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { APP_ID, BOOK_API } from '@env';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export enum HttpStatusCode {
  OK = 200,
  OKCREATED = 201,
  NOCONTENT = 204,
  BADREQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOTFOUND = 404,
  WITHOUTDATA = 422,
  SERVERERROR = 500,
}

class HttIdentity {
  api: AxiosInstance;

  constructor() {
    console.log({ a: BOOK_API });

    this.api = axios.create({
      baseURL: BOOK_API,
      timeout: 60000,
      timeoutErrorMessage: 'Tempo limite da requisição excedido.',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        'api-key': APP_ID,
      },
    });
    this.initInterceptors();
  }

  initInterceptors() {
    this.api.interceptors.request.use(async (config) => {
      return config;
    });
    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const err = {
          ...error,
          status: error?.response?.status,
          data: error?.response?.data,
        };

        return Promise.reject(err);
      },
    );
  }
}
export const { api } = new HttIdentity();
