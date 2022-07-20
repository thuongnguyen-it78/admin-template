import { DASHBOARD_PATH } from "constants/path"
import useAuth from "hooks/userAuth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate(DASHBOARD_PATH, { replace: true })
    }
  }, [isLoggedIn, navigate])

  return children
}

export default GuestGuard
