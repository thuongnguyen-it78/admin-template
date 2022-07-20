import { LOGIN_PATH } from 'constants/path'
import useAuth from 'hooks/userAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(LOGIN_PATH, { replace: true })
    }
  }, [isLoggedIn, navigate])

  return children
}

export default AuthGuard
