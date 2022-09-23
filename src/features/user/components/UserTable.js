import { Space } from 'antd'
import { AddButton, ViewButton } from 'commons/CommonButton'
import CommonTable from 'commons/CommonTable'
import ExportButton from 'commons/ExportButton'
import { userStatusList } from 'constants/user'
import { Link } from 'react-router-dom'
import { findAndRenderStatus } from 'utils/array'

function UserTable({ data, isLoading, pagination, onPageChange }) {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'SĐT',
      dataIndex: 'phone',
    },
    {
      title: 'Phân quyền',
      dataIndex: 'role_id',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (value) => findAndRenderStatus(userStatusList, value),
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
