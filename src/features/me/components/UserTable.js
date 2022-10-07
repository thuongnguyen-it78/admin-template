import { Space } from 'antd'
import { AddButton, ViewButton } from 'commons/CommonButton'
import CommonTable from 'commons/CommonTable'
import ExportButton from 'commons/ExportButton'
import { userRoleList, userStatusList } from 'constants/user'
import { Link } from 'react-router-dom'
import { findAndRenderStatus } from 'utils/array'
import { formatDateToString } from 'utils/date'

function UserTable({ data, isLoading, pagination, onPageChange }) {
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      width: 130,
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'SĐT',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Phân quyền',
      dataIndex: 'role',
      render: (value) => findAndRenderStatus(userRoleList, value),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (value) => findAndRenderStatus(userStatusList, value),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      render: (value) => formatDateToString(value),
    },
    {
      title: 'Hành động',
      width: 150,
      fixed: 'right',
      align: 'center',
      render: (value) => {
        return (
          <Link
            to={{
              pathname: `/users/${value.id}`,
            }}
          >
            <ViewButton />
          </Link>
        )
      },
    },
  ]

  const renderExtra = () => {
    return (
      <Space>
        <ExportButton title="Xuất dữ liệu" file_name="Users" />
        <Link to="/users/add">
          <AddButton>Thêm người dùng</AddButton>
        </Link>
      </Space>
    )
  }

  return (
    <CommonTable
      name="Người dùng"
      columns={columns}
      cardProps={{ extra: renderExtra() }}
      pagination={pagination}
      isLoading={isLoading}
      dataSource={data}
      onPageChange={onPageChange}
    />
  )
}

UserTable.propTypes = {}

export default UserTable
