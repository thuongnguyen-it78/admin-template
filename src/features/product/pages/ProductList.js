import { Form } from 'antd'
import CommonContent from 'commons/CommonContent'
import { userStatusList } from 'constants/user'
import useFilter from 'hooks/useFilter'
import { defaultPagination } from 'utils/common'
import { checkDisableFrom, checkDisableTo } from 'utils/form'
import ProductFilter from '../components/ProductFilter'
import ProductTable from '../components/ProductTable'

function ProductList(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Danh sách sản phẩm' }]
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

  const { filter, onFilterChange, onResetFilter } = useFilter([
    ...filterList,
    {
      name: 'perPage',
      hookProps: {
        dataType: 'number',
        defaultValue: defaultPagination.perPage,
      },
    },
    {
      name: 'page',
      hookProps: {
        dataType: 'number',
        defaultValue: defaultPagination.page,
      },
    },
  ])


  return (
    <CommonContent breadcrumb={breadcrumb}>
      <ProductFilter
        filter={filter}
        filterList={filterList}
        filterForm={filterForm}
        onChange={onFilterChange}
        onReset={onResetFilter}
      />
      <ProductTable />
    </CommonContent>
  )
}

ProductList.propTypes = {}

export default ProductList
