import { Empty } from 'antd'

export const antDConfig = {
  renderEmpty: () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có dữ liệu" />,
}

export const API_URL = process.env.REACT_APP_API_URL

export const localStorageKeys = {
  AUTH: 'auth',
}