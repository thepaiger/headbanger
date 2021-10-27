const HomeAdditionalReview = ({ reviewData }) => {
  return (
    <div className="home-additional-review-div card">
      <div className="album-title-div">
        <div className="album-picture-div">
          <img
            className="album-picture"
            src={reviewData.fields.albumPicture}
            alt="album artwork"
          ></img>
        </div>
        <div className="title-div">
          <h3 className="band-name">{reviewData.fields.bandName}</h3>
          <h4 className="album-name">{reviewData.fields.albumName}</h4>
        </div>
      </div>
      <p className="review-text">
        {reviewData.fields.reviewText.substring(0, 200)}...
      </p>
    </div>
  );
};

export default HomeAdditionalReview;
