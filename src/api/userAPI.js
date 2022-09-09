import axiosClient from './axiosClient';

const userAPI = {
  getAll(params) {
    const url = '/users';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/users';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/users/${data.id}`;
    return axiosClient.patch(url, data);
  },

  delete(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
};

export default userAPI;