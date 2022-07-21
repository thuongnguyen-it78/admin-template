import { DesktopOutlined, FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

let navItems = [
  {
    label: 'Dashboard',
    icon: <PieChartOutlined />,
  },
  {
    label: 'User',
    icon: <DesktopOutlined />,
  },
  {
    label: 'Product',
    icon: <FileOutlined />,
  },
  {
    label: 'System',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Permission',
        icon: <UserOutlined />,
      },
      {
        label: 'Theme',
        icon: <UserOutlined />,
      },
      {
        label: 'Version',
        icon: <UserOutlined />,
      },
    ],
  },
]

function getNavList(navList) {
  return navList.map(({ label, key, icon, children }) => ({
    key,
    icon,
    children: children && getNavList(children),
    label: children ? label : <Link to={label}>{label}</Link>,
  }))
}

export const navList = getNavList(navItems)