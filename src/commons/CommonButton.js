import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined, SaveOutlined, UndoOutlined } from '@ant-design/icons/'
import { Button, Popconfirm } from 'antd'
import React from 'react'

export const AddButton = ({ children, ...rest }) => (
  <Button icon={<PlusOutlined />} type="primary" {...rest}>
    {children}
  </Button>
)

export const EditButton = ({ children, ...rest }) => (
  <Button icon={<EditOutlined />} type="primary" {...rest}>
    {children}
  </Button>
)

export const DeleteButton = ({ children, ...rest }) => (
  <Button icon={<DeleteOutlined />} type="primary" danger ghost {...rest}>
    {children}
  </Button>
)

export const ViewButton = ({ children, ...rest }) => (
  <Button icon={<EyeOutlined />} type="primary" {...rest}>
    {children}
  </Button>
)

export const SaveButton = ({ children, ...rest }) => (
  <Button icon={<SaveOutlined />} type="primary" {...rest}>
    {children}
  </Button>
)

export const CancelButton = ({ children, ...rest }) => (
  <Button icon={<UndoOutlined />} type="primary" danger ghost {...rest}>
    {children}
  </Button>
)

export const ConfirmButton = ({
  title = 'Bạn có chắc chắn thực hiện?',
  okText = 'Đồng ý',
  cancelText = 'Hủy',
  button,
  ...rest
}) => (
  <Popconfirm title={title} okText={okText} cancelText={cancelText} {...rest}>
    {button}
  </Popconfirm>
)
// {React.cloneElement(button, { ...rest })}
