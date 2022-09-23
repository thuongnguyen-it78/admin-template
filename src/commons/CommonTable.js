import { TableOutlined } from '@ant-design/icons'
import { Table } from 'antd'
import { useMemo } from 'react'
import CommonCard from './CommonCard'

function CommonTable({ dataSource, columns, name, isLoading, pagination, onPageChange, cardProps, size = 'middle' }) {
  const newPagination = useMemo(
    () => ({
      total: pagination?.total,
      pageSize: pagination?.perPage,
      current: pagination?.page,
    }),
    [pagination]
  )

  return (
    <CommonCard
      title={
        <b>
          <TableOutlined style={{ marginRight: 5 }} />
          {`Danh sách ${name ? name : ''}`.toUpperCase()}
        </b>
      }
      {...cardProps}
    >
      <Table
        rowKey="id"
        size={size}
        dataSource={dataSource || []}
        columns={columns}
        onChange={onPageChange}
        pagination={{
          position: ['topRight', 'bottomRight'],
          showSizeChanger: false,
          showLessItems: true,
          showTotal: (total, range) => `${total}${name ? ' '.concat(name) : ''} | Từ ${range[0]} đến ${range[1]}`,
          ...newPagination,
        }}
        scroll={{ x: 1200 }}
        loading={isLoading}
      />
    </CommonCard>
  )
}

CommonTable.propTypes = {}

export default CommonTable
