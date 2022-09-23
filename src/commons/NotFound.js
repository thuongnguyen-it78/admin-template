import { Alert, Button } from 'antd'
import notFoundData from 'assets/lotties/not-found.json'
import { DASHBOARD_PATH } from 'constants/path'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

function NotFound(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className="text-center">
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className="flex-center mb-3">
        <Alert message="Trang không tồn tại..." type="error" showIcon />
      </div>
      <Link to={DASHBOARD_PATH}>
        <Button type="primary" icon={<ArrowLeftOutlined />}>
          Quay về trang chủ
        </Button>
      </Link>
    </div>
  )
}

NotFound.propTypes = {}

export default NotFound
