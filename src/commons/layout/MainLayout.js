import { Layout } from 'antd'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import MainSider from './MainSider'

const { Header, Content, Footer } = Layout

const MainLayout = () => {
  console.log('rendering')

  useEffect(() => {
    console.log('mount')
    return () => console.log('unmount')
  }, [])
  return (
    <Layout className="main-layout">
      <MainSider />

      <Layout className="sub-main-layout" id="sub-main-layout-id">
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
