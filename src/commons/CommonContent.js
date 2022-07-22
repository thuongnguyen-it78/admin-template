import { Fragment } from 'react'
import CommonBreadcrumb from './CommonBreadcumb'
import CommonError from './CommonError'

function CommonContent({ breadcrumb, isError, children }) {
  return (
    <Fragment>
      <CommonBreadcrumb routes={breadcrumb} />
      {isError ? <CommonError /> : children}
    </Fragment>
  )
}

CommonContent.propTypes = {}

export default CommonContent
