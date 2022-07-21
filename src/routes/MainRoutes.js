import { lazy } from 'react'

import AuthGuard from 'commons/AuthGuard'
import MainLayout from 'commons/layout/MainLayout'
import Loader from 'commons/Loader'
import NotFound from 'commons/NotFound'
import { DASHBOARD_PATH, NOT_FOUND_PATH, PRODUCT_PATH } from 'constants/path'

// product routing
const ProductList = Loader(lazy(() => import('features/product/pages/ProductList')))

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
      element: <ProductList />,
    },
    {
      path: PRODUCT_PATH,
      element: <ProductList />,
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
