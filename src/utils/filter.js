import _ from 'lodash'
import moment from 'moment'

const dateKeyList = [
  'created_to',
  'created_from',
  'used_from',
  'used_to',
  'activated_from',
  'activated_to',
  'ended_at',
  'started_at',
  'scheduling_time_from',
  'scheduling_time_To',
  'completed_from',
  'completed_to',
  'expired_date_from',
  'expired_date_to',
]

export const formatValueFilter = (filter) => {
  let cloneFilter = _.cloneDeep(filter)
  for (const filterKey in cloneFilter) {
    // process date
    if (dateKeyList.includes(filterKey) && cloneFilter[filterKey]) {
      cloneFilter[filterKey] = moment(cloneFilter[filterKey], 'YYYY-MM-DD')
    }
  }
  return cloneFilter
}

export const formatFilterBeforeSyncURL = (filter) => {
  const cloneFilter = _.cloneDeep(filter)
  for (let filterKey in cloneFilter) {
    // process date
    if (dateKeyList.includes(filterKey) && cloneFilter[filterKey]) {
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

  if (type === 'date') return moment(value)
  if (type === 'number') return Number(value)
  if (type === 'array') return value.split(split)
  return value
}
