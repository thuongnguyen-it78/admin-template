import React, { useState } from 'react'
import { Button, message } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import moment from 'moment'
import FileDownload from 'js-file-download'

const ExportButton = ({ children = 'Xuất dữ liệu', fileName = '', exportAPI, ...rest }) => {
  const [exporting, setExporting] = useState(false)

  const exportFile = async () => {
    setExporting(true)
    const name = fileName + '_' + moment().format('DDMMYYYY-HHmm') + '.xlsx'
    try {
      const response = await exportAPI()
      if (!response) {
        message.error('Xuất dữ liệu lỗi. Kiểm tra kết nối hệ thống')
        return
      }
      FileDownload(response, name.replace(/\s/gm, '_'))
    } catch (error) {
      message.error('Xuất dữ liệu lỗi. Kiểm tra kết nối hệ thống')
    } finally {
      setExporting(false)
    }
  }

  return (
    <Button ghost type="primary" icon={<DownloadOutlined />} loading={exporting} onClick={exportFile} {...rest}>
      {children}
    </Button>
  )
}
export default ExportButton
