import { Outlet } from 'react-router-dom'

function MainLayout(props) {
  return (
    <>
      Main layout
      <Outlet />
    </>
  )
}

MainLayout.propTypes = {}

export default MainLayout
