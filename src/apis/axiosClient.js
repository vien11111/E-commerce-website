import axios from 'axios';
import { ACCESS_TOKEN } from 'config';
import { toast } from 'react-toastify';

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

export const BASE_URL = {
  LOCAL: 'http://192.168.1.3:8080/api',
  development: process.env.REACT_APP_API_URL,
};

const axiosClient = axios.create({
  baseURL: BASE_URL[process.env.REACT_APP_MODE],
  // baseURL: BASE_URL['LOCAL'],
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN) || '';
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response?.data) return response.data;
  },
  (error) => {
    const { response } = error;
    const { status, data } = response;
    // if (status === UNAUTHORIZED || status === FORBIDDEN) {
    // }
    toast.error(data.msg, {
      autoClose: 2000,
      theme: 'colored',
    });

    return Promise.reject(response);
  }
);
export default axiosClient;
