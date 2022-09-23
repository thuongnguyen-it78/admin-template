import { Card } from 'antd'

function CommonCard({ children, ...rest }) {
  return (
    <Card size="small" {...rest}>
      {children}
    </Card>
  )
}

CommonCard.propTypes = {}

export default CommonCard
