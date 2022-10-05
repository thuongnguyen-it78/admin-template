import { Modal, Space } from 'antd'
import { CancelButton, ConfirmButton, SaveButton } from './CommonButton'

function CommonModal({
  title,
  children,
  cancelText = 'Hủy bỏ',
  okText = 'Đồng ý',
  loading = true,
  onCancel,
  onOk,
  ...rest
}) {
  return (
    <Modal
      title={<b>{title}</b>}
      width={800}
      onCancel={onCancel}
      {...rest}
      footer={
        <div className="d-flex">
          <Space style={{ marginLeft: 'auto' }}>
            <CancelButton disabled={loading} onClick={onCancel}>
              {cancelText}
            </CancelButton>

            <ConfirmButton onConfirm={onOk} button={<SaveButton loading={loading}>{okText}</SaveButton>} />
          </Space>
        </div>
      }
    >
      {children}
    </Modal>
  )
}

CommonModal.propTypes = {}

export default CommonModal
