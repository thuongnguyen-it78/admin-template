import { UserOutlined, LockOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd'
import logo from 'assets/images/logo.png'
import useAuth from 'hooks/userAuth'
import { findInArr } from 'utils/array'
function MainHeader(props) {
  const { user } = useAuth()

  const menuItemList = [
    {
      key: '0',
      label: <div>Tài khoản</div>,
      icon: <UserOutlined />,
      onClick: () => console.log('account'),
    },
    {
      key: '1',
      label: <div>Đổi mật khẩu</div>,
      icon: <LockOutlined />,
      onClick: () => console.log('change password'),
    },
    {
      key: '2',
      label: <div>Cài đặt</div>,
      icon: <SettingOutlined />,
      onClick: () => console.log('setting'),
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: <div>Đăng xuất</div>,
      danger: true,
      icon: <LogoutOutlined />,
      onClick: () => console.log('log out'),
    },
  ]

  const handleMenuItemClick = ({ key }) => {
    const item = findInArr(menuItemList, key, 'key')
    item.onClick()
  }
  const menu = <Menu onClick={handleMenuItemClick} items={menuItemList} />

  return (
    <div className="main-header justify-content-between">
      <div className="main-header-logo">
        <img src={logo} alt="" />
        <span className="main-header-logo-text">Andres CRM</span>
      </div>

      <Dropdown overlay={menu} trigger={['click']} style={{ marginLeft: 'auto' }} placement="bottomRight" arrow>
        <Space style={{ cursor: 'pointer' }}>
          <Avatar icon={<UserOutlined />} src={''} />
          <Typography>{user.fullName}</Typography>
        </Space>
      </Dropdown>
    </div>
  )
}

MainHeader.propTypes = {}

export default MainHeader
