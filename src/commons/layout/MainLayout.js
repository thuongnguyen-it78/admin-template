import { Breadcrumb, Layout, Menu } from 'antd'
import { navList } from 'constants/nav'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="main-layout">
      <Sider
        className="main-layout-sider"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu defaultSelectedKeys={['1']} mode="inline" items={navList} />
      </Sider>

      <Layout className="sub-main-layout">
        <Header className="sub-main-layout-header"></Header>

        <Content className="sub-main-layout-content">
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="sub-main-layout-outlet">
            <Outlet />
          </div>
        </Content>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Created by heart
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
