import { localStorageKeys } from 'constants/config'
import useLocalStorage from 'hooks/useLocalStorage'
import { createContext } from 'react'
export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage(localStorageKeys.AUTH, {
    user: {
      name: 'Andres Nguyen',
    },
    token:
      'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsInVzZXJfbmFtZSI6ImFuZHJlc25ndXllbiIsInR5cGUiOjEsIm5hbWUiOiJBbmRyZXMiLCJpYXQiOjE2NTg2NDc0MzF9.3XryUmpf7ltPruKuzVVlSilOx3uMCdNV7E64sh-telAqN9FBFqqGNuIz-K0Es2iPgdp7vue8CRnaapR3TATVlQ',
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
