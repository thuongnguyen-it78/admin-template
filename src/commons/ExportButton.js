import React, { useState } from 'react'
import { Button, message } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import moment from 'moment'
import FileDownload from 'js-file-download'

const ExportButton = ({ label, fileName, exportAPI, buttonProps }) => {
  const [exporting, setExport] = useState(false)

  const exportFile = async () => {
    setExport(true)
    const name = fileName + '_' + moment().format('DDMMYYYY-HHmm') + '.xlsx'
    try {
      const response = await exportAPI()
      if (res) {
        FileDownload(response, name.replace(/\s/gm, '_'))
      } else {
        message.error('Xuất dữ liệu lỗi. Kiểm tra kết nối hệ thống')
      }
      setExport(false)
    } catch (error) {
      message.error('Xuất dữ liệu lỗi. Kiểm tra kết nối hệ thống')
      setExport(false)
    }
  }

  return (
    <Button ghost loading={exporting} onClick={exportFile} type="primary" icon={<DownloadOutlined />} {...buttonProps}>
      {label}
    </Button>
  )
}
export default ExportButton
