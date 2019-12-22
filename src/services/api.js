import axios from 'axios';

export const API_KEY = '92938e65f13eca9833f2caa4dc62aa68';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

export default api;
