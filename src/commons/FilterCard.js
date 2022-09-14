import { ClearOutlined, DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useState } from 'react'
import CommonCard from './CommonCard'

export default function FilterCard({ children, onReset, isExpand, noneBorder, className }) {
  const [expand, setExpand] = useState(isExpand)

  return (
    <CommonCard
      title="BỘ LỌC"
      className={`${!expand ? 'filter-card-small mb-3' : 'mb-3'} ${className || ''} filter-card`}
      bordered={noneBorder ? false : true}
      extra={
        <Space>
          <Button onClick={onReset} icon={<ClearOutlined />}>
            Xóa bộ lọc
          </Button>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
          <Button onClick={() => setExpand(!expand)} icon={expand ? <DownOutlined /> : <UpOutlined />}>
            {expand ? 'Thu gọn' : 'Mở rộng'}
          </Button>
        </Space>
      }
    >
      {children}
    </CommonCard>
  )
}
