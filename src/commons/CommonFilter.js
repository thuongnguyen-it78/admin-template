import { Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd'
import FilterCard from './FilterCard'

function CommonFilter({ isExpand = true, dataSource = [], form, onReset, onFinish }) {
  const renderFilterItem = ({ name, type, formProps, ...rest }) => {
    let Component

    switch (type) {
      case 'input':
        Component = Input
        break

      case 'number':
        Component = InputNumber
        break

      case 'date':
        Component = DatePicker
        rest.format = 'DD/MM/YYYY'
        break

      case 'select':
        Component = Select
        if (rest.option) {
          const { list, valueKey = 'id', labelKey = 'name' } = rest.option
          rest.children = list.map((item) => (
            <Select.Option key={item.id} value={item[valueKey]}>
              {item[labelKey]}
            </Select.Option>
          ))
        }

        break

      default:
        Component = Input
        break
    }

    return (
      <Col xxl={4} lg={8} md={12} sm={12} xs={24} key={name}>
        <Form.Item className="mb-2" name={name} {...formProps}>
          <Component className="w-100" allowClear {...rest} />
        </Form.Item>
      </Col>
    )
  }

  return (
    <Form form={form} onFinish={onFinish} className="common-filter">
      <FilterCard isExpand={isExpand} onReset={onReset}>
        <Row gutter={[8, 8]}>{dataSource?.map(({ name, formProps }) => renderFilterItem({ name, ...formProps }))}</Row>
      </FilterCard>
    </Form>
  )
}

CommonFilter.propTypes = {}

export default CommonFilter
