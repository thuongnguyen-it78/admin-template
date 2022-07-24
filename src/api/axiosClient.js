import axios from 'axios'
import { getAccessToken, logOut } from 'utils/common'
import { API_URL } from '../constants/config'

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = getAccessToken()
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.status === 401) {
      // clear token ...
      logOut()
      window.location.replace('/')
    }

    return Promise.reject(error)
  }
)

export default axiosClient
