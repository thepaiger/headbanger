import ReactPlayer from 'react-player/youtube'

const ReviewVideo = ({musicVideo}) => {
  return (
    <div>
      <ReactPlayer url={musicVideo} />
    </div>
  )
}

export default ReviewVideo;