import axiosClient from './axiosClient';

const orderApi = {
  create(payload) {
    return axiosClient.post('/orders', payload);
  },
  getByOwner(params) {
    return axiosClient.get('/orders', { params });
  },
  getById(id) {
    return axiosClient.get(`/products/${id}`);
  },
};

export default orderApi;
