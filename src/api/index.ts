import axios from 'axios';
import { setupInterceptorsTo } from './Interceptors';

const api = setupInterceptorsTo(
  axios.create({
    baseURL: 'http://localhost:8080/api',
  }),
);

export default api;
