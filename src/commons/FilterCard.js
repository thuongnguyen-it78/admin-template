import { ClearOutlined, CaretDownFilled, SearchOutlined, CaretUpFilled } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useState } from 'react'
import CommonCard from './CommonCard'

export default function FilterCard({ name, children, onReset, isExpand, noneBorder, className }) {
  const [expand, setExpand] = useState(isExpand)

  return (
    <CommonCard
      title={
        <span onClick={() => setExpand(!expand)} style={{ cursor: 'pointer', userSelect: 'none' }}>
          {expand ? <CaretDownFilled /> : <CaretUpFilled />} {`Bộ lọc ${name ? name : ''}`.toUpperCase()}
        </span>
      }
      className={`${!expand ? 'filter-card-small mb-3' : 'mb-3'} ${className || ''} filter-card common-shadow`}
      bordered={noneBorder ? false : true}
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
