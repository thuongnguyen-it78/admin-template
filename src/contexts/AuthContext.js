import { localStorageKeys } from 'constants/config'
import useLocalStorage from 'hooks/useLocalStorage'
import { createContext } from 'react'
export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage(localStorageKeys.AUTH, {})

  const handleAuthChange = (value) => {    
    setAuth({
      ...auth,
      ...value,
    })
  }  

  console.log(auth);
  

  return (
    <AuthContext.Provider
      value={{
        user: auth?.user,
        token: auth?.token,
        isLoggedIn: Boolean(auth?.token),
        onAuthChange: handleAuthChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
