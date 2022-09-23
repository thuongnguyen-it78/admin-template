import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons/'
import { Button } from 'antd'

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
  <Button icon={<DeleteOutlined />} type="primary" {...rest}>
    {children}
  </Button>
)

export const ViewButton = ({ children, ...rest }) => (
  <Button icon={<EyeOutlined />} type="primary" {...rest}>
    {children}
  </Button>
)
