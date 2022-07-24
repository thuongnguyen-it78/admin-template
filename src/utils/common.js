import { Tag } from 'antd'
import { localStorageKeys } from 'constants/config'
import moment from 'moment'

export function unAccent(str) {
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
  str = str.replace(/\u02C6|\u0306|\u031B/g, '')
  return str
}

export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem(localStorageKeys.AUTH))?.token
}

export const logOut = () => {
  localStorage.removeItem(localStorageKeys.AUTH)
  return true
}

export const findInArr = (array, comparativeValue, comparativeField = 'id', returnKey) => {
  if (!Array.isArray(array) || array?.length === 0) return undefined

  const result = array.find((item) => item?.[comparativeField] === comparativeValue)
  return result && returnKey ? result?.[returnKey] : result
}

export const findAndRenderStatus = (statusList, value) => {
  const status = findInArr(statusList, value)

  return status && <Tag color={status.color}>{status.name}</Tag>
}

export const formatDateToString = (string, type = 'lv1') => {
  const date = moment(string)
  if (!date.isValid()) return 'Wrong time format'

  switch (type) {
    case 'lv1':
      return date.format('DD/MM/YYYY')
    case 'lv2':
      return date.format('DD/MM/YYYY HH:mm')
    case 'lv3':
      return date.format('DD/MM/YYYY HH:mm:ss')
    default:
      return date.format('DD/MM/YYYY')
  }
}
