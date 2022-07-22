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
  for (const property in cloneFilter) {
    if (dateKeyList.includes(property) && cloneFilter[property]) {
      cloneFilter[property] = moment(cloneFilter[property], 'YYYY-MM-DD')
    }
  }
  return cloneFilter
}

export const formatFilterBeforeSyncURL = (filter) => {
  const cloneFilter = _.cloneDeep(filter)
  dateKeyList.forEach((dateKey) => {
    if (cloneFilter[dateKey]) {
      cloneFilter[dateKey] = moment(cloneFilter[dateKey]).format('YYYY-MM-DD')
    }
  })

  return cloneFilter
}
