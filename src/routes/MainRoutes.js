import { lazy } from 'react'

import AuthGuard from 'commons/AuthGuard'
import MainLayout from 'commons/layout/MainLayout'
import Loader from 'commons/Loader'
import NotFound from 'commons/NotFound'
import { DASHBOARD_PATH, NOT_FOUND_PATH, PRODUCT_PATH, USER_PATH } from 'constants/path'

// product routing
const Dashboard = Loader(lazy(() => import('features/dashboard/pages/Dashboard')))
const ProductList = Loader(lazy(() => import('features/product/pages/ProductList')))
const UserList = Loader(lazy(() => import('features/user/pages/UserList')))


// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: DASHBOARD_PATH,
      element: <Dashboard />,
    },
    {
      path: PRODUCT_PATH,
      element: <ProductList />,
    },
    {
      path: USER_PATH,
      element: <UserList />,
    },
    {
      path: NOT_FOUND_PATH,
      element: <NotFound />,
    },
    // {
    //     path: '/e-commerce/product-details/:id',
    //     element: <AppECommProductDetails />
    // },
    // {
    //   path: '/app/kanban',
    //   element: <AppKanban />,
    //   children: [
    //     {
    //       path: 'backlogs',
    //       element: <AppKanbanBacklogs />,
    //     },
    //     {
    //       path: 'board',
    //       element: <AppKanbanBoard />,
    //     },
    //   ],
    // },
  ],
}

export default MainRoutes
