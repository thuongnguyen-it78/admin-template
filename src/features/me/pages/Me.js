import { Col, Row, Tabs } from 'antd'
import CommonCard from 'commons/CommonCard'
import CommonContent from 'commons/CommonContent'

function Me(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Thông tin cá nhân' }]

  const content = [
    {
      key: 1,
      label: 'Thông tin cá nhân',
      children: 'Thông tin cá nhân',
    },
    {
      key: 2,
      label: 'Đổi mật khẩu',
      children: 'Đổi mật khẩu',
    },
  ]

  return (
    <CommonContent breadcrumb={breadcrumb} isError={false}>
      <Row>
        <Col span={12} offset={6}>
          <CommonCard bodyStyle={{ paddingInline: 0 }}>
            <Tabs tabPosition="left" items={content} />
          </CommonCard>
        </Col>
      </Row>
    </CommonContent>
  )
}

Me.propTypes = {}

export default Me
