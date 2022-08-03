import { Select, Tag } from 'antd'

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

export const renderOptionList = ({ optionList, valueKey = 'id', labelKey = 'name', selector }) => {
  if (!Array.isArray(optionList) || optionList?.length === 0) return undefined

  return optionList?.map((option) => (
    <Select.Option key={option[valueKey]} value={option[valueKey]}>
      {selector ? selector(option) : option[labelKey]}
    </Select.Option>
  ))
}
