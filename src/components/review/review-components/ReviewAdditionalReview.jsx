const ReviewAdditionalReview = ({ additionalReview }) => {
  return (
    <div className="review-additional-review-div card div-hover">
      <div className="album-title-div">
        <div className="album-picture-div">
          <img
            className="album-picture"
            src={additionalReview.fields.albumPicture}
            alt="album artwork"
          />
        </div>
        <div className="title-div">
          <h3 className="band-name">{additionalReview.fields.bandName}</h3>
          <h4 className="album-name">{additionalReview.fields.albumName}</h4>
        </div>
      </div>
      <p className="review-text">
        {additionalReview.fields.reviewText.substring(0, 200)}...
      </p>
    </div>
  );
};

export default ReviewAdditionalReview;
