import CommonTable from 'commons/CommonTable'
import { userStatusList } from 'constants/user'
import { findAndRenderStatus, formatDateToString } from 'utils/common'

function UserTable({ data, loading, pagination, onPageChange }) {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'user_name',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (value) => findAndRenderStatus(userStatusList, value),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'created_at',
      render: (value) => formatDateToString(value),
    },
  ]

  return (
    <CommonTable
      name="người dùng"
      pagination={pagination}
      isLoading={loading}
      dataSource={data}
      columns={columns}
      onPageChange={onPageChange}
    />
  )
}

UserTable.propTypes = {}

export default UserTable
