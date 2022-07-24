import { Tag } from "antd"

export const findInArr = (array, comparativeValue, comparativeField = 'id', returnKey) => {
  if (!Array.isArray(array) || array?.length === 0) return undefined

  const result = array.find((item) => item?.[comparativeField] === comparativeValue)
  return result && returnKey ? result?.[returnKey] : result
}

export const findAndRenderStatus = (statusList, value) => {
  const status = findInArr(statusList, value)

  return status && <Tag color={status.color}>{status.name}</Tag>
}

export const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return array
}
