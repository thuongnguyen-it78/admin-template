import axiosClient from './axiosClient'

const authAPI = {
  login(payload) {
    const url = '/login'
    return axiosClient.post(url, payload)
  },

  logout() {
    const url = `/logout`
    return axiosClient.put(url)
  },
}

export default authAPI
