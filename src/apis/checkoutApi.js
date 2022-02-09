import axiosClient from './axiosClient';

const checkoutApi = {
  checkout: (payload) => {
    return axiosClient.post('/checkout', payload);
  },
};

export default checkoutApi;
