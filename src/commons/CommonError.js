import { Alert } from 'antd'
import errorData from 'assets/lotties/error.json'
import Lottie from 'react-lottie'

function CommonError(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className="common-error">
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className="flex-center mb-3"><Alert message="Hệ thống đang bị lỗi..." type="error" showIcon /></div>
    </div>
  )
}

CommonError.propTypes = {}

export default CommonError
