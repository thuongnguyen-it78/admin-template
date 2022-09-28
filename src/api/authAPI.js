import axiosClient from './axiosClient'

const authAPI = {
  login(payload) {
    const url = '/auth/login'
    return axiosClient.post(url, payload)
  },

  logout() {
    const url = `/auth/log-out`
    return axiosClient.put(url)
  },
}

export default authAPI
