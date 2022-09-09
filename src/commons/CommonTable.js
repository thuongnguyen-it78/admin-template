import { Table } from 'antd'
import { useMemo } from 'react'
import CommonCard from './CommonCard'

function CommonTable({ dataSource, columns, name, isLoading, pagination, onPageChange, cardProps }) {
  const newPagination = useMemo(
    () => ({
      total: pagination?.total,
      pageSize: pagination?.perPage,
      current: pagination?.page,
    }),
    [pagination]
  )

  return (
    <CommonCard title={`Danh sách ${name ? name : ''}`.toUpperCase()} {...cardProps}>
      <Table
        rowKey="id"
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
