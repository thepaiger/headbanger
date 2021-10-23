import ReactPlayer from 'react-player/youtube'

const ReviewVideo = ({reviewData}) => {
  return (
    <div>
      <h5>ReviewVideo</h5>
      
      <ReactPlayer url={reviewData.fields.musicVideo} />


      {/* <iframe width="560" height="315" src={reviewData.fields.musicVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  )
}

export default ReviewVideo;