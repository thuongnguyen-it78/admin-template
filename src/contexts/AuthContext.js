import useLocalStorage from 'hooks/useLocalStorage'
import { createContext } from 'react'
export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage('auth', {
    user: {
      name: 'Andres Nguyen',
    },
  })

  const handleAuthChange = (value) => {
    setAuth({
      ...auth,
      ...value,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user: auth?.user,
        token: auth?.token,
        isLoggedIn: Boolean(auth?.user),
        onAuthChange: handleAuthChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
