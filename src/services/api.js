import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-node-compragames.herokuapp.com/',
});

export default api;
