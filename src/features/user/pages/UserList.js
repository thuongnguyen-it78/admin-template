import { Form } from 'antd'
import CommonContent from 'commons/CommonContent'
import { userStatusList } from 'constants/user'
import useFilter from 'hooks/useFilter'
import { defaultPagination } from 'constants/common'
import { checkDisableFrom, checkDisableTo } from 'utils/form'
import UserFilter from '../components/UserFilter'
import UserTable from '../components/UserTable'
import userAPI from 'api/userAPI'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from 'constants/queryKey'

function UserList(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Danh sách người dùng' }]
  const [filterForm] = Form.useForm()

  const filterList = [
    {
      name: 'name',
      hookProps: {
        type: 'string',
      },
      formProps: {
        type: 'input',
        placeholder: 'Tên',
      },
    },
    {
      name: 'status',
      hookProps: {
        type: 'number',
        split: ',',
        defaultValue: [],
      },
      formProps: {
        type: 'select',
        placeholder: 'Trạng thái',
        option: { list: userStatusList },
      },
    },
    {
      name: 'created_from',
      hookProps: {
        type: 'date',
      },
      formProps: {
        type: 'date',
        placeholder: 'Ngày tạo từ',
        disabledDate: (value) => checkDisableFrom(value, 'created_to', filterForm),
      },
    },
    {
      name: 'created_to',
      hookProps: {
        type: 'date',
      },
      formProps: {
        type: 'date',
        placeholder: 'Ngày tạo đến',
        disabledDate: (value) => checkDisableTo(value, 'created_from', filterForm),
      },
    },
  ]

  const { filter, apiFilter, onFilterChange, onResetFilter } = useFilter([
    ...filterList,
    {
      name: 'perPage',
      hookProps: {
        type: 'number',
        defaultValue: defaultPagination.perPage,
        isDefaultAPI: true,
      },
    },
    {
      name: 'page',
      hookProps: {
        type: 'number',
        defaultValue: defaultPagination.page,
        isDefaultAPI: true,
      },
    },
  ])

  const {
    data: userList,
    isLoading,
    isError,
  } = useQuery(queryKeys.users.getAll(apiFilter), () => userAPI.getAll(apiFilter))

  const pagination = {
    page: filter.page,
    perPage: filter.perPage,
    total: userList?.pageInfo?.total,
  }

  const handlePageChange = ({ current, pageSize }) => {
    onFilterChange({ perPage: pageSize, page: current })
  }

  return (
    <CommonContent breadcrumb={breadcrumb} isError={isError}>
      <UserFilter
        filter={filter}
        filterList={filterList}
        filterForm={filterForm}
        onChange={onFilterChange}
        onReset={onResetFilter}
      />
      <UserTable
        data={userList?.data || []}
        isLoading={isLoading}
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </CommonContent>
  )
}

UserList.propTypes = {}

export default UserList
