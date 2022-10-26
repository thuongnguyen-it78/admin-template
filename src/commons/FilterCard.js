import { ClearOutlined, DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useState } from 'react'
import CommonCard from './CommonCard'

export default function FilterCard({ name, children, onReset, isExpand, noneBorder, className, ...rest }) {
  const [expand, setExpand] = useState(isExpand)

  return (
    <CommonCard
      title={
        <Space onClick={() => setExpand(!expand)} style={{ cursor: 'pointer', userSelect: 'none' }}>
          <span>{expand ? <DownOutlined /> : <UpOutlined />}</span>
          <span> {`Bộ lọc ${name ? name : ''}`.toUpperCase()}</span>
        </Space>
      }
      className={`${!expand ? 'filter-card-small mb-3' : 'mb-3'} ${className || ''} filter-card common-shadow`}
      bordered={noneBorder ? false : true}
      {...rest}
      extra={
        <Space>
          <Button onClick={onReset} icon={<ClearOutlined />}>
            Xóa bộ lọc
          </Button>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
        </Space>
      }
    >
      {children}
    </CommonCard>
  )
}
