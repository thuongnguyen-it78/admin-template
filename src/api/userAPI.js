import axiosClient from './axiosClient';

const userAPI = {
  getAll(params) {
    const url = '/dnc/users';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/dnc/users/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/dnc/users';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/dnc/users/${data.id}`;
    return axiosClient.patch(url, data);
  },

  delete(id) {
    const url = `/dnc/users/${id}`;
    return axiosClient.delete(url);
  },
};

export default userAPI;