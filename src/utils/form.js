import moment from "moment"

export const checkDisableFrom = (start, field, form, disableAfterCurrent = true) => {
  if (disableAfterCurrent && start.valueOf() > moment().valueOf()) {
    return true
  }

  const end = form.getFieldValue(field)
  if (!start || !end) {
    return false
  }

  return start.valueOf() > end.valueOf()
}

export const checkDisableTo = (end, field, form, disableAfterCurrent = true) => {
  if (disableAfterCurrent && end.valueOf() > moment().valueOf()) {
    return true
  }

  const start = form.getFieldValue(field)
  if (!start || !end) {
    return false
  }

  return end.valueOf() <= start.valueOf()
}
