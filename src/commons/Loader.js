import { Spin } from 'antd'
import { Suspense } from 'react'

const Loader = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <div className="suspense-fallback">
          <Spin />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )

export default Loader
