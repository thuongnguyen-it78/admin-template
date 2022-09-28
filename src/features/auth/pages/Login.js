import { useMutation } from '@tanstack/react-query'
import { Button, Checkbox, Form, Input, message, Typography } from 'antd'
import authAPI from 'api/authAPI'
import { localStorageKeys } from 'constants/config'
import { DASHBOARD_PATH } from 'constants/path'
import useAuth from 'hooks/userAuth'
import { useNavigate } from 'react-router-dom'
import { getItemLocalStorage, setItemLocalStorage } from 'utils/common'
import { LoginOutlined } from '@ant-design/icons'
const size = 'large'

function Login(props) {
  const navigate = useNavigate()
  const { onAuthChange } = useAuth()

  const initialValues = getItemLocalStorage(localStorageKeys.LOGIN_FORM_VALUE) || {
    username: '',
    password: '',
    remember: false,
  }

  const { mutateAsync: login, isLoading: loginLoading } = useMutation(authAPI.login, {
    onError: () => {
      message.error('Đăng nhập không thành công')
    },
    onSuccess: (data) => {      
      onAuthChange(data)
      message.success('Đăng nhập thành công')
      navigate(DASHBOARD_PATH)
    },
  })

  const handleFinish = async (values) => {
    await login(values)
    if (values.remember) {
      setItemLocalStorage(localStorageKeys.LOGIN_FORM_VALUE, values)
    }
  }

  return (
    <div className="login">
      <Form name="basic" initialValues={initialValues} onFinish={handleFinish} autoComplete="off">
        <Typography.Title level={3} className="mb-4">Đăng nhập</Typography.Title>
        <Form.Item name="username" rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
          <Input placeholder="Email" size={size} />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
          <Input.Password placeholder="Mật khẩu" size={size} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox size={size}>Nhớ mật khẩu</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loginLoading}
            className="w-100 d-block"
            size={size}
            icon={<LoginOutlined />}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

Login.propTypes = {}

export default Login
