import { Card } from 'antd'

function CommonCard({ children, ...rest }) {
  return <Card {...rest}>{children}</Card>
}

CommonCard.propTypes = {}

export default CommonCard
