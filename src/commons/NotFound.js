import { Button } from 'antd'
import notFoundData from 'assets/lotties/not-found.json'
import { DASHBOARD_PATH } from 'constants/path'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'

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
    <div className="not-found">
      <div className="text-center">
        <Lottie options={defaultOptions} height={400} width={400} />
        <Link to={DASHBOARD_PATH}>
          <Button type="primary">Quay về trang chủ</Button>
        </Link>
      </div>
    </div>
  )
}

NotFound.propTypes = {}

export default NotFound
