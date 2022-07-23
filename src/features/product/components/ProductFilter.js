import CommonFilter from 'commons/CommonFilter'
import { useEffect } from 'react'
import { formatValueFilter } from 'utils/filter'
import { resetObject } from 'utils/object'

function ProductFilter({ filter, filterList, filterForm, onChange, onReset }) {
  const handleResetFilter = () => {
    filterForm.setFieldsValue(resetObject(filter))
    onReset?.()
  }

  useEffect(() => {
    let cloneFilter = formatValueFilter(filter)
    filterForm.setFieldsValue(cloneFilter)
  }, [filter, filterForm])

  const handleFinish = (values) => {
    onChange?.(values)
  }

  return <CommonFilter dataSource={filterList} form={filterForm} onReset={handleResetFilter} onFinish={handleFinish} />
}
ProductFilter.propTypes = {}

export default ProductFilter
