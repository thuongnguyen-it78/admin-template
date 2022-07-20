import GuestGuard from 'commons/GuestGuard'
import MinimalLayout from 'commons/layout/MinimalLayout'
import Loader from 'commons/Loader'
import { LOGIN_PATH } from 'constants/path'
import { lazy } from 'react'

// auth routing
const Login = Loader(lazy(() => import('feature/auth/pages/Login')))

const LoginRoutes = {
  path: '/',
  element: (
    <GuestGuard>
      <MinimalLayout />
    </GuestGuard>
  ),
  children: [
    {
      path: LOGIN_PATH,
      element: <Login />,
    },
  ],
}

export default LoginRoutes
