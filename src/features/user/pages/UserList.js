import { useQuery } from '@tanstack/react-query'
import { Form } from 'antd'
import userAPI from 'api/userAPI'
import CommonContent from 'commons/CommonContent'
import HookFilter from 'commons/HookFilter'
import { defaultPagination } from 'constants/common'
import { userStatusList } from 'constants/user'
import useFilter from 'hooks/useFilter'
import { checkDisableFrom, checkDisableTo } from 'utils/form'
import UserTable from '../components/UserTable'

function ProductList(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Danh sách người dùng' }]
  const [filterForm] = Form.useForm()

  const filterList = [
    {
      name: 'id',
      hookProps: {
        type: 'number',
      },
      formProps: {
        type: 'number',
        placeholder: 'ID',
      },
    },
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
      name: 'phone',
      hookProps: {
        type: 'string',
      },
      formProps: {
        type: 'input',
        placeholder: 'Số điện thoại',
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
      },
    },
    {
      name: 'page',
      hookProps: {
        type: 'number',
        defaultValue: defaultPagination.page,
      },
    },
  ])

  const { data, isLoading, isError } = useQuery(['user-list', apiFilter], () => userAPI.getAll(apiFilter))

  const handlePageChange = ({ current, pageSize }) => {
    onFilterChange({ perPage: pageSize, page: current })
  }

  const pagination = {
    page: filter.page,
    perPage: filter.perPage,
    total: data?.total,
  }

  console.log(data)

  return (
    <CommonContent breadcrumb={breadcrumb} isError={isError}>
      <HookFilter
        filter={filter}
        filterList={filterList}
        filterForm={filterForm}
        onChange={onFilterChange}
        onReset={onResetFilter}
      />
      <UserTable data={data?.data} pagination={pagination} isLoading={isLoading} onPageChange={handlePageChange} />
    </CommonContent>
  )
}

ProductList.propTypes = {}

export default ProductList
