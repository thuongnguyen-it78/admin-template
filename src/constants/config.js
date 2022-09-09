import { Empty } from 'antd'

export const antDConfig = {
  renderEmpty: () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có dữ liệu" />,
}

export const API_URL = process.env.REACT_APP_API_URL || 'https://api-dev.estuary.solutions:8443/poca-admin-panel-api-dev-s2/v1'

export const localStorageKeys = {
  AUTH: 'auth',
  LOGIN_FORM_VALUE: 'loginFormValue'
}
