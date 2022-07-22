import CommonContent from 'commons/CommonContent'
import ProductFilter from '../components/ProductFilter'
import ProductTable from '../components/ProductTable'

function ProductList(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Danh sách sản phẩm' }]
  return (
    <CommonContent breadcrumb={breadcrumb}>
      <ProductFilter />
      <ProductTable />
    </CommonContent>
  )
}

ProductList.propTypes = {}

export default ProductList
