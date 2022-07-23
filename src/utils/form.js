import moment from 'moment'

export const checkDisableFrom = (startDate, endDateField, form, disableAfterToday = true) => {
  if (disableAfterToday && startDate.valueOf() > moment().valueOf()) {
    return true
  }

  const endDate = form.getFieldValue(endDateField)
  if (!startDate || !endDate) {
    return false
  }

  return startDate.valueOf() > endDate.valueOf()
}

export const checkDisableTo = (endDate, startDateField, form, disableAfterToday = true) => {
  if (disableAfterToday && endDate.valueOf() > moment().valueOf()) {
    return true
  }

  const startDate = form.getFieldValue(startDateField)
  if (!startDate || !endDate) {
    return false
  }

  return endDate.valueOf() <= startDate.valueOf()
}
