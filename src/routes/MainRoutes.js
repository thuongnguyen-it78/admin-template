import { lazy } from 'react'

import Loader from 'commons/Loader'
import AuthGuard from 'commons/AuthGuard'
import MainLayout from 'commons/layout/MainLayout'
import { PRODUCT_PATH } from 'constants/path'

// product routing
const ProductList = Loader(lazy(() => import('feature/product/pages/ProductList')))

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
      path: PRODUCT_PATH,
      element: <ProductList />,
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
