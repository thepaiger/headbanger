import ReactPlayer from "react-player/youtube";

const ReviewVideo = ({ musicVideo }) => {
  return (
    <div className="video-div">
      <ReactPlayer
        className="react-player"
        url={musicVideo}
        alt="music video"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ReviewVideo;
