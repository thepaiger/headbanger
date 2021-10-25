import ReactPlayer from 'react-player/youtube'

const ReviewVideo = ({musicVideo}) => {
  return (
    <div>
      <h5>ReviewVideo</h5>
      
      <ReactPlayer url={musicVideo} />
    </div>
  )
}

export default ReviewVideo;