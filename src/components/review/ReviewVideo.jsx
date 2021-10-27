import ReactPlayer from "react-player/youtube";

const ReviewVideo = ({ musicVideo }) => {
  return (
    <div className="video">
      <ReactPlayer url={musicVideo} />
    </div>
  );
};

export default ReviewVideo;
