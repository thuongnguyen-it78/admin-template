import { message } from 'antd'
import CommonCard from 'commons/CommonCard'
import CommonContent from 'commons/CommonContent'
import CommonStatus from 'commons/CommonStatus'
import { userStatusList } from 'constants/user'
import { findAndRenderStatus } from 'utils/array'
const CURRENT_STATUS = 1

function ButtonList(props) {
  const breadcrumb = [{ path: '', active: true, name: 'Danh sách thao tác với status' }]

  return (
    <CommonContent breadcrumb={breadcrumb}>
      <CommonCard title="Hiển thị ra status hiện tại">{findAndRenderStatus(userStatusList, 1)}</CommonCard>
      <CommonCard title="Hiển thị ra status hiện tại và cho thay đổi" className="mt-3">
        <CommonStatus
          statusList={userStatusList}
          status={CURRENT_STATUS}
          onChange={(value) => message.success('Thay đổi trạng thái thành công')}
        />
      </CommonCard>
    </CommonContent>
  )
}

ButtonList.propTypes = {}

export default ButtonList
