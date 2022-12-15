import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { config } from '../config';

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (config.headers) {
    config.headers.authorization = `Bearer ${Cookies.get()?.token}`;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log('response.config ', response.data);
  if (response.data.token) {
    Cookies.remove(config.userToken);
    Cookies.set(config.userToken, response.data.token);
  }

  return response.data;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
