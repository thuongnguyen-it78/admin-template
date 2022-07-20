import { createContext } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'
export const ConfigContext = createContext()

function ConfigProvider({ children }) {
  const [config, setConfig] = useLocalStorage('berry-config', {})

  const handleConfigChange = (value) => {
    setConfig({
      ...config,
      ...value
    })
  }

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onConfigChange: handleConfigChange,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
