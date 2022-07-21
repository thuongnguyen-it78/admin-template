import { useMemo } from "react"

function CommonTable({ dataSource, columns, name, pagination, onPageChange }) {
  const newPagination = useMemo(
    () => ({
      total: pagination.total,
      pageSize: pagination.perPage,
      current: pagination.page,
    }),
    [pagination]
  )

  return (
    <Table
      locale={{
        emptyText: <Empty description="Không có dữ liệu" image={Empty.PRESENTED_IMAGE_SIMPLE} />,
      }}
      dataSource={dataSource || []}
      columns={columns}
      onChange={onPageChange}
      rowKey="id"
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
  )
}

CommonTable.propTypes = {}

export default CommonTable
