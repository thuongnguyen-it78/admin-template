import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function ProgressBarLoading(props) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(Math.floor(Math.random() * 40) + 40)
  }, [])

  return (
    <LoadingBar
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      style={{ background: 'red' }}
    />
  )
}

ProgressBarLoading.propTypes = {}

export default ProgressBarLoading
