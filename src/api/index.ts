import axios from 'axios';

const api = axios.create({
  url: 'https://localhost:9999/',
});

export default api;
