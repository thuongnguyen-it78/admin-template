import NotFound from 'commons/NotFound'
import { useRoutes } from 'react-router-dom'

import AuthRoutes from './AuthRoutes'
import MainRoutes from './MainRoutes'

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthRoutes, { path: '*', element: <NotFound /> }])
}
