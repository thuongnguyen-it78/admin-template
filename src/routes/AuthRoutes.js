import GuestGuard from 'commons/GuestGuard'
import MinimalLayout from 'commons/layout/MinimalLayout'
import Loader from 'commons/Loader'
import { LOGIN_PATH } from 'constants/path'
import { lazy } from 'react'

const Login = Loader(lazy(() => import('features/auth/pages/Login')))

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
