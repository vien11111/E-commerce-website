import axiosClient from './axiosClient'

export const productApi = {
    getAll(params) {
        return axiosClient.get('/products', { params });
    },
    getById(id) {
        return axiosClient.get(`/products/${id}`);
    }
}