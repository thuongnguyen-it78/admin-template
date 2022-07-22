export const resetObject = (object) => {
  const result = {}
  for (let key in object) {
    result[key] = undefined
  }

  return result
}
