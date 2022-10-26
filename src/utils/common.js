import { localStorageKeys } from 'constants/config'
import { Color } from 'constants/theme'

export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem(localStorageKeys.AUTH))?.token
}

export const logOut = () => {
  localStorage.removeItem(localStorageKeys.AUTH)
}

export const requiredLabel = (label) => (
  <span>
    {label} <span style={{ color: Color.red }}>*</span>
  </span>
)

export const getItemLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const setItemLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value))
}

export const wait = (time) =>
  new Promise((resolve) => setTimeout(resolve, time * 1000));