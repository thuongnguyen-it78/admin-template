import { DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, Modal } from 'antd'
import { findAndRenderStatus, findInArr } from 'utils/array'

function CommonStatus({ statusList, status, onChange }) {
  const confirm = (value) => {
    Modal.confirm({
      title: 'Xác nhận thay đổi trạng thái',
      icon: <ExclamationCircleOutlined />,
      content: (
        <span>Bạn có chắc chắn đổi thành trạng thái {findAndRenderStatus(statusList, Number(value.key))} không?</span>
      ),
      cancelText: 'Hủy bỏ',
      okText: 'Đồng ý',
      onOk: () => {
        onChange?.(value?.key)
      },
    })
  }

  const menu = () => {
    const currentStatus = findInArr(statusList, status)
    const changeIds = currentStatus?.changeIds ? currentStatus?.changeIds : []
    return (
      <Menu onClick={(value) => confirm(value)}>
        {statusList
          .filter(({ id }) => changeIds.includes(id))
          .map((value) => (
            <Menu.Item key={value.id} value={value}>
              {value.name}
            </Menu.Item>
          ))}
      </Menu>
    )
  }

  return (
    <>
      {findAndRenderStatus(statusList, status)}
      <Dropdown overlay={menu()} trigger={['click']}>
        <Button type="link" icon={<DownOutlined />}>
          Thay đổi
        </Button>
      </Dropdown>
    </>
  )
}

CommonStatus.propTypes = {}

export default CommonStatus
