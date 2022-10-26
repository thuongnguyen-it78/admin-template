import NotFound from 'commons/NotFound'
import usePermission from 'hooks/userPermisson'
import { useRoutes } from 'react-router-dom'

import AuthRoutes from './AuthRoutes'
import MainRoutes from './MainRoutes'

export default function Routes() {
  const { permission } = usePermission()

  return useRoutes([
    { ...MainRoutes, children: MainRoutes.children.filter((item) => permission[item.actionKey]) },
    AuthRoutes,
    { path: '*', element: <NotFound /> },
  ])
}
