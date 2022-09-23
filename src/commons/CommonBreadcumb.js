import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { PieChartOutlined } from '@ant-design/icons'

const defaultRoutes = [{ path: '/dashboard', name: 'Dashboard', icon: <PieChartOutlined /> }]

function CommonBreadcrumb({ routes }) {
  const renderBreadcrumbItems = (routes) => {
    const newRoutes = [...defaultRoutes, ...routes]
    return newRoutes.map((item, index) => {
      const children = (
        <span className="d-inline-flex align-items-center">
          {item.icon && <span className="pe-1">{item.icon}</span>}
          <span>{item.name}</span>
        </span>
      )

      if (item.active || item.disabled) {
        return <Breadcrumb.Item key={index}>{children}</Breadcrumb.Item>
      }

      return (
        <Breadcrumb.Item key={index}>
          <Link
            to={{
              pathname: item.path,
              search: item.search,
            }}
          >
            {children}
          </Link>
        </Breadcrumb.Item>
      )
    })
  }

  return <Breadcrumb className="common-breadcrumb mb-2">{renderBreadcrumbItems(routes || [])}</Breadcrumb>
}

export default CommonBreadcrumb
