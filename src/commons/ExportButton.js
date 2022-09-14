import React, { useState } from 'react'
import { Button, message } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import moment from 'moment'
import FileDownload from 'js-file-download'

const ExportButton = ({ children, fileName, exportAPI, buttonProps }) => {
  const [exporting, setExporting] = useState(false)

  const exportFile = async () => {
    setExporting(true)
    const name = fileName + '_' + moment().format('DDMMYYYY-HHmm') + '.xlsx'
    try {
      const response = await exportAPI()
      if (response) {
        FileDownload(response, name.replace(/\s/gm, '_'))
      } else {
        message.error('Xuất dữ liệu lỗi. Kiểm tra kết nối hệ thống')
      }
      setExporting(false)
    } catch (error) {
      message.error('Xuất dữ liệu lỗi. Kiểm tra kết nối hệ thống')
      setExporting(false)
    }
  }

  return (
    <Button ghost loading={exporting} onClick={exportFile} type="primary" icon={<DownloadOutlined />} {...buttonProps}>
      {children || 'Xuất dữ liệu'}
    </Button>
  )
}
export default ExportButton
