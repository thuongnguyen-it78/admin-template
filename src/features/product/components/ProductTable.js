import CommonTable from 'commons/CommonTable'

function ProductTable({ data, loading, pagination, onPageChange }) {
  const columns = [
    {
      title: 'Mã thành viên',
      dataIndex: 'code',
    },
    {
      title: 'Tên thành viên',
      dataIndex: 'name',
    },
    {
      title: 'Loại tài khoản',
      key: 'account_type',
      dataIndex: 'account_type',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Điểm kết nối',
      dataIndex: ['point_info', 'point'],
      align: 'center',
    },
    {
      title: 'MFF quản lý',
      dataIndex: ['mff_info', 'info', 'name'],
    },
    {
      title: 'Phân vùng',
      dataIndex: ['city_working_info', 'parent_info', 'name'],
    },
    {
      title: 'Tỉnh thành',
      dataIndex: ['city_working_info', 'name'],
    },
  ]
  return (
    <CommonTable
      pagination={pagination}
      isLoading={loading}
      dataSource={data}
      columns={columns}
      onPageChange={onPageChange}
    />
  )
}

ProductTable.propTypes = {}

export default ProductTable
