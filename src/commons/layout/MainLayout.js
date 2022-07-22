import { Layout, Menu } from 'antd'
import { navList } from 'constants/nav'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

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

      <Layout
        className="sub-main-layout"
        style={{
          marginLeft: collapsed ? 80 : 200,
        }}
      >
        <Header className="sub-main-layout-header">
          <MainHeader />
        </Header>

        <Content className="sub-main-layout-content">
          <Outlet />
        </Content>

        <Footer>
          <MainFooter />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
