import { Form } from 'antd'
import CommonFilter from 'commons/CommonFilter'
import { userStatusList } from 'constants/user'
import { useEffect } from 'react'
import { formatValueFilter } from 'utils/filter'
import { checkDisableFrom, checkDisableTo } from 'utils/form'
import { resetObject } from 'utils/object'

function ProductFilter({ filter, onChange, onReset }) {
  const [form] = Form.useForm()

  const handleResetFilter = () => {
    form.setFieldsValue(resetObject(filter))
    onReset?.()
  }

  useEffect(() => {
    let cloneFilter = formatValueFilter(filter)
    form.setFieldsValue(cloneFilter)
  }, [filter, form])

  const handleFinish = (values) => {
    onChange?.(values)
  }

  const filterList = [
    {
      name: 'member_id',
      type: 'input',
      placeholder: 'ID',
    },

    {
      name: 'member_name',
      type: 'input',
      placeholder: 'Tên DnC',
    },

    {
      name: 'gift_name',
      type: 'input',
      placeholder: 'Tên quà tặng',
    },

    {
      name: 'status',
      type: 'select',
      placeholder: 'Trạng thái',
      option: { list: userStatusList },
    },

    {
      name: 'created_from',
      type: 'date',
      placeholder: 'Ngày tạo từ',
      disabledDate: (value) => checkDisableFrom(value, 'created_to', form),
    },

    {
      name: 'created_to',
      type: 'date',
      placeholder: 'Ngày tạo đến',
      disabledDate: (value) => checkDisableTo(value, 'created_from', form),
    },
  ]

  return <CommonFilter dataSource={filterList} form={form} onReset={handleResetFilter} onFinish={handleFinish} />
}
ProductFilter.propTypes = {}

export default ProductFilter
