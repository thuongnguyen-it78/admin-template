import { TableOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import { defaultPagination } from 'constants/common'
import { useMemo } from 'react'
import CommonCard from './CommonCard'

function CommonTable({ dataSource, columns, name, isLoading, pagination, cardProps, size = 'default', onPageChange }) {
  const newPagination = useMemo(
    () => ({
      total: pagination?.total,
      pageSize: pagination?.perPage || defaultPagination.perPage,
      current: pagination?.page || defaultPagination.page,
    }),
    [pagination]
  )

  return (
    <CommonCard
      title={
        <Space>
          <TableOutlined />
          {`Danh sách ${name ? name : ''}`.toUpperCase()}
        </Space>
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
