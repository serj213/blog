import axios from 'axios';

const api = axios.create({
  url: 'https://localhost:5000/api',
});

export default api;
