import { Form } from 'antd'
import CommonContent from 'commons/CommonContent'
import { userStatusList } from 'constants/user'
import useFilter from 'hooks/useFilter'
import { defaultPagination } from 'constants/common'
import { checkDisableFrom, checkDisableTo } from 'utils/form'
import ProductFilter from '../components/ProductFilter'
import ProductTable from '../components/ProductTable'
import { useQuery } from '@tanstack/react-query'
import productAPI from 'api/productAPI'

function ProductList(props) {
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

  const { data: productList, isLoading, isError } = useQuery(['product-list', apiFilter], () => productAPI.getAll(apiFilter))

  const pagination = {
    page: filter.page,
    perPage: filter.perPage,
    total: productList?.pageInfo?.total,
  }

  const handlePageChange = ({ current, pageSize }) => {
    onFilterChange({ perPage: pageSize, page: current })
  }

  return (
    <CommonContent breadcrumb={breadcrumb} isError={isError}>
      <ProductFilter
        filter={filter}
        filterList={filterList}
        filterForm={filterForm}
        onChange={onFilterChange}
        onReset={onResetFilter}
      />
      <ProductTable
        data={productList?.data || []}
        isLoading={isLoading}
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </CommonContent>
  )
}

ProductList.propTypes = {}

export default ProductList
