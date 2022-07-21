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
    <div className="not-found">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

CommonError.propTypes = {}

export default CommonError
