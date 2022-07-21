import notFoundData from 'assets/lotties/not-found.json'
import Lottie from 'react-lottie'

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
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

NotFound.propTypes = {}

export default NotFound
