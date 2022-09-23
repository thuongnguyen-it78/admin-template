import { Menu, Layout } from 'antd'
import { navList } from 'constants/nav'
import useWindowSize from 'hooks/useWindowSize'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

function MainSider(props) {
  const location = useLocation()
  const [width] = useWindowSize()
  const [collapsed, setCollapsed] = useState(width < 900 ? true : false)

  const defaultSelectedKey = useMemo(() => {
    return location.pathname
  }, [location.pathname])

  const defaultOpenKeys = useMemo(() => {
    return []
  }, [])

  useEffect(() => {
    const subLayout = document.getElementById('sub-main-layout-id')
    if (subLayout) {
      subLayout.style.marginLeft = collapsed ? '80px' : '200px'
    }
  }, [collapsed])

  return (
    <Layout.Sider
      collapsible
      className="main-layout-sider"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu mode="inline" selectedKeys={defaultSelectedKey} defaultOpenKeys={defaultOpenKeys} items={navList} />
    </Layout.Sider>
  )
}

MainSider.propTypes = {}

export default MainSider
