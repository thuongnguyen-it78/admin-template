import { cloneDeep } from 'lodash'
import moment from 'moment'

export const formatValueFilter = (filter) => {
  let cloneFilter = cloneDeep(filter)
  // for (const filterKey in cloneFilter) {
  //   // process date
  //   if (dateKeyList.includes(filterKey) && cloneFilter[filterKey]) {
  //     cloneFilter[filterKey] = moment(cloneFilter[filterKey], 'YYYY-MM-DD')
  //     console.log(cloneFilter[filterKey])
  //   }
  // }
  return cloneFilter
}

export const formatFilterBeforeSyncURL = (filter) => {
  const cloneFilter = cloneDeep(filter)
  for (let filterKey in cloneFilter) {
    // process date
    if (moment.isMoment(cloneFilter[filterKey])) {
      cloneFilter[filterKey] = moment(cloneFilter[filterKey]).format('YYYY-MM-DD')
    }

    // process undefined and null value
    if (cloneFilter[filterKey] === null || cloneFilter[filterKey] === undefined) {
      delete cloneFilter[filterKey]
    }
  }

  return cloneFilter
}

export const formatFilterValue = ({ value, type, split, defaultValue = undefined }) => {
  if (value === undefined || value === null) return defaultValue
  if (!type) return value

  if (type === 'date') return moment(value).isValid() ? moment(value) : defaultValue
  if (type === 'number') return Number(value)
  if (type === 'array') return value.split(split)
  return value
}
