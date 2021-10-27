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

{
  /* <iframe width="100%" height="100%" src={musicVideo} /> */
}
{
  /* <iframe
        // width="560"
        // height="315"
        // width="100%"
        // height="100%"
        width="853"
        height="480"
        src={musicVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */
}
{
  /* <iframe
        width="853"
        height="480"
        url={musicVideo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      /> */
}
