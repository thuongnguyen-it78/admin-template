import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const defaultRoutes = [{ path: '/dashboard', name: 'Dashboard' }]

function CommonBreadcrumb({ routes }) {
  const renderBreadcrumbItems = (routes) => {
    const newRoutes = [...defaultRoutes, ...routes]
    return newRoutes.map((item, index) => {
      if (item.active || item.disabled) {
        return <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>
      }

      return (
        <Breadcrumb.Item key={index}>
          <Link
            to={{
              pathname: item.path,
              search: item.search,
            }}
          >
            {item.name}
          </Link>
        </Breadcrumb.Item>
      )
    })
  }

  return <Breadcrumb className="common-breadcrumb mb-2">{renderBreadcrumbItems(routes || [])}</Breadcrumb>
}

export default CommonBreadcrumb
