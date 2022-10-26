import { createContext, useState } from 'react'
export const PermissionContext = createContext()

function PermissionProvider({ children }) {
  const [permission, setPermission] = useState({
    BUTTON: true,
  })

  const handlePermissionChange = (value) => {
    setPermission(value)
  }

  return (
    <PermissionContext.Provider
      value={{
        permission: permission,
        onPermissionChange: handlePermissionChange,
      }}
    >
      {children}
    </PermissionContext.Provider>
  )
}

export default PermissionProvider
