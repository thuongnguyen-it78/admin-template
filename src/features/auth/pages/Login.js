import { useMutation } from '@tanstack/react-query'
import { Button, Checkbox, Form, Input, message } from 'antd'
import authAPI from 'api/authAPI'
import { localStorageKeys } from 'constants/config'
import { DASHBOARD_PATH } from 'constants/path'
import useAuth from 'hooks/userAuth'
import { useNavigate } from 'react-router-dom'
import { getItemLocalStorage, setItemLocalStorage } from 'utils/common'

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
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={initialValues}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Form.Item label="Email" name="username" rules={[{ required: true, message: 'Vui lòng nhập email' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Nhớ mật khẩu</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loginLoading}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

Login.propTypes = {}

export default Login
