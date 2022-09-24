import { Card, Spin } from 'antd'
import clsx from 'clsx'

function CommonCard({ title, children, isLoading, className, ...rest }) {
  return (
    <Card
      size="small"
      title={title && <b>{title}</b>}
      className={clsx('common-card', className && className)}
      {...rest}
    >
      <Spin spinning={Boolean(isLoading)}>{children}</Spin>
    </Card>
  )
}

CommonCard.propTypes = {}

export default CommonCard
