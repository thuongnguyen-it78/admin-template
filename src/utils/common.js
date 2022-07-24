import { localStorageKeys } from 'constants/config'
import { Color } from 'constants/theme'

export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem(localStorageKeys.AUTH))?.token
}

export const logOut = () => {
  localStorage.removeItem(localStorageKeys.AUTH)
  return true
}

export const requiredLabel = (label) => (
  <span>
    {label} <span style={{ color: Color.red }}>*</span>
  </span>
)
