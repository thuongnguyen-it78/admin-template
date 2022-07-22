import CommonContent from 'commons/CommonContent'
import useFilter from 'hooks/useFilter'
import { defaultPagination } from 'utils/common'
import ProductFilter from '../components/ProductFilter'
import ProductTable from '../components/ProductTable'

function ProductList(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Danh sách sản phẩm' }]

  const { filter, onFilterChange, onResetFilter } = useFilter([
    {
      key: 'name',
      type: 'number',
    },
    {
      key: 'statusIds',
      type: 'array',
      defaultValue: [],
      split: ',',
    },
    {
      name: 'perPage',
      type: 'number',
      defaultValue: defaultPagination.perPage,
    },
    {
      name: 'page',
      type: 'number',
      defaultValue: defaultPagination.page,
    },
  ])

  return (
    <CommonContent breadcrumb={breadcrumb}>
      <ProductFilter filter={filter} onFilterChange={onFilterChange} onResetFilter={onResetFilter} />
      <ProductTable />
    </CommonContent>
  )
}

ProductList.propTypes = {}

export default ProductList
