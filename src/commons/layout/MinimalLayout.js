import { Outlet } from 'react-router-dom'

function MinimalLayout(props) {
  console.log("first")
  return (
    <>
      <Outlet />
    </>
  )
}

MinimalLayout.propTypes = {}

export default MinimalLayout
