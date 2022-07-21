import { Outlet } from 'react-router-dom'

function MinimalLayout(props) {
  return (
    <>
      <Outlet />
    </>
  )
}

MinimalLayout.propTypes = {}

export default MinimalLayout
