import { Suspense } from 'react'
import ProgressBarLoading from './ProgressBarLoading'

const Loader = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <ProgressBarLoading />
      }
    >
      <Component {...props} />
    </Suspense>
  )

export default Loader
