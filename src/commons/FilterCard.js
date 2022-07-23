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
        <span
          className="ms-2"
          style={{ color: '#008efb', cursor: 'pointer', width: '250px' }}
          onClick={() => setExpand(!expand)}
        >
          {expand ? <DownOutlined /> : <UpOutlined />}
        </span>
      }
    >
      {children}
      <div className="d-flex justify-content-end mt-2">
        <Space>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
          <Button onClick={onReset} icon={<ClearOutlined />}>
            Xóa bộ lọc
          </Button>
        </Space>
      </div>
    </CommonCard>
  )
}
