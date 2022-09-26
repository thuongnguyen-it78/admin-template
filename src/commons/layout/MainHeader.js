import { UserOutlined, LockOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd'
import logo from 'assets/images/logo.png'
function MainHeader(props) {
  const menu = (
    <Menu
      items={[
        {
          key: '0',
          label: <div>Tài khoản</div>,
          icon: <UserOutlined />,
        },
        {
          key: '1',
          label: <div>Đổi mật khẩu</div>,
          icon: <LockOutlined />,
        },
        {
          key: '2',
          label: <div>Cài đặt</div>,
          icon: <SettingOutlined />,
        },
        {
          type: 'divider',
        },
        {
          key: '3',
          label: <div>Đăng xuất</div>,
          danger: true,
          icon: <LogoutOutlined />,
        },
      ]}
    />
  )

  return (
    <div className="main-header justify-content-between">
      <div className="main-header-logo">
        <img src={logo} alt="" />
        <span className="main-header-logo-text">Andres CRM</span>
      </div>

      <Dropdown overlay={menu} trigger={['click']} style={{ marginLeft: 'auto' }} placement="bottomRight" arrow>
        <Space style={{ cursor: 'pointer' }}>
          <Avatar icon={<UserOutlined />} src={''} />
          <Typography c>Andres Nguyen</Typography>
        </Space>
      </Dropdown>
    </div>
  )
}

MainHeader.propTypes = {}

export default MainHeader
