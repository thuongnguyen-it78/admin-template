import moment from "moment"

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
