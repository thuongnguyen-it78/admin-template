import { Space } from 'antd'
import {
  AddButton,
  CancelButton,
  ConfirmButton,
  DeleteButton,
  EditButton,
  SaveButton,
  ViewButton,
} from 'commons/CommonButton'
import CommonCard from 'commons/CommonCard'
import CommonContent from 'commons/CommonContent'

function ButtonList(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Danh sách button thông dụng' }]

  return (
    <CommonContent breadcrumb={breadcrumb}>
      <CommonCard>
        <Space>
          <AddButton>Thêm</AddButton>
          <EditButton>Sửa</EditButton>
          <DeleteButton>Xóa</DeleteButton>
          <ViewButton>Xem chi tiết</ViewButton>
          <SaveButton>Cập nhật</SaveButton>
          <CancelButton>Hủy bỏ</CancelButton>
          <ConfirmButton button={<CancelButton>Hủy bỏ có xác nhận</CancelButton>} />
        </Space>
      </CommonCard>
    </CommonContent>
  )
}

ButtonList.propTypes = {}

export default ButtonList
