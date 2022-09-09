import { useEffect, useState } from 'react'

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    try {
      return storedValue === null ? localStorage.setItem(key, JSON.stringify(defaultValue)) : JSON.parse(storedValue)
    } catch (error) {
      localStorage.removeItem(key)
    }
  })

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue)
      }
    }
    window.addEventListener('storage', listener)

    return () => {
      window.removeEventListener('storage', listener)
    }
  }, [key, defaultValue])

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue
      localStorage.setItem(key, JSON.stringify(result))
      return result
    })
  }

  return [value, setValueInLocalStorage]
}
