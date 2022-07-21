import { DesktopOutlined, FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

let navItems = [
  {
    label: 'Dashboard',
    icon: <PieChartOutlined />,
    path: '/'
  },
  {
    label: 'User',
    icon: <DesktopOutlined />,
    path: '/users'

  },
  {
    label: 'Product',
    icon: <FileOutlined />,
    path: '/products'

  },
  {
    label: 'System',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Permission',
        icon: <UserOutlined />,
        path: '/permissions'

      },
      {
        label: 'Theme',
        icon: <UserOutlined />,
        path: '/themes'

      },
      {
        label: 'Version',
        icon: <UserOutlined />,
        path: '/versions'
      },
    ],
  },
]

function getNavList(navList) {
  return navList.map(({ label, key, icon, children, path }) => ({
    key,
    icon,
    children: children && getNavList(children),
    label: children ? label : <Link to={path}>{label}</Link>,
  }))
}

export const navList = getNavList(navItems)