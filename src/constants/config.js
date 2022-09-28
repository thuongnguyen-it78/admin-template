import { Empty } from 'antd'

export const antDConfig = {
  renderEmpty: () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có dữ liệu" />,
}

export const API_URL = process.env.REACT_APP_API_URL || 'https://andres-api.herokuapp.com/api/v1'

export const localStorageKeys = {
  AUTH: 'auth',
  LOGIN_FORM_VALUE: 'loginFormValue'
}
