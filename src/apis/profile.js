import axiosClient from './axiosClient';

export const profileApi = {
  getAll() {
    return axiosClient.get('/user/infor');
  },
  update(payload) {
    return axiosClient.path(`/users/${payload.id}`, payload.data);
  },
};
